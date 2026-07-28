#!/usr/bin/env python3
"""MyKey booking backend.

Serves the static frontend (booking page, admin) and exposes a JSON API that:
  - stores bookings in data/bookings.json
  - fans a new booking out to THREE delivery channels, each config-gated:
      * email   -> MYKEYPOCKET@ICLOUD.COM via iCloud SMTP
      * telegram-> a Telegram chat via Bot API
      * sheet    -> a Google Sheet via an Apps Script webhook URL
  - if a channel is unconfigured OR fails, the message is queued
    (data/queue/<channel>.json) so it can be flushed once configured.
  - exposes /api/status so you can see which channels are live.

No third-party Python libs required (stdlib only). Telegram + Sheets use HTTPS.
Email uses smtplib. Run:  python3 backend.py   (listens on :8090)
Config via environment variables or a config.json next to this file.
"""
import json
import os
import re
import smtplib
import ssl
import threading
import urllib.request
import urllib.error
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE / "data"
DATA.mkdir(exist_ok=True)
BOOKINGS_FILE = DATA / "bookings.json"
QUEUE_DIR = DATA / "queue"
QUEUE_DIR.mkdir(exist_ok=True)

# ---- config (env wins, then config.json) -------------------------------------
_cfg = {}
_cfg_path = HERE / "config.json"
if _cfg_path.exists():
    try:
        _cfg = json.loads(_cfg_path.read_text())
    except Exception:
        _cfg = {}

def conf(key, default=None):
    return os.environ.get(key, _cfg.get(key, default))

CONFIG = {
    "email": {
        "enabled": bool(conf("EMAIL_FROM") and conf("EMAIL_TO")),
        "smtp_host": conf("EMAIL_SMTP_HOST", "smtp.mail.me.com"),
        "smtp_port": int(conf("EMAIL_SMTP_PORT", "587")),
        "user": conf("EMAIL_FROM"),
        "to": conf("EMAIL_TO", "MYKEYPOCKET@ICLOUD.COM"),
        "pass": conf("EMAIL_APP_PASSWORD"),
        "use_tls": conf("EMAIL_USE_TLS", "true").lower() in ("1", "true", "yes"),
    },
    "telegram": {
        "enabled": bool(conf("TELEGRAM_BOT_TOKEN") and conf("TELEGRAM_CHAT_ID")),
        "token": conf("TELEGRAM_BOT_TOKEN"),
        "chat_id": conf("TELEGRAM_CHAT_ID"),
        "api_base": conf("TELEGRAM_API_BASE", "https://api.telegram.org"),
    },
    "sheet": {
        "enabled": bool(conf("GOOGLE_SHEETS_WEBHOOK")),
        "webhook": conf("GOOGLE_SHEETS_WEBHOOK"),
        "local_file": conf("SHEET_LOCAL_FILE"),
    },
}

_lock = threading.Lock()

def load_bookings():
    if BOOKINGS_FILE.exists():
        try:
            return json.loads(BOOKINGS_FILE.read_text())
        except Exception:
            return []
    return []

def save_bookings(arr):
    with _lock:
        BOOKINGS_FILE.write_text(json.dumps(arr, indent=2))

def queue_path(channel):
    return QUEUE_DIR / f"{channel}.json"

def load_queue(channel):
    p = queue_path(channel)
    if p.exists():
        try:
            return json.loads(p.read_text())
        except Exception:
            return []
    return []

def save_queue(channel, items):
    with _lock:
        queue_path(channel).write_text(json.dumps(items, indent=2))

# ---- delivery adapters --------------------------------------------------------
def fmt(b):
    svc = (b.get("service") or {}).get("name") or b.get("serviceName") or "—"
    price = (b.get("service") or {}).get("price", b.get("total"))
    price = "Free" if price in (0, None) else f"${price}"
    lines = [
        f"New booking — MyKey / Rudy's Fremont",
        f"Service : {svc}  ({price})",
        f"Client  : {b.get('name','')}",
        f"Contact : {b.get('phone','')}  {b.get('email','')}",
        f"When    : {b.get('date','')} {b.get('time','')}",
    ]
    if b.get("notes"):
        lines.append(f"Notes   : {b['notes']}")
    return "\n".join(lines)

def deliver_email(b):
    c = CONFIG["email"]
    if not c["enabled"]:
        return False, "not configured"
    name = b.get("name", "")
    text = fmt(b)
    # Build an RFC-5322 message with UTF-8 support
    from email.message import EmailMessage
    msg = EmailMessage()
    msg["From"] = c["user"]
    msg["To"] = c["to"]
    msg["Subject"] = f"New booking: {name}"
    msg.set_content(text)
    ctx = ssl.create_default_context()
    try:
        with smtplib.SMTP(c["smtp_host"], c["smtp_port"], timeout=15) as s:
            if c.get("use_tls", True):
                s.starttls(context=ctx)
            if c.get("pass"):
                s.login(c["user"], c["pass"])
            s.send_message(msg)
        return True, "sent"
    except Exception as e:
        return False, str(e)

def deliver_telegram(b):
    c = CONFIG["telegram"]
    if not c["enabled"]:
        return False, "not configured"
    url = f"{c['api_base'].rstrip('/')}/bot{c['token']}/sendMessage"
    payload = json.dumps({
        "chat_id": c["chat_id"], "text": fmt(b),
    }).encode()
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return (True, "sent") if r.status == 200 else (False, f"http {r.status}")
    except Exception as e:
        return False, str(e)

