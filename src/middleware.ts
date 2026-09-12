import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/privacy-policy/", request.url), 301);
}

export const config = {
  matcher: ["/privacy", "/privacy/"]
};
