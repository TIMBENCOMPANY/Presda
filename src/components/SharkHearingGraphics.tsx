import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    distance: "How far away did blacktips respond?", note: "Gold bars: mean response distance. Red diamonds: greatest observed distance. These are response observations, not biological hearing limits.",
    heads: ["Sound band", "Mean (m)", "SD (m)", "Maximum (m)", "Responses"], details: "View the measured data", caveat: "Response counts do not identify unique individual sharks. No visible response was recorded to the 10,000 Hz control.",
    senses: "Three senses, three different signals", names: ["Inner ears", "Lateral line", "Electroreception"],
    descriptions: ["Mechanical sound cues, especially particle motion. The field study supports distant detection, but does not isolate the organ or prove direct pressure sensing.", "Local water movement, flow and wakes. Mechanical sensing does not make it interchangeable with inner-ear hearing.", "Weak electric fields detected by the ampullae of Lorenzini. Helps with close-range prey capture; it is not hearing."], source: "Sources", study: "Original field study", sensory: "Multisensory prey-tracking research"
  },
  fr: {
    distance: "À quelle distance les requins bordés réagissent-ils ?", note: "Barres dorées : distance moyenne de réaction. Losanges rouges : plus grande distance observée. Il s’agit de réactions mesurées, pas de limites biologiques de l’audition.",
    heads: ["Bande sonore", "Moyenne (m)", "Écart-type (m)", "Maximum (m)", "Réactions"], details: "Voir les données mesurées", caveat: "Les réactions comptées ne permettent pas d’identifier des individus distincts. Aucune réaction visible au témoin de 10 000 Hz n’a été enregistrée.",
    senses: "Trois sens, trois signaux différents", names: ["Oreilles internes", "Ligne latérale", "Électroréception"],
    descriptions: ["Signaux mécaniques du son, surtout le mouvement des particules. L’étude montre une détection à distance sans isoler l’organe ni prouver une perception directe de la pression.", "Mouvements locaux de l’eau, courants et sillages. Ce sens mécanique ne se confond pas avec l’audition par l’oreille interne.", "Faibles champs électriques perçus par les ampoules de Lorenzini. Utile pour capturer une proie à courte distance, ce n’est pas de l’audition."], source: "Sources", study: "Étude de terrain originale", sensory: "Recherche sur la poursuite multisensorielle des proies"
  },
  ar: {
    distance: "من أي مسافة استجابت قروش الطرف الأسود؟", note: "الأشرطة الذهبية: متوسط مسافة الاستجابة. المعينات الحمراء: أكبر مسافة مرصودة. هذه استجابات مقاسة وليست حدودا بيولوجية للسمع.",
    heads: ["نطاق الصوت", "المتوسط (م)", "الانحراف المعياري (م)", "الأقصى (م)", "الاستجابات"], details: "عرض البيانات المقاسة", caveat: "أعداد الاستجابات لا تحدد أفرادا مختلفين من القروش. لم تسجل استجابة مرئية للصوت الضابط بتردد 10,000 هرتز.",
    senses: "ثلاث حواس وثلاثة أنواع مختلفة من الإشارات", names: ["الأذنان الداخليتان", "الخط الجانبي", "الاستقبال الكهربائي"],
    descriptions: ["إشارات صوتية ميكانيكية، خصوصا حركة الجسيمات. تدعم الدراسة الكشف من بعيد لكنها لا تعزل العضو المسؤول ولا تثبت استشعار الضغط مباشرة.", "حركة الماء المحلية والتدفق والآثار المائية. الاستشعار الميكانيكي لا يجعله مطابقا لسمع الأذن الداخلية.", "حقول كهربائية ضعيفة ترصدها أمبولات لورنزيني. تساعد في التقاط الفرائس من مسافة قريبة، وهي ليست سمعا."], source: "المصادر", study: "الدراسة الميدانية الأصلية", sensory: "بحث تتبع الفرائس باستخدام حواس متعددة"
  },
  es: {
    distance: "¿A qué distancia reaccionaron los tiburones de puntas negras?", note: "Barras doradas: distancia media de respuesta. Rombos rojos: mayor distancia observada. Son respuestas medidas, no límites biológicos de audición.",
    heads: ["Banda sonora", "Media (m)", "Desviación (m)", "Máximo (m)", "Respuestas"], details: "Ver los datos medidos", caveat: "Los recuentos no identifican tiburones individuales distintos. No se registraron respuestas visibles al control de 10.000 Hz.",
    senses: "Tres sentidos, tres señales distintas", names: ["Oídos internos", "Línea lateral", "Electrorrecepción"],
    descriptions: ["Señales mecánicas del sonido, sobre todo movimiento de partículas. El estudio respalda la detección a distancia, pero no aísla el órgano ni demuestra percepción directa de presión.", "Movimiento local del agua, flujos y estelas. Este sentido mecánico no equivale a la audición del oído interno.", "Campos eléctricos débiles detectados por las ampollas de Lorenzini. Ayuda a capturar presas a corta distancia; no es audición."], source: "Fuentes", study: "Estudio de campo original", sensory: "Investigación sobre seguimiento multisensorial de presas"
  }
};
const rows = [
  { band: "100–200 Hz", mean: 40.7, sd: 10.69, max: 74.0, n: 59 },
  { band: "200–400 Hz", mean: 41.0, sd: 15.56, max: 66.1, n: 47 },
  { band: "400–800 Hz", mean: 30.0, sd: 12.81, max: 61.8, n: 59 }
];

