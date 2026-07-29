# Pocket Studio — Site Split/Merge Plan (source of truth)

## Where things live

### GitHub Pages (classic static booking page — DO NOT TOUCH)
- **URL:** https://pocketstudio-biz.github.io/pocket-studio-booking/
- **Repo:** PocketStudio-Biz/pocket-studio-booking
- **What's here:** the original booking page. Plain HTML/CSS/JS, booking engine,
  cal.com + Stripe links, travel fee calculator, policies.
- **Rule:** this page stays exactly as-is. It's the fallback if the fancy site ever
  goes down. No redesigns, no "quick cleanups."

### Lovable (new site — Neurospicy Edition)
- **Repo:** PocketStudio-Biz/pocket-studio-booking-10a2c4c2
- **What's here:** the merged, unified site (TanStack Start + React 19).

## Final route map (after swarm merge)
| Route | Source |
|---|---|
| `/` | Lovable hero page |
| `/book` | chat-style booking flow (assistant quiz) |
| `/studio` | studio/about page (from the mykey-pocket-site variant) |
| `/classic` | iframe wrapper embedding the classic static page at `/classic/index.html` |
| `/mobile` | mobile-first booking variant |
| `/services/:slug` | per-service pages |
| `/blog`, `/blog/:slug` | updates journal ("dispatches from the chair") |
| `/privacy`, `/terms` | legal pages |

## Security rules
- NEVER commit `.env` or Supabase service keys.
- NEVER push to main without checking what changed.
- Lovable syncs both ways — be careful with local `git push`.
