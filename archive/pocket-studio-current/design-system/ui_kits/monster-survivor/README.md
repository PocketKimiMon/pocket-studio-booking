# UI Kit — Monster Survivor (Game HUD + Menus)

> **TL;DR** — PocketStudio Arcade's survivors-like. Fullscreen canvas arena with a neon HUD and text-heavy menus. Lead accents: **blood red + hazard lime** — dangerous, not cute. State machine: title → level-up → playing → pause. Reading mode lives in the pause menu (it reflows the upgrade-text menus).

## Run it
Open `index.html`. Click **Start a run** → see the **level-up** menu (HUD visible behind) → pick one to play → the **pause** button (top-right) opens settings.

## Components
| File | What it is |
|---|---|
| `Arena.jsx` | Lightweight animated `<canvas>` backdrop — spiraling neon monsters, player orb, starfield. Pauses with game state. Stand-in for the real HTML5 Canvas game loop. |
| `HUD.jsx` | Timer, resource chips, HP/XP `<Bar>`s, ability dock with level pips, pause button. |
| `Menus.jsx` | `<TitleScreen>`, `<LevelUpMenu>` (3 tiered upgrade cards — the text-heavy surface), `<PauseMenu>` (settings + reading-mode toggle). |

## Brand notes
- **Arcade exception (see Iconography):** the HUD uses chunky neon glyphs, glowing bars, and bold mono readouts — louder than the rest of the system on purpose. Grain still sits over everything.
- **Color:** blood red = HP/danger/title, hazard lime = go/XP/primary action, cyan = player + rare tier, amber = epic tier + coins, steel = shield.
- **Type:** Archivo Black UPPERCASE for the title; Archivo for upgrade names; Space Mono for HUD readouts/timer; Hanken for upgrade descriptions.
- **Motion:** springy button press, upgrade cards lift + glow on hover, player orb pulses, monsters spiral inward; all canvas motion freezes when paused (and respects the system's reduced-motion ethos for menus).
- **Reading mode** matters most here: the **upgrade descriptions and pause settings** are real reading text. The toggle in the pause menu swaps them to OpenDyslexic and reflows spacing without breaking the HUD layout.

## Not included / flagged
- Not a playable game — `Arena.jsx` is a visual stand-in, no collision/combat. A "tap for level-up demo" chip during play lets you re-open the menu.
- Real sprite art / character roster → flagged for the user to supply.
