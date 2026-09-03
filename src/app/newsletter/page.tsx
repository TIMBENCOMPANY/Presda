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
        description="Get PRESDA's latest stories, world coverage, sport, culture, business, science, travel, and technology updates."
        canonicalPath="/newsletter/"
        sections={[
          {
            title: "What You Receive",
            body: [
              "The newsletter route is now present in the Next.js app for migration parity with the current static production site."
            ]
          }
        ]}
      />
      <NewsletterBox />
    </>
  );
}
