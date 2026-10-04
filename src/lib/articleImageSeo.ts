import manifest from "@/lib/image-manifest.generated.json";

const variants = manifest as unknown as Record<string, [number, string][]>;
const absoluteImageUrl = (path: string) => /^https?:\/\//.test(path) ? path : `https://presda.com${path}`;

/** Match the existing article hero's fallback src, without generating any images. */
export function articleImageUrl(source: string) {
  // ArticleLayout deliberately serves this existing hero unoptimized.
  if (source === "/articles/phoenicians-tyrian-purple-sea-ships.png") return absoluteImageUrl(source);
  const images = variants[source];
  return absoluteImageUrl(images?.at(-1)?.[1] ?? source);
}

export function articleImageJsonLd(source: string, alt: string, canonical: string) {
  const image = articleImageUrl(source);
  return {
    "@type": "ImageObject",
    "@id": `${canonical}#primaryimage`,
    url: image,
    contentUrl: image,
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

/** Associate both the delivered hero and its already-published original with the article. */
export function articleSitemapImages(source: string) {
  return Array.from(new Set([articleImageUrl(source), absoluteImageUrl(source)]));
}
