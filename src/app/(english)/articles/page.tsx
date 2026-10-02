import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ArticlesPageContent } from "@/components/ArticlesPageContent";
export const metadata: Metadata = createPageMetadata({
  title: "Latest Articles",
  description: "Search and filter the latest PRESDA articles across AI, business, sport, world, paparazzi, lifestyle, travel, science, and World Cup 2026 coverage.",
  path: "/articles/"
});

export const revalidate = 3600;

export default function ArticlesPage() { return <ArticlesPageContent />; }
