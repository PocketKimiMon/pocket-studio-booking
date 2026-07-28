# Archive — older versions of the booking page

Everything booking-page-related consolidated into this repo 2026-07-28. The LIVE page is `/index.html` in the repo root — nothing in here is deployed.

- `classic-public/` — copy from `booking-pages-local/react-newest/public/classic/` (static copy that shipped inside the TanStack app's public dir)
- `static-source-archive/` — copy from `booking-pages-local/react-newest/source-archives/static/` (archived static build)
- `booking-page-single/index.html` — older standalone "Book with Me" version from `~/booking-page/`
- `mykey-pocket-booking-early.html` — 2KB early stub from `~/mykey-pocket-booking.html`
- `mykey-pocket-brand.md` — brand identity doc from `~/mykey-pocket-brand.md`

## archive/apps/ — the other booking projects (folded in 2026-07-28)

Dependency/build junk excluded (node_modules, .git, .venv-tools, build outputs). None of these are deployed from this repo.

- `tanstack-react-newest/` — the TanStack booking app working copy (from `~/booking-pages-local/react-newest`, HEAD: "Consolidate booking files"). Its public/classic + source-archives/static are ALSO duplicated at the top of archive/ for easy access.
- `tanstack-10a2c4c2/` — second clone of the same TanStack repo (from `~/pocket-studio-booking-10a2c4c2`, HEAD: "Add travel-fee calculator"). NOTE: the two clones have DIVERGED — this one has the travel-fee work, react-newest has the consolidation work. Neither is strictly ahead.
- `mykey-booking-site/` — the Next/Higgsfield booking site (from `~/mykey-booking-site`). refs/ = 45M of reference material.
- `digital-booking-backend/` — third-party reference clone (github.com/florencialecha/digital-booking-software-backend), Java backend, jar artifact excluded.

Originals all left in place. Live GitHub repos for the TanStack app (PocketStudio-Biz/pocket-studio-booking-10a2c4c2) still exist separately.

Originals left in place (the TanStack repo references some of these paths). Safe to delete the originals manually if you want them gone.
