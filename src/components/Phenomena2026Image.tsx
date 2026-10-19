import media from "@/data/phenomena2026Media.json";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: { source: "Source image", license: "License", changes: "Responsive WebP conversion by PRESDA. Full composition retained. ShareAlike derivatives retain the stated license." },
  fr: { source: "Image source", license: "Licence", changes: "Conversion WebP adaptative par PRESDA. Composition intégrale conservée. Les dérivés ShareAlike gardent la licence indiquée." },
  es: { source: "Imagen original", license: "Licencia", changes: "Conversión WebP adaptable por PRESDA. Composición completa conservada. Los derivados ShareAlike mantienen la licencia indicada." },
  ar: { source: "مصدر الصورة", license: "الترخيص", changes: "تحويل متجاوب إلى WebP بواسطة PRESDA مع حفظ التكوين الكامل. تحتفظ المشتقات بترخيص المشاركة بالمثل المذكور." }
};

export function Phenomena2026Image({ number, locale }: { number: number; locale: Locale }) {
  const item = media.find(image => image.number === number);
  if (!item) return null;
  const c = copy[locale];
  return <figure data-phenomenon-image={number} className="my-10 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "ImageObject",
      contentUrl: `https://presda.com${item.variants[item.variants.length - 1].src}`,
      caption: item.captions[locale], inLanguage: locale,
      license: item.licenseUrl, acquireLicensePage: item.source,
      ...(number === 11 ? {} : { creator: { "@type": /^(NASA|National Science Foundation)/.test(item.author) ? "Organization" : "Person", name: item.author } }),
      creditText: item.author, copyrightNotice: `${item.author} · ${item.license}`
    }).replace(/</g, "\\u003c") }} />
    {/* Native responsive images retain each licensed composition without a runtime transform. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={item.variants[item.variants.length - 1].src} srcSet={item.variants.map(v => `${v.src} ${v.width}w`).join(", ")} sizes="(max-width: 768px) calc(100vw - 64px), 800px" width={item.width} height={item.height} alt={item.captions[locale]} loading="lazy" decoding="async" className={`mx-auto h-auto w-full ${item.height > item.width ? "max-w-[560px]" : "max-w-[1100px]"}`} />
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{item.captions[locale]}</p>
      <p dir="auto">{item.author} · <a href={item.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{c.source}</a> · <a href={item.licenseUrl} target="_blank" rel="license noopener noreferrer" className="underline underline-offset-4">{c.license}: {item.license}</a></p>
      <p className="text-xs text-white/70">{c.changes}</p>
    </figcaption>
  </figure>;
}
