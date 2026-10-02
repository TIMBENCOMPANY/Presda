import { CategoryPageContent } from "@/components/CategoryPageContent";
import type { Metadata } from "next";
import { getLanguageAlternates } from "@/lib/i18n/registry";
import { categories } from "@/data/articles";
import {
  categoryDescriptions,
  categoryLabels,
  fromCategorySlug,
  toCategorySlug
} from "@/lib/categories";
import { absoluteUrl } from "@/lib/seo";

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
      canonical: absoluteUrl(`/category/${toCategorySlug(category)}/`),
      languages: getLanguageAlternates(`/category/${toCategorySlug(category)}/`)
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
  const { category } = await params;
  return <CategoryPageContent categorySlug={category} />;
}
