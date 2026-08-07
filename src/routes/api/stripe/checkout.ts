import { createFileRoute } from "@tanstack/react-router";
import { buildCheckoutParams, getStripe, isStripeConfigured } from "../../../lib/stripe";
import { SERVICES } from "../../../lib/services";

type CheckoutBody = {
  serviceSlug?: string;
  startISO?: string;
  contact?: string;
  bookingId?: string;
  /** Optional USD override — defaults to the $25 deposit rule. */
  amountUsd?: number;
};

export const Route = createFileRoute("/api/stripe/checkout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!isStripeConfigured()) {
          return Response.json(
            { error: "Stripe is not configured — add STRIPE_SECRET_KEY to env." },
            { status: 503 },
          );
        }

        let body: CheckoutBody;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "invalid json" }, { status: 400 });
        }

        const serviceSlug = typeof body.serviceSlug === "string" ? body.serviceSlug.trim() : "";
        const service = SERVICES.find((s) => s.slug === serviceSlug);
        if (!service) return Response.json({ error: "unknown service" }, { status: 400 });

        const startISO = typeof body.startISO === "string" ? body.startISO.trim() : undefined;
        const contact = typeof body.contact === "string" ? body.contact.trim() : undefined;
        const bookingId = typeof body.bookingId === "string" ? body.bookingId.trim() : undefined;
        const amountUsd =
          typeof body.amountUsd === "number" && body.amountUsd > 0 ? body.amountUsd : undefined;

        const origin = new URL(request.url).origin;
        const params = buildCheckoutParams(
          { serviceSlug, serviceName: service.name, startISO, contact, bookingId, amountUsd },
          origin,
        );

        try {
          const stripe = getStripe();
          if (!stripe) throw new Error("stripe client unavailable");
          const session = await stripe.checkout.sessions.create({
            ...params,
            payment_method_types: ["card"],
            metadata: params.metadata,
          });
          return Response.json({ url: session.url, sessionId: session.id });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return Response.json({ error: `stripe checkout failed: ${message}` }, { status: 502 });
        }
      },
    },
  },
});
