import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { getAuthorProfile, getAuthorProfiles, toAuthorSlug } from "@/lib/authors";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

type AuthorPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAuthorProfiles().map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: AuthorPageProps): Metadata {
  const author = getAuthorProfile(params.slug);

  if (!author) {
    return {
      title: "Author Not Found"
    };
  }

  return createPageMetadata({
    title: `${author.name} - PRESDA Author`,
    description: `${author.bio} Read articles by ${author.name} on PRESDA.`,
    path: `/authors/${author.slug}/`,
    type: "profile"
  });
}

export default function AuthorProfilePage({ params }: AuthorPageProps) {
  const author = getAuthorProfile(params.slug);

  if (!author) {
    notFound();
  }

  const authorArticles = articles.filter((article) => toAuthorSlug(article.author) === author.slug);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: absoluteUrl(`/authors/${author.slug}/`),
    worksFor: {
      "@type": "Organization",
      "@id": "https://presda.com/#organization",
      name: "PRESDA"
    }
  };

  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Authors", url: "/authors/" },
              { name: author.name, url: `/authors/${author.slug}/` }
            ])
          )
        }}
      />
      <div className="mx-auto w-[min(1500px,calc(100%-24px))] py-8 sm:w-[min(1500px,calc(100%-32px))] sm:py-12">
        <header className="mb-7 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:mb-9 sm:p-7">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">{author.role}</p>
          <h1 className="mt-3 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">
            {author.name}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--home-muted)] sm:mt-5 sm:text-base">{author.bio}</p>
        </header>

        <section aria-labelledby="author-articles-title">
          <h2 id="author-articles-title" className="mb-5 font-display text-2xl font-extrabold uppercase tracking-wide text-[color:var(--home-text)]">
            Articles
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {authorArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} priority={index === 0} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
