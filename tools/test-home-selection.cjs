require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const Module = require('node:module');
const load = Module._load;
Module._load = function(name, ...args) { return name === 'server-only' ? {} : load.call(this, name, ...args); };
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { listingCard } = require('../src/lib/i18n/listing-cards.ts');
const { selectHomeArticles, homeHeroSlugs, homeSideSlugs } = require('../src/lib/homeSelection.ts');
assert.deepEqual(homeHeroSlugs.map(s=>getPublishedArticles().find(a=>a.slug===s)?.id), ['352','361','354','347','330','335','310','259','230','168','374','018']);
assert.deepEqual([...homeSideSlugs], ["giordano-bruno-philosopher-heresy", "moon-landing-conspiracy-apollo-evidence", "area-51-aliens-myth-reality-secret-aircraft"]);
assert.equal(homeHeroSlugs.length, 12);
assert.ok(!homeHeroSlugs.includes("bryan-johnson-blueprint-anti-aging-longevity"));
const articles = getPublishedArticles();
const snapshot = JSON.stringify(articles);
const {execFileSync}=require('node:child_process'),ts=require('typescript'),path=require('node:path');
const oldSource=execFileSync('git',['show','56495690d86f2f8518090c5b4cefa5487da73a88:src/lib/homeSelection.ts'],{encoding:'utf8'});
const oldModule=new Module(path.resolve(__dirname,'../src/lib/homeSelection.ts'),module);oldModule.filename=path.resolve(__dirname,'../src/lib/homeSelection.ts');oldModule.paths=module.paths;oldModule._compile(ts.transpileModule(oldSource,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,oldModule.filename);

const now = new Date('2026-11-01T12:00:00Z');
const slugs = xs => xs.map(a=>a.slug);
for(const locale of ['en','fr','ar','es']) {
 const groups = selectHomeArticles(articles,now,locale,publishedTranslations);
 assert.deepEqual(slugs(groups.featured), [...homeHeroSlugs]);
 const previous=oldModule.exports.selectHomeArticles(articles,now,locale,publishedTranslations);
 for(const key of ['editorialPicks','latest','moreArticles'])assert.deepEqual(groups[key],previous[key],'Other homepage sections unchanged: '+locale+'/'+key);
 assert.deepEqual(slugs(groups.editorialPicks), [...homeSideSlugs]);
 assert.equal(groups.latest.length,15);assert.equal(groups.moreArticles.length,6);
 const all=Object.values(groups).flat();for(const group of Object.values(groups))assert.equal(new Set(slugs(group)).size,group.length);
 const lower=[...groups.latest,...groups.moreArticles];
 for(let i=1;i<lower.length;i++) assert.ok(Date.parse(lower[i-1].date)>=Date.parse(lower[i].date));
 assert.deepEqual(groups,selectHomeArticles([...articles].reverse(),now,locale,publishedTranslations),'Equal-date ordering is independent of catalogue order');
 for(const a of all){const card=listingCard(a,locale);if(locale==='en')assert.equal(card.href,`/articles/${a.slug}/`);else{const t=publishedTranslations.find(t=>t.locale===locale&&t.englishPath===`/articles/${a.slug}/`);assert.equal(card.title,t.title);assert.equal(card.href,t.path);assert.equal(card.coverImage,t.image.src);}}
}
const base={...articles[0],slug:'new-test',date:now.toISOString(),status:'published',draft:false};
const invalid=[{...base,slug:'draft',status:'draft'},{...base,slug:'legacy-draft',draft:true},{...base,slug:'archived',status:'archived'},{...base,slug:'archive-flag',archived:true},{...base,slug:'future',date:'2026-11-01T12:00:01Z'},{...base,slug:'bad-date',date:'invalid'}];
const selected=selectHomeArticles([...articles,base,base,...invalid],now);
assert.equal(selected.latest[0].slug,base.slug,'New publication appears without manual curation');
assert.equal(selected.latest.filter(a=>a.slug===base.slug).length,1);
assert.ok(Object.values(selected).flat().every(a=>!invalid.some(x=>x.slug===a.slug)));
assert.equal(selectHomeArticles([invalid[4]],new Date('2026-11-01T12:00:01Z')).latest[0].slug,'future');
const t={...publishedTranslations[0],locale:'fr',englishPath:'/articles/new-test/',publishedAt:now.toISOString(),status:'published'};
assert.equal(selectHomeArticles([base],now,'fr',[t]).latest.length,1);
for(const record of [{...t,status:'draft'},{...t,status:'archived'},{...t,publishedAt:'2026-11-02'}])assert.equal(selectHomeArticles([base],now,'fr',[record]).latest.length,0);
assert.equal(selectHomeArticles([base],now,'fr',[]).latest.length,0);
assert.deepEqual(selectHomeArticles([],now),{featured:[],editorialPicks:[],latest:[],moreArticles:[]});
assert.equal(JSON.stringify(articles),snapshot);
console.log('PASS: requested placements, counts, newest-first ties, exclusions/deduplication, publication boundary, draft/archive gates, translation availability and localized card fields in all four languages.');
