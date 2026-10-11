import type { Locale } from "@/lib/i18n/routing";

type Kind = "cycle" | "comparison" | "timeline";
const copy = {
  en: {
    brand: "PRESDA DATA GRAPHICS", titles: ["Two routes through a jellyfish life cycle", "Species matter: compare the evidence", "Research milestones, not an immortality countdown"],
    normal: "Normal development", reverse: "Observed reversal", normalSteps: ["Fertilization and planula larva", "Attached polyp colony", "Medusae bud from the colony", "Medusae produce gametes; fertilization starts the next cycle"], reverseSteps: ["Living medusa under suitable conditions", "Cyst-like tissue stage", "Stolon and new polyps", "Polyps can later produce medusae"],
    cycleNote: "Conceptual sequence, not a time scale. Reversal does not pass through an egg. Laboratory observation does not establish its frequency in the wild or guarantee survival.",
    headers: ["Species / group", "Documented evidence", "Limit"],
    rows: [["Turritopsis dohrnii", "Medusa-to-polyp reversal, including mature animals in foundational experiments", "Not unlimited survival; outcomes depend on conditions"], ["Turritopsis nutricula", "Identified North Carolina animals did not reverse in a 2026 study", "Do not equate modern species identification with every historical use of this name"], ["Turritopsis rubra", "Reversal, cysts and subsequent polyp development studied in 2024", "Does not prove indefinite post-reproductive rejuvenation"], ["Other jellyfish", "Different life cycles and regenerative capacities", "Neither universal reversal nor universal absence of plasticity is established"]],
    comparisonNote: "The 2024 study also compared Aurelia coerulea. This table compares observations, not lifespans or a ranking of immortality.",
    dates: ["1996", "2019 / 2021", "2022 / 2023", "2024", "2025", "24 August 2026"], events: ["Foundational reversal experiments; historical T. nutricula name", "Transcriptome and gene-expression studies", "Comparative genomes, followed by a critique, reply and identification correction", "T. rubra and Aurelia research on genomes and diapause", "102 newborn medusae tested under multiple stressors; 22% did not form cysts", "82 RNA-sequencing samples used to study long noncoding RNA associations"],
    timelineNote: "Publication milestones. Cyst formation is an intermediate endpoint; expression correlations are not functional proof or a human treatment.", source: "Sources", scroll: "Scroll horizontally to read the full comparison."
  },
  fr: {
    brand: "PRESDA DATA GRAPHICS", titles: ["Deux voies dans le cycle d’une méduse", "Comparer les preuves selon l’espèce", "Des étapes de recherche, pas un compte à rebours vers l’immortalité"],
    normal: "Développement normal", reverse: "Inversion observée", normalSteps: ["Fécondation et larve planula", "Colonie de polypes fixés", "Bourgeonnement de méduses", "Production de gamètes ; la fécondation relance le cycle"], reverseSteps: ["Méduse vivante dans des conditions favorables", "Stade tissulaire de type kyste", "Stolon et nouveaux polypes", "Les polypes peuvent produire des méduses"],
    cycleNote: "Séquence conceptuelle, sans durée à l’échelle. L’inversion ne passe pas par un œuf. Le laboratoire ne démontre ni sa fréquence en mer ni une survie garantie.",
    headers: ["Espèce / groupe", "Observation documentée", "Limite"],
    rows: [["Turritopsis dohrnii", "Retour de la méduse au polype, y compris chez des animaux matures dans les expériences fondatrices", "Pas de survie illimitée ; résultats dépendant des conditions"], ["Turritopsis nutricula", "Des animaux identifiés de Caroline du Nord n’ont pas inversé leur développement dans une étude de 2026", "Le nom historique ne garantit pas l’identité de l’espèce actuelle"], ["Turritopsis rubra", "Inversion, kystes et développement ultérieur de polypes étudiés en 2024", "Pas de preuve d’un rajeunissement post-reproductif indéfini"], ["Autres méduses", "Cycles et capacités de régénération variés", "Ni inversion universelle ni absence universelle de plasticité démontrée"]],
    comparisonNote: "L’étude de 2024 comparait aussi Aurelia coerulea. Tableau d’observations, pas de durées de vie ni de classement d’immortalité.",
    dates: ["1996", "2019 / 2021", "2022 / 2023", "2024", "2025", "24 août 2026"], events: ["Expériences fondatrices ; appellation historique T. nutricula", "Études du transcriptome et de l’expression génétique", "Génomes comparés, puis critique, réponse et correction d’identification", "Génomes et diapause de T. rubra et Aurelia", "102 méduses nouvellement formées testées ; 22 % n’ont pas formé de kystes", "82 échantillons de séquençage d’ARN pour étudier des associations d’ARN longs non codifiants"],
    timelineNote: "Dates de publication. Le kyste est une étape intermédiaire ; les corrélations d’expression ne prouvent ni une fonction causale ni un traitement humain.", source: "Sources", scroll: "Faites défiler horizontalement pour lire toute la comparaison."
  },
  es: {
    brand: "PRESDA DATA GRAPHICS", titles: ["Dos rutas en el ciclo de una medusa", "La especie importa: comparar la evidencia", "Hitos científicos, no una cuenta atrás hacia la inmortalidad"],
    normal: "Desarrollo normal", reverse: "Inversión observada", normalSteps: ["Fecundación y larva plánula", "Colonia de pólipos adheridos", "La colonia genera medusas", "Las medusas producen gametos; la fecundación reinicia el ciclo"], reverseSteps: ["Medusa viva en condiciones apropiadas", "Etapa tisular semejante a un quiste", "Estolón y nuevos pólipos", "Los pólipos pueden producir medusas"],
    cycleNote: "Secuencia conceptual, sin escala temporal. La inversión no pasa por un huevo. El laboratorio no establece su frecuencia en el mar ni garantiza la supervivencia.",
    headers: ["Especie / grupo", "Evidencia documentada", "Límite"],
    rows: [["Turritopsis dohrnii", "Regreso de medusa a pólipo, incluso en animales maduros en los experimentos iniciales", "No es supervivencia ilimitada; depende de las condiciones"], ["Turritopsis nutricula", "Animales identificados de Carolina del Norte no invirtieron su desarrollo en un estudio de 2026", "El nombre histórico no garantiza la identidad de la especie actual"], ["Turritopsis rubra", "Inversión, quistes y desarrollo posterior de pólipos estudiados en 2024", "No demuestra rejuvenecimiento posreproductivo indefinido"], ["Otras medusas", "Diversidad de ciclos y capacidades regenerativas", "No se establece inversión universal ni ausencia universal de plasticidad"]],
    comparisonNote: "El estudio de 2024 también comparó Aurelia coerulea. Tabla de observaciones, no de longevidad ni clasificación de inmortalidad.",
    dates: ["1996", "2019 / 2021", "2022 / 2023", "2024", "2025", "24 de agosto de 2026"], events: ["Experimentos iniciales; nombre histórico T. nutricula", "Estudios del transcriptoma y de expresión genética", "Genomas comparados, crítica, respuesta y corrección de identificación", "Genomas y diapausa de T. rubra y Aurelia", "102 medusas recién formadas estudiadas; el 22% no formó quistes", "82 muestras de secuenciación de ARN para estudiar asociaciones de ARN largos no codificantes"],
    timelineNote: "Fechas de publicación. El quiste es una fase intermedia; correlaciones de expresión no prueban función causal ni un tratamiento humano.", source: "Fuentes", scroll: "Desplaza horizontalmente para leer toda la comparación."
  },
  ar: {
    brand: "رسوم بيانات بريسدا", titles: ["مساران في دورة حياة القنديل", "اختلاف الأنواع: مقارنة الأدلة", "محطات بحثية، وليست عدّا تنازليا نحو الخلود"],
    normal: "النمو المعتاد", reverse: "عكس النمو المرصود", normalSteps: ["إخصاب ويرقة بلانولا", "مستعمرة بوليبات ملتصقة", "إنتاج الميدوزات من المستعمرة", "إنتاج أمشاج؛ يبدأ الإخصاب دورة جديدة"], reverseSteps: ["ميدوزا حية في ظروف مناسبة", "مرحلة نسيجية شبيهة بالكيس", "مداد وبوليبات جديدة", "يمكن للبوليبات إنتاج ميدوزات لاحقا"],
    cycleNote: "تسلسل توضيحي وليس مقياسا زمنيا. لا يمر المسار العكسي ببيضة، ولا تحدد الملاحظة المختبرية تكراره في البحر أو تضمن البقاء.",
    headers: ["النوع / المجموعة", "الدليل الموثق", "الحدود"],
    rows: [["Turritopsis dohrnii", "عودة الميدوزا إلى البوليب، بما فيها حيوانات ناضجة في التجارب التأسيسية", "ليست حياة غير محدودة؛ تتأثر النتائج بالظروف"], ["Turritopsis nutricula", "لم تعكس حيوانات محددة من كارولاينا الشمالية نموها في دراسة 2026", "الاسم التاريخي لا يضمن هوية النوع الحالي"], ["Turritopsis rubra", "دراسة عكس النمو والأكياس وتطور البوليبات لاحقا عام 2024", "لا تثبت تجددا غير محدود بعد التكاثر"], ["قناديل أخرى", "دورات حياة وقدرات تجدد مختلفة", "لا يثبت عكس النمو لدى الجميع أو انعدام المرونة لدى الجميع"]],
    comparisonNote: "قارنت دراسة 2024 أيضا Aurelia coerulea. يقارن الجدول ملاحظات، وليس أعمارا أو مراتب للخلود.",
    dates: ["1996", "2019 / 2021", "2022 / 2023", "2024", "2025", "24 أغسطس 2026"], events: ["تجارب تأسيسية تحت الاسم التاريخي T. nutricula", "دراسات النسخ والتعبير الجيني", "مقارنة جينومات ثم نقد ورد وتصحيح معلومات تحديد النوع", "جينومات وكمون T. rubra وAurelia", "اختبار 102 ميدوزا حديثة التكون؛ لم تشكل 22% أكياسا", "82 عينة تسلسل ريبي لدراسة علاقات أحماض ريبيّة طويلة غير مشفرة"],
    timelineNote: "محطات نشر علمي. تكوين الكيس نتيجة وسيطة؛ ارتباط التعبير لا يثبت وظيفة سببية أو علاجا بشريا.", source: "المصادر", scroll: "مرر أفقيا لقراءة المقارنة كاملة."
  }
};
const urls = {
  cycle: [["AMNH", "https://www.amnh.org/explore/news-blogs/immortal-jellyfish"], ["1996", "https://doi.org/10.2307/1543022"], ["2003", "https://doi.org/10.1016/S0040-8166%2803%2900028-4"]],
  comparison: [["1996", "https://doi.org/10.2307/1543022"], ["Zootaxa, 2026", "https://www.mapress.com/zt/article/view/zootaxa.5750.1.5"], ["Nature Communications, 2024", "https://www.nature.com/articles/s41467-024-49848-z"]],
  timeline: [["1996", "https://doi.org/10.2307/1543022"], ["2019", "https://doi.org/10.1534/g3.119.400487"], ["2021", "https://doi.org/10.1093/gbe/evab136"], ["PNAS, 2022", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9459311/"], ["2023", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10089194/"], ["2024", "https://www.nature.com/articles/s41467-024-49848-z"], ["2025", "https://doi.org/10.71161/ivb.144.1.2024.00023"], ["2026", "https://link.springer.com/article/10.1007/s10126-026-10697-0"]]
};

