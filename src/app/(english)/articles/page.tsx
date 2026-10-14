import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ArticlesPageContent } from "@/components/ArticlesPageContent";
export const metadata: Metadata = createPageMetadata({
  title: "Latest Articles",
  description: "Search PRESDA's article archive by topic, category and date, from world news and business to sport, AI, science, history, travel and culture.",
  path: "/articles/"
});

export const revalidate = 3600;

export default function ArticlesPage() { return <ArticlesPageContent />; }
