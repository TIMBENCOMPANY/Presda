import architectureMedia from "@/data/architectureMedia.json";
import { paintingSales } from "@/data/paintingSales";
import editorialVariants from "@/data/editorialImageVariants.json";
import type { Locale } from "@/lib/i18n/routing";

/** Only images embedded in the article body, never related-story thumbnails. */
export function articleEditorialSitemapImages(slug: string, locale: Locale = "en") {
  const sources = slug === "first-giraffe-china-1414-bengal-yongle"
    ? ["/articles/giraffe-china/met-giraffe-two-keepers.webp"]
    : slug === "modern-architecture-world-most-breathtaking-buildings"
    ? architectureMedia[locale].photographs.map(photo => photo.src)
    : slug === "world-most-expensive-paintings-ever-sold"
      ? paintingSales.flatMap(sale => sale.image ? [sale.image.src] : [])
      : slug === "panama-earthquake-7-7-october-9-2026"
        ? ["/maps/panama-usgs-shakemap-2026-10-09.jpg"]
        : [];
  const variants = editorialVariants as Record<string, { src: string; width: number }[]>;
  return Array.from(new Set(sources.flatMap(source => [
    variants[source]?.at(-1)?.src ?? source,
    source,
    ...(variants[source] ?? []).map(file => file.src)
  ]))).map(source => `https://presda.com${source}`);
}
