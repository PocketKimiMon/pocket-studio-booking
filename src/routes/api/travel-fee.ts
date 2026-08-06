import { createFileRoute } from "@tanstack/react-router";
import { TRAVEL, type TravelFeeResult, haversineMi, computeTravelFee } from "../../lib/travel";

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
          return Response.json({
            available: true,
            distance_mi: undefined,
            fee: TRAVEL.flat,
            reason: "estimate only — no address",
          } satisfies TravelFeeResult);
        }
        const [client, base] = await Promise.all([geocode(address), geocode(TRAVEL.baseLocation)]);
        if (!client || !base) {
          return Response.json({
            available: true,
            distance_mi: undefined,
            fee: TRAVEL.flat,
            reason: "estimate only",
          } satisfies TravelFeeResult);
        }
        const mi = haversineMi(base.lat, base.lon, client.lat, client.lon);
        const result = computeTravelFee(mi);
        if ("outside" in result) {
          return Response.json({
            available: false,
            distance_mi: result.miles,
            reason: `outside service area (${TRAVEL.maxRadiusMi} mi)`,
          } satisfies TravelFeeResult);
        }
        return Response.json({
          available: true,
          distance_mi: Math.round(mi * 10) / 10,
          fee: result.fee,
        } satisfies TravelFeeResult);
      },
    },
  },
});
