import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/routing";

// Homepage editorial placements only. Category selections remain independent.
export const homeHeroSlugs = [
  "bradley-cooper-gigi-hadid-paris-marriage-speculation",
  "paramount-warner-bros-110-billion-hollywood-deal",
  "tom-cruise-digger-box-office-opening-losses",
  "saudi-arabia-gulf-cup-27-champions",
  "casablanca-madrid-2030-world-cup-final",
  "meta-ray-ban-privacy-europe",
  "angela-merkel-freedom-memoir-million-copies",
  "barack-obama-after-white-house-life-2026",
  "byd-overtakes-tesla-annual-bev-sales",
  "from-ai-to-si-super-intelligence-trump-musk",
  "luis-de-la-fuente-ucam-honorary-doctorate",
  "anne-hathaway-baby-bump-verity-premiere-2026"
] as const;

export const homeSideSlugs = [
  "de-extinction-bringing-extinct-animals-back-science",
  "brain-drain-why-skilled-workers-leave-home",
  "morocco-history-dynasties-kingdom-independence"
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
