# Pocket Studio — Scroll Movie Design Brief

The homepage opens with a scroll-driven cinematic journey ("scroll movie"):
the visitor's scroll flies one continuous camera through five scenes, then the
classic page (About / Updates / Services / Rules / Book / Travel Fee / Footer)
continues below.

Built per the A4 seam-locked scroll-scrub architecture (continuous forward
flight). Ships today with art-directed placeholder posters + Ken Burns drift;
generated video legs drop in later with zero code changes beyond filling in
`clip`/`mobileClip` paths and replacing posters with exact first frames.

## Journey (5 scenes, Architecture A — no connectors)

| # | id | Focal point | Headline | Copy beat |
|---|----|-------------|----------|-----------|
| 1 | `chair-moved` | vintage barber chair alone on a wet Seattle driveway, porch light behind | the chair comes to you now. | your chair moved — house calls, no front desk |
| 2 | `buzz` | clippers mid-pass, living-room chair, daylight window | clippers up. back to your life. | buzz cut, clean edges, 30 min |
| 3 | `color` | foils + color bowls on a home kitchen counter, warm lamp light | foils in your kitchen. why not. | color chaos welcome |
| 4 | `detail` | extreme close-up: straight-razor edge-up, amber rim light | edges so clean they gossip. | the detail work |
| 5 | `book-it` | the chair on a hilltop overlook, Seattle skyline at golden hour | your chair. your place. | book it — Seattle area only |

Each scene: one headline, one sentence, ≤3 proof tags, one CTA.
CTAs: scene 1 → `/book`, scenes 2–4 → matching cal.com link, scene 5 → `/book` + tel.

## World grammar (locked preamble for ALL scene generation)

> cinematic film still, slow forward dolly shot, a traveling vintage oxblood-red
> barber chair moving through real Seattle homes and streets, moody overcast
> Pacific Northwest light, teal-and-amber color grade, photoreal, anamorphic
> 16:9, shallow depth of field, gentle film grain, focal subject centered,
> no text, no logos, no watermarks

- Perspective: eye-level (~1.2 m) forward dolly, same velocity into every seam.
- Light direction: overcast key from camera-left, warm practical (lamp/porch) camera-right.
- Palette: deep teal shadows (#0b0b0f base), amber highlights, oxblood #c53b38 chair.
- Surface finish: wet asphalt / worn hardwood / laminate counters — real, lived-in.
- Mobile: center-safe composition; focal point inside center 60%.

## Media chain (when Higgsfield plan has credits)

Cost shape: 1 entry still + 4 sequential video legs (leg N starts from the
EXACT last frame of leg N−1 — never a separately imagined still).

```bash
# 1. entry still (scene 1)
higgsfield generate create nano_banana_pro \
  --prompt "<WORLD GRAMMAR> scene: vintage barber chair alone on a wet Seattle
  driveway at blue hour, craftsman porch light glowing behind" --aspect_ratio 16:9

# 2. per leg (one model for the WHOLE chain — do not mix models)
higgsfield generate create kling2_6 \
  --start-image <exact last frame of previous leg> \
  --prompt "<WORLD GRAMMAR> continue slow forward dolly into: <next scene subject>"

# 3. boundary frames + encodes (helper from the higgsfield-websites skill)
bash /tmp/scroll-scrub-video.sh bounds source-leg1.mp4 /tmp/leg1
bash /tmp/scroll-scrub-video.sh desktop source-leg1.mp4 public/assets/world/scene-1.mp4
bash /tmp/scroll-scrub-video.sh mobile  source-leg1.mp4 public/assets/world/scene-1-mobile.mp4
bash /tmp/scroll-scrub-video.sh poster  public/assets/world/scene-1.mp4 public/assets/world/scene-1-poster.png
```

Then set `clip` / `mobileClip` on each scene in
`src/routes/index.tsx` (SCROLL_MOVIE_SCENES) and delete the placeholder posters.

Byte budget: ≤32 MiB total desktop clips, ≤16 MiB mobile.

## Component

`src/components/scroll-scrub/scroll-scrub.tsx` + `.css` — controller owns
scroll→media time (Blob-fetched clips, seek coalescing, iOS priming, reduced
-motion poster fallback). With no `clip` set, scenes run "poster mode": exact
same layout, slow Ken Burns push-in driven by scroll progress.
