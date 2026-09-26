import type { ArticleCategory } from "@/data/articles";
import type { TranslationLocale } from "./routing";

export type LocalizedBlock =
  | { type: "paragraph" | "heading" | "subheading" | "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption: string; headings: string[]; rows: string[][]; sourceMarker?: string };

/** Independent editorial records. Never spread an English article into a translation. */
export type Translation = {
  locale: TranslationLocale;
  englishPath: string;
  path: string;
  kind: "article" | "category" | "page";
  status: "draft" | "published";
  review: { reviewer: string; reviewedAt: string; terminologyChecked: boolean };
  title: string;
  excerpt?: string;
  /** Exact phrases already present in the localized title, chosen by the editor. */
  headlineHighlights?: { red?: string; gold?: string };
  readingTimeMinutes?: number;
  quote?: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  searchIntent: string;
  content: LocalizedBlock[];
  category?: ArticleCategory;
  author?: string;
  publishedAt: string;
  updatedAt: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  sources?: { label: string; url: string }[];
  faq?: { question: string; answer: string }[];
};
