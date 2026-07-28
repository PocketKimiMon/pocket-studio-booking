# Pocket Studio — promise-to-system checklist

This maps every promise on the booking site to the system or process that actually makes it happen.

## Promises handled automatically by Cal.com

| Site promise | How it's enforced | Cal.com setting |
|---|---|---|
| **One month at a time** / next month opens on the 1st | Cal.com limits how far ahead someone can book | **Booking window / date range:** 1 month (or rolling 30 days) |
| **2-day advance notice** | Cal.com blocks slots sooner than 48 hours | **Minimum notice:** 2 days / 48 hours |
| **2-hour verification** / reminder | Cal.com sends SMS/email 2 hours before | **Workflow:** 2-hour-before reminder to attendee + host |
| **24-hour reschedule reminder** (optional) | Cal.com sends a heads-up the day before | **Workflow:** 24-hour-before reminder |
| **Instant confirmation** | Cal.com emails/texts the booker immediately | Built into Cal.com booking flow |
| **Calendar sync / no double-booking** | Cal.com checks your connected calendar for conflicts | **Apps > Calendars:** connect Google / iCloud / Outlook |
| **Correct availability** | Cal.com only shows your working hours | **Availability:** Thu 11am–6pm, Fri 12pm–5pm, Sat–Sun 12pm–8pm, PT |

## Promises that depend on MyKey doing something manually

| Site promise | What MyKey has to do |
|---|---|
| **24-hour cancellation policy** | Honor the policy when someone cancels late. Cal.com can enforce with Stripe deposits, otherwise it's trust-based. |
| **No-call-no-show = charged** | Requires collecting payment info up front (Stripe) and manually charging the card if someone ghosts. Cal.com can hold card details; the charge is manual. |
| **House calls only** | Drive to the client's address from the booking form. |
| **No travel fee currently** | Don't add a travel fee. If this changes, update the site text and possibly Cal.com pricing. |
| **Spill the tea deal** | If someone books 2+ days out, actually give them the extra tips/product recs during the appointment. |

## What still needs to be set up in Cal.com

1. **Availability** for all 5 event types (Thu/Fri/Sat/Sun hours, PT time zone).
2. **Minimum notice:** 2 days on every event type.
3. **Booking window:** 1 month on every event type.
4. **Workflows:** 2-hour reminder and optional 24-hour reminder on every event type.
5. **Intake questions:** address, phone, notes on every event type.
6. **Calendar connection:** connect the calendar Cal.com writes to.
7. **Stripe (optional):** if you want to enforce no-show charges automatically or collect deposits.

## Local automation ideas

If you want something running on this computer to help manage the business, useful scripts could be:

- **Daily prep email:** every morning, read tomorrow's appointments from your calendar and email/text you a summary with client names, services, addresses, and notes.
- **No-show tracker:** flag appointments that ended without a check-in, so you know who to invoice.
- **Rebooking follow-up:** after an appointment, send a "book your next slot" message to the client.

These need access to your calendar (Google/iCloud/Outlook) and/or Cal.com API. If you want one built, say which calendar you use and which reminder you want first.
