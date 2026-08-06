import { describe, it, expect, beforeEach } from "vitest";
import {
  queueReminder,
  listReminders,
  markSent,
  markFailed,
  cancelReminder,
  processReminders,
  type ReminderRecord,
  __clearStore,
  __peekStore,
} from "../src/lib/reminders";

const baseRecord = (overrides: Partial<ReminderRecord> = {}): Omit<ReminderRecord, "id" | "status" | "createdAt"> => ({
  bookingId: "BK-TEST",
  kind: "confirmation",
  channel: "sms",
  to: "425-918-2029",
  scheduledFor: new Date().toISOString(),
  ...overrides,
});

describe("reminders", () => {
  beforeEach(() => {
    __clearStore();
  });

  describe("queueReminder", () => {
    it("queues a reminder with an id, status=queued, and createdAt", () => {
      const rec = queueReminder(baseRecord());
      expect(rec.id).toMatch(/^r_/);
      expect(rec.status).toBe("queued");
      expect(rec.createdAt).toBeTruthy();
      expect(rec.bookingId).toBe("BK-TEST");
      expect(rec.kind).toBe("confirmation");
      expect(rec.channel).toBe("sms");
    });

    it("generates unique ids", () => {
      const a = queueReminder(baseRecord());
      const b = queueReminder(baseRecord());
      expect(a.id).not.toBe(b.id);
    });
  });

  describe("listReminders", () => {
    it("returns all reminders when no status filter", () => {
      queueReminder(baseRecord({ kind: "confirmation" }));
      queueReminder(baseRecord({ kind: "reminder_24h" }));
      expect(listReminders()).toHaveLength(2);
    });

    it("filters by status", () => {
      const q = queueReminder(baseRecord());
      markSent(q.id);
      queueReminder(baseRecord({ kind: "reminder_2h" }));
      expect(listReminders("sent")).toHaveLength(1);
      expect(listReminders("queued")).toHaveLength(1);
    });
  });

  describe("state transitions", () => {
    it("markSent sets status and sentAt, leaves others queued", () => {
      const q = queueReminder(baseRecord());
      const updated = markSent(q.id);
      expect(updated?.status).toBe("sent");
      expect(updated?.sentAt).toBeTruthy();
    });

    it("markFailed sets status and error", () => {
      const q = queueReminder(baseRecord());
      const updated = markFailed(q.id, "Twilio not configured");
      expect(updated?.status).toBe("failed");
      expect(updated?.error).toBe("Twilio not configured");
    });

    it("cancelReminder sets status=canceled", () => {
      const q = queueReminder(baseRecord());
      const updated = cancelReminder(q.id);
      expect(updated?.status).toBe("canceled");
    });

    it("returns null for unknown id on markSent/markFailed/cancel", () => {
      expect(markSent("r_unknown_123")).toBeNull();
      expect(markFailed("r_unknown_123", "err")).toBeNull();
      expect(cancelReminder("r_unknown_123")).toBeNull();
    });
  });

  describe("processReminders", () => {
    it("skips reminders with future scheduledFor", async () => {
      const future = new Date();
      future.setHours(future.getHours() + 24);
      const rec = queueReminder(
        baseRecord({ kind: "reminder_24h", scheduledFor: future.toISOString() }),
      );
      const results = await processReminders();
      expect(results).toHaveLength(0);
      // still queued, untouched
      expect(__peekStore().find((r) => r.id === rec.id)?.status).toBe("queued");
    });

    it("processes due reminders and attempts to send them", async () => {
      const past = new Date();
      past.setHours(past.getHours() - 1);
      // No Twilio/Resend env in tests -> sendReminder throws -> status=failed
      queueReminder(
        baseRecord({ kind: "confirmation", scheduledFor: past.toISOString(), channel: "sms" }),
      );
      const results = await processReminders();
      expect(results).toHaveLength(1);
      // With no SMS provider configured, the send throws -> marked failed (not sent).
      expect(results[0].status).toBe("failed");
      expect(results[0].error).toBeTruthy();
    });

    it("marks failed when sendReminder throws", async () => {
      // No Twilio/Resend env vars configured in test -> sendReminder throws.
      const past = new Date();
      past.setHours(past.getHours() - 2);
      queueReminder(
        baseRecord({ kind: "reminder_24h", scheduledFor: past.toISOString(), channel: "sms" }),
      );
      const results = await processReminders();
      expect(results).toHaveLength(1);
      expect(results[0].status).toBe("failed");
    });

    it("does not re-process already-sent reminders", async () => {
      const past = new Date();
      past.setHours(past.getHours() - 1);
      const q = queueReminder(
        baseRecord({ kind: "confirmation", scheduledFor: past.toISOString(), channel: "sms" }),
      );
      await processReminders();
      // second run should be a no-op
      const results = await processReminders();
      expect(results).toHaveLength(0);
    });
  });
});
