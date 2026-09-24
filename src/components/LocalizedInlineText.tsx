import Link from "next/link";
import type { Locale } from "@/lib/i18n/routing";
import { languageDestination } from "@/lib/i18n/routing";
import { translationRoutes } from "@/lib/i18n/registry";

/** Editorial markdown links only. React escapes text; no HTML is accepted. */
export function LocalizedInlineText({ text, locale }: { text: string; locale: Locale }) {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, target] = match;
    if (target.startsWith("/") && !target.startsWith("//")) {
      const [path, fragment] = target.split("#", 2);
      const destination = languageDestination(path, locale, translationRoutes);
      const href = fragment ? `${destination}#${fragment}` : destination;
      return <Link key={index} prefetch={false} href={href} hrefLang={destination.startsWith(`/${locale}/`) ? locale : "en"} className="underline decoration-[#ff1a1a] underline-offset-4">{label}</Link>;
    }
    if (/^https:\/\//.test(target)) return <a key={index} href={target} className="underline decoration-[#ff1a1a] underline-offset-4">{label}</a>;
    return label;
  });
}
