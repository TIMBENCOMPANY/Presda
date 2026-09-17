import { getPublishedArticles } from "@/data/articles";
import { toArticleSearchRecord } from "@/lib/articleSearch";

// Generated with the deployment, like the articles it describes.
export const dynamic = "force-static";

export function GET() {
  return Response.json(getPublishedArticles().map(toArticleSearchRecord));
}
