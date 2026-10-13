/* Offline tests: never send events to Google. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const code = ts.transpileModule(fs.readFileSync('src/lib/analyticsConsent.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;
function environment(signal = {}) {
  const scripts = [], deleted = [];
  const document = { getElementById: id => scripts.find(s => s.id === id), createElement: () => ({}), head: { appendChild: s => scripts.push(s) } };
  Object.defineProperty(document, 'cookie', { get: () => '_ga=example; _ga_9TNHCVQTTP=example; essential=keep', set: value => deleted.push(value) });
  const context = { exports: {}, window: {}, navigator: signal, document, location: { hostname: 'presda.com' } };
  vm.runInNewContext(code, context);
  return { ...context, scripts, deleted, api: context.exports, commands: () => Array.from(context.window.dataLayer, args => Array.from(args)) };
}
let count = 0;
function test(name, fn) { fn(); count++; console.log(`PASS ${name}`); }
const api = environment().api;
test('versioned choices accept and reject, with strict expiry and future timestamp validation', () => {
  const now = Date.now();
  for (const choice of ['accepted', 'rejected']) assert.equal(api.parseAnalyticsPreference(JSON.stringify({ version: 1, choice, savedAt: now }), now).choice, choice);
  for (const raw of [null, 'broken', '{}', JSON.stringify({ version: 2, choice: 'accepted', savedAt: now }), JSON.stringify({ version: 1, choice: 'yes', savedAt: now }), JSON.stringify({ version: 1, choice: 'accepted', savedAt: String(now) }), JSON.stringify({ version: 1, choice: 'accepted', savedAt: now + 1 }), JSON.stringify({ version: 1, choice: 'accepted', savedAt: now - api.ANALYTICS_PREFERENCE_AGE })]) assert.equal(api.parseAnalyticsPreference(raw, now), null);
});
test('unknown/rejected consent does not load Google and defaults precede all updates', () => {
  const env = environment(); env.api.applyAnalyticsConsent(false, true);
  assert.equal(env.scripts.length, 0); assert.equal(env.window['ga-disable-G-9TNHCVQTTP'], true);
  assert.deepEqual(env.commands().map(c => c.slice(0, 2)), [['consent', 'default'], ['consent', 'update']]);
});
test('acceptance loads/configures one tracker even after repeat initialization and regrant', () => {
  const env = environment();
  for (const grant of [false, true, true, false, true]) env.api.applyAnalyticsConsent(grant, true);
  assert.equal(env.scripts.length, 1);
  assert.equal(env.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-9TNHCVQTTP');
  assert.equal(env.commands().filter(c => c[0] === 'config').length, 1);
  assert.equal(env.commands().filter(c => c[0] === 'js').length, 1);
  assert.equal(env.commands().filter(c => c[0] === 'event').length, 0);
  for (const c of env.commands().filter(c => c[0] === 'consent')) for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization']) assert.equal(c[2][key], 'denied');
});
test('withdrawal immediately disables GA and deletes only GA cookies including parent domain', () => {
  const env = environment(); env.api.applyAnalyticsConsent(true, true); assert.equal(env.api.applyAnalyticsConsent(false, true), true);
  assert.equal(env.window['ga-disable-G-9TNHCVQTTP'], true);
  assert.ok(env.deleted.some(c => c.includes('Domain=.presda.com')));
  assert.ok(env.deleted.every(c => /^_ga(?:_9TNHCVQTTP)?=/.test(c)));
  assert.equal(env.api.applyAnalyticsConsent(false, true), false, 'Repeated denial does not request another refresh');
});
test('GPC and Do Not Track override even a saved acceptance', () => {
  for (const signal of [{ globalPrivacyControl: true }, { doNotTrack: '1' }]) {
    const env = environment(signal); env.api.applyAnalyticsConsent(true, true);
    assert.equal(env.scripts.length, 0); assert.equal(env.window['ga-disable-G-9TNHCVQTTP'], true);
  }
});
test('development never loads the production tracker', () => {
  const env = environment(); env.api.applyAnalyticsConsent(true, false); assert.equal(env.scripts.length, 0);
});
console.log(`${count} analytics consent tests passed`);
