type Locale = "en" | "fr" | "ar" | "es";
const study = "https://www.nature.com/articles/s41467-026-78065-z";
const copy = {
  en: { title: "A cellular function recovered in the laboratory", summary: "Internalized photoreceptor material after four hours, as a percentage of measured image area. Not a measure of restored vision.", labels: ["GFP-vector control", "PRPF31 gene augmentation"], unit: "Measured area", note: "Published values from Figure 5A and its results text, September 30, 2026. Three images per condition for the area assay, not three treated patients. Bars show the reported values on a 0–100% scale; they do not display the experiment’s variability or a clinical effect size.", source: "Source: Elia and colleagues, Nature Communications", credit: "PRESDA graphic adapted from attributed findings under CC BY 4.0." },
  fr: { title: "Une fonction cellulaire récupérée au laboratoire", summary: "Matériel de photorécepteurs internalisé après quatre heures, en pourcentage de la surface d’image mesurée. Pas une mesure de vision restaurée.", labels: ["Vecteur témoin GFP", "Apport génique PRPF31"], unit: "Surface mesurée", note: "Valeurs publiées dans la figure 5A et les résultats, le 30 septembre 2026. Trois images par condition pour la surface, pas trois patients traités. Les barres représentent les valeurs sur une échelle de 0 à 100 %, sans montrer la variabilité ni un effet clinique.", source: "Source : Elia et collègues, Nature Communications", credit: "Graphique PRESDA adapté des résultats attribués sous licence CC BY 4.0." },
  es: { title: "Una función celular recuperada en el laboratorio", summary: "Material de fotorreceptores internalizado tras cuatro horas, como porcentaje del área medida en las imágenes. No mide visión restaurada.", labels: ["Vector de control GFP", "Adición génica PRPF31"], unit: "Área medida", note: "Valores publicados en la figura 5A y los resultados, el 30 de septiembre de 2026. Tres imágenes por condición para el área, no tres pacientes tratados. Las barras usan una escala de 0 a 100 %, sin representar variabilidad ni tamaño de efecto clínico.", source: "Fuente: Elia y colaboradores, Nature Communications", credit: "Gráfico PRESDA adaptado de resultados atribuidos bajo CC BY 4.0." },
  ar: { title: "وظيفة خلوية تعافت في المختبر", summary: "مواد مستقبلات الضوء التي ابتلعتها الخلايا بعد أربع ساعات كنسبة من مساحة الصور المقاسة. ليست مقياساً للبصر المستعاد.", labels: ["ناقل GFP الضابط", "إضافة جين PRPF31"], unit: "المساحة المقاسة", note: "قيم منشورة في الشكل 5A ونص النتائج بتاريخ 30 سبتمبر 2026. ثلاث صور لكل حالة في اختبار المساحة، لا ثلاثة مرضى عولجوا. تمثل الأشرطة القيم على مقياس من 0 إلى 100% ولا تعرض التباين التجريبي أو حجم أثر سريري.", source: "المصدر: إليا وزملاؤها، Nature Communications", credit: "رسم PRESDA مقتبس بتصرف من النتائج المنسوبة وفق رخصة CC BY 4.0." }
};
export function RetinalRepairGraphic({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const values = [19.2, 59.3];
  const format = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return <figure id="retinal-repair-evidence" dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby="retinal-repair-chart-title" className="my-8 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id="retinal-repair-chart-title" className="font-display text-xl font-bold sm:text-2xl">{c.title}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/80">{c.summary}</p>
    <div aria-hidden="true" className="mt-5 space-y-5">
      {values.map((value, index) => <div key={value}>
        <div className="mb-2 flex justify-between gap-3 text-sm"><span>{c.labels[index]}</span><bdi className="font-semibold">{format.format(value)}%</bdi></div>
        <div className="h-4 rounded-sm bg-white/10"><div className={`h-full rounded-sm ${index === 0 ? "bg-[#e8c97a]" : "bg-[#ff3333]"}`} style={{ width: `${value}%` }} /></div>
      </div>)}
      <div className="flex justify-between text-xs text-white/75"><bdi>0%</bdi><bdi>100%</bdi></div>
    </div>
    <table className="mt-5 w-full border-collapse text-start text-sm">
      <caption className="sr-only">{c.summary}</caption>
      <thead><tr><th scope="col" className="py-2 text-start">{c.unit}</th><th scope="col" className="py-2 text-end">%</th></tr></thead>
      <tbody>{values.map((value, index) => <tr key={value} className="border-t border-white/20"><th scope="row" className="py-3 pe-3 text-start font-normal">{c.labels[index]}</th><td className="py-3 text-end font-semibold"><bdi>{format.format(value)}</bdi></td></tr>)}</tbody>
    </table>
    <p className="mt-4 text-xs leading-relaxed text-white/75">{c.note}</p>
    <p className="mt-4 text-xs leading-relaxed"><a className="underline decoration-[#ff3333] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white" href={study}>{c.source}</a></p>
    <p className="mt-2 text-xs leading-relaxed text-white/75">{c.credit} <a className="underline" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></p>
  </figure>;
}
