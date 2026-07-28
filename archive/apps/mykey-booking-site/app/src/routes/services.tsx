import { createFileRoute } from "@tanstack/react-router";

import { Services } from "../components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services and prices · MyKey Booking" },
      {
        name: "description",
        content:
          "The full menu: buzz, short and long cuts, new-client color consults and existing-client color, with prices, durations and lead times.",
      },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <Services level="h1" />;
}
