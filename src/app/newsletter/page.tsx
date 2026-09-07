import type { Metadata } from "next";
import { NewsletterBox } from "@/components/NewsletterBox";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA Newsletter",
  description: "Join the PRESDA newsletter for the latest global stories, culture, sport, business, science, and technology coverage.",
  path: "/newsletter/"
});

export default function NewsletterPage() {
  return (
    <>
      <StaticPageShell
        eyebrow="Newsletter"
        title="Join PRESDA"
        description="A concise editorial briefing for readers who follow global stories, technology, sport, business, science, travel and culture through PRESDA."
        canonicalPath="/newsletter/"
        sections={[
          {
            title: "What You Receive",
            body: [
              "PRESDA's newsletter is built as a compact reading guide: important new articles, sharp context around developing stories, and links to the reporting readers are most likely to return to.",
              "Coverage includes world affairs, artificial intelligence, business, sport, World Cup 2026, science, travel, lifestyle and culture. The goal is not to flood your inbox; it is to help you catch the stories that matter without losing the thread."
            ],
            links: [
              { href: "/articles/", label: "Latest Articles" },
              { href: "/trending/", label: "Trending Stories" }
            ]
          },
          {
            title: "Editorial Focus",
            body: [
              "Each edition is selected around PRESDA's core editorial promise: clear reporting, strong visual context, useful explainers and a premium reading experience across desktop and mobile.",
              "Readers can expect a mix of timely articles and evergreen guides, from technology and science to football, entertainment, business and international culture."
            ],
            links: [
              { href: "/editorial-policy/", label: "Editorial Policy" },
              { href: "/contact/", label: "Contact PRESDA" }
            ]
          }
        ]}
      />
      <NewsletterBox />
    </>
  );
}
