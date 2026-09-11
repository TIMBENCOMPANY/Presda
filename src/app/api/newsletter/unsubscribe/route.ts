import { NextResponse } from "next/server";
import { unsubscribeEmail, verifyNewsletterToken } from "@/lib/newsletter";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = verifyNewsletterToken(url.searchParams.get("token"), "unsubscribe");

    if (!email) {
      return NextResponse.json({ ok: false, message: "This unsubscribe link is invalid or expired." }, { status: 400 });
    }

    await unsubscribeEmail(email);

    return NextResponse.json({ ok: true, message: "You have been unsubscribed from the PRESDA newsletter." });
  } catch {
    return NextResponse.json({ ok: false, message: "We could not unsubscribe that address right now." }, { status: 500 });
  }
}
