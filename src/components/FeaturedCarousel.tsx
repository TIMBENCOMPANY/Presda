"use client";

import { ArabicCardMetadata } from "@/components/ArabicCardMetadata";
import type { Locale } from "@/lib/i18n/routing";
import { listingMessages, listingDate } from "@/lib/i18n/listing-messages";
import { localizedCategories } from "@/lib/i18n/messages";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HomeImage } from "@/components/HomeImage";
import { HeadlineText } from "@/components/HeadlineText";
import { getArticleCardImage, getArticleCardImagePosition, getArticleHeroImagePosition } from "@/lib/articleImages";
import type { CategoryStory } from "@/lib/categoryCuration";

type FeaturedCarouselProps = {
  slides: CategoryStory[];
  sideStories: CategoryStory[];
  locale?: Locale;
  variant?: "category" | "home";
};

export function FeaturedCarousel({ slides, sideStories, variant = "category", locale = "en" }: FeaturedCarouselProps) {
  const t = listingMessages[locale];
  const categoryLabels = localizedCategories[locale];
  const isHome = variant === "home";
  const StoryImage = isHome ? HomeImage : Image;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [visited, setVisited] = useState<number[]>([0]);
  const [readyImages, setReadyImages] = useState<number[]>([]);
  const [pending, setPending] = useState<number | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  useEffect(() => {
    setVisited(indices => indices.includes(active) ? indices : [...indices, active]);
  }, [active]);

  useEffect(() => {
    if (pending !== null && readyImages.includes(pending)) {
      setActive(pending);
      setPending(null);
    }
  }, [pending, readyImages]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused || hovered || focused || reducedMotion || !visible || pending !== null) return;
    if (isHome && !readyImages.includes((active + 1) % slides.length)) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), isHome ? 5500 : 4500);
    return () => window.clearTimeout(timer);
  }, [active, slides.length, paused, hovered, focused, reducedMotion, visible, isHome, pending, readyImages]);

  function move(direction: number) {
    setPaused(!isHome);
    const target = ((pending ?? active) + direction + slides.length) % slides.length;
    if (isHome && !readyImages.includes(target)) {
      setPending(target);
    } else {
      setPending(null);
      setActive(target);
    }
  }

  if (!slides.length) return null;
  // A small category can still show two supporting stories without repeating
  // the active hero: the other carousel story trades places on each rotation.
  const supportingStories = sideStories.length === 1 && slides.length === 2
    ? [slides[(active + 1) % slides.length], ...sideStories]
    : sideStories;

  return (
    <section data-ad-free aria-label={t.featured} className={`category-featured ${isHome ? "home-featured-carousel" : ""} grid gap-4 ${!isHome && sideStories.length ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : ""}`}>
      <div
        role="region" aria-roledescription={t.carousel} aria-label={locale === "en" ? (isHome ? "PRESDA featured stories" : `${categoryLabels[slides[0].category]} featured stories`) : t.featured}
        className="min-w-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-black text-white"
        onMouseEnter={() => { if (!isHome) setHovered(true); }} onMouseLeave={() => { if (!isHome) setHovered(false); }}
        onPointerEnter={event => { if (isHome && event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => { if (isHome) { setHovered(false); setPaused(false); } }}
        onPointerDown={() => { if (isHome) setPaused(true); }}
        onPointerUp={() => { if (isHome) setPaused(false); }}
        onPointerCancel={() => { if (isHome) setPaused(false); }}
        onFocusCapture={event => setFocused(!isHome || (event.target as HTMLElement).matches(":focus-visible"))}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={event => { suppressClick.current = false; touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; setPaused(true); }}
        onTouchEnd={event => {
          if (!touch.current) return;
          const dx = event.changedTouches[0].clientX - touch.current.x;
          const dy = event.changedTouches[0].clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            suppressClick.current = isHome;
            move((dx < 0 ? 1 : -1) * (locale === "ar" ? -1 : 1));
          } else if (isHome) setPaused(false);
        }}
        onTouchCancel={() => { touch.current = null; if (isHome) setPaused(false); }}
        onClickCapture={event => {
          if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; }
        }}
      >
        <div className="category-featured-slides relative grid" aria-live={paused ? "polite" : "off"}>
          {slides.map((article, index) => {
            const Title = isHome && index === active ? "h1" : "h2";
            const preload = isHome && (index === (active + 1) % slides.length || index === (active + slides.length - 1) % slides.length || index === pending);
            return (
            <article key={article.slug} aria-hidden={index !== active} aria-label={`${index + 1} ${t.of} ${slides.length}`} aria-roledescription={t.slide}
              className={`relative col-start-1 row-start-1 transition-opacity duration-700 motion-reduce:transition-none ${index === active ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
              <Link prefetch={index === active ? undefined : false} href={article.href ?? `/articles/${article.slug}/`} tabIndex={index === active ? 0 : -1} className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#FF1A1A]">
                <div className="category-featured-media presda-featured-media relative">
                  {(index === active || visited.includes(index) || preload || (isHome && readyImages.includes(index))) && <StoryImage src={article.coverImage} alt={article.coverAlt} fill priority={index === 0} quality={76}
                    loading={isHome && index !== 0 ? "eager" : undefined}
                    onLoad={isHome ? () => setReadyImages(indices => indices.includes(index) ? indices : [...indices, index]) : undefined}
                    sizes={isHome ? "(max-width: 639px) calc(100vw - 24px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1535px) 65vw, 1000px" : "(max-width: 1023px) calc(100vw - 24px), (max-width: 1536px) 65vw, 1000px"}
                    className="object-cover" style={{ objectPosition: getArticleHeroImagePosition(article) ?? "50% 50%" }} />}
                  <p className={`category-featured-image-meta absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-3 gap-y-1 bg-gradient-to-t from-black/90 via-black/70 to-transparent pr-3 pb-2 pt-6 text-[11px] font-medium text-white ${isHome ? "z-10" : "sm:hidden"} ${slides.length > 1 ? "pl-20" : "pl-3"}`}>
                    {locale === "ar" ? <ArabicCardMetadata date={article.date} readingTime={article.readingTime} /> : <><time dateTime={article.date}>{listingDate(article.date, locale)}</time><span>{article.readingTime}</span></>}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black via-black/35 to-transparent lg:block" />
                <div className={`category-featured-copy relative flex flex-col justify-end p-5 sm:p-7 lg:p-8 ${isHome ? "lg:pb-14" : ""}`}>
                  <p className="mb-3 hidden font-display text-xs font-extrabold uppercase text-[#FF1A1A] sm:block">{categoryLabels[article.category]}</p>
                  <Title className="max-w-[28ch] text-balance font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl lg:text-4xl">
                    <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
                  </Title>
                  {!isHome && <p className="mt-4 hidden flex-wrap gap-x-3 gap-y-1 text-xs text-white/80 sm:flex">{locale === "ar" ? <ArabicCardMetadata date={article.date} readingTime={article.readingTime} /> : <><time dateTime={article.date}>{listingDate(article.date, locale)}</time><span>{article.readingTime}</span></>}</p>}
                </div>
              </Link>
            </article>
          );})}
          {slides.length > 1 && <div className={`pointer-events-none absolute inset-x-0 top-0 z-20 flex aspect-video items-center justify-between px-1 ${isHome ? "lg:bottom-0 lg:aspect-auto" : "sm:hidden"}`}>
            <span dir="ltr" className="category-image-counter absolute bottom-1.5 left-3 rounded-md border border-white/20 bg-black/60 px-1.5 py-0.5 text-[10px] leading-[14px] tabular-nums text-white/90 shadow-sm backdrop-blur-sm">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => move(-1)} aria-label={t.previous} className="category-image-arrow pointer-events-auto grid h-11 w-11 place-items-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">
              <span><ChevronLeft className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></span>
            </button>
            <button type="button" onClick={() => move(1)} aria-label={t.next} className="category-image-arrow pointer-events-auto grid h-11 w-11 place-items-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">
              <span><ChevronRight className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></span>
            </button>
          </div>}
        </div>
        {!isHome && slides.length > 1 && <div className="category-featured-controls hidden items-center justify-between gap-3 border-t border-white/15 px-4 py-2 sm:flex">
          <span dir="ltr" className="text-xs tabular-nums text-white/80">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <div className="flex gap-1">
            <button type="button" onClick={() => move(-1)} aria-label={t.previous} className="hidden h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A] sm:grid"><ChevronLeft className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></button>
            {!reducedMotion && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? t.play : t.pause} className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</button>}
            <button type="button" onClick={() => move(1)} aria-label={t.next} className="hidden h-11 w-11 place-items-center rounded-lg transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A] sm:grid"><ChevronRight className={`h-5 w-5 ${locale === "ar" ? "rotate-180" : ""}`} /></button>
          </div>
        </div>}
      </div>
      {sideStories.length > 0 && <div className="category-supporting grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {supportingStories.map(article => <Link key={article.slug} href={article.href ?? `/articles/${article.slug}/`} className="category-supporting-card group relative overflow-hidden rounded-xl border border-[color:var(--border)] bg-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF1A1A]">
          <div className="category-supporting-media presda-card-media relative">
            <StoryImage src={getArticleCardImage(article)} alt={article.coverAlt} fill quality={76} sizes={isHome ? "(max-width: 639px) 112px, (max-width: 1023px) 144px, (max-width: 1535px) 33vw, 500px" : "(max-width: 639px) 112px, (max-width: 1023px) 50vw, 500px"} className="object-cover" style={{ objectPosition: getArticleCardImagePosition(article) ?? "50% 50%" }} />
          </div>
          <div className={`category-supporting-shade absolute inset-0 hidden bg-gradient-to-t from-black via-black/40 to-transparent ${isHome ? "" : "lg:block"}`} />
          <div className="category-supporting-copy relative flex flex-col justify-end p-5 lg:h-full ">
            <p className="category-supporting-label mb-2 font-display text-[10px] font-extrabold uppercase text-[#FF1A1A]">{categoryLabels[article.category]}</p>
            <h2 className="text-balance font-display text-xl font-extrabold uppercase leading-tight"><HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} /></h2>
            <p className="category-supporting-meta mt-3 text-xs text-white/80">{locale === "ar" ? <ArabicCardMetadata date={article.date} readingTime={article.readingTime} timeClassName="sm:hidden" readingClassName={isHome ? "home-supporting-reading-time" : undefined} separatorClassName={isHome ? undefined : "sm:hidden"} /> : <><time className="mr-2 sm:hidden" dateTime={article.date}>{listingDate(article.date, locale)}</time>{isHome ? <span className="home-supporting-reading-time">{article.readingTime}</span> : article.readingTime}</>}</p>
          </div>
        </Link>)}
      </div>}
    </section>
  );
}
