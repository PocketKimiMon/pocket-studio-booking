import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../lib/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pocket Studio" },
      { name: "description", content: "Privacy Policy for Pocket Studio / MyKey Pocket, a Seattle hair artist offering house calls." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This Privacy Policy describes how Pocket Studio / MyKey Pocket ("we", "us", or "our"), operating in Seattle, Washington, collects, uses, and protects personal information when you use our booking website and related services.</p>

      <h2>1. Who we are</h2>
      <p>Pocket Studio / MyKey Pocket is a sole-proprietorship personal-care business providing haircutting and coloring services, currently offered as house calls in the Seattle, WA area. Contact: <a href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a> · <a href="tel:425-918-2029">425-918-2029</a>.</p>

      <h2>2. Information we collect</h2>
      <p>When you book or contact us, we may collect:</p>
      <ul>
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Service address / location for house calls</li>
        <li>Preferred appointment date, time, and service type</li>
        <li>Notes you provide (allergies, hair history, parking, pets, accessibility needs, color goals)</li>
        <li>Booking status, confirmations, cancellations, and related service records</li>
        <li>Payment-related information if you choose to pay or leave a card on file through our payment processor (we do not store full card numbers on this website)</li>
      </ul>
      <p>We also receive limited technical data needed to run the site (for example, browser type and approximate device info via standard hosting and third-party service logs).</p>

      <h2>3. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Schedule, confirm, reschedule, and fulfill appointments</li>
        <li>Send appointment confirmations, reminders, and 2-hour verification messages by email and/or SMS</li>
        <li>Communicate about services, policies, invoices, and no-show/cancellation matters</li>
        <li>Maintain business records for operations, taxes, and legal compliance</li>
        <li>Improve safety and service quality (for example, allergy or chemical-history notes you share)</li>
      </ul>
      <p>We do not sell, rent, or share your personal information for third-party marketing.</p>

      <h2>4. Legal bases / why we process</h2>
      <p>We process personal information because it is necessary to provide the booking and hair services you request, to communicate with you about those services, and to operate our business in a lawful, safe way. Where required for marketing texts or optional promotional messages, we will ask for separate consent.</p>

      <h2>5. Third-party services</h2>
      <p>We use trusted processors to run booking and communications. They process data only to provide their services to us:</p>
      <ul>
        <li><b>Cal.com</b> — online scheduling, calendar availability, booking forms, confirmations, and related workflows. See Cal.com's privacy policy for how they handle booking data.</li>
        <li><b>Email / SMS providers</b> used by Cal.com or by us (for example Twilio or similar) to deliver reminders and verification messages.</li>
        <li><b>Calendar providers</b> you or we connect (Google, Apple iCloud, Microsoft Outlook, etc.) so bookings can sync and avoid double-booking.</li>
        <li><b>Payment processors</b> (for example Stripe), if payment or card-on-file is enabled for deposits or no-show protection.</li>
        <li><b>Google Fonts</b> — font files loaded from Google's servers when you view this site.</li>
        <li><b>Hosting / CDN</b> — whatever host serves this static site may process basic server logs.</li>
      </ul>
      <p>Your booking is completed on Cal.com's systems when you select a time and submit the booking form. Do not submit sensitive medical details beyond what is needed for safe hair service.</p>

      <h2>6. SMS and email communications</h2>
      <p>By providing a phone number or email when booking, you agree we (and our processors) may send transactional messages about your appointment: confirmations, reminders, verification checks, reschedule notices, and service follow-ups. Message frequency varies with your bookings. Message and data rates may apply. Reply STOP to opt out of SMS where that option is supported; you can also email or text us to update contact preferences. Opting out of transactional reminders may affect our ability to hold your appointment under the 2-hour verification policy.</p>

      <h2>7. Cookies and tracking</h2>
      <p>This website itself is a simple static site and does not set its own advertising cookies. Third-party services embedded or linked from the site (Cal.com, Google Fonts, payment tools if enabled) may set their own cookies or local storage as described in their policies. We do not run third-party ad trackers on this site.</p>

      <h2>8. Data retention</h2>
      <p>We keep booking and client records only as long as needed to provide services, handle disputes, and meet legal, tax, or bookkeeping obligations. You may request deletion of personal information that we are not required to keep.</p>

      <h2>9. Your choices and rights</h2>
      <p>You may request to access, correct, or delete personal information we hold about you, or ask questions about this policy, by emailing or texting us. Washington residents and other applicable state residents may have additional rights under state privacy laws; we will honor valid requests as required by law. We will not discriminate against you for exercising privacy rights.</p>

      <h2>10. Security</h2>
      <p>We and our processors take reasonable administrative and technical steps to protect personal information. No internet transmission or storage system is completely secure. By booking, you acknowledge that residual risk.</p>

      <h2>11. Children</h2>
      <p>This site is intended for adults booking personal-care services. We do not knowingly collect personal information online from children under 13. Bookings for minors should be made by a parent or legal guardian; see our Terms of Service.</p>

      <h2>12. Changes</h2>
      <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top will change when we do. Continued use of the site after an update means you accept the revised policy.</p>

      <h2>13. Contact</h2>
      <p>Questions about privacy:<br/>MyKey Pocket / Pocket Studio<br/>Email: <a href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a><br/>Phone / text: <a href="tel:425-918-2029">425-918-2029</a><br/>Service area: Seattle, WA</p>
    </LegalLayout>
  );
}