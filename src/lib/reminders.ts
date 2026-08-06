export type ReminderChannel = "sms" | "email";
export type ReminderKind =
  | "confirmation"
  | "reminder_24h"
  | "reminder_2h"
  | "no_show_warning"
  | "follow_up";

export type ReminderRecord = {
  id: string;
  bookingId: string;
  kind: ReminderKind;
  channel: ReminderChannel;
  to: string;
  scheduledFor: string;
  status: "queued" | "sent" | "failed" | "canceled";
  createdAt: string;
  sentAt?: string;
  error?: string;
};

const memoryStore: ReminderRecord[] = [];

/** Test-only: clear the in-memory reminder store so tests start clean. */
export function __clearStore() {
  memoryStore.length = 0;
}

/** Test-only: peek at the full in-memory store. */
export function __peekStore(): ReminderRecord[] {
  return [...memoryStore];
}

export function queueReminder(
  record: Omit<ReminderRecord, "id" | "status" | "createdAt">,
): ReminderRecord {
  const item: ReminderRecord = {
    ...record,
    id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    status: "queued",
    createdAt: new Date().toISOString(),
  };
  memoryStore.push(item);
  return item;
}

export function listReminders(status?: ReminderRecord["status"]) {
  if (!status) return [...memoryStore];
  return memoryStore.filter((r) => r.status === status);
}

export function markSent(id: string, sentAt = new Date().toISOString()) {
  const item = memoryStore.find((r) => r.id === id);
  if (!item) return null;
  item.status = "sent";
  item.sentAt = sentAt;
  return item;
}

export function markFailed(id: string, error: string) {
  const item = memoryStore.find((r) => r.id === id);
  if (!item) return null;
  item.status = "failed";
  item.error = error;
  return item;
}

export function cancelReminder(id: string) {
  const item = memoryStore.find((r) => r.id === id);
  if (!item) return null;
  item.status = "canceled";
  return item;
}

export async function processReminders(now = new Date()): Promise<ReminderRecord[]> {
  const due = memoryStore.filter((r) => {
    if (r.status !== "queued") return false;
    return new Date(r.scheduledFor).getTime() <= now.getTime();
  });
  const results: ReminderRecord[] = [];
  for (const item of due) {
    try {
      const sent = await sendReminder(item);
      markSent(item.id, sent.sentAt ?? now.toISOString());
      results.push({ ...item, ...sent });
    } catch (e) {
      const failed = markFailed(item.id, e instanceof Error ? e.message : String(e))!;
      results.push(failed);
    }
  }
  return results;
}

async function sendReminder(record: ReminderRecord) {
  const payload = buildPayload(record);
  if (record.channel === "sms") {
    return sendSms(record.to, payload);
  }
  return sendEmail(record.to, payload);
}

function buildPayload(record: ReminderRecord) {
  switch (record.kind) {
    case "confirmation":
      return `Pocket Studio: booking ${record.bookingId} received. Reply CONFIRM or call 425-918-2029.`;
    case "reminder_24h":
      return `Pocket Studio: reminder — appointment tomorrow. Cancel/reschedule with 24h notice to avoid a charge.`;
    case "reminder_2h":
      return `Pocket Studio: check-in — 2h out. Reply YEP or I may release your slot.`;
    case "no_show_warning":
      return `Pocket Studio: missed check-in may count as a no-show per policy.`;
    case "follow_up":
      return `Pocket Studio: thanks for visiting. Book again at https://cal.com/maneautoimation.`;
    default:
      return "Pocket Studio booking update";
  }
}

async function sendSms(to: string, body: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) {
    throw new Error("Twilio not configured");
  }
  const url = `https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(sid)}/Messages.json`;
  const form = new URLSearchParams({ To: to, From: from, Body: body });
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${sid}:${token}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
  if (!res.ok) throw new Error(`Twilio SMS failed: ${res.status}`);
  return { sentAt: new Date().toISOString() };
}

async function sendEmail(to: string, body: string) {
  const provider = process.env.EMAIL_PROVIDER || "resend";
  if (provider === "resend") {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("Resend not configured");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Pocket Studio <bookings@pocketstudio.biz>",
        to,
        subject: "Pocket Studio appointment",
        text: body,
      }),
    });
    if (!res.ok) throw new Error(`Resend email failed: ${res.status}`);
  } else if (provider === "sendgrid") {
    const key = process.env.SENDGRID_API_KEY;
    if (!key) throw new Error("SendGrid not configured");
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: "bookings@pocketstudio.biz", name: "Pocket Studio" },
        subject: "Pocket Studio appointment",
        content: [{ type: "text/plain", value: body }],
      }),
    });
    if (!res.ok) throw new Error(`SendGrid email failed: ${res.status}`);
  } else {
    throw new Error(`Unsupported email provider: ${provider}`);
  }
  return { sentAt: new Date().toISOString() };
}
