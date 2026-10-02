import type { Locale } from "@/lib/i18n/routing";
import { listingSearchCard } from "@/lib/i18n/listing-cards";
import { listingMessages } from "@/lib/i18n/listing-messages";
import { messages } from "@/lib/i18n/messages";
import { listingPath } from "@/lib/i18n/listing-routes";
import { categories } from "@/data/articles";
import { ArticleBrowser } from "@/components/ArticleBrowser";
import { getPublishedArticles } from "@/data/articles";
import { breadcrumbJsonLd } from "@/lib/seo";

export function ArticlesPageContent({ locale = "en" }: { locale?: Locale }) {
  const t = listingMessages[locale];
  const articles = getPublishedArticles();

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-4 sm:w-[min(1500px,calc(100%-32px))] sm:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: messages[locale].home, url: listingPath("/", locale) },
              { name: messages[locale].articles, url: listingPath("/articles/", locale) }
            ])
          )
        }}
      />
      <header className="mb-4 border-t border-[#FF1A1A]/45 pt-3">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">{t.library}</p>
        <h1 className="mt-2 text-balance font-display text-[clamp(1.8rem,8vw,2.25rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-5xl sm:leading-none">{t.latest}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-5 text-[color:var(--muted)]">
          {t.intro}
        </p>
      </header>
      <ArticleBrowser locale={locale} articles={articles.map(article => listingSearchCard(article, locale))} categories={categories} />
    </main>
  );
}
