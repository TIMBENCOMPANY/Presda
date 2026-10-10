import { headlineParts, type HeadlineHighlights } from "@/lib/headline";
import type { Locale } from "@/lib/i18n/routing";

// Hero-only editorial accents. Keep catalogue/card styling and article data intact.
const accents: Record<string, Record<Locale, HeadlineHighlights>> = {
  "megan-fox-subs-co-owner-tim-stokely": {
    en: { red: "CO-OWNER", gold: "SUBS.COM" },
    fr: { red: "COPROPRIÉTAIRE", gold: "SUBS.COM" },
    ar: { red: "شريكة", gold: "SUBS.COM" },
    es: { red: "COPROPIETARIA", gold: "SUBS.COM" }
  },
  "world-most-expensive-watches-2026": {
    en: { red: "WATCHES", gold: "2026" },
    fr: { red: "MONTRES", gold: "2026" },
    ar: { red: "أغلى", gold: "2026" },
    es: { red: "RELOJES", gold: "2026" }
  },
  "world-most-powerful-passports-2026-henley-index": {
    en: { red: "PASSPORTS", gold: "2026" },
    fr: { red: "PASSEPORTS", gold: "2026" },
    ar: { red: "جوازات", gold: "2026" },
    es: { red: "PASAPORTES", gold: "2026" }
  }
};

export function getPremiumHeroHighlights(slug: string, locale: Locale) {
  return Object.hasOwn(accents, slug) ? accents[slug][locale] : undefined;
}

export function PremiumHeroHeadline({ title, highlights }: { title: string; highlights: HeadlineHighlights }) {
  return <>
    {headlineParts(title, highlights).map((part, index) => (
      <span key={index} style={{ color: part.tone === "red" ? "#E53935" : part.tone === "gold" ? "#D9AD55" : "#FFFFFF" }}>
        {part.text}
      </span>
    ))}
  </>;
}
