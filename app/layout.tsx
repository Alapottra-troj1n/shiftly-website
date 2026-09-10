import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
  The supplied brand font is bundled locally, including its SIL licence.
  Neither builds nor browsers need to contact a font host.
*/
const figtree = localFont({
  src: "./fonts/figtree-latin.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
});

const SITE = "https://joinshiftly.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Shiftly AI — Your whole shift. In one place.",
    template: "%s · Shiftly AI",
  },
  description:
    "Plan the roster, keep tasks and logs with each shift, and track the hours. A warmer working day for cafés, bars and independent shops. Just ask Shiftly AI.",
  openGraph: {
    type: "website",
    siteName: "Shiftly AI",
    url: SITE,
    title: "Shiftly AI — Your whole shift. In one place.",
    description:
      "A clear plan for you. A clear day for your team. Rosters, tasks, logs and hours, together with a helping hand from AI.",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/brand/app-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/app-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/mark-primary.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/app-icon-180.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
