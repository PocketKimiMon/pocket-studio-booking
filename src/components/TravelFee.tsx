import { useState } from "react";
import {
  TRAVEL,
  BASE_LAT,
  BASE_LON,
  haversineMi,
  computeTravelFee,
  type TravelFeeResult as _TravelFeeResult,
} from "../lib/travel";

/* Re-export for any caller that still imports TravelFeeResult from this file. */
export type TravelFeeResult = _TravelFeeResult;

export function TravelFee() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const calculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const q = encodeURIComponent(`${address.trim()}, Seattle, WA`);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`,
      );
      if (!res.ok) throw new Error(String(res.status));
      const hits = (await res.json()) as { lat: string; lon: string }[];
      const hit = hits[0];
      if (!hit) throw new Error("not found");
      const miles = haversineMi(BASE_LAT, BASE_LON, parseFloat(hit.lat), parseFloat(hit.lon));
      const feeResult = computeTravelFee(miles);
      if ("outside" in feeResult) {
        setResult({ kind: "outside", miles: feeResult.miles });
      } else {
        const displayedMiles = Math.round(miles * 10) / 10;
        setResult({ kind: "ok", miles: displayedMiles, fee: feeResult.fee });
      }
    } catch {
      setResult({ kind: "fallback" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-ash)",
        }}
      >
        06 · TRAVEL FEE CALCULATOR
      </p>
      <h2
        className="mt-2 max-w-2xl text-4xl font-black leading-tight sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        house call? check your travel fee first.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
        house calls are Seattle-area only. the fee is $25 base + $2/mile from Seattle, quoted before
        you book, never after. no surprises.
      </p>

      <form
        onSubmit={calculate}
        className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border-2 p-5 sm:flex-row sm:items-center sm:p-6"
        style={{
          background: "#fff",
          borderColor: "var(--color-void)",
          boxShadow: "6px 6px 0 var(--color-violet-brand)",
        }}
      >
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="your address or neighborhood (e.g. Capitol Hill, Ballard)"
          aria-label="Your address or neighborhood"
          className="min-w-0 flex-1 rounded-lg border-2 px-3 py-2.5 text-sm"
          style={{ borderColor: "var(--color-void)", background: "var(--color-bone)" }}
        />
        <button
          type="submit"
          disabled={loading || !address.trim()}
          className="shrink-0 border-2 px-5 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          style={{
            background: "var(--color-lime)",
            borderColor: "var(--color-void)",
            boxShadow: "3px 3px 0 var(--color-void)",
          }}
        >
          {loading ? "CALCULATING…" : "CALCULATE TRAVEL FEE"}
        </button>
      </form>

      {loading && (
        <p
          className="mt-4 text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          checking the map…
        </p>
      )}
      {result?.kind === "ok" && (
        <p
          className="mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black"
          style={{
            background: "var(--color-lime)",
            borderColor: "var(--color-void)",
            boxShadow: "3px 3px 0 var(--color-void)",
          }}
        >
          distance: {result.miles.toFixed(1)} mi · travel fee: ${result.fee}
        </p>
      )}
      {result?.kind === "outside" && (
        <p
          className="mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black"
          style={{
            background: "rgba(232,93,4,.15)",
            borderColor: "var(--color-flush)",
            color: "var(--color-flush)",
          }}
        >
          sorry, can't get there. {result.miles.toFixed(1)} mi is outside my {TRAVEL.maxRadiusMi}
          -mile range.
        </p>
      )}
      {result?.kind === "fallback" && (
        <p
          className="mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black"
          style={{
            background: "#fff",
            borderColor: "var(--color-void)",
            boxShadow: "3px 3px 0 var(--color-void)",
          }}
        >
          travel fee: $25 (estimate — exact distance unavailable)
        </p>
      )}
    </section>
  );
}
