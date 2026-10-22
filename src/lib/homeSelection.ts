import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/routing";

// Homepage editorial placements only. Category selections remain independent.
export const homeHeroSlugs = [
  "sir-nils-olav-penguin-major-general",
  "margot-robbie-hollywood-star-powerful-producer",
  "megan-fox-subs-co-owner-tim-stokely",
  "african-safaris-wildlife-conservation-travel",
  "console-wars-playstation-xbox-nintendo",
  "extinct-animals-lost-creatures-planet",
  "isaac-newton-life-gravity-laws-motion",
  "what-happens-inside-black-hole",
  "culture-of-tattoos-ancient-rituals-modern-art",
  "animal-testing-hidden-cost-scientific-progress",
  "airplanes-wright-brothers-modern-aviation",
  "lost-library-alexandria-knowledge-vanished"
] as const;

export const homeSideSlugs = [
  "giordano-bruno-philosopher-heresy",
  "moon-landing-conspiracy-apollo-evidence",
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
