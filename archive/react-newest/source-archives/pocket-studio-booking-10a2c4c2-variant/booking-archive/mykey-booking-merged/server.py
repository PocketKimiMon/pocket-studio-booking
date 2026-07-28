#!/usr/bin/env python3
"""MyKey Booking — merged booking sessions, voice removed.

Combines:
  - Session A (20260710 "Book MyKey"): dark editorial design + 3-channel
    booking fan-out (email / telegram / sheet).
  - Session B (20260711 pocket-studio): full service menu (incl. AuDHD
    services Let's Find True Self + Silent Cut), travel-to-you, stylist,
    client management.

No voice / no hyprflow / no Paperclip. One page, one backend.
Stdlib only.
"""
import json
import os
import threading
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAGE = HERE / "booking.html"
DATA = HERE / "data"
DATA.mkdir(exist_ok=True)
BOOKINGS_FILE = DATA / "bookings.json"

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
    "businessName": conf("BUSINESS_NAME", "MyKey"),
    "tagline": conf("TAGLINE", "Haircuts & color for the people Rudy's forgot."),
    "providerEmail": conf("PROVIDER_EMAIL", "MYKEYPOCKET@ICLOUD.COM"),
    "location": conf("BASE_LOCATION", "Seattle, WA"),
    "travelFlatFee": float(conf("TRAVEL_FLAT_FEE", "25")),
    "travelPerMile": float(conf("TRAVEL_PER_MILE", "2")),
    "maxTravelRadius": float(conf("MAX_TRAVEL_RADIUS", "30")),
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

# ---- services + stylists ------------------------------------------------------
SERVICES = [
    {"id": "buzz", "name": "Buzz Cut", "duration": "15min+", "price": 28, "desc": "Clipper cut only, no more than two guards, no longer than 1/4 inch. Includes shampoo, scalp massage, condition, hot towel, and flash style."},
    {"id": "short", "name": "Short Cut", "duration": "20min+", "price": 45, "desc": "Short hair shorter than the jawline, using shears, razor, clippers, and trimmers. Includes most fades, shampoo, scalp massage, condition, hot towel, and flash style."},
    {"id": "bald", "name": "Bald Fade", "duration": "30min+", "price": 45, "desc": "Hair transitions from longer on top to bald on the sides and back with a seamless blend. Includes shampoo and quick flash style."},
    {"id": "long", "name": "Long Haircut", "duration": "30min+", "price": 58, "desc": "Long hair with shears, razor, clippers, and trimmers. Includes fringe, layers, texturizing, shampoo, scalp massage, condition, rough blow-dry to 80%, and flash style."},
    {"id": "color-new", "name": "New Color Client", "duration": "consult+", "price": 0, "desc": "Free consultation for new color clients. We talk through what you want, assess your hair, and plan the right color service before booking."},
    {"id": "color-return", "name": "Established Color Client", "duration": "90min+", "price": 120, "desc": "Maintenance color for returning clients. Tone, refresh, root work, or full color with the plan we already built."},
    {"id": "audhd", "name": "AuDHD First-Time Haircut", "duration": "45min+", "price": 55, "desc": "Gentle first haircut built for autistic and ADHD clients — extra time, clear step-by-step communication, low-pressure, no rushing."},
    {"id": "true-self", "name": "Let's Find True Self", "duration": "60min+", "price": 75, "desc": "Identity + haircut session. A relaxed, judgement-free cut while we talk through the look that feels most like you."},
    {"id": "silent", "name": "Silent Cut", "duration": "30min+", "price": 45, "desc": "Quiet, low-social appointment. I only talk when necessary. No small talk, no pressure."},
    {"id": "rudyrescue", "name": "Rudy's Rescue", "duration": "varies", "price": 0, "desc": "If Rudy's canceled your appointment and you found me, let me know in the notes. I'll do my best to get you taken care of."},
]
STYLISTS = [{"id": "mykey", "name": "MyKey", "price": 0}]

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

# ---- visitor counter ----
HITS_FILE = DATA / "hits.json"
_counter_lock = threading.Lock()
def bump_hits():
    n = 0
    with _counter_lock:
        if HITS_FILE.exists():
            try: n = int(HITS_FILE.read_text() or "0")
            except Exception: n = 0
        n += 1
        HITS_FILE.write_text(str(n))
    return n

