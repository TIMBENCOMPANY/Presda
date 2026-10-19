const fs=require('fs'),sharp=require('sharp');
(async()=>{fs.mkdirSync('public/articles/bee',{recursive:true});const variants=JSON.parse(fs.readFileSync('src/data/editorialImageVariants.json'));
for(const [id,url]of [['comb','https://upload.wikimedia.org/wikipedia/commons/8/80/A_mellifera_on_comb.jpg'],['pollen','https://upload.wikimedia.org/wikipedia/commons/4/44/Honey_bee_on_flower_with_pollen_collected_on_rear_leg.jpg']]){
 const r=await fetch(url);if(!r.ok)throw Error(r.status);const b=Buffer.from(await r.arrayBuffer());await sharp(b).webp({quality:90}).toFile(`public/articles/bee/${id}.webp`);variants[`/articles/bee/${id}.webp`]=[];
 for(const width of [480,1080]){await sharp(b).resize({width,withoutEnlargement:true}).webp({quality:85}).toFile(`public/articles/bee/${id}-${width}.webp`);variants[`/articles/bee/${id}.webp`].push({width,src:`/articles/bee/${id}-${width}.webp`});}
}fs.writeFileSync('src/data/editorialImageVariants.json',JSON.stringify(variants,null,2)+'\n');})();
