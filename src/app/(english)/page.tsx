import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { createPageMetadata } from "@/lib/seo";

// Keep the homepage cached; refresh its daily edition without a deployment.
export const revalidate = 3600;

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

export default function HomePage() { return <HomePageContent />; }
