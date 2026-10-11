import { WatchPriceComparison } from "@/components/WatchPriceComparison";
import { SonghaiGraphics } from "@/components/SonghaiGraphics";
import { JellyfishGraphics } from "@/components/JellyfishGraphics";
import { PlasticSurgeryGraphics } from "@/components/PlasticSurgeryGraphics";
import { ArtificialBloodGraphics } from "@/components/ArtificialBloodGraphics";
import { PassportGraphics } from "@/components/PassportGraphics";
import { RobotaxiGraphics } from "@/components/RobotaxiGraphics";
import { FranceProtestsGraphics } from "@/components/FranceProtestsGraphics";
import { RevolutGraphics } from "@/components/RevolutGraphics";
import { PanamaEarthquakeGraphic } from "@/components/PanamaEarthquakeGraphic";
import { AiDangerGraphics } from "@/components/AiDangerGraphics";
import { HumanApeDnaGraphics } from "@/components/HumanApeDnaGraphics";
import { TaiwanCaptivesGraphics } from "@/components/TaiwanCaptivesGraphics";
import { WorkAbroadGraphics } from "@/components/WorkAbroadGraphics";
import { JonathanGraphics } from "@/components/JonathanGraphics";
import { FrbRecordGraphics } from "@/components/FrbRecordGraphics";
import { RobotRaceGraphics } from "@/components/RobotRaceGraphics";
import { MinoansGraphics } from "@/components/MinoansGraphics";
import { WorldCup2030Graphics } from "@/components/WorldCup2030Graphics";
import { ReaderPoll } from "@/components/ReaderPoll";
import { MessiFarewellGraphics } from "@/components/MessiFarewellGraphics";
import { MichaelJacksonGraphics } from "@/components/MichaelJacksonGraphics";
import { languageDestination } from "@/lib/i18n/routing";
import { translationRoutes } from "@/lib/i18n/registry";
import { articleTables, astrologyComparisonTable, type ArticleTableConfig } from "@/lib/articleTables";
import { LocalizedInlineText } from "@/components/LocalizedInlineText";
import { articleLabels } from "@/lib/i18n/article-presentation";
import { BryanJohnsonGraphics } from "@/components/BryanJohnsonGraphics";
import { JapanFusionGraphics } from "@/components/JapanFusionGraphics";
import { EstoniaGraphics } from "@/components/EstoniaGraphics";
import { SeoulGraphics } from "@/components/SeoulGraphics";
import { ChinaRoboticsGraphics } from "@/components/ChinaRoboticsGraphics";
import { DeLaFuenteTimeline } from "@/components/DeLaFuenteTimeline";
import { OctopusMindGraphic } from "@/components/OctopusMindGraphic";
import { CasablancaFossilsGraphics } from "@/components/CasablancaFossilsGraphics";
import { CancerProgressGraphics } from "@/components/CancerProgressGraphics";
import { Lunar5gGraphics } from "@/components/Lunar5gGraphics";
import { RetinalRepairGraphic } from "@/components/RetinalRepairGraphic";
import { SharkHearingGraphics } from "@/components/SharkHearingGraphics";
import { DeepSeaVirusesGraphic } from "@/components/DeepSeaVirusesGraphic";
import { IndusValleyGraphics } from "@/components/IndusValleyGraphics";
import { HumanEvolutionGraphics } from "@/components/HumanEvolutionGraphics";
import { messages, localizedCategories } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/routing";
import type { LocalizedBlock } from "@/lib/i18n/content";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Article } from "@/data/articles";
import { ArticleReadingProgress } from "@/components/ArticleReadingProgress";
import { HeadlineText } from "@/components/HeadlineText";
import { getPremiumHeroHighlights, PremiumHeroHeadline } from "@/components/PremiumHeroHeadline";
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
import { getArticleImageDimensions, getArticleDesktopHeroImagePosition, getArticleHeroImagePosition } from "@/lib/articleImages";
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
  const premiumHeroHighlights = getPremiumHeroHighlights(article.slug, locale);
  const dateLabel = (date: string) => locale === "en" ? formatDate(date) : new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(date));
  const canonicalUrl = `https://presda.com${canonicalPath ?? `/articles/${article.slug}/`}`;
  const sections = getArticleSections(article);
  const faqs = locale === "en" ? getArticleFaqs(article) : article.faq ?? [];
  const articleContent = getArticleContentWithoutInlineFaq(article);
  const lastUpdated = getArticleLastUpdated(article);
  const heroDimensions = getArticleImageDimensions(article.coverImage);
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

        <header className="article-hero relative isolate overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[#050505] shadow-[var(--home-card-shadow)]">
          <div className="article-hero-media relative">
            <Image
              src={article.coverImage}
              unoptimized={article.slug === "phoenicians-history-sailors-alphabet-tyrian-purple"}
              alt={article.coverAlt}
              width={heroDimensions.width}
              height={heroDimensions.height}
              priority
              quality={82}
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="article-hero-image h-auto w-full object-contain"
              style={heroImageStyle}
            />
          </div>
          <div className="article-hero-shade hidden absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_33%,rgba(0,0,0,0.20)_62%,rgba(0,0,0,0.03)_100%)]" />
          <div className="hidden absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.30)_100%)]" />

          <time className="article-hero-publication-date absolute right-5 top-5 z-20 rounded bg-black/40 px-2 py-1 text-right font-display text-[11px] font-extrabold uppercase tracking-wide text-white/86 sm:right-7 sm:top-7 sm:text-sm lg:right-8 lg:top-8 lg:text-base" dateTime={article.date}>{locale === "en" ? formatHeroDate(article.date) : new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(article.date))}</time>

          <div className="article-hero-content relative z-10 flex flex-col gap-5 p-5 sm:p-7 lg:p-12 xl:p-14">
            <div className="flex flex-wrap items-start justify-between gap-3 font-display text-[11px] lg:flex-nowrap lg:gap-4 font-extrabold uppercase tracking-wide text-white/84 sm:text-sm lg:text-base">
              <Link href={languageDestination(`/category/${toCategorySlug(article.category)}/`, locale, translationRoutes)} className="flex items-center gap-3 transition hover:text-[#FF1A1A]">
                <span className="h-8 w-1.5 rounded-full bg-[#FF1A1A]" aria-hidden="true" />
                {locale === "en" ? categoryLabels[article.category] : localizedCategories[locale][article.category]}
              </Link>
            </div>

            <div className="article-hero-heading min-w-0 max-w-[800px]">
              <h1 className={`article-hero-title text-white${article.slug === "meta-ray-ban-privacy-europe" ? " article-hero-title-meta-privacy" : ""}${locale === "en" && article.slug === "iran-hormuz-closed-conditions-energy-shipping" ? " article-hero-title-hormuz" : ""}`}>
                {premiumHeroHighlights ? <PremiumHeroHeadline title={article.title} highlights={premiumHeroHighlights} /> : <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} whiteText={locale === "en" && article.slug === "casablanca-madrid-2030-world-cup-final" ? "vs" : undefined} />}
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

        {article.slug === "immortal-jellyfish-turritopsis-dohrnii-life-cycle" && <p className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{locale === "fr" ? "Illustration éditoriale générée par IA. Ce n’est ni une photographie scientifique ni une représentation exacte de Turritopsis dohrnii." : locale === "es" ? "Ilustración editorial generada por IA. No es una fotografía científica ni una representación exacta de Turritopsis dohrnii." : locale === "ar" ? "رسم تحريري مولد بالذكاء الاصطناعي، وليس صورة علمية أو تمثيلا دقيقا لقنديل Turritopsis dohrnii." : "AI-generated editorial illustration. Not a scientific photograph or an exact depiction of Turritopsis dohrnii."}</p>}

        <div className="mt-10">
          {article.slug === "casablanca-madrid-2030-world-cup-final" && <div className="mb-7"><ReaderPoll locale={locale} /></div>}
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
              if (article.slug === "immortal-jellyfish-turritopsis-dohrnii-life-cycle" && [10, 32, 35].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><JellyfishGraphics locale={locale} kind={originalIndex === 10 ? "cycle" : originalIndex === 32 ? "comparison" : "timeline"} /></div>;
              }
              if (article.slug === "songhai-empire-gao-askia-tondibi-1591" && [1, 13, 17, 21, 41].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><SonghaiGraphics locale={locale} kind={originalIndex === 1 ? "timeline" : originalIndex === 13 ? "rulers" : originalIndex === 17 ? "cities" : originalIndex === 21 ? "economy" : "invasion"} /></div>;
              }
              if (article.slug === "plastic-surgery-revolution-beauty-at-any-cost" && [13, 17, 23, 30, 44].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><PlasticSurgeryGraphics locale={locale} kind={originalIndex === 13 ? "demographics" : originalIndex === 17 ? "totals" : originalIndex === 23 ? "procedures" : originalIndex === 30 ? "risks" : "countries"} /></div>;
              }
              if (article.slug === "world-most-expensive-watches-2026" && originalIndex === 4) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><WatchPriceComparison locale={locale} /></div>;
              }
              if (article.slug === "artificial-blood-lab-grown-red-cells-restore-japan" && [18, 23].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><ArtificialBloodGraphics locale={locale} kind={originalIndex === 18 ? "trials" : "comparison"} /></div>;
              }
              if (article.slug === "world-most-powerful-passports-2026-henley-index" && [4, 13, 15, 17].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><PassportGraphics locale={locale} kind={originalIndex === 4 ? "global" : originalIndex === 13 ? "africa" : originalIndex === 15 ? "arab" : "gap"} /></div>;
              }
              if (article.slug === "robotaxi-revolution-tesla-waymo-zoox-baidu-2026" && [4, 18, 29, 32].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><RobotaxiGraphics locale={locale} kind={originalIndex === 4 ? "comparison" : originalIndex === 18 ? "levels" : originalIndex === 29 ? "cities" : "timeline"} /></div>;
              }
              if (article.slug === "france-student-protests-macron-october-2026" && [10, 13].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><FranceProtestsGraphics locale={locale} kind={originalIndex === 10 ? "timeline" : "turnout"} /></div>;
              }
              if (article.slug === "revolut-global-tech-ai-storonsky-2026" && [12, 15].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><RevolutGraphics locale={locale} kind={originalIndex === 12 ? "finance" : "valuation"} /></div>;
              }
              if (article.slug === "panama-earthquake-7-7-october-9-2026" && originalIndex === 5) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><PanamaEarthquakeGraphic locale={locale} /></div>;
              }
              if (article.slug === "ai-danger-development-pause-coxon-hinton-sanders" && [11, 15, 24].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><AiDangerGraphics locale={locale} kind={originalIndex === 11 ? "timeline" : originalIndex === 15 ? "risks" : "companies"} /></div>;
              }
              if (article.slug === "humans-apes-dna-similarity-chimpanzees-evolution" && [6, 9, 15, 23].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><HumanApeDnaGraphics locale={locale} kind={originalIndex === 6 ? "similarity" : originalIndex === 9 ? "tree" : originalIndex === 15 ? "fusion" : "timeline"} /></div>;
              }
              if (article.slug === "dutch-women-taiwan-1662-zeelandia-captives" && [4, 5, 12].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><TaiwanCaptivesGraphics locale={locale} kind={originalIndex === 4 ? "map" : originalIndex === 5 ? "timeline" : "siege"} /></div>;
              }
              if (article.slug === "work-abroad-2026-official-immigration-jobs" && [1, 4, 49, 52].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><WorkAbroadGraphics locale={locale} kind={originalIndex === 1 ? "directory" : originalIndex === 4 ? "routes" : originalIndex === 49 ? "fees" : "steps"} /></div>;
              }
              if (article.slug === "jonathan-oldest-tortoise-194-years-aging" && [8, 27, 30].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><JonathanGraphics locale={locale} kind={originalIndex === 8 ? "timeline" : originalIndex === 27 ? "science" : "lifespans"} /></div>;
              }
              if (article.slug === "frb-20240304b-ten-billion-year-signal-cosmic-record" && [7, 11, 23, 26].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><FrbRecordGraphics locale={locale} kind={originalIndex === 7 ? "process" : originalIndex === 11 ? "timeline" : originalIndex === 23 ? "journey" : "record"} /></div>;
              }
              if (article.slug === "tesla-optimus-vs-unitree-humanoid-robots-2026" && [8, 13, 14, 29].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><RobotRaceGraphics locale={locale} kind={originalIndex === 8 ? "prices" : originalIndex === 13 ? "production" : originalIndex === 14 ? "shipments" : "forecast"} /></div>;
              }
              if (article.slug === "minoans-bronze-age-crete-palaces-rulers-linear-a" && [4, 7, 24, 30].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><MinoansGraphics locale={locale} kind={originalIndex === 4 ? "timeline" : originalIndex === 7 ? "palaces" : originalIndex === 24 ? "trade" : "writing"} /></div>;
              }
              if (article.slug === "deep-sea-viruses-clarion-clipperton-discovery" && originalIndex === 11) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><DeepSeaVirusesGraphic locale={locale} /></div>;
              }
              if (article.slug === "blacktip-shark-hearing-underwater-sound-study" && (originalIndex === 7 || originalIndex === 17)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><SharkHearingGraphics locale={locale} kind={originalIndex === 7 ? "distance" : "senses"} /></div>;
              }
              if (article.slug === "retinal-repair-prpf31-gene-therapy-vision-restoration" && originalIndex === 10) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><RetinalRepairGraphic locale={locale} /></div>;
              }
              if (article.slug === "nasa-moon-5g-wifi6-lunar-communications" && (originalIndex === 4 || originalIndex === 13)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><Lunar5gGraphics locale={locale} kind={originalIndex === 4 ? "timeline" : "network"} /></div>;
              }
              if (article.slug === "50-years-cancer-survival-progress-hardest-cancers" && (originalIndex === 8 || originalIndex === 17 || originalIndex === 30)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><CancerProgressGraphics locale={locale} kind={originalIndex === 8 ? "survival" : originalIndex === 17 ? "stage" : "milestones"} /></div>;
              }
              if (article.slug === "casablanca-thomas-quarry-773000-year-old-hominin-fossils" && (originalIndex === 25 || originalIndex === 33)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><CasablancaFossilsGraphics locale={locale} kind={originalIndex === 25 ? "chronology" : "evidence"} /></div>;
              }
              if (article.slug === "indus-valley-civilization-cities-script-decline" && (originalIndex === 4 || originalIndex === 12)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><IndusValleyGraphics locale={locale} kind={originalIndex === 4 ? "timeline" : "cities"} /></div>;
              }
              if (article.slug === "octopus-mind-intelligence-brain-eight-arms" && originalIndex === 4) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><OctopusMindGraphic locale={locale} /></div>;
              }
              if (article.slug === "casablanca-madrid-2030-world-cup-final" && (originalIndex === 29 || originalIndex === 35)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><WorldCup2030Graphics locale={locale} kind={originalIndex === 29 ? "compare" : "timeline"} /></div>;
              }
              if (article.slug === "lionel-messi-last-dance-argentina-farewell" && (originalIndex === 24 || originalIndex === 36)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><MessiFarewellGraphics locale={locale} kind={originalIndex === 24 ? "timeline" : "goals"} /></div>;
              }
              if (article.slug === "michael-jackson-life-music-legacy-king-of-pop" && (originalIndex === 34 || originalIndex === 54)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><MichaelJacksonGraphics locale={locale} kind={originalIndex === 34 ? "timeline" : "records"} /></div>;
              }
              if (article.slug === "luis-de-la-fuente-ucam-honorary-doctorate" && originalIndex === 17) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><DeLaFuenteTimeline locale={locale} /></div>;
              }
              if (article.slug === "human-family-tree-human-evolution-species" && (originalIndex === 3 || originalIndex === 5)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><HumanEvolutionGraphics locale={locale} kind={originalIndex === 3 ? "timeline" : "tree"} /></div>;
              }
              if (article.slug === "seoul-physical-ai-robots-living-lab" && [11,20].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><SeoulGraphics locale={locale} kind={originalIndex === 11 ? "belt" : "timeline"} /></div>;
              }
              if (article.slug === "china-robot-revolution-industrial-automation" && [5,9,31].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><ChinaRoboticsGraphics locale={locale} kind={originalIndex === 5 ? "share" : originalIndex === 9 ? "density" : "status"} /></div>;
              }
              if (article.slug === "estonia-digital-government-e-id-x-road" && [7,13,31].includes(originalIndex)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><EstoniaGraphics locale={locale} kind={originalIndex === 7 ? "timeline" : originalIndex === 13 ? "flow" : "voting"} /></div>;
              }
              if (article.slug === "japan-fusion-helix-haruka-helical-fusion" && (originalIndex === 9 || originalIndex === 17)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><JapanFusionGraphics locale={locale} kind={originalIndex === 9 ? "compare" : "timeline"} /></div>;
              }
              if (article.slug === "bryan-johnson-blueprint-anti-aging-longevity" && (originalIndex === 13 || originalIndex === 40)) {
                return <div key={originalIndex}><ArticleContentBlock block={block} index={originalIndex} locale={locale} /><BryanJohnsonGraphics locale={locale} kind={originalIndex === 13 ? "routine" : "evidence"} /></div>;
              }
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
