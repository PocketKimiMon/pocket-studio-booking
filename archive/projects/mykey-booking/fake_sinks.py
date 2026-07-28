#!/usr/bin/env python3
"""Fake delivery sinks that RECORD what the backend would send.
Used only to PROVE the fan-out path works end to end. Replace with
real iCloud SMTP / Telegram / Apps Script in production config."""
import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from datetime import datetime, timezone

LOG = "/home/mykey/projects/mykey-booking/data/delivery_proof.json"

def record(channel, payload):
    try:
        arr = json.loads(open(LOG).read()) if os.path.exists(LOG) else []
    except Exception:
        arr = []
    arr.append({"channel": channel, "at": datetime.now(timezone.utc).isoformat(), "payload": payload})
    open(LOG, "w").write(json.dumps(arr, indent=2))

class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def _body(self):
        n = int(self.headers.get("Content-Length", 0)); return self.rfile.read(n) if n else b"{}"
    def do_POST(self):
        body = self._body()
        try:
            data = json.loads(body or b"{}")
        except Exception:
            data = {"raw": body.decode(errors="replace")}
        if self.path.startswith("/bot"):
            record("telegram", data)
            self.send_response(200); self.end_headers(); self.wfile.write(b'{"ok":true}')
        elif self.path == "/":
            record("sheet", data)
            self.send_response(200); self.end_headers(); self.wfile.write(b'{"ok":true}')
        else:
            self.send_response(200); self.end_headers(); self.wfile.write(b'{}')
    def do_GET(self):
        self.send_response(200); self.end_headers(); self.wfile.write(b'ok')

# ---- minimal SMTP sink (records raw messages) --------------------------
import socketserver, threading

class SMTPHandler(socketserver.StreamRequestHandler):
    def handle(self):
        f = open("/home/mykey/projects/mykey-booking/data/smtp_transcript.log", "a")
        def log(*a):
            f.write(" ".join(str(x) for x in a) + "\n"); f.flush()
        self.wfile.write(b"220 fake-smtp ready\r\n"); log("220 ready")
        mailfrom = rcpt = None
        buf = b""
        in_data = False
        while True:
            try:
                line = self.rfile.readline()
            except Exception as e:
                log("read err", e); break
            if not line:
                log("eof"); break
            log("C:", line)
            if in_data:
                if line in (b".\r\n", b".\n"):
                    record("email", {"from": mailfrom, "to": rcpt,
                            "data": buf.decode(errors="replace")})
                    self.wfile.write(b"250 OK queued\r\n"); log("250 queued (recorded)")
                    break
                if line.startswith(b".."):
                    line = line[1:]
                buf += line
                continue
            parts = line.split(b" ", 1)
            c = parts[0].upper().strip()
            if c == b"AUTH":
                self.wfile.write(b"235 auth ok\r\n"); log("235 auth")
            elif c in (b"HELO", b"EHLO"):
                self.wfile.write(b"250-fake\r\n250-AUTH LOGIN PLAIN\r\n250 OK\r\n"); log("250 ehlo")
            elif c == b"MAIL":
                mailfrom = parts[1].decode(errors="replace").strip(":\r\n<> ")
                self.wfile.write(b"250 OK\r\n"); log("250 mail")
            elif c == b"RCPT":
                rcpt = parts[1].decode(errors="replace").strip(":\r\n<> ")
                self.wfile.write(b"250 OK\r\n"); log("250 rcpt")
            elif c == b"DATA":
                self.wfile.write(b"354 Go ahead\r\n"); log("354 data")
                in_data = True
            elif c == b"RSET":
                self.wfile.write(b"250 OK\r\n"); log("250 rset")
            elif c.startswith(b"QUIT"):
                self.wfile.write(b"221 bye\r\n"); log("221 bye"); break
            else:
                self.wfile.write(b"250 OK\r\n"); log("250 else", c)
        f.close()

class SMTPSink(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True

def run_smtp():
    SMTPSink(("0.0.0.0", 8525), SMTPHandler).serve_forever()

def main():
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8526
    t = threading.Thread(target=run_smtp, daemon=True)
    t.start()
    ThreadingHTTPServer(("0.0.0.0", port), H).serve_forever()

if __name__ == "__main__":
    main()
