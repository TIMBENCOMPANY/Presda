import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { READER_POLL_ID, type PollResult } from "./readerPoll";

export const POLL_COOKIE = "presda_reader_poll";
function secret() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("Poll database is not configured");
  return key;
}
export function pollHash(purpose: string, value: string) {
  return createHmac("sha256", secret()).update(`${READER_POLL_ID}:${purpose}:${value}`).digest("hex");
}
export function newPollCookie() {
  const id = randomUUID();
  return `${id}.${pollHash("cookie", id)}`;
}
export function pollVoter(cookie: string | undefined) {
  if (!cookie || !/^[a-f0-9-]{36}\.[a-f0-9]{64}$/.test(cookie)) return null;
  const [id, signature] = cookie.split(".");
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(pollHash("cookie", id)))) return null;
  return pollHash("voter", id);
}
export async function pollRpc(name: "presda_poll_status" | "presda_poll_submit", args: Record<string, unknown>): Promise<PollResult> {
  const url = process.env.SUPABASE_URL;
  const key = secret();
  if (!url) throw new Error("Poll database is not configured");
  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/${name}`, {
    method: "POST", cache: "no-store", signal: AbortSignal.timeout(8000),
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p_poll: READER_POLL_ID, ...args })
  });
  if (!response.ok) throw new Error("Poll database request failed");
  return response.json();
}
