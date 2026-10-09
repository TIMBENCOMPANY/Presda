import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    titles: ["How the pause debate developed", "Published safety approaches, not a safety ranking", "Three levels of evidence"],
    notes: ["Selected events. Dates mark publication or testimony, not the start of a global moratorium. Intervals are not proportional to elapsed time.", "A documentation comparison verified on 9 October 2026. Frameworks differ in scope and version. Publishing a policy is not proof of compliance or a guarantee of safety.", "These categories overlap. A present harm, a controlled experimental result and a hypothetical future scenario require different kinds of evidence."],
    timeline: ["22 March 2023|FLI letter requests six months without training systems beyond GPT-4", "18 December 2024|Anthropic publishes alignment-faking research and its limitations", "February 2026|International AI Safety Report distinguishes evidence from uncertain future threats", "8 September 2026|Coxon announces resignation, reported by AP the following day", "23 September 2026|Sanders and Casar introduce a pause and superintelligence-ban bill", "5 October 2026|Coxon and other former researchers testify to New York City Council"],
    companies: ["OpenAI|Preparedness Framework: capability evaluations, safeguards and deployment decisions", "Anthropic|Responsible Scaling Policy: risk reporting and a documented 2026 policy overhaul", "Google DeepMind|Frontier Safety Framework: capability thresholds and mitigations", "xAI|Published 2025 framework: malicious use and loss-of-control risk", "Meta|Frontier AI Framework: risk-based model-release decisions", "DeepSeek|Transparency Center: model cards and technical reports; not equivalent proof of frontier-risk controls"],
    risks: ["Present-day risk mechanisms|Fraud, false information, privacy and discrimination. Assess actual incidents and affected people.", "Controlled findings|Alignment faking and dangerous task capability in defined tests. Inspect prompts, permissions and safeguards.", "Potential future threats|Persistent loss of human control or catastrophic autonomous action. Probabilities and timelines remain uncertain."],
    source: "Sources", question: "Question to ask: what evidence would show that this safeguard actually constrains a release?"
  },
  fr: {
    titles: ["Les étapes du débat sur une pause", "Des cadres publiés, pas un classement de sécurité", "Trois niveaux de preuve"],
    notes: ["Événements choisis. Les dates indiquent publication ou témoignage, pas une pause mondiale. Les intervalles ne sont pas proportionnels aux durées.", "Comparaison documentaire vérifiée le 9 octobre 2026. Périmètres et versions diffèrent. Une politique publiée ne prouve ni conformité ni innocuité.", "Ces catégories se recoupent. Dommage actuel, résultat expérimental et scénario futur demandent des preuves différentes."],
    timeline: ["22 mars 2023|La lettre FLI demande six mois sans entraîner de systèmes dépassant GPT-4", "18 décembre 2024|Anthropic publie ses travaux sur la simulation d’alignement et leurs limites", "Février 2026|Le rapport international distingue preuves et menaces futures incertaines", "8 septembre 2026|Coxon annonce sa démission, rapportée par AP le lendemain", "23 septembre 2026|Sanders et Casar déposent un projet de pause et d’interdiction de la superintelligence", "5 octobre 2026|Coxon et d’autres anciens chercheurs témoignent à New York"],
    companies: ["OpenAI|Preparedness Framework : évaluations de capacités, protections et décisions de déploiement", "Anthropic|Responsible Scaling Policy : rapports de risques et refonte documentée en 2026", "Google DeepMind|Frontier Safety Framework : seuils de capacités et mesures de protection", "xAI|Cadre publié en 2025 : usages malveillants et perte de contrôle", "Meta|Frontier AI Framework : décisions de publication fondées sur le risque", "DeepSeek|Transparency Center : fiches et rapports, pas preuve équivalente de maîtrise des risques de pointe"],
    risks: ["Mécanismes actuels|Fraude, erreurs, atteintes à la vie privée et discrimination. Examiner incidents et personnes touchées.", "Résultats contrôlés|Simulation d’alignement et capacités dangereuses dans des tests définis. Examiner instructions, permissions et protections.", "Menaces futures possibles|Perte durable de contrôle ou action autonome catastrophique. Probabilités et calendrier restent incertains."],
    source: "Sources", question: "Question à poser : quelles preuves montrent que ce dispositif contraint réellement une publication ?"
  },
  ar: {
    titles: ["كيف تطور جدل الوقف المؤقت؟", "مقاربات سلامة منشورة، لا ترتيب للأمان", "ثلاثة مستويات للأدلة"],
    notes: ["أحداث مختارة. تؤرخ النشر أو الشهادة، لا بدء وقف عالمي. الفواصل ليست متناسبة مع الزمن المنقضي.", "مقارنة وثائق جرى التحقق منها في 9 أكتوبر 2026. تختلف الأطر في النطاق والإصدارات، ونشر سياسة لا يثبت الامتثال أو يضمن الأمان.", "تتداخل هذه الفئات. يحتاج الضرر الحالي والنتيجة التجريبية والسيناريو المستقبلي إلى أنواع أدلة مختلفة."],
    timeline: ["22 مارس 2023|تطالب رسالة FLI بستة أشهر دون تدريب أنظمة تتجاوز GPT-4", "18 ديسمبر 2024|تنشر Anthropic أبحاث تظاهر المواءمة وحدودها", "فبراير 2026|يميز التقرير الدولي الأدلة من التهديدات المستقبلية غير اليقينية", "8 سبتمبر 2026|يعلن كوكسون استقالته وتنشر AP خبرها في اليوم التالي", "23 سبتمبر 2026|يقدم ساندرز وكاسار مشروع وقف وحظر للذكاء الفائق", "5 أكتوبر 2026|يدلي كوكسون وباحثون سابقون بشهاداتهم أمام مجلس نيويورك"],
    companies: ["OpenAI|إطار الاستعداد: تقييم القدرات والضمانات وقرارات النشر", "Anthropic|سياسة التوسع المسؤول: تقارير مخاطر ومراجعة موثقة عام 2026", "Google DeepMind|إطار السلامة المتقدمة: عتبات قدرات وتدابير تخفيف", "xAI|إطار منشور عام 2025: سوء الاستخدام وفقدان التحكم", "Meta|إطار الذكاء الاصطناعي المتقدم: إتاحة النماذج وفق المخاطر", "DeepSeek|مركز الشفافية: بطاقات وتقارير تقنية، وليس إثباتاً مماثلاً لضوابط المخاطر المتقدمة"],
    risks: ["آليات مخاطر حالية|احتيال ومعلومات خاطئة وانتهاكات خصوصية وتمييز. تُفحص الحوادث والناس المتأثرون.", "نتائج اختبارات مضبوطة|تظاهر بالمواءمة وقدرات على مهام خطرة بشروط محددة. تُفحص التعليمات والصلاحيات والضمانات.", "تهديدات مستقبلية محتملة|فقدان مستمر للتحكم البشري أو أفعال ذاتية كارثية. تظل الاحتمالات والأزمنة غير يقينية."],
    source: "المصادر", question: "السؤال المهم: ما الدليل على أن هذه الضمانات تقيد قرار الإطلاق فعلياً؟"
  },
  es: {
    titles: ["Cómo se desarrolló el debate sobre la pausa", "Enfoques publicados, no clasificación de seguridad", "Tres niveles de evidencia"],
    notes: ["Hitos seleccionados. Fechas de publicación o testimonio, no inicio de una pausa mundial. Los intervalos no representan duraciones proporcionales.", "Comparación documental verificada el 9 de octubre de 2026. Alcance y versiones difieren. Publicar una política no acredita cumplimiento ni garantiza seguridad.", "Las categorías se solapan. Daño actual, resultado experimental y escenario futuro exigen evidencias distintas."],
    timeline: ["22 de marzo de 2023|La carta FLI pide seis meses sin entrenar sistemas superiores a GPT-4", "18 de diciembre de 2024|Anthropic publica investigación sobre fingir alineamiento y sus límites", "Febrero de 2026|El informe internacional distingue evidencia de amenazas futuras inciertas", "8 de septiembre de 2026|Coxon anuncia su dimisión, informada por AP al día siguiente", "23 de septiembre de 2026|Sanders y Casar presentan un proyecto de pausa y prohibición de superinteligencia", "5 de octubre de 2026|Coxon y otros antiguos investigadores testifican en Nueva York"],
    companies: ["OpenAI|Preparedness Framework: evaluación de capacidades, controles y decisiones de despliegue", "Anthropic|Responsible Scaling Policy: informes de riesgos y revisión documentada en 2026", "Google DeepMind|Frontier Safety Framework: umbrales de capacidad y mitigaciones", "xAI|Marco publicado en 2025: abuso y pérdida de control", "Meta|Frontier AI Framework: decisiones de publicación según riesgos", "DeepSeek|Transparency Center: fichas e informes técnicos, no prueba equivalente de controles del riesgo puntero"],
    risks: ["Mecanismos actuales|Fraude, información falsa, privacidad y discriminación. Examinar incidentes y personas afectadas.", "Hallazgos controlados|Fingir alineamiento y capacidades peligrosas en pruebas definidas. Revisar instrucciones, permisos y controles.", "Amenazas futuras posibles|Pérdida persistente de control o acción autónoma catastrófica. Probabilidades y plazos siguen inciertos."],
    source: "Fuentes", question: "Pregunta clave: ¿qué evidencia muestra que este control condiciona realmente una publicación?"
  }
};
const sources = {
 timeline: [["FLI, 22 March 2023", "https://futureoflife.org/open-letter/pause-giant-ai-experiments/"], ["Anthropic, 18 December 2024", "https://www.anthropic.com/research/alignment-faking"], ["2026 International Report", "https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026"], ["AP, September 2026", "https://apnews.com/article/2ed549e07f2f941600a135070487d83d"], ["S. 5493, introduced text", "https://www.govinfo.gov/content/pkg/BILLS-119s5493is/html/BILLS-119s5493is.htm"], ["NYC Council, October 2026", "https://council.nyc.gov/press/2026/10/05/3278/"]],
 companies: [["OpenAI", "https://openai.com/index/updating-our-preparedness-framework/"], ["Anthropic", "https://www.anthropic.com/responsible-scaling-policy"], ["Google DeepMind", "https://deepmind.google/frontier-safety/"], ["xAI, August 2025", "https://data.x.ai/2025-08-20-xai-risk-management-framework.pdf"], ["Meta", "https://about.fb.com/news/2025/02/meta-approach-frontier-ai/"], ["DeepSeek", "https://www.deepseek.com/en/transparency/"]],
 risks: [["NIST, risk profile", "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"], ["Anthropic / Redwood Research, experiment limitations", "https://www.anthropic.com/research/alignment-faking"], ["2026 International Report, loss-of-control section", "https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026"]]
};

