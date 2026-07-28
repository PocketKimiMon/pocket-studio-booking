# Pocket Studio Booking Page — Current Copy

All the visible text on index.html, section by section. Edit here, then tell me what changed and I'll apply it to the page.

---

## Browser tab / SEO
- Title: `Pocket Studio — book with MyKey`
- Meta description: `Book cuts and color directly with MyKey Pocket, Seattle hair artist. Former Rudy's clients welcome.`

## Top bar
- `pocket studio · seattle`
- `booking open`

## Hero
- Kicker: `your chair moved`
- Wordmark: `mykey pocket`
- Tagline: **book cuts + color directly.** `no front desk, no phone tag, no wondering if the message went through.`

### Stickers
- `scissors ready`
- `color chaos welcome`
- `house calls`
- `the tea if you rebook`

### Promo ("spill the tea" deal)
- Hand label: `spill the tea`
- Kicker: `current deal`
- Title: `rebook ahead, get the tea.`
- Body: `book your next appointment at least 2 days out and i'll spill everything — why i'm not at the old shop anymore, what really went down, all of it. consider it a loyalty bribe.`

### Notice band
- **former Rudy's clients:** `MyKey is no longer at Rudy's Barbershop. this is the new spot to book. same chair energy, fewer hoops.`

### House-call notice
- **house calls only right now.** `i'm coming to you — no travel fee at the moment, but that'll change once i land a new chair. bear with me while i figure out where to set up shop, and thank you for riding this out with me. i know i'm shaking up your routine, and i'm sorry. especially if you're neurodivergent and routine changes are rough — we'll get back to something steady soon.`

---

## 01 · About the artist
- Section note: `the human behind the chair`
- Lede: `i'm MyKey — a Seattle hair artist who just left Rudy's Barbershop and is taking clients directly.`
- `i cut and color all textures, but i especially love the transformations: the grow-out rescue, the "i need a change" moment, the color correction that takes six hours and a lot of trust.`
- `my chair is a low-judgment zone. come with reference pics, come with bedhead, come with a vague idea and a willingness to talk it through.`
- Contact line: `pronouns: they/them · seattle, wa · 425-918-2029 · mykeypocket@icloud.com`

### "why book direct?" card
- `no front-desk telephone game`
- `you know exactly who you're getting`
- `rebooking reminders that actually make sense`
- `your notes stay with me, not a rotating receptionist`
- Hand label: `see you in the chair`

---

## 02 · What's going on (blog)
- Section note: `updates from the chair`

### Post — july 14, 2026 — "house calls + the hunt for a new chair"
- `right now i'm doing house calls only. i'll come to you, set up wherever works, and get you sorted. no travel fee for now — consider it a thank-you for sticking with me while i find a new permanent spot.`
- `things are a little chaotic and i know that's hard, especially if you rely on a routine. i feel that deeply. i'm working on getting a chair locked down so we can get back to something steady. appreciate you more than i can say.`
- Sign-off: `— mykey`

---

## 03 · Pick a service
- Section note: `tap one to book`

| Service | Time | Description | Tag |
|---|---|---|---|
| Buzz Cut | 30 min | `clippers all over, clean edges, back to your day.` | quick |
| Short Cut | 45 min | `scissor or clipper-over-comb, shaped to your head.` | classic |
| Long Cut | 60 min | `layers, texture, cleanup — keep the length, lose the dead ends.` | detail |
| New-Client Color Consult | 45 min | `first time coloring with me? we plan the lift, the tone, and the maintenance before anything touches your head. books 3 days out.` | required for new color |
| Existing-Client Color Appointment | 3 hr | `roots, refresh, full transformation — we already know the vibe. previous color clients: block the afternoon. complex sessions can run 3–5 hr. books 1 week out.` | color |

---

## 04 · The fine print (policies)
- Section note: `so nobody gets surprised`

1. **one month at a time** — `the calendar opens one month at a time, first come first serve. on the 1st of each month, the next full month becomes available.`
2. **advance notice** — `haircuts book 2 days out. new-client color consults book 3 days out, and existing-client color appointments book 1 week out — color takes prep. need it sooner? send an emergency request.`
3. **24-hour cancellation** — `need to cancel or reschedule? 24 hours notice, unless it's an actual emergency. just talk to me — i'm reasonable, but my time is how i pay rent.`
4. **no-call-no-show = charged** — `miss a confirmed appointment without timely notice and you may be charged up to the full quoted/estimated service amount (invoiced if no card on file). fairness goes both ways — full terms on the terms page.`
5. **2-hour verification** — `you'll get a text or email 2 hours before your appointment to confirm. if i don't hear back, i may release the slot.`
6. **pricing & payment** — `prices are quoted before or at service (they can vary by hair/complexity). payment is due at the appointment unless we agree otherwise.`
7. **house-call space** — `provide a safe, ready spot and an accurate address. i may decline or end a visit if the location isn't workable. disclose allergies & prior chemical work.`

---

