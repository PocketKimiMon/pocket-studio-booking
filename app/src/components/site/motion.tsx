// Client-only motion runtime for MyKey Booking (cinema tier).
// Everything here lives inside useEffect: SSR renders the full static page,
// this layer adds the scroll journey on top. Under prefers-reduced-motion it
// does nothing at all and the page stays completely usable.
import { useEffect } from "react";

export function MotionRuntime() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Service accordion works regardless of motion preference.
    const toggles = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-service-toggle]"),
    );
    const onToggle = (btn: HTMLButtonElement) => () => {
      const row = btn.closest(".mk-service-row");
      if (!row) return;
      const open = row.classList.toggle("mk-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    const unbind = toggles.map((btn) => {
      const fn = onToggle(btn);
      btn.addEventListener("click", fn);
      return () => btn.removeEventListener("click", fn);
    });

    if (reduce) {
      return () => unbind.forEach((u) => u());
    }

    let cleanup = () => {};
    let cancelled = false;

    void Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("lenis"),
      import("split-type"),
    ]).then(([gsapMod, stMod, lenisMod, splitMod]) => {
        if (cancelled) return;
        const gsap = gsapMod.gsap;
        const ScrollTrigger = stMod.ScrollTrigger;
        const Lenis = lenisMod.default;
        const SplitType = splitMod.default;
        gsap.registerPlugin(ScrollTrigger);

        // Lenis smooth scroll bridged to GSAP's ticker (autoRaf off, or scrub stutters).
        const lenis = new Lenis({ anchors: true, autoRaf: false });
        const raf = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        lenis.on("scroll", ScrollTrigger.update);

        // The journey: every scene plate pushes gently forward as you scroll
        // through it (transform-only; opacity never moves).
        const scrubs = Array.from(
          document.querySelectorAll<HTMLElement>("[data-scrub]"),
        ).map((img) =>
          gsap.fromTo(
            img,
            { scale: 1, yPercent: 0 },
            {
              scale: 1.16,
              yPercent: -3,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("section") ?? img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          ),
        );

        // Hero headline build: fires on mount (screenshot-safe), lines masked.
        const split = new SplitType("[data-split]", { types: "lines,words" });
        let heroTween: { kill(): void } | undefined;
        if (split.lines && split.lines.length > 0) {
          split.lines.forEach((line) => {
            const mask = document.createElement("span");
            mask.className = "mk-line-mask";
            line.parentNode?.insertBefore(mask, line);
            mask.appendChild(line);
            line.classList.add("mk-line-inner");
          });
          heroTween = gsap.from("[data-split] .mk-line-inner", {
            yPercent: 112,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.15,
          });
        }

        // Section headings: scroll-linked transform drift (no opacity, no pinning).
        const drifts = Array.from(
          document.querySelectorAll<HTMLElement>(".mk-section-head"),
        ).map((head) =>
          gsap.fromTo(
            head,
            { y: 56 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: head,
                start: "top 96%",
                end: "top 55%",
                scrub: true,
              },
            },
          ),
        );

        cleanup = () => {
          unbind.forEach((u) => u());
          scrubs.forEach((t) => {
            t.scrollTrigger?.kill();
            t.kill();
          });
          drifts.forEach((t) => {
            t.scrollTrigger?.kill();
            t.kill();
          });
          heroTween?.kill();
          split.revert();
          lenis.destroy();
          gsap.ticker.remove(raf);
          ScrollTrigger.refresh();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup();
      // If the dynamic imports never resolved, accordion handlers still unbind.
      unbind.forEach((u) => u());
    };
  }, []);

  return null;
}
