# Verification tooling

- `verify_dynamic.py` — drives the live page with Playwright, asserts the 90s
  interactions work (counter, marquee motion, cursor-trail sparkles, guestbook
  POST, tune, konami rainbow) and screenshots each. Run with python3.12.
- `record_proof.py` — records a real-motion .webm of the page driving the same
  interactions, for visual proof the site animates. Run with python3.12.

Requires: `pip install playwright` (python3.12) + `playwright install chromium`.
The server must be running on :8090.
