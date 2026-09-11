"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Article } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { HeadlineText } from "@/components/HeadlineText";
import { getArticleCardImage } from "@/lib/articleImages";
import { categoryLabels, formatDate } from "@/lib/categories";

type HomeStory = Pick<
  Article,
  "slug" | "title" | "headlineAccent" | "headlineHighlights" | "excerpt" | "category" | "date" | "coverImage" | "coverAlt" | "homepageImagePosition" | "readingTime"
>;

type HomeReferenceExperienceProps = {
  slides: HomeStory[];
  editorialPicks: HomeStory[];
  moreStories: Article[];
};

export function HomeReferenceExperience({ slides, editorialPicks, moreStories }: HomeReferenceExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showMoreStoryImages, setShowMoreStoryImages] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const moreStoriesRef = useRef<HTMLElement | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const active = slides[activeIndex] ?? slides[0];
  const next = slides.length > 1 ? slides[(activeIndex + 1) % slides.length] : null;
  const sidebarStories = editorialPicks.slice(0, 3);
  const isLongHeroTitle = (active?.title.length ?? 0) > 48;

  useEffect(() => {
    if (isPaused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    const element = moreStoriesRef.current;
    if (!element || showMoreStoryImages) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShowMoreStoryImages(true);
          observer.disconnect();
        }
      },
      { rootMargin: "480px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [showMoreStoryImages]);

  const progress = useMemo(() => ((activeIndex + 1) / slides.length) * 100, [activeIndex, slides.length]);

  function goNext() {
    pauseBriefly();
    setActiveIndex((index) => (index + 1) % slides.length);
  }

  function goPrevious() {
    pauseBriefly();
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  }

  function pauseBriefly() {
    setIsPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 9000);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) {
      pauseBriefly();
      return;
    }

    const distance = startX - (event.changedTouches[0]?.clientX ?? startX);
    if (Math.abs(distance) > 42) {
      distance > 0 ? goNext() : goPrevious();
      return;
    }

    pauseBriefly();
  }

  if (!active) return null;

  return (
    <main className="home-page min-h-screen overflow-x-hidden">
      <section
        className="home-hero-section relative isolate overflow-hidden border-b"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="home-hero-bg absolute inset-0 -z-10" />

        <div className="mx-auto w-full max-w-[1510px] px-3 py-4 sm:px-6 sm:py-5 lg:py-6 2xl:px-0">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(300px,0.8fr)] xl:grid-cols-[minmax(0,2.35fr)_minmax(330px,0.82fr)]">
            <article className="home-editorial-hero relative min-h-[590px] overflow-hidden rounded-2xl border sm:min-h-[590px] lg:min-h-[620px]">
              <div className="absolute inset-0">
                <Image
                  key={active.slug}
                  src={active.coverImage}
                  alt={active.coverAlt}
                  fill
                  priority
                  quality={82}
                  sizes="(max-width: 1024px) calc(100vw - 24px), 860px"
                  className="object-cover object-center transition duration-700 lg:object-[center_42%]"
                  style={{ objectPosition: active.homepageImagePosition ?? "50% 42%" }}
                />
                {next && next.slug !== active.slug ? (
                  <Image
                    key={`${next.slug}-queued`}
                    src={next.coverImage}
                    alt=""
                    fill
                    loading="eager"
                    quality={72}
                    sizes="(max-width: 1024px) calc(100vw - 24px), 860px"
                    className="pointer-events-none object-cover object-center opacity-0"
                    style={{ objectPosition: next.homepageImagePosition ?? "50% 42%" }}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_38%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.48)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.82)_0%,transparent_54%)]" />

              <div className="relative z-10 flex min-h-[590px] max-w-3xl flex-col justify-end px-5 pb-6 pt-12 sm:min-h-[590px] sm:px-7 sm:pb-8 lg:min-h-[620px] lg:px-10 lg:pb-10">
                <p className="font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-red)]">
                  {categoryLabels[active.category]}
                </p>
                <h1 className={`mt-4 max-w-[15ch] text-balance font-display font-extrabold uppercase leading-[0.98] tracking-normal text-white [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:mt-5 sm:line-clamp-4 sm:max-w-[15ch] sm:leading-[0.96] lg:max-w-[15.5ch] ${
                  isLongHeroTitle ? "text-[clamp(1.82rem,7.35vw,4.45rem)]" : "text-[clamp(2.12rem,8vw,5.35rem)]"
                }`}>
                  <HeadlineText title={active.title} highlights={active.headlineHighlights} legacyRed={active.headlineAccent} />
                </h1>
                <p className="editorial-deck home-hero-deck max-w-[20rem] text-white/75 sm:max-w-[34rem]">{active.excerpt}</p>
                <Link
                  href={`/articles/${active.slug}/`}
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-3 rounded-md border border-[#ff1a1a]/85 bg-black/35 px-5 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-[#c40019] sm:mt-7 sm:px-7 sm:py-4 sm:text-xs"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                </Link>

                <div className="mt-5 flex w-full max-w-[28rem] items-center gap-3 sm:mt-7 sm:gap-4">
                  <span className="font-display text-sm font-extrabold text-[color:var(--home-red)]">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-[color:var(--home-red)] transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="font-display text-sm font-extrabold text-white/50">{String(slides.length).padStart(2, "0")}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2" aria-label="Featured story slides">
                  {slides.map((slide, index) => (
                  <button
                      key={slide.slug}
                      type="button"
                      onClick={() => {
                        pauseBriefly();
                        setActiveIndex(index);
                      }}
                      className="grid h-11 w-11 place-items-center rounded-full transition"
                      aria-label={`Show featured story ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full border transition ${index === activeIndex ? "border-[color:var(--home-red)] bg-[color:var(--home-red)]" : "border-white/25 bg-white/20 hover:border-[color:var(--home-red)]"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={goPrevious}
                className="home-glass-control absolute left-3 top-5 z-20 grid h-11 w-11 place-items-center rounded-full transition sm:left-5 lg:top-1/2 lg:h-12 lg:w-12 lg:-translate-y-1/2"
                aria-label="Previous featured story"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="home-glass-control absolute right-3 top-5 z-20 grid h-11 w-11 place-items-center rounded-full transition sm:right-5 lg:top-1/2 lg:h-12 lg:w-12 lg:-translate-y-1/2"
                aria-label="Next featured story"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </article>

            <aside className="grid gap-4 lg:grid-rows-3" aria-label="Editorial highlights">
              {sidebarStories.map((article, index) => (
                <SidebarStoryCard key={article.slug} article={article} priority={index === 0} />
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section ref={moreStoriesRef} className="mx-auto w-full max-w-[1510px] px-3 py-8 sm:px-6 sm:py-12 lg:py-14 2xl:px-0">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-l-4 border-[color:var(--home-red)] pl-4 sm:mb-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-none tracking-normal text-[color:var(--home-text)] sm:text-4xl">
              Latest Stories
            </h2>
            <p className="mt-2 text-sm text-[color:var(--home-muted)]">Fresh perspectives. Deeper understanding.</p>
          </div>
          <Link href="/articles/" className="inline-flex min-h-11 items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-red)] transition hover:text-[color:var(--home-gold)]">
            View All Articles
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {moreStories.map((article) => (
            <ArticleCard key={article.slug} article={article} showImage={showMoreStoryImages} />
          ))}
        </div>
      </section>
    </main>
  );
}

function SidebarStoryCard({ article, priority = false }: { article: HomeStory; priority?: boolean }) {
  return (
    <Link href={`/articles/${article.slug}/`} className="home-side-card group relative grid min-h-[142px] w-full min-w-0 grid-cols-[112px_1fr] items-stretch gap-3 overflow-hidden rounded-2xl border p-3 transition hover:-translate-y-0.5 sm:min-h-[156px] sm:grid-cols-[150px_1fr] lg:min-h-0 lg:block lg:p-0">
      <div className="relative min-h-[116px] overflow-hidden rounded-xl bg-black lg:absolute lg:inset-0 lg:min-h-0 lg:rounded-2xl">
        <Image
          src={getArticleCardImage(article)}
          alt={article.coverAlt}
          fill
          priority={priority}
          quality={72}
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 150px, 420px"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.54),rgba(0,0,0,0.12)_48%,transparent_72%)] lg:bg-[linear-gradient(0deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.18)_38%,transparent_70%)]" />
      </div>
      <div className="relative z-10 flex min-w-0 flex-col justify-end py-1 lg:h-full lg:p-4">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-wide text-[color:var(--home-red)]">{categoryLabels[article.category]}</p>
        <h3 className="mt-2 line-clamp-3 font-display text-[1rem] font-bold uppercase leading-[1.08] tracking-normal text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-[1.18rem] lg:line-clamp-2">
          <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
        </h3>
        <p className="mt-auto pt-3 font-display text-[10px] uppercase tracking-wide text-[color:var(--home-soft)]">{formatDate(article.date)} {article.readingTime ? ` / ${article.readingTime}` : ""}</p>
      </div>
    </Link>
  );
}
