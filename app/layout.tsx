import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from "./lib/seo";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s · Shiftly AI",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/brand/shiftly-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/shiftly-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/shiftly.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/shiftly-icon-180.png",
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
    <html lang="en" className={figtree.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
