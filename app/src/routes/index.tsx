import { createFileRoute } from "@tanstack/react-router";

import {
  Hero,
  HomeClose,
  RouteMarquee,
} from "../components/site/sections";
import { ScrollScrubJourney } from "../components/scroll-scrub/scroll-scrub";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyKey Booking · cuts and color, booked direct in Seattle" },
      {
        name: "description",
        content:
          "Cuts and color with MyKey Pocket, Seattle hair artist. The chair in Fremont or house calls within 30 miles. Book direct, no front desk.",
      },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <RouteMarquee />
      <ScrollScrubJourney sceneId="cut" />
      <ScrollScrubJourney sceneId="housecall" />
      <HomeClose />
    </>
  );
}
