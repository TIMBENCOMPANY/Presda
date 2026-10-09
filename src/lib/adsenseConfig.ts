export type AdSenseConfig = Readonly<{
  enabled: boolean;
  clientId: string | null;
  manualSlotId: string | null;
  cmpEnabled: boolean;
  cmpScriptUrl: string | null;
  monitoring: boolean;
}>;

export function validAdSenseClientId(value: string | undefined): string | null {
  return value && /^ca-pub-\d{16}$/.test(value) && !/^ca-pub-0{16}$/.test(value) ? value : null;
}

export function validGoogleCmpUrl(value: string | undefined, clientId: string | null): string | null {
  if (!value || !clientId) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "fundingchoicesmessages.google.com" ||
        url.port || url.username || url.password || url.hash ||
        url.pathname !== `/i/${clientId.replace(/^ca-/, "")}`) return null;
    return url.href;
  } catch { return null; }
}

export function parseAdSenseConfig(env: Record<string, string | undefined>): AdSenseConfig {
  const clientId = validAdSenseClientId(env.ADSENSE_CLIENT_ID);
  const cmpScriptUrl = validGoogleCmpUrl(env.GOOGLE_CMP_SCRIPT_URL, clientId);
  const cmpEnabled = env.GOOGLE_CMP_ENABLED === "true" && cmpScriptUrl !== null;
  const manualSlotId = env.ADSENSE_MANUAL_SLOT_ID && /^\d{1,20}$/.test(env.ADSENSE_MANUAL_SLOT_ID)
    && !/^0+$/.test(env.ADSENSE_MANUAL_SLOT_ID) ? env.ADSENSE_MANUAL_SLOT_ID : null;
  return {
    clientId, manualSlotId, cmpScriptUrl, cmpEnabled,
    enabled: env.ADSENSE_ENABLED === "true" && env.ADSENSE_LAUNCH_APPROVED === "true" &&
      env.ADSENSE_CSP_VALIDATED === "true" && env.ADSENSE_CSP_PREPARED === "true" &&
      clientId !== null && manualSlotId !== null && cmpEnabled,
    monitoring: env.ADSENSE_MONITORING_ENABLED === "true"
  };
}

export function adSenseSellerText(clientId: string | undefined): string {
  const valid = validAdSenseClientId(clientId);
  return valid
    ? `google.com, ${valid.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
    : "# PRESDA: no advertising sellers are authorized in this preparation build.\n# Configure ADSENSE_CLIENT_ID with the real account ID before seller verification.\n";
}
