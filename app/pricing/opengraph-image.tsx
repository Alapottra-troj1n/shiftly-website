import { pricingSocialImage, socialImageSize } from "../lib/social-image";

export const alt = "Shiftly AI pricing - US$10 per venue, per month. One plan for your whole working day.";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return pricingSocialImage();
}
