import type { Article, ArticleCategory } from "@/data/articles";
import { featuredHeroSlugs, evergreenStorySlugs } from "@/lib/homeCuration";

export type CategoryStory = Pick<Article, "slug" | "title" | "category" | "date" | "readingTime" | "coverImage" | "coverAlt" | "homepageImagePosition" | "headlineHighlights" | "headlineAccent">;

export function toCategoryStory(article: Article): CategoryStory {
  const { slug, title, category, date, readingTime, coverImage, coverAlt, homepageImagePosition, headlineHighlights, headlineAccent } = article;
  return { slug, title, category, date, readingTime, coverImage, coverAlt, homepageImagePosition, headlineHighlights, headlineAccent };
}

// Reuse reviewed editorial picks, with additions for newer travel guides.
// Stable ordering keeps hydration and repeat renders predictable.
const curated = [
  "old-but-gold-world-most-beautiful-old-cities",
  "world-most-underrated-countries-to-visit",
  ...featuredHeroSlugs,
  ...evergreenStorySlugs
];

export function curateCategory(articles: readonly Article[], category: ArticleCategory) {
  const available = Array.from(new Map(articles.filter(article => article.category === category).map(article => [article.slug, article])).values());
  const rank = (article: Article) => {
    const index = curated.indexOf(article.slug);
    return index < 0 ? curated.length : index;
  };
  const ranked = [...available].sort((a, b) => rank(a) - rank(b) || b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  const sideCount = ranked.length >= 4 ? 2 : ranked.length >= 3 ? 1 : 0;
  const slideCount = Math.min(5, ranked.length - sideCount);
  const slides = ranked.slice(0, slideCount);
  const sideStories = ranked.slice(slideCount, slideCount + sideCount);
  const selected = new Set([...slides, ...sideStories].map(article => article.slug));
  const remaining = available.filter(article => !selected.has(article.slug)).sort((a, b) => b.date.localeCompare(a.date));
  return { slides, sideStories, remaining };
}
