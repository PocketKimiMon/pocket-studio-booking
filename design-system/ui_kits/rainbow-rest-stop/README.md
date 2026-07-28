# UI Kit — Rainbow Rest Stop (Podcast)

> **TL;DR** — The podcast brand. Intimate but not soft-focus: **dark ink with ember-amber** as the lead — late-night radio warmth — and a muted rainbow gradient as the show's signature. One page: hero + player → episode list → show notes (text-heavy) → subscribe. Reading mode in the header.

## Run it
Open `index.html`. The app runs on the default ink theme with amber as the lead accent.

## Components
| File | What it is |
|---|---|
| `Player.jsx` | Interactive (fake) audio player — play/pause, click-to-seek scrubber, ±15/30, live time. |
| `RRHeader.jsx` | `<RRHeader>` (brand + reading-mode toggle + subscribe) and `<Subscribe>` (podcast-app links). |
| `Episodes.jsx` | `<EpisodeList>` (back catalog cards) and `<ShowNotes>` (TL;DR, timestamps, pull-quote — the reading-heavy surface). |

## Brand notes
- **Dark + ember:** the podcast stays on ink with amber controls — a lit dashboard at 1am, not a beauty page.
- **Lead color:** ember amber (dark `--on-neon` text on amber fills for AA). The **muted rainbow gradient** appears only on episode art — never as UI chrome.
- **Type:** Archivo display; Hanken body; Space Mono for episode meta + timestamps.
- **Information design:** show notes open with a **TL;DR** block, then scannable timestamps, then prose. Reading-heavy by nature — the prime place reading mode earns its keep.
- **Reading mode:** `<ReadingModeToggle>` in the header reflows the notes/quote to OpenDyslexic with roomier spacing; contrast tokens adjust automatically.

## Not included / flagged
- No real audio — the player is a faithful UI mock with simulated playback.
- Episode art is a generated gradient placeholder; swap in real cover art via `<image-slot>` when available.
