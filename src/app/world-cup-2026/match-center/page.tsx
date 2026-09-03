import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "World Cup 2026 Match Center",
  description: "PRESDA World Cup 2026 match center route for fixtures, standings, and tournament coverage.",
  path: "/world-cup-2026/match-center/"
});

export default function WorldCupMatchCenterPage() {
  return (
    <StaticPageShell
      eyebrow="World Cup 2026"
      title="Match Center"
      description="The Next.js match center route is now present for migration parity with the current static production URL."
      canonicalPath="/world-cup-2026/match-center/"
      breadcrumbLabel="World Cup 2026 Match Center"
      sections={[
        {
          title: "Tournament Hub",
          body: [
            "This page keeps the public match-center path available in Next.js during Phase 1. Detailed groups, standings, fixtures, and live data should be connected in a later World Cup data phase."
          ],
          links: [{ href: "/world-cup-2026/", label: "World Cup Hub" }]
        }
      ]}
    />
  );
}
