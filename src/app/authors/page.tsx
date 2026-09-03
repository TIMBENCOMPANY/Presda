import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAuthorProfiles } from "@/lib/authors";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA Authors",
  description: "Meet the PRESDA editorial team and browse author profiles for PRESDA reporting and analysis.",
  path: "/authors/"
});

export default function AuthorsPage() {
  const authors = getAuthorProfiles();

  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Authors", url: "/authors/" }
            ])
          )
        }}
      />
      <div className="mx-auto w-[min(1200px,calc(100%-24px))] py-8 sm:w-[min(1200px,calc(100%-32px))] sm:py-12">
        <header className="mb-7 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:mb-9 sm:p-7">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Authors</p>
          <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">
            PRESDA Authors
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--home-muted)] sm:mt-5 sm:text-base">
            Meet the editorial team and contributor desks behind PRESDA reporting, explainers, and analysis.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}/`}
              className="group rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] transition hover:border-[#FF1A1A]/60 sm:p-6"
            >
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">{author.role}</p>
              <h2 className="mt-3 text-balance font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-3xl">{author.name}</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--home-muted)] sm:text-base">{author.bio}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[color:var(--home-text)] transition group-hover:text-[#FF1A1A]">
                View Profile
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
