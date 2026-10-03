import { unstable_cache } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";
import { listingCard } from "@/lib/i18n/listing-cards";
import { publishedTranslations } from "@/lib/i18n/registry";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { getPublishedArticles } from "@/data/articles";
import { selectHomeArticles } from "@/lib/homeSelection";

// Give only routes rendering the homepage an hourly cache dependency, including
// localized homepages. Article/category route caching remains unchanged.
const homeEditionTime = unstable_cache(async () => new Date().toISOString(), ["home-edition-time-v1"], { revalidate: 3600 });

export async function HomePageContent({ locale = "en" }: { locale?: Locale }) {
  const edition = new Date(await homeEditionTime());
  const { featured, editorialPicks, latest, moreArticles } = selectHomeArticles(getPublishedArticles(), edition, locale, publishedTranslations);
  return <HomeReferenceExperience locale={locale} slides={featured.map(article => listingCard(article, locale))} editorialPicks={editorialPicks.map(article => listingCard(article, locale))} latest={latest.map(article => listingCard(article, locale))} moreArticles={moreArticles.map(article => listingCard(article, locale))} />;
}
