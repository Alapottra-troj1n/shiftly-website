import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

/*
  The same typeface as the app, self-hosted by next/font at build time — no
  request to Google at run time, and no font host to add to a CSP later.
*/
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const SITE = "https://joinshiftly.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Shiftly AI — run your venue's whole day",
    template: "%s · Shiftly AI",
  },
  /*
    Unlike the app, this site exists to be found. Every page wants a real
    title and description; the defaults below are a starting point, not a
    finished proposition — rewrite them when the positioning is settled.
  */
  description:
    "Rosters, shift checklists, stock ordering and compliance logs for small venues. The shift is the unit, and you can ask it instead of clicking it.",
  openGraph: {
    type: "website",
    siteName: "Shiftly AI",
    url: SITE,
  },
  twitter: { card: "summary_large_image" },
  // TODO: replace when the brand mark and mascot land.
  // icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#fcfbf7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
