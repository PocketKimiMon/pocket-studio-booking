export type Service = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  blurb: string;
  detail: string;
  accent: string;
  images: { src: string; alt: string }[];
  whatHappens: string[];
  goodFor: string;
};

export const CAL_BASE = "https://cal.com/maneautoimation/";

/* Legacy Stripe Payment Link — still valid for manual sharing; the booking
   page now uses /api/stripe/checkout (hosted Checkout) instead. */
export const STRIPE_DEPOSIT_LINK = "https://buy.stripe.com/eVqfZg2B26Nb3554NH9Zm05";

export const SERVICES: Service[] = [
  {
    slug: "buzz-cut",
    name: "Buzz Cut",
    duration: "30 min",
    price: "priced at the chair",
    accent: "var(--color-lime)",
    blurb: "The reset button.",
    detail: "Clippers all over, clean edges, back to your day. Thirty minutes, no small talk unless you want it.",
    goodFor: "Fades, one-length buzzes, undercuts, shape-ups between bigger cuts. The 'I just want it clean' appointment.",
    whatHappens: [
      "Quick chat about guard length, fade height, and how you actually wear it.",
      "Clippers all over or a tailored fade — your call.",
      "Edges, neckline, ears detailed clean.",
      "Style check + tips to keep it crisp.",
    ],
    images: [
      { src: "/work/buzz-1.jpg", alt: "Fresh fade, clean edges" },
      { src: "/work/buzz-2.jpg", alt: "Buzz cut with skin fade detail" },
    ],
  },
  {
    slug: "short-cut",
    name: "Short Cut",
    duration: "45 min",
    price: "priced at the chair",
    accent: "var(--color-flush)",
    blurb: "Shaped to your head, not a Pinterest board.",
    detail: "Scissor or clipper-over-comb. I cut to how your hair actually grows, not how it grows on models.",
    goodFor: "Textured crops, curly shapes, pixies, mullets. Anything above the shoulders with a point of view.",
    whatHappens: [
      "We talk shape and how much work you want mornings to be.",
      "Cut to your hair's actual growth pattern.",
      "Texturizing and weight removal so it falls right.",
      "Product notes if you want them, none if you don't.",
    ],
    images: [
      { src: "/work/short-1.jpg", alt: "Short textured cut, side view" },
      { src: "/work/short-2.jpg", alt: "Precision short shape" },
      { src: "/work/short-3.jpg", alt: "Curly short cut, natural light" },
    ],
  },
  {
    slug: "long-cut",
    name: "Long Cut",
    duration: "60 min",
    price: "priced at the chair",
    accent: "var(--color-violet-brand)",
    blurb: "Keep the length, kill the dead ends.",
    detail: "Long layers, curtain bangs, wolf cuts, shags. Bring inspo — I'll tell you honestly what your hair will do.",
    goodFor: "Long layers, curtain bangs, wolf cuts, shags, big dust-offs that keep your length.",
    whatHappens: [
      "Inspo review — bring photos, I'll tell you the truth.",
      "Sectioned, precise cutting: layers, face-frame, bangs as needed.",
      "Dead ends gone without losing the length you grew.",
      "Blow-dry or air-dry to match how you'll actually wear it.",
    ],
    images: [
      { src: "/work/long-1.jpg", alt: "Long layered cut, shoulder length" },
      { src: "/work/long-2.jpg", alt: "Layered shape with movement" },
    ],
  },
  {
    slug: "hair-consultation",
    name: "New-Client Color Consult",
    duration: "45 min",
    price: "priced at the chair",
    accent: "var(--color-violet-brand)",
    blurb: "Let's plan this before I fry your hair.",
    detail: "First time coloring with me? We sit down and plan lift, tone, and upkeep before anything touches your head. Required for new color — I'm not winging it.",
    goodFor: "Anyone new to my chair who wants color — vivids, blondes, coverage, corrections. Bring your box-dye confessions.",
    whatHappens: [
      "We look at your hair's history — every box dye confession stays between us.",
      "Strand test if needed, so there are no surprises on the day.",
      "We plan lift, tone, timing, and honest upkeep costs.",
      "You leave with a real plan and a booked color date.",
    ],
    images: [
      { src: "/work/consult-1.jpg", alt: "Vivid color result, natural light" },
      { src: "/work/consult-2.jpg", alt: "Color placement detail" },
    ],
  },
  {
    slug: "existing-client-color-appointment",
    name: "Existing-Client Color Appointment",
    duration: "3 hr / up to 5 hr",
    price: "priced at the chair",
    accent: "var(--color-lime)",
    blurb: "We already know the vibe.",
    detail: "Roots, refresh, gloss, lift, tone, full transformations for returning clients. Block the afternoon — complex sessions run 3–5 hours and I'm not rushing your hair for anyone's schedule.",
    goodFor: "Returning color clients: root touch-ups, gloss refreshes, vivids, dimensional work, big changes.",
    whatHappens: [
      "We confirm the plan from your last session — refresh or something new.",
      "Color mixed and applied in sections; get comfy.",
      "Processing, rinse, gloss/tone as the formula needs.",
      "Cut-in or style finish, plus home-care notes.",
    ],
    images: [
      { src: "/work/color-1.jpg", alt: "Dimensional color result" },
      { src: "/work/color-2.jpg", alt: "Fresh color finish, three-quarter view" },
      { src: "/work/color-3.jpg", alt: "Color placement detail" },
    ],
  },
];
