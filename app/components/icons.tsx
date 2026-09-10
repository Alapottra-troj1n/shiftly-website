import type { CSSProperties } from "react";
const paths = {
  sun: "M12 2v20M2 12h20M5 5l14 14M5 19 19 5",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  play: "m9 5 10 7-10 7V5Z",
  coffee:
    "M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm12 1h2a3 3 0 0 1 0 6h-2M7 2v2m5-2v2M2 22h18",
  glass: "M5 3h14l-7 9-7-9Zm7 9v9m-4 0h8",
  store:
    "M3 10v11h18V10M2 6l2-4h16l2 4v3a3 3 0 0 1-5 2 3 3 0 0 1-5 0 3 3 0 0 1-5 0 3 3 0 0 1-5-2V6Zm7 15v-7h6v7",
  checklist: "m3 5 1 1 2-2m-3 8 1 1 2-2m-3 8 1 1 2-2M10 5h11m-11 7h11m-11 7h11",
  box: "m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5",
  clipboard: "M9 4H5v18h14V4h-4M9 2h6v5H9V2Zm0 11h6m-6 4h4",
  thermometer: "M9 14.5V5a3 3 0 0 1 6 0v9.5a5 5 0 1 1-6 0ZM12 9v8m0 0v2",
  check: "m5 12 4 4L19 6",
  shield: "m12 2 8 3v6c0 5-3 8-8 11-5-3-8-6-8-11V5l8-3Zm-4 9 3 3 5-6",
  swap: "M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4",
  calendar:
    "M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Zm2-2v4m10-4v4M3 10h18m-14 4h3m4 0h3m-10 3h3",
  sparkles:
    "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM4 2v4M2 4h4m14 14v4m-2-2h4",
  clock: "M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  file: "M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 13h8m-8 4h6",
  leaf: "M20 3C9 2 3 7 5 14s12 7 15-11ZM4 21 15 10",
  expand: "M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 6h16M4 12h16M4 18h16",
} as const;
export function Icon({
  name,
  className,
  style,
}: {
  name: keyof typeof paths;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
export function Arrow() {
  return <Icon name="arrow" />;
}
