# PocketStudio — Design System

> **TL;DR** — PocketStudio is a queer creative-technology studio building lean, profitable digital tools for outsiders. This design system is **hazard-on-charcoal, grain-textured, mobile-first, and accessible by default** — survivor-built, streetwise, a little dangerous. It spans four surfaces: a marketing site, an AI agent dashboard, the *Monster Survivor* game, and the *Rainbow Rest Stop* podcast brand. Voice: streetwise mentor meets soft-dom chaos witch — warm, direct, irreverent, trauma-informed. Principle: **clarity over polish, edge over etiquette, accessible by default.**

---

## 1. Context

**PocketStudio** ships small, profitable digital products for "gloriously non-standard brains" — ADHD, autistic, and otherwise neurospicy creatives, single moms, outsiders, and chaos-to-product entrepreneurs. The brand is unapologetically queer, streetwise, and warm. It treats accessibility and trauma-informed design as table stakes, not garnish.

The system here is built to the **Vibe-Code Prompt Bible — Neurospicy Edition** brief: information design that leads with TL;DRs, strong hierarchy, minimal cognitive load, plain-language labels, and clear decision paths. Everything is **mobile-first (base viewport 375px)**; desktop is an adaptation, not the starting point.

### Surfaces
| Surface | What it is |
|---|---|
| **PocketStudio marketing site** | The studio's public face — manifesto, product roster, "work with us." Dark, editorial, kinetic. |
| **AI agent dashboard** | App where users run/monitor AI agents. Sidebar on desktop, bottom-tab on mobile. Dense but calm. |
| **Monster Survivor** | HTML5 Canvas survivors-like game. Neon HUD, pause/upgrade menus, high-energy. |
| **Rainbow Rest Stop** | Podcast brand — episode pages, player, show notes. Intimate, late-night, ember-amber on dark. Not soft-focus. |

### Sources
This system was generated from a **written brand brief only** — there was **no attached codebase, Figma file, or asset library**. All type, color, iconography, and component decisions below are original choices made to fit the brief. The intended stack (for production hand-off) is **Hono + TypeScript + Cloudflare, Tailwind, and shadcn/ui primitives** (shadcn ships with **Lucide** icons — adopted here).

> If you have real PocketStudio assets — a logo, brand fonts, product screenshots, or a repo/Figma — share them and I'll replace the from-scratch substitutes and align pixel-for-pixel.

---

## 2. Content Fundamentals

How PocketStudio writes. Copy is a load-bearing part of the brand — it does as much work as the visuals.

**Voice:** Streetwise mentor meets soft-dom chaos witch. Direct, confident, playful, slightly irreverent, trauma-informed, warm, and *clear*. It respects the reader's intelligence and their nervous system at the same time.

**Person & address:** Talks to **"you"**, speaks as **"we"**. Second-person, conversational. Never the royal corporate "we believe that organizations…". It's a person talking to a person.

**Casing:** Sentence case everywhere — headlines, buttons, labels. **No Title Case Marketing Speak.** The only all-caps is the **mono kicker/label** (small, tracked-out, functional — `// BUILT FOR OUTSIDERS`).

**Information design (the neurospicy contract):**
- **TL;DR first.** Every dense page or section opens with a one-line summary. Give the *why* before the rules.
- **Strong hierarchy, low cognitive load.** One idea per block. Short paragraphs. Generous whitespace is content, not emptiness.
- **Plain-language labels.** Buttons say what they do: "Start a run", "See your agents", "Skip the setup". Never "Submit", "Learn more", "Get started" with no object.
- **Clear decision paths.** 3–5 choices max. When there are more, group and progressively disclose.

**Tone examples (write like this):**
- Hero: *"Tools for brains the manuals forgot."*
- Subhead: *"We build lean, profitable software for outsiders — single moms, neurospicy makers, chaos-to-product founders. No sludge. No gatekeeping."*
- Empty state: *"Nothing here yet — and that's allowed. Spin up your first agent when you're ready."*
- Error / trauma-informed: *"That didn't go through. Not your fault — try again, or we can sit with it for a sec."*
- Button: *"Build the thing"* · *"Show me a run"* · *"Skip the tour"*
- Mono kicker: *`// CLARITY OVER POLISH`* · *`// EDGE OVER ETIQUETTE`*

