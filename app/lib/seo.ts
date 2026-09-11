import type { Metadata } from "next";

export const SITE_URL = "https://joinshiftly.com";
export const SITE_NAME = "Shiftly AI";
export const HOME_TITLE = "Shiftly AI - Staff Scheduling & Shift Management";
export const HOME_DESCRIPTION =
  "Plan staff rosters, manage shift checklists, stock orders and compliance logs, and track hours for your café, bar or shop. Ask the built-in AI Assistant.";
const HOME_SOCIAL_ALT =
  "Shiftly AI - Your whole shift. In one place. Rosters, tasks, logs and hours for small venues.";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  socialImage = "/opengraph-image?v=2",
  socialImageAlt = HOME_SOCIAL_ALT,
): Metadata {
  const socialTitle = path === "/" ? title : `${title} · ${SITE_NAME}`;
  const images = [{
    url: socialImage,
    width: 1200,
    height: 630,
    alt: socialImageAlt,
  }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: socialTitle,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}
