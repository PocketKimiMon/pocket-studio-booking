# MyKey Booking — design brief

One site that merges every MyKey booking page (Pocket Studio, Rudy's Fremont chair,
mobile barber, "Book with Me") into a single branded booking destination.

## Design read
For Seattle clients (many neurodivergent, many ex-Rudy's regulars) who want to book
MyKey directly: warm, low-pressure, a little playful, completely plain-spoken. The
emotional register is "a friend who happens to be great at hair," not a salon brand.

## Concept spine
**The house-call route.** The page is one continuous trip: it opens at the chair,
moves through the cut and the color work, and ends at your front door. Journey /
waypoints spine: each chapter is a stop on the route, and booking is the last stop.

## Delivery tier
`cinema` — Lenis + GSAP ScrollTrigger, scroll-driven scene journey, staggered
headline builds. (Spectacle's WebGL/GLB is out of credit reach; see cost note.)

## Locked palette (existing brand, honored)
- Bone `#F3ECDE` — page ground (the brand's paper).
- Void `#120E17` — ink, off-black (never pure black).
- Lime `#8ACE00` — the ONE accent (brand chartreuse; CTAs, marquee, focus).
- Ash `#6F6878` — muted secondary text.
Defense: these are the owner's live brand colors, pulled verbatim from
pocket-studio-booking; lime-on-bone is a chromatic-light pairing, not a banned
dark-glow family. (User's explicit brand colors override the default bans.)

## Locked type
- Display: **Bricolage Grotesque** (existing brand display face, expressive grotesk).
- Body: **Inter** (existing brand body).
- Mono labels/meta: **IBM Plex Mono** (existing brand mono).
No serif. Caveat (hand) reserved for at most one tiny annotation, matching brand.

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
- Theme paradigm: Quiet Premium Neutral (bone, dark ink) + one chartreuse accent.
- Background character: full-bleed cinematic imagery (scene plates) alternating
  with flat bone editorial blocks.
- Typography character: expressive display grotesk (Bricolage) + mono meta.
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
- Logo/monogram + favicon: bespoke inline SVG "MK" ticket monogram, rasterized
  locally (no credit).
- Icon set: single-weight inline SVG stroke icons (scissors, comb, bowl, key,
  pin, clock, phone, envelope), one stroke style, void ink (no credit).
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
