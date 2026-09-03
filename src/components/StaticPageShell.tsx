import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

type StaticPageLink = {
  href: string;
  label: string;
};

type StaticPageSection = {
  title: string;
  body: string[];
  links?: StaticPageLink[];
};

type StaticPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections?: StaticPageSection[];
  links?: StaticPageLink[];
  canonicalPath?: string;
  breadcrumbLabel?: string;
};

export function StaticPageShell({
  eyebrow,
  title,
  description,
  sections = [],
  links = [],
  canonicalPath,
  breadcrumbLabel
}: StaticPageShellProps) {
  return (
    <main className="home-page">
      {canonicalPath ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", url: "/" },
                { name: breadcrumbLabel ?? title, url: canonicalPath }
              ])
            )
          }}
        />
      ) : null}
      <div className="mx-auto w-[min(1200px,calc(100%-24px))] py-8 sm:w-[min(1200px,calc(100%-32px))] sm:py-12">
      <header className="mb-7 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:mb-9 sm:p-7">
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">{eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">{title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--home-muted)] sm:mt-5 sm:text-base">{description}</p>
        {links.length ? (
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--home-border)] px-4 py-3 font-display text-xs font-extrabold uppercase tracking-wide transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        ) : null}
      </header>

      <div className="grid gap-5">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-6"
          >
            <h2 className="text-balance font-display text-xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-2xl">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[color:var(--home-muted)] sm:text-base">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.links?.length ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#FF1A1A] px-4 py-3 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
      </div>
    </main>
  );
}
