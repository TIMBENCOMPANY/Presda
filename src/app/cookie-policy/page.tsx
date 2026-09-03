import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "PRESDA cookie policy explaining how cookies, analytics, advertising technologies, preferences, and browser controls may be used.",
  path: "/cookie-policy/"
});

export default function CookiePolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Cookies"
      title="Cookie Policy"
      description="This policy explains how PRESDA may use cookies and similar technologies to operate, measure, protect, and improve the website."
      canonicalPath="/cookie-policy/"
      sections={[
        {
          title: "What Cookies Are",
          body: [
            "Cookies are small files stored on a reader's device by a website or browser. Similar technologies may include local storage, pixels, tags, and analytics identifiers.",
            "These technologies can help a site remember preferences, measure traffic, protect services, and understand how readers interact with pages."
          ]
        },
        {
          title: "How PRESDA May Use Cookies",
          body: [
            "PRESDA may use essential cookies for site functionality, preference cookies for settings such as theme choices, analytics cookies for performance measurement, and advertising technologies for campaign reporting.",
            "Cookie use may change as the website evolves, but reader trust and clear disclosure remain the guiding standard."
          ]
        },
        {
          title: "Analytics And Advertising",
          body: [
            "Analytics tools may help PRESDA understand page views, referral sources, device information, and reading patterns in aggregate.",
            "Advertising partners may use cookies or similar technologies to measure campaign performance, limit repeated impressions, and provide relevant advertising where permitted."
          ]
        },
        {
          title: "Your Choices",
          body: [
            "Readers can block, delete, or manage cookies through browser settings. Some features may work differently if cookies are disabled.",
            "For questions about cookies, contact PRESDA at contact@presda.com."
          ],
          links: [{ href: "/privacy-policy/", label: "Privacy Policy" }]
        }
      ]}
    />
  );
}
