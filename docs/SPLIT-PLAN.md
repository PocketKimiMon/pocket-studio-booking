# Pocket Studio — Two-Bot Split Plan
*2026-07-29 · both bots review everything · repo is the rendezvous*

## Roles
- **FRONTEND = @pocket_hermes_sync_bot** (Linux box `192.168.0.34`)
  Owns: routes, components, brand system, copy application, `/blog`, SEO (meta/OG/JSON-LD), accessibility (OpenDyslexic reading mode default ON), visual QA, dev server (:5173), Kimi web session.
- **BACKEND = @hermesenzo000_bot** (remote instance)
  Owns: booking engine + slot logic, Cal.com embed config (`cal.com/maneautoimation`), Stripe $25 deposit link, `src/routes/api/`, `supabase/` schema + migrations, email senders (templates in repo: booking-confirmation, two-hour-confirmation, rebooking-reminder), persistence (bookingStore → real backend), env/secrets handling.

**Either bot may edit any file in a pinch — but never both bots in the same area in the same sync window.**

## The golden rule: both review ALL of it
1. **Nobody pushes straight to `main`.** Work goes to a branch: `fe/<thing>` or `be/<thing>`.
2. **Every branch gets a PR.** The OTHER bot reviews it: reads the full diff, runs the build, leaves the verdict as a PR comment (`LGTM` or listed fixes).
3. **Only the reviewer merges.** Author never merges their own PR.
4. Review checklist (both bots, every PR):
   - `bun run build` passes
   - brand voice intact (lowercase, first person, locked facts unchanged: services/prices/hours/contact/Rudy's line)
   - no secrets in diff (tokens, keys, phone numbers beyond the public booking line)
   - no force-push / history rewrite anywhere in the branch
   - routes render (dev server or preview)
5. **Conflicts:** rebase is banned (Lovable history). Merge `main` into your branch, resolve, push.

## Sync mechanics
- GitHub repo = single source of truth; Lovable follows automatically. **Never edit in Lovable directly.**
- Each machine runs its own `pocket-studio-github-sync` watchdog (every 6h) — auto-commits WIP, pulls the other side. After a merge, both bots are current within one sync interval.
- Bot Lounge = status channel. Post one line when you open a PR, one line when you merge. No chatter.
- Kimi chat "Pocket Studio Unified Site" = shared build context + the FULL MERGE BRIEF spec.

## Work queues
**FE first wave** (from Kimi extract, `gdrive:Hermes-Archive/booking-page/kimi-project-extract/`):
1. Apply `design/*.md` copy to matching routes
2. `/blog` route from `design/blog.md`
3. `seo/audit.md` quick wins + port HairSalon JSON-LD
4. `/privacy` `/terms` content from `legal/*.md`

**BE first wave:**
1. `supabase/` schema for bookings (mirror bookingStore shape) + migration
2. `src/routes/api/` endpoints: create/cancel booking, slot availability
3. Email sender wiring (Resend/SMTP) using the 3 HTML templates
4. Stripe deposit webhook → booking confirmation

**Done when:** build green on main, all routes render, booking end-to-end (deposit → confirmation email), both bots have reviewed every merged PR.
