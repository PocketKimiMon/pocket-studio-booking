// Real business content for the combined MyKey booking site.
// Sources: pocket-studio-booking (live site), pocket-studio-booking-10a2c4c2
// (React rebuild), booking-page, projects/{mykey-booking,mobile-barber-booking}.
// Prices, lead times, policies, and contact details are the
// owner's actual ones. Never invent placeholder content here.

export const contact = {
  name: "MyKey Pocket",
  pronouns: "they/them",
  phoneDisplay: "425-918-2029",
  tel: "+14259182029",
  email: "mykeypocket@icloud.com",
  location: "Seattle, WA",
  calUrl: "https://cal.com/maneautoimation/",
  calEmbed: "https://cal.com/maneautoimation/?layout=month_view",
} as const;

export const hours = [
  { days: "Thu", time: "11am-6pm" },
  { days: "Fri", time: "12pm-5pm" },
  { days: "Sat-Sun", time: "12pm-8pm" },
] as const;

export type Service = {
  name: string;
  slug: string; // Cal.com event-type slug under cal.com/maneautoimation/
  duration: string;
  price: string;
  lead: string;
  tag: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Buzz Cut",
    slug: "buzz-cut",
    duration: "30 min",
    price: "$45",
    lead: "books 2 days out",
    tag: "quick",
    description: "Clippers all over, clean edges, back to your day.",
  },
  {
    name: "Short Cut",
    slug: "short-cut",
    duration: "45 min",
    price: "$65",
    lead: "books 2 days out",
    tag: "classic",
    description: "Scissor or clipper-over-comb, shaped to your head.",
  },
  {
    name: "Long Cut",
    slug: "long-cut",
    duration: "60 min",
    price: "$85",
    lead: "books 2 days out",
    tag: "detail",
    description: "Layers, texture, cleanup. Keep the length, lose the dead ends.",
  },
  {
    name: "New-Client Color Consult",
    slug: "hair-consultation",
    duration: "45 min",
    price: "$35",
    lead: "books 3 days out",
    tag: "required for new color",
    description:
      "First time coloring with me? We plan the lift, the tone, and the maintenance before anything touches your head.",
  },
  {
    name: "Existing-Client Color",
    slug: "existing-client-color-appointment",
    duration: "3-5 hr",
    price: "$120+",
    lead: "books 1 week out",
    tag: "color",
    description:
      "Roots, refresh, full transformation. We already know the vibe. Block the afternoon.",
  },
];

export const calEventUrl = (slug: string) =>
  `${contact.calUrl}${slug}`;

// House-call travel fee config: the owner's real values from the old booking
// pages (mobile-barber-booking/index.html config defaults and
// mykey-booking-merged/server.py CONFIG + /api/travel-fee):
// fee = flat + perMile x distance in miles, available within radius only.
// mykey-booking itself has no travel-fee logic, so nothing conflicts.
// SHOWN, not charged: travel is free right now; this only previews the
// would-be price (see design-brief.md, brand revision 4).
export const travel = {
  flat: 25,
  perMile: 2,
  radius: 30,
  bands: [
    { label: "Under 5 miles", phrase: "under 5 miles", minMi: 0, maxMi: 5 },
    { label: "5 to 15 miles", phrase: "5 to 15 miles out", minMi: 5, maxMi: 15 },
    { label: "15 to 30 miles", phrase: "15 to 30 miles out", minMi: 15, maxMi: 30 },
  ],
} as const;

export type TravelBand = (typeof travel.bands)[number];

export const travelFee = (mi: number) => travel.flat + travel.perMile * mi;

// A band is honest as a range: fee at the band's low edge to its high edge.
export const travelFeeRange = (band: TravelBand) =>
  `$${travelFee(band.minMi)} to $${travelFee(band.maxMi)}`;

export const policies = [
  {
    title: "One month at a time",
    body: "The calendar opens one month at a time, first come first serve. On the 1st of each month, the next full month becomes available.",
  },
  {
    title: "24-hour cancellation",
    body: "Need to cancel or reschedule? Give me 24 hours notice unless it is an actual emergency. Just talk to me. I am reasonable, but my time is how I pay rent.",
  },
  {
    title: "Pricing and payment",
    body: "Prices are quoted before or at service and can vary with hair and complexity. Payment is due at the appointment unless we agree otherwise. Miss a confirmed appointment without timely notice and you may be charged up to the full quoted or estimated amount, invoiced if there is no card on file.",
  },
  {
    title: "House-call space",
    body: "Provide a safe, ready spot and an accurate address. I may decline or end a visit if the location is not workable. Please disclose allergies and prior chemical work.",
  },
] as const;

export const whyDirect = [
  "No front-desk telephone game",
  "You know exactly who you are getting",
  "Rebooking reminders that actually make sense",
  "Your notes stay with me, not a rotating receptionist",
] as const;

// The scroll journey: four stops on the house-call route (see design-brief.md).
export const scenes = {
  chair: {
    src: "/assets/scene-chair.jpg",
    alt: "MyKey's empty barber chair by a bright window, a lime towel folded over the arm.",
    stop: "stop 01 · the chair",
  },
  color: {
    src: "/assets/scene-color.jpg",
    alt: "Foil highlights being painted, a lime color bowl on the trolley.",
    stop: "stop 03 · the color",
  },
} as const;
