const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
require('./register-typescript.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public');
// Dedicated, immutable share assets. Never replace the reader's hero or SEO image.
const recipe = `social-jpeg-q88-width1200-no-crop-no-upscale-v1-${sharp.versions.sharp}-${sharp.versions.mozjpeg}`;

async function main() {
  const sources = new Set(getPublishedArticles().map(article => article.coverImage));
  for (const record of publishedTranslations) {
    if (record.kind === 'article' && record.image) sources.add(record.image.src);
  }
  const manifest = {};
  for (const source of [...sources].sort()) {
    const input = path.resolve(publicRoot, `.${source}`);
    if (!source.startsWith('/') || !input.startsWith(publicRoot + path.sep) || source.includes('?')) {
      throw new Error(`Invalid article social image source: ${source}`);
    }
    const bytes = await fs.readFile(input);
    const id = crypto.createHash('sha256').update(recipe).update(source).update(bytes).digest('hex').slice(0, 24);
    const url = `/social-images/${id}.jpg`;
    const output = path.join(publicRoot, url);
    await fs.mkdir(path.dirname(output), { recursive: true });
    let metadata;
    try {
      metadata = await sharp(output).metadata();
      if (metadata.format !== 'jpeg') throw new Error('Invalid social derivative');
    } catch {
      // Preserve the full artwork and its aspect ratio, including portrait heroes.
      await sharp(bytes).rotate().resize({ width: 1200, withoutEnlargement: true })
        .flatten({ background: '#ffffff' }).toColourspace('srgb')
        .jpeg({ quality: 88, mozjpeg: true }).toFile(output);
      metadata = await sharp(output).metadata();
    }
    if (!metadata.width || !metadata.height) throw new Error(`Missing social image dimensions: ${source}`);
    manifest[source] = { url, width: metadata.width, height: metadata.height, type: 'image/jpeg' };
  }
  await fs.writeFile(path.join(root, 'src/lib/social-image-manifest.generated.json'), JSON.stringify(manifest));
  console.log(`Prepared ${sources.size} article-specific JPEG share images; original heroes and SEO URLs unchanged.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
