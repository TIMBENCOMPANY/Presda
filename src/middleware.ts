import { NextResponse, type NextRequest } from "next/server";
import { translationRoutes } from "@/lib/i18n/registry";
import { englishPathFor, normalizePath } from "@/lib/i18n/routing";

export function middleware(request: NextRequest) {
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
  matcher: ["/privacy", "/privacy/", "/ar/:path*", "/fr/:path*", "/es/:path*"]
};
