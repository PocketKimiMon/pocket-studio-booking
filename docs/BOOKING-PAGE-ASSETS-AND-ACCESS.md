# Pocket Studio — Assets & Access Inventory
*Generated 2026-07-29 by Hermes (@pocket_hermes_sync_bot). Source of truth = this repo; Lovable syncs from GitHub.*

## 1. Canonical repo (this one)
- **GitHub:** `PocketStudio-Biz/pocket-studio-booking-10a2c4c2` (private) → ports to Lovable
- **Local:** `~/pocket-studio-booking-10a2c4c2` — head `58ad57a`
- **Stack:** React 19 + TS + Vite + TanStack Router + Tailwind/shadcn
- **Routes today:** `/` `book` `studio` `classic` `mobile` `services/$slug` `privacy` `terms` (+ `api/`)
- **No `/blog` route yet** — blog copy exists in the Kimi extract (below), ready to wire in
- **Archive:** `archive/` holds the old standalones (react-newest, booking-page, mykey-booking-site, pocket-studio-current, projects), `booking-archive/`, `source-archives/`
- **Dev server:** `bun run dev` → http://192.168.0.34:5173/

## 2. Automation (Hermes cron)
| Job | Schedule | What |
|---|---|---|
| pocket-studio-github-sync | every 6h | Two-way sync this repo ↔ GitHub. Auto-commits local work, never force-pushes, silent when in sync. Alerts → Home TG |
| hermes-skills-github-sync | daily 9am | `~/hermes-skills` ↔ `PocketStudio-Biz/hermes-skills` (shared skills rendezvous for both bots) |
| paperclip-self-build | daily 4am | Paperclip repo maintainer |
| pet-coach-push / LOC watchdog | 10m | infra |

## 3. Bots & Telegram
- **Bot Lounge** group (`-1003937721032`): `@pocket_hermes_sync_bot` (this box) + `@hermesenzo000_bot` (remote instance), both admins, read-all. Quiet unless @mentioned.
- **Marketing stream:** `~/ig-stream` posts daily to TG channel "Rudy's Barber — Daily Cuts" (`-1003816154257`), run by `@streamboss247_bot`. Bluesky pending (needs account).
- Record: `~/.botfather_cli/bots/group_bot_lounge.json`

## 4. Kimi "Booking Page" project (gathered 2026-07-29)
- Project: `kimi.com/project/19fa23e7-ca82-86f4-8000-0e674cc7f9c5` — 5 chats (Swarm Build Instructions, Pocket Studio Booking Site, 项目网站搭建, 整合成新网站, Shared attachments)
- **Extracted 42 files** → `gdrive:Hermes-Archive/booking-page/kimi-project-extract/` (was `~/kimi-booking-page-project`, moved to Drive)
- **Live previews (deployed by Kimi):** V3 = `https://p-biejy2a24bnbntydccapvsotaynaoy3gmnrgknzz.kimi.page/` (+ V1, V2-rollback in chat)

### Blog-relevant assets in the extract
| File | Size | What |
|---|---|---|
| `design/blog.md` | 11.4KB | Blog page copy ("dispatches from the chair") — post content + voice |
| `design/home.md` | 7.7KB | Home page copy |
| `design/booking.md` | 9KB | Booking flow copy |
| `design/services.md` `stylists.md` `gallery.md` `contact.md` `login.md` `my-bookings.md` | ~3–5KB ea | Per-page copy, all in brand voice |
| `design/brand-real.md` | 9.2KB | Real brand system (colors/type from live site) |
| `design/design.md` | 21.5KB | Full design spec |
| `design/style-merge-brief.md` | 9KB | How to merge legacy style into current build |
| `marketing/marketing-copy.md/.docx` | 10KB | Announcement + promo copy (launch-ready) |
| `seo/audit.md/.docx` | 41.5KB | Prioritized SEO quick wins (meta/OG/JSON-LD) |
| `emails/*.html` + README | 3 templates | Booking confirmation, 2-hour reminder, rebooking reminder |
| `legal/privacy.md` `terms.md` (+.docx) | ~9KB ea | Legal pages (cal.com booking, SMS/email reminders, no-show, house calls) |
| `app/` (13 files) | — | Vite+React scaffold configs, `index.html` with full SEO/OG/JSON-LD HairSalon schema |
| `hairstylist-site/` | 3 files | Early landing blueprint (html + config + plan) |

## 5. Drive archive (gdrive:Hermes-Archive/)
- `backups/` — cli-config-backup tarball (4.9G), telegram-bot-skills tarball
- `booking-page/` — kimi-project-extract/ + design-system/ (PocketStudio Design System zip + extracted)
- `screenshots/ media/ downloads/ documents/ pictures/ videos/` — organized local-file offload

## 6. Access & integrations
- **GitHub:** `gh` authed as PocketStudio-Biz (repo scope) — used by both syncs
- **Google Drive:** rclone remote `gdrive:` (My Drive, full access)
- **Kimi:** logged-in browser session (Mykey pocket account) — project files extractable via signed-URL intercept
- **Booking:** Cal.com embed `cal.com/maneautoimation` (referenced in repo)
- **Payments:** Stripe $25 deposit link (live, in repo code)
- **Telegram:** this bot + fleet via BotFather userbot (@ToftExotic Telethon session)

## 7. Open items for the blog/site
1. Wire `/blog` route using `design/blog.md` copy (posts live where? local data vs CMS — needs decision)
2. Apply `seo/audit.md` quick wins (meta/OG/JSON-LD per route)
3. Legal pages already routed (`/privacy` `/terms`) — verify content matches `legal/*.md`
4. Rebooking email senders not wired (templates ready)
5. Marketing stream → Bluesky pending user account creation
