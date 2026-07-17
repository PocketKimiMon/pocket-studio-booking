# Pocket Studio booking page

A single-file, mobile-first site for MyKey Pocket / Pocket Studio.

## Files

- `index.html` — the whole site (HTML, CSS, JS, fonts).
- `privacy.html` — Privacy Policy.
- `terms.html` — Terms of Service.

## Sections

- **Hero / promo:** "Spill the TEA" deal — rebook ahead and get the tea.
- **House-call notice:** explains current house-call setup, no travel fee, and the search for a new chair.
- **About the artist:** MyKey's bio, pronouns, location, contact.
- **What's going on:** a simple blog section. Copy the `<li class="post">` block in `index.html` to add new updates.
- **Services:** Buzz Cut, Short Cut, Long Cut, New-Client Color Consult, Existing-Client Color Appointment.
- **Policies:** one-month-at-a-time, 2-day advance notice, 24-hour cancellation, no-call-no-show charge, 2-hour verification.
- **Booking:** Cal.com inline embed.

## Hours currently configured

- Thursday: 11am–6pm
- Friday: 12pm–5pm
- Saturday–Sunday: 12pm–8pm
- Monday–Wednesday: closed

To change hours, edit the `SCHEDULE` object at the top of the `<script>` in `index.html`.

## Booking

- Bookings are handled by the embedded **Cal.com** scheduler (`cal.com/maneautoimation`).
- Service cards now load the matching Cal.com event type directly in the embed.
- Set availability, notice periods, and cancellation rules inside your Cal.com event types.
- Existing-client color appointments are listed as 3–5 hours on the page.
- See `CAL_SETUP.md` for the exact Cal.com event slugs and settings.
- See `OPERATIONS.md` for which site promises are automated by Cal.com vs. manual.

## Daily operations

- `daily-prep.py` reads `bookings.csv` and prints/emails a summary of tomorrow's appointments.
- A cron job runs it every morning at 8am. Export your Cal.com bookings to `bookings.csv` to use it.

## Test locally

Open `index.html` directly in a browser, or run a tiny server:

```bash
cd pocket-studio-booking
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Upload the folder to any static host:

- **Netlify:** drag `pocket-studio-booking` into [Netlify Drop](https://app.netlify.com/drop)
- **Vercel:** `npx vercel --prod` (needs a Vercel account)
- **GitHub Pages:** push the folder to a repo and enable Pages
- **Cloudflare Pages, Surge, Render, etc.**

## Notes

- The contact email is set to `mykeypocket@icloud.com`.
- The phone number shown is `425-918-2029`.
- Replace the Linq profile link in the footer if it changes.
