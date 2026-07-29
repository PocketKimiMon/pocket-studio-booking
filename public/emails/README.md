# pocket studio — email templates

production HTML emails. table-based layout, inline CSS, 600px max-width, mobile + dark-mode aware, bulletproof VML buttons for Outlook, plain-text fallback comment at the top of each file. all copy is lowercase per brand voice; sign-off "— mykey".

## templates

- **rebooking-reminder.html** — "time to get back in the chair" rebooking nudge with the "rebook ahead, get the tea" promo. trigger: ~4–6 weeks after a client's last visit. placeholders: `[CLIENT NAME]`, `[WEEKS SINCE VISIT]`, `[LAST SERVICE]`, `[BOOKING LINK]`, `[MY BOOKINGS LINK]`, `[UNSUBSCRIBE LINK]`.
- **booking-confirmation.html** — post-booking receipt + prep email: service/date/time, reference code, house-call address note, deposit receipt, allergy/chemical-history prep reminders, cancel/reschedule + 24-hour rule, and the "reply yep" 2-hour explainer. trigger: immediately after a booking is created and the $25 Stripe deposit is paid. placeholders: `[CLIENT NAME]`, `[SERVICE NAME]`, `[DATE]`, `[TIME]`, `[ADDRESS]`, `[BOOKING REF]`, `[STRIPE RECEIPT ID]`, `[MY BOOKINGS LINK]`, `[UNSUBSCRIBE LINK]`.
- **two-hour-confirmation.html** — short, text-like check-in: "your appointment is in 2 hours — reply yep to keep your slot," with one reply CTA and a parking/entry note. trigger: 2 hours before appointment start. placeholders: `[CLIENT NAME]`, `[TIME]`, `[ADDRESS]`, `[PARKING / ENTRY NOTES]`, `[MY BOOKINGS LINK]`, `[UNSUBSCRIBE LINK]`.

## shared

- footer on all three: contact (425-918-2029 · mykeypocket@icloud.com · my bookings), "not affiliated with rudy's barbershop," unsubscribe placeholder.
- fonts: `@import` google fonts (bricolage grotesque / inter / ibm plex mono / caveat) with georgia / helvetica / courier / cursive fallbacks.
- merge fields use `[SQUARE BRACKET]` tokens throughout — swap at send time.
