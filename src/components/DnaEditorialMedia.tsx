import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const copy = {
  en: {
    hero: "Hero: PRESDA AI-generated scientific illustration. A conceptual DNA double helix, not a microscope photograph or a molecular structure determination.",
    structure: "DNA structure, from OpenStax Anatomy and Physiology (2016). The diagram shows complementary bases and the sugar-phosphate backbone. It is a published educational diagram, not microscopy; original English labels are retained.",
    structureAlt: "OpenStax diagram of the DNA double helix, complementary base pairs and the sugar, phosphate and base components of a nucleotide",
    replication: "A simplified replication fork, from OpenStax Anatomy and Physiology (2016). Helicase separates the strands while DNA polymerases build complementary copies. This educational diagram is not to molecular scale; original English labels are retained.",
    replicationAlt: "OpenStax diagram showing helicase opening DNA and polymerases copying leading and lagging strands at a replication fork",
    changes: "Converted to WebP and resized by PRESDA for responsive delivery. Full composition preserved.", source: "Original image and credit", license: "License",
  },
  fr: {
    hero: "Image principale : illustration scientifique générée par IA pour PRESDA. Double hélice conceptuelle, et non photographie au microscope ou détermination d’une structure moléculaire.",
    structure: "Structure de l’ADN, OpenStax Anatomy and Physiology (2016). Le schéma montre les bases complémentaires et le squelette sucre-phosphate. Schéma pédagogique publié, pas une image microscopique ; légendes anglaises originales conservées.",
    structureAlt: "Schéma OpenStax de la double hélice, des bases complémentaires et des composants sucre, phosphate et base d’un nucléotide",
    replication: "Fourche de réplication simplifiée, OpenStax Anatomy and Physiology (2016). L’hélicase sépare les brins et les ADN polymérases construisent les copies complémentaires. Schéma pédagogique sans échelle moléculaire ; légendes anglaises originales conservées.",
    replicationAlt: "Schéma OpenStax montrant l’ouverture de l’ADN par l’hélicase et la copie des brins continu et discontinu par les polymérases",
    changes: "Conversion WebP et redimensionnement adaptatif par PRESDA. Composition intégrale préservée.", source: "Image originale et crédit", license: "Licence",
  },
  es: {
    hero: "Imagen principal: ilustración científica generada por IA para PRESDA. Doble hélice conceptual, no una fotografía microscópica ni una determinación de estructura molecular.",
    structure: "Estructura del ADN, OpenStax Anatomy and Physiology (2016). Muestra bases complementarias y el esqueleto de azúcar y fosfato. Diagrama educativo publicado, no microscopía; etiquetas originales en inglés conservadas.",
    structureAlt: "Diagrama OpenStax de la doble hélice, bases complementarias y componentes azúcar, fosfato y base de un nucleótido",
    replication: "Horquilla de replicación simplificada, OpenStax Anatomy and Physiology (2016). La helicasa separa las cadenas y las ADN polimerasas construyen copias complementarias. Diagrama educativo sin escala molecular; etiquetas originales en inglés conservadas.",
    replicationAlt: "Diagrama OpenStax de helicasa abriendo ADN y polimerasas copiando las cadenas continua y discontinua",
    changes: "Conversión a WebP y cambio de tamaño adaptativo por PRESDA. Composición completa conservada.", source: "Imagen original y crédito", license: "Licencia",
  },
  ar: {
    hero: "الصورة الرئيسية: رسم علمي مولد بالذكاء الاصطناعي لصالح PRESDA. تصور للولب DNA المزدوج، وليس صورة مجهرية أو تحديداً تجريبياً لبنية جزيئية.",
    structure: "بنية DNA من كتاب OpenStax Anatomy and Physiology لعام 2016. يوضح القواعد المتكاملة وهيكل السكر والفوسفات. رسم تعليمي منشور وليس صورة مجهرية، مع حفظ التسميات الإنجليزية الأصلية.",
    structureAlt: "رسم OpenStax للولب DNA المزدوج وأزواج القواعد المتكاملة ومكونات النيوكليوتيد من سكر وفوسفات وقاعدة",
    replication: "شوكة تضاعف مبسطة من OpenStax Anatomy and Physiology لعام 2016. يفصل الهيليكاز الشريطين وتبني بوليميرازات DNA نسخاً مكملة. رسم تعليمي غير مرسوم بمقياس جزيئي، مع حفظ التسميات الإنجليزية الأصلية.",
    replicationAlt: "رسم OpenStax يوضح فتح DNA بالهيليكاز ونسخ البوليميراز للشريطين القائد والمتأخر",
    changes: "تحويل إلى WebP وإعداد أحجام متجاوبة بواسطة PRESDA مع حفظ التكوين الكامل.", source: "الصورة الأصلية ونسب العمل", license: "الترخيص",
  },
};

export function DnaHeroCaption({ locale }: { locale: Locale }) {
  return <p data-dna-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{copy[locale].hero}</p>;
}
export function DnaScientificImage({ index, locale }: { index: number; locale: Locale }) {
  const id = index === 4 ? "structure" : index === 17 ? "replication" : undefined;
  if (!id) return null;
  const c=copy[locale], structure=id === "structure";
  return <figure data-dna-image={id} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
    <div className="mx-auto" style={{ maxWidth: 819 }}><LicensedEditorialImage src={`/articles/dna/${id}.webp`} width={structure ? 817 : 819} height={structure ? 822 : 506} alt={structure ? c.structureAlt : c.replicationAlt} /></div>
    <figcaption className="space-y-2 p-5 text-sm leading-6">
      <p>{c[id]}</p>
      <p dir="auto">OpenStax, Anatomy and Physiology (2016) · <a href={`https://commons.wikimedia.org/wiki/File:${structure ? "0322_DNA_Nucleotides" : "0323_DNA_Replication"}.jpg`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{c.source}</a></p>
      <p className="text-xs text-white/75">{c.changes}</p>
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer" className="underline underline-offset-4">{c.license}: CC BY 4.0</a>
    </figcaption>
  </figure>;
}
