import { NextResponse } from "next/server";
import { checkNewsletterRateLimit } from "@/lib/newsletterRateLimit";
import { createNewsletterToken, normalizeEmail, normalizeSource, subscribeEmail } from "@/lib/newsletter";
import { buildNewsletterUrl, sendConfirmationEmail } from "@/lib/newsletterEmail";

export const dynamic = "force-dynamic";

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown; source?: unknown; website?: unknown };
    const email = normalizeEmail(body.email);
    const source = normalizeSource(body.source);
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";
    const ip = getClientIp(request);

    if (!checkNewsletterRateLimit(`${ip}:subscribe`) || (email && !checkNewsletterRateLimit(`${email}:subscribe`))) {
      return NextResponse.json({ ok: false, message: "Too many attempts. Please try again later." }, { status: 429 });
    }

    if (honeypot) {
      return NextResponse.json({ ok: true, message: "Please check your email to confirm your subscription." });
    }

    if (!email) {
      return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    const result = await subscribeEmail(email, source);

    const confirmToken = createNewsletterToken(email, "confirm");

    const payload: {
      ok: true;
      message: string;
    } = {
      ok: true,
      message: "Please check your email to confirm your subscription."
    };

    if (result.subscriber.status === "confirmed") {
      return NextResponse.json({
        ok: true,
        message: "You are already subscribed to PRESDA."
      });
    }

    if (result.shouldSendConfirmation) {
      await sendConfirmationEmail({
        email,
        confirmUrl: buildNewsletterUrl("/api/newsletter/confirm", confirmToken)
      });
    }

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not process that subscription right now." },
      { status: 500 }
    );
  }
}
