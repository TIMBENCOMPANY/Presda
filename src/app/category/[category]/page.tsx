import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBrowser } from "@/components/ArticleBrowser";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, getPublishedArticles, type ArticleCategory } from "@/data/articles";
import {
  categoryDescriptions,
  categoryLabels,
  fromCategorySlug,
  toCategorySlug
} from "@/lib/categories";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const categoryHubCopy: Partial<Record<ArticleCategory, string>> = {
  Science:
    "Explore evidence-led explainers on evolution, space, the brain, sleep, language, extinction and the methods scientists use to separate evidence from uncertainty. Start with deep science stories, then move through the wider Science archive for connected context.",
  History:
    "Follow connected histories of civilizations, empires, archaeology, migration, conflict and cultural memory through PRESDA's long-form History archive. These pieces connect single events to the larger systems that shaped them."
};

const categoryHubLinks: Partial<Record<ArticleCategory, Array<{ href: string; label: string }>>> = {
  Science: [
    { href: "/articles/dinosaurs-rise-fall-fossils-extinction/", label: "Dinosaurs" },
    { href: "/articles/charles-darwin-theory-of-evolution/", label: "Evolution" },
    { href: "/articles/how-humans-learned-to-speak/", label: "Language" },
    { href: "/articles/carl-sagan-journey-through-our-universe/", label: "Universe" },
    { href: "/articles/depression-what-happens-in-the-brain/", label: "Brain" },
    { href: "/articles/why-do-we-dream/", label: "Dreams" }
  ],
  History: [
    { href: "/articles/ancient-greece-civilization-history/", label: "Ancient Greece" },
    { href: "/articles/history-of-egyptian-pyramids/", label: "Egyptian Pyramids" },
    { href: "/articles/ottoman-empire-rise-and-fall/", label: "Ottoman Empire" },
    { href: "/articles/history-of-the-vikings/", label: "Vikings" },
    { href: "/articles/titanic-what-really-happened/", label: "Titanic" },
    { href: "/articles/history-of-slavery/", label: "Slavery" }
  ]
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: toCategorySlug(category) }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = fromCategorySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found"
    };
  }

  return {
    title: `${categoryLabels[category]} News`,
    description: categoryDescriptions[category],
    alternates: {
      canonical: absoluteUrl(`/category/${toCategorySlug(category)}/`)
    },
    openGraph: {
      title: `${categoryLabels[category]} News`,
      description: categoryDescriptions[category],
      url: absoluteUrl(`/category/${toCategorySlug(category)}/`),
      siteName: "PRESDA",
      type: "website",
      images: [
        {
          url: absoluteUrl("/presda-p-transparent.png"),
          alt: "PRESDA red P brand mark"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryLabels[category]} News`,
      description: categoryDescriptions[category],
      images: [absoluteUrl("/presda-p-transparent.png")]
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = fromCategorySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getPublishedArticles();

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-3 sm:w-[min(1500px,calc(100%-32px))] sm:py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Categories", url: "/articles/" },
              { name: categoryLabels[category], url: `/category/${toCategorySlug(category)}/` }
            ])
          )
        }}
      />
      <header className="mb-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-4 shadow-[var(--shadow)] sm:mb-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border)] text-[#FF1A1A] sm:h-11 sm:w-11">
            <CategoryIcon category={category} className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Category</p>
            <h1 className="mt-1 text-balance font-display text-[clamp(1.85rem,8vw,2.5rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-5xl sm:leading-none">
              {categoryLabels[category]}
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]">{categoryDescriptions[category]}</p>
          </div>
        </div>
        {categoryHubCopy[category] ? (
          <div className="mt-3 border-t border-[color:var(--border)] pt-3">
            <p className="max-w-3xl text-sm leading-6 text-[color:var(--muted)]">{categoryHubCopy[category]}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {categoryHubLinks[category]?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg border border-[#FF1A1A]/30 px-3 py-2 font-display text-[10px] font-extrabold uppercase tracking-wide text-[#FF1A1A] transition hover:border-[#FF1A1A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      <ArticleBrowser articles={articles} initialCategory={category} compact />
    </main>
  );
}
