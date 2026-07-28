# UI Kit — AI Agent Dashboard

> **TL;DR** — The app where users run and watch AI agents. Calm, dense, dependable. **Sidebar on desktop, bottom-tab on mobile** (4 destinations). Signal-cyan led on charcoal — tactical, instrument-panel calm. Interactive click-through: browse agents → open one → pause/resume; create-agent sheet; skeleton + empty states; reading mode in settings & sidebar.

## Run it
Open `index.html`. Mobile-first; the shell switches from bottom-tab to sidebar at 860px.

## Components
| File | What it is |
|---|---|
| `AppShell.jsx` | `<Sidebar>`, `<BottomTab>`, `<TopBar>`, brand mark. 4 destinations (Home / Agents / Runs / You). |
| `Parts.jsx` | `<StatCard>`, `<AgentCard>`, `<RunRow>`, `<StatusBadge>`, `<Skeleton>`, `<EmptyState>`. |
| `Screens.jsx` | `<Overview>` (TL;DR + stats + needs-you + runs), `<Agents>` (grid + loading skeletons), `<AgentDetail>` (pause/resume, history), `<Settings>` (reading-mode toggle), `<CreateSheet>` (2-step bottom sheet). |

## Try the flow
1. **Agents** tab → watch skeletons load → cards appear.
2. Tap a card → **detail** with pause/resume + run history.
3. **+ New agent** → 2-step create sheet.
4. **You** → toggle dyslexia reading mode (persists).

## Brand notes
- **Status colors:** running = lime (with glow dot), paused = amber, failed = coral, idle = cyan. The one "live" agent gets a cyan edge-glow card.
- **Information design:** every screen opens with a TL;DR or kicker; the "Needs you" block surfaces the single thing requiring a human; errors are trauma-informed ("Not your fault").
- **Targets:** 44px+ throughout; bottom-tab tabs are 54px.
- **Reading mode:** `<ReadingModeToggle>` in the sidebar footer (desktop) and Settings (everywhere).

## Not included / flagged
- No real backend — data is representative. Runs/Home share a view for demo brevity.
