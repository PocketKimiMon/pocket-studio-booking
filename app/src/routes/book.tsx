import { createFileRoute } from "@tanstack/react-router";

import { ChatSection } from "../components/site/chat";
import { BookingCalendar } from "../components/site/sections";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a cut · MyKey Booking" },
      {
        name: "description",
        content:
          "Book direct with MyKey: answer four quick picks in the booking chat, or go straight to the live calendar. Chair in Fremont or house calls.",
      },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <ChatSection level="h1" />
      <BookingCalendar />
    </>
  );
}
