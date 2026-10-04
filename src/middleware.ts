import { NextResponse, type NextRequest } from "next/server";
import { middlewareTranslationRoutes as translationRoutes } from "@/lib/i18n/route-index";
import { englishPathFor, normalizePath } from "@/lib/i18n/routing";

export function middleware(request: NextRequest) {
  // Preserve published article links, including each language and query string.
  const retiredMetaArticle = request.nextUrl.pathname.match(/^\/(ar\/|fr\/|es\/)?articles\/meta-ray-ban-smart-glasses-privacy-hans-anders\/?$/);
  if (retiredMetaArticle) {
    const url = new URL(request.url);
    url.pathname = `/${retiredMetaArticle[1] ?? ""}articles/meta-ray-ban-privacy-europe/`;
    return NextResponse.redirect(url, 301);
  }

  if (/^\/(ar|fr|es)(?:\/|$)/.test(request.nextUrl.pathname)) {
    const path = normalizePath(request.nextUrl.pathname);
    if (translationRoutes.some((route) => route.path === path) || /^\/(ar|fr|es)\/search-index\.json\/$/.test(path)) {
      return NextResponse.next();
    }
    // Resolve before rendering: uncached Next.js static redirects can emit
    // duplicate Location headers. English routes keep their existing cache path.
    const url = request.nextUrl.clone();
    url.pathname = englishPathFor(path, translationRoutes);
    const response = NextResponse.redirect(url, 307);
    response.headers.set("X-Robots-Tag", "noindex");
    return response;
  }
  return NextResponse.redirect(new URL("/privacy-policy/", request.url), {
    status: 301
  });
}

export const config = {
  matcher: ["/privacy", "/privacy/", "/articles/meta-ray-ban-smart-glasses-privacy-hans-anders", "/articles/meta-ray-ban-smart-glasses-privacy-hans-anders/", "/ar/:path*", "/fr/:path*", "/es/:path*"]
};
