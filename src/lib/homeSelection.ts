import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/routing";

// Homepage editorial placements only. Category selections remain independent.
export const homeHeroSlugs = [
  "lionel-messi-last-dance-argentina-farewell",
  "casablanca-madrid-2030-world-cup-final",
  "angelina-jolie-ukraine-2026-humanitarian-work",
  "anne-hathaway-baby-bump-verity-premiere-2026",
  "rihanna-barbados-music-fenty-beauty-empire",
  "luis-de-la-fuente-ucam-honorary-doctorate",
  "taylor-swift-spotify-records-2026-patient-zero",
  "jim-carrey-marries-min-ah-private-los-angeles-ceremony",
  "de-extinction-bringing-extinct-animals-back-science",
  "human-family-tree-human-evolution-species",
  "bryan-johnson-blueprint-anti-aging-longevity",
  "greenland-world-powers-arctic-island"
] as const;

export const homeSideSlugs = [
  "self-driving-trucks-future-truck-drivers",
  "illuminati-secret-society-real-history-myth",
  "area-51-aliens-myth-reality-secret-aircraft"
] as const;

export function selectHomeArticles(articles: readonly Article[], now: Date, locale: Locale = "en", translations: readonly Translation[] = []) {
  const isDue = (date: string) => Number.isFinite(Date.parse(date)) && Date.parse(date) <= now.getTime();
  const localized = new Set(translations.filter(record => record.locale === locale && record.kind === "article" && record.status === "published" && isDue(record.publishedAt)).map(record => record.englishPath));
  const eligible = articles.filter(article =>
    (article.status === undefined || article.status === "published") && article.draft !== true
    && !(article as Article & { archived?: boolean }).archived && isDue(article.date)
    && (locale === "en" || localized.has(`/articles/${article.slug}/`))
  );
  const bySlug = new Map(eligible.map(article => [article.slug, article]));
  const pick = (slugs: readonly string[]) => slugs.flatMap(slug => {
    const article = bySlug.get(slug);
    return article ? [article] : [];
  });
  const featured = pick(homeHeroSlugs);
  const editorialPicks = pick(homeSideSlugs);
  const excluded = new Set([...featured, ...editorialPicks].map(article => article.slug));
  const remaining = Array.from(bySlug.values()).filter(article => !excluded.has(article.slug))
    // Slug resolves equal publication dates independently of catalogue order or locale.
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  return { featured, editorialPicks, latest: remaining.slice(0, 15), moreArticles: remaining.slice(15, 21) };
}
