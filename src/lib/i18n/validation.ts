import type { Translation } from "./content";
import { isTranslationLocale, normalizePath } from "./routing";

const text = (value: string | undefined) => Boolean(value?.trim());
const date = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value));

/** Fail the build rather than silently publishing incomplete or duplicate records. */
export function validateTranslations(records: readonly Translation[]) {
  const identities = new Set<string>();
  const paths = new Set<string>();
  for (const record of records.filter((item) => item.status === "published")) {
    const identity = `${record.locale}:${record.englishPath}`;
    const validPath = (path: string) => path === normalizePath(path) && !/[?#\\\s]/.test(path) && !path.split("/").some((part) => part === "." || part === "..");
    if (!isTranslationLocale(record.locale) || !validPath(record.path) || !validPath(record.englishPath) ||
        !record.path.startsWith(`/${record.locale}/`) || /^\/(ar|fr|es|en)\//.test(record.englishPath) ||
        [record.title, record.seoTitle, record.description, record.searchIntent, record.review.reviewer].some((value) => !text(value)) ||
        !record.review.terminologyChecked || !date(record.review.reviewedAt) || !date(record.publishedAt) || !date(record.updatedAt) ||
        record.updatedAt < record.publishedAt || !record.keywords.length || record.keywords.some((keyword) => !text(keyword)) ||
        !record.content.length || record.content.some((block) => {
          if (block.type === "list") return !block.items.length || block.items.some((item) => !text(item));
          if (block.type === "table") return !text(block.caption) || !block.headings.length || block.headings.some((heading) => !text(heading)) || !block.rows.length || block.rows.some((row) => row.length !== block.headings.length || row.some((cell) => !text(cell)));
          return !text(block.text);
        }) ||
        (record.kind === "article" && (!text(record.author) || !record.category || !record.image || !record.englishPath.startsWith("/articles/") || !record.path.startsWith(`/${record.locale}/articles/`))) ||
        (record.kind === "category" && (!record.category || !record.englishPath.startsWith("/category/") || !record.path.startsWith(`/${record.locale}/category/`))) ||
        (record.image && (!record.image.src.startsWith("/") || !text(record.image.alt))) ||
        (record.image && (record.image.width !== undefined || record.image.height !== undefined) && (!Number.isInteger(record.image.width) || !Number.isInteger(record.image.height) || (record.image.width ?? 0) <= 0 || (record.image.height ?? 0) <= 0)) ||
        (record.readingTimeMinutes !== undefined && (!Number.isInteger(record.readingTimeMinutes) || record.readingTimeMinutes < 1)) ||
        (record.headlineHighlights && Object.values(record.headlineHighlights).some(phrase => phrase && !record.title.includes(phrase))) ||
        record.sources?.some((source) => !text(source.label) || !/^https:\/\//.test(source.url)) ||
        record.faq?.some((faq) => !text(faq.question) || !text(faq.answer))) {
      throw new Error(`Incomplete or invalid published translation: ${identity}`);
    }
    if (identities.has(identity) || paths.has(record.path)) throw new Error(`Duplicate translation: ${identity}`);
    identities.add(identity);
    paths.add(record.path);
  }
}
