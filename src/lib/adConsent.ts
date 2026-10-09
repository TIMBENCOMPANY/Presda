export type ConsentState = Readonly<{ apiReady: boolean; advertising: boolean; analytics: boolean }>;
export const deniedConsent: ConsentState = Object.freeze({ apiReady: false, advertising: false, analytics: false });

export type TcData = {
  listenerId?: number;
  cmpStatus?: string;
  eventStatus?: string;
  gdprApplies?: boolean;
  tcString?: string;
  purpose?: { consents?: Record<number, boolean> };
  vendor?: { consents?: Record<number, boolean> };
};
export type GoogleConsentValues = {
  adStoragePurposeConsentStatus?: number;
  adUserDataPurposeConsentStatus?: number;
  adPersonalizationPurposeConsentStatus?: number;
  analyticsStoragePurposeConsentStatus?: number;
};

// Conservative launch model: explicit grants only. NOT_CONFIGURED and
// NOT_APPLICABLE are not treated as permission. Other regions/GPP need review.
export function consentFromGoogle(tc: TcData | null, values: GoogleConsentValues | null, apiReady: boolean): ConsentState {
  const settled = !!tc && tc.cmpStatus === "loaded" &&
    (tc.eventStatus === "tcloaded" || tc.eventStatus === "useractioncomplete");
  const advertising = apiReady && settled && tc.gdprApplies === true && !!tc.tcString &&
    tc.vendor?.consents?.[755] === true && [1, 3, 4].every(id => tc.purpose?.consents?.[id] === true) &&
    values?.adStoragePurposeConsentStatus === 1 && values?.adUserDataPurposeConsentStatus === 1 &&
    values?.adPersonalizationPurposeConsentStatus === 1;
  return {
    apiReady,
    advertising,
    analytics: apiReady && settled && values?.analyticsStoragePurposeConsentStatus === 1
  };
}