**Don't:** corporate sludge ("leverage synergies", "best-in-class solutions"), fake urgency, infantilizing tone, or therapy-speak cosplay. Warmth ≠ mush. Be kind *and* direct.

**Emoji:** Used sparingly and intentionally as **accent punctuation**, never as load-bearing iconography or in UI chrome. A rare 🌈 (podcast) is on-brand; emoji-as-bullets or emoji-stuffed headers are not. Mono "slash" markers (`//`) and the hazard triangle `▲` are the preferred typographic accents.

---

## 3. Visual Foundations

**The one-liner:** High-contrast **hazard accents on charcoal ink** under **film grain**, a **black-weight industrial grotesque** (Archivo) against **humanist sans** (Hanken Grotesk), **mono** (Space Mono) for functional labels, **generous whitespace**, and **springy-but-controlled kinetic accents**. Queer but not dainty; emotionally intelligent but not cosmetic.

### Color
- **Canvas is ink** — cool charcoal / black-violet (`--ink-900 #0B0B0F`). Graphite and gunmetal, not candy. Grounded, like a workshop at night.
- **Paper theme** (`.theme-paper`) remains available for long-form print-like documents, but no core surface leads with it — the brand lives on dark.
- **Tactical accents**: **oxblood** (`#C53B38`) leads the studio — blood, resilience, danger survived. **Rust** is warmth turned hard; **steel** is the instrument neutral; **hazard lime** = go; **signal cyan** = info/links/focus; **ember amber** = warning + the podcast\u2019s warmth; **hot red** = danger/monster blood; **black-violet** deep accent. **Magenta is a minor accent only — it never leads.**
- **One accent leads per surface.** Oxblood + lime lead the studio; signal cyan leads the dashboard; blood red + hazard lime drive the game; ember amber leads the podcast. Don't rainbow-vomit — pick a lead, use others as spot signals.
- Accents are for **emphasis, not fields of color**. Big flat accent backgrounds are rare; accents show up as text, strokes, hard edges, single CTAs, data signals.
- **Contrast:** body/UI text always meets **WCAG AA**. Dark `--on-neon` ink text is used *on* bright neon fills; cream `--fg1` on ink.

### Type
- **Display grotesque (Archivo, 800–900):** headlines, hero, wordmark. Industrial, assertive, condensed-feeling at tight tracking (-0.025 to -0.045em). Heroes and section CTAs set in **UPPERCASE**. Swagger over prettiness — if a headline looks elegant, make it heavier.
- **Humanist sans (Hanken Grotesk):** all body, UI, h3/h4, buttons, inputs. Clear and friendly. Body floor is **16px**; fluid clamp() scales up.
- **Mono (Space Mono):** kickers, eyebrows, tags, HUD readouts, code, timestamps. Uppercase + tracked-out for labels. This is where the "streetwise/techy" edge lives.
- Fluid type via `clamp()` from 375px up. `text-wrap: balance` on headings, `pretty` on body.

### Space & layout
- 4px spacing base. **Whitespace is generous and intentional** — it's the calm that makes the neon legible and the content low-stress.
- **Mobile-first, 375px base.** Single column, thumb-reachable primary actions, **44×44px minimum touch targets**.
- **Navigation:** bottom-tab bar on mobile, sidebar on desktop. **3–5 primary destinations max.**
- Content max-width ~640px for reading; cards and grids breathe.

### Backgrounds & texture
- **Grain over everything dark.** A subtle tiling SVG noise (`--grain`) sits at low opacity over ink surfaces — gives the screen a printed, physical, slightly lo-fi feel. Never clean/clinical.
- No stocky gradient meshes. A faint **radial bloom** behind a hero word or CTA is allowed at low opacity; aggressive purple-blue gradients and soft beauty-glow are banned.
- Imagery (when present) is **high-contrast, desaturated-warm, grainy** — 35mm flash photography, work in progress, scars and tools; never corporate stock, never glamour. Real photos go in `<image-slot>` placeholders for the user to fill.