def deliver_sheet(b):
    c = CONFIG["sheet"]
    if not c["enabled"]:
        return False, "not configured"
    row = {
        "name": b.get("name", ""), "service": (b.get("service") or {}).get("name", ""),
        "price": (b.get("service") or {}).get("price", b.get("total", "")),
        "date": b.get("date", ""), "time": b.get("time", ""),
        "phone": b.get("phone", ""), "email": b.get("email", ""),
        "notes": b.get("notes", ""), "status": b.get("status", "booked"),
        "created": b.get("created", ""),
    }
    if c.get("local_file"):  # local demo target instead of a webhook
        try:
            fp = Path(c["local_file"])
            rows = json.loads(fp.read_text()) if fp.exists() else []
            rows.append(row)
            fp.write_text(json.dumps(rows, indent=2))
            return True, "sent(local)"
        except Exception as e:
            return False, str(e)
    req = urllib.request.Request(c["webhook"], data=json.dumps(row).encode(),
                                 headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return (True, "sent") if r.status == 200 else (False, f"http {r.status}")
    except Exception as e:
        return False, str(e)

DELIVERERS = {"email": deliver_email, "telegram": deliver_telegram, "sheet": deliver_sheet}

def fan_out(b):
    """Try every channel; queue those that are unconfigured or fail."""
    report = {}
    for ch, fn in DELIVERERS.items():
        ok, detail = fn(b)
        report[ch] = {"ok": ok, "detail": detail}
        if not ok:
            q = load_queue(ch)
            q.append({"booking": b, "at": datetime.now(timezone.utc).isoformat(), "error": detail})
            save_queue(ch, q)
    return report

# ---- HTTP handler ------------------------------------------------------------
class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def _send(self, code, obj=None, body=None, ctype="application/json"):
        if body is None and obj is not None:
            body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        if body:
            self.wfile.write(body if isinstance(body, bytes) else body.encode())

    def do_OPTIONS(self):
        self._send(204)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/api/bookings":
            self._send(200, load_bookings())
        elif path == "/api/status":
            self._send(200, {
                "channels": {k: v["enabled"] for k, v in CONFIG.items()},
                "queues": {ch: len(load_queue(ch)) for ch in DELIVERERS},
                "total_bookings": len(load_bookings()),
            })
        elif path == "/api/admin.html" or path == "/admin":
            self._static("admin.html")
        elif path in ("/", "/index.html"):
            self._static("index.html")
        else:
            # try static file
            fp = (HERE / path.lstrip("/"))
            if fp.exists() and fp.is_file() and fp.resolve().is_relative_to(HERE):
                self._static(fp.name)
            else:
                self._send(404, {"error": "not found"})

    def _static(self, name):
        fp = HERE / name
        ctype = "text/html" if name.endswith(".html") else "application/octet-stream"
        if fp.exists():
            self._send(200, body=fp.read_bytes(), ctype=ctype)
        else:
            self._send(404, {"error": "missing"})

    def do_POST(self):
        path = self.path.split("?")[0]
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(raw or b"{}")
        except Exception:
            self._send(400, {"error": "bad json"}); return

        if path == "/api/booking":
            b = data
            b.setdefault("id", f"bk_{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}_{os.getpid()}")
            b.setdefault("status", "booked")
            b.setdefault("created", datetime.now(timezone.utc).isoformat())
            arr = load_bookings()
            arr.append(b)
            save_bookings(arr)
            report = fan_out(b)
            self._send(200, {"ok": True, "id": b["id"], "delivery": report})
        elif path.startswith("/api/booking/") and path.endswith("/status"):
            bid = path.split("/")[3]
            arr = load_bookings()
            found = None
            for x in arr:
                if x.get("id") == bid:
                    found = x; break
            if not found:
                self._send(404, {"error": "no such booking"}); return
            if data.get("status") == "noshow" and found.get("status") != "noshow":
                found["noShowAt"] = datetime.now(timezone.utc).isoformat()
            else:
                found.pop("noShowAt", None)
            found["status"] = data.get("status", found.get("status"))
            save_bookings(arr)
            self._send(200, {"ok": True})
        elif path == "/api/flush":
            # re-attempt queued items for every channel (used once configured)
            result = {}
            for ch, fn in DELIVERERS.items():
                q = load_queue(ch)
                still = []
                sent = 0
                for item in q:
                    ok, _ = fn(item["booking"])
                    if ok: sent += 1
                    else: still.append(item)
                save_queue(ch, still)
                result[ch] = {"sent": sent, "remaining": len(still)}
            self._send(200, result)
        else:
            self._send(404, {"error": "no such endpoint"})

def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default=None, help="path to config.json")
    ap.add_argument("--port", default=None)
    args = ap.parse_args()
    global CONFIG
    if args.config:
        p = Path(args.config)
        if p.exists():
            CONFIG.update(json.loads(p.read_text()))
    port = int(args.port or conf("PORT", "8090"))
    srv = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"MyKey backend on http://localhost:{port}  (ctrl-c to stop)")
    print("Channels:", {k: v["enabled"] for k, v in CONFIG.items()})
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        srv.shutdown()

if __name__ == "__main__":
    main()
