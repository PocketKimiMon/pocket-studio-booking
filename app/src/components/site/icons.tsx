// MyKey inline icon set: one stroke style (1.8px, round caps), void/currentColor
// ink, drawn for this brand. Credit-forced fallback per design-brief.md (the
// generated icon sheet was cut when the generation budget went to the scene
// plates and cover); style is consistent so a generated set can drop in later.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 18, ...rest }: P, children: React.ReactNode) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconScissors = (p: P) =>
  base(
    p,
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.3 7.6 20 19" />
      <path d="M8.3 16.4 20 5" />
      <path d="M13.8 12.6 12.4 11.4" />
    </>,
  );

export const IconComb = (p: P) =>
  base(
    p,
    <>
      <path d="M4 5h16v4H4z" />
      <path d="M6 9v10M10 9v7M14 9v10M18 9v7" />
    </>,
  );

export const IconKey = (p: P) =>
  base(
    p,
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M10.8 10.8 20 20" />
      <path d="M16.5 16.5 19 14" />
      <path d="M13.5 13.5 16 11" />
    </>,
  );

export const IconPin = (p: P) =>
  base(
    p,
    <>
      <path d="M12 21s-6.5-5.4-6.5-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>,
  );

export const IconClock = (p: P) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </>,
  );

export const IconPhone = (p: P) =>
  base(
    p,
    <>
      <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.6 1.5C10 20 4 14 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
    </>,
  );

export const IconMail = (p: P) =>
  base(
    p,
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </>,
  );

export const IconArrow = (p: P) =>
  base(
    p,
    <>
      <path d="M4 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>,
  );

export const IconCheck = (p: P) => base(p, <path d="m4.5 12.5 5 5L19.5 7" />);
