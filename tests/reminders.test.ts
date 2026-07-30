import { describe, it, expect, beforeEach } from "vitest";
import {
  queueReminder,
  listReminders,
  markSent,
  markFailed,
  cancelReminder,
  processReminders,
  type ReminderRecord,
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
    const mod = require("../src/lib/reminders");
    if (typeof mod.__clearStore === "function") mod.__clearStore();
  });
});
