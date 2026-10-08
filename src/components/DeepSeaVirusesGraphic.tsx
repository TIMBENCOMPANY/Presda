import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: { title: "From Pacific sediment to a viral catalogue", labels: ["Sediment samples", "Viral sequences", "Sequence-based groups"], descriptions: ["53 new samples at 14 stations, plus 7 published samples", "Assembled sequences longer than 5 kilobases", "vOTUs after clustering related sequences"], novelty: "99.3% were not grouped with reference sequences", note: "11,662 of 11,742 vOTUs in the study’s reference comparison. This is not a count of formally approved new species.", depth: "New samples: 5,169–5,285 m below sea level", layers: "Sediment layers: 0–2, 4–6, 8–10 and 14–16 cm below the seabed", quality: "519 genomes assessed as complete; other groups include incomplete sequences.", source: "Sources", study: "Original study: catalogue results", data: "Supplementary Data 1: sampling depths" },
  fr: { title: "Des sédiments du Pacifique au catalogue viral", labels: ["Échantillons de sédiment", "Séquences virales", "Groupes fondés sur les séquences"], descriptions: ["53 nouveaux échantillons dans 14 stations, plus 7 déjà publiés", "Séquences assemblées de plus de 5 kilobases", "vOTU obtenues en regroupant les séquences apparentées"], novelty: "99,3 % sans regroupement avec les séquences de référence", note: "11 662 vOTU sur 11 742 dans la comparaison de l’étude. Ce n’est pas un nombre de nouvelles espèces officiellement approuvées.", depth: "Nouveaux prélèvements : 5 169–5 285 m sous le niveau de la mer", layers: "Couches : 0–2, 4–6, 8–10 et 14–16 cm sous le fond marin", quality: "519 génomes considérés comme complets ; les autres groupes incluent des séquences incomplètes.", source: "Sources", study: "Étude originale : résultats du catalogue", data: "Données supplémentaires 1 : profondeurs" },
  ar: { title: "من رواسب الهادئ إلى سجل فيروسي", labels: ["عينات رواسب", "تسلسلات فيروسية", "مجموعات مبنية على التسلسل"], descriptions: ["53 عينة جديدة من 14 محطة، إضافة إلى 7 عينات منشورة", "تسلسلات مجمعة يزيد طولها على 5 آلاف قاعدة", "وحدات تشغيلية ناتجة عن تجميع التسلسلات المتقاربة"], novelty: "99.3% لم تُجمع مع تسلسلات مرجعية", note: "11,662 وحدة من أصل 11,742 في المقارنة المرجعية للدراسة. ليس هذا عددا لأنواع جديدة معتمدة رسميا.", depth: "العينات الجديدة: 5,169–5,285 مترا تحت سطح البحر", layers: "طبقات الرواسب: 0–2 و4–6 و8–10 و14–16 سم تحت القاع", quality: "519 جينوما قُيمت بأنها مكتملة؛ تشمل المجموعات الأخرى تسلسلات غير مكتملة.", source: "المصادر", study: "الدراسة الأصلية: نتائج السجل", data: "البيانات التكميلية 1: أعماق العينات" },
  es: { title: "Del sedimento del Pacífico al catálogo viral", labels: ["Muestras de sedimento", "Secuencias virales", "Grupos definidos por secuencias"], descriptions: ["53 muestras nuevas en 14 estaciones, más 7 publicadas", "Secuencias ensambladas de más de 5 kilobases", "vOTU tras agrupar secuencias relacionadas"], novelty: "El 99,3 % no se agrupó con secuencias de referencia", note: "11.662 de 11.742 vOTU en la comparación del estudio. No es un recuento de nuevas especies aprobadas oficialmente.", depth: "Muestras nuevas: 5.169–5.285 m bajo el nivel del mar", layers: "Capas: 0–2, 4–6, 8–10 y 14–16 cm bajo el lecho marino", quality: "519 genomas evaluados como completos; otros grupos incluyen secuencias incompletas.", source: "Fuentes", study: "Estudio original: resultados del catálogo", data: "Datos suplementarios 1: profundidades" }
};

export function DeepSeaVirusesGraphic({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale];
  const numbers = [60, 14181, 11742];
  const numberLocale = locale === "ar" ? "en-US" : locale;
  return <figure id="deep-viruses-catalogue" dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby="deep-viruses-title" className="my-10 rounded-2xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">PRESDA Data Graphics</p>
    <figcaption id="deep-viruses-title" className="mt-2 text-xl font-bold sm:text-2xl">{t.title}</figcaption>
    <ol className="mt-6 grid gap-4 sm:grid-cols-3">
      {numbers.map((n,i) => <li key={n} className="rounded-xl border border-white/15 p-4">
        <p className="text-xs font-bold text-white/60"><bdi>{i+1}</bdi></p>
        <p className="mt-2 text-3xl font-bold text-[#D4AF37]"><bdi>{n.toLocaleString(numberLocale)}</bdi></p>
        <h3 className="mt-2 font-semibold">{t.labels[i]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{t.descriptions[i]}</p>
      </li>)}
    </ol>
    <div className="mt-5 border-s-4 border-[#FF1A1A] ps-4"><p className="font-bold">{t.novelty}</p><p className="mt-2 text-sm leading-relaxed text-white/75">{t.note}</p></div>
    <div className="mt-5 space-y-2 text-sm leading-relaxed text-white/75"><p>{t.depth}</p><p>{t.layers}</p><p>{t.quality}</p></div>
    <p className="mt-5 border-t border-white/15 pt-3 text-xs leading-relaxed text-white/65">{t.source}: <a href="https://doi.org/10.1038/s41467-026-78161-0" target="_blank" rel="noopener noreferrer" className="underline">{t.study}</a> · <a href="https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41467-026-78161-0/MediaObjects/41467_2026_78161_MOESM3_ESM.xlsx" target="_blank" rel="noopener noreferrer" className="underline">{t.data}</a> · 2026</p>
  </figure>;
}
