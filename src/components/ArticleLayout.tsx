import { languageDestination } from "@/lib/i18n/routing";
import { translationRoutes } from "@/lib/i18n/registry";
import { articleTables, astrologyComparisonTable, type ArticleTableConfig } from "@/lib/articleTables";
import { LocalizedInlineText } from "@/components/LocalizedInlineText";
import { articleLabels } from "@/lib/i18n/article-presentation";
import { messages, localizedCategories } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/routing";
import type { LocalizedBlock } from "@/lib/i18n/content";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Article } from "@/data/articles";
import { ArticleReadingProgress } from "@/components/ArticleReadingProgress";
import { HeadlineText } from "@/components/HeadlineText";
import type { HeadlineHighlights } from "@/components/HeadlineText";
import { NewsletterBox } from "@/components/NewsletterBox";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { SourceBox } from "@/components/SourceBox";
import { TagList } from "@/components/TagList";
import {
  articleSectionId,
  getArticleContentWithoutInlineFaq,
  getArticleFaqs,
  getArticleLastUpdated,
  getArticleSections
} from "@/lib/articleSeo";
import { getArticleDesktopHeroImagePosition, getArticleHeroImagePosition } from "@/lib/articleImages";
import { toAuthorSlug } from "@/lib/authors";
import { categoryLabels, formatDate, toCategorySlug } from "@/lib/categories";

type ArticleLayoutProps = {
  article: Article;
  relatedArticles: Article[];
  locale?: Locale;
  canonicalPath?: string;
  relatedPaths?: Record<string, string>;
  localizedBlocks?: LocalizedBlock[];
};

const articleHeroHighlightOverrides: Record<string, HeadlineHighlights> = {
  "avicii-life-music-death-tim-bergling": {
    red: "Avicii",
    gold: "EDM Legend"
  }
};