## 05 · Book it (CTA)
- Hours note: `thu 11am–6pm, fri 12pm–5pm, sat–sun 12pm–8pm`
- Lede: `answer a couple quick questions and i'll point you straight to the right appointment — no guesswork, no wrong slot.`
- Button: `let's book it →`
- Emergency button: `🚨 need it sooner? emergency request`
- Fine print 1: `availability is live on the calendar — real time, instant confirmation. house calls only right now.`
- Fine print 2: `by booking you agree to the terms of service and privacy policy, including the 24-hour cancel rule, no-show charge, SMS/email reminders, and house-call terms. booking runs on cal.com.`

---

## 06 · Travel fee calculator (new app, /book page)
Lives on the TanStack app (`pocket-studio-booking-10a2c4c2`), above the Cal.com iframe. Rates are editable in `src/content.ts` (`travel`: flat $25, perMile $2, maxRadiusMi 30). Backend: `POST /api/travel-fee` (Nominatim geocode + straight-line distance from Seattle, WA).

- Title: `House call? Get your travel fee.`
- Explainer: `House calls are Seattle-area only. The fee is $25 base + $2/mi from Seattle, WA, quoted before you book — never after.`
- Input placeholder: `Your address or neighborhood (e.g. Capitol Hill, Seattle)`
- Button: `Calculate travel fee` (while loading: `Calculating…`)
- Loading line: `Checking the map…`
- Result: `Distance: X mi — Travel fee: $Y`
- Outside area: `Sorry, no house calls there (X mi) — outside service area (30 mi).`
- Fallback (address not found/offline): `Travel fee: $25 (estimate only — exact distance unavailable)`

---

## 06 · Travel fee calculator (new app, /book page)
Lives on the TanStack app (`pocket-studio-booking-10a2c4c2`), above the Cal.com iframe. Rates are editable in `src/content.ts` (`travel`: flat $25, perMile $2, maxRadiusMi 30). Backend: `POST /api/travel-fee` (Nominatim geocode + straight-line distance from Seattle, WA).

- Title: `House call? Get your travel fee.`
- Explainer: `House calls are Seattle-area only. The fee is $25 base + $2/mi from Seattle, WA, quoted before you book — never after.`
- Input placeholder: `Your address or neighborhood (e.g. Capitol Hill, Seattle)`
- Button: `Calculate travel fee` (while loading: `Calculating…`)
- Loading line: `Checking the map…`
- Result: `Distance: X mi — Travel fee: $Y`
- Outside area: `Sorry, no house calls there (X mi) — outside service area (30 mi).`
- Fallback (address not found/offline): `Travel fee: $25 (estimate only — exact distance unavailable)`

---

## Footer
- **hit me up:** `425-918-2029` · `mykeypocket@icloud.com` · `popl card`
- **the small print:** `pronouns: they/them` / `location: seattle, wa` / `hours: thu 11am–6pm, fri 12pm–5pm, sat–sun 12pm–8pm`
- Hand label: `built by one brain, on purpose`
- Legal: `privacy policy · terms of service · © pocket studio / mykey pocket · not affiliated with Rudy's Barbershop`

---

## Booking popup (corner "book" button quiz)
- Button: `book`
- Panel title: `book with mykey`
- Step 1: `what are we doing?` — options: `a cut` (`buzz, short, or long — clippers or scissors`) / `color` (`roots, refresh, or a full transformation`)
- Step 2 (cut): `which cut?` — Buzz / Short / Long with times
- Step 2 (color): `first time coloring with me?` — `yes, i'm new` (`we plan the lift, tone & maintenance first · 45 min consult · books 3 days out`) / `no, coming back` (`we already know the vibe · 3 hr (up to 5 for complex) · books 1 week out`)
- Result: `nice — you're set up for` + service name + `books X out minimum · earliest: <date>`
- Go button: `book my appointment →`
- Note: `opens the live calendar to pick a day & time. by booking you accept the terms & privacy policy. text 425-918-2029 if nothing fits.`
- Upsell: `now that you're sorted…` / `interested in what else mykey does? add another while you're here.` / `i'm good, thanks — close`
- All booked: `that's the whole menu` / `you've lined up everything mykey offers` / `want something custom? text 425-918-2029 and we'll figure it out.`

## Emergency request modal
- Title: `🚨 emergency request`
- Lede: `need it sooner than the calendar allows?`
- Hint: `tomorrow, this week, whenever — tell me and i'll try to make it work`
- Fields: `your name` (`who am i talking to?`) · `phone or email` (`best way to reach you, fast`) · `what do you need?` (`cut? color? event hair? the whole situation?`) · `when do you need it?` (`e.g. tomorrow afternoon, before saturday…`)
- Send button: `send emergency request →`
- Note: `goes straight to mykey's inbox. truly urgent? text 425-918-2029.`
- Success: `got it — request sent. 🎉 mykey will get back to you fast. if it's truly urgent, also text 425-918-2029.`
- Error: `hmm, that didn't go through. text 425-918-2029 or email itspocketmykey@gmail.com instead.`
