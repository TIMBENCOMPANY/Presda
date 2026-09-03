import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Corrections Policy",
  description: "PRESDA corrections policy explaining how readers can report errors and how the editorial team reviews and updates corrections.",
  path: "/corrections-policy/"
});

export default function CorrectionsPolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Corrections"
      title="Corrections Policy"
      description="PRESDA takes accuracy seriously and provides a clear process for readers to report possible errors."
      canonicalPath="/corrections-policy/"
      sections={[
        {
          title: "Reporting An Error",
          body: [
            "Readers can report a possible factual error, typo, missing context, attribution issue, or broken link by emailing contact@presda.com.",
            "Please include the article URL, the specific passage in question, the reason you believe it is incorrect, and any supporting source or documentation."
          ]
        },
        {
          title: "Review Process",
          body: [
            "The editorial team reviews correction requests as promptly as possible. We check the original source material, compare credible references, and evaluate whether the article requires an update.",
            "If a correction is needed, PRESDA updates the relevant content and may add a note when the change materially affects the meaning of the article."
          ]
        },
        {
          title: "Clarifications And Updates",
          body: [
            "Some changes are clarifications rather than corrections. These may include additional context, updated figures, fresh developments, or clearer wording.",
            "Fast-moving stories may be updated as new information becomes available."
          ]
        },
        {
          title: "Editorial Accountability",
          body: [
            "PRESDA does not remove accurate reporting simply because it is inconvenient or unfavorable.",
            "We correct meaningful errors, preserve editorial independence, and aim to make important changes transparent to readers."
          ]
        }
      ]}
    />
  );
}
