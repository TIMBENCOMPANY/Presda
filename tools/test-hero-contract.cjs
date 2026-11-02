// Run before every build. Editorial batches must reuse the bounded hero frame.
const fs = require('fs');
const assert = require('assert/strict');
const postcss = require('postcss');
const css = fs.readFileSync('src/app/globals.css', 'utf8');
const layout = fs.readFileSync('src/components/ArticleLayout.tsx', 'utf8');
const contract = css.slice(css.indexOf('/* Shared desktop contract'));
assert(contract.startsWith('/* Shared desktop contract'), 'Shared hero contract must exist');
const rules = postcss.parse(contract);
const properties = selector => {
  const result = {};
  rules.walkRules(selector, rule => rule.walkDecls(d => { result[d.prop] = d.value; }));
  return result;
};
const frame = properties('.article-hero');
assert.equal(frame.height, 'var(--hero-frame-height)');
assert(frame['--hero-frame-height'].includes('--hero-viewport-height'), 'Bruno frame must remain viewport-capped');
const bounded = properties('.article-hero.article-hero--full-image');
assert.equal(bounded['max-height'], 'var(--hero-frame-height)');
assert.equal(bounded['aspect-ratio'], 'var(--hero-image-ratio)');
const image = properties('.article-hero.article-hero--full-image .article-hero-image');
assert.equal(image.width, '100%');
assert.equal(image.height, '100%');
assert.equal(image['object-fit'], 'cover');
assert.equal(image.transform, 'none');
// Catch a new batch-specific sizing escape hatch, including appended CSS.
rules.walkRules(rule => {
  assert(!/article-hero--(?!full-image\b)[\w-]+/.test(rule.selector),
    'Use the shared bounded hero contract instead of a batch sizing override: ' + rule.selector);
});
const header = layout.match(/<header\s[\s\S]*?>/)[0];
assert(!header.includes('--uncropped'), 'Uncapped batch heroes must not return');
assert(header.includes('worldBusinessNov02HeroCaptions) ? " article-hero--full-image"'),
  'The latest four articles must reuse the shared frame');
console.log('PASS: bounded Bruno hero contract, no batch sizing overrides');
