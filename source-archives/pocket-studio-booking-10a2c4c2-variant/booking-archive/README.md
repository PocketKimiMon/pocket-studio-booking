# Booking archive

Source-only copies of every older booking-page project on this machine, gathered
in one place so nothing gets lost. Nothing here is live. The live app is the repo
root: a TanStack Start app with the travel-fee calculator on `/book` and
`POST /api/travel-fee`.

Archived 2026-07-28. All copies are read-only reference material; the originals
(including images, data, and git history) remain untouched at their original paths.

## Contents

- `booking-page/` — single-file `index.html` booking page. Original: `/home/mykey/booking-page/`
- `pocket-studio-static/` — static Pocket Studio booking site (`index.html`, terms/privacy pages, ops docs, screenshot scripts). Original: `/home/mykey/Pocket Studio Booking Page Current/` (also reachable via the Desktop symlink `Pocket Studio Booking Page Current.md`); the markdown doc itself is also copied to `../docs/`
- `mykey-booking-site/` — full-stack TanStack/Cloudflare app (`app/`) merging every MyKey booking page into one branded destination, plus image `refs/`. Original: `/home/mykey/mykey-booking-site/`
- `mykey-booking/` — early prototype: `backend.py`, `admin.html`, `index.html`, `fake_sinks.py`. Original: `/home/mykey/projects/mykey-booking/`
- `mykey-booking-merged/` — merged booking page: `server.py`, `booking.html`, `nineties.css`, brand copy/reference. Original: `/home/mykey/projects/mykey-booking-merged/`
- `booking-page-alt/` — alternate single-file `index.html` variant. Original: `/home/mykey/projects/booking-page/`
- `mykey-voice-booking/` — voice-booking experiment: `server.py`, `voice-booking.html`. Original: `/home/mykey/projects/mykey-voice-booking/`
- `react-newest/` — most recent React/TanStack Start version (Lovable-linked, has `src/`, `supabase/`). Original: `/home/mykey/booking-pages-local/react-newest/`

## What was excluded

To keep the archive source-only (about 9.5 MB total), the copy excluded:
`node_modules`, `.git` (and `.gitdir`), `dist`, `.output`, `.wrangler`, `.next`,
`build`, `coverage`, `__pycache__`, `.venv`/`venv`/`.venv-tools`, `.tanstack`,
`.env` files, all `*.png`/`*.jpg`/`*.jpeg`/`*.gif`/`*.mp4`/`*.zip`/`*.tar*`/`*.db`
files, generated `data/` directories, `source-archives/` inside `react-newest`
(bulky snapshots), and `proof/`/`shots/` inside `mykey-booking-merged`
(screenshots). Some directories (e.g. `refs/`, `public/assets`) are therefore
empty here by design. Everything excluded is still available in the originals at
the paths listed above.