export function JellyfishGraphics({ locale, kind }: { locale: Locale; kind: Kind }) {
  const t = copy[locale];
  const index = ["cycle", "comparison", "timeline"].indexOf(kind);
  const id = `jellyfish-${kind}-${locale}`;
  const note = kind === "cycle" ? t.cycleNote : kind === "comparison" ? t.comparisonNote : t.timelineNote;
  const sequence = (title: string, steps: string[]) => <section className="min-w-0 rounded-xl border border-white/20 p-4"><h4 className="font-display font-bold text-[#D9AD55]">{title}</h4><ol className="mt-3 space-y-3">{steps.map((step, i) => <li key={step} className="flex items-start gap-3 text-sm leading-relaxed"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-xs" aria-hidden="true">{i + 1}</span><span>{step}</span></li>)}</ol></section>;
  return <figure dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={id} data-jellyfish-graphic={kind} className="my-8 clear-both min-w-0 rounded-2xl border border-white/15 bg-[#10131A] p-4 text-white sm:p-6">
    <p className="font-display text-[11px] font-bold tracking-wider text-[#D9AD55]">{t.brand}</p>
    <h3 id={id} className="mt-2 font-display text-xl font-bold leading-snug sm:text-2xl">{t.titles[index]}</h3>
    {kind === "cycle" && <div className="mt-5 grid gap-4 md:grid-cols-2">{sequence(t.normal, t.normalSteps)}{sequence(t.reverse, t.reverseSteps)}</div>}
    {kind === "comparison" && <><p className="mt-4 text-xs text-white/70">{t.scroll}</p><div role="region" aria-labelledby={id} tabIndex={0} className="mt-2 overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D9AD55]"><table className="w-full min-w-[560px] border-collapse text-sm"><caption className="sr-only">{t.titles[index]}</caption><thead><tr>{t.headers.map(h => <th key={h} scope="col" className="border-b border-white/30 p-3 text-start">{h}</th>)}</tr></thead><tbody>{t.rows.map((row, i) => <tr key={i}>{row.map((value, j) => j === 0 ? <th key={j} scope="row" className="border-b border-white/15 p-3 text-start font-medium"><bdi>{value}</bdi></th> : <td key={j} className="border-b border-white/15 p-3 text-start leading-relaxed">{value}</td>)}</tr>)}</tbody></table></div></>}
    {kind === "timeline" && <ol className="mt-5 space-y-3">{t.dates.map((date, i) => <li key={date} className="grid gap-1 border-s-2 border-[#D9AD55]/50 ps-4 sm:grid-cols-[145px_1fr] sm:gap-4"><span className="font-display text-sm font-semibold text-[#D9AD55]"><bdi>{date}</bdi></span><span className="text-sm leading-relaxed">{t.events[i]}</span></li>)}</ol>}
    <figcaption className="mt-4 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/75"><p>{note}</p><p className="mt-2">{t.source}: {urls[kind].map(([label, url], i) => <span key={url}>{i > 0 ? " · " : ""}<a href={url} className="underline underline-offset-4 hover:text-white"><bdi>{label}</bdi></a></span>)}</p></figcaption>
  </figure>;
}
