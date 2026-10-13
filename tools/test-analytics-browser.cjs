/* Isolated production-build browser tests. Every Google collection request is intercepted. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const origin = process.env.TEST_ORIGIN || 'http://localhost:3187';
const tag = fs.readFileSync(process.env.GA_TAG_FIXTURE, 'utf8');
const output = process.env.TEST_OUTPUT || path.resolve('analytics-browser-results');
fs.mkdirSync(output, { recursive: true });
const key = 'presda.analytics-consent.v1';
const copy = {
  en: ['Analytics preferences', 'Accept analytics', 'Reject analytics'],
  fr: ['Préférences statistiques', 'Accepter les statistiques', 'Refuser les statistiques'],
  ar: ['تفضيلات التحليلات', 'قبول التحليلات', 'رفض التحليلات'],
  es: ['Preferencias de analítica', 'Aceptar analítica', 'Rechazar analítica']
};
const results = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function setup(browser, options = {}, init) {
  const context = await browser.newContext(options);
  if (init) await context.addInitScript(init);
  const requests = [], errors = [];
  await context.route('**/*', async route => {
    const req = route.request(), url = new URL(req.url());
    if (url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js') {
      requests.push({ type: 'loader', url: req.url() });
      return route.fulfill({ status: 200, contentType: 'application/javascript', body: tag });
    }
    if (/google-analytics\.com$|analytics\.google\.com$/.test(url.hostname)) {
      const body = req.postData();
      for (const line of body ? body.split(/\r?\n/) : ['']) {
        const params = new URLSearchParams(url.search);
        for (const [k, v] of new URLSearchParams(line)) params.set(k, v);
        requests.push({ type: 'collection', url: req.url(), tid: params.get('tid'), event: params.get('en'), location: params.get('dl'), body: line });
      }
      return route.fulfill({ status: 204, body: '' }); // Local response only; never send to the real property.
    }
    if (url.origin !== origin) return route.abort();
    return route.continue();
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  return { context, page, requests, errors };
}
async function initialized(page) {
  await page.waitForFunction(() => window.presdaAnalytics?.initialized);
}
async function commandCount(page) {
  return page.evaluate(() => window.dataLayer.filter(args => args[0] === 'config').length);
}
async function withdraw(page, locale) {
  await Promise.all([
    page.waitForEvent('framenavigated', { predicate: frame => frame === page.mainFrame() }),
    page.getByRole('button', { name: copy[locale][2], exact: true }).click()
  ]);
  await initialized(page);
}
function views(requests) { return requests.filter(r => r.type === 'collection' && r.event === 'page_view'); }
async function waitView(requests, count) {
  const until = Date.now() + 12000;
  while (views(requests).length < count && Date.now() < until) await sleep(100);
  assert.equal(views(requests).length, count, JSON.stringify(requests));
}
async function categoryNavigation(page, locale) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const link = page.locator(`a[href^="${prefix}/category/"]:visible`).first();
  const href = await link.getAttribute('href');
  await link.click();
  await page.waitForURL(origin + href);
  return href;
}
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const locale of process.env.TEST_SCENARIOS ? [] : ['en', 'fr', 'ar', 'es']) for (const device of ['desktop', 'mobile']) {
      const { context, page, requests, errors } = await setup(browser, device === 'mobile'
        ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36' }
        : { viewport: { width: 1365, height: 900 } });
      const home = locale === 'en' ? '/' : `/${locale}/`;
      await page.goto(origin + home); await initialized(page);
      await page.locator('[data-analytics-consent]').waitFor({ state: 'visible' });
      assert.equal(await page.locator('html').getAttribute('lang'), locale);
      assert.equal(await page.locator('html').getAttribute('dir'), locale === 'ar' ? 'rtl' : 'ltr');
      assert.equal(requests.length, 0, 'No Google requests before consent');
      assert.equal(await page.locator('body').evaluate(el => el.scrollWidth <= innerWidth), true, 'No horizontal overflow');
      await page.screenshot({ path: path.join(output, `${locale}-${device}.png`) });
      await page.getByRole('button', { name: copy[locale][2], exact: true }).click();
      assert.equal(await page.evaluate(k => JSON.parse(localStorage.getItem(k)).choice, key), 'rejected');
      await page.reload(); await initialized(page);
      assert.equal(await page.locator('[data-analytics-consent]').count(), 0);
      assert.equal(requests.length, 0, 'Persisted rejection makes no Google requests');
      await page.getByRole('button', { name: copy[locale][0], exact: true }).click();
      await page.getByRole('button', { name: copy[locale][1], exact: true }).click();
      await waitView(requests, 1);
      assert.equal(requests.filter(r => r.type === 'loader').length, 1);
      assert.equal(await commandCount(page), 1);
      const documentToken = await page.evaluate(() => window.testDocumentToken = 'same-document');
      await categoryNavigation(page, locale); await waitView(requests, 2);
      assert.equal(await page.evaluate(() => window.testDocumentToken), documentToken, 'Navigation is SPA');
      assert.equal(await commandCount(page), 1);
      const prefix = locale === 'en' ? '' : `/${locale}`;
      const articleLink = page.locator(`a[href^="${prefix}/articles/"]:not([href="${prefix}/articles/"]):not([tabindex="-1"]):visible`).first();
      const articleHref = await articleLink.getAttribute('href');
      await articleLink.click(); await page.waitForURL(origin + articleHref); await waitView(requests, 3);
      assert.equal(await page.evaluate(() => window.testDocumentToken), documentToken, 'Article navigation is SPA');
      assert.equal(await commandCount(page), 1);
      await page.getByRole('button', { name: copy[locale][0], exact: true }).click();
      await withdraw(page, locale);
      assert.equal(await page.evaluate(() => window['ga-disable-G-9TNHCVQTTP']), true);
      assert.equal((await context.cookies()).filter(c => c.name === '_ga' || c.name === '_ga_9TNHCVQTTP').length, 0, 'GA cookies removed after withdrawal');
      await page.goto(origin + home); await initialized(page); await sleep(400);
      assert.equal(views(requests).length, 3, 'Withdrawal/rejected reload adds no pageviews');
      await page.getByRole('button', { name: copy[locale][0], exact: true }).click();
      await page.getByRole('button', { name: copy[locale][1], exact: true }).click();
      await waitView(requests, 4);
      await page.reload(); await initialized(page); await waitView(requests, 5);
      assert.equal(await page.locator('[data-analytics-consent]').count(), 0, 'Acceptance persists');
      assert.equal(await commandCount(page), 1);
      assert.ok(views(requests).every(r => r.tid === 'G-9TNHCVQTTP'));
      assert.equal(await page.locator('script[src*="adsbygoogle"],script[src*="fundingchoices"]').count(), 0);
      assert.deepEqual(errors, []);
      results.push({ locale, device, status: 'PASS', pageViews: views(requests), checks: 'deny, reject, persistence, accept, SPA, withdraw, reload, one tracker, no ads, RTL/viewport, no JS errors' });
      await context.close(); console.log(`PASS ${locale} ${device}`);
    }
    for (const scenario of ['expired', 'malformed', 'gpc', 'dnt', 'storage-failure', 'cross-tab', 'regrant', 'expiry-on-focus', 'withdrawn-spa', 'locale-switch']
      .filter(name => !process.env.TEST_SCENARIOS || process.env.TEST_SCENARIOS.split(',').includes(name))) {
      const init = scenario === 'gpc' ? () => Object.defineProperty(navigator, 'globalPrivacyControl', { value: true })
        : scenario === 'dnt' ? () => Object.defineProperty(navigator, 'doNotTrack', { value: '1' })
        : scenario === 'storage-failure' ? () => { Storage.prototype.getItem = Storage.prototype.setItem = () => { throw new DOMException('blocked', 'SecurityError'); }; }
        : scenario === 'expired' ? () => localStorage.setItem('presda.analytics-consent.v1', JSON.stringify({ version: 1, choice: 'accepted', savedAt: Date.now() - 181 * 86400000 }))
        : scenario === 'malformed' ? () => localStorage.setItem('presda.analytics-consent.v1', '{broken') : undefined;
      const { context, page, requests } = await setup(browser, {}, init);
      await page.goto(origin + '/'); await initialized(page);
      assert.equal(requests.length, 0);
      if (['gpc', 'dnt'].includes(scenario)) {
        await page.getByRole('button', { name: copy.en[0], exact: true }).click();
        assert.equal(await page.getByRole('button', { name: copy.en[1], exact: true }).isDisabled(), true);
      } else if (['storage-failure', 'cross-tab', 'regrant', 'expiry-on-focus', 'withdrawn-spa', 'locale-switch'].includes(scenario)) {
        await page.getByRole('button', { name: copy.en[1], exact: true }).click(); await waitView(requests, 1);
        if (scenario === 'storage-failure') {
          assert.ok(await page.getByRole('status').innerText());
          await withdraw(page, 'en');
          assert.equal(await page.evaluate(() => window['ga-disable-G-9TNHCVQTTP']), true);
        } else if (scenario === 'cross-tab') {
          const second = await context.newPage(); await second.goto(origin + '/'); await initialized(second);
          await second.getByRole('button', { name: copy.en[0], exact: true }).click();
          await Promise.all([
            page.waitForEvent('framenavigated', { predicate: frame => frame === page.mainFrame() }),
            withdraw(second, 'en')
          ]);
          await initialized(page);
          await page.waitForFunction(() => window['ga-disable-G-9TNHCVQTTP'] === true);
        } else if (scenario === 'locale-switch') {
          let count = 1;
          for (const locale of ['fr', 'ar', 'es']) {
            await page.goto(origin + `/${locale}/`); await initialized(page); await waitView(requests, ++count);
            assert.equal(await page.locator('[data-analytics-consent]').count(), 0);
            assert.equal(await commandCount(page), 1);
            assert.equal(await page.evaluate(k => JSON.parse(localStorage.getItem(k)).choice, key), 'accepted');
          }
        } else if (scenario === 'withdrawn-spa') {
          const before = requests.filter(r => r.type === 'collection').length;
          await page.getByRole('button', { name: copy.en[0], exact: true }).click();
          await withdraw(page, 'en');
          await categoryNavigation(page, 'en'); await sleep(6000);
          assert.equal(requests.filter(r => r.type === 'collection').length, before, 'No collection after withdrawal and denied SPA navigation: ' + JSON.stringify(requests));
          assert.equal(await commandCount(page), 0, 'Withdrawn document has no tracker configuration');
        } else if (scenario === 'expiry-on-focus') {
          await Promise.all([page.waitForEvent('framenavigated', { predicate: frame => frame === page.mainFrame() }), page.evaluate(k => {
            localStorage.setItem(k, JSON.stringify({ version: 1, choice: 'accepted', savedAt: Date.now() - 181 * 86400000 }));
            window.dispatchEvent(new Event('focus'));
          }, key)]);
          await initialized(page);
          await page.waitForFunction(() => window['ga-disable-G-9TNHCVQTTP'] === true);
          await page.locator('[data-analytics-consent]').waitFor({ state: 'visible' });
        } else {
          await page.getByRole('button', { name: copy.en[0], exact: true }).click();
          await withdraw(page, 'en');
          await page.getByRole('button', { name: copy.en[0], exact: true }).click();
          await page.getByRole('button', { name: copy.en[1], exact: true }).click();
          await waitView(requests, 2);
          await categoryNavigation(page, 'en'); await waitView(requests, 3);
          assert.equal(await commandCount(page), 1); assert.equal(requests.filter(r => r.type === 'loader').length, 2, 'One loader in each consented document');
        }
      } else await page.locator('[data-analytics-consent]').waitFor({ state: 'visible' });
      results.push({ scenario, status: 'PASS' }); await context.close(); console.log(`PASS ${scenario}`);
    }
  } finally {
    for (const context of browser.contexts()) for (const page of context.pages()) {
      fs.writeFileSync(path.join(output, 'last-page-debug.json'), JSON.stringify(await page.evaluate(() => ({
        url: location.href, history: history.pushState.toString(),
        dataLayer: window.dataLayer.map(args => args.event ? args : Array.from(args))
      })), null, 2));
    }
    await browser.close();
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ origin, collectionIntercepted: true, results }, null, 2));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
