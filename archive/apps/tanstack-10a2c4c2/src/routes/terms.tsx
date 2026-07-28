import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pocket Studio" },
      { name: "description", content: "Terms of Service for Pocket Studio (MyKey Pocket), an independent Seattle hair studio." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-[720px] px-5 py-14 sm:px-8">
        <Link to="/" className="text-sm underline" style={{ color: "var(--color-ash)" }}>← back</Link>
        <h1 className="mt-6 text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>Terms of Service</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose mt-8 space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
          <p>
            These Terms of Service ("Terms") govern your booking and use of services from Pocket Studio,
            operated by MyKey Pocket (they/them) in Seattle, Washington ("we," "us," "our"). By booking
            an appointment, using pocketstudio.biz, or communicating with the studio, you agree to
            these Terms.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Booking &amp; scheduling</h2>
          <p>
            Books open one month at a time on a first-come, first-serve basis. Cut appointments must be
            booked at least two (2) days in advance. New-client color consultations must be booked at
            least three (3) days in advance. Existing-client color appointments must be booked at least
            one (1) week in advance.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Confirmations</h2>
          <p>
            You will receive a confirmation request prior to your appointment. You are responsible for
            confirming within the two-hour confirmation window. Unconfirmed slots may be released.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Cancellations &amp; no-shows</h2>
          <p>
            Cancellations and reschedules require at least twenty-four (24) hours' notice. Late
            cancellations may be charged a portion of the service fee. No-shows may be charged up to
            the full quoted or estimated amount of the missed service, at our discretion, using the
            payment method on file or by invoice.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Pricing &amp; color estimates</h2>
          <p>
            Color services are quoted based on your consultation. Final pricing may adjust based on
            the actual product and time required, and will be communicated before work continues.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>The studio space</h2>
          <p>
            Pocket Studio operates within a shared home space. Please arrive on time and only with
            arranged guests. Pets and children other than clients cannot be accommodated unless
            confirmed in advance.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Not affiliated</h2>
          <p>
            Pocket Studio is an independent business and is not affiliated with Rudy's Barbershop or
            any other salon.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, our liability for any claim arising out of or
            related to services is limited to the amount you paid for the service in question. We are
            not liable for indirect or consequential damages.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The current version will always be posted at
            pocketstudio.biz/terms.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Contact</h2>
          <p>
            Questions? Email <a className="underline" href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a>{" "}
            or call/text <a className="underline" href="tel:14259182029">425-918-2029</a>.
          </p>
        </div>
      </div>
    </div>
  );
}