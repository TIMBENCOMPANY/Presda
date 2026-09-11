const RESEND_ENDPOINT = "https://api.resend.com/emails";
const PRESDA_ORIGIN = "https://presda.com";
const FROM_ADDRESS = "PRESDA <contact@presda.com>";

type ConfirmationEmailInput = {
  email: string;
  confirmUrl: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getResendApiKey() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return apiKey;
}

export function buildNewsletterUrl(path: string, token: string) {
  const url = new URL(path, PRESDA_ORIGIN);
  url.searchParams.set("token", token);
  return url.toString();
}

export function buildConfirmationEmailHtml(confirmUrl: string) {
  const safeConfirmUrl = escapeHtml(confirmUrl);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirm your PRESDA subscription</title>
  </head>
  <body style="margin:0;background:#080808;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#080808;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border:1px solid #242424;background:#111111;">
            <tr>
              <td style="padding:32px;">
                <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#ff1a1a;">PRESDA</div>
                <h1 style="margin:12px 0 0;font-size:28px;line-height:1.15;color:#ffffff;">Your Daily Press</h1>
                <p style="margin:20px 0 0;font-size:16px;line-height:1.6;color:#d7d7d7;">Thank you for subscribing to PRESDA. One click is required to confirm your newsletter subscription.</p>
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:28px 0;">
                  <tr>
                    <td style="background:#ff1a1a;">
                      <a href="${safeConfirmUrl}" style="display:inline-block;padding:14px 20px;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;">Confirm Subscription</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#a8a8a8;">If you did not request this subscription, you can ignore this email.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendConfirmationEmail({ email, confirmUrl }: ConfirmationEmailInput) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getResendApiKey()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [email],
      subject: "Confirm your PRESDA subscription",
      html: buildConfirmationEmailHtml(confirmUrl)
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Resend email delivery failed.");
  }
}