function StandardArticleTable({ table }: { table: ArticleTableConfig }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)]">
      <div className="overflow-x-auto">
        <table className={`w-full ${table.minWidthClass} border-collapse text-start`}>
          <caption className="p-4 text-start text-xs font-semibold uppercase tracking-wide text-[color:var(--home-muted)]">
            {table.caption}
          </caption>
          <thead className="bg-[#ff1a1a]/10 font-display text-[11px] font-extrabold uppercase tracking-wide text-[#FF1A1A]">
            <tr>
              {table.headers.map((heading) => (
                <th key={heading} scope="col" className="border-t border-[color:var(--home-border)] px-4 py-3">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[table.rowKeyIndex]} className="border-t border-[color:var(--home-border)]">
                {row.map((cell, cellIndex) => (
                  <td key={`${row[table.rowKeyIndex]}-${cellIndex}`} className={`px-4 py-4 text-sm leading-6 ${cellIndex === table.boldColumnIndex ? "font-bold text-[color:var(--text)]" : "text-[color:var(--muted)]"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AstrologyComparisonTable({ table }: { table: { headers: string[]; rows: string[][] } }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)]">
      <div className="grid grid-cols-2 border-b border-[color:var(--home-border)] bg-[#ff1a1a]/10 font-display text-xs font-extrabold uppercase tracking-wide text-[#FF1A1A]">
        <div className="p-4">{table.headers[0]}</div>
        <div className="border-s border-[color:var(--home-border)] p-4">{table.headers[1]}</div>
      </div>
      {table.rows.map(([left, right]) => (
        <div key={left} className="grid grid-cols-2 border-b border-[color:var(--home-border)] last:border-b-0">
          <div className="p-4 text-sm leading-6 text-[color:var(--muted)]">{left}</div>
          <div className="border-s border-[color:var(--home-border)] p-4 text-sm leading-6 text-[color:var(--text)]">{right}</div>
        </div>
      ))}
    </div>
  );
}

function ArticleContentBlock({ block, index, locale = "en" }: { block: string; index: number; locale?: Locale }) {
  const table = articleTables[block];

  if (table) {
    return <StandardArticleTable table={table} />;
  }

  if (block === "[[ASTROLOGY_SCIENCE_TABLE]]") return <AstrologyComparisonTable table={astrologyComparisonTable} />;

  if (block.startsWith("### ")) {
    return (
      <h3 className="scroll-mt-28 pt-3 text-balance font-display text-xl font-extrabold uppercase leading-[1.14] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-2xl" id={articleSectionId(index)}>
        {block.replace(/^###\s+/, "")}
      </h3>
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2 className="scroll-mt-28 pt-8 text-balance font-display text-2xl font-extrabold uppercase leading-[1.1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-4xl sm:leading-[1.06]" id={articleSectionId(index)}>
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote className="my-8 rounded-2xl border border-[#FF1A1A]/35 bg-[#FF1A1A]/10 p-6 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--text)] shadow-[var(--home-card-shadow)]">
        {block.replace(/^>\s+/, "").replace(/^"|"$/g, "")}
      </blockquote>
    );
  }

  return (
    <p className="text-base leading-[2.05] text-[color:var(--text)] sm:text-[1.0625rem]">
      {locale === "en" ? <InlineArticleText text={block} /> : <LocalizedInlineText text={block} locale={locale} />}
    </p>
  );
}

function InlineArticleText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (!match) {
          return part;
        }

        const [, label, href] = match;
        const external = href.startsWith("http");

        return (
          <Link
            key={`${label}-${index}`}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-bold text-[#FF1A1A] underline decoration-[#FF1A1A]/35 underline-offset-4 transition hover:decoration-[#FF1A1A]"
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}

function formatHeroDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

export function ArticleLayout({ article, relatedArticles, locale = "en", canonicalPath, relatedPaths, localizedBlocks }: ArticleLayoutProps) {
  const t = messages[locale];
  const labels = articleLabels[locale];
  const dateLabel = (date: string) => locale === "en" ? formatDate(date) : new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(date));
  const canonicalUrl = `https://presda.com${canonicalPath ?? `/articles/${article.slug}/`}`;
  const sections = getArticleSections(article);
  const faqs = locale === "en" ? getArticleFaqs(article) : article.faq ?? [];
  const articleContent = getArticleContentWithoutInlineFaq(article);
  const lastUpdated = getArticleLastUpdated(article);
  const articleHeroHighlights = (locale === "en" ? articleHeroHighlightOverrides[article.slug] : undefined) ?? article.headlineHighlights;
  const heroImagePosition = getArticleHeroImagePosition(article) ?? "50% 50%";
  const desktopHeroImagePosition = getArticleDesktopHeroImagePosition(article) ?? heroImagePosition;
  const heroImageStyle = {
    "--article-hero-image-position": heroImagePosition,
    "--article-hero-image-position-desktop": desktopHeroImagePosition
  } as CSSProperties;

  return (
    <main className="home-page" data-article-locale={locale}>
      <ArticleReadingProgress />
      <article className="mx-auto w-[min(1500px,calc(100%_-_24px))] py-5 sm:w-[min(1500px,calc(100%_-_32px))] sm:py-8 lg:pb-10 lg:pt-5" data-article-progress-root>
        <nav className="mb-4 flex flex-wrap items-center gap-2 px-1 font-display text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--home-muted)] sm:mb-5" aria-label={labels.breadcrumb}>
          <Link href={languageDestination("/", locale, translationRoutes)} className="transition hover:text-[#FF1A1A]">{t.home}</Link>
          <span className="text-[#FF1A1A]/70">/</span>
          <Link href={languageDestination("/articles/", locale, translationRoutes)} className="transition hover:text-[#FF1A1A]">{t.articles}</Link>
          <span className="text-[#FF1A1A]/70">/</span>
          <Link href={languageDestination(`/category/${toCategorySlug(article.category)}/`, locale, translationRoutes)} className="transition hover:text-[#FF1A1A]">
            {locale === "en" ? categoryLabels[article.category] : localizedCategories[locale][article.category]}
          </Link>
        </nav>

        <header className="relative isolate min-h-[590px] overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[#050505] shadow-[var(--home-card-shadow)] sm:min-h-[650px] lg:min-h-[720px]">
          <Image
            src={article.coverImage}
            unoptimized={article.slug === "phoenicians-history-sailors-alphabet-tyrian-purple"}
            alt={article.coverAlt}
            fill
            priority
            quality={82}
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="article-hero-image object-cover"
            style={heroImageStyle}
          />
          <div className="article-hero-shade absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_33%,rgba(0,0,0,0.20)_62%,rgba(0,0,0,0.03)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.30)_100%)]" />

          <div className="relative z-10 flex min-h-[590px] flex-col justify-between p-5 sm:min-h-[650px] sm:p-8 lg:min-h-[720px] lg:p-12 xl:p-14">
            <div className="flex items-start justify-between gap-4 font-display text-[11px] font-extrabold uppercase tracking-wide text-white/84 sm:text-sm lg:text-base">
              <Link href={languageDestination(`/category/${toCategorySlug(article.category)}/`, locale, translationRoutes)} className="flex items-center gap-3 transition hover:text-[#FF1A1A]">
                <span className="h-8 w-1.5 rounded-full bg-[#FF1A1A]" aria-hidden="true" />
                {locale === "en" ? categoryLabels[article.category] : localizedCategories[locale][article.category]}
              </Link>
              <time className="text-end text-white/86" dateTime={article.date}>{locale === "en" ? formatHeroDate(article.date) : new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(article.date))}</time>
            </div>

            <div className="max-w-[800px] pb-5 pt-14 sm:pt-20 lg:pb-8">
              <h1 className="article-hero-title text-white">
                <HeadlineText title={article.title} highlights={articleHeroHighlights} legacyRed={article.headlineAccent} />
              </h1>
              <div className="mt-5 max-w-[29rem] border-s-[5px] border-[#FF1A1A] ps-4 sm:mt-6 sm:ps-5">
                <p className="editorial-deck article-hero-deck">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[10px] font-extrabold uppercase tracking-wide text-white/64 sm:mt-6 sm:text-[11px]">
                <span>
                  {labels.by}{" "}
                  <Link prefetch={false} href={languageDestination(`/authors/${toAuthorSlug(article.author)}/`, locale, translationRoutes)} className="text-white transition hover:text-[#FF1A1A]">
                    {article.author}
                  </Link>
                </span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FF1A1A]" />
                <span>{article.readingTime ?? "4 min read"}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FF1A1A]" />
                <span>{labels.updated} <time dateTime={lastUpdated}>{dateLabel(lastUpdated)}</time></span>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10">
          <div className="flow-root min-w-0 space-y-7 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:p-10">
            <aside className="mb-7 grid gap-4 lg:float-end lg:mb-6 lg:ms-8 lg:w-[23%] lg:min-w-[260px] lg:max-w-[340px] lg:gap-4">
              {sections.length ? (
                <>
                  <details className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-4 shadow-[var(--home-card-shadow)] lg:hidden">
                    <summary className="cursor-pointer list-none font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF1A1A] marker:hidden">
                      {labels.contents}
                    </summary>
                    <ol className="mt-3 max-h-[18rem] space-y-2 overflow-y-auto pr-2">
                      {sections.map((section) => (
                        <li key={section.id} className={section.level === 3 ? "ps-4" : undefined}>
                          <a href={`#${section.id}`} className="block text-[13px] font-semibold leading-[1.25rem] text-[color:var(--home-muted)] transition hover:text-[#FF1A1A]">
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </details>
                  <div className="hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-3.5 shadow-[var(--home-card-shadow)] lg:block">
                    <p className="mb-2.5 font-display text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#FF1A1A]">{labels.contents}</p>
                    <ol className="max-h-none space-y-1.5 pr-1">
                      {sections.map((section) => (
                        <li key={section.id} className={section.level === 3 ? "ps-3" : undefined}>
                          <a href={`#${section.id}`} className="block text-[12px] font-semibold leading-[1.1rem] text-[color:var(--home-muted)] transition hover:text-[#FF1A1A]">
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </>
              ) : null}
              <SourceBox article={article} locale={locale} />
              <div className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-4 shadow-[var(--home-card-shadow)]">
                <p className="mb-3 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF1A1A]">{labels.share}</p>
                <ShareButtons title={article.title} url={canonicalUrl} locale={locale} />
              </div>
            </aside>

            {articleContent.map(({ block, originalIndex }) => {
              const structured = localizedBlocks?.[originalIndex];
              if (structured?.type === "table" && structured.sourceMarker === "[[ASTROLOGY_SCIENCE_TABLE]]") return <AstrologyComparisonTable key={originalIndex} table={{ headers: structured.headings, rows: structured.rows }} />;
              if (structured?.type === "table") return <StandardArticleTable key={originalIndex} table={{ caption: structured.caption, headers: structured.headings, rows: structured.rows, minWidthClass: articleTables[structured.sourceMarker ?? ""]?.minWidthClass ?? "min-w-[680px]", boldColumnIndex: articleTables[structured.sourceMarker ?? ""]?.boldColumnIndex ?? 0, rowKeyIndex: articleTables[structured.sourceMarker ?? ""]?.rowKeyIndex ?? 0 }} />;
              if (structured?.type === "list") return <ul key={originalIndex} className="list-disc space-y-2 ps-6 text-base leading-[2.05] sm:text-[1.0625rem]">{structured.items.map((item, index) => <li key={index}><LocalizedInlineText text={item} locale={locale} /></li>)}</ul>;
              return <ArticleContentBlock key={`${article.slug}-${originalIndex}`} block={block} index={originalIndex} locale={locale} />;
            })}

            {article.quote ? (
              <blockquote className="my-8 rounded-2xl border border-[#FF1A1A]/35 bg-[#FF1A1A]/10 p-6 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] shadow-[var(--home-card-shadow)] sm:text-3xl">
                {article.quote}
              </blockquote>
            ) : null}

            {faqs.length > 0 && <section id={locale === "en" ? undefined : "faq"} className="mt-10 border-t border-[color:var(--home-border)] pt-8" aria-labelledby="article-faq">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">{labels.faqShort}</p>
              <h2 id="article-faq" className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
                {labels.faq}
              </h2>
              <div className="mt-5 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] p-4">
                    <summary className="cursor-pointer list-none font-display text-base font-extrabold uppercase leading-snug text-[color:var(--home-text)] marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--home-muted)] sm:text-base">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>}
            <div className="clear-both grid gap-5 border-t border-[color:var(--home-border)] pt-7 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)]">
                <TagList tags={article.tags} />
              </div>
              <NewsletterBox compact locale={locale} />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <RelatedArticles articles={relatedArticles} locale={locale} paths={relatedPaths} />
        </div>
      </article>
    </main>
  );
}