# ---- guestbook ----
GUEST_FILE = DATA / "guestbook.json"
def load_guestbook():
    if GUEST_FILE.exists():
        try: return json.loads(GUEST_FILE.read_text())
        except Exception: return []
    return []
def save_guestbook(arr):
    with _lock:
        GUEST_FILE.write_text(json.dumps(arr, indent=2))

def load_queue(channel):
    p = DATA / "queue" / f"{channel}.json"
    if p.exists():
        try:
            return json.loads(p.read_text())
        except Exception:
            return []
    return []

def save_queue(channel, items):
    qd = DATA / "queue"
    qd.mkdir(exist_ok=True)
    with _lock:
        (qd / f"{channel}.json").write_text(json.dumps(items, indent=2))

# ---- travel fee (self-contained; no external geocoder required) -------------
def travel_fee(address):
    """Return {available, distance_mi, fee, reason}.
    Uses OpenStreetMap Nominatim for distance when online; falls back to a
    flat fee so the page still works offline / headless."""
    flat = CONFIG["travelFlatFee"]
    per_mile = CONFIG["travelPerMile"]
    max_r = CONFIG["maxTravelRadius"]
    # Try to geocode address -> distance from base location
    try:
        base = urllib.parse.quote(CONFIG["location"])
        q = urllib.parse.quote(address)
        url = f"https://nominatim.openstreetmap.org/search?format=json&limit=1&q={q}"
        req = urllib.request.Request(url, headers={"User-Agent": "mykey-booking/1.0"})
        with urllib.request.urlopen(req, timeout=10) as r:
            res = json.loads(r.read().decode())
        if res:
            lat, lon = float(res[0]["lat"]), float(res[0]["lon"])
            # geocode base
            burl = f"https://nominatim.openstreetmap.org/search?format=json&limit=1&q={base}"
            breq = urllib.request.Request(burl, headers={"User-Agent": "mykey-booking/1.0"})
            with urllib.request.urlopen(breq, timeout=10) as br:
                bres = json.loads(br.read().decode())
            if bres:
                blat, blon = float(bres[0]["lat"]), float(bres[0]["lon"])
                import math
                d = 3958.8 * math.acos(
                    min(1.0, math.sin(math.radians(blat)) * math.sin(math.radians(lat))
                        + math.cos(math.radians(blat)) * math.cos(math.radians(lat))
                        * math.cos(math.radians(blon - lon))))
                if d > max_r:
                    return {"available": False, "distance_mi": round(d, 1),
                            "fee": 0, "reason": f"{round(d,1)} mi — outside {int(max_r)} mi radius"}
                fee = round(flat + per_mile * d, 2)
                return {"available": True, "distance_mi": round(d, 1), "fee": fee}
    except Exception:
        pass
    # Fallback: can't geocode (offline) -> still allow with flat fee estimate
    return {"available": True, "distance_mi": None,
            "fee": round(flat, 2), "reason": "Estimate (geocoding unavailable)"}

# ---- delivery fan-out (reuses the proven mykey-booking design) ---------------
def fmt(b):
    svc = b.get("serviceName") or (b.get("service") or {}).get("name") or "—"
    price = b.get("total")
    price = "Free" if price in (0, None) else f"${price}"
    loc = "Travel to " + b["address"] if b.get("locationType") == "travel" else "At the shop"
    lines = [
        f"New booking — {CONFIG['businessName']} / {CONFIG['location']}",
        f"Service : {svc}  ({price})",
        f"Client  : {b.get('name','')}",
        f"Contact : {b.get('phone','')}  {b.get('email','')}",
        f"When    : {b.get('date','')} {b.get('time','')}",
        f"Where   : {loc}",
    ]
    if b.get("notes"):
        lines.append(f"Notes   : {b['notes']}")
    return "\n".join(lines)

