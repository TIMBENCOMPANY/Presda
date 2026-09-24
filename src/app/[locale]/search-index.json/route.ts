import { publishedTranslations } from "@/lib/i18n/registry";
import { isTranslationLocale } from "@/lib/i18n/routing";

export const dynamic = "force-static";
export function generateStaticParams() { return ["ar", "fr", "es"].map((locale) => ({ locale })); }
export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isTranslationLocale(locale)) return new Response(null, { status: 404 });
  return Response.json(publishedTranslations.filter((record) => record.locale === locale && record.kind === "article").map((record) => ({
    slug: record.path.split("/").filter(Boolean).at(-1), path: record.path, title: record.title,
    excerpt: record.description, category: record.category, author: record.author,
    tags: record.keywords, date: record.publishedAt
  })), { headers: { "X-Robots-Tag": "noindex" } });
}
