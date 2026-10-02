import type { Locale } from "@/lib/i18n/routing";
import { listingCard } from "@/lib/i18n/listing-cards";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { getPublishedArticles } from "@/data/articles";
import { curateLatestStories } from "@/lib/homeCuration";

// Homepage-only selection; category archive curation remains independent.
const featuredHeroSlugs = [
  "illuminati-secret-society-real-history-myth",
  "places-that-dont-look-real-surreal-landscapes-travel",
  "self-driving-trucks-future-truck-drivers",
  "muhammad-ali-fighter-bigger-than-boxing",
  "history-of-money-gold-paper-digital",
  "bajau-people-sea-nomads-diving",
  "ancient-egypt-pharaohs-nile-3000-years-history",
  "keanu-reeves-kindness-powerful",
  "anime-how-japanese-animation-conquered-the-world",
  "natural-disasters-earthquakes-volcanoes-tsunamis",
  "top-10-hidden-gems-to-visit-in-2026",
  "carl-sagan-journey-through-our-universe"
] as const;

const editorialPickSlugs = [
  "avicii-life-music-death-tim-bergling",
  "galileo-and-the-church",
  "anti-aging-can-we-slow-down-human-aging"
];

export function HomePageContent({ locale = "en" }: { locale?: Locale }) {
  const articles = getPublishedArticles();
  const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));
  const featured = featuredHeroSlugs
    .map((slug) => articlesBySlug.get(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const editorialPicks = editorialPickSlugs
    .map((slug) => articlesBySlug.get(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  const excluded = new Set([...featured, ...editorialPicks].map(article => article.slug));
  const edition = new Date();
  const latest = curateLatestStories(articles, excluded, edition, 15);
  latest.forEach(article => excluded.add(article.slug));
  const moreArticles = curateLatestStories(articles, excluded, edition, 6);

  return <HomeReferenceExperience locale={locale} slides={featured.map(article => listingCard(article, locale))} editorialPicks={editorialPicks.map(article => listingCard(article, locale))} latest={latest.map(article => listingCard(article, locale))} moreArticles={moreArticles.map(article => listingCard(article, locale))} />;
}
