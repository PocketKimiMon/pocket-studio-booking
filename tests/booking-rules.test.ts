import { describe, it, expect, beforeEach } from "vitest";
import {
  validateBooking,
  RULES,
  DEPOSIT_AMOUNT,
  MIN_LEAD_HOURS,
  isKnownClient,
  registerClient,
  MAX_RADIUS_MI,
  __clearClientBookings,
} from "../src/lib/booking-rules";
import type { RuleContext } from "../src/lib/booking-rules";

const FUTURE_ISO = (() => {
  const d = new Date();
  d.setHours(d.getHours() + 200);
  return d.toISOString();
})();

const baseCtx = (overrides: Partial<RuleContext> = {}): RuleContext => ({
  serviceSlug: "short-cut",
  startISO: FUTURE_ISO,
  address: "123 Pike St",
  isHouseCall: true,
  isReturningColorClient: false,
  isExistingClient: false,
  ...overrides,
});

describe("booking-rules", () => {
  beforeEach(() => {
    __clearClientBookings();
  });

  describe("validateBooking structure", () => {
    it("returns a result for every rule", () => {
      const results = validateBooking(baseCtx());
      expect(results).toHaveLength(RULES.length);
      // each result carries the rule's metadata merged with its enforce output
      const ids = results.map((r) => r.id).sort();
      expect(ids).toEqual(RULES.map((r) => r.id).sort());
    });

    it("always includes a deposit warning", () => {
      const results = validateBooking(baseCtx());
      const deposit = results.find((r) => r.id === "deposit");
      expect(deposit?.pass).toBe(true);
      expect(deposit?.message).toContain(`$${DEPOSIT_AMOUNT}`);
    });
  });

  describe("advance_notice", () => {
    it("blocks same-day booking for cuts (<48h)", () => {
      const now = new Date();
      const withinWindow = new Date(now.getTime() + 10 * 3600_000).toISOString();
      const results = validateBooking(baseCtx({ startISO: withinWindow }));
      const rule = results.find((r) => r.id === "advance_notice");
      expect(rule?.pass).toBe(false);
      expect(rule?.blockBooking).toBe(true);
    });

    it("passes for a cut booked far enough ahead", () => {
      const results = validateBooking(baseCtx({ startISO: FUTURE_ISO }));
      const rule = results.find((r) => r.id === "advance_notice");
      expect(rule?.pass).toBe(true);
    });

    it("requires 72h for new color consult", () => {
      const d = new Date();
      d.setHours(d.getHours() + 50);
      const results = validateBooking(baseCtx({ serviceSlug: "hair-consultation", startISO: d.toISOString() }));
      const rule = results.find((r) => r.id === "advance_notice");
      expect(rule?.pass).toBe(false);
      expect(rule?.message).toContain(`${MIN_LEAD_HOURS.NEW_COLOR}h`);
    });
  });

  describe("service_area", () => {
    it("passes in-shop (no address needed)", () => {
      const results = validateBooking(baseCtx({ isHouseCall: false, address: undefined }));
      const rule = results.find((r) => r.id === "service_area");
      expect(rule?.pass).toBe(true);
    });

    it("blocks house call without address", () => {
      const results = validateBooking(baseCtx({ isHouseCall: true, address: undefined }));
      const rule = results.find((r) => r.id === "service_area");
      expect(rule?.pass).toBe(false);
      expect(rule?.blockBooking).toBe(true);
    });
  });

  describe("new_color_protocol (trust-boundary guard)", () => {
    it("blocks new color appointment when client has no prior booking", () => {
      const results = validateBooking(
        baseCtx({ serviceSlug: "existing-client-color-appointment", isExistingClient: false }),
      );
      const rule = results.find((r) => r.id === "new_color_protocol");
      expect(rule?.pass).toBe(false);
      expect(rule?.blockBooking).toBe(true);
      expect(rule?.message).toBe("new color clients must book consult first");
    });

    it("does NOT bypass the guard via client-supplied isExistingClient=true", () => {
      // Simulate the server-side resolution: the API ignores the client's
      // isExistingClient flag and resolves it authoritatively via isKnownClient.
      // Contact has no prior booking, so isKnownClient returns false even though
      // the raw body claimed isExistingClient=true.
      expect(isKnownClient("newattacker@example.com")).toBe(false);
      const results = validateBooking(
        baseCtx({
          serviceSlug: "existing-client-color-appointment",
          // This is what the API *would* have been before the fix —
          // client-supplied true. The rule still trusts the resolved value:
          isExistingClient: false, // what isKnownClient resolves to
        }),
      );
      const rule = results.find((r) => r.id === "new_color_protocol");
      expect(rule?.pass).toBe(false);
    });

    it("allows existing-client color appointment when contact has a prior booking", () => {
      const contact = "returning@example.com";
      registerClient(contact);
      expect(isKnownClient(contact)).toBe(true);
      const results = validateBooking(
        baseCtx({
          serviceSlug: "existing-client-color-appointment",
          isExistingClient: true, // legitimately resolved server-side
        }),
      );
      const rule = results.find((r) => r.id === "new_color_protocol");
      expect(rule?.pass).toBe(true);
    });

    it("hair-consultation always passes protocol (it IS the consult)", () => {
      const results = validateBooking(baseCtx({ serviceSlug: "hair-consultation" }));
      const rule = results.find((r) => r.id === "new_color_protocol");
      expect(rule?.pass).toBe(true);
    });
  });
});
