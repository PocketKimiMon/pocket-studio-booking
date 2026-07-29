import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pocket Studio" },
      {
        name: "description",
        content:
          "Terms of Service for Pocket Studio (MyKey Pocket), an independent Seattle hair studio.",
      },
    ],
  }),
  component: TermsPage,
});

const S = {
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 900,
    marginTop: 36,
    marginBottom: 12,
  } as const,
  p: { marginBottom: 14, lineHeight: 1.75, color: "var(--color-mist)" } as const,
  li: { marginBottom: 10, lineHeight: 1.7, color: "var(--color-mist)" } as const,
};

function TermsPage() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      {/* top bar */}
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ✂ POCKET STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden text-sm underline-offset-4 hover:underline sm:block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ← home
            </Link>
            <Link
              to="/book"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
              }}
            >
              BOOK
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-14">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "var(--color-flush)",
          }}
        >
          LEGAL
        </p>
        <h1
          className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          terms of service
        </h1>
        <p className="mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-ash)" }}>
          <strong>effective date:</strong> july 29, 2026
        </p>
        <p className="mt-4" style={S.p}>
          these terms govern your use of the pocket studio website and any appointment you book
          with <strong>pocket studio / mykey pocket</strong> — a solo hair artist (they/them)
          based in seattle, wa, currently doing <strong>house calls only</strong>. "i/me/my"
          means mykey pocket; "you" means the client. by booking an appointment, paying a
          deposit, or using this site, you agree to these terms.
        </p>

        {/* plain-language summary card */}
        <div
          className="mt-8 border-2 p-6"
          style={{
            background: "var(--color-card-2)",
            borderColor: "var(--color-void)",
            boxShadow: "5px 5px 0 var(--color-void)",
          }}
        >
          <h2 style={{ ...S.h2, marginTop: 0 }}>the short version (plain-language summary)</h2>
          <ul className="list-disc pl-5">
            <li style={S.li}>
              book through the site (or a cal.com link), pay a <strong>$25 deposit</strong>, get
              a reference code. the deposit comes off your total.
            </li>
            <li style={S.li}>
              the calendar opens <strong>on the 1st for the month ahead</strong>. cuts book at
              least <strong>2 days out</strong>; new-client color consults <strong>3 days</strong>;
              existing-client color <strong>1 week</strong>.
            </li>
            <li style={S.li}>
              i text/email a confirmation request <strong>2 hours before</strong> your
              appointment. no reply = the slot may be released.
            </li>
            <li style={S.li}>
              cancel with at least <strong>24 hours' notice</strong> and you're fine.
              no-call-no-show can be charged <strong>up to the full service amount</strong>.
            </li>
            <li style={S.li}>
              prices are quoted before or at the chair and depend on your hair. color is priced
              at the chair. <strong>payment is due at the appointment.</strong>
            </li>
            <li style={S.li}>
              house calls: give me a safe, ready spot, an accurate address, and a heads-up on
              allergies and past chemical work.
            </li>
            <li style={S.li}>
              pocket studio is <strong>not affiliated with rudy's barbershop</strong>.
            </li>
          </ul>
          <p style={{ ...S.p, marginBottom: 0 }}>
            the full terms below control if there's ever a conflict with this summary.
          </p>
        </div>

        <h2 style={S.h2}>1. the services</h2>
        <p style={S.p}>
          pocket studio provides hair services by appointment at your location within the seattle
          area (within 30 miles of seattle). current menu:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-void)" }}>
                <th className="py-2 pr-4" style={{ fontFamily: "var(--font-mono)" }}>service</th>
                <th className="py-2 pr-4" style={{ fontFamily: "var(--font-mono)" }}>duration</th>
                <th className="py-2" style={{ fontFamily: "var(--font-mono)" }}>price</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--color-mist)" }}>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4">buzz</td>
                <td className="py-2 pr-4">30 min</td>
                <td className="py-2">$50</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4">taper / fades</td>
                <td className="py-2 pr-4">45 min</td>
                <td className="py-2">$60</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4">short cut</td>
                <td className="py-2 pr-4">45 min</td>
                <td className="py-2">$70</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4">long cut</td>
                <td className="py-2 pr-4">60 min</td>
                <td className="py-2">$100</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4">curly cut</td>
                <td className="py-2 pr-4">125 min</td>
                <td className="py-2">$120</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">color</td>
                <td className="py-2 pr-4">varies</td>
                <td className="py-2">priced at the chair</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...S.p, marginTop: 14 }}>
          a <strong>travel fee</strong> applies to house calls: <strong>$25 base + $2 per
          mile</strong> from seattle, quoted when you book or confirm your address.
        </p>

        <h2 style={S.h2}>2. booking</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            appointments are booked through the <strong>booking engine on this site</strong>;
            some booking flows run through <strong>cal.com</strong>, and those bookings are also
            subject to these terms.
          </li>
          <li style={S.li}>
            the booking calendar <strong>opens on the 1st of each month for the full month
            ahead</strong>, first come, first served.
          </li>
          <li style={S.li}>
            minimum lead times: <strong>cuts — 2 days out; new-client color consult — 3 days;
            existing-client color — 1 week.</strong> need it sooner? the emergency request
            option on the contact page exists for that, but nothing is guaranteed.
          </li>
          <li style={S.li}>
            every booking gets a <strong>reference code</strong>. keep it — you can look up,
            manage, or cancel your booking anytime on the <strong>"my bookings"</strong> page
            using your email and reference code.
          </li>
          <li style={S.li}>
            a booking is a reservation of my time, not a guarantee of a specific result. hair is
            a collaboration; we'll talk before scissors move.
          </li>
        </ul>

        <h2 style={S.h2}>3. deposits</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            a <strong>$25 deposit</strong> is required to hold your slot, paid via a{" "}
            <strong>stripe payment link</strong> after you book.
          </li>
          <li style={S.li}>
            the deposit is <strong>applied to your total</strong> at the appointment.
          </li>
          <li style={S.li}>
            stripe processes the payment; i never see your card number. refunds of deposits,
            where owed under these terms, go back through stripe.
          </li>
          <li style={S.li}>
            a slot isn't fully held until the deposit is paid. unpaid bookings may be released.
          </li>
        </ul>

        <h2 style={S.h2}>4. confirmation rule</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>2 hours before</strong> your appointment, i send a confirmation request by
            text and/or email.
          </li>
          <li style={S.li}>
            if i don't hear back from you, <strong>the slot may be released</strong> and the
            appointment treated as cancelled under section 5.
          </li>
          <li style={S.li}>
            life happens — if you confirm late or reach out, i'll do my best to keep you in, but
            released slots go to the next person waiting.
          </li>
        </ul>

        <h2 style={S.h2}>5. cancellations &amp; no-shows</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            you can cancel free of charge up to <strong>24 hours before</strong> your
            appointment, through the "my bookings" page or by texting/calling{" "}
            <strong>425-918-2029</strong>.
          </li>
          <li style={S.li}>cancellations inside 24 hours may forfeit the deposit.</li>
          <li style={S.li}>
            a <strong>no-call-no-show</strong> — you're not there, i can't reach you, no
            cancellation — may be charged <strong>up to the full service amount</strong>. if
            there's a card on file it may be charged; otherwise i'll <strong>send an
            invoice</strong>, which is due on receipt.
          </li>
          <li style={S.li}>
            deposits for appointments i have to cancel on my end are always refunded in full.
          </li>
          <li style={S.li}>repeat no-shows may lose the ability to book in advance.</li>
        </ul>

        <h2 style={S.h2}>6. pricing &amp; payment</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            prices are <strong>quoted before or at the chair</strong> and can vary based on hair
            length, density, condition, and complexity. the menu prices above are the baseline;
            if your hair needs more, i'll tell you before we start, not after.
          </li>
          <li style={S.li}>
            <strong>color is always priced at the chair</strong> — it depends on your hair, your
            history, and what we're doing. a consult (required for new color clients) is how we
            get to a real number.
          </li>
          <li style={S.li}>
            <strong>payment is due in full at the time of the appointment</strong>, minus your
            deposit.
          </li>
          <li style={S.li}>
            quotes are good for the appointment they're quoted at. prices on the site may
            change, but a confirmed booking keeps the price quoted at booking unless the scope
            changes at the chair by agreement.
          </li>
        </ul>

        <h2 style={S.h2}>7. house-call terms</h2>
        <p style={S.p}>because i come to you, i need a few things from your side:</p>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>a safe, ready spot:</strong> decent light, a chair, access to an outlet, and
            enough room to work. if the space is unsafe or unworkable, i may have to decline the
            service, and the no-show policy may apply.
          </li>
          <li style={S.li}>
            <strong>an accurate address and access details</strong> (gate codes, parking, which
            floor). wrong or incomplete addresses can cost us the appointment window.
          </li>
          <li style={S.li}>
            <strong>honest disclosure:</strong> tell me about <strong>allergies, sensitivities,
            and prior chemical work</strong> (color, bleach, relaxers, keratin, henna, box dye —
            all of it) before i start. this is a safety requirement, not a formality.
            undisclosed history that changes the service may result in rescheduling or repricing
            at the chair.
          </li>
          <li style={S.li}>
            travel fee ($25 base + $2/mile from seattle) applies per section 1 and is quoted up
            front.
          </li>
        </ul>

        <h2 style={S.h2}>8. liability</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            i carry out every service with professional care, but you acknowledge that hair
            services — especially chemical services — carry inherent risks, and results vary by
            hair type, condition, and history.
          </li>
          <li style={S.li}>
            to the fullest extent allowed by law, my total liability for any claim arising from
            a service or these terms is <strong>limited to the amount you paid for the service
            giving rise to the claim</strong>.
          </li>
          <li style={S.li}>
            i'm not liable for indirect or consequential damages (missed events, lost wages,
            emotional distress), or for reactions or results caused by <strong>undisclosed
            allergies, sensitivities, or prior chemical work</strong>.
          </li>
          <li style={S.li}>
            nothing in these terms limits liability that can't be limited under washington law,
            including for gross negligence or intentional misconduct.
          </li>
        </ul>

        <h2 style={S.h2}>9. intellectual property</h2>
        <p style={S.p}>
          the website — text, photography, design, logos, and branding — belongs to pocket
          studio / mykey pocket. you may not copy, reproduce, or reuse site content for
          commercial purposes without written permission. photos i take of finished work are
          only used (portfolio, socials) with your permission, and you can withdraw that
          permission anytime.
        </p>

        <h2 style={S.h2}>10. acceptable use of the site</h2>
        <p style={S.p}>
          don't misuse the site: no scraping, no fake or fraudulent bookings, no interfering
          with the booking engine or other people's appointments. fraudulent bookings or
          chargeback abuse may result in cancellation of bookings and refusal of future service.
        </p>

        <h2 style={S.h2}>11. affiliation disclaimer</h2>
        <p style={S.p}>
          pocket studio is an independent, one-person studio. it is <strong>not affiliated
          with, endorsed by, or connected to rudy's barbershop</strong> or any other salon or
          barbershop business.
        </p>

        <h2 style={S.h2}>12. governing law &amp; disputes</h2>
        <p style={S.p}>
          these terms are governed by the laws of the <strong>state of washington</strong>. any
          dispute will be handled in the state or federal courts located in <strong>king
          county, washington</strong>, unless we agree to resolve it informally first — which
          i'd genuinely prefer. text me and let's talk before it becomes a thing.
        </p>

        <h2 style={S.h2}>13. changes to these terms</h2>
        <p style={S.p}>
          i may update these terms as the business grows (new chair, new studio — fingers
          crossed). the current version lives on this page with its effective date, and material
          changes will be flagged on the site before they take effect. bookings made before a
          change stay under the policies in effect when you booked, except where the law says
          otherwise.
        </p>

        <h2 style={S.h2}>14. contact</h2>
        <p style={S.p}>
          questions about any of this — before or after booking:
          <br />
          text or call <strong>425-918-2029</strong> · email{" "}
          <strong>mykeypocket@icloud.com</strong> (alternate:{" "}
          <strong>itspocketmykey@gmail.com</strong>)
        </p>

        <hr className="my-10" style={{ borderColor: "rgba(18,14,23,.2)" }} />
        <p className="text-xs" style={{ color: "var(--color-ash)", fontStyle: "italic" }}>
          draft template notice: this document is a working draft prepared for the pocket studio
          website. it is provided for informational purposes only and does not constitute legal
          advice. before publishing, it should be reviewed by a licensed attorney familiar with
          washington state law — in particular the enforceability of no-show fees, liability
          limitations, and consumer-protection requirements.
        </p>
      </main>
    </div>
  );
}
