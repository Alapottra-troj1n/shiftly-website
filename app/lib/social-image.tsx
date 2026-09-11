/* eslint-disable @next/next/no-img-element -- ImageResponse renders raw image data; next/image is not available here. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };

const [regularFont, boldFont, logoBase64, mascotBase64, heroBase64] = await Promise.all([
  readFile(join(process.cwd(), "app/fonts/figtree-social-regular.ttf")),
  readFile(join(process.cwd(), "app/fonts/figtree-social-bold.ttf")),
  readFile(join(process.cwd(), "public/brand/lockup-primary.svg"), "base64"),
  readFile(join(process.cwd(), "public/brand/shiftly.svg"), "base64"),
  readFile(join(process.cwd(), "public/brand/shift-objects-og.jpg"), "base64"),
]);

const logoSrc = `data:image/svg+xml;base64,${logoBase64}`;
const mascotSrc = `data:image/svg+xml;base64,${mascotBase64}`;
const heroSrc = `data:image/jpeg;base64,${heroBase64}`;

const responseOptions = {
  ...socialImageSize,
  fonts: [
    { name: "Figtree", data: regularFont, style: "normal" as const, weight: 400 as const },
    { name: "Figtree", data: boldFont, style: "normal" as const, weight: 700 as const },
  ],
};

const frameStyle = {
  position: "absolute" as const,
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
  border: "1px solid rgba(34, 30, 28, 0.12)",
  borderRadius: 28,
  display: "flex",
};

export function homeSocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#221e1c",
        background: "#faf8f6",
        fontFamily: "Figtree",
      }}
    >
      <img
        src={heroSrc}
        alt=""
        width={1080}
        height={630}
        style={{ position: "absolute", top: 0, right: 0, width: 1080, height: 630, objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background: "linear-gradient(90deg, rgba(250,248,246,1) 0%, rgba(250,248,246,.98) 38%, rgba(250,248,246,.72) 52%, rgba(250,248,246,0) 70%)",
        }}
      />
      <div style={frameStyle} />

      <div
        style={{
          position: "absolute",
          top: 54,
          right: 64,
          bottom: 54,
          left: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={logoSrc} alt="Shiftly AI" width={214} height={52} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 83,
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: -2.8,
            lineHeight: 1.02,
          }}
        >
          <div>Your whole shift.</div>
          <div style={{ color: "#5845c8" }}>In one place.</div>
        </div>

        <div style={{ display: "flex", width: 490, marginTop: 27, fontSize: 25, lineHeight: 1.35, color: "#514a45" }}>
          Plan the roster. Keep tasks and logs together. Track the hours. Just ask Shiftly.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            padding: "10px 17px",
            borderRadius: 999,
            background: "rgba(255,255,255,.84)",
            border: "1px solid rgba(34,30,28,.12)",
            fontSize: 17,
            fontWeight: 600,
            color: "#5f5650",
          }}
        >
          For cafés, bars and independent shops
        </div>
      </div>
    </div>,
    responseOptions,
  );
}

export function pricingSocialImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#221e1c",
        background: "linear-gradient(120deg, #fff1ea, #fce6ec 52%, #ede9fe)",
        fontFamily: "Figtree",
      }}
    >
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: 250, right: -130, top: -190, display: "flex", background: "rgba(142,134,240,.2)" }} />
      <div style={{ position: "absolute", width: 360, height: 360, borderRadius: 180, left: 390, bottom: -245, display: "flex", background: "rgba(255,179,135,.28)" }} />
      <div style={frameStyle} />

      <div
        style={{
          position: "absolute",
          top: 54,
          right: 64,
          bottom: 54,
          left: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={logoSrc} alt="Shiftly AI" width={214} height={52} />

        <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", marginTop: 58 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 565 }}>
            <div style={{ fontSize: 25, fontWeight: 700, letterSpacing: .2, color: "#755f70", textTransform: "uppercase" }}>
              Simple pricing
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 16, fontSize: 72, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
              <div>One plan.</div>
              <div style={{ color: "#5845c8" }}>$10. No fuss.</div>
            </div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 24, lineHeight: 1.4, color: "#514a45" }}>
              Your whole working day, in one place. One price for your venue.
            </div>
          </div>

          <div
            style={{
              width: 360,
              height: 348,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 28,
              background: "rgba(255,255,255,.88)",
              border: "1px solid rgba(34,30,28,.12)",
              boxShadow: "0 24px 60px rgba(91,64,85,.14)",
            }}
          >
            <img src={mascotSrc} alt="" width={76} height={76} />
            <div style={{ display: "flex", alignItems: "flex-start", marginTop: 16, color: "#221e1c" }}>
              <span style={{ fontSize: 29, fontWeight: 700, marginTop: 15, marginRight: 4 }}>US$</span>
              <span style={{ fontSize: 100, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>10</span>
            </div>
            <div style={{ display: "flex", marginTop: 8, fontSize: 21, color: "#665865" }}>per venue, per month</div>
            <div style={{ display: "flex", marginTop: 24, padding: "8px 14px", borderRadius: 999, background: "#f3eef9", color: "#66517d", fontSize: 16, fontWeight: 600 }}>
              Pre-launch · Join early
            </div>
          </div>
        </div>
      </div>
    </div>,
    responseOptions,
  );
}
