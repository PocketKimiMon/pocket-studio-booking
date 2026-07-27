# MyKey Booking — design brief

One site that merges every MyKey booking page (Pocket Studio, Rudy's Fremont chair,
mobile barber, "Book with Me") into a single branded booking destination.

## Brand revision 4 (follow-up edit, 2026-07-27, owner feature request)
Travel fee calculator, back from the old booking pages — but SHOWN, NOT
charged. The owner's framing: clients should see what travel WOULD cost when
it starts being charged; right now travel is free.

- Numbers (real, not invented): flat $25 + $2 per mile, 30-mile max radius,
  fee = flat + perMile x distance. Sources: mobile-barber-booking/index.html
  (config defaults travelFlatFee 25, travelPerMile 2, maxTravelRadius 30) and
  mykey-booking-merged/server.py (same values + the /api/travel-fee formula).
  mykey-booking/index.html + backend.py have no travel-fee logic, so the
  "prefer mykey-booking on conflict" rule never fired.
- In the /book chat: picking "House call within 30 miles" adds a travel step
  ("Roughly how far from Fremont are you?") with tap bands (under 5 / 5-15 /
  15-30 / outside 30). No geocoding API, so no address lookup — bands only,
  fee shown as an honest range for the band ($25-$35 / $35-$55 / $55-$85).
  The fee bubble carries a `// not charged yet` mono kicker and the framing
  line: "Travel is on us right now. When that changes, this is exactly what
  it would cost, no surprises." Outside 30 miles: no number, just the honest
  "chair or type to me, we'll figure it out" path. The summary gains a
  "travel fee: $X to $Y, free for now" row with a change button; the path
  grows to 5 progress dots for house calls; the sms:/mailto: hand-off body
  includes the travel line.
- On /services: the same calculator as a standalone card in the house-call
  section (same bands, same `// not charged yet` framing, aria-pressed chips,
  aria-live result). Zero backend, zero credits, dark-system native.

## Brand revision 3 (follow-up edit, 2026-07-27, owner feedback)
Owner's verdict on revision 2's light flip: "ew no — undo change, then review
improve and make multipage website, not a 1 page." So:

- REVERTED the warm-paper flip. The site is back on the dark PocketStudio
  system exactly as revision 1 shipped it (charcoal ink `#0B0B0F`, oxblood
  lead, hazard lime, signal cyan focus, grain 0.14): site.css, color-scheme,
  body colors, manifest/theme-color restored from git (commit 5634b1d), not
  rewritten by hand. Revision 2's palette block below is historical record.
- KEPT the guided chat booking flow (the owner asked for it explicitly; the
  rejection was about the light theme, not the bot). Chat styles re-skinned to
  the dark tokens: ink-800 card, ink-700 guide bubbles, oxblood user bubbles
  with cream text, cyan links/escape chip, lime send button.
- RESTRUCTURED one page → five routes (TanStack Start file-based routing):
  - `/` home: hero, route marquee, both scroll-scrub journey chapters, "The
    short version." closing band with CTA to /book.
  - `/services`: the full menu with prices, lead times, per-service Cal.com
    deep links, closing CTA to /book.
  - `/book`: the chat flow as the star (h1 "The easy way to book."), then the
    Cal.com embed as the fallback path ("Straight to the calendar.").
  - `/about`: the artist, the quiet chair (Silent Cuts, AuDHD first-time),
    house calls, Rudy's Fremont.
  - `/policies`: the 4 policies + emergency request, then hours and contact.
- Shared chrome on every page via __root: fixed nav (brand + Services/About/
  Policies + reading-mode toggle + Book-a-cut ticket CTA), footer. Mobile nav
  drops to a second thumb-reachable row under the bar; active link gets the
  cyan underline. All former #anchor CTAs are now real route links.
- Review pass improvements: route-aware motion runtime (re-inits on pathname
  change, since Link navigation swaps pages without reload), focus reset on
  route change (scroll to top, focus the page h1), one h1 per page, per-route
  titles/descriptions, sitemap lists all five routes, fonts/manifest links
  moved to the root head so every route gets them.
