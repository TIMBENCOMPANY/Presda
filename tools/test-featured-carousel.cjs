const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const React = require('react');
let runtime;
// Exercise the component's real effects and event handlers with a deterministic clock.
React.useState = initial => {
  const i = runtime.cursor++;
  if (!(i in runtime.hooks)) runtime.hooks[i] = initial;
  return [runtime.hooks[i], value => {
    const next = typeof value === 'function' ? value(runtime.hooks[i]) : value;
    if (!Object.is(next, runtime.hooks[i])) { runtime.hooks[i] = next; runtime.dirty = true; }
  }];
};
React.useRef = initial => {
  const i = runtime.cursor++;
  return runtime.hooks[i] ?? (runtime.hooks[i] = { current: initial });
};
React.useEffect = (effect, deps) => {
  const i = runtime.cursor++, previous = runtime.hooks[i];
  if (!previous || deps.some((value, index) => !Object.is(value, previous.deps[index]))) {
    runtime.effects.push(() => { previous?.cleanup?.(); runtime.hooks[i] = { deps, cleanup: effect() }; });
  }
};
const { FeaturedCarousel } = require('../src/components/FeaturedCarousel.tsx');
const { getPublishedArticles } = require('../src/data/articles.ts');
const source = fs.readFileSync('src/app/(english)/page.tsx', 'utf8');
const slugs = [...source.match(/const featuredHeroSlugs = \[([\s\S]*?)\] as const/)[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);
const published = getPublishedArticles();
const slides = slugs.map(slug => published.find(a => a.slug === slug));
assert.equal(slides.length, 12); assert(slides.every(Boolean));
assert.equal(new Set(slugs).size, 12);
assert.equal(new Set(slides.map(a => a.category)).size, 9);
slides.forEach((a, i) => assert.notEqual(a.category, slides[(i + 1) % slides.length].category));
assert.equal(slides.filter(a => a.category === 'History').length, 1);

function nodes(element) {
  if (!element || typeof element !== 'object') return [];
  return [element, ...React.Children.toArray(element.props?.children).flatMap(nodes)];
}
function create(variant = 'home', reduced = false) {
  runtime = { hooks: [], cursor: 0, effects: [], dirty: true, timers: new Map(), now: 0, nextTimer: 0 };
  global.window = {
    setTimeout(callback, delay) { const id = ++runtime.nextTimer; runtime.timers.set(id, { at: runtime.now + delay, callback }); return id; },
    clearTimeout(id) { runtime.timers.delete(id); },
    matchMedia: () => ({ matches: reduced, addEventListener() {}, removeEventListener() {} })
  };
  global.document = { hidden: false, addEventListener() {}, removeEventListener() {} };
  const props = { slides, sideStories: [], variant };
  function render() {
    let limit = 0;
    do {
      assert(++limit < 50, 'No render loop');
      runtime.cursor = 0; runtime.dirty = false; runtime.effects = [];
      runtime.tree = FeaturedCarousel(props);
      runtime.effects.forEach(effect => effect());
    } while (runtime.dirty);
  }
  const all = () => nodes(runtime.tree);
  const carousel = () => all().find(e => e.props?.['aria-roledescription'] === 'carousel');
  const counter = () => all().find(e => e.props?.className?.includes('category-image-counter')).props.children.join('');
  const images = () => all().filter(e => e.props?.src && e.props?.onLoad);
  const load = () => { images().forEach(e => e.props.onLoad()); render(); };
  const event = (name, args = {}) => { carousel().props[name](args); render(); };
  const move = name => { all().find(e => e.type === 'button' && e.props['aria-label'] === name).props.onClick(); render(); };
  function advance(ms) {
    const target = runtime.now + ms;
    while (true) {
      const next = [...runtime.timers].filter(([, t]) => t.at <= target).sort((a, b) => a[1].at - b[1].at)[0];
      if (!next) break;
      runtime.now = next[1].at; runtime.timers.delete(next[0]); next[1].callback(); render();
    }
    runtime.now = target;
  }
  render();
  return { render, all, counter, images, load, event, move, advance };
}

let h = create();
assert.equal(h.images().length, 3, 'Only current and adjacent images mount initially');
assert(!h.all().some(e => e.props?.className?.includes('category-featured-controls')), 'Home has no footer on any viewport');
h.move('Next featured article');
assert.equal(h.counter(), '01 / 12', 'Keep current image visible while next image is loading');
h.load(); assert.equal(h.counter(), '02 / 12');
h.load(); h.advance(5499); assert.equal(h.counter(), '02 / 12');
h.advance(1); assert.equal(h.counter(), '03 / 12'); h.load();
h.event('onPointerEnter', { pointerType: 'mouse' }); h.advance(11000); assert.equal(h.counter(), '03 / 12');
h.event('onPointerLeave'); h.advance(5500); assert.equal(h.counter(), '04 / 12'); h.load();
h.event('onPointerDown'); h.advance(11000); assert.equal(h.counter(), '04 / 12');
h.event('onPointerUp'); h.advance(5500); assert.equal(h.counter(), '05 / 12'); h.load();
h.event('onFocusCapture', { target: { matches: () => true } }); h.advance(11000); assert.equal(h.counter(), '05 / 12');
h.event('onBlurCapture', { currentTarget: { contains: () => false }, relatedTarget: null });
h.advance(5500); assert.equal(h.counter(), '06 / 12'); h.load();
h.event('onTouchStart', { touches: [{ clientX: 250, clientY: 150 }] });
h.event('onTouchEnd', { changedTouches: [{ clientX: 100, clientY: 155 }] });
assert.equal(h.counter(), '07 / 12');
let prevented = false;
h.event('onClickCapture', { preventDefault: () => { prevented = true; }, stopPropagation() {} });
assert(prevented, 'A swipe must not accidentally open the article');
h.load(); h.advance(5500); assert.equal(h.counter(), '08 / 12'); h.load();
h.event('onTouchStart', { touches: [{ clientX: 100, clientY: 150 }] });
h.event('onTouchEnd', { changedTouches: [{ clientX: 105, clientY: 300 }] });
assert.equal(h.counter(), '08 / 12', 'Vertical scrolling is not a slide gesture');
for (let i = 0; i < 4; i++) { h.move('Next featured article'); h.load(); }
assert.equal(h.counter(), '12 / 12'); h.load(); h.advance(5500); assert.equal(h.counter(), '01 / 12');
assert.equal(h.all().filter(e => e.type === 'h1').length, 1, 'Exactly one homepage H1');
h = create('home', true); h.load(); h.advance(20000); assert.equal(h.counter(), '01 / 12', 'Honor reduced motion');
h = create('category'); h.advance(4500); assert.equal(h.counter(), '02 / 12');
h.move('Next featured article'); h.advance(10000); assert.equal(h.counter(), '03 / 12', 'Category manual-pause behavior is unchanged');
assert(h.all().some(e => e.props?.className?.includes('category-featured-controls')));
console.log('PASS: 12 stories / 9 categories, adjacent preloading, image readiness, 5.5s timing, interaction pause/resume, swipe/click suppression, 12-to-01 loop, H1, reduced motion and category behavior');
