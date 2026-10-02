import { HomePageContent } from "@/components/HomePageContent";
import { ArticlesPageContent } from "@/components/ArticlesPageContent";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { listingRoutes } from "@/lib/i18n/listing-routes";
import { listingMetadata, listingJsonLd } from "@/lib/i18n/listing-metadata";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { LocalizedPublication } from "@/components/LocalizedPublication";
import { getTranslation, publishedTranslations, translationRoutes } from "@/lib/i18n/registry";
import { englishPathFor, isTranslationLocale } from "@/lib/i18n/routing";
import { isEnglishPage } from "@/lib/i18n/english";
import { translationMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string; segments?: string[] }> };
// Cache complete editorial pages; no cookie or Accept-Language driven variants.
export const dynamic = "force-static";
export function generateStaticParams() {
  return [...publishedTranslations, ...listingRoutes].map((record) => ({ locale: record.locale, segments: record.path.split("/").filter(Boolean).slice(1) }));
}
async function resolve({ params }: Props) {
  const { locale, segments = [] } = await params;
  if (!isTranslationLocale(locale)) notFound();
  const path = `/${locale}/${segments.length ? `${segments.join("/")}/` : ""}`;
  const record = getTranslation(path);
  if (record) {
    if (!isEnglishPage(record.englishPath)) throw new Error(`Translation has no published English source: ${record.path}`);
    return record;
  }
  const fallback = englishPathFor(path, translationRoutes);
  if (!isEnglishPage(fallback)) notFound();
  // Temporary because a real translation may be published at this URL later.
  redirect(fallback);
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, segments = [] } = await props.params;
  const listing = listingRoutes.find(route => route.path === `/${locale}/${segments.length ? `${segments.join("/")}/` : ""}`);
  if (listing) return listingMetadata(listing);
  const record = isTranslationLocale(locale) ? getTranslation(`/${locale}/${segments.length ? `${segments.join("/")}/` : ""}`) : undefined;
  return record ? translationMetadata(record) : { robots: { index: false, follow: true } };
}
export default async function LocalizedPage(props: Props) {
  const { locale, segments = [] } = await props.params;
  const listing = listingRoutes.find(route => route.path === `/${locale}/${segments.length ? `${segments.join("/")}/` : ""}`);
  if (listing) return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd(listing)).replace(/</g, "\\u003c") }} />
    {listing.englishPath === "/" ? <HomePageContent locale={listing.locale} /> : listing.englishPath === "/articles/" ? <ArticlesPageContent locale={listing.locale} /> : <CategoryPageContent locale={listing.locale} categorySlug={segments[1]} />}
  </>;
  return <LocalizedPublication record={await resolve(props)} />;
}
