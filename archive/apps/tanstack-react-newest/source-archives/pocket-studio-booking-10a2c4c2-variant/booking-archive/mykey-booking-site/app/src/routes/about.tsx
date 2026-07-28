import { createFileRoute } from "@tanstack/react-router";

import { About } from "../components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MyKey · MyKey Booking" },
      {
        name: "description",
        content:
          "MyKey Pocket, Seattle hair artist (they/them). The quiet chair: Silent Cuts and AuDHD first-time appointments, zero small talk required.",
      },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <About level="h1" />;
}
