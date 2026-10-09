# AdSense Phase 1: disabled infrastructure

No deployment or live advertising activation is included. The editorial design and mobile layouts are preserved. No production placements are registered. This document describes preparation, not completed account approval or privacy compliance.

## Configuration

Use environment configuration, never hardcoded production publisher identifiers. AdSense client IDs are public identifiers, not secrets; account credentials must never be shipped to clients.

| Variable | Default / intended value |
| --- | --- |
| `ADSENSE_ENABLED` | `false`, serving kill switch |
| `ADSENSE_CLIENT_ID` | Empty; real `ca-pub-` followed by 16 digits |
| `ADSENSE_MANUAL_SLOT_ID` | Empty; numeric manual unit ID from the account |
| `ADSENSE_LAUNCH_APPROVED` | `false`, separate deliberate release gate |
| `ADSENSE_CSP_VALIDATED` | `false`, only acknowledge after real browser validation |
| `ADSENSE_CSP_PREPARED` | `false`, opt-in Google domain policy permissions |
| `GOOGLE_CMP_ENABLED` | `false` |
| `GOOGLE_CMP_SCRIPT_URL` | Empty; exact account-generated HTTPS URL on `fundingchoicesmessages.google.com/i/pub-...`, matching client ID |
| `ADSENSE_MONITORING_ENABLED` | `false`, local opt-in diagnostic events |

The global provider belongs in `PublicationDocument.tsx`, shared by English and localized layouts. Every serving gate and reviewed placement must pass. An empty reviewed article placement map intentionally blocks every ad even if environment flags are accidentally enabled. Never use environment changes alone as placement approval.

Editorial routes retain static rendering, so their provider configuration is captured at build time. Rebuild and restart/redeploy to change serving, CMP or monitoring flags; these are not an immediate runtime kill switch for cached HTML. Use account-side serving controls for an urgent stop and then release a disabled build. CSP flags are also deployment configuration. The dynamic `/ads.txt` route reads its server environment at request time.

## Manual AdSense account tasks

1. Establish the real publisher account, add and verify PRESDA, and obtain site approval. Copy the real client identifier from the account.
2. In Privacy & messaging, configure Google's certified CMP using its generated integration instructions. Publish and test EEA/UK/Swiss consent messages, language coverage including Arabic RTL, vendor/purpose choices, rejection, revocation and a working persistent privacy-options control.
3. Confirm the current certification and supported TCF version at setup time. Google certification does not certify compliance with all applicable law. Assess relevant US-state opt-out/GPP obligations from actual audience and entity information.
4. Reconcile analytics consent explicitly. TCF advertising consent is not itself analytics consent. Google Analytics remains unloaded until a Google CMP analytics grant is received; it remains unloaded while the CMP is off. Confirm this behavior, storage and deletion on withdrawal before release.
5. Select and document actual advertising vendors and privacy links. Review operator/controller legal name, address, applicable legal bases, international transfer arrangements, request handling and exact retention periods for analytics, email/contact records, logs and poll records. These facts are not inferable from the repository and must not be invented.
6. Create one manual display unit for reviewed longer articles. Keep Auto Ads, anchor, side rail, vignette, multiplex and ad intents OFF in the dashboard. The AdSense script can honor account-side automatic settings; local flags cannot guarantee those dashboard settings.
7. Verify ads.txt, CSP and performance before any separately authorized deployment or launch.

## ads.txt

The implementation is `src/app/ads.txt/route.ts`, served at `/ads.txt` as `text/plain`. Do not add a conflicting `public/ads.txt` file. Without a valid configured client ID, it returns only a comment, not a fabricated seller record.

Once the real account identifier is supplied, the seller line is:

```text
google.com, pub-<REAL_16_DIGIT_PUBLISHER_ID>, DIRECT, f08c47fec0942fa0
```

Use `pub-`, not `ca-pub-`, in this file. Replace the placeholder with the real account identifier. Verify HTTPS 200, plain text, the exact account-provided record and AdSense's seller-file status. Seller authorization is independent of the serving flags and does not enable ads.

## Consent and privacy

Use Google Privacy & messaging rather than a homemade banner. The Google API callback queue and TCF event listener prepare integration; missing, unknown, failed or rejected consent remains denied. The footer privacy control should appear only when the real CMP API is ready. Do not present a non-working withdrawal control or describe an unpublished CMP as active.