export function SharkHearingGraphics({ locale = "en", kind }: { locale?: Locale; kind: "distance" | "senses" }) {
  const t = copy[locale];
  return (
    <figure id={`shark-${kind}`} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`shark-${kind}-title`} className="my-10 rounded-2xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">PRESDA Data Graphics</p>
      <figcaption id={`shark-${kind}-title`} className="mt-2 text-xl font-bold sm:text-2xl">{t[kind]}</figcaption>
      {kind === "distance" ? <>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{t.note}</p>
        <div dir="ltr" className="mt-6 space-y-6" aria-hidden="true">
          {rows.map(row => <div key={row.band}>
            <div className="mb-2 flex justify-between gap-2 text-xs"><b>{row.band}</b><span>{row.mean.toFixed(1)} m / ◆ {row.max.toFixed(1)} m</span></div>
            <div className="relative h-3 rounded bg-white/10"><div className="h-full rounded bg-[#D4AF37]" style={{ width: `${row.mean / 80 * 100}%` }} /><span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF5252]" style={{ left: `${row.max / 80 * 100}%` }}>◆</span></div>
          </div>)}
          <div className="flex justify-between text-xs text-white/60">{[0,20,40,60,80].map(n => <span key={n}>{n} m</span>)}</div>
        </div>
        <details className="mt-5"><summary className="cursor-pointer text-sm font-semibold text-[#D4AF37]">{t.details}</summary><div className="mt-3 overflow-x-auto"><table className="w-full text-start text-xs"><caption className="sr-only">{t.distance}</caption><thead><tr>{t.heads.map(h => <th key={h} scope="col" className="p-2 text-start">{h}</th>)}</tr></thead><tbody>{rows.map(r => <tr key={r.band} className="border-t border-white/15">{[r.band,r.mean.toFixed(1),r.sd.toFixed(2),r.max.toFixed(1),r.n].map((v,i) => <td key={i} className="p-2"><bdi>{v}</bdi></td>)}</tr>)}</tbody></table></div></details>
        <p className="mt-4 text-xs leading-relaxed text-white/65">{t.caveat}</p>
      </> : <div className="mt-5 grid gap-3 sm:grid-cols-3">{t.names.map((name,i) => <div key={name} className="rounded-xl border border-white/15 p-4"><h3 className="font-bold text-[#D4AF37]">{name}</h3><p className="mt-3 text-sm leading-relaxed text-white/80">{t.descriptions[i]}</p></div>)}</div>}
      <p className="mt-5 border-t border-white/15 pt-3 text-xs leading-relaxed text-white/65">{t.source}: <a className="underline" href={kind === "distance" ? "https://doi.org/10.1093/iob/obag033" : "https://pmc.ncbi.nlm.nih.gov/articles/PMC3973673/"} target="_blank" rel="noopener noreferrer">{kind === "distance" ? t.study : t.sensory}</a>{kind === "distance" ? ` · ${{en: "Response-distance results", fr: "Résultats : distances de réaction", ar: "نتائج مسافة الاستجابة", es: "Resultados: distancia de respuesta"}[locale]} · 2026` : " · 2014"}</p>
    </figure>
  );
}
