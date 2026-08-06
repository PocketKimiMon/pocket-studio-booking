import { describe, it, expect } from "vitest";
import { TRAVEL, BASE_LAT, BASE_LON, haversineMi, computeTravelFee } from "../src/lib/travel";
import { MAX_RADIUS_MI } from "../src/lib/booking-rules";

describe("travel", () => {
  describe("haversineMi", () => {
    it("returns ~0 for the same point", () => {
      const d = haversineMi(BASE_LAT, BASE_LON, BASE_LAT, BASE_LON);
      expect(d).toBeCloseTo(0, 5);
    });

    it("computes Seattle → Bellevue distance (~8 miles)", () => {
      // Bellevue downtown
      const bellevueLat = 47.6103;
      const bellevueLon = -122.2014;
      const d = haversineMi(BASE_LAT, BASE_LON, bellevueLat, bellevueLon);
      expect(d).toBeGreaterThan(5);
      expect(d).toBeLessThan(15);
    });

    it("computes Seattle → Portland distance (~125 miles)", () => {
      const portlandLat = 45.5152;
      const portlandLon = -122.6784;
      const d = haversineMi(BASE_LAT, BASE_LON, portlandLat, portlandLon);
      expect(d).toBeGreaterThan(120);
      expect(d).toBeLessThan(160);
    });
  });

  describe("computeTravelFee", () => {
    it("charges flat + perMile within range", () => {
      const result = computeTravelFee(10);
      expect("fee" in result).toBe(true);
      if ("fee" in result) {
        expect(result.fee).toBe(TRAVEL.flat + TRAVEL.perMile * 10);
      }
    });

    it("caps at max radius — returns outside flag", () => {
      const result = computeTravelFee(TRAVEL.maxRadiusMi + 5);
      expect("outside" in result).toBe(true);
      if ("outside" in result) {
        expect(result.miles).toBe(TRAVEL.maxRadiusMi + 5);
      }
    });

    it("exactly at max radius is still in range", () => {
      const result = computeTravelFee(TRAVEL.maxRadiusMi);
      expect("fee" in result).toBe(true);
    });
  });

  describe("constants", () => {
    it("MAX_RADIUS and TRAVEL.maxRadiusMi are consistent", () => {
      // Both come from booking-rules and travel respectively — they should agree.
      expect(MAX_RADIUS_MI).toBe(TRAVEL.maxRadiusMi);
    });
  });
});