This adapter currently permits advertising only when `gdprApplies` is explicitly true, a settled TCF string grants Google vendor 755 and purposes 1, 3 and 4, and Google's advertising storage/user-data/personalization values all explicitly grant consent. Non-personalized, limited and non-TCF regional serving are intentionally unsupported in Phase 1. Do not treat `NOT_APPLICABLE` or `NOT_CONFIGURED` as permission; review a regional consent/GPP strategy before expanding coverage.

The updated disclosures distinguish present integrations and the one-year `presda_reader_poll` identifier from future advertising. Google/partner cookies can use earlier visits to PRESDA and other sites for personalization. Non-personalized advertising can still involve storage that requires consent. Browser settings and Google Ads Settings do not replace a site consent platform.

Before launch, reconcile English and localized legal content with the final configuration and reviewed legal facts. Never fabricate retention durations or operator identity.

## CSP and static caching launch gate

Default headers remain unchanged until domain preparation is explicitly enabled. Permit only reviewed Google origins in relevant script, connection, image and frame directives; never add general `https:`, `*`, or broad script execution relaxations to solve console errors. Preserve existing unrelated security headers.

Google documents a supported strict nonce-based CSP approach. A prepared domain allowlist is not proof that AdSense will work with the existing static/cached HTML policy. Launch requires an architecture decision: request-scoped nonces must match both response headers and HTML and cannot be reused in shared cached documents. Evaluate dynamic rendering/cache implications and measure LCP before changing that architecture. Validate the real account-generated CMP and AdSense requests in a production-equivalent browser, inspecting CSP reports. Do not set `ADSENSE_CSP_VALIDATED=true` merely because a build passes.

## Placement and CLS safeguards

The reusable manual unit must reserve a fixed 300 by 250 creative area plus label/spacing, request near visibility and skip undersized mobile reading columns. Keep reserved space after no-fill or failed requests; do not collapse a visible slot. Do not stretch, crop, overlay or alter a Google creative. Do not automatically refresh. Render no live unit until an exact article and reviewed section boundary are registered.

Always exclude header/navigation, hero, breaking/news surfaces, buttons/CTAs, galleries, article title/meta, opening copy, interactive graphics, sources/TOC/share controls, polls, FAQ controls, newsletter and legal/utility/error pages. Do not place inside a clickable parent. Validate long desktop article sidebar floats and mobile touch separation. Label the container `Advertisements`.

## Monitoring and release checks

Opt-in local events support CLS, LCP and ad loading diagnostics without adding a third-party telemetry collector. Do not forward these events, URLs with queries, consent strings, email or account data to analytics without a reviewed measurement/consent design.

Listen with `window.addEventListener('presda:ad-diagnostic', event => console.log(event.detail))` in a development diagnostic session. Event names are `CLS` (unitless), `LCP` (milliseconds), `cmp-error`, `consent-denied`, `loader-ready`, `loader-error`, `slot-requested` and `slot-error`. A slot request is not evidence of a filled or viewed ad. No-fill, final page-lifecycle vitals and INP need separate release instrumentation and real-user validation.

Record mobile baseline and ad-enabled comparisons for p75 LCP <= 2.5 seconds, INP <= 200 milliseconds and CLS <= 0.1; use CLS <= 0.05 as an internal aim. Observe slot request/load/failure/no-fill, consent failures, network timeouts and duplicate initialization. Compare reading completion, newsletter conversion and revenue over 2 to 4 weeks after an authorized controlled launch. A laboratory test does not establish real-user percentiles.

Test unknown/rejected/accepted/withdrawn consent, blocked scripts, no-fill, slow network, navigation, duplicate renders, mobile narrow widths and RTL. Confirm zero ad network requests with default configuration and no slot registration. Keep a quick serving kill switch.

## Official references

- [Google required privacy disclosures](https://support.google.com/adsense/answer/1348695?hl=en)
- [Google certified CMP requirements and list](https://support.google.com/adsense/answer/13554116?hl=en)
- [Google CSP support](https://support.google.com/adsense/answer/16283098?hl=en)
- [Google ads.txt guidance](https://support.google.com/adsense/answer/12171612?hl=en)
- [Google placement guidance](https://support.google.com/adsense/answer/1282097?hl=en)
- [Auto Ads configuration](https://support.google.com/adsense/answer/9305577?hl=en)
- [Web Vitals thresholds](https://web.dev/articles/vitals)
