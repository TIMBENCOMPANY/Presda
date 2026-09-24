import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "PRESDA privacy policy covering reader data, cookies, analytics, advertising, third party services, and privacy choices.",
  path: "/privacy-policy/"
});

export default function PrivacyPage() {
  return (
    <StaticPageShell
      eyebrow="Policy"
      title="Privacy Policy"
      description="PRESDA respects reader privacy and explains how information may be collected, used, protected, and controlled."
      canonicalPath="/privacy-policy/"
      sections={[
        {
          title: "Information We May Collect",
          body: [
            "PRESDA may collect information readers provide directly, such as names, email addresses, contact messages, newsletter signups, and correction requests.",
            "We may also collect technical information such as device type, browser, approximate location, pages viewed, referral sources, and interaction data through cookies, analytics tools, and similar technologies."
          ]
        },
        {
          title: "How We Use Information",
          body: [
            "We use reader information to operate the website, respond to messages, improve coverage, send requested communications, measure performance, protect the site, and understand how audiences use PRESDA.",
            "We do not sell editorial contact messages or correction requests."
          ]
        },
        {
          title: "Cookies And Analytics",
          body: [
            "PRESDA may use cookies and analytics technologies to remember preferences, measure traffic, understand reading behavior, and improve site performance.",
            "Readers can control cookies through browser settings. Some features may work differently if cookies are blocked."
          ],
          links: [{ href: "/cookie-policy/", label: "Cookie Policy" }]
        },
        {
          title: "Advertising And Third Parties",
          body: [
            "PRESDA may work with advertising, analytics, hosting, email, and security providers. These services may process limited information to provide measurement, delivery, fraud prevention, and operational support.",
            "Sponsored or advertising relationships do not control editorial judgment."
          ]
        },
        {
          title: "Reader Choices",
          body: [
            "Readers may contact PRESDA to request information, ask privacy questions, unsubscribe from communications, or raise concerns about data handling.",
            "For privacy questions, email contact@presda.com."
          ]
        }
      ]}
    />
  );
}
