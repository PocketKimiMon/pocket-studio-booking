// House-call travel fee rates. Edit here to change pricing or service area.
export const TRAVEL = {
  flat: 25,
  perMile: 2,
  maxRadiusMi: 30,
  baseLocation: "Seattle, WA",
};

export type TravelFeeResult = {
  available: boolean;
  distance_mi?: number;
  fee?: number;
  reason?: string;
};
