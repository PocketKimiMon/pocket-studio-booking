# Cal.com setup checklist for Pocket Studio

Your site embeds Cal.com at `cal.com/maneautoimation`. Clicking a service card now tries to load a specific event type (for example `cal.com/maneautoimation/buzz-cut`). Use the exact slugs below so the site and Cal.com match.

## Event types to create

Create one public event type for each service. Event type URL slug must match exactly:

| Service | Cal.com slug | Duration | Notes |
|---|---|---|---|
| Buzz Cut | `buzz-cut` | 30 min |  |
| Short Cut | `short-cut` | 45 min |  |
| Long Cut | `long-cut` | 60 min |  |
| New-Client Color Consult | `color-consult` | 45 min | Required first step for new color clients |
| Existing-Client Color Appointment | `color-appointment` | 5 hr (300 min) | Use 5 hr window; mention in description that it may run 3–5 hr |

## Availability (apply to every event type)

- **Thursday:** 11:00 AM – 6:00 PM
- **Friday:** 12:00 PM – 5:00 PM
- **Saturday:** 12:00 PM – 8:00 PM
- **Sunday:** 12:00 PM – 8:00 PM
- **Monday / Tuesday / Wednesday:** unavailable
- Time zone: `America/Los_Angeles`

## Booking limits (apply to every event type)

- **Minimum notice:** 2 days / 48 hours
- **Booking window / date range:** 1 month (or "rolling 30 days")
- **Slot interval:** use default (usually matches duration)
- **Buffer time:** none needed unless you want travel padding

## Cancellation / no-show policy

Add this to the event description or as a booking question:

> 24-hour cancellation policy unless it's an emergency. No-call-no-shows will be charged the full service amount. You'll receive a verification message 2 hours before your appointment.

## Reminders

Set up a workflow for each event type:

- **2 hours before appointment:** send SMS + email verification/confirmation reminder
- **24 hours before:** optional reschedule reminder

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
