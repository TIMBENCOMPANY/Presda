import type { Article } from "@/data/articles";
import type { Translation } from "./content";
import type { Locale } from "./routing";

export const articleLabels = {
  en: { breadcrumb: "Breadcrumb", faqShort: "FAQ", sourceNote: "Original PRESDA reporting and editorial review.", by: "By", updated: "Updated", contents: "Table Of Contents", sources: "Sources & References", publisher: "Publisher", share: "Share", related: "Related", continue: "Continue Reading", faq: "Frequently Asked Questions" },
  ar: { breadcrumb: "مسار التصفح", faqShort: "أسئلة شائعة", sourceNote: "تقارير أصلية ومراجعة تحريرية من PRESDA.", by: "بقلم", updated: "آخر تحديث", contents: "فهرس المقال", sources: "المصادر", publisher: "الناشر", share: "مشاركة", related: "مقالات ذات صلة", continue: "تابع القراءة", faq: "أسئلة شائعة" },
  fr: { breadcrumb: "Fil d’Ariane", faqShort: "FAQ", sourceNote: "Reportages originaux et vérification éditoriale de PRESDA.", by: "Par", updated: "Mis à jour", contents: "Sommaire", sources: "Sources", publisher: "Éditeur", share: "Partager", related: "Articles associés", continue: "Poursuivre la lecture", faq: "Questions fréquentes" },
  es: { breadcrumb: "Ruta de navegación", faqShort: "FAQ", sourceNote: "Información original y revisión editorial de PRESDA.", by: "Por", updated: "Actualizado", contents: "Índice del artículo", sources: "Fuentes", publisher: "Editor", share: "Compartir", related: "Artículos relacionados", continue: "Seguir leyendo", faq: "Preguntas frecuentes" }
};

export function localizedReadingTime(source: Article, locale: Locale, override?: number) {
  const minutes = override ?? source.readingTime?.match(/\d+/)?.[0] ?? "4";
  return locale === "ar" ? `${minutes} دقائق قراءة` : locale === "fr" ? `${minutes} min de lecture` : locale === "es" ? `${minutes} min de lectura` : source.readingTime ?? "4 min read";
}

// Presentation only: select existing title phrases for the shared red/gold renderer.
const goldPhrases: Record<string, string[]> = {
  ar: ["سقوط غرناطة", "علم الفلك", "إمبراطورية قوية", "المملكة"],
  fr: ["chute de Grenade", "peuple vivant", "Tenochtitlan", "indépendance"],
  es: ["independencia", "astronomía", "Tenochtitlan", "caída de Granada"]
};

/** Adapt a complete record to the existing template; never mutate editorial data. */
export function translationArticle(record: Translation, source: Article): Article {
  return {
    id: `${source.id}-${record.locale}`, slug: source.slug,
    title: record.title, excerpt: record.excerpt ?? record.description,
    category: record.category ?? source.category, author: record.author ?? source.author,
    date: record.publishedAt, lastUpdated: record.updatedAt,
    coverImage: record.image?.src ?? source.coverImage, coverAlt: record.image?.alt ?? "",
    homepageImagePosition: source.homepageImagePosition,
    headlineHighlights: record.headlineHighlights ?? { red: record.title.split(":")[0].trim(), gold: goldPhrases[record.locale].find(phrase => record.title.includes(phrase)) },
    content: record.content.map(block => {
      if (block.type === "heading") return `## ${block.text}`;
      if (block.type === "subheading") return `### ${block.text}`;
      if (block.type === "quote") return `> ${block.text}`;
      if (block.type === "paragraph") return block.text;
      // Structured lists/tables render through the same template at this index.
      return "";
    }),
    quote: record.quote, references: record.sources?.map(item => ({ name: item.label, url: item.url })),
    faq: record.faq ?? [], tags: record.keywords,
    readingTime: localizedReadingTime(source, record.locale, record.readingTimeMinutes)
  };
}
