import { NextRequest, NextResponse } from "next/server";
import { isIP } from "node:net";
import { newPollCookie, POLL_COOKIE, pollHash, pollRpc, pollVoter } from "@/lib/readerPollServer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" };
const response = (body: unknown, status = 200) => NextResponse.json(body, { status, headers });

export async function GET(request: NextRequest) {
  try {
    const existing = request.cookies.get(POLL_COOKIE)?.value;
    const token = pollVoter(existing) ? existing! : newPollCookie();
    const result = await pollRpc("presda_poll_status", { p_voter: pollVoter(token) });
    const res = response(result);
    if (token !== existing) res.cookies.set(POLL_COOKIE, token, { httpOnly: true, secure: request.nextUrl.protocol === "https:", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  } catch { return response({ error: "unavailable" }, 503); }
}

export async function POST(request: NextRequest) {
  // Require a same-origin JSON request. Do not trust a body-supplied voter or IP.
  if (request.headers.get("origin") !== request.nextUrl.origin || request.headers.get("sec-fetch-site") === "cross-site") return response({ error: "origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return response({ error: "format" }, 415);
  try {
    const voter = pollVoter(request.cookies.get(POLL_COOKIE)?.value);
    if (!voter) return response({ error: "session" }, 403);
    const reader = request.body?.getReader();
    if (!reader) return response({ error: "body" }, 400);
    const chunks: Uint8Array[] = []; let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.length;
      if (bytes > 1024) { await reader.cancel(); return response({ error: "size" }, 413); }
      chunks.push(value);
    }
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return response({ error: "body" }, 400); }
    if (!body || !["view", "casablanca", "madrid"].includes(body.action) || !["en", "fr", "ar", "es"].includes(body.locale)) return response({ error: "input" }, 400);
    // Vercel overwrites this header. Never accept arbitrary forwarding headers in production.
    const ip = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() : "127.0.0.1";
    if (!ip || !isIP(ip)) return response({ error: "connection" }, 503);
    const result = await pollRpc("presda_poll_submit", { p_voter: voter, p_network: pollHash("network", ip), p_action: body.action, p_locale: body.locale });
    return response(result, result.limited ? 429 : 200);
  } catch { return response({ error: "unavailable" }, 503); }
}
