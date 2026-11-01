import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ArticlesPageContent } from "@/components/ArticlesPageContent";
export const metadata: Metadata = createPageMetadata({
  title: "Latest Articles",
  description: "Search PRESDA's article archive by topic, category and date, from world news and business to sport, AI, science, history, travel and culture.",
  path: "/articles/"
});

// The archive reads repository content only. Refresh it with each publication
// deployment, matching the localized archives, instead of rewriting it hourly.
export const revalidate = false;

export default function ArticlesPage() { return <ArticlesPageContent />; }
