import { createFileRoute } from "@tanstack/react-router";
import { TRAVEL, type TravelFeeResult } from "../../lib/travel";

async function geocode(query: string): Promise<{ lat: number; lon: number } | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "pocket-studio/1.0 (travel-fee)" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as Array<{ lat?: string; lon?: string }>;
  const first = data[0];
  if (!first?.lat || !first.lon) return null;
  return { lat: Number(first.lat), lon: Number(first.lon) };
}

function haversine(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 3958.8 * 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}

export const Route = createFileRoute("/api/travel-fee")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let address = "";
        try {
          const body = (await request.json()) as { address?: unknown };
          address = typeof body?.address === "string" ? body.address.trim() : "";
        } catch {
          // ignore
        }
        if (!address) {
          return Response.json({ available: true, distance_mi: undefined, fee: TRAVEL.flat, reason: "estimate only — no address" } satisfies TravelFeeResult);
        }
        const [client, base] = await Promise.all([geocode(address), geocode(TRAVEL.baseLocation)]);
        if (!client || !base) {
          return Response.json({ available: true, distance_mi: undefined, fee: TRAVEL.flat, reason: "estimate only" } satisfies TravelFeeResult);
        }
        const mi = haversine(base, client);
        const rounded = Math.round(mi * 10) / 10;
        if (rounded > TRAVEL.maxRadiusMi) {
          return Response.json({ available: false, distance_mi: rounded, reason: `outside service area (${TRAVEL.maxRadiusMi} mi)` } satisfies TravelFeeResult);
        }
        const fee = Math.round(TRAVEL.flat + TRAVEL.perMile * mi);
        return Response.json({ available: true, distance_mi: rounded, fee } satisfies TravelFeeResult);
      },
    },
  },
});
