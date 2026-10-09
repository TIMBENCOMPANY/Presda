import account from "../../config/adsense-account.json";
import { parseAdSenseConfig } from "./adsenseConfig";

// Public account configuration only. Release lock takes priority over environment flags.
// Account verification must never implicitly activate serving or a consent message.
export function getAdSenseAccountConfig(env: Record<string, string | undefined>) {
  return parseAdSenseConfig({
    ...env,
    ADSENSE_CLIENT_ID: env.ADSENSE_CLIENT_ID || account.clientId,
    ...(account.servingEnabled ? {} : {
      ADSENSE_ENABLED: "false",
      ADSENSE_LAUNCH_APPROVED: "false",
      ADSENSE_MANUAL_SLOT_ID: "",
      GOOGLE_CMP_ENABLED: "false",
      GOOGLE_CMP_SCRIPT_URL: "",
      ADSENSE_MONITORING_ENABLED: "false"
    })
  });
}
