# Mykey Pocket — 90s Internet Booking Site

A single-page booking site for an independent hair stylist / barber, wrapped in a
self-aware 90s-internet "art piece" aesthetic (GeoCities revival): scrolling
marquee, animated starfield, cursor-trail sparkles, a live visitor counter, a
real guestbook, a WebAudio chiptune, and a Konami-code rainbow easter egg.

All on the **Mykey Pocket** brand: bone `#F3ECDE` canvas, acid-lime `#8ACE00`,
void-plum `#120E17`, flush `#FF5A5F`, hex-violet `#9B5CFF`. Fonts: Bricolage
Grotesque (display), Inter (body), IBM Plex Mono (utility), Caveat (handwriting).

## Features
- **Booking** — service → stylist → location/travel → date/time → details, with
  geocoded travel-fee calc and 3-channel fan-out (email / telegram / sheet).
- **No-show callback list** — ranked oldest-first via `/api/callback`.
- **90s layer** (`nineties.css` + `nineties.js`):
  - animated starfield canvas + graph-paper grid (intentionally subtle)
  - single scrolling marquee bar
  - cursor-trail sparkles
  - live "you are visitor number" LED counter (`/api/hit`)
  - guestbook (`/api/guestbook`, persisted to disk)
  - `▶ play tune` WebAudio chiptune (no audio files)
  - Konami code (↑↑↓↓←→←→ B A) → full-page rainbow wash

## Run
```bash
python3 server.py --port 8090
```
Then open http://localhost:8090/  (full site) or http://localhost:8090/booking
(standalone widget).

Routes:
- `/` — full unified site (brand + 90s layer)
- `/booking` — standalone booking widget
- `/booking-frame` — widget markup for embedding
- `/nineties.css`, `/nineties.js` — the retro layer
- `/api/config`, `/api/bookings`, `/api/callback`, `/api/travel-fee`
- `/api/hit`, `/api/guestbook`

## Channels / secrets
Fan-out channels are configured via environment variables (no secrets in code):
`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `EMAIL_*` / SMTP, sheet API key, etc.
When unset, the server queues messages to `data/queue/` instead of sending.

## Data
Runtime data lives in `data/` (bookings, guestbook, hit counter) and is
git-ignored — it contains real booking PII and is never committed.
