import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms",
  description: "PRESDA terms of use covering site access, editorial content, intellectual property, user submissions, and limitations.",
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <StaticPageShell
      eyebrow="Terms"
      title="Terms"
      description="These terms explain the basic rules for accessing PRESDA, using its content, and contacting the publication."
      canonicalPath="/terms/"
      sections={[
        {
          title: "Use Of The Site",
          body: [
            "By using PRESDA, readers agree to access the site lawfully, respect its editorial content, and avoid activity that disrupts, damages, scrapes, abuses, or compromises the website.",
            "PRESDA may update, remove, or correct content at any time as part of normal editorial operations."
          ]
        },
        {
          title: "Editorial Content",
          body: [
            "PRESDA content is provided for general news, information, culture, and analysis purposes. It should not be treated as professional legal, medical, investment, or financial advice.",
            "Although we work to provide accurate information, fast-moving stories may develop after publication."
          ]
        },
        {
          title: "Intellectual Property",
          body: [
            "PRESDA articles, design, logos, images, graphics, and other materials are protected by intellectual property rights unless otherwise stated.",
            "Readers may share links to PRESDA pages, but may not copy, republish, sell, or redistribute substantial portions of the site without permission."
          ]
        },
        {
          title: "User Submissions",
          body: [
            "Readers may send tips, comments, corrections, and messages to PRESDA. By submitting material, readers confirm they have the right to share it and understand that submission does not guarantee publication.",
            "Do not submit confidential, unlawful, threatening, or infringing material."
          ]
        },
        {
          title: "Questions",
          body: [
            "For questions about these terms, contact PRESDA at contact@presda.com."
          ]
        }
      ]}
    />
  );
}
