import { NextResponse } from "next/server";
import { confirmEmail, verifyNewsletterToken } from "@/lib/newsletter";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = verifyNewsletterToken(url.searchParams.get("token"), "confirm");

    if (!email) {
      return NextResponse.json({ ok: false, message: "This confirmation link is invalid or expired." }, { status: 400 });
    }

    await confirmEmail(email);

    return NextResponse.json({ ok: true, message: "Your PRESDA newsletter subscription is confirmed." });
  } catch {
    return NextResponse.json({ ok: false, message: "We could not confirm that subscription right now." }, { status: 500 });
  }
}