### Motion
- **Springy and alive, never chaotic.** Default easing `--ease-spring cubic-bezier(0.34,1.56,0.64,1)` for entrances and presses (a tiny overshoot); `--ease-out` for decisive UI.
- Durations short: 130/220/380ms. Hovers and presses feel *physical*.
- Skeleton loading (shimmer) for data; meaningful empty states instead of spinners where possible.
- **Respects `prefers-reduced-motion`** — all animation collapses to near-zero.

### Interaction states
- **Hover:** surface lightens one step (`--surface-hover`) and/or a hard accent edge appears; links brighten to the `-bright` accent.
- **Press:** element **shrinks ~2–3%** (`transform: scale(.97)`) and color deepens to the `-deep`/`-press` accent. Tactile, not flashy.
- **Focus:** always-visible **double ring** (`--focus-ring`) — a cyan halo offset from the element by an ink/paper gap. Non-negotiable for accessibility.
- **Disabled:** `--fg-disabled`, no glow, no pointer.

### Surfaces, borders, elevation
- **Cards on ink:** a half-step-lighter surface (`--surface`), a **1px subtle border** (`--border-subtle`), modest radius (`--radius-lg 16px`), soft cool shadow (`--shadow-md`). Emphasis cards swap the shadow for a **hard accent edge** (`--glow-oxblood`, `--glow-cyan` etc. — a 1.5px ring with minimal bloom, tactical not beauty-soft).
- **Radii:** edgy but not bubbly — 10–16px is the workhorse; pills for tags/toggles; 4–6px for inputs/chips. Nothing is a perfect circle except avatars and the game's orbs.
- **Borders** do real work on dark UIs — hairlines (`--hairline`) separate without shouting.
- **Shadows** are cool and subtle on ink (the dark *is* the depth); the **edge-glow replaces shadow** for anything armed/active — a ring, not a halo.

### Transparency & blur
- Used for **overlays and bars**: sticky headers, bottom-tab bars, game pause overlays, and modals use a translucent ink + `backdrop-filter: blur()` so content scrolls under them. Sparingly elsewhere — blur is a system signal ("this floats above"), not decoration.

---

## 4. Iconography

