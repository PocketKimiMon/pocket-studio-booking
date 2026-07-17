# Cal.com setup checklist for Pocket Studio

Your site embeds Cal.com at `cal.com/maneautoimation`. Clicking a service card loads a specific event type in the embed. Use the exact slugs below so the site and Cal.com match.

## Current Cal.com event types

These must stay in sync with the `data-book` attributes in `index.html`:

| Service | Cal.com slug | Duration | Notes |
|---|---|---|---|
| Buzz Cut | `buzz-cut` | 30 min |  |
| Short Cut | `short-cut` | 45 min |  |
| Long Cut | `long-cut` | 60 min |  |
| New-Client Color Consult | `hair-consultation` | 45 min | Slug is still `hair-consultation` because the event was renamed from "Hair Consultation" |
| Existing-Client Color Appointment | `existing-client-color-appointment` | 3 hr (180 min) | Set to 3 hr; description notes complex sessions can run 3–5 hr |

## Availability (apply to every event type)

- **Thursday:** 11:00 AM – 6:00 PM
- **Friday:** 12:00 PM – 5:00 PM
- **Saturday:** 12:00 PM – 8:00 PM
- **Sunday:** 12:00 PM – 8:00 PM
- **Monday / Tuesday / Wednesday:** unavailable
- Time zone: `America/Los_Angeles`

## Booking limits (apply to every event type)

- **Minimum notice:** 2 days / 48 hours
- **Booking window / date range:** 1 month (or "rolling 30 days") — this makes the "one month at a time" promise automatic
- **Slot interval:** use default (usually matches duration)
- **Buffer time:** none needed unless you want travel padding

## Workflows / reminders (apply to every event type)

These are what make the site's policy promises actually happen.

### Required: 2-hour verification

Go to **Workflows** in each event type and add a reminder:

- **Trigger:** 2 hours before event start
- **Actions:**
  - Send SMS to attendee (requires Cal.com SMS credits or Twilio integration)
  - Send email to attendee
  - Optionally send email/SMS to you (MyKey) as a heads-up
- **Message idea:**
  > Hey [Name], this is MyKey confirming your [Service] appointment today at [Time]. Reply to confirm or let me know if something changed.

### Recommended: 24-hour heads-up

- **Trigger:** 24 hours before event start
- **Actions:** email to attendee with reschedule link

### Instant confirmation

This is automatic as soon as someone books. Make sure Cal.com is set to send booking confirmations to both you and the attendee.

## Cancellation / no-show policy

Add this to the event description or as a booking question:

> 24-hour cancellation policy unless it's an emergency. No-call-no-shows will be charged the full service amount. You'll receive a verification message 2 hours before your appointment.

To actually enforce the no-show charge, connect **Stripe** under Cal.com Apps and collect card details at booking. Cal.com can hold the card; you manually charge it if someone ghosts.

## Intake questions to add

Add these booking questions to every event type:

1. **Address / location** (required, text) — you're doing house calls
2. **Phone number** (required, phone) — for the 2-hour verification text
3. **Anything I should know?** (optional, text) — allergies, accessibility, parking, pets, etc.

For **Existing-Client Color Appointment**, also ask:

4. **What are we doing today?** (required, text) — roots, refresh, full transformation
5. **When did we last color your hair?** (optional, text)

## Calendar connection

1. Connect your main calendar (Google / iCloud / Outlook) to Cal.com under **Apps > Calendars**.
2. Set it as the calendar Cal.com checks for conflicts and writes bookings to.
3. Make sure the calendar's default time zone is Pacific Time.

## Payment / no-show (optional but recommended)

If you want to enforce the no-show policy automatically:

- Stripe integration: Cal.com can collect card details at booking without charging immediately, then you can charge no-shows manually.
- Or keep it honor-system and note the policy in the description.

## Profile settings

- Display name: **MyKey Pocket / Pocket Studio**
- Bio: short intro, mention house calls, former Rudy's Barbershop stylist
- Avatar/logo: use your Pocket Studio mark
- Email notifications: route confirmations to `mykeypocket@icloud.com`

## Test the flow

1. Open your site locally or at the preview URL.
2. Click each service card and confirm the Cal.com embed loads the right event type.
3. Try booking a test slot on each event type.
4. Verify the booking shows up on your connected calendar.
5. Verify you get the confirmation and reminder emails.

## Need to change slugs?

If you want different Cal.com slugs, update the `data-cal-link` attributes in `index.html` to match.
