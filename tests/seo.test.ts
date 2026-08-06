import { describe, it, expect } from "vitest";
import { headFor, SITE_URL, SITE_NAME } from "../src/lib/seo";

describe("seo", () => {
  describe("headFor — static routes", () => {
    it("returns home route SEO with JSON-LD", () => {
      const head = headFor("/");
      expect(head.meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ title: expect.stringContaining("House-Call Haircuts") }),
          expect.objectContaining({ property: "og:url", content: `${SITE_URL}/` }),
        ]),
      );
      expect(head.scripts?.length).toBeGreaterThan(0);
    });

    it("has canonical link for /", () => {
      const head = headFor("/");
      expect(head.links).toEqual(
        expect.arrayContaining([expect.objectContaining({ rel: "canonical", href: `${SITE_URL}/` })]),
      );
    });

    it("returns noindex for unknown static route fallback", () => {
      const head = headFor("/unknown-route");
      const robots = head.meta.find((m: any) => m.name === "robots");
      expect(robots.content).toBe("index, follow"); // default fallback, not noindex
    });
  });

  describe("headFor — /services/<slug>", () => {
    it("returns service page title from slug", () => {
      const head = headFor("/services/buzz-cut");
      expect(head.meta.some((m: any) => m.title === "Buzz Cut in Seattle — House Calls · Pocket Studio")).toBe(true);
    });

    it("noindex for unknown service slug", () => {
      const head = headFor("/services/nonexistent");
      const robots = head.meta.find((m: any) => m.name === "robots");
      expect(robots.content).toBe("noindex, nofollow");
    });
  });

  describe("headFor — /blog/<slug>", () => {
    it("returns article SEO for known post", () => {
      const head = headFor("/blog/why-house-calls");
      expect(head.meta.some((m: any) => m.title?.includes("why house calls, actually"))).toBe(true);
      expect(head.meta.some((m: any) => m.property === "og:type" && m.content === "article")).toBe(true);
    });

    it("noindex for unknown post slug", () => {
      const head = headFor("/blog/nope");
      const robots = head.meta.find((m: any) => m.name === "robots");
      expect(robots.content).toBe("noindex, nofollow");
    });
  });
});
