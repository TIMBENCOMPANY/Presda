import originals from "@/data/originalHeroMetadata.json";

type OriginalHero = { width: number; height: number; type: "image/jpeg" };

/** Explicit opt-in for approved originals requested as public discovery/share images. */
export function originalHeroMetadata(source: string, alt: string) {
  const image = (originals as Record<string, OriginalHero>)[source];
  if (!image) return undefined;
  const url = `https://presda.com${source}`;
  return { ...image, url, secureUrl: url, alt };
}
