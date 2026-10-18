import captions from "@/data/universeHeroCaptions.json";
import type { Locale } from "@/lib/i18n/routing";

const labels = {
  en: { source: "Official image record", original: "Original high-resolution image" },
  fr: { source: "Notice officielle", original: "Image originale en haute résolution" },
  es: { source: "Registro oficial", original: "Imagen original de alta resolución" },
  ar: { source: "السجل الرسمي للصورة", original: "الصورة الأصلية عالية الدقة" },
};

export function UniverseHeroCaption({ locale }: { locale: Locale }) {
  return <p data-universe-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">
    {captions[locale]}{" "}
    <a className="underline underline-offset-4" href="https://esawebb.org/images/weic2209a/" target="_blank" rel="noopener noreferrer">{labels[locale].source}</a>{" · "}
    <a className="underline underline-offset-4" href="https://esawebb.org/copyright/" target="_blank" rel="license noopener noreferrer">CC BY 4.0</a>{" · "}
    <a className="underline underline-offset-4" href="/articles/universe-hero.jpg">{labels[locale].original}</a>
  </p>;
}
