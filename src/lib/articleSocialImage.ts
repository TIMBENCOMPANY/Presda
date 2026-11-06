import { originalHeroMetadata } from "@/lib/originalHeroMetadata";

type SocialImage = { url: string; width: number; height: number; type: "image/jpeg" };

/** One public image per hero, shared across languages. No brand-logo fallback. */
export function articleSocialImage(source: string, alt: string) {
  const original = originalHeroMetadata(source, alt);
  if (original) return original;
  // Translation preparation runs before derivative generation, so resolve lazily.
  const images = require("@/lib/social-image-manifest.generated.json") as Record<string, SocialImage>;
  const image = images[source];
  if (!image) throw new Error(`Missing article share image: ${source}. Run images:prepare.`);
  const url = `https://presda.com${image.url}`;
  return { ...image, url, secureUrl: url, alt };
}
