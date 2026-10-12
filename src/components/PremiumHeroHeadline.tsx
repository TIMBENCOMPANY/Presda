import { headlineParts, type HeadlineHighlights } from "@/lib/headline";
import type { Locale } from "@/lib/i18n/routing";

// Hero-only editorial accents. Keep catalogue/card styling and article data intact.
const accents: Record<string, Record<Locale, HeadlineHighlights>> = {
  "feminism-movement-redefined-womens-rights": {
    en: { red: "FEMINISM", gold: "RIGHTS" },
    fr: { red: "FÉMINISME", gold: "DROITS" },
    ar: { red: "النسوية", gold: "حقوق" },
    es: { red: "FEMINISMO", gold: "DERECHOS" }
  },
  "psychology-of-jealousy-when-love-turns-into-suspicion": {
    en: { red: "JEALOUSY", gold: "SUSPICION" },
    fr: { red: "JALOUSIE", gold: "SUSPICION" },
    ar: { red: "الغيرة", gold: "الشك" },
    es: { red: "CELOS", gold: "SOSPECHA" }
  },
  "sleep-paralysis-when-you-wake-up-but-cannot-move": {
    en: { red: "PARALYSIS", gold: "WAKE UP" },
    fr: { red: "PARALYSIE", gold: "RÉVEILLE" },
    ar: { red: "شلل", gold: "تستيقظ" },
    es: { red: "PARÁLISIS", gold: "DESPIERTAS" }
  },
  "paranoia-why-do-we-feel-watched": {
    en: { red: "PARANOIA", gold: "WATCHED" },
    fr: { red: "PARANOÏA", gold: "OBSERVÉ" },
    ar: { red: "الارتياب", gold: "مراقبون" },
    es: { red: "PARANOIA", gold: "OBSERVADOS" }
  },
  "psychology-of-serial-killers-what-science-knows": {
    en: { red: "SERIAL KILLERS", gold: "SCIENCE" },
    fr: { red: "TUEURS", gold: "SCIENCE" },
    ar: { red: "القتلة المتسلسلين", gold: "العلم" },
    es: { red: "ASESINOS", gold: "CIENCIA" }
  },
  "lie-detectors-can-science-really-detect-deception": {
    en: { red: "DETECTORS", gold: "DECEPTION" },
    fr: { red: "MENSONGES", gold: "TROMPERIE" },
    ar: { red: "كشف الكذب", gold: "الخداع" },
    es: { red: "MENTIRAS", gold: "ENGAÑO" }
  },
  "psychology-of-cults-why-people-follow-blindly": {
    en: { red: "CULTS", gold: "BLINDLY" },
    fr: { red: "SECTES", gold: "AVEUGLÉMENT" },
    ar: { red: "الجماعات المغلقة", gold: "تمحيص" },
    es: { red: "SECTAS", gold: "CIEGAMENTE" }
  },
  "world-most-expensive-paintings-ever-sold": {
    en: { red: "PAINTINGS", gold: "SOLD" },
    fr: { red: "TABLEAUX", gold: "VENDUS" },
    ar: { red: "اللوحات", gold: "بيعت" },
    es: { red: "PINTURAS", gold: "VENDIDAS" }
  },
  "beyond-luxury-world-most-unique-hotels": {
    en: { red: "HOTELS", gold: "LUXURY" },
    fr: { red: "HÔTELS", gold: "LUXE" },
    ar: { red: "فنادق", gold: "الفخامة" },
    es: { red: "HOTELES", gold: "LUJO" }
  },
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
