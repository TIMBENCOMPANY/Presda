import captions from "@/data/universeHeroCaptions.json";
import type { Locale } from "@/lib/i18n/routing";

export function UniverseHeroCaption({ locale }: { locale: Locale }) {
  return <p data-universe-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{captions[locale]}</p>;
}
