import { createFileRoute } from "@tanstack/react-router";
import { getStripe, recordPayment } from "../../../lib/stripe";

/**
 * Stripe webhook endpoint. Register the full URL (e.g.
 * https://<your-domain>/api/stripe/webhook) in the Stripe dashboard under
 * Developers → Webhooks, selecting at least `checkout.session.completed`.
 * The `STRIPE_WEBHOOK_SECRET` env var is the signing secret from that page.
 */
export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!secret) {
          return Response.json({ error: "STRIPE_WEBHOOK_SECRET not configured" }, { status: 503 });
        }
        const signature = request.headers.get("stripe-signature");
        if (!signature) {
          return Response.json({ error: "missing stripe-signature header" }, { status: 400 });
        }

        let payload: string;
        try {
          payload = await request.text();
        } catch {
          return Response.json({ error: "unreadable body" }, { status: 400 });
        }

        const stripe = getStripe();
        if (!stripe) {
          return Response.json(
            { error: "Stripe is not configured — add STRIPE_SECRET_KEY to env." },
            { status: 503 },
          );
        }

        let event;
        try {
          event = stripe.webhooks.constructEvent(payload, signature, secret);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return Response.json(
            { error: `signature verification failed: ${message}` },
            { status: 400 },
          );
        }

        // Acknowledge immediately; only record the events we care about.
        if (event.type === "checkout.session.completed") {
          const session = event.data.object;
          const metadata = (session.metadata ?? {}) as Record<string, string>;
          const amountPaid = Number(session.amount_total ?? 0) / 100;
          recordPayment({
            bookingId: metadata.bookingId,
            serviceSlug: metadata.serviceSlug ?? "unknown",
            amountUsd: Number(metadata.amountUsd ?? amountPaid) || amountPaid,
            status: "paid",
            customerEmail:
              typeof session.customer_details === "object" && session.customer_details
                ? ((session.customer_details as { email?: string }).email ?? undefined)
                : undefined,
          });
        }

        return Response.json({ received: true });
      },
    },
  },
});
