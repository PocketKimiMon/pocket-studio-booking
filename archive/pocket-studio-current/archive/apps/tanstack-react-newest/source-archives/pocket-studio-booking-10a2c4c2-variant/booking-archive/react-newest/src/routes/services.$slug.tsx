import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CAL_BASE, SERVICES } from "../lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Service"} — Pocket Studio` },
      { name: "description", content: loaderData?.detail ?? "" },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const svc = Route.useLoaderData();
  const idx = SERVICES.findIndex((s) => s.slug === svc.slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <div style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)", minHeight: "100vh" }}>
      {/* top bar */}
      <header className="sticky top-0 z-50 border-b-2" style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link to="/" className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            ✂ POCKET STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" hash="services" className="hidden text-sm underline-offset-4 hover:underline sm:block" style={{ fontFamily: "var(--font-mono)" }}>
              ← all services
            </Link>
            <a
              href={`${CAL_BASE}${svc.slug}`}
              target="_blank"
              rel="noreferrer"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-lime)", borderColor: "var(--color-void)", boxShadow: "3px 3px 0 var(--color-void)" }}
            >
              BOOK
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-16">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-ash)" }}>
          SERVICE 0{idx + 1} / 0{SERVICES.length}
        </p>
        <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
          {svc.name}
          <span style={{ color: svc.accent === "var(--color-lime)" ? "var(--color-flush)" : svc.accent }}>.</span>
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-3" style={{ fontFamily: "var(--font-mono)", fontSize: 14 }}>
          <span className="border-2 px-3 py-1" style={{ borderColor: "var(--color-void)", background: "#fff" }}>{svc.duration}</span>
          <span className="border-2 px-3 py-1 font-black" style={{ borderColor: "var(--color-void)", background: svc.accent, color: "var(--color-void)" }}>{svc.price}</span>
          <span style={{ color: "var(--color-ash)" }}>house call · Seattle</span>
        </div>
        <p className="mt-6 max-w-xl text-xl leading-relaxed" style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}>
          {svc.detail}
        </p>
      </section>

      {/* gallery */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className={`grid gap-4 ${svc.images.length === 1 ? "sm:grid-cols-[2fr_1fr]" : svc.images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {svc.images.map((img, i) => (
            <figure
              key={img.src}
              className={`overflow-hidden border-2 ${i % 2 === 1 ? "sm:translate-y-4" : ""}`}
              style={{ borderColor: "var(--color-void)", boxShadow: "6px 6px 0 var(--color-void)", background: "#fff" }}
            >
              <img src={img.src} alt={img.alt} className="aspect-[4/5] w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            </figure>
          ))}
          {svc.images.length === 1 && (
            <div className="flex items-center border-2 p-6" style={{ borderColor: "var(--color-void)", background: "var(--color-card-2)", boxShadow: "6px 6px 0 var(--color-void)" }}>
              <p className="rotate-[-3deg] text-3xl leading-snug" style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}>
                fresh out of the chair — more coming to the wall soon!
              </p>
            </div>
          )}
        </div>
        <p className="mt-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          real clients, real couches · shared with permission
        </p>
      </section>

      {/* what happens + good for */}
      <section className="border-y-2" style={{ background: "var(--color-card-2)", borderColor: "var(--color-void)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)" }}>What happens</h2>
            <ol className="mt-6 space-y-4">
              {svc.whatHappens.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center border-2 text-sm font-black"
                    style={{ borderColor: "var(--color-void)", background: i === 0 ? svc.accent : "#fff", fontFamily: "var(--font-mono)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-start border-2 p-6" style={{ background: "var(--color-void)", color: "var(--color-bone)", borderColor: "var(--color-void)", boxShadow: "6px 6px 0 " + (svc.accent === "var(--color-lime)" ? "var(--color-lime)" : svc.accent) }}>
            <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>Good for</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-bone)" }}>{svc.goodFor}</p>
            <p className="mt-5 text-xs leading-relaxed" style={{ color: "var(--color-ash)" }}>
              Every appointment is a house call — I bring the chair, tools, and the gossip. You bring decent light and an outlet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-14 text-center sm:py-20">
        <h2 className="text-3xl font-black sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Want this one?
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`${CAL_BASE}${svc.slug}`}
            target="_blank"
            rel="noreferrer"
            className="border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{ background: svc.accent, borderColor: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)", color: "var(--color-void)" }}
          >
            BOOK {svc.name.toUpperCase()} →
          </a>
          <Link
            to="/book"
            className="border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{ background: "#fff", borderColor: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)" }}
          >
            SEE ALL SLOTS
          </Link>
        </div>
        <p className="mt-8 text-sm" style={{ color: "var(--color-ash)" }}>
          Next up:{" "}
          <Link to="/services/$slug" params={{ slug: next.slug }} className="font-bold underline underline-offset-4" style={{ color: "var(--color-void)" }}>
            {next.name} →
          </Link>
        </p>
      </section>

      <footer className="border-t px-5 py-8" style={{ background: "var(--color-void)", borderColor: "var(--color-ash)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          <span>© {new Date().getFullYear()} Pocket Studio · MyKey Pocket (they/them) · Seattle</span>
          <span className="flex gap-5">
            <Link to="/" className="underline-offset-4 hover:underline">Home</Link>
            <a href="/classic/terms.html" className="underline-offset-4 hover:underline">Terms</a>
            <a href="/classic/privacy.html" className="underline-offset-4 hover:underline">Privacy</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
