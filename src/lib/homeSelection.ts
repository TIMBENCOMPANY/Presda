import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/routing";

// Homepage editorial placements only. Category selections remain independent.
export const homeHeroSlugs = [
  "vincent-van-gogh-life-art-legacy",
  "nikola-tesla-genius-helped-electrify-world",
  "megan-fox-subs-co-owner-tim-stokely",
  "chocolate-ancient-cacao-global-obsession",
  "bobby-fischer-chess-legend-america-iceland",
  "dostoevsky-life-death-human-darkness",
  "dolly-cloned-sheep-changed-science",
  "invention-photography-first-photo-digital-age"
] as const;

export const homeSideSlugs = [
  "giordano-bruno-philosopher-heresy",
  "winter-dolphin-prosthetic-tail",
  "princess-diana-life-tragedy-legacy"
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
