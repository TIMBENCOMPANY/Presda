# AdSense Phase 1 design

Prepare only. No deployment, account-setting changes, live ads or page placements.

## Acceptance criteria

- No AdSense/CMP network requests or ad markup with the default environment.
- Validated server configuration, one global provider, no production IDs in new code.
- Empty reviewed placement map and multiple launch gates block accidental activation.
- Google Privacy & messaging owns consent UI/TCF; missing, unknown, pending or rejected consent never grants permissions.
- GA4 loads only after an explicit analytics grant. No invented consent cookie.
- Reserved manual 300x250 component has route, region, ancestor and one-request protections; it is not mounted in editorial layouts.
- `/ads.txt` returns text, no fake publisher. It can be populated independently from ad serving.
- Existing static page generation, dark design, navigation and heroes stay intact.
- CSP preparation is opt-in and narrow. Google's supported nonce strategy and CMP/account verification remain documented launch gates.
- No external telemetry endpoint or new analytics library; optional local events/performance observers only.

## Frontend

PublicationDocument renders a shared AdSenseProvider around the existing shell. It owns the Google CMP adapter, consent-gated GA4 and the future single loader. Footer displays a reopening button only after the actual Google API is ready. AdSlot requires an explicitly approved path/section and an article-body region. Neither AdSlot nor that region is added to production layouts in Phase 1.

## Backend/configuration

Environment values are parsed on the server and passed as a serializable configuration. Exact booleans and ID/URL formats are validated. The ads.txt route emits the configured publisher's seller line or comment-only text without authorizing an invented seller. No secrets, geolocation or audience profiling are introduced.

## Security

Fail closed for absent/errored consent and unreviewed placements. No TCF string is persisted or sent to local monitoring. Google APIs, not a custom banner, provide choices. CSP retains unrelated controls and default permissions; an opt-in preparation profile adds specific Google domains. It does not claim to replace Google's supported nonce-based policy. Nonce/static-cache integration is deferred to a separately reviewed activation change.

## Verification

Test configuration and malformed IDs, blank/valid ads.txt, denied/pending/granted/withdrawn consent, structural forbidden areas, duplicate loading/slot requests, and disabled server output. Typecheck and build the existing production pipeline. Inspect local mobile/RTL pages; do not request or click real ads. Record account/CMP/CSP and field-performance gaps explicitly.
