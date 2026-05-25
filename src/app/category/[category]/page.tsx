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
      canonical: `/category/${toCategorySlug(category)}`
    }
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = fromCategorySlug(params.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto w-[min(1500px,calc(100%-32px))] py-12">
      <header className="mb-9 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] p-7 shadow-[var(--shadow)]">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-[color:var(--border)] text-[#FF1A1A]">
          <CategoryIcon category={category} className="h-7 w-7" />
        </div>
        <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">Category</p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase leading-none sm:text-7xl">
          {categoryLabels[category]}
        </h1>
        <p className="mt-5 max-w-3xl leading-7 text-[color:var(--muted)]">{categoryDescriptions[category]}</p>
      </header>
      <ArticleBrowser articles={articles} initialCategory={category} />
    </main>
  );
}
