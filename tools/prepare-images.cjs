const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const { imageSources } = require('./image-sources.cjs');
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public');
// Versioned recipe + source bytes give stable URLs across routes and deploys.
const recipe = `webp-q90-effort5-inside-no-upscale-v1-${sharp.versions.sharp}-${sharp.versions.webp}`;

async function main() {
  const manifest = {};
  const generated = new Map();
  let originalBytes = 0;
  for (const [src, requested] of imageSources()) {
    const input = path.resolve(publicRoot, `.${src}`);
    if (!input.startsWith(publicRoot + path.sep) || src.includes('?')) throw new Error(`Invalid image source: ${src}`);
    const bytes = await fs.readFile(input); // Missing published artwork must fail the build.
    const metadata = await sharp(bytes).metadata();
    if (!metadata.width || !metadata.height || (metadata.pages || 1) > 1) throw new Error(`Unsupported image: ${src}`);
    originalBytes += bytes.length;
    const id = crypto.createHash('sha256').update(recipe).update(bytes).digest('hex').slice(0, 20);
    const widths = [...new Set(requested.map(w => Math.min(w, metadata.autoOrient?.width || metadata.width)))];
    const variants = [];
    for (const width of widths) {
      // Already-compressed full-size WebP artwork is reused without re-encoding.
      if (width === metadata.width && metadata.format === 'webp' && !metadata.orientation) {
        variants.push([width, src]);
        continue;
      }
      const url = `/image-assets/${id}/${width}.webp`;
      const output = path.join(publicRoot, url);
      await fs.mkdir(path.dirname(output), { recursive: true });
      try {
        const cached = await sharp(output).metadata();
        if (cached.width !== width || cached.format !== 'webp') throw new Error('Invalid cached derivative');
      }
      catch {
        const temporary = `${output}.tmp`;
        await sharp(bytes).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 90, effort: 5 }).toFile(temporary);
        await fs.rename(temporary, output);
      }
      generated.set(url, (await fs.stat(output)).size);
      variants.push([width, url]);
    }
    manifest[src] = variants;
    if (Object.keys(manifest).length % 50 === 0) console.log(`Prepared ${Object.keys(manifest).length} image sources...`);
  }
  await fs.writeFile(path.join(root, 'src/lib/image-manifest.generated.json'), JSON.stringify(manifest));
  const outputBytes = [...generated.values()].reduce((a, b) => a + b, 0);
  console.log(`Prepared ${Object.keys(manifest).length} published image sources; ${generated.size} static derivatives, ${(outputBytes / 1048576).toFixed(1)} MiB; originals preserved (${(originalBytes / 1048576).toFixed(1)} MiB).`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
