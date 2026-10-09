import { consentFromGoogle, deniedConsent, type ConsentState, type GoogleConsentValues, type TcData } from "./adConsent";

type TcfApi = (command: string, version: number, callback: (data: TcData, success: boolean) => void, parameter?: number) => void;
type GoogleFc = {
  callbackQueue: Array<Record<string, () => void>>;
  getGoogleConsentModeValues?: () => GoogleConsentValues;
  showRevocationMessage?: () => void;
};
type ConsentWindow = Window & { googlefc?: GoogleFc; __tcfapi?: TcfApi };

// No unofficial TCF stub or local consent cookie. The certified CMP owns both.
export function subscribeGoogleConsent(onChange: (state: ConsentState) => void, onError: () => void): () => void {
  const host = window as ConsentWindow;
  const fc = host.googlefc ?? (host.googlefc = { callbackQueue: [] });
  fc.callbackQueue = fc.callbackQueue || [];
  let active = true, apiReady = false, listenerId: number | undefined, registered = false;
  let tc: TcData | null = null;
  const deny = () => { if (active) onChange({ ...deniedConsent, apiReady }); };
  const readValues = () => {
    if (!active) return;
    try { onChange(consentFromGoogle(tc, host.googlefc?.getGoogleConsentModeValues?.() ?? null, apiReady)); }
    catch { deny(); onError(); }
  };
  const register = () => {
    if (!active) return;
    apiReady = typeof host.googlefc?.showRevocationMessage === "function";
    deny();
    if (registered || typeof host.__tcfapi !== "function") return;
    registered = true;
    try {
      host.__tcfapi("addEventListener", 2, (data, success) => {
        listenerId = data?.listenerId ?? listenerId;
        if (!active) {
          if (listenerId !== undefined) host.__tcfapi?.("removeEventListener", 2, () => {}, listenerId);
          return;
        }
        if (!success || !data || data.cmpStatus === "error") { tc = null; deny(); onError(); return; }
        tc = data;
        // Reopening/pending UI revokes local permission before another reading.
        deny();
        if (data.eventStatus === "tcloaded" || data.eventStatus === "useractioncomplete") {
          fc.callbackQueue.push({ CONSENT_MODE_DATA_READY: readValues });
        }
      });
    } catch { registered = false; deny(); onError(); }
  };
  fc.callbackQueue.push({ CONSENT_API_READY: register });
  fc.callbackQueue.push({ CONSENT_MODE_DATA_READY: readValues });
  return () => {
    active = false;
    if (listenerId !== undefined) {
      try { host.__tcfapi?.("removeEventListener", 2, () => {}, listenerId); } catch { /* Already unavailable. */ }
    }
  };
}

export function reopenGoogleConsent(): boolean {
  const fc = (window as ConsentWindow).googlefc;
  if (!fc || typeof fc.showRevocationMessage !== "function") return false;
  fc.callbackQueue.push({ CONSENT_API_READY: () => fc.showRevocationMessage?.() });
  return true;
}
