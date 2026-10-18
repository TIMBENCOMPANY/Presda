import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    hero: "Hero: AI-generated anatomical illustration supplied by PRESDA. This is not a photograph, medical scan or diagnostic image.",
    neuron: "A neuron and its myelin sheath, from OpenStax Anatomy and Physiology. This educational diagram identifies the cell body, dendrites, axon and synapse; it is not a microscope photograph. Original English labels retained.",
    neuronAlt: "OpenStax diagram showing a neuronal cell body, branching dendrites and a myelinated axon ending at a synapse",
    mri: "A genuine coronal T2-weighted brain MRI, published by 511KeV in 2024. MRI reveals internal anatomy; this image does not show thoughts or establish a diagnosis here.",
    mriAlt: "Coronal T2-weighted MRI showing the two cerebral hemispheres, ventricles and cerebellum in greyscale",
    changes: "Converted to WebP and resized for responsive delivery by PRESDA. Full composition preserved. The image and its derivatives retain the license linked below.",
    source: "Original image and credit", license: "Image license",
  },
  fr: {
    hero: "Image principale : illustration anatomique générée par IA et fournie par PRESDA. Ce n’est ni une photographie, ni un examen médical, ni une image diagnostique.",
    neuron: "Un neurone et sa gaine de myéline, tirés d’Anatomy and Physiology d’OpenStax. Ce schéma pédagogique identifie le corps cellulaire, les dendrites, l’axone et la synapse ; ce n’est pas une photographie au microscope. Les légendes anglaises originales sont conservées.",
    neuronAlt: "Schéma OpenStax d’un corps cellulaire neuronal, de dendrites ramifiées et d’un axone myélinisé aboutissant à une synapse",
    mri: "Une véritable IRM cérébrale coronale pondérée en T2, publiée par 511KeV en 2024. Elle montre l’anatomie interne, pas les pensées, et ne sert pas ici à établir un diagnostic.",
    mriAlt: "IRM coronale pondérée en T2 montrant en niveaux de gris les hémisphères cérébraux, les ventricules et le cervelet",
    changes: "Conversion WebP et redimensionnement adaptatif par PRESDA. Composition intégrale préservée. L’image et ses dérivés conservent la licence indiquée ci-dessous.",
    source: "Image originale et crédit", license: "Licence de l’image",
  },
  es: {
    hero: "Imagen principal: ilustración anatómica generada por IA y facilitada por PRESDA. No es una fotografía, una exploración médica ni una imagen diagnóstica.",
    neuron: "Una neurona y su vaina de mielina, de Anatomy and Physiology de OpenStax. El diagrama identifica cuerpo celular, dendritas, axón y sinapsis; no es una fotografía microscópica. Se conservan las etiquetas originales en inglés.",
    neuronAlt: "Diagrama de OpenStax con cuerpo celular neuronal, dendritas ramificadas y axón mielinizado que termina en una sinapsis",
    mri: "Resonancia magnética cerebral auténtica, coronal y ponderada en T2, publicada por 511KeV en 2024. Muestra anatomía interna, no pensamientos, y aquí no establece ningún diagnóstico.",
    mriAlt: "Resonancia coronal ponderada en T2 con hemisferios cerebrales, ventrículos y cerebelo en escala de grises",
    changes: "Conversión a WebP y cambio de tamaño adaptativo por PRESDA. Composición completa conservada. La imagen y sus derivados mantienen la licencia enlazada a continuación.",
    source: "Imagen original y crédito", license: "Licencia de imagen",
  },
  ar: {
    hero: "الصورة الرئيسية: رسم تشريحي مولد بالذكاء الاصطناعي ومقدم من PRESDA. ليس صورة فوتوغرافية أو فحصاً طبياً أو صورة تشخيصية.",
    neuron: "عصبون وغلافه المياليني من كتاب التشريح ووظائف الأعضاء لدى OpenStax. يوضح الرسم التعليمي جسم الخلية والتغصنات والمحور والمشبك، وليس صورة مجهرية. حُفظت التسميات الإنجليزية الأصلية.",
    neuronAlt: "رسم OpenStax يوضح جسم خلية عصبية وتغصنات متفرعة ومحوراً مغطى بالميالين ينتهي بمشبك",
    mri: "صورة حقيقية بالرنين المغناطيسي للدماغ، بمقطع إكليلي مرجح بتسلسل T2، نشرها 511KeV عام 2024. تظهر البنية الداخلية لا الأفكار، ولا تستخدم هنا لتقديم تشخيص.",
    mriAlt: "صورة رنين مغناطيسي إكليلية مرجحة بتسلسل T2 تظهر نصفي المخ والبطينات والمخيخ بدرجات رمادية",
    changes: "حولت PRESDA الصورة إلى WebP وأعدت أحجاماً للشاشات المختلفة مع حفظ التكوين الكامل. تحتفظ الصورة ومشتقاتها بالترخيص المرتبط أدناه.",
    source: "الصورة الأصلية ونسب العمل", license: "ترخيص الصورة",
  },
};
export function BrainHeroCaption({ locale }: { locale: Locale }) {
  return <p data-brain-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{copy[locale].hero}</p>;
}
export function BrainScientificImage({ index, locale }: { index: number; locale: Locale }) {
  const id = index === 11 ? "neuron" : index === 44 ? "mri" : undefined;
  if (!id) return null;
  const c = copy[locale];
  const neuron = id === "neuron";
  const source = neuron ? "https://commons.wikimedia.org/wiki/File:1206_The_Neuron.jpg" : "https://commons.wikimedia.org/wiki/File:MRI_Brain_T2_Cor_(16).jpg";
  const license = neuron ? "CC BY 4.0" : "CC BY-SA 4.0";
  return <figure data-brain-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{ maxWidth: neuron ? 825 : 760 }}><LicensedEditorialImage src={`/articles/brain/${id}.webp`} width={neuron ? 825 : 1080} height={neuron ? 552 : 1080} alt={neuron ? c.neuronAlt : c.mriAlt} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c[id]}</p>
      <p dir="auto">{neuron ? "OpenStax, Anatomy and Physiology (2016)" : "511KeV (2024)"} · <a href={source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{c.source}</a></p>
      <p className="text-xs text-white/75">{c.changes}</p>
      <a href={`https://creativecommons.org/licenses/${neuron ? "by" : "by-sa"}/4.0/`} target="_blank" rel="license noopener noreferrer" className="underline underline-offset-4">{c.license}: {license}</a>
    </figcaption>
  </figure>;
}
