import { ImageResponse } from "next/og";

export const alt = "Shiftly AI - Your whole shift. In one place. Rosters, tasks, logs and hours for small venues.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: "100%", height: "100%", padding: "64px 72px",
      background: "linear-gradient(120deg, #fff1ea, #fce6ec 52%, #ede9fe)",
      color: "#221e1c", fontFamily: "sans-serif",
    }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>Shiftly AI</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 80, fontWeight: 700, letterSpacing: -3, lineHeight: 1.1 }}>
        <div>Your whole shift.</div>
        <div style={{ color: "#5845c8" }}>In one place.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 30 }}>Rosters, tasks, logs and hours for small venues.</div>
        <div style={{ fontSize: 24, color: "#6e6862" }}>joinshiftly.com</div>
      </div>
    </div>,
    size,
  );
}
