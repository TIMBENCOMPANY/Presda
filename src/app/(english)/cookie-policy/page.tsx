import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "PRESDA cookie policy covering current measurement and poll cookies, planned Google advertising, and reader controls.",
  path: "/cookie-policy/"
});

export default function CookiePolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Cookies"
      title="Cookie Policy"
      description="This policy explains current cookies and similar technologies, planned advertising, and available controls. Updated October 9, 2026."
      canonicalPath="/cookie-policy/"
      sections={[
        {
          title: "What Cookies Are",
          body: [
            "Cookies are small files stored by your browser. Similar technologies include local storage, pixels, tags, and device identifiers. They can support site operation, preferences, measurement, security, and advertising."
          ]
        },
        {
          title: "Current Technologies",
          body: [
            "Google Analytics may set measurement cookies, including _ga and property-specific _ga cookies when permitted by the enabled configuration and privacy choices. Their expiration depends on Google's settings and the account configuration. Vercel Analytics measures readership without analytics cookies.",
            "The first-party presda_reader_poll cookie stores a signed identifier for duplicate-vote prevention. It is HttpOnly and expires after up to one year. It is not used to select advertising. Deleting it may affect duplicate-vote checks.",
            "Provider configuration and browser behavior can affect cookie lifetimes. A browser cookie's expiration does not establish how long associated server-side records are kept."
          ],
          links: [{ href: "https://policies.google.com/technologies/cookies", label: "Google Cookie Information" }, { href: "https://vercel.com/docs/analytics/privacy-policy", label: "Vercel Analytics Privacy" }]
        },
        {
          title: "Planned Advertising Technologies",
          body: [
            "Google AdSense is being prepared and remains disabled. Before launch, PRESDA will publish the applicable consent message and identify the advertising vendors selected for the service.",
            "When enabled and permitted, Google and participating partners may use cookies and similar technologies for ad delivery, measurement, frequency control, fraud prevention, and personalization based on previous visits to PRESDA and other websites. Choosing non-personalized advertising does not necessarily prevent advertising cookies or remove consent requirements."
          ],
          links: [{ href: "https://policies.google.com/technologies/partner-sites", label: "Google Partner-Site Data" }, { href: "https://adssettings.google.com/", label: "Google Ads Settings" }]
        },
        {
          title: "Consent And Your Choices",
          body: [
            "You can block, delete, or manage cookies through browser settings. Some functions may work differently if cookies are disabled. Google's controls also let you manage personalized advertising across eligible services.",
            "PRESDA plans to use Google's Privacy & messaging consent platform, with IAB TCF support for the EEA, UK, and Switzerland, before advertising launches. It is not yet configured or published. Once active, a persistent privacy-choice control will let you reopen the message and change or withdraw consent. Consent decisions will govern eligible advertising and measurement; advertising remains disabled until the required integration is verified.",
            "For cookie questions or privacy requests, contact contact@presda.com."
          ],
          links: [{ href: "/privacy-policy/", label: "Privacy Policy" }]
        }
      ]}
    />
  );
}
