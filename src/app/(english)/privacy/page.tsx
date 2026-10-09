import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "PRESDA privacy policy covering reader data, analytics, planned advertising, cookies, third party services, and privacy choices.",
  path: "/privacy-policy/"
});

export default function PrivacyPage() {
  return (
    <StaticPageShell
      eyebrow="Policy"
      title="Privacy Policy"
      description="PRESDA respects reader privacy and explains how information may be collected, used, protected, and controlled. Updated October 9, 2026."
      canonicalPath="/privacy-policy/"
      sections={[
        {
          title: "Information We Collect",
          body: [
            "Readers may provide names, email addresses, contact messages, newsletter signups, and correction requests. Technical information may include device and browser details, approximate location, page views, referrals, and interactions.",
            "PRESDA has Google Analytics and Vercel Analytics integrations for audience and operational measurement. Google Analytics is prepared to load only after an explicit analytics consent grant from the configured Google consent platform; with that platform disabled, it remains unloaded. Vercel Analytics provides aggregate measurement. Reader polls use a signed browser identifier to limit duplicate voting."
          ]
        },
        {
          title: "How We Use Information",
          body: [
            "We use information to operate and protect the website, respond to messages, deliver requested communications, improve coverage, measure performance, and understand readership. Hosting, analytics, email, and security providers may process information for these purposes.",
            "We do not sell editorial contact messages or correction requests. Sponsored or advertising relationships do not control editorial judgment."
          ]
        },
        {
          title: "Cookies And Analytics",
          body: [
            "Google Analytics may use cookies and identifiers for measurement. Vercel Analytics provides audience measurement without analytics cookies. The presda_reader_poll cookie lasts up to one year and supports duplicate-vote prevention; it is not an advertising identifier.",
            "Browser settings let you delete or block cookies. Blocking cookies may affect poll functionality. Cookie lifetimes are separate from the retention of information held by service providers."
          ],
          links: [{ href: "/cookie-policy/", label: "Cookie Policy" }, { href: "https://policies.google.com/privacy", label: "Google Privacy Policy" }, { href: "https://vercel.com/docs/analytics/privacy-policy", label: "Vercel Analytics Privacy" }]
        },
        {
          title: "Planned Google Advertising",
          body: [
            "PRESDA is preparing for Google AdSense. Advertising is disabled in the current implementation. The following disclosure describes the intended service before any advertising launch.",
            "If enabled, Google and other participating advertising vendors may use cookies or similar technologies to deliver and measure ads, prevent fraud, and serve personalized advertising where permitted. Google advertising cookies allow Google and its partners to select ads using prior visits to PRESDA and other websites.",
            "You can manage personalized advertising through Google Ads Settings. Participating vendor websites may also offer opt-outs. PRESDA will identify the vendors selected for its advertising setup and link their privacy information before launch."
          ],
          links: [{ href: "https://adssettings.google.com/", label: "Google Ads Settings" }, { href: "https://policies.google.com/technologies/partner-sites", label: "How Google Uses Partner-Site Data" }, { href: "https://optout.aboutads.info/", label: "Participating Vendor Opt-Outs" }]
        },
        {
          title: "Consent And Reader Choices",
          body: [
            "Before advertising launches, PRESDA will configure a Google-certified consent platform compatible with the IAB Transparency and Consent Framework for readers in the European Economic Area, United Kingdom, and Switzerland. The planned platform is Google's Privacy & messaging service. It has not yet been configured or published for PRESDA.",
            "Once activated, the consent message will describe purposes and participating vendors, provide applicable choices, and offer a persistent way to revisit or withdraw consent. Non-personalized ads may still use cookies and require consent where applicable. Browser controls and Google Ads Settings do not replace PRESDA's future site consent controls.",
            "Readers may unsubscribe from requested communications and contact contact@presda.com with privacy questions or requests concerning access, correction, deletion, objection, or consent. Available rights depend on applicable law."
          ]
        }
      ]}
    />
  );
}
