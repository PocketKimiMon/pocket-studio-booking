import { createFileRoute } from "@tanstack/react-router";

import { HoursContact, Policies } from "../components/site/sections";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies, hours and contact · MyKey Booking" },
      {
        name: "description",
        content:
          "The fine print, spelled out: the 24-hour cancel rule, pricing, house-call basics, plus hours and how to reach MyKey.",
      },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: PoliciesPage,
});

function PoliciesPage() {
  return (
    <>
      <Policies level="h1" />
      <HoursContact />
    </>
  );
}
