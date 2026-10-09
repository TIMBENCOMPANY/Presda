/* Offline regression checks. Synthetic account IDs only; no Google requests. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const mod = { exports: {} }; cache.set(filename, mod);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX
  } }).outputText;
  const native = Module.createRequire(filename);
  const requireLocal = name => {
    if (name === 'next/navigation') return { usePathname: () => '/articles/example/' };
    if (name === 'next/script') return { __esModule: true, default: () => { throw Error('Unexpected script in default SSR'); } };
    if (name.endsWith('.css')) return {};
    if (name.startsWith('@/')) return load(`src/${name.slice(2)}.ts${name.includes('components/') ? 'x' : ''}`);
    if (name.startsWith('.')) {
      const base = path.resolve(path.dirname(filename), name);
      return load(path.relative(root, fs.existsSync(`${base}.ts`) ? `${base}.ts` : `${base}.tsx`));
    }
    return native(name);
  };
  new Function('require', 'module', 'exports', code)(requireLocal, mod, mod.exports);
  return mod.exports;
}
let count = 0;
function test(name, fn) { fn(); count++; console.log(`PASS ${name}`); }
const cfg = load('src/lib/adsenseConfig.ts');
const consent = load('src/lib/adConsent.ts');
const policy = load('src/lib/adPlacementPolicy.ts');
const lifecycle = load('src/lib/adSlotLifecycle.ts');
const client = 'ca-pub-1234567890123456';
const full = { ADSENSE_CLIENT_ID: client, ADSENSE_MANUAL_SLOT_ID: '1234567890', GOOGLE_CMP_SCRIPT_URL: 'https://fundingchoicesmessages.google.com/i/pub-1234567890123456?ers=1', GOOGLE_CMP_ENABLED: 'true', ADSENSE_ENABLED: 'true', ADSENSE_LAUNCH_APPROVED: 'true', ADSENSE_CSP_VALIDATED: 'true', ADSENSE_CSP_PREPARED: 'true' };
test('default configuration is disabled', () => assert.equal(cfg.parseAdSenseConfig({}).enabled, false));
test('every launch gate independently prevents activation', () => {
  assert.equal(cfg.parseAdSenseConfig(full).enabled, true);
  for (const key of Object.keys(full)) assert.equal(cfg.parseAdSenseConfig({ ...full, [key]: undefined }).enabled, false, key);
  assert.equal(cfg.parseAdSenseConfig({ ...full, ADSENSE_ENABLED: 'TRUE' }).enabled, false);
});
test('malformed account and slot IDs fail closed', () => {
  for (const value of ['', 'pub-1234567890123456', `${client} `, 'ca-pub-0000000000000000', 'ca-pub-123', '<script>']) assert.equal(cfg.validAdSenseClientId(value), null);
  for (const value of ['0', '0000', '-1', '1x', '123456789012345678901']) assert.equal(cfg.parseAdSenseConfig({ ...full, ADSENSE_MANUAL_SLOT_ID: value }).enabled, false);
});
test('CMP URL is HTTPS account-bound without credentials or alternate host', () => {
  for (const value of ['http://fundingchoicesmessages.google.com/i/pub-1234567890123456', 'https://fundingchoicesmessages.google.com.evil.test/i/pub-1234567890123456', 'https://user:pass@fundingchoicesmessages.google.com/i/pub-1234567890123456', 'https://fundingchoicesmessages.google.com:444/i/pub-1234567890123456', `${full.GOOGLE_CMP_SCRIPT_URL}#x`, 'https://fundingchoicesmessages.google.com/i/pub-9999999999999999']) assert.equal(cfg.validGoogleCmpUrl(value, client), null);
});
test('ads.txt never invents an authorized seller', () => {
  assert.equal(cfg.adSenseSellerText(client), 'google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0\n');
  for (const value of [undefined, '', 'invalid']) assert(!cfg.adSenseSellerText(value).includes('DIRECT'));
});
const tc = { listenerId: 42, cmpStatus: 'loaded', eventStatus: 'tcloaded', gdprApplies: true, tcString: 'synthetic-test-consent', purpose: { consents: { 1: true, 3: true, 4: true } }, vendor: { consents: { 755: true } } };
const values = { adStoragePurposeConsentStatus: 1, adUserDataPurposeConsentStatus: 1, adPersonalizationPurposeConsentStatus: 1, analyticsStoragePurposeConsentStatus: 1 };
test('advertising requires explicit settled TCF and all Google grants', () => {
  assert.equal(consent.consentFromGoogle(tc, values, true).advertising, true);
  for (const key of Object.keys(values).filter(key => key.startsWith('ad'))) for (const status of [undefined, 0, 2, 3, 4]) assert.equal(consent.consentFromGoogle(tc, { ...values, [key]: status }, true).advertising, false);
  for (const id of [1, 3, 4]) assert.equal(consent.consentFromGoogle({ ...tc, purpose: { consents: { ...tc.purpose.consents, [id]: false } } }, values, true).advertising, false);
  for (const patch of [{ gdprApplies: false }, { gdprApplies: undefined }, { tcString: '' }, { cmpStatus: 'error' }, { eventStatus: 'cmpuishown' }, { vendor: { consents: {} } }]) assert.equal(consent.consentFromGoogle({ ...tc, ...patch }, values, true).advertising, false);
  assert.equal(consent.consentFromGoogle(tc, values, false).advertising, false);
  assert.equal(consent.consentFromGoogle(null, null, true).analytics, false);
  assert.equal(consent.consentFromGoogle(null, values, true).analytics, false);
  for (const status of [undefined, 0, 2, 3, 4]) assert.equal(consent.consentFromGoogle(tc, { ...values, analyticsStoragePurposeConsentStatus: status }, true).analytics, false);
  for (const patch of [{ cmpStatus: 'error' }, { eventStatus: 'cmpuishown' }]) assert.equal(consent.consentFromGoogle({ ...tc, ...patch }, values, true).analytics, false);
});
test('CMP callback queue handles grant, revocation, errors and cleanup offline', () => {
  let callback, removed, errors = 0; const states = [];
  global.window = { googlefc: { callbackQueue: [], getGoogleConsentModeValues: () => values, showRevocationMessage() {} }, __tcfapi(command, version, fn, id) { if (command === 'addEventListener') callback = fn; else removed = id; } };
  const cmp = load('src/lib/googleCmp.ts');
  const stop = cmp.subscribeGoogleConsent(state => states.push(state), () => errors++);
  const drain = key => { const queue = window.googlefc.callbackQueue.splice(0); for (const item of queue) item[key]?.(); };
  drain('CONSENT_API_READY'); callback(tc, true); drain('CONSENT_MODE_DATA_READY');
  assert.equal(states.at(-1).advertising, true);
  callback({ ...tc, eventStatus: 'cmpuishown' }, true); assert.equal(states.at(-1).advertising, false);
  callback(tc, false); assert.equal(states.at(-1).advertising, false); assert.equal(errors, 1);
  callback(null, true); assert.equal(states.at(-1).advertising, false); assert.equal(states.at(-1).analytics, false); assert.equal(errors, 2);
  callback({}, true); drain('CONSENT_MODE_DATA_READY'); assert.equal(states.at(-1).advertising, false);
  callback(tc, true); window.googlefc.getGoogleConsentModeValues = () => { throw Error('malformed CMP response'); }; drain('CONSENT_MODE_DATA_READY');
  assert.equal(states.at(-1).advertising, false); assert.equal(states.at(-1).analytics, false); assert.equal(errors, 3);
  stop(); assert.equal(removed, 42); const before = states.length; callback(tc, true); assert.equal(states.length, before);
  delete global.window;
});
test('CMP registration failures remain denied and cleanup tolerates removed API', () => {
  let errors = 0; let latest;
  global.window = { googlefc: { callbackQueue: [], showRevocationMessage() {} }, __tcfapi() { throw Error('unavailable'); } };
  const stop = load('src/lib/googleCmp.ts').subscribeGoogleConsent(state => latest = state, () => errors++);
  window.googlefc.callbackQueue[0].CONSENT_API_READY(); assert.equal(latest.advertising, false); assert.equal(errors, 1); stop(); delete global.window;
});
function element({ safe = true, forbidden = false, width = 300, dataset = {} } = {}) {
  return { dataset, closest: selector => selector === "article [data-presda-ad-region='article-body']" ? (safe ? {} : null) : (forbidden ? {} : null), getBoundingClientRect: () => ({ width }) };
}
test('manual requests refuse unsafe, forbidden, narrow and previously filled elements', () => {
  let pushes = 0; const queue = { push() { pushes++; } };
  for (const options of [{ safe: false }, { forbidden: true }, { width: 299 }, { dataset: { adsbygoogleStatus: 'done' } }]) assert.equal(lifecycle.requestManualAd(element(options), queue), 'skipped');
  assert.equal(pushes, 0);
  const safe = element(); assert.equal(lifecycle.requestManualAd(safe, queue), 'requested'); assert.equal(lifecycle.requestManualAd(safe, queue), 'skipped'); assert.equal(pushes, 1);
  const failed = element(); assert.equal(lifecycle.requestManualAd(failed, { push() { throw Error('blocked'); } }), 'failed'); assert.equal(lifecycle.requestManualAd(failed, queue), 'skipped');
});
test('every published article route remains unapproved', () => {
  const articleSources = fs.readdirSync(path.join(root, 'src/data')).filter(name => name.endsWith('.ts')).map(name => fs.readFileSync(path.join(root, 'src/data', name), 'utf8')).join('\n');
  const slugs = [...articleSources.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map(match => match[1]);
  assert(slugs.length > 100);
  for (const slug of slugs) for (const locale of ['', 'fr/', 'es/', 'ar/']) assert.equal(policy.isReviewedManualPlacement(`/${locale}articles/${slug}/`, 'section-1'), false);
  assert.deepEqual(Object.keys(policy.reviewedManualPlacements), []);
});
test('editorial layouts do not mount ad slots', () => {
  function scan(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? scan(path.join(dir, item.name)) : [path.join(dir, item.name)]); }
  for (const file of scan(path.join(root, 'src')).filter(file => /\.tsx$/.test(file) && !file.endsWith('AdSlot.tsx'))) assert(!/<AdSlot\b/.test(fs.readFileSync(file, 'utf8')), file);
});
test('default SSR emits editorial children without script or ad markup', () => {
  const React = require('react'); const { renderToStaticMarkup } = require('react-dom/server');
  const { AdSenseProvider } = load('src/components/AdSenseProvider.tsx');
  const { AdSlot } = load('src/components/AdSlot.tsx');
  const markup = renderToStaticMarkup(React.createElement(AdSenseProvider, { config: cfg.parseAdSenseConfig({}) }, React.createElement('article', null, 'Editorial', React.createElement(AdSlot, { afterSectionId: 'section-1' }))));
  assert.equal(markup, '<article>Editorial</article>');
});
(async () => {
  const { contentSecurityPolicy } = await import('../config/content-security-policy.mjs');
  test('default CSP keeps advertising networks unavailable', () => { const csp = contentSecurityPolicy(); assert(!/googlesyndication|doubleclick|fundingchoicesmessages/.test(csp)); assert(csp.includes("frame-src 'self'")); });
  test('prepared CSP adds explicit hosts without widening existing wildcards', () => {
    const baseline = contentSecurityPolicy(); const prepared = contentSecurityPolicy({ adsensePrepared: true, cmpPrepared: true });
    for (const directive of ['script-src', 'connect-src', 'frame-src']) {
      const tokens = value => value.split('; ').find(item => item.startsWith(directive)).split(' ').slice(1);
      for (const token of tokens(prepared).filter(token => !tokens(baseline).includes(token))) assert(!token.includes('*') && token.startsWith('https://'), token);
    }
    assert(prepared.includes("object-src 'none'")); assert(prepared.includes("frame-ancestors 'none'"));
  });
  console.log(`AdSense regression checks: ${count} passed; no live network requests.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
