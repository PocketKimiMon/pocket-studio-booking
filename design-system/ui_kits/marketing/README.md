# UI Kit — PocketStudio Marketing Site

> **TL;DR** — The studio's public face. Dark, commanding, kinetic — oxblood + hazard lime led. Mobile-first single page: hero → manifesto → product roster → work-with-us CTA. Reading mode toggle lives in the nav.

## Run it
Open `index.html`. Loads `../../colors_and_type.css`, React + Babel, the shared reading-mode helpers, and the section components below.

## Components
| File | What it is |
|---|---|
| `icons.jsx` | Shared `<Icon name size />` — Lucide path data, stroke style. |
| `Header.jsx` | Sticky blurred header: `<Logo>`, desktop nav, `<ReadingModeToggle>`, mobile sheet menu. |
| `Hero.jsx` | Display headline + neon bloom + primary CTA + trust row. |
| `Manifesto.jsx` | TL;DR-led principle cards (clarity / edge / accessible / trauma-informed). |
| `Products.jsx` | The four surfaces as a roster, each with its own neon accent. |
| `Footer.jsx` | Work-with-us CTA form + footer. |

## Brand notes
- **Lead accents:** oxblood + hazard lime. Cyan/red/amber appear only as per-product accents in the roster.
- **Type:** Archivo Black UPPERCASE for hero/section heads (lime for the emphasis word), Hanken Grotesk body, Space Mono kickers (`// LIKE THIS`).
- **Motion:** springy press (`scale .97`), product cards lift on hover, a hard accent edge replaces shadow on emphasis.
- **Mobile-first:** single column at 375px; grids expand at 760px / 1040px. Burger → full-width sheet; 44px+ targets throughout.
- **Reading mode:** `<ReadingModeToggle>` in the header (compact on desktop, full in the mobile sheet); persists via `assets/reading-mode.js`.

## Not included / flagged
- Real photography — use `<image-slot>` placeholders where art is wanted.
- Copy is representative brand voice, not final marketing copy.
