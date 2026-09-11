import { NextResponse } from "next/server";
import { unsubscribeEmail, verifyNewsletterToken } from "@/lib/newsletter";

export const dynamic = "force-dynamic";

function renderResult(message: string, status = 200) {
  return new NextResponse(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PRESDA Newsletter</title>
  </head>
  <body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#080808;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
    <main style="width:min(560px,calc(100% - 32px));border:1px solid #242424;background:#111111;padding:32px;">
      <p style="margin:0 0 12px;color:#ff1a1a;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;">PRESDA</p>
      <h1 style="margin:0;font-size:28px;line-height:1.2;">${message}</h1>
    </main>
  </body>
</html>`, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = verifyNewsletterToken(url.searchParams.get("token"), "unsubscribe");

    if (!email) {
      return NextResponse.json({ ok: false, message: "This unsubscribe link is invalid or expired." }, { status: 400 });
    }

    const subscriber = await unsubscribeEmail(email);

    if (!subscriber) {
      return renderResult("This unsubscribe link is invalid or expired.", 400);
    }

    return renderResult("You have been unsubscribed from the PRESDA newsletter.");
  } catch {
    return NextResponse.json({ ok: false, message: "We could not unsubscribe that address right now." }, { status: 500 });
  }
}
