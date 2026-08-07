import { describe, expect, it, beforeEach } from "vitest";
import {
  buildCheckoutParams,
  __clearPayments,
  __peekPayments,
  recordPayment,
} from "../src/lib/stripe";
import { DEPOSIT_AMOUNT } from "../src/lib/booking-rules";

describe("buildCheckoutParams", () => {
  it("builds a $25 deposit line item with metadata", () => {
    const params = buildCheckoutParams(
      {
        serviceSlug: "buzz-cut",
        serviceName: "Buzz Cut",
        startISO: "2026-08-10T14:00:00",
        contact: "425-918-2029",
        bookingId: "BK-ABC",
      },
      "https://pocketstudio.example",
    );

    expect(params.mode).toBe("payment");
    expect(params.line_items).toHaveLength(1);
    expect(params.line_items[0].quantity).toBe(1);
    expect(params.line_items[0].price_data.currency).toBe("usd");
    expect(params.line_items[0].price_data.unit_amount).toBe(DEPOSIT_AMOUNT * 100);
    expect(params.line_items[0].price_data.product_data.name).toBe("Buzz Cut deposit");
    expect(params.metadata).toEqual({
      serviceSlug: "buzz-cut",
      amountUsd: String(DEPOSIT_AMOUNT),
      startISO: "2026-08-10T14:00:00",
      contact: "425-918-2029",
      bookingId: "BK-ABC",
    });
    expect(params.success_url).toContain("/book?paid=1&session_id=");
    expect(params.cancel_url).toContain("/book?payment=cancelled");
  });

  it("defaults to the deposit amount when no amount is given", () => {
    const params = buildCheckoutParams(
      { serviceSlug: "short-cut", serviceName: "Short Cut" },
      "http://localhost:3000",
    );
    expect(params.line_items[0].price_data.unit_amount).toBe(DEPOSIT_AMOUNT * 100);
  });

  it("uses a custom amount override and drops the deposit label", () => {
    const params = buildCheckoutParams(
      { serviceSlug: "long-cut", serviceName: "Long Cut", amountUsd: 85 },
      "http://localhost:3000",
    );
    expect(params.line_items[0].price_data.unit_amount).toBe(8500);
    expect(params.line_items[0].price_data.product_data.name).toBe("Long Cut");
    expect(params.metadata.amountUsd).toBe("85");
  });

  it("omits optional metadata when not provided", () => {
    const params = buildCheckoutParams(
      { serviceSlug: "buzz-cut", serviceName: "Buzz Cut" },
      "http://localhost:3000",
    );
    expect(params.metadata).toEqual({ serviceSlug: "buzz-cut", amountUsd: "25" });
  });
});

describe("recordPayment", () => {
  beforeEach(() => __clearPayments());

  it("records a payment with a unique id and timestamp", () => {
    const rec = recordPayment({
      serviceSlug: "buzz-cut",
      amountUsd: 25,
      status: "paid",
      bookingId: "BK-1",
      customerEmail: "client@example.com",
    });
    expect(rec.id).toMatch(/^pay_/);
    expect(rec.paidAt).toBeTruthy();
    expect(rec.amountUsd).toBe(25);
    expect(__peekPayments()).toHaveLength(1);
  });
});
