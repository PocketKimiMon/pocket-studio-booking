// MyKey monogram: bespoke vector mark (lime ticket, void MK letterforms),
// the site's logo. The favicon raster is derived from this same geometry.
export function MkMonogram({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="MyKey Pocket monogram"
      className="mk-brand-mark"
    >
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#8ACE00" />
      <rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke="#120E17" strokeWidth="3" />
      <path
        d="M10 34V14h4.2l5.4 9.6L25 14h4.2v20h-4V21.4l-4.4 7.6h-2.4l-4.4-7.6V34H10Z"
        fill="#120E17"
      />
      <path
        d="M31.5 34V14h4v7.4l5.3-7.4h4.6l-6.3 8.4L45.8 34h-4.8l-4-7-1.5 2V34h-4Z"
        fill="#120E17"
      />
    </svg>
  );
}
