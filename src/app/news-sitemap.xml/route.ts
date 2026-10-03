import { getPublishedArticles } from "@/data/articles";
import { publishedTranslations } from "@/lib/i18n/registry";
import { getNewsEntries, renderNewsSitemap } from "@/lib/newsSitemap";

// Evaluate the window on every request so entries expire without a deployment.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const page = new URL(request.url).searchParams.get("page");
  const xml = renderNewsSitemap(getNewsEntries(getPublishedArticles(), publishedTranslations), page === null ? undefined : Number(page));
  return new Response(xml ?? "Sitemap page not found", {
    status: xml === null ? 404 : 200,
    headers: { "Content-Type": xml === null ? "text/plain; charset=utf-8" : "application/xml; charset=utf-8", "Cache-Control": "no-store" }
  });
}