- **Primary set: [Lucide](https://lucide.dev)** — the icon library shadcn/ui ships with, so it's the natural production choice. Clean, consistent **1.75–2px stroke**, rounded joins, no fills. Loaded from CDN (`lucide@latest`) in the UI kits; documented per-kit.
- **Stroke, not fill.** Icons are line icons that sit comfortably next to Hanken Grotesk. Match stroke weight to text weight; never mix filled and outlined in one cluster.
- **Sizing:** 20px inline with text, 24px for nav/actions, inside 44px touch targets. Color = `currentColor` so they inherit neon/fg.
- **The game (Monster Survivor)** is the exception — its HUD uses **chunky neon glyphs and simple geometric pictograms** (hearts, orbs, lightning) drawn to match the arcade energy, plus emoji-scale icons where it reads as playful. Documented in that UI kit.
- **Emoji:** accent only (see Content Fundamentals). The brand's signature typographic marks are the mono slash `//`, the hazard triangle `▲`, and the square **lime utility notch** on the monogram. The spark `✦` is retired.
- **No hand-rolled decorative SVG illustration** in this system — where real brand illustration is wanted, it's left as a flagged placeholder for the user to supply.

> **Substitution flag:** Lucide is a substitute chosen to match the shadcn/ui stack, not a confirmed brand asset. If PocketStudio has a custom icon set, send it and I'll swap.

---

## 5. Accessibility & Reading Mode

Accessibility is a **baseline, not a feature**. Every surface ships with: WCAG AA text contrast, a visible double focus-ring (`--focus-ring`), 44×44px minimum touch targets, fluid type with a 16px reading floor, `prefers-reduced-motion` support (all motion collapses to ~0), and semantic, plain-language labeling.

### Dyslexia reading mode (ON by default, user-switchable, system-wide)

PocketStudio ships with **OpenDyslexic active by default** on every surface, plus companion readability adjustments. It is a **persisted user preference**: switching it OFF restores the brand typography (Archivo / Hanken Grotesk / Space Mono) exactly, with zero loss of hierarchy or brand coherence.

**What turning it ON does:**
- Swaps serif + sans to **OpenDyslexic** and the mono slot to **OpenDyslexicMono** (self-hosted in `/fonts`). Display-vs-body hierarchy is preserved via size + weight, which carry over unchanged.
- **Roomier line-height**, looser **letter-spacing** and **word-spacing**.
- **Left-aligns** reading text; disables balance/justify wrapping (which fights tracking).
- **Comfortable contrast** bump for secondary/tertiary text.
- **Reduces clutter** in reading-heavy areas — thinner grain, no neon text-glow — while leaving structural neon (borders, CTAs, focus rings) intact.

**How it's implemented (use this in every surface):**
1. Load `colors_and_type.css` — it defines the override layer plus `--font-dyslexic`, `--font-dyslexic-mono`, and an alternate `--font-dyslexic-alta` (the OpenDyslexicAlta cut, available if preferred).
2. The mode is toggled by setting **`data-reading-mode="dyslexic"`** on `<html>` (or adding `.reading-dyslexic` to any subtree for partial demos). The override block keys off both.
3. Drop in a toggle:
   - **Any HTML / the Canvas game** → `assets/reading-mode.js`. Persists to `localStorage['ps-reading-mode']`, applies on load (before paint if placed in `<head>`), syncs across tabs, and auto-wires any `[data-reading-toggle]` button (sets `aria-pressed`, optional auto-label, accessible `aria-label`). API: `window.PSReadingMode.{isOn,set,toggle,boot}`.
   - **React surfaces** → `assets/ReadingModeToggle.jsx` — a branded `role="switch"` control (same key/attribute, fully compatible).
4. **Accessible labeling:** the control is a real `button`/`switch` with `aria-pressed`/`aria-checked` reflecting state and a descriptive `aria-label` ("Turn on/off dyslexia-friendly reading mode"). Place it somewhere predictable — settings, the profile/account menu, or near primary nav — on every surface.

**Tokens you can tune** (in `:root`): `--rm-letter-spacing`, `--rm-word-spacing`, `--rm-leading-bump`, plus the family stacks above. Adjust without touching the rules.

> **Fonts are self-hosted.** OpenDyslexic (Regular/Bold/Italic/BoldItalic as `woff2`+`otf` fallback), OpenDyslexicMono, and OpenDyslexicAlta all live in `/fonts` (SIL OFL / CC-BY, Abelardo Gonzalez — see `fonts/OFL.txt`).

---

## 6. Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — context, content + visual foundations, iconography, index. |
| `SKILL.md` | Agent Skills–compatible entry point for using this system in Claude Code. |
| `colors_and_type.css` | **The foundation.** All color, type, spacing, radii, shadow/glow, motion, grain, a11y tokens + the dyslexia reading-mode override layer, as CSS vars + semantic classes. Import this everywhere. |
| `preview/` | Design System tab cards — type specimens, color scales, spacing, components (incl. reading-mode toggle), brand. |
| `assets/` | `reading-mode.js` (vanilla persisted toggle), `ReadingModeToggle.jsx` (React switch), `icons.jsx` (shared Lucide `<Icon>`). |
| `fonts/` | Self-hosted OpenDyslexic family (reading mode) + SIL OFL license. |
| `ui_kits/marketing/` | PocketStudio marketing site — hi-fi clickable recreation. |
| `ui_kits/agent-dashboard/` | AI agent dashboard — sidebar/bottom-tab app. |
| `ui_kits/monster-survivor/` | Game HUD + menus. |
| `ui_kits/rainbow-rest-stop/` | Podcast brand — episode page + player. |

Each `ui_kits/<product>/` has its own `README.md`, an `index.html` (interactive demo), and small reusable `.jsx` components.

### Fonts
- **Brand families** load via **Google Fonts CDN** (`@import` at the top of `colors_and_type.css`): **Archivo** (display grotesque), **Hanken Grotesk** (sans), **Space Mono** (mono). CDN delivery is fine — these are not missing.
- **Reading-mode families are self-hosted** in `/fonts`: **OpenDyslexic** (`woff2` + `otf`), **OpenDyslexicMono**, and **OpenDyslexicAlta** (alternate cut). License in `fonts/OFL.txt`.
- Want the brand families self-hosted/offline too? Send the licensed files and I'll vendor + switch the `@import` to local `@font-face`.
