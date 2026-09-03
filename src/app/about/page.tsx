import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Eye, Facebook, Globe2, Instagram, Mail, Scale, SearchCheck, Sparkles } from "lucide-react";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About PRESDA - Stories That Shape The World",
  description: "Learn about PRESDA, a modern independent digital news and media platform covering world affairs, business, AI, sport, science, travel, lifestyle, and culture.",
  path: "/about/",
  image: "/images/about/presda-newsroom-night.png"
});

const coverage = ["World", "Business", "AI", "Sport", "Science", "Travel", "Lifestyle", "Paparazzi"];

const principles = [
  {
    title: "Accuracy",
    body: "We work to verify facts, names, dates, claims, and context before publication.",
    icon: SearchCheck
  },
  {
    title: "Independence",
    body: "Editorial judgment stays separate from partnerships, advertising, and commercial interests.",
    icon: Scale
  },
  {
    title: "Transparency",
    body: "We aim to make sourcing, updates, uncertainty, and corrections clear to readers.",
    icon: Eye
  },
  {
    title: "Clarity",
    body: "We explain fast-moving stories in direct language with useful context and clean structure.",
    icon: BadgeCheck
  }
];

const editorialLinks = [
  { href: "/editorial-policy/", label: "Editorial Policy" },
  { href: "/corrections-policy/", label: "Corrections" },
  { href: "/authors/", label: "Authors" },
  { href: "/contact/", label: "Contact" }
];

const socialLinks = [
  { href: "https://www.instagram.com/presdaofficial", label: "Instagram", value: "@presdaofficial", icon: Instagram },
  { href: "https://x.com/PresdaOfficial", label: "X", value: "@PresdaOfficial", mark: "X" },
  { href: "https://www.facebook.com/profile.php?id=61589635535583", label: "Facebook", value: "PRESDA", icon: Facebook },
  { href: "mailto:contact@presda.com", label: "Contact", value: "contact@presda.com", icon: Mail }
];

