import type { Locale } from "@/lib/i18n/routing";
import { listingMessages } from "@/lib/i18n/listing-messages";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { HomeLatestCarousel } from "@/components/HomeLatestCarousel";
import type { ArticleCardRecord } from "@/lib/articleCards";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

type HomeReferenceExperienceProps = {
  locale?: Locale;
  slides: ArticleCardRecord[];
  editorialPicks: ArticleCardRecord[];
  latest: ArticleCardRecord[];
  moreArticles: ArticleCardRecord[];
};

export function HomeReferenceExperience({ slides, editorialPicks, latest, moreArticles, locale = "en" }: HomeReferenceExperienceProps) {
  const t = listingMessages[locale];
  return (
    <main className="home-page overflow-x-hidden">
      <section className="home-hero-section relative isolate overflow-hidden border-b">
        <div className="home-hero-bg absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-[1510px] px-3 py-2 sm:px-6 sm:py-5 lg:py-3 2xl:px-0">
          <FeaturedCarousel locale={locale} variant="home" slides={slides} sideStories={editorialPicks} />
        </div>
      </section>
      <div className="mx-auto w-full max-w-[1510px] space-y-6 px-3 pb-4 pt-5 sm:px-6 2xl:px-0">
        <HomeLatestCarousel locale={locale} articles={latest} />
        <section aria-labelledby="home-more-heading" className="home-more-articles">
          <div className="mb-3 flex items-center justify-between gap-3 border-s-4 border-[#FF1A1A] ps-3">
            <h2 id="home-more-heading" className="font-display text-2xl font-extrabold uppercase">{t.more}</h2>
            <Link href={locale === "en" ? "/articles/" : `/${locale}/articles/`} className="inline-flex min-h-11 items-center text-xs font-bold uppercase text-[#FF1A1A] hover:text-[color:var(--home-gold)]">{t.viewAll}</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreArticles.map(article => <ArticleCard locale={locale} fallbackToSource key={article.slug} article={article} sizes="(max-width: 639px) calc(100vw - 24px), (max-width: 1023px) calc((100vw - 60px) / 2), (max-width: 1535px) calc((100vw - 72px) / 3), 495px" />)}
          </div>
        </section>
      </div>
    </main>
  );
}
