// scroll-scrub: the animated-website journey component for MyKey Booking.
//
// This is the seam-directed camera journey from app/design-brief.md, adapted
// to a 0-credit media budget: the canonical A4 build chains MP4 legs between
// exact rendered boundary frames (22.5+ credits per leg, impossible on the
// 10-credit free plan), so each stop ships as a full-viewport generated plate
// with a scroll-scrubbed transform-only push-in instead of a video leg. The
// journey structure, semantic chapter flow, SSR safety, and reduced-motion
// contract below follow references/scroll-scrub.md; if credits arrive, the
// plates become the entry stills for the exact-frame leg chain and this
// component gains <video> segments with first-frame posters.
//
// Contract kept from the canonical component:
// - chapter copy is server-rendered in ordinary semantic <article> flow
// - the client controller (MotionRuntime) owns media transform only; nothing
//   here touches browser globals during render
// - prefers-reduced-motion shows the complete static story (the plates ARE
//   the posters)
// - scenes are a module constant so their identity never rebuilds the controller
import { Link } from "@tanstack/react-router";
import { IconArrow } from "../site/icons";

export type JourneyScene = {
  id: string;
  src: string;
  alt: string;
  stop: string;
  headline: string;
};

// The two mid-journey stops. Stop 01 (the chair) is the page hero; stop 03
// (the color) anchors the about chapter's crop frame.
export const JOURNEY_SCENES: JourneyScene[] = [
  {
    id: "cut",
    src: "/assets/scene-cut.jpg",
    alt: "Close detail of scissor-over-comb work with a lime comb.",
    stop: "stop 02 · the cut",
    headline: "Cuts, shaped to your head.",
  },
  {
    id: "housecall",
    src: "/assets/scene-housecall.jpg",
    alt: "A packed barber kit bag waiting by an apartment doorway, lime luggage tag on the handle.",
    stop: "stop 04 · the house call",
    headline: "Or I come to you.",
  },
];

export function ScrollScrubJourney({ sceneId }: { sceneId: JourneyScene["id"] }) {
  const scene = JOURNEY_SCENES.find((s) => s.id === sceneId);
  if (!scene) return null;
  return (
    <article className="mk-chapter-tall" aria-label={scene.stop}>
      <div className="mk-chapter-sticky mk-chapter">
        <div className="mk-chapter-media" aria-hidden="true">
          <img className="mk-scene-img" src={scene.src} alt={scene.alt} data-scrub />
        </div>
        {/* Waypoint tag: corner-placed route marker, not an eyebrow. */}
        <p className="mk-waypoint">{scene.stop}</p>
        <div className="mk-wrap mk-chapter-content">
          <h2 className="mk-chapter-title">{scene.headline}</h2>
          <Link className="mk-route-cta" to="/book">
            Book a cut
            <IconArrow size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
