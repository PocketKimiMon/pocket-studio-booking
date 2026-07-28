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

export const SERVICES: Service[] = [
  {
    slug: "buzz-cut",
    name: "Buzz Cut",
    duration: "30 min",
    price: "$50",
    accent: "var(--color-lime)",
    blurb: "Clippers all over, clean edges.",
    detail: "Clean fade or one-length buzz. In and out, sharp — back to your day.",
    goodFor: "Fades, one-length buzzes, undercut designs, shape-ups between bigger cuts.",
    whatHappens: [
      "Quick chat about guard length, fade height, and how you wear it.",
      "Clippers all over or a tailored fade — your call.",
      "Edges, neckline, and around the ears detailed clean.",
      "Style check + tips to keep it crisp until the next one.",
    ],
    images: [{ src: "/work/buzz-1.jpg", alt: "Fresh fade with clean edges" }],
  },
  {
    slug: "taper-fade-cut",
    name: "Taper/Fade Cut",
    duration: "45 min",
    price: "$65",
    accent: "var(--color-lime)",
    blurb: "Crisp taper or skin fade, blended clean.",
    detail: "Low, mid, or high — tapered neckline or a full skin fade, dialed to your head shape.",
    goodFor: "Skin fades, tapers, burst fades, keeping the top while the sides stay tight.",
    whatHappens: [
      "We pick the height and blend — bring a photo if you've got one.",
      "Clipper work with a razor finish on the edges.",
      "Blend check in the mirror from every angle.",
      "Styling tips to keep it sharp between cuts.",
    ],
    images: [{ src: "/work/buzz-1.jpg", alt: "Fresh fade with clean edges" }],
  },
  {
    slug: "short-cut",
    name: "Short Cut",
    duration: "45 min",
    price: "$65",
    accent: "var(--color-flush)",
    blurb: "Shaped to your head.",
    detail: "Scissor or clipper-over-comb. Precision short shapes with intention.",
    goodFor:
      "Textured crops, curly shapes, pixies, mullets, anything above the shoulders with a point of view.",
    whatHappens: [
      "We talk shape, texture, and how much work you want mornings to be.",
      "Scissor work or clipper-over-comb, cut to how your hair actually grows.",
      "Texturizing and weight removal so it falls right on its own.",
      "Styled to finish, with product notes if you want them.",
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
    price: "$100",
    accent: "var(--color-violet-brand)",
    blurb: "Keep the length, lose dead ends.",
    detail: "Long layers, curtain bangs, wolf cuts, shags. Bring inspo.",
    goodFor: "Long layers, curtain bangs, wolf cuts, shags, big dust-offs that keep your length.",
    whatHappens: [
      "Inspo review — bring photos, I'll tell you honestly what your hair will do.",
      "Sectioned, precise cutting: layers, face-frame, bangs as needed.",
      "Dead ends gone without losing the length you grew.",
      "Blow-dry or air-dry styling to match how you'll actually wear it.",
    ],
    images: [
      { src: "/work/long-1.jpg", alt: "Long layered cut, shoulder length" },
      { src: "/work/long-2.jpg", alt: "Layered shape with movement" },
    ],
  },
  {
    slug: "curl-cut",
    name: "Curl Cut",
    duration: "75 min",
    price: "$120",
    accent: "var(--color-violet-brand)",
    blurb: "Curl-by-curl shaping, cut dry.",
    detail:
      "Your curls cut the way they actually spring — dry, curl by curl, no surprises after the first wash.",
    goodFor:
      "Waves, curls, and coils that need shape — from loose 2s to tight 4s, first curl cuts and rescues.",
    whatHappens: [
      "Come with your hair how you normally wear it — we cut it dry, curl by curl.",
      "Shape built for your curl pattern and shrinkage.",
      "Wash, hydrate, and define so you see the real result.",
      "A routine you can actually repeat at home.",
    ],
    images: [{ src: "/work/short-3.jpg", alt: "Curly short cut, natural light" }],
  },
  {
    slug: "hair-consultation",
    name: "New-Client Color Consult",
    duration: "45 min",
    price: "$35",
    accent: "var(--color-violet-brand)",
    blurb: "Required before new color.",
    detail:
      "First time coloring with me? We plan the lift, tone, and upkeep before anything touches your head.",
    goodFor: "Anyone new to my chair who wants color — vivids, blondes, coverage, corrections.",
    whatHappens: [
      "We look at your hair's history — every box dye confession stays between us.",
      "Strand test if needed, so there are no surprises on the day.",
      "We plan lift, tone, timing, and honest upkeep costs.",
      "You leave with a real plan and a booked color date. Consult fee applies to your first color.",
    ],
    images: [
      { src: "/work/consult-1.jpg", alt: "Vivid green undercut color result" },
      { src: "/work/consult-2.jpg", alt: "Peekaboo color placement" },
    ],
  },
  {
    slug: "existing-client-color-appointment",
    name: "Existing-Client Color",
    duration: "3–5 hr",
    price: "$120+",
    accent: "var(--color-lime)",
    blurb: "We already know the vibe.",
    detail: "Roots, refresh, gloss, lift, tone, full transformations for returning clients.",
    goodFor:
      "Returning color clients: root touch-ups, gloss refreshes, vivids, dimensional work, big changes.",
    whatHappens: [
      "We confirm the plan from your intake — refresh or something new.",
      "Color mixed and applied in sections; complex work runs 3–5 hours, so get comfy.",
      "Processing, rinse, gloss/tone as the formula needs.",
      "Cut-in or style finish, plus home-care notes to keep it alive longer.",
    ],
    images: [
      { src: "/work/color-1.jpg", alt: "Dimensional color with vivid peekaboo" },
      { src: "/work/color-2.jpg", alt: "Fresh color result, three-quarter view" },
      { src: "/work/color-3.jpg", alt: "Color placement detail" },
    ],
  },
];
