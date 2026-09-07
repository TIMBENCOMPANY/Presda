import type { Article, ArticleCategory } from "@/data/articles";
import { siteUrl } from "@/lib/seo";

const articleSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isFilledString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function getArticleReferencesCount(article: Article) {
  const references = article.references?.filter((reference) => isFilledString(reference.name) && isFilledString(reference.url)) ?? [];
  const legacySourceCount = article.source?.url && !article.source.url.includes("example.com") ? 1 : 0;

  return references.length + legacySourceCount;
}

export function isPublishedArticle(article: Article) {
  return article.status !== "draft" && article.draft !== true;
}

export function getArticleCanonicalUrl(slug: string) {
  return `${siteUrl}/articles/${slug}/`;
}

export function validatePublishedArticles(articles: Article[], categories: ArticleCategory[]) {
  const errors: string[] = [];
  const publishedArticles = articles.filter(isPublishedArticle);
  const slugs = new Map<string, number>();
  const canonicals = new Map<string, string>();
  const ids = new Map<string, string>();

  for (const article of publishedArticles) {
    const label = article.slug || article.title || article.id || "unknown article";

    if (!isFilledString(article.id)) {
      errors.push(`${label}: missing id`);
    } else if (ids.has(article.id)) {
      errors.push(`${label}: duplicate id also used by ${ids.get(article.id)}`);
    } else {
      ids.set(article.id, label);
    }

    if (!isFilledString(article.slug)) {
      errors.push(`${label}: missing slug`);
    } else if (!articleSlugPattern.test(article.slug)) {
      errors.push(`${label}: slug must be lowercase kebab-case without slashes`);
    } else {
      slugs.set(article.slug, (slugs.get(article.slug) ?? 0) + 1);
    }

    if (!isFilledString(article.title)) errors.push(`${label}: missing title/H1`);
    if (!isFilledString(article.seoTitle)) errors.push(`${label}: missing seoTitle`);
    if (!isFilledString(article.metaDescription)) errors.push(`${label}: missing metaDescription`);
    if (!isFilledString(article.excerpt)) errors.push(`${label}: missing excerpt/description`);
    if (!isFilledString(article.author)) errors.push(`${label}: missing author`);
    if (!isFilledString(article.coverImage)) errors.push(`${label}: missing coverImage`);
    if (!isFilledString(article.coverAlt)) errors.push(`${label}: missing coverAlt`);

    if (!categories.includes(article.category)) {
      errors.push(`${label}: invalid category "${article.category}"`);
    }

    if (!isFilledString(article.date) || !isValidDate(article.date)) {
      errors.push(`${label}: invalid publication date`);
    }

    if (article.lastUpdated && !isValidDate(article.lastUpdated)) {
      errors.push(`${label}: invalid lastUpdated date`);
    }

    if (!Array.isArray(article.tags) || article.tags.length < 2 || article.tags.some((tag) => !isFilledString(tag))) {
      errors.push(`${label}: missing primary/secondary keyword tags`);
    }

    if (!Array.isArray(article.content) || article.content.length === 0 || article.content.some((block) => !isFilledString(block))) {
      errors.push(`${label}: missing article body content`);
    }

    if (getArticleReferencesCount(article) === 0) {
      errors.push(`${label}: missing trustworthy source/reference links`);
    }

    if (article.faq && article.faq.some((faq) => !isFilledString(faq.question) || !isFilledString(faq.answer))) {
      errors.push(`${label}: invalid FAQ entry`);
    }

    if (article.slug) {
      const canonical = getArticleCanonicalUrl(article.slug);
      if (canonicals.has(canonical)) {
        errors.push(`${label}: duplicate canonical also used by ${canonicals.get(canonical)}`);
      } else {
        canonicals.set(canonical, label);
      }
    }
  }

  for (const [slug, count] of Array.from(slugs.entries())) {
    if (count > 1) {
      errors.push(`${slug}: duplicate slug appears ${count} times`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`PRESDA article publishing validation failed:\n- ${errors.join("\n- ")}`);
  }

  return {
    articleCount: publishedArticles.length,
    canonicalCount: canonicals.size
  };
}