export function AiDangerGraphics({ locale, kind }: { locale: Locale; kind: "timeline" | "companies" | "risks" }) {
  const c = copy[locale], n = { timeline: 0, companies: 1, risks: 2 }[kind], id = `ai-danger-${kind}`;
  const rows = c[kind];
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="flow-root my-10 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{c.titles[n]}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{c.notes[n]}</p>
    <ol className={kind === "timeline" ? "mt-6 space-y-5 border-s-2 border-[#e9bd65]/60 ps-5" : "mt-6 grid gap-4 sm:grid-cols-2"}>
      {rows.map(row => {
        const [label, detail] = row.split("|");
        return <li key={label} className={kind === "timeline" ? "" : "rounded-lg border border-white/15 p-4"}>
          <h3 className="font-display text-lg font-bold text-[#e9bd65]">{label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{detail}</p>
        </li>;
      })}
    </ol>
    {kind === "companies" && <p className="mt-5 border-s-2 border-[#FF1A1A] ps-3 text-sm leading-relaxed">{c.question}</p>}
    <p className="mt-5 text-xs leading-relaxed">{c.source}: {sources[kind].map(([label, url], i) => <span key={url}>{i > 0 && "; "}<a href={url} className="text-[#e9bd65] underline">{label}</a></span>)}</p>
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
