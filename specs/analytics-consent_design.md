# Independent analytics consent

GA4 currently reads analytics consent from an intentionally disabled advertising CMP. Add a first-party, globally opt-in analytics preference without changing advertising configuration, the measurement ID, editorial routes or SEO metadata.

Store a validated, versioned accept/reject preference for 180 days. Unknown, expired and invalid preferences deny collection. Browser privacy signals deny collection. Handle unavailable storage without crashing; disclose session-only choices. Apply withdrawal synchronously, delete GA cookies and synchronize cross-tab withdrawal. Provide equally prominent localized buttons and a permanent footer control, with Arabic RTL inherited from the document.

Keep one GA loader/configuration per document. Default all consent to denied before config; load only after acceptance. Leave enhanced-measurement initial/history pageviews in control; do not introduce manual pageviews. Withdrawal persists denial and refreshes the same URL to unload Google's buffered, previously approved events as well as its listeners. Cross-tab withdrawal and active expiry also unload the tag. Advertising consent always stays denied. Existing Vercel Analytics remains unchanged.

Validation: offline preference/runtime tests, production build and multilingual regressions, then isolated browser tests with Google collection requests intercepted (no test events sent to production). Cover four languages, desktop/mobile, accept/reject, persistence, withdrawal, storage failures, privacy signals, SPA navigation and duplicate initialization. DebugView requires access to the owning GA4 property; currently the signed-in account exposes only provisioning.