def deliver_email(b):
    c = CONFIG["email"]
    if not c["enabled"]:
        return False, "not configured"
    from email.message import EmailMessage
    msg = EmailMessage()
    msg["From"] = c["user"]
    msg["To"] = c["to"]
    msg["Subject"] = f"New booking: {b.get('name','')}"
    msg.set_content(fmt(b))
    import smtplib, ssl
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
    payload = json.dumps({"chat_id": c["chat_id"], "text": fmt(b)}).encode()
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
    row = {"name": b.get("name", ""), "service": b.get("serviceName", ""),
           "price": b.get("total", ""), "date": b.get("date", ""), "time": b.get("time", ""),
           "location": b.get("locationType", ""), "address": b.get("address", ""),
           "phone": b.get("phone", ""), "email": b.get("email", ""),
           "notes": b.get("notes", ""), "status": b.get("status", "booked"),
           "created": b.get("created", "")}
    if c.get("local_file"):
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
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        if body:
            self.wfile.write(body if isinstance(body, bytes) else body.encode())

    def do_OPTIONS(self):
        self._send(204)

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/api/config":
            self._send(200, {"businessName": CONFIG["businessName"], "tagline": CONFIG["tagline"],
                             "providerEmail": CONFIG["providerEmail"], "location": CONFIG["location"],
                             "travelFlatFee": CONFIG["travelFlatFee"], "travelPerMile": CONFIG["travelPerMile"],
                             "maxTravelRadius": CONFIG["maxTravelRadius"], "services": SERVICES, "stylists": STYLISTS,
                             "channels": {k: v["enabled"] for k, v in CONFIG.items() if isinstance(v, dict) and "enabled" in v}})
        elif path == "/api/bookings":
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get("q", [""])[0]
            arr = load_bookings()
            if q:
                ql = q.lower()
                arr = [b for b in arr if ql in (b.get("name", "") + b.get("email", "")).lower()]
            self._send(200, {"bookings": arr})
        elif path == "/api/callback":
            # no-show clients, ranked oldest no-show first
            arr = load_bookings()
            noshow = [b for b in arr if b.get("status") == "noshow"]
            noshow.sort(key=lambda b: b.get("noShowAt", b.get("created", "")))
            self._send(200, {"bookings": noshow})
        elif path == "/api/hit":
            self._send(200, {"count": bump_hits()})
        elif path == "/api/guestbook":
            if self.command == "POST":
                try:
                    data = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0)) or 0) or b"{}")
                except Exception:
                    self._send(400, {"error": "bad json"}); return
                name = str(data.get("name", "")).strip()[:40] or "anon"
                msg = str(data.get("message", "")).strip()[:400]
                if not msg:
                    self._send(400, {"error": "empty message"}); return
                g = load_guestbook()
                entry = {"name": name, "message": msg, "ts": datetime.now(timezone.utc).isoformat()}
                g.append(entry)
                save_guestbook(g)
                self._send(200, {"ok": True, "entry": entry})
                return
            # GET
            self._send(200, {"entries": load_guestbook()[::-1]})
        elif path in ("/", "/index.html", "/site", "/site.html"):
            # the full unified Mykey Pocket site is the canonical page
            sp = HERE / "site.html"
            if sp.exists():
                self._send(200, body=sp.read_bytes(), ctype="text/html")
            else:
                self._send(404, {"error": "missing page"})
        elif path in ("/booking", "/booking.html"):
            # standalone booking widget (also embedded in the full site)
            bp = HERE / "booking.html"
            if bp.exists():
                self._send(200, body=bp.read_bytes(), ctype="text/html")
            else:
                self._send(404, {"error": "missing page"})
        elif path in ("/branded", "/booking-branded.html"):
            bp = HERE / "booking-branded.html"
            if bp.exists():
                self._send(200, body=bp.read_bytes(), ctype="text/html")
            else:
                self._send(404, {"error": "missing page"})
        elif path == "/booking-frame":
            bp = HERE / "booking.html"
            if bp.exists():
                html = bp.read_text()
                # strip nav header and hero for iframe embed
                head_end = html.find("</head>")
                body = html[head_end + len("</head>"):]
                hstart = body.find("<header")
                hend = body.find("</header>") + len("</header>")
                if hstart != -1 and hend != -1:
                    body = body[:hstart] + body[hend:]
                hero = body.find('<section class="hero">')
                hero_end = body.find("</section>", hero) + len("</section>")
                if hero != -1 and hero_end != -1:
                    body = body[:hero] + body[hero_end:]
                frame_css = "<style>body{background:transparent}.admin-toggle{display:none}section.block{padding-top:0}</style>"
                out = html[:head_end] + frame_css + body
                self._send(200, body=out.encode(), ctype="text/html")
            else:
                self._send(404, {"error": "missing page"})
        else:
            # static assets (css/js) served from this folder
            if path.endswith(".css") or path.endswith(".js"):
                fp = (HERE / path.lstrip("/"))
                if fp.exists() and fp.is_file():
                    ctype = "text/css" if path.endswith(".css") else "application/javascript"
                    self._send(200, body=fp.read_bytes(), ctype=ctype)
                    return
            self._send(404, {"error": "not found"})

    def do_POST(self):
        path = self.path.split("?")[0]
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"

        if path == "/api/travel-fee":
            try:
                data = json.loads(raw or b"{}")
            except Exception:
                self._send(400, {"error": "bad json"}); return
            self._send(200, travel_fee(data.get("address", "")))
            return

        if path == "/api/bookings":
            try:
                data = json.loads(raw or b"{}")
            except Exception:
                self._send(400, {"error": "bad json"}); return
            svc = next((s for s in SERVICES if s["id"] == data.get("serviceId")), None)
            sty = next((s for s in STYLISTS if s["id"] == data.get("stylistId")), None)
            if not svc or not sty:
                self._send(400, {"error": "unknown service or stylist"}); return
            travel_fee_amt = 0
            if data.get("locationType") == "travel":
                tf = travel_fee(data.get("address", ""))
                if not tf["available"]:
                    self._send(400, {"error": tf.get("reason", "outside service area")}); return
                travel_fee_amt = tf["fee"]
            base = max(svc["price"], sty["price"])
            total = base + travel_fee_amt
            b = {
                "id": f"bk_{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}_{os.getpid()}_{os.urandom(2).hex()}",
                "serviceName": svc["name"], "serviceId": svc["id"],
                "stylistName": sty["name"], "stylistId": sty["id"],
                "date": data.get("date", ""), "time": data.get("time", ""),
                "locationType": data.get("locationType", "shop"),
                "address": data.get("address", ""),
                "name": data.get("name", ""), "email": data.get("email", ""),
                "phone": data.get("phone", ""), "notes": data.get("notes", ""),
                "attachments": data.get("attachments", []),
                "travelFee": travel_fee_amt, "total": total,
                "status": "booked", "created": datetime.now(timezone.utc).isoformat(),
            }
            arr = load_bookings()
            arr.append(b)
            save_bookings(arr)
            report = fan_out(b)
            self._send(200, {"ok": True, "id": b["id"], "service": svc, "client": b,
                             "total": total, "delivery": report})
            return

        if path == "/api/guestbook":
            try:
                data = json.loads(raw or b"{}")
            except Exception:
                self._send(400, {"error": "bad json"}); return
            name = str(data.get("name", "")).strip()[:40] or "anon"
            msg = str(data.get("message", "")).strip()[:400]
            if not msg:
                self._send(400, {"error": "empty message"}); return
            g = load_guestbook()
            entry = {"name": name, "message": msg, "ts": datetime.now(timezone.utc).isoformat()}
            g.append(entry)
            save_guestbook(g)
            self._send(200, {"ok": True, "entry": entry})
            return

        self._send(404, {"error": "no such endpoint"})

    def do_PATCH(self):
        path = self.path.split("?")[0]
        parts = path.strip("/").split("/")
        if len(parts) == 3 and parts[0] == "api" and parts[1] == "bookings":
            bid = parts[2]
            length = int(self.headers.get("Content-Length", 0))
            try:
                data = json.loads(self.rfile.read(length) or b"{}")
            except Exception:
                self._send(400, {"error": "bad json"}); return
            arr = load_bookings()
            b = next((x for x in arr if x.get("id") == bid), None)
            if not b:
                self._send(404, {"error": "no such booking"}); return
            b["status"] = data.get("status", b["status"])
            if b["status"] == "noshow" and not b.get("noShowAt"):
                b["noShowAt"] = datetime.now(timezone.utc).isoformat()
            elif b["status"] != "noshow":
                b.pop("noShowAt", None)
            save_bookings(arr)
            self._send(200, {"ok": True})
            return
        self._send(404, {"error": "no such endpoint"})

def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", default=8090, type=int)
    args = ap.parse_args()
    srv = ThreadingHTTPServer(("0.0.0.0", args.port), Handler)
    print(f"MyKey Booking on http://localhost:{args.port}")
    print("Channels:", {k: v["enabled"] for k, v in CONFIG.items() if isinstance(v, dict) and "enabled" in v})
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        srv.shutdown()

if __name__ == "__main__":
    main()
