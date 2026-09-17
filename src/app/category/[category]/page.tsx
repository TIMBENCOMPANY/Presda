import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryFeatured } from "@/components/CategoryFeatured";
import { ArticleCard } from "@/components/ArticleCard";
import { curateCategory, toCategoryStory } from "@/lib/categoryCuration";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, getPublishedArticles } from "@/data/articles";
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

  const { slides, sideStories, remaining } = curateCategory(getPublishedArticles(), category);

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
      <header className="flex items-center justify-center gap-3 py-5 sm:py-6">
        <span className="text-[#FF1A1A]"><CategoryIcon category={category} className="h-7 w-7 sm:h-8 sm:w-8" /></span>
        <h1 className="font-display text-3xl font-extrabold uppercase leading-none sm:text-4xl">{categoryLabels[category]}</h1>
      </header>
      <CategoryFeatured key={category} slides={slides.map(toCategoryStory)} sideStories={sideStories.map(toCategoryStory)} />
      {remaining.length > 0 && (
        <section aria-label={`More ${categoryLabels[category]} articles`} className="pb-12 pt-8 sm:pt-10">
          <h2 className="mb-5 font-display text-2xl font-extrabold uppercase">More {categoryLabels[category]}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remaining.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </section>
      )}
    </main>
  );
}
