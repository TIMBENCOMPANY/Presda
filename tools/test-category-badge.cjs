require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { CategoryBadge } = require('../src/components/CategoryBadge.tsx');
const spec = require('../src/lib/design-system/category-badge.json');
const { localizedCategories } = require('../src/lib/i18n/messages.ts');
for (const locale of ['en', 'fr', 'ar', 'es']) for (const label of Object.values(localizedCategories[locale])) {
  const html = renderToStaticMarkup(React.createElement(CategoryBadge, null, label));
  assert.equal((html.match(/data-category-badge/g) || []).length, 1);
  assert(html.includes('var(--home-red-deep, #c40019)'));
  assert(html.includes('color:#ffffff'));
  assert(html.includes(`font-size:var(--category-badge-font-size, ${spec.fontSize}px)`));
  assert(html.includes(`font-weight:${spec.fontWeight}`));
}
const escaped = renderToStaticMarkup(React.createElement(CategoryBadge, null, '<SCIENCE>'));
assert(escaped.includes('&lt;SCIENCE&gt;'));
assert(!escaped.includes('<SCIENCE>'));
const css = fs.readFileSync(require.resolve('../src/app/globals.css'), 'utf8');
assert(css.includes('inset-inline-start: 8px'), 'Overlay follows reading direction');
console.log('PASS: category badge, all categories/locales, unified tokens and escaped labels');
