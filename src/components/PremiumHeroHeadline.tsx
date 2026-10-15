import { headlineParts, type HeadlineHighlights } from "@/lib/headline";
import type { Locale } from "@/lib/i18n/routing";

// Hero-only editorial accents. Keep catalogue/card styling and article data intact.
const accents: Record<string, Record<Locale, HeadlineHighlights>> = {
  "butterfly-effect-small-changes-big-consequences": {"en":{"red":"THE BUTTERFLY EFFECT","gold":"BIG CONSEQUENCES"},"fr":{"red":"L’EFFET PAPILLON","gold":"GRANDES CONSÉQUENCES"},"es":{"red":"EL EFECTO MARIPOSA","gold":"GRANDES CONSECUENCIAS"},"ar":{"red":"تأثير الفراشة","gold":"نتائج كبيرة"}},
  "artificial-wombs-future-human-birth": {"en":{"red":"ARTIFICIAL WOMBS","gold":"HUMAN BIRTH"},"fr":{"red":"UTÉRUS ARTIFICIELS","gold":"NAISSANCE HUMAINE"},"es":{"red":"ÚTEROS ARTIFICIALES","gold":"NACIMIENTO HUMANO"},"ar":{"red":"الأرحام الاصطناعية","gold":"الولادة البشرية"}},
  "formula-1-returns-africa-rwanda-deal": {"en":{"red":"FORMULA 1","gold":"RWANDA"},"fr":{"red":"FORMULE 1","gold":"RWANDA"},"es":{"red":"FÓRMULA 1","gold":"RUANDA"},"ar":{"red":"الفورمولا 1","gold":"رواندا"}},
  "beyonce-kelly-rowland-houston-knowles-rowland-house": {"en":{"red":"BEYONCÉ","gold":"HOUSTON"},"fr":{"red":"BEYONCÉ","gold":"HOUSTON"},"es":{"red":"BEYONCÉ","gold":"HOUSTON"},"ar":{"red":"بيونسيه","gold":"هيوستن"}},
  "celine-dion-returns-stage-six-years-paris-2026": {"en":{"red":"CÉLINE DION","gold":"SIX YEARS"},"fr":{"red":"CÉLINE DION","gold":"SIX ANS"},"es":{"red":"CÉLINE DION","gold":"SEIS AÑOS"},"ar":{"red":"سيلين ديون","gold":"ست سنوات"}},
  "sex-education-beyond-the-taboo": {"en":{"red":"SEX EDUCATION","gold":"THE TABOO"},"fr":{"red":"ÉDUCATION SEXUELLE","gold":"DU TABOU"},"es":{"red":"EDUCACIÓN SEXUAL","gold":"DEL TABÚ"},"ar":{"red":"التثقيف الجنسي","gold":"التابو"}},
  "nolan-the-odyssey-universal-box-office-record": {"en":{"red":"THE ODYSSEY","gold":"RECORD"},"fr":{"red":"L’ODYSSÉE","gold":"RECORD"},"es":{"red":"LA ODISEA","gold":"RÉCORD"},"ar":{"red":"الأوديسة","gold":"القياسي"}},
  "netflix-cuts-1000-jobs-biggest-layoffs-since-2022": { en: { red: "NETFLIX", gold: "1,000 JOBS" }, fr: { red: "NETFLIX", gold: "1 000 EMPLOIS" }, es: { red: "NETFLIX", gold: "1.000 EMPLEOS" }, ar: { red: "نتفليكس", gold: "1,000 وظيفة" } },
  "first-giraffe-china-1414-bengal-yongle": {
    en: { red: "GIRAFFE", gold: "CHINA" },
    fr: { red: "GIRAFE", gold: "CHINE" },
    es: { red: "JIRAFA", gold: "CHINA" },
    ar: { red: "زرافة", gold: "الصين" }
  },
  "airplanes-wright-brothers-modern-aviation": {
    en: { red: "AIRPLANES", gold: "WRIGHT BROTHERS" },
    fr: { red: "AVIONS", gold: "FRÈRES WRIGHT" },
    ar: { red: "الطائرات", gold: "الأخوين رايت" },
    es: { red: "AVIONES", gold: "HERMANOS WRIGHT" }
  },
  "crows-intelligence-tools-memory-science": {
    en: { red: "CROWS", gold: "OUTSMART" },
    fr: { red: "CORBEAUX", gold: "DÉJOUENT" },
    ar: { red: "الغربان", gold: "بذكائها" },
    es: { red: "CUERVOS", gold: "BURLAN" }
  },
  "psychology-of-conspiracy-theories-why-we-believe-hidden-plots": {
    en: { red: "CONSPIRACY THEORIES", gold: "HIDDEN PLOTS" },
    fr: { red: "THÉORIES DU COMPLOT", gold: "PLOTS CACHÉS" },
    ar: { red: "نظريات المؤامرة", gold: "مخططات خفية" },
    es: { red: "TEORÍAS DE LA CONSPIRACIÓN", gold: "PLANES OCULTOS" }
  },
  "culture-of-tattoos-ancient-rituals-modern-art": {
    en: { red: "TATTOOS", gold: "MODERN ART" },
    fr: { red: "TATOUAGE", gold: "ART MODERNE" },
    ar: { red: "الوشم", gold: "الفن الحديث" },
    es: { red: "TATUAJE", gold: "ARTE MODERNO" }
  },
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

export function PremiumHeroHeadline({ title, highlights, yellowSecondary = false }: { title: string; highlights: HeadlineHighlights; yellowSecondary?: boolean }) {
  return <>
    {headlineParts(title, highlights).map((part, index) => (
      <span key={index} style={{ color: part.tone === "red" ? "#E53935" : part.tone === "gold" ? (yellowSecondary ? "#FFD54F" : "#D9AD55") : "#FFFFFF" }}>
        {part.text}
      </span>
    ))}
  </>;
}
