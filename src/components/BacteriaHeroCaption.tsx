import captions from "@/data/bacteriaHeroCaptions.json";
import type { Locale } from "@/lib/i18n/routing";
export function BacteriaHeroCaption({locale}:{locale:Locale}) {return <p data-bacteria-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{captions[locale]}</p>;}
