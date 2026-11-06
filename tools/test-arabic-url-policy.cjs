const assert=require('assert/strict');
const routes=require('../src/data/translation-routes.json'),ar=routes.filter(r=>r.locale==='ar');
// Indexed pilot routes are intentionally preserved. Never rename them incidentally.
const preserved={
 '/articles/al-andalus-rise-glory-fall-muslim-iberia/':'/ar/articles/تاريخ-الأندلس-من-الفتح-إلى-سقوط-غرناطة/',
 '/articles/maya-civilization-history-cities-calendar-astronomy/':'/ar/articles/حضارة-المايا-التاريخ-والمدن-والتقويم/',
 '/articles/aztec-empire-tenochtitlan-mexica-rise-fall/':'/ar/articles/حضارة-الأزتك-تينوشتيتلان-وصعود-الإمبراطورية-وسقوطها/',
 '/articles/morocco-history-dynasties-kingdom-independence/':'/ar/articles/تاريخ-المغرب-الدول-الحاكمة-والحماية-والاستقلال/'
};
assert.equal(new Set(routes.map(r=>r.path)).size,routes.length,'Duplicate localized route');
assert.equal(new Set(routes.map(r=>r.locale+':'+r.englishPath)).size,routes.length,'Conflicting locale mapping');
for(const r of ar){assert.equal(r.path,preserved[r.englishPath]||'/ar'+r.englishPath,'Preserve indexed legacy URLs; use English Latin slugs for new Arabic editions');assert(r.path.endsWith('/'));}
for(const [englishPath,path]of Object.entries(preserved))assert(ar.some(r=>r.englishPath===englishPath&&r.path===path),'Indexed route must remain published');
console.log(`PASS: ${ar.length} Arabic URLs; four indexed legacy paths preserved; new paths match English slugs; no route collisions.`);
