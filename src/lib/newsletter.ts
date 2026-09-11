import crypto from "crypto";

type SubscriberStatus = "pending" | "confirmed" | "unsubscribed";

type SubscriberRecord = {
  id: string;
  email: string;
  status: SubscriberStatus;
  source: string;
  created_at: string;
  confirmed_at: string | null;
  unsubscribed_at: string | null;
};

type SubscribeEmailResult = {
  subscriber: SubscriberRecord;
  shouldSendConfirmation: boolean;
};

type TokenPurpose = "confirm" | "unsubscribe";

type NewsletterTokenPayload = {
  email: string;
  purpose: TokenPurpose;
  exp: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 14;

export function normalizeEmail(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const email = value.trim().toLowerCase();

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return null;
  }

  return email;
}

export function normalizeSource(value: unknown) {
  if (typeof value !== "string") {
    return "newsletter";
  }

  const source = value.trim().slice(0, 80);

  if (!source || !/^[a-z0-9 _./:-]+$/i.test(source)) {
    return "newsletter";
  }

  return source;
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase newsletter environment variables are not configured.");
  }

  return {
    apiUrl: `${url.replace(/\/$/, "")}/rest/v1/subscribers`,
    serviceRoleKey
  };
}

function getTokenSecret() {
  const secret = process.env.NEWSLETTER_TOKEN_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("NEWSLETTER_TOKEN_SECRET must be configured with at least 32 characters.");
  }

  return secret;
}

function encodeBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function signPayload(encodedPayload: string) {
  return crypto.createHmac("sha256", getTokenSecret()).update(encodedPayload).digest("base64url");
}

export function createNewsletterToken(email: string, purpose: TokenPurpose) {
  const payload: NewsletterTokenPayload = {
    email,
    purpose,
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS
  };
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));

  return `${encodedPayload}.${signPayload(encodedPayload)}`;
}

export function verifyNewsletterToken(token: unknown, expectedPurpose: TokenPurpose) {
  if (typeof token !== "string" || !token.includes(".")) {
    return null;
  }

  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = signPayload(encodedPayload);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);

  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as NewsletterTokenPayload;

    if (payload.purpose !== expectedPurpose || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return normalizeEmail(payload.email);
  } catch {
    return null;
  }
}

async function supabaseRequest<T>(path: string, init: RequestInit = {}) {
  const { apiUrl, serviceRoleKey } = getSupabaseConfig();
  const response = await fetch(`${apiUrl}${path}`, {
    ...init,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init.headers ?? {})
    },
    cache: "no-store"
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Supabase newsletter request failed.");
  }

  return (await response.json()) as T;
}

export async function subscribeEmail(email: string, source: string): Promise<SubscribeEmailResult> {
  const existing = await supabaseRequest<SubscriberRecord[]>(
    `?email=eq.${encodeURIComponent(email)}&select=id,email,status,source,created_at,confirmed_at,unsubscribed_at`
  );

  if (existing[0]?.status === "confirmed" || existing[0]?.status === "pending") {
    return { subscriber: existing[0], shouldSendConfirmation: false };
  }

  if (existing[0]?.status === "unsubscribed") {
    const updated = await supabaseRequest<SubscriberRecord[]>(`?email=eq.${encodeURIComponent(email)}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "pending",
        source,
        confirmed_at: null,
        unsubscribed_at: null
      })
    });

    return { subscriber: updated[0], shouldSendConfirmation: true };
  }

  const inserted = await supabaseRequest<SubscriberRecord[]>("", {
    method: "POST",
    body: JSON.stringify({
      email,
      status: "pending",
      source
    })
  });

  return { subscriber: inserted[0], shouldSendConfirmation: true };
}

export async function confirmEmail(email: string) {
  const updated = await supabaseRequest<SubscriberRecord[]>(
    `?email=eq.${encodeURIComponent(email)}&status=eq.pending`,
    {
    method: "PATCH",
    body: JSON.stringify({
      status: "confirmed",
      confirmed_at: new Date().toISOString(),
      unsubscribed_at: null
    })
    }
  );

  return updated[0] ?? null;
}

export async function unsubscribeEmail(email: string) {
  const updated = await supabaseRequest<SubscriberRecord[]>(`?email=eq.${encodeURIComponent(email)}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "unsubscribed",
      unsubscribed_at: new Date().toISOString()
    })
  });

  return updated[0] ?? null;
}
