import { getImageCreator } from "@/lib/imageCreators";

const absoluteImageUrl = (path: string) => /^https?:\/\//.test(path) ? path : `https://presda.com${path}`;

/** Match the existing article hero's fallback src, without generating any images. */
export function articleImageUrl(source: string) {
  // ArticleLayout deliberately serves this existing hero unoptimized.
  if (source === "/articles/phoenicians-tyrian-purple-sea-ships.png") return absoluteImageUrl(source);
  // Translation preparation imports articleSeo before image preparation runs.
  // Resolve the generated manifest only when metadata is actually requested.
  const variants = require("@/lib/image-manifest.generated.json") as Record<string, [number, string][]>;
  const images = variants[source];
  return absoluteImageUrl(images?.at(-1)?.[1] ?? source);
}

export function articleImageJsonLd(source: string, alt: string, canonical: string) {
  const image = articleImageUrl(source);
  const creator = getImageCreator(source);
  return {
    "@type": "ImageObject",
    "@id": `${canonical}#primaryimage`,
    url: image,
    contentUrl: image,
    ...(creator ? { creator } : {}),
    description: alt,
    representativeOfPage: true,
    mainEntityOfPage: canonical
  };
}

export function articleImagePage(canonical: string) {
  return {
    "@type": "WebPage",
    "@id": canonical,
    url: canonical,
    primaryImageOfPage: { "@id": `${canonical}#primaryimage` }
  };
}

/** Associate the original, fallback and responsive URLs actually rendered by the hero. */
export function articleSitemapImages(source: string) {
  const existing = [articleImageUrl(source), absoluteImageUrl(source)];
  if (source === "/articles/phoenicians-tyrian-purple-sea-ships.png") return Array.from(new Set(existing));
  const variants = require("@/lib/image-manifest.generated.json") as Record<string, [number, string][]>;
  // Next's hero sizes select device widths >= 640px. Smaller card-only variants
  // are not embedded in this article and must not be claimed in its sitemap.
  const responsive = (variants[source] ?? []).filter(([width]) => width >= 640).map(([, url]) => absoluteImageUrl(url));
  return Array.from(new Set([...existing, ...responsive]));
}
