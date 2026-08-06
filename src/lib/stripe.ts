import { DEPOSIT_AMOUNT } from "./booking-rules";
import type Stripe from "stripe";

/**
 * Server-side Stripe helpers. The client never touches the secret key —
 * it only hits /api/stripe/checkout and follows the redirect to Stripe's
 * hosted Checkout page.
 */

export type CheckoutInput = {
  serviceSlug: string;
  serviceName: string;
  /** ISO timestamp of the booked slot — optional (deposit can precede slot pick). */
  startISO?: string;
  contact?: string;
  /** USD amount; defaults to the $25 deposit rule. */
  amountUsd?: number;
  bookingId?: string;
};

export type StripeCheckoutParams = {
  mode: "payment";
  line_items: Array<{
    quantity: number;
    price_data: {
      currency: "usd";
      unit_amount: number;
      product_data: { name: string; description?: string };
    };
  }>;
  metadata: Record<string, string>;
  success_url: string;
  cancel_url: string;
};

/** Pure param builder — unit-testable without a Stripe client. */
export function buildCheckoutParams(input: CheckoutInput, origin: string): StripeCheckoutParams {
  const amountUsd = input.amountUsd ?? DEPOSIT_AMOUNT;
  const label = input.amountUsd ? input.serviceName : `${input.serviceName} deposit`;
  const metadata: Record<string, string> = {
    serviceSlug: input.serviceSlug,
    amountUsd: String(amountUsd),
  };
  if (input.startISO) metadata.startISO = input.startISO;
  if (input.contact) metadata.contact = input.contact;
  if (input.bookingId) metadata.bookingId = input.bookingId;

  const description = input.startISO
    ? `${new Date(input.startISO).toLocaleString()} · ${input.contact ?? "client"}`
    : input.contact ?? undefined;

  return {
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(amountUsd * 100),
          product_data: { name: label, ...(description ? { description } : {}) },
        },
      },
    ],
    metadata,
    success_url: `${origin}/book?paid=1&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/book?payment=cancelled`,
  };
}

/** Lazy Stripe client; null when STRIPE_SECRET_KEY is not configured. */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const StripeCtor = require("stripe") as typeof Stripe;
  return new StripeCtor(key);
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

type PaymentRecord = {
  id: string;
  bookingId?: string;
  serviceSlug: string;
  amountUsd: number;
  status: string;
  customerEmail?: string;
  paidAt: string;
};

const memoryPayments: PaymentRecord[] = [];

/** Test-only: clear the in-memory payment store. */
export function __clearPayments() {
  memoryPayments.length = 0;
}

/** Test-only: peek at recorded payments. */
export function __peekPayments(): PaymentRecord[] {
  return [...memoryPayments];
}

/**
 * Record a confirmed payment. In-memory for this process, appended to
 * data/payments.json when the fs is writable (local dev / self-host).
 * On Vercel serverless the fs is read-only, so production persistence
 * should point recordPayment at Supabase — Stripe's dashboard + emails
 * remain the source of truth either way.
 */
export function recordPayment(record: Omit<PaymentRecord, "id" | "paidAt">) {
  const item: PaymentRecord = {
    ...record,
    id: `pay_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    paidAt: new Date().toISOString(),
  };
  memoryPayments.push(item);
  try {
    const fs = require("node:fs") as typeof import("node:fs");
    const path = require("node:path") as typeof import("node:path");
    const dir = path.join(process.cwd(), "data");
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "payments.json");
    const existing = fs.existsSync(file)
      ? (JSON.parse(fs.readFileSync(file, "utf8")) as PaymentRecord[])
      : [];
    fs.writeFileSync(file, JSON.stringify([...existing, item], null, 2));
  } catch {
    // fs unwritable (serverless) — in-memory record still counts.
  }
  return item;
}
