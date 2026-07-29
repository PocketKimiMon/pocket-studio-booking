import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, POSTS } from "../lib/posts";
import { headFor } from "../lib/seo";
import { ReadingModeToggle } from "../components/ReadingModeToggle";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => headFor(`/blog/${loaderData?.slug ?? ""}`),
  component: Page,
  notFoundComponent: () => (
    <div
      className="grid min-h-screen place-items-center px-6 text-center"
      style={{ background: "var(--color-bone)", color: "var(--color-void)" }}
    >
      <div>
        <h1 className="text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>
          that dispatch doesn't exist
        </h1>
        <Link
          to="/blog"
          className="mt-6 inline-block border-2 px-6 py-3 font-black"
          style={{
            background: "var(--color-lime)",
            borderColor: "var(--color-void)",
            boxShadow: "4px 4px 0 var(--color-void)",
            color: "var(--color-void)",
          }}
        >
          ← all dispatches
        </Link>
      </div>
    </div>
  ),
});

function Page() {
  const post = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/blog"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ← dispatches
          </Link>
          <div className="flex items-center gap-3">
            <ReadingModeToggle compact />
            <Link
              to="/book"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
                color: "var(--color-void)",
              }}
            >
              BOOK
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24">
        <article className="pt-12 sm:pt-16">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.2em",
              color: "var(--color-flush)",
            }}
          >
            {post.date} · DISPATCH FROM THE CHAIR
          </p>
          <h1
            className="mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          <figure
            className="mt-8 overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "var(--color-void)", boxShadow: "6px 6px 0 var(--color-lime)" }}
          >
            <img
              src="/images/blog-header.jpg"
              alt="the chair, mid-house-call"
              className="aspect-[21/9] w-full object-cover"
              loading="eager"
            />
          </figure>

          <div className="mt-8 space-y-5">
            {post.body.map((para, i) =>
              para.trim() === "— mykey" ? (
                <p
                  key={i}
                  className="pt-2 text-3xl"
                  style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
                >
                  — mykey
                </p>
              ) : (
                <p
                  key={i}
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-mist)" }}
                >
                  {para}
                </p>
              ),
            )}
          </div>
        </article>

        <section
          className="mt-12 border-2 p-6 text-center"
          style={{
            borderColor: "var(--color-void)",
            borderRadius: 16,
            background: "var(--color-lime)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          <p className="text-2xl" style={{ fontFamily: "var(--font-hand)" }}>
            want the chair version of this conversation? ~
          </p>
          <Link
            to="/book"
            className="mt-4 inline-block border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-void)",
              borderColor: "var(--color-void)",
              color: "var(--color-bone)",
              boxShadow: "4px 4px 0 rgba(11,11,15,.4)",
            }}
          >
            BOOK THE CHAIR →
          </Link>
        </section>

        {others.length > 0 && (
          <section className="mt-14">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "var(--color-ash)",
              }}
            >
              KEEP READING
            </p>
            <div className="mt-4 grid gap-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/blog/$slug"
                  params={{ slug: o.slug }}
                  className="group flex items-baseline justify-between gap-4 border-2 px-5 py-4 transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--color-void)",
                    borderRadius: 12,
                    background: "var(--color-card-w)",
                    boxShadow: "3px 3px 0 var(--color-void)",
                  }}
                >
                  <span>
                    <span
                      className="block text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
                    >
                      {o.date}
                    </span>
                    <span
                      className="block text-lg font-black"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {o.title}
                    </span>
                  </span>
                  <span className="shrink-0 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer
        className="border-t-2 px-5 py-8 text-center"
        style={{ borderColor: "var(--color-void)", background: "var(--color-card-2)" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          © pocket studio / mykey pocket · seattle, wa ·{" "}
          <Link to="/" className="underline-offset-4 hover:underline">
            home
          </Link>
        </p>
      </footer>
    </div>
  );
}
