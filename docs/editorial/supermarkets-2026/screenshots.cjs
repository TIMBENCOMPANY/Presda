const sharp = require('sharp');
const stage = process.argv[2] || 'local';
(async () => {
  for (const [width,tw,th] of [[1366,683,384],[1920,768,432],[768,384,512],[390,390,844],['body',390,844]]) {
    const inputs=[];
    for (const [i,l] of ['en','fr','ar','es'].entries()) inputs.push({input:await sharp(`test-results/supermarket-${stage}-${l}-${width}.png`).resize(tw,th).toBuffer(),left:i*tw,top:0});
    await sharp({create:{width:tw*4,height:th,channels:3,background:'black'}}).composite(inputs).png().toFile(`test-results/supermarket-${stage}-sheet-${width}.png`);
  }
})();
