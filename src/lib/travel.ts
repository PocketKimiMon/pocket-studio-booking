// House-call travel fee rates + distance math. Edit here to change pricing or service area.
export const TRAVEL = {
  flat: 25,
  perMile: 2,
  maxRadiusMi: 30,
  baseLocation: "Seattle, WA",
};

/** Pocket Studio home base (downtown Seattle reference point). */
export const BASE_LAT = 47.6062;
export const BASE_LON = -122.3321;

export type TravelFeeResult = {
  available: boolean;
  distance_mi?: number;
  fee?: number;
  reason?: string;
};

/** Haversine great-circle distance in miles. */
export function haversineMi(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/** Compute travel fee from Seattle base. Returns null when outside service area. */
export function computeTravelFee(
  miles: number,
): { fee: number } | { outside: true; miles: number } {
  const rounded = Math.round(miles * 10) / 10;
  if (rounded > TRAVEL.maxRadiusMi) {
    return { outside: true, miles: rounded };
  }
  const fee = Math.round(TRAVEL.flat + TRAVEL.perMile * miles);
  return { fee };
}
