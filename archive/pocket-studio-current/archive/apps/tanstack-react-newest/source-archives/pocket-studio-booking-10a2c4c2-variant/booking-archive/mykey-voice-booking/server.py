#!/usr/bin/env python3
"""MyKey Voice Booking — merged idea from two sessions.

- FLOW  (hyprflow): voice -> whisper.cpp transcription
- STYLE (mykey-booking): dark editorial design system + booking fan-out

This server:
  GET  /              -> the voice-booking page (MyKey style)
  POST /api/transcribe -> takes uploaded audio, runs ffmpeg -> whisper.cpp,
                          returns {text}
  POST /api/booking    -> reuses the proven mykey-booking fan-out backend
                          (email / telegram / sheet), saving into the same
                          bookings.json store.
Stdlib only (plus ffmpeg + whisper-cli on disk).
"""
import json
import os
import subprocess
import sys
import tempfile
import threading
import urllib.request
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HERE = Path(__file__).resolve().parent

# ---- reuse the proven booking backend (same store + fan-out) ----------------
BOOKING_DIR = Path("/home/mykey/projects/mykey-booking")
sys.path.insert(0, str(BOOKING_DIR))
import backend as booking_backend  # noqa: E402

# ---- whisper / ffmpeg config (from hyprflow) --------------------------------
FLOW_DIR = Path("/home/mykey/hyprflow")
WHISPER_BIN = FLOW_DIR / "whisper.cpp" / "build" / "bin" / "whisper-cli"
WHISPER_MODEL = FLOW_DIR / "whisper.cpp" / "models" / "ggml-base.en.bin"


def transcribe_audio(data: bytes, ctype: str) -> str:
    if not data:
        return ""
    suf = ".webm"
    if "wav" in (ctype or ""):
        suf = ".wav"
    elif "ogg" in (ctype or ""):
        suf = ".ogg"
    elif "mp4" in (ctype or ""):
        suf = ".m4a"
    with tempfile.TemporaryDirectory() as td:
        src = Path(td) / ("in" + suf)
        wav = Path(td) / "out.wav"
        src.write_bytes(data)
        # normalize to 16k mono wav for whisper
        subprocess.run(
            ["ffmpeg", "-y", "-i", str(src), "-ar", "16000", "-ac", "1",
             "-c:a", "pcm_s16le", str(wav)],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=60,
        )
        if not wav.exists() or wav.stat().st_size == 0:
            return ""
        out = subprocess.run(
            [str(WHISPER_BIN), "-m", str(WHISPER_MODEL), "-f", str(wav),
             "--no-prints", "--no-timestamps"],
            stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=120,
        )
        return out.stdout.decode("utf-8", "ignore").strip()


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
        if path in ("/", "/index.html"):
            fp = HERE / "voice-booking.html"
            if fp.exists():
                self._send(200, body=fp.read_bytes(), ctype="text/html")
            else:
                self._send(404, {"error": "missing page"})
        else:
            self._send(404, {"error": "not found"})

    def do_POST(self):
        path = self.path.split("?")[0]
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b""

        if path == "/api/transcribe":
            ctype = self.headers.get("Content-Type", "")
            text = transcribe_audio(raw, ctype)
            self._send(200, {"text": text})
            return

        if path == "/api/booking":
            try:
                data = json.loads(raw or b"{}")
            except Exception:
                self._send(400, {"error": "bad json"})
                return
            b = data
            b.setdefault("id", f"vb_{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}_{os.getpid()}")
            b.setdefault("status", "booked")
            b.setdefault("created", datetime.now(timezone.utc).isoformat())
            arr = booking_backend.load_bookings()
            arr.append(b)
            booking_backend.save_bookings(arr)
            report = booking_backend.fan_out(b)
            self._send(200, {"ok": True, "id": b["id"], "delivery": report})
            return

        self._send(404, {"error": "no such endpoint"})


def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", default=8090, type=int)
    args = ap.parse_args()
    # make sure the booking backend reads its own config
    booking_backend.main.__globals__  # noop
    srv = ThreadingHTTPServer(("0.0.0.0", args.port), Handler)
    print(f"MyKey Voice Booking on http://localhost:{args.port}")
    print("whisper:", WHISPER_BIN.exists(), "| model:", WHISPER_MODEL.exists())
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        srv.shutdown()


if __name__ == "__main__":
    main()
