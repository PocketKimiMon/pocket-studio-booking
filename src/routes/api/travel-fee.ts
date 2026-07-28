import { createFileRoute } from "@tanstack/react-router";
import { TRAVEL } from "../../lib/travel";

const USER_AGENT = "pocket-studio-booking/1.0 (travel fee estimator; Seattle, WA)";

type LatLon = { lat: number; lon: number };

async function geocode(query: string): Promise<LatLon | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) return null;
  const results = (await res.json()) as Array<{ lat: string; lon: string }>;
  if (!Array.isArray(results) || results.length === 0) return null;
  return { lat: Number.parseFloat(results[0].lat), lon: Number.parseFloat(results[0].lon) };
}

function haversineMi(a: LatLon, b: LatLon): number {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return 3958.8 * 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}

type TravelFeeResult = {
  available: boolean;
  distance_mi?: number;
  fee?: number;
  reason?: string;
};

function fallback(reason: string): TravelFeeResult {
  return { available: true, fee: TRAVEL.flat, reason };
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
          address = "";
        }
        if (!address) {
          return Response.json(fallback("estimate only — exact distance unavailable"));
        }

        try {
          const [client, base] = await Promise.all([
            geocode(address),
            geocode(TRAVEL.baseLocation),
          ]);
          if (client && base) {
            const distance = haversineMi(base, client);
            const rounded = Math.round(distance * 10) / 10;
            if (distance > TRAVEL.maxRadiusMi) {
              return Response.json({
                available: false,
                distance_mi: rounded,
                reason: `outside service area (${TRAVEL.maxRadiusMi} mi)`,
              } satisfies TravelFeeResult);
            }
            return Response.json({
              available: true,
              distance_mi: rounded,
              fee: Math.round(TRAVEL.flat + TRAVEL.perMile * distance),
            } satisfies TravelFeeResult);
          }
        } catch {
          // geocoding offline/timed out — fall through to estimate
        }
        return Response.json(fallback("estimate only — exact distance unavailable"));
      },
    },
  },
});
