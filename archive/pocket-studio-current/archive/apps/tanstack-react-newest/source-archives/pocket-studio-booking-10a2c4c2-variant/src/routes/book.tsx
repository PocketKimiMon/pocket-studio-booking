import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "../components/site";
import { contact, travel } from "../content";

export const Route = createFileRoute("/book")({ component: Book });

type FeeResult = {
  available: boolean;
  distance_mi?: number;
  fee?: number;
  reason?: string;
};

function TravelFeeCalculator() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FeeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function calculate() {
    if (!address.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/travel-fee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult((await res.json()) as FeeResult);
    } catch {
      setError("Couldn't reach the calculator — try again, or text us for a quote.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#120E17]">
      <h2 className="text-2xl font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>House call? Get your travel fee.</h2>
      <p className="mt-2 text-sm text-[var(--color-mist)]">
        House calls are Seattle-area only. The fee is ${travel.flat} base + ${travel.perMile}/mi from {contact.location},
        quoted before you book — never after.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void calculate(); } }}
          placeholder="Your address or neighborhood (e.g. Capitol Hill, Seattle)"
          className="w-full flex-1 rounded-full border-2 border-black bg-[var(--color-bone)] px-5 py-2 text-sm font-semibold placeholder:font-normal placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-violet-brand)]"
        />
        <button
          type="button"
          onClick={() => void calculate()}
          disabled={loading || !address.trim()}
          className="rounded-full border-2 border-black bg-[var(--color-lime)] px-5 py-2 text-sm font-black shadow-[3px_3px_0_#120E17] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Calculating…" : "Calculate travel fee"}
        </button>
      </div>
      <div className="mt-4 text-sm font-semibold" aria-live="polite">
        {loading && <p className="text-[var(--color-mist)]">Checking the map…</p>}
        {error && <p className="text-[var(--color-flush)]">{error}</p>}
        {result && (
          result.available ? (
            <p>
              {result.distance_mi != null
                ? <>Distance: {result.distance_mi} mi — Travel fee: <span className="font-black">${result.fee}</span></>
                : <>Travel fee: <span className="font-black">${result.fee}</span> <span className="text-[var(--color-mist)]">({result.reason ?? "estimate only"})</span></>}
            </p>
          ) : (
            <p className="text-[var(--color-flush)]">
              Sorry, no house calls there{result.distance_mi != null ? ` (${result.distance_mi} mi)` : ""} — {result.reason ?? "outside service area"}.
            </p>
          )
        )}
      </div>
    </div>
  );
}

function Book() {
  return <Page eyebrow="book" title="Pick your slot.">
    <TravelFeeCalculator />
    <div className="mt-8 overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[8px_8px_0_#120E17]">
      <iframe src={`${contact.calBase}`} title="Book with Pocket Studio" className="h-[820px] w-full" style={{border:0}} />
    </div>
    <p className="mt-5 text-sm text-[var(--color-mist)]">Bookings run through Cal.com. Need something sooner than the listed lead time? Text <a className="underline" href={`tel:${contact.tel}`}>{contact.phone}</a> or email <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
  </Page>;
}
