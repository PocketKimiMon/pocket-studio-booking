import { useState } from "react";

type WorkImage = {
  src: string;
  alt: string;
};

const SERVICE_WORK: { [key: string]: WorkImage[] } = {
  "buzz-cut": [
    { src: "/work/buzz-1.jpg", alt: "Fresh fade, clean edges" },
    { src: "/work/buzz-2.jpg", alt: "Buzz cut with skin fade detail" },
  ],
  "short-cut": [
    { src: "/work/short-1.jpg", alt: "Short textured cut, side view" },
    { src: "/work/short-2.jpg", alt: "Precision short shape" },
    { src: "/work/short-3.jpg", alt: "Curly short cut, natural light" },
  ],
  "long-cut": [
    { src: "/work/long-1.jpg", alt: "Long layered cut, shoulder length" },
    { src: "/work/long-2.jpg", alt: "Layered shape with movement" },
  ],
  "hair-consultation": [
    { src: "/work/consult-1.jpg", alt: "Vivid color result, natural light" },
    { src: "/work/consult-2.jpg", alt: "Color placement detail" },
  ],
  "existing-client-color-appointment": [
    { src: "/work/color-1.jpg", alt: "Dimensional color result" },
    { src: "/work/color-2.jpg", alt: "Fresh color finish, three-quarter view" },
    { src: "/work/color-3.jpg", alt: "Color placement detail" },
  ],
};

type Props = {
  serviceSlug: string;
  className?: string;
};

export default function WorkGallery({ serviceSlug, className }: Props) {
  const [openIndex, setOpenIndex] = useState<null | { images: WorkImage[]; index: number }>(null);

  const images = SERVICE_WORK[serviceSlug] ?? [];

  return (
    <>
      <section
        className={`border-b-2 px-5 py-12 sm:py-16 ${className ?? ""}`}
        style={{ background: "linear-gradient(rgba(11,11,15,.95), rgba(11,11,15,.95)), url(/gallery-texture-1.jpg) center/cover", borderColor: "var(--color-void)" }}
        aria-label="Quick look"
      >
        <div className="mx-auto max-w-6xl">
          <div className={`grid gap-4 ${images.length === 1 ? "sm:grid-cols-[2fr_1fr]" : images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {images.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenIndex({ images, index: idx })}
                className={`overflow-hidden border-2 text-left transition-transform duration-200 hover:-translate-y-1 ${idx % 2 === 1 ? "sm:translate-y-4" : ""}`}
                style={{ borderColor: "var(--color-void)", boxShadow: "6px 6px 0 var(--color-void)", background: "var(--color-card-w)" }}
              >
                <img src={img.src} alt={img.alt} className="aspect-[4/5] w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
            real clients, real couches · shared with permission
          </p>
        </div>
      </section>

      {openIndex && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal
          aria-label="Full-screen work preview"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute right-4 top-4 border-2 px-3 py-1 text-sm font-black"
            style={{ background: "var(--color-card-w)", borderColor: "var(--color-lime)", color: "var(--color-lime)" }}
            aria-label="Close preview"
          >
            CLOSE
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((prev) => (prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : prev));
            }}
            className="absolute left-4 top-1/2 hidden border-2 px-3 py-3 text-2xl font-black sm:block"
            style={{ transform: "translateY(-50%)", background: "var(--color-card-w)", borderColor: "var(--color-lime)", color: "var(--color-lime)" }}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((prev) => (prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev));
            }}
            className="absolute right-4 top-1/2 hidden border-2 px-3 py-3 text-2xl font-black sm:block"
            style={{ transform: "translateY(-50%)", background: "var(--color-card-w)", borderColor: "var(--color-lime)", color: "var(--color-lime)" }}
            aria-label="Next image"
          >
            →
          </button>
          <div className="max-h-[85vh] max-w-[90vw]">
            <img
              src={openIndex.images[openIndex.index].src}
              alt={openIndex.images[openIndex.index].alt}
              className="max-h-full max-w-full border-2 shadow-xl"
              style={{ borderColor: "var(--color-lime)" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
