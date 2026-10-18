import captions from "@/data/solarHeroCaptions.json";
import type { Locale } from "@/lib/i18n/routing";
export function SolarHeroCaption({locale}:{locale:Locale}) {return <p data-solar-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{captions[locale]}</p>;}
