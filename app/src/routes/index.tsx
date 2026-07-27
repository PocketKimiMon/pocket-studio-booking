import { createFileRoute } from "@tanstack/react-router";

import { scenes } from "../lib/site";
import {
  About,
  Book,
  Footer,
  Hero,
  Nav,
  Policies,
  RouteMarquee,
  Services,
} from "../components/site/sections";
import { ScrollScrubJourney } from "../components/scroll-scrub/scroll-scrub";
import { MotionRuntime } from "../components/site/motion";
import "../components/site/site.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ name: "theme-color", content: "#F3ECDE" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mk-root">
      <Nav />
      <main>
        <Hero />
        <RouteMarquee />
        <Services />
        <ScrollScrubJourney sceneId="cut" />
        <About />
        <Policies />
        <ScrollScrubJourney sceneId="housecall" />
        <Book />
      </main>
      <Footer />
      <MotionRuntime />
    </div>
  );
}