- Unchanged: dyslexia reading mode ON by default + persisted toggle on every
  page, reduced-motion collapse, screenshot-safe reveals, bespoke CTA
  garments, Cal.com embed + CSP, credits still 0 (no new generation).

## Brand revision 2 (follow-up edit, 2026-07-27, owner feedback)
Owner's verdict on revision 1: "I kinda hate it." The dark hazard-on-charcoal
look fights the product's actual promise (quiet, trauma-informed,
neurospicy-friendly hair appointments). Redesign target: a friendly
neighborhood studio's front desk — warm, calm, unhurried. Same PocketStudio
system (it ships an opt-in paper theme), flipped to the light surface:

- Canvas: warm paper (`#F7F2E9` family, NOT clinical white), soft ink text
  (`#181426` / `#4A4360` / `#756B85` per `.theme-paper` in colors_and_type.css).
- Accents demoted to SPOT roles on paper: oxblood = warmth/emphasis + primary
  CTA fills; hazard lime = go-signals only (text uses `--lime-deep #82B500` for
  AA on cream; bright lime only as a fill with ink text); cyan = links/focus
  (`--cyan-deep #128A93` on paper for AA).
- Kept from the system: Archivo/Hanken/Space Mono type, voice rules (TL;DR
  first, sentence case, plain-language buttons), film grain (now 0.08, very
  subtle), double focus ring (paper variant), 44px targets, springy
  130/220/380ms motion, reduced-motion collapse, dyslexia reading mode
  (ON by default, persisted; paper fg overrides applied).
- Scene plates: same 4 generations (credits still 0), re-graded lighter/warmer
  via CSS (mild desaturate + sepia); scrims flipped from ink to paper so hero
  and chapter text sits in ink on cream over the photos.

Also in this revision: the site's PRIMARY booking path becomes a guided chat
flow (`#chat`, "the front desk"): one multiple-choice question at a time,
every question's last chip is "Just type to me, we'll figure it out together"
(opens free text that composes a real sms:/mailto: to MyKey, a human), with
progress dots, a back chip, changeable answers, no timers, no backend, no AI.
Completion deep-links the matching Cal.com event and/or scrolls to the embed.

## Brand revision 1 (follow-up edit, 2026-07-27)
The owner supplied their REAL brand design system
(`~/Downloads/pocketstudio-design-system/`: README brand bible, `colors_and_type.css`
token layer, self-hosted OpenDyslexic family, reading-mode assets, marketing UI kit).
This restyle applies that system verbatim; it SUPERSEDES the bone/void/lime palette
and Bricolage/Inter/Plex type below. As the user's explicit brand colors, these
override the skill's banned-palette gate (recorded here per the gate's override
rule). Everything else in this brief (spine, journey, sections, CTA inventory,
asset plan) still stands; the plates are CSS-graded into the charcoal/oxblood
world because credits are 0 and no new generation is possible.

