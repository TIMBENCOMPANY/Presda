import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBrowser } from "@/components/ArticleBrowser";
import { CategoryIcon } from "@/components/CategoryIcon";
import { articles, categories } from "@/data/articles";
import {
  categoryDescriptions,
  categoryLabels,
  fromCategorySlug,
  toCategorySlug
} from "@/lib/categories";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: toCategorySlug(category) }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = fromCategorySlug(params.category);

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

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = fromCategorySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-24px))] py-8 sm:w-[min(1500px,calc(100%-32px))] sm:py-12">
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
      <header className="mb-7 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-[var(--shadow)] sm:mb-9 sm:p-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--border)] text-[#FF1A1A] sm:mb-6 sm:h-14 sm:w-14">
          <CategoryIcon category={category} className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">Category</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(2rem,11vw,2.75rem)] font-extrabold uppercase leading-[1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">
          {categoryLabels[category]}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base">{categoryDescriptions[category]}</p>
      </header>
      <ArticleBrowser articles={articles} initialCategory={category} />
    </main>
  );
}
