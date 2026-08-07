export type BookingRule = {
  id: string;
  label: string;
  severity: "error" | "warn" | "info";
  enforce: (ctx: RuleContext) => RuleResult;
};

export type RuleContext = {
  serviceSlug: string;
  startISO: string;
  address?: string;
  isHouseCall: boolean;
  isReturningColorClient: boolean;
  /**
   * Existing-client status must be resolved SERVER-SIDE (contact has a prior
   * booking) before reaching validateBooking. Do NOT trust a client-supplied
   * isExistingClient flag — a client could otherwise bypass the new-color
   * consult requirement by posting isExistingClient=true.
   */
  isExistingClient: boolean;
};

/**
 * In-memory booking registry keyed by contact identifier.
 * Persists only for the lifetime of the server process — in production this
 * would be backed by Supabase/Postgres. Used to resolve "is this an existing
 * client" authoritatively before validating color-protocol rules.
 */
const clientBookings = new Set<string>();

/** Register a contact after a successful booking. */
export function registerClient(contact: string) {
  if (contact) clientBookings.add(contact.toLowerCase().trim());
}

/** True if the contact has a prior booking on record. */
export function isKnownClient(contact: string): boolean {
  if (!contact) return false;
  return clientBookings.has(contact.toLowerCase().trim());
}

/** Test-only: clear the client-booking registry. */
export function __clearClientBookings() {
  clientBookings.clear();
}

export type RuleResult = {
  pass: boolean;
  message: string;
  blockBooking?: boolean;
};

export const DEPOSIT_REQUIRED = true;
export const DEPOSIT_AMOUNT = 25;
export const MIN_LEAD_HOURS = {
  CUTS: 48,
  NEW_COLOR: 72,
  EXISTING_COLOR: 168,
};
export const CONFIRMATION_WINDOW_HOURS = 2;
export const CANCEL_WINDOW_HOURS = 24;
export const NO_SHOW_POLICY = "full service charge";
export const MAX_RADIUS_MI = 30;

export const RULES: BookingRule[] = [
  {
    id: "advance_notice",
    label: "advance notice",
    severity: "error",
    enforce: (ctx) => {
      const start = new Date(ctx.startISO);
      const hours = (start.getTime() - Date.now()) / 36e5;
      let min = MIN_LEAD_HOURS.CUTS;
      if (ctx.serviceSlug === "hair-consultation") min = MIN_LEAD_HOURS.NEW_COLOR;
      if (ctx.serviceSlug === "existing-client-color-appointment")
        min = MIN_LEAD_HOURS.EXISTING_COLOR;
      if (hours < min)
        return {
          pass: false,
          message: `needs ${min}h lead time — earliest available is ${new Date(Date.now() + min * 36e5).toLocaleString()}`,
          blockBooking: true,
        };
      return { pass: true, message: `ok — ${hours.toFixed(1)}h lead time` };
    },
  },
  {
    id: "service_area",
    label: "service area",
    severity: "error",
    enforce: (ctx) => {
      if (!ctx.isHouseCall) return { pass: true, message: "in-shop / virtual — no geo gate" };
      if (!ctx.address)
        return { pass: false, message: "address required for house calls", blockBooking: true };
      return { pass: true, message: "address collected — distance checked at booking" };
    },
  },
  {
    id: "new_color_protocol",
    label: "new color protocol",
    severity: "error",
    enforce: (ctx) => {
      const isColorFirst =
        ctx.serviceSlug === "hair-consultation" ||
        (ctx.serviceSlug.includes("color") && !ctx.isExistingClient);
      if (isColorFirst && ctx.serviceSlug !== "hair-consultation")
        return {
          pass: false,
          message: "new color clients must book consult first",
          blockBooking: true,
        };
      return { pass: true, message: "protocol satisfied" };
    },
  },
  {
    id: "deposit",
    label: "deposit",
    severity: "warn",
    enforce: () => ({
      pass: true,
      message: `$${DEPOSIT_AMOUNT} deposit required — paid by card at booking via Stripe`,
    }),
  },
  {
    id: "confirmation",
    label: "confirmation rule",
    severity: "info",
    enforce: () => ({
      pass: true,
      message: `confirmation request sent ${CONFIRMATION_WINDOW_HOURS}h before; no reply = slot may release`,
    }),
  },
  {
    id: "cancellation",
    label: "cancellation",
    severity: "info",
    enforce: () => ({
      pass: true,
      message: `cancel with ${CANCEL_WINDOW_HOURS}h notice; no-call/no-show may be charged ${NO_SHOW_POLICY}`,
    }),
  },
];

export function validateBooking(ctx: RuleContext) {
  return RULES.map((r) => {
    const result = r.enforce(ctx);
    return { ...r, ...result };
  });
}
