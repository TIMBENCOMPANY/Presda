import type { Metadata } from "next";
import type { Translation } from "./content";
import { getLanguageAlternates } from "./registry";
import { localizedCategories } from "./messages";

const ogLocales = { ar: "ar_AR", fr: "fr_FR", es: "es_ES" };
export function translationMetadata(record: Translation): Metadata {
  const url = `https://presda.com${record.path}`;
  const images = record.image ? [{ url: `https://presda.com${record.image.src}`, alt: record.image.alt }] : [];
  return {
    title: { absolute: record.seoTitle.endsWith(" | PRESDA") ? record.seoTitle : `${record.seoTitle} | PRESDA` },
    description: record.description,
    keywords: record.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url, languages: getLanguageAlternates(record.path) },
    openGraph: {
      title: record.seoTitle, description: record.description, url, siteName: "PRESDA",
      locale: ogLocales[record.locale], images,
      ...(record.kind === "article" ? { type: "article" as const, publishedTime: record.publishedAt, modifiedTime: record.updatedAt } : { type: "website" as const })
    },
    twitter: { card: images.length ? "summary_large_image" : "summary", title: record.seoTitle, description: record.description, images }
  };
}

/** Only emitted when the same complete questions and answers are visible. */
export function translationFaqJsonLd(record: Translation) {
  if (!record.faq?.length) return null;
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    "@id": `https://presda.com${record.path}#faq`, inLanguage: record.locale,
    mainEntity: record.faq.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
}

export function translationJsonLd(record: Translation) {
  const url = `https://presda.com${record.path}`;
  return {
    "@context": "https://schema.org",
    "@type": record.kind === "article" ? "Article" : record.kind === "category" ? "CollectionPage" : "WebPage",
    "@id": `${url}#${record.kind}`,
    url, inLanguage: record.locale, headline: record.title, description: record.description,
    mainEntityOfPage: url,
    datePublished: record.publishedAt, dateModified: record.updatedAt,
    ...(record.category ? { articleSection: localizedCategories[record.locale][record.category] } : {}),
    keywords: record.keywords.join(", "),
    ...(record.sources?.length ? { citation: record.sources.map(source => source.url) } : {}),
    ...(record.author ? { author: { "@type": record.author === "PRESDA Editorial" ? "Organization" : "Person", name: record.author, ...(record.author === "PRESDA Editorial" ? { url: "https://presda.com/authors/presda-editorial/" } : {}) } } : {}),
    ...(record.image ? { image: `https://presda.com${record.image.src}` } : {}),
    translationOfWork: { "@type": record.kind === "article" ? "Article" : "WebPage", url: `https://presda.com${record.englishPath}`, inLanguage: "en" },
    publisher: { "@id": "https://presda.com/#organization" }
  };
}