export default function AboutPage() {
  return (
    <main className="home-page overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About PRESDA", url: "/about/" }
            ])
          )
        }}
      />

      <section className="relative mx-auto w-[min(1500px,calc(100%-24px))] py-6 sm:w-[min(1500px,calc(100%-32px))] sm:py-10 lg:py-16" aria-labelledby="about-title">
        <div className="pointer-events-none absolute -right-28 top-12 h-72 w-72 rounded-full bg-[#FF1A1A]/20 blur-[96px]" />
        <div className="pointer-events-none absolute -left-28 top-72 h-72 w-72 rounded-full bg-[#E8C97A]/10 blur-[110px]" />

        <div className="relative grid overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)] lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:rounded-3xl">
          <div className="relative z-10 flex flex-col justify-center p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12">
            <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF1A1A] sm:text-xs sm:tracking-[0.22em]">About PRESDA</p>
            <h1 id="about-title" className="mt-4 max-w-4xl text-balance font-display text-[clamp(1.9rem,9.5vw,2.65rem)] font-extrabold uppercase leading-[1] text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:mt-5 sm:text-[clamp(2.25rem,7.5vw,3.35rem)] md:text-[clamp(2.8rem,6.6vw,4.4rem)] lg:text-[clamp(2.8rem,7vw,6.7rem)] lg:leading-[0.9]">
              Stories That Shape <span className="text-[#E8C97A]">The World</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[color:var(--home-muted)] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
              PRESDA is a modern independent digital news and media platform built for global readers, sharp context, and a premium visual reading experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Link href="/articles/" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF1A1A] px-4 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_rgba(196,0,25,0.24)] transition hover:brightness-110 sm:w-auto sm:px-5 sm:text-xs">
                Read PRESDA
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link href="/editorial-policy/" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[color:var(--home-border)] px-4 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--home-text)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A] sm:w-auto sm:px-5 sm:text-xs">
                Editorial Standards
              </Link>
            </div>
          </div>

          <div className="relative mx-3 mb-3 min-h-[315px] overflow-hidden rounded-2xl border border-[color:var(--home-border)] sm:mx-5 sm:mb-5 sm:min-h-[380px] md:min-h-[460px] lg:m-0 lg:min-h-full lg:rounded-none lg:border-0">
            <Image
              src="/images/about/presda-newsroom-night.png"
              alt="PRESDA newsroom concept artwork in a nighttime media setting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="about-newsroom-night object-cover object-center"
            />
            <Image
              src="/images/about/presda-newsroom-day.png"
              alt="PRESDA newsroom concept artwork in a daytime media setting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="about-newsroom-day object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--home-bg)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[color:var(--home-bg)] lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-3 left-3 max-w-[calc(100%-24px)] rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-3 py-2 text-[11px] font-semibold leading-5 text-[color:var(--home-muted)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-xs">
              Visual newsroom concept for PRESDA editorial identity.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1320px,calc(100%-24px))] gap-4 pb-5 sm:w-[min(1320px,calc(100%-32px))] sm:gap-5 sm:pb-8 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="who-we-are">
        <article className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:rounded-3xl">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Who We Are</p>
          <h2 id="who-we-are" className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
            Independent Digital Media
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--home-muted)] sm:mt-5 sm:text-base sm:leading-8">
            PRESDA reports on the people, institutions, technologies, markets, matches, destinations, and cultural moments shaping global attention. The publication is built for readers who want direct reporting, strong visual context, and a clean path from headline to meaning.
          </p>
        </article>

        <article className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:rounded-3xl" aria-labelledby="coverage-title">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#FF1A1A]/30 bg-[#FF1A1A]/10 text-[#FF1A1A] sm:h-11 sm:w-11">
              <Globe2 className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h2 id="coverage-title" className="font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
              What We Cover
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-4">
            {coverage.map((item) => (
              <Link key={item} href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}/`} className="rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-3 py-3.5 text-center font-display text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--home-text)] transition hover:-translate-y-1 hover:border-[#FF1A1A]/60 hover:text-[#FF1A1A] sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm">
                {item}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto w-[min(1320px,calc(100%-24px))] py-5 sm:w-[min(1320px,calc(100%-32px))] sm:py-8" aria-labelledby="principles-title">
        <div className="mb-4 sm:mb-5">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Editorial Principles</p>
          <h2 id="principles-title" className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
            How PRESDA Earns Trust
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article key={principle.title} className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-4 shadow-[var(--home-card-shadow)] transition hover:border-[#FF1A1A]/50 sm:p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#FF1A1A]/28 bg-[#FF1A1A]/10 text-[#FF1A1A] sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:mt-5 sm:text-xl">{principle.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[color:var(--home-muted)] sm:mt-3">{principle.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1320px,calc(100%-24px))] gap-4 py-5 sm:w-[min(1320px,calc(100%-32px))] sm:gap-5 sm:py-8 lg:grid-cols-[0.82fr_1.18fr]" aria-labelledby="editorial-links-title">
        <article className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:rounded-3xl">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Explore</p>
          <h2 id="editorial-links-title" className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
            Editorial Pages
          </h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--home-muted)] sm:mt-4 sm:text-base">
            Learn how PRESDA handles standards, corrections, author profiles, and reader contact.
          </p>
        </article>
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
          {editorialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-4 font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-text)] shadow-[var(--home-card-shadow)] transition hover:-translate-y-1 hover:border-[#FF1A1A]/60 hover:text-[#FF1A1A] sm:gap-4 sm:p-5 sm:text-sm">
              {link.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1320px,calc(100%-24px))] py-5 pb-10 sm:w-[min(1320px,calc(100%-32px))] sm:py-8 sm:pb-14" aria-labelledby="stay-connected">
        <div className="relative overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:rounded-3xl lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(255,26,26,0.18),transparent_22rem)]" />
          <div className="relative grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#E8C97A]/30 bg-[#E8C97A]/10 text-[#E8C97A] sm:h-12 sm:w-12 sm:rounded-2xl">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>
              <h2 id="stay-connected" className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:mt-5 sm:text-4xl">
                Stay Connected
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--home-muted)] sm:mt-4 sm:text-base">
                Follow PRESDA or contact the editorial team for questions, corrections, tips, and partnerships.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] p-4 transition hover:-translate-y-1 hover:border-[#FF1A1A]/60 hover:shadow-[0_24px_70px_rgba(196,0,25,0.16)] sm:p-5">
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#FF1A1A]/25 bg-[#FF1A1A]/10 text-[#FF1A1A] sm:h-11 sm:w-11">
                        {Icon ? <Icon className="h-5 w-5" strokeWidth={1.5} /> : <span className="font-display text-xl font-extrabold sm:text-2xl">{link.mark}</span>}
                      </div>
                      <ArrowRight className="h-4 w-4 text-[color:var(--home-muted)] transition group-hover:text-[#FF1A1A]" strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 break-words font-display text-sm font-extrabold uppercase text-[color:var(--home-text)] sm:mt-5 sm:text-lg">{link.label}</p>
                    <p className="mt-1 break-words text-xs text-[color:var(--home-muted)] sm:text-sm">{link.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
