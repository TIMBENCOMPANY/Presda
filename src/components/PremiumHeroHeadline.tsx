import { headlineParts, type HeadlineHighlights } from "@/lib/headline";
import type { Locale } from "@/lib/i18n/routing";

// Hero-only editorial accents. Keep catalogue/card styling and article data intact.
const accents: Record<string, Record<Locale, HeadlineHighlights>> = {
  "moon-landing-conspiracy-apollo-evidence": {"en":{"red":"LAND ON THE MOON?","gold":"THE CONSPIRACY EXPLAINED"},"fr":{"red":"SUR LA LUNE ?","gold":"LA THÉORIE DU COMPLOT EXPLIQUÉE"},"es":{"red":"A LA LUNA?","gold":"LA CONSPIRACIÓN EXPLICADA"},"ar":{"red":"على القمر؟","gold":"تفسير نظرية المؤامرة"}},
  "giordano-bruno-philosopher-heresy": {"en":{"red":"GIORDANO BRUNO","gold":"FOR HERESY"},"fr":{"red":"GIORDANO BRUNO","gold":"POUR HÉRÉSIE"},"es":{"red":"GIORDANO BRUNO","gold":"POR HEREJÍA"},"ar":{"red":"جوردانو برونو","gold":"بتهمة الهرطقة"}},
  "vincent-van-gogh-life-art-legacy": {"en":{"red":"VINCENT VAN GOGH","gold":"PAINTED HIS PAIN"},"fr":{"red":"VINCENT VAN GOGH","gold":"PEIGNAIT SA DOULEUR"},"es":{"red":"VINCENT VAN GOGH","gold":"PINTÓ SU DOLOR"},"ar":{"red":"فنسنت فان غوخ","gold":"رسم ألمه"}},
  "dostoevsky-life-death-human-darkness": {"en":{"red":"DOSTOEVSKY","gold":"HUMAN DARKNESS"},"fr":{"red":"DOSTOÏEVSKI","gold":"TÉNÈBRES HUMAINES"},"es":{"red":"DOSTOYEVSKI","gold":"OSCURIDAD HUMANA"},"ar":{"red":"دوستويفسكي","gold":"ظلام الإنسان"}},
  "princess-diana-life-tragedy-legacy": {"en":{"red":"PRINCESS DIANA","gold":"PEOPLE'S PRINCESS"},"fr":{"red":"PRINCESSE DIANA","gold":"PRINCESSE DU PEUPLE"},"es":{"red":"PRINCESA DIANA","gold":"PRINCESA DEL PUEBLO"},"ar":{"red":"الأميرة ديانا","gold":"أميرة الشعب"}},
  "modern-warfare-4-campaign-early-access": {"en":{"red":"CALL OF DUTY","gold":"EARLY ACCESS"},"fr":{"red":"CALL OF DUTY","gold":"ACCÈS ANTICIPÉ"},"es":{"red":"CALL OF DUTY","gold":"ACCESO ANTICIPADO"},"ar":{"red":"كول أوف ديوتي","gold":"الوصول المبكر"}},
  "tesla-roadster-rocket-thrusters-2028": {"en":{"red":"TESLA","gold":"2028 PRODUCTION"},"fr":{"red":"TESLA","gold":"PRODUCTION EN 2028"},"es":{"red":"TESLA","gold":"2028"},"ar":{"red":"تسلا","gold":"الإنتاج في 2028"}},
  "chocolate-ancient-cacao-global-obsession": {"en":{"red":"CHOCOLATE","gold":"GLOBAL OBSESSION"},"fr":{"red":"CHOCOLAT","gold":"PASSION MONDIALE"},"es":{"red":"CHOCOLATE","gold":"PASIÓN MUNDIAL"},"ar":{"red":"الشوكولاتة","gold":"شغف عالمي"}},
  "ham-chimpanzee-space-before-americas-first-astronaut": {"en":{"red":"HAM","gold":"FIRST ASTRONAUT"},"fr":{"red":"HAM","gold":"PREMIER ASTRONAUTE AMÉRICAIN"},"es":{"red":"HAM","gold":"PRIMER ASTRONAUTA ESTADOUNIDENSE"},"ar":{"red":"هام","gold":"أول رائد فضاء أمريكي"}},
  "felicette-french-cat-space-tragic-end": {"en":{"red":"FÉLICETTE","gold":"A TRAGIC END"},"fr":{"red":"FÉLICETTE","gold":"AU DESTIN TRAGIQUE"},"es":{"red":"FÉLICETTE","gold":"UN FINAL TRÁGICO"},"ar":{"red":"فيليسيت","gold":"نهاية مأساوية"}},
  "dolly-cloned-sheep-changed-science": {"en":{"red":"DOLLY","gold":"CHANGED SCIENCE FOREVER"},"fr":{"red":"DOLLY","gold":"CHANGÉ LA SCIENCE À JAMAIS"},"es":{"red":"DOLLY","gold":"CAMBIÓ LA CIENCIA PARA SIEMPRE"},"ar":{"red":"دولي","gold":"غيرت العلم إلى الأبد"}},
  "winter-dolphin-prosthetic-tail": {"en":{"red":"WINTER","gold":"PROSTHETIC TAIL"},"fr":{"red":"WINTER","gold":"QUEUE PROTHÉTIQUE"},"es":{"red":"WINTER","gold":"COLA PROTÉSICA"},"ar":{"red":"وينتر","gold":"بذيل اصطناعي"}},
  "laika-first-dog-orbit-never-came-home": {"en":{"red":"LAIKA","gold":"NEVER RETURNED"},"fr":{"red":"LAÏKA","gold":"N’EST JAMAIS REVENUE"},"es":{"red":"LAIKA","gold":"NUNCA REGRESÓ"},"ar":{"red":"لايكا","gold":"لم تعد أبدا"}},
  "animal-testing-hidden-cost-scientific-progress": {"en":{"red":"ANIMAL TESTING","gold":"SCIENTIFIC PROGRESS"},"fr":{"red":"EXPÉRIMENTATION ANIMALE","gold":"PROGRÈS SCIENTIFIQUE"},"es":{"red":"EXPERIMENTACIÓN ANIMAL","gold":"PROGRESO CIENTÍFICO"},"ar":{"red":"التجارب على الحيوانات","gold":"للتقدم العلمي"}},
  "pill-culture-red-blue-black-pills-modern-thinking": {"en":{"red":"THE PILL CULTURE","gold":"MODERN THINKING"},"fr":{"red":"LA CULTURE DES PILULES","gold":"LA PENSÉE MODERNE"},"es":{"red":"LA CULTURA DE LAS PÍLDORAS","gold":"EL PENSAMIENTO MODERNO"},"ar":{"red":"ثقافة الحبوب","gold":"التفكير المعاصر"}},
  "bobby-fischer-chess-legend-america-iceland": {"en":{"red":"BOBBY FISCHER","gold":"ICELAND"},"fr":{"red":"BOBBY FISCHER","gold":"ISLANDE"},"es":{"red":"BOBBY FISCHER","gold":"ISLANDIA"},"ar":{"red":"بوبي فيشر","gold":"آيسلندا"}},
  "nikola-tesla-genius-helped-electrify-world": {"en":{"red":"NIKOLA TESLA","gold":"ELECTRIFY THE WORLD"},"fr":{"red":"NIKOLA TESLA","gold":"ÉLECTRIFIER LE MONDE"},"es":{"red":"NIKOLA TESLA","gold":"ELECTRIFICAR EL MUNDO"},"ar":{"red":"نيكولا تسلا","gold":"كهربة العالم"}},
  "invention-photography-first-photo-digital-age": {"en":{"red":"THE INVENTION OF PHOTOGRAPHY","gold":"THE DIGITAL AGE"},"fr":{"red":"L’INVENTION DE LA PHOTOGRAPHIE","gold":"L’ÈRE NUMÉRIQUE"},"es":{"red":"LA INVENCIÓN DE LA FOTOGRAFÍA","gold":"LA ERA DIGITAL"},"ar":{"red":"اختراع التصوير الفوتوغرافي","gold":"العصر الرقمي"}},
  "medical-cannabis-science-benefits-risks": {"en":{"red":"MEDICAL CANNABIS","gold":"BENEFITS AND RISKS"},"fr":{"red":"CANNABIS MÉDICAL","gold":"BÉNÉFICES ET SES RISQUES"},"es":{"red":"CANNABIS MEDICINAL","gold":"BENEFICIOS Y RIESGOS"},"ar":{"red":"القنب الطبي","gold":"فوائده ومخاطره"}},
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
