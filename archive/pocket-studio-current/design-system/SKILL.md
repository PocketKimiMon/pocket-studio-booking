---
name: pocketstudio-design
description: Use this skill to generate well-branded interfaces and assets for PocketStudio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — including the system-wide, optional dyslexia reading mode.
user-invocable: true
---

# PocketStudio Design System

Read `README.md` first — it is the source of truth for context, content fundamentals, visual foundations, iconography, accessibility/reading mode, and the file index. Then explore the other files.

## What's here
- `colors_and_type.css` — the foundation. Import it in every artifact. All color, type, spacing, radii, shadow/glow, motion, grain, accessibility, and the dyslexia reading-mode override layer live here as CSS variables + semantic classes.
- `fonts/` — self-hosted OpenDyslexic family (reading mode). Brand families (Archivo, Hanken Grotesk, Space Mono) load from Google Fonts CDN via the CSS `@import`.
- `assets/` — `reading-mode.js` (vanilla, persisted toggle), `ReadingModeToggle.jsx` (React), `icons.jsx` (shared Lucide icon component).
- `preview/` — design-system specimen cards (type, color, spacing, components, brand).
- `ui_kits/<product>/` — hi-fi, interactive recreations: `marketing`, `agent-dashboard`, `monster-survivor`, `rainbow-rest-stop`. Each has its own README + small JSX components.

## How to use it
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need into your output folder and build static/standalone HTML files the user can view. Link `colors_and_type.css`, reuse the patterns from the relevant UI kit, and pull in the shared icon set + reading-mode helpers.
- **Production code:** copy assets and read the rules here to become an expert in designing with this brand (stack: Hono + TypeScript + Cloudflare, Tailwind, shadcn/ui + Lucide).

## Non-negotiables
- **Mobile-first** (base 375px); desktop is an adaptation. Bottom-tab nav on mobile, sidebar on desktop, 3–5 destinations.
- **Accessible by default:** WCAG AA contrast, visible double focus-ring, 44×44px targets, `prefers-reduced-motion`, plain-language labels, TL;DR-led information design.
- **Always include the dyslexia reading mode** on text-bearing surfaces: load `colors_and_type.css` + a reading-mode toggle (`assets/reading-mode.js` for HTML/Canvas, `assets/ReadingModeToggle.jsx` for React). It is **ON by default** (sets `html[data-reading-mode="dyslexic"]`); the user can switch it off and the choice persists per user.
- **Voice:** streetwise mentor meets soft-dom chaos witch — warm, direct, irreverent, trauma-informed, clear. Sentence case; mono `//` kickers; emoji as accent only.
- **One accent leads per surface** (oxblood+lime = studio, cyan = dashboard, blood red+lime = game, ember amber = podcast; magenta never leads). Accents are for emphasis, not fields of color. Grain over everything dark.

## If invoked with no guidance
Ask what the user wants to build or design, ask a few focused questions (surface, fidelity, variations, production vs throwaway), then act as an expert designer who outputs HTML artifacts **or** production code, depending on the need.
