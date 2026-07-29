import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ReadingModeToggle } from "./ReadingModeToggle";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="text-2xl font-black tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-void)" }}
      >
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
        {children}
      </div>
    </section>
  );
}

export function LegalLayout({
  kicker,
  title,
  updated,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  intro?: string;
  children: ReactNode;
}) {
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
            to="/"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ← pocket studio
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
        <div className="pt-12 sm:pt-16">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.2em",
              color: "var(--color-lime)",
            }}
          >
            {kicker}
          </p>
          <h1
            className="mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p
            className="mt-3 text-sm"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
          >
            last updated: {updated}
          </p>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
              {intro}
            </p>
          )}
        </div>

        {children}

        <div
          className="mt-14 border-2 p-5 text-sm leading-relaxed"
          style={{
            borderColor: "var(--color-void)",
            borderRadius: 12,
            background: "var(--color-card-2)",
            color: "var(--color-mist)",
          }}
        >
          questions about any of this? text{" "}
          <a href="sms:425-918-2029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            425-918-2029
          </a>{" "}
          or email{" "}
          <a
            href="mailto:mykeypocket@icloud.com"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            mykeypocket@icloud.com
          </a>
          . i'd rather explain a clause than have you guess at it.
        </div>
      </main>

      <footer
        className="border-t-2 px-5 py-8 text-center"
        style={{ borderColor: "var(--color-void)", background: "var(--color-card-2)" }}
      >
        <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          © pocket studio / mykey pocket · seattle, wa ·{" "}
          <Link to="/privacy" className="underline-offset-4 hover:underline">
            privacy
          </Link>{" "}
          ·{" "}
          <Link to="/terms" className="underline-offset-4 hover:underline">
            terms
          </Link>
        </p>
      </footer>
    </div>
  );
}
