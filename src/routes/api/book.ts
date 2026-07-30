import { createFileRoute } from "@tanstack/react-router";
import { validateBooking, type RuleContext } from "../../lib/booking-rules";
import { queueReminder, listReminders, processReminders, type ReminderKind } from "../../lib/reminders";
import { CAL_BASE, SERVICES } from "../../lib/services";

type BookingBody = {
  serviceSlug?: string;
  startISO?: string;
  address?: string;
  contact?: string;
  channel?: "sms" | "email";
  isHouseCall?: boolean;
  isExistingClient?: boolean;
};

function bad(message: string, status = 400) {
  return Response.json({ error: message, status }, { status });
}

export const Route = createFileRoute("/api/book")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: BookingBody;
        try {
          body = await request.json();
        } catch {
          return bad("invalid json");
        }
        const serviceSlug = typeof body.serviceSlug === "string" ? body.serviceSlug.trim() : "";
        const startISO = typeof body.startISO === "string" ? body.startISO.trim() : "";
        const contact = typeof body.contact === "string" ? body.contact.trim() : "";
        const channel = body.channel === "sms" ? "sms" : "email";
        const isHouseCall = body.isHouseCall !== false;
        const isExistingClient = body.isExistingClient === true;

        if (!serviceSlug || !startISO || !contact) {
          return bad("serviceSlug, startISO, and contact are required");
        }
        const service = SERVICES.find((s) => s.slug === serviceSlug);
        if (!service) return bad("unknown service");

        if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/.test(startISO)) {
          return bad("startISO must be ISO-8601");
        }

        const ctx: RuleContext = {
          serviceSlug,
          startISO,
          address: isHouseCall ? body.address || "" : undefined,
          isHouseCall,
          isReturningColorClient: isExistingClient,
          isExistingClient,
        };

        const results = validateBooking(ctx);
        const blockers = results.filter((r) => !r.pass && r.blockBooking);
        if (blockers.length) {
          return Response.json({ error: blockers.map((b) => b.message).join("; "), results, status: 409 });
        }

        const bookingId = `BK-${Date.now().toString(36).toUpperCase()}`;
        const calLink = `${CAL_BASE}${service.slug}`;
        const now = new Date();
        const reminders: Array<{ kind: ReminderKind; offsetMs: number }> = [
          { kind: "confirmation", offsetMs: 0 },
          { kind: "reminder_24h", offsetMs: -24 * 60 * 60 * 1000 },
          { kind: "reminder_2h", offsetMs: -2 * 60 * 60 * 1000 },
          { kind: "follow_up", offsetMs: 60 * 60 * 1000 },
        ];
        const startMs = new Date(startISO).getTime();
        const queued = reminders
          .map((r) => ({
            kind: r.kind,
            scheduledFor: new Date(startMs + r.offsetMs).toISOString(),
          }))
          .filter((r) => r.scheduledFor >= now.toISOString())
          .map((r) =>
            queueReminder({
              bookingId,
              kind: r.kind,
              channel,
              to: contact,
              scheduledFor: r.scheduledFor,
            })
          )
          .sort((a, b) => new Date(a.scheduledFor).getTime() - new Date(b.scheduledFor).getTime());

        const simulated = await processReminders(new Date(queued[0]?.scheduledFor ? startMs - 1000 : now));
        const sentCount = simulated.filter((r) => r.status === "sent").length;

        return Response.json({
          bookingId,
          service: service.name,
          startISO,
          contact,
          calLink,
          depositRequired: true,
          depositAmount: 25,
          rules: results,
          remindersQueued: queued.length,
          remindersSentNow: sentCount,
          reminders: queued,
          testTip: "Use /api/reminders?mode=run to force-process due reminders",
        });
      },
    },
  },
});
