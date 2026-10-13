import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/routing";

// Homepage editorial placements only. Category selections remain independent.
export const homeHeroSlugs = [
  "breaking-bad-actor-rj-mitte-dies-at-34",
  "world-most-expensive-paintings-ever-sold",
  "megan-fox-subs-co-owner-tim-stokely",
  "black-death-pandemic-transform-europe",
  "modern-architecture-world-most-breathtaking-buildings",
  "revolut-global-tech-ai-storonsky-2026",
  "feminism-movement-redefined-womens-rights",
  "paranoia-why-do-we-feel-watched",
  "humans-apes-dna-similarity-chimpanzees-evolution",
  "plastic-surgery-revolution-beauty-at-any-cost",
  "sarco-capsule-assisted-dying-switzerland",
  "virgin-trains-eurostar-cross-channel-rival"
] as const;

export const homeSideSlugs = [
  "lonely-genius-great-minds-solitude-creativity",
  "kim-kardashian-lewis-hamilton-romance-public",
  "immortal-jellyfish-turritopsis-dohrnii-life-cycle"
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