## Design read
For Seattle clients (many neurodivergent, many ex-Rudy's regulars) who want to book
MyKey directly: warm, low-pressure, a little playful, completely plain-spoken. The
emotional register is "a friend who happens to be great at hair," not a salon brand.
Now spoken in the PocketStudio voice: streetwise mentor, warm and direct,
trauma-informed, TL;DR first, plain-language buttons, mono `//` kickers.

## Concept spine
**The house-call route.** The page is one continuous trip: it opens at the chair,
moves through the cut and the color work, and ends at your front door. Journey /
waypoints spine: each chapter is a stop on the route, and booking is the last stop.

## Delivery tier
`cinema` — Lenis + GSAP ScrollTrigger, scroll-driven scene journey, staggered
headline builds. Motion re-timed to the brand system: springy 130/220/380ms,
`--ease-spring` entrances, press = scale(.97).

## Locked palette (PocketStudio design system, user-supplied — explicit brand colors)
SUPERSEDED by Brand revision 2 above: the ink canvas below flipped to the
system's own warm paper theme; the accent roles and defense still apply.
- Ink canvas `#0B0B0F` (`--ink-900`) with raised surfaces `#16161D` / `#1F1F28`.
- Text: cream `#F4EFE6` primary, steel-grey `#ADB0BD` secondary.
- Lead accents: **oxblood `#C53B38`** (primary CTA, emphasis edges) +
  **hazard lime `#B6F23A`** (go signals, highlight words).
- **Signal cyan `#33CBD2`** reserved for links + the always-visible double
  focus ring (`--focus-ring`).
- Film grain (`--grain` SVG noise) over all dark surfaces; hard accent edge-glows
  instead of soft beauty shadows; hairline borders; 10-16px radii.
- Defense: user-supplied brand system; the previous bone/void/lime scheme is
  retired. Oxblood + lime lead this surface; cyan never decorates, only signals.

## Locked type
- Display: **Archivo** 800-900, uppercase heroes/section heads, tight tracking.
- Body/UI: **Hanken Grotesk**, 16px floor, fluid clamp() scale.
- Mono kickers/labels: **Space Mono**, uppercase, tracked out (`// KICKER`).
- Reading mode (ON by default, user-switchable, persisted): self-hosted
  **OpenDyslexic** + **OpenDyslexicMono** (OFL, vendored to `app/public/fonts/`),
  wired through the design system's override layer + an SSR-safe toggle.
No serif. Zero em-dashes in visible copy (carried over, non-negotiable).

Animation mode: animated-website

Intake: user unreachable, proceeded on the skill default (Animated) as instructed.

### Journey (4 scenes = 4 route stops)
1. **The Chair** — MyKey's chair at Rudy's Fremont, morning light, empty and ready.
   Headline: "Your chair is ready." Focal point: the chair, center.
2. **The Cut** — close detail of scissor-over-comb work mid-cut.
   Headline: "Cuts, shaped to your head." Focal point: hands + scissors, center.
3. **The Color** — foils and color bowls mid-transformation.
   Headline: "Color worth the afternoon." Focal point: foil work, center.
4. **The House Call** — MyKey's kit bag packed by a home doorway, coat on.
   Headline: "Or I come to you." Focal point: kit bag at the door, center.

### World grammar (byte-identical preamble for all scene prompts)
"Documentary editorial photograph, warm bone and cream tones with deep espresso
shadows and a single chartreuse-lime accent object, soft overcast Seattle window
light from frame left, matte finish, 35mm, shallow depth, quiet intimate mood,
centered composition, no text, no logos, no watermark." Only the subject changes.

### Camera architecture
A — grounded, realistic, first-person-forward. Every plate enters with the same
gentle push-in so scroll velocity feels continuous across stops.

### Seam direction + media reality (credit constraint, recorded honestly)
Forward push-in on every scene. The canonical A4 build chains MP4 legs between
exact rendered frames; at 22.5+ credits per video leg on a 10-credit free plan the
video chain is unaffordable, so this build ships the journey as seam-directed
still plates: each scene is a full-viewport generated plate with a scroll-scrubbed
transform-only push-in (scale + drift), chapter copy scrolling over it, crossfade
between stops. Same journey, same camera grammar, stills instead of legs. If
credits arrive later, the plates become the entry stills for the exact-frame leg
chain with no redesign needed.

### Mobile framing
All focal points center-safe; plates render `object-fit: cover` on portrait with
the subject inside the center third. Lighter mobile experience: same plates,
motion gated to `prefers-reduced-motion: no-preference`.

### Cost shape + delivery budget
4 scene stills (double as the Phase 1 world-chapter boards — architecture A's
boards art-direct its scenes, and on this budget they literally are the scenes)
+ 1 cover/OG generation = 5 × 2 credits = the full 10-credit balance. Logo and
favicon are a bespoke vector monogram rasterized locally (no credits). Icons are a
single-style inline SVG stroke set (no credits). Byte budget: ≤ 1.5 MB per plate
after local re-encode, ≤ 6 MB total imagery.

## Combinatorial pick (locked across all boards)
- Theme paradigm: REVISED to the user-supplied system — Deep Dark (charcoal ink)
  with the brand's own twist: hazard accents (oxblood + lime), film grain, hard
  edges. Explicit brand colors, gate override recorded above.
- Background character: grain-textured ink surfaces alternating with duotone-graded
  full-bleed scene plates (the existing 4 plates, CSS-graded; credits are 0).
- Typography character: industrial display grotesk (Archivo 900 uppercase) +
  humanist sans (Hanken Grotesk) + Space Mono kickers.
- Hero architecture: massive image-first, restrained text, bottom-left headline
  over the scene plate (image-as-canvas anchor; NOT left-text/right-image).
- Section system: poster-stacked storytelling (journey chapters) with editorial
  blocks between.
- Signature components (4): hover-accordion service rows; layered image crop
  frame (about); brand marquee (route strip); oversized metrics strip (hours).
- Narrative spine: journey / waypoints.
- Second-read moment: one narrow vertical side-rail note (quiet-chair chapter).

## Section plan (7 sections, 5 layout families, eyebrows ≤ 3)
1. Hero — scene 1 plate, image-as-canvas, bottom-left headline. (eyebrow: none)
2. Route marquee — brand strip: "chair at Rudy's Fremont · house calls within 30 mi".
3. Services — hover-accordion rows, full unified menu with prices + lead times.
4. About + quiet chair — editorial offset split, layered crop frame (scene 2/3
   plates), side-rail note for Silent Cut / AuDHD. (eyebrow: "about the artist")
5. Policies — Swiss two-column numbered grid, mono numerals. (eyebrow: "the fine print")
6. Book — scene 4 plate chapter, framed booking block: Cal.com embed, hours as
   oversized metrics strip, contact rows. (eyebrow: none)
7. Footer — flat void band, contact + legal line.
Mobile collapse: accordion rows stack, policy grid goes single column, marquee
wraps to two lines, all plates stay center-cropped.

## Asset plan (credit-budgeted; the whole kit)
- Scene plates ×4 (nano_banana_pro): chair, cut, color, house call. Hero visual +
  section plates + content imagery in one set.
- Cover + OG: one nano_banana_pro generation, composed locally per app-cover.md.
- Icon set: REVISED — Lucide stroke icons (the design system's adopted set),
  inlined as SVG path data (no CDN script, CSP-safe). Replaces the hand-drawn set.
- Logo/monogram + favicon: bespoke "MK" mark restyled to the system (oxblood
  rounded square, cream letterforms, lime utility notch), rasterized locally.
- Video loop / GLB: none — credit exhaustion, recorded above.

## CTA inventory (bespoke chrome, one label per intent)
- "Book a cut" (primary intent, page-wide):
  - Nav: small void ticket button, lime flash on hover.
  - Hero: oversized pill on the plate, slides up with a lime underline sweep.
  - Scene chapters: underlined inline mono link + arrow, arrow nudges on hover.
  - Book section: the Cal.com embed itself plus one lime banner button.
- "Text MyKey" (contact intent): footer + contact rows, plain tel: link with
  mono phone number, underline grow on hover.
- "Need it sooner?" (emergency intent): single dashed-border mailto chip in
  policies, fills lime on hover.

## Copy sources (real, never invented)
Services/prices/lead times from pocket-studio-booking-10a2c4c2/src/content.ts and
pocket-studio-booking/index.html. Policies from the live site's fine print.
Contact: 425-918-2029, mykeypocket@icloud.com, Seattle WA, they/them.
Hours: Thu 11-6, Fri 12-5, Sat-Sun 12-8. Booking: https://cal.com/maneautoimation/
Chair: Rudy's Fremont. House calls: within ~30 miles, travel quoted before booking.
Zero em-dashes anywhere in visible copy.
