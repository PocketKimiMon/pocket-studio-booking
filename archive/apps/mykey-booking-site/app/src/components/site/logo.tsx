// MyKey monogram, restyled to the PocketStudio system: oxblood rounded
// square, cream MK letterforms, and the signature lime utility notch.
// The favicon rasters are derived from the same geometry.
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
      <rect x="2" y="2" width="44" height="44" rx="11" fill="#C53B38" />
      <path
        d="M9 33V15h4.4l5.2 9.4L23.8 15h4.4v18h-3.9V20.8l-4.6 8h-2.2l-4.6-8V33H9Z"
        fill="#F4EFE6"
      />
      <path
        d="M30 33V15h3.9v6.8l4.9-6.8h4.5l-5.9 7.9L43.6 33h-4.7l-3.8-6.6-1.2 1.7V33H30Z"
        fill="#F4EFE6"
      />
      <rect x="37" y="40" width="7" height="6" fill="#B6F23A" />
    </svg>
  );
}
