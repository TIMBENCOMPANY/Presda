import type { Locale } from "@/lib/i18n/routing";
import { listingCard } from "@/lib/i18n/listing-cards";
import { listingMessages } from "@/lib/i18n/listing-messages";
import { messages, localizedCategories } from "@/lib/i18n/messages";
import { listingPath } from "@/lib/i18n/listing-routes";
import { notFound } from "next/navigation";
import { CategoryFeatured } from "@/components/CategoryFeatured";
import { ArticleCard } from "@/components/ArticleCard";
import { curateCategory } from "@/lib/categoryCuration";
import { CategoryIcon } from "@/components/CategoryIcon";
import { getPublishedArticles } from "@/data/articles";
import { fromCategorySlug, toCategorySlug } from "@/lib/categories";
import { breadcrumbJsonLd } from "@/lib/seo";
export function CategoryPageContent({ categorySlug, locale = "en" }: { categorySlug: string; locale?: Locale }) {
  const t = listingMessages[locale];
  const categoryLabels = localizedCategories[locale];
  const category = fromCategorySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const { slides, sideStories, remaining } = curateCategory(getPublishedArticles(), category);

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] pb-3 pt-1 sm:w-[min(1500px,calc(100%-32px))] sm:py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: messages[locale].home, url: listingPath("/", locale) },
              { name: messages[locale].categories, url: listingPath("/articles/", locale) },
              { name: categoryLabels[category], url: listingPath(`/category/${toCategorySlug(category)}/`, locale) }
            ])
          )
        }}
      />
      <header className="flex items-center justify-center gap-2 py-2 sm:gap-3 sm:py-6">
        <span className="text-[#FF1A1A]"><CategoryIcon category={category} className="h-6 w-6 sm:h-8 sm:w-8" /></span>
        <h1 className="font-display text-[26px] font-extrabold uppercase leading-none sm:text-4xl">{categoryLabels[category]}</h1>
      </header>
      <CategoryFeatured locale={locale} key={category} slides={slides.map(article => listingCard(article, locale))} sideStories={sideStories.map(article => listingCard(article, locale))} />
      {remaining.length > 0 && (
        <section aria-label={locale === "en" ? `More ${categoryLabels[category]} articles` : `${t.more}: ${categoryLabels[category]}`} className="pb-12 pt-8 sm:pt-10">
          <h2 className="mb-5 font-display text-2xl font-extrabold uppercase">{locale === "en" ? `More ${categoryLabels[category]}` : `${t.more}: ${categoryLabels[category]}`}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remaining.map((article) => <ArticleCard locale={locale} key={article.slug} article={listingCard(article, locale)} />)}
          </div>
        </section>
      )}
    </main>
  );
}
