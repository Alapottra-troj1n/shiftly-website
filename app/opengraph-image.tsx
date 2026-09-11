import { homeSocialImage, socialImageSize } from "./lib/social-image";

export const alt = "Shiftly AI - Your whole shift. In one place. Rosters, tasks, logs and hours for small venues.";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return homeSocialImage();
}
