import { adSenseSellerText } from "@/lib/adsenseConfig";

// Account verification is independent of serving. Never cache an old seller ID.
export const dynamic = "force-dynamic";
export function GET() {
  return new Response(adSenseSellerText(process.env.ADSENSE_CLIENT_ID), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" }
  });
}
