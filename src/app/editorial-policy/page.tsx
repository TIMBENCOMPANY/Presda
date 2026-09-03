import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Editorial Policy",
  description: "PRESDA editorial policy covering accuracy, sourcing, fact-checking, independence, corrections, and newsroom standards.",
  path: "/editorial-policy/"
});

export default function EditorialPolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Editorial Standards"
      title="Editorial Policy"
      description="PRESDA's editorial policy explains the standards behind our reporting, analysis, sourcing, corrections, and independence."
      canonicalPath="/editorial-policy/"
      sections={[
        {
          title: "Accuracy",
          body: [
            "PRESDA aims to publish accurate, fair, and clearly presented journalism. We verify facts before publication and update stories when important new information becomes available.",
            "When facts are uncertain or still developing, our coverage should make that uncertainty clear to readers."
          ]
        },
        {
          title: "Sourcing",
          body: [
            "Our editorial team relies on official records, direct statements, credible news organizations, expert context, public data, and clearly attributed sources.",
            "Anonymous or sensitive sourcing is handled with care and should be used only when it adds meaningful public value."
          ]
        },
        {
          title: "Fact-Checking",
          body: [
            "Editors review claims, dates, names, numbers, quotes, context, and source reliability before publication.",
            "Opinion, analysis, speculation, and reported fact should be clearly separated so readers understand what is known and what is interpretation."
          ]
        },
        {
          title: "Independence",
          body: [
            "PRESDA's editorial decisions are made independently from advertising, sponsorship, partnerships, and commercial relationships.",
            "Any sponsored material or paid placement should be labeled clearly and should not be presented as independent editorial reporting."
          ]
        },
        {
          title: "Accountability",
          body: [
            "Readers can report potential errors by contacting contact@presda.com.",
            "Meaningful corrections are reviewed and handled according to the PRESDA corrections policy."
          ],
          links: [{ href: "/corrections-policy/", label: "Corrections Policy" }]
        }
      ]}
    />
  );
}
