# World and wildlife batch, 4 November 2026

Four evergreen Article records, IDs 394 to 397, with complete EN/FR/AR/ES editions. The approved originals are copied byte for byte. The attachment mapping is Cappadocia 1, ninja 3, samurai 4, quokka 2. manifest.json records native dimensions, original filenames and SHA-256 hashes. No unsupported creator, licence or documentary provenance is claimed.

## Editorial evidence and scope

- Cappadocia: UNESCO defines the World Heritage property and its 1985 inscription, cultural significance and conservation pressures. NASA explains volcanic tuff and erosion. Türkiye's Ministry of Culture and Tourism documents Göreme's churches. Natural landforms are distinguished from later rock-cut architecture; separate underground sites are not presented as one lost metropolis. This is an evergreen landscape/history article with no claim about present flight availability or site access.
- Ninja: Mie University historian Yuji Yamada's interview and the university/ Japan Foundation historical overview establish documentary shinobi, intelligence work, changing roles, Iga and Kōka. The historical overview PDF was read directly. The Root of Ninja provides clothing context. No supernatural powers, universal black uniform or exclusively assassination-based role is asserted. The supplied image is expressly distinguished from a documented mission or location.
- Samurai: V&A, the Metropolitan Museum and the Ashmolean provide material evidence for military equipment, arts and Edo-period status. Historian Oleg Benesch's Japan House London essay distinguishes evolving warrior ideals from the later popularisation of bushidō. Feudal Japan is treated as a broad label, not an unchanged institution; the illustrated armour is not evidence for an exact warrior or battle.
- Quokkas: the Australian Museum, Perth Zoo and the Australian Government recovery plan establish taxonomy, range, diet, nocturnal activity, reproduction and conservation context. Rottnest Island Authority supplies wildlife encounter guidance. A facial appearance is not treated as a scientific measurement of happiness. No current population total is extrapolated from older data.

All articles include inline citations, three FAQs per language, localized metadata and alt text, editorial image disclosures, real internal links and white/red/gold headline accents. New ninja and samurai articles link to one another.

## Design and search implementation

The existing bounded Bruno shared hero contract is reused without new CSS or source-image edits. Native ratios set the no-horizontal-crop ceiling; desktop retains the approved viewport cap and mobile retains the full natural image with the readable copy area. The prior desktop preference permits vertical cropping while keeping both sides visible. The 1672×941 reference describes the layout; the supplied images are not artificially upscaled or relabeled as that native resolution.

Existing publishing machinery supplies localized canonicals, reciprocal hreflang and x-default, Article/ImageObject schema, responsive WebP image derivatives, JPEG OG/Twitter images and article-specific image sitemap mappings. Indexability and crawl access are verified, without promising search-engine indexing.

The baseline is production commit ad417aa0f6f7185d420720d235a59e0525a17c3a. Preservation checks cover the existing 392 articles' image rights, 1,164 generated translation records, 1,176 routing records and 453 original-image dimensions. Additions are exactly 12 complete translations, 12 routing entries and 4 dimensions.

The regression suite tools/test-world-wildlife-nov04.cjs covers 112 local cases and 32 production cases. It checks all four languages at desktop/mobile sizes, native image ratios, bounds and overflow, typography, RTL, Article/ImageObject citations, social previews, FAQs, internal links, category discovery and sitemap image-to-article associations. Contact sheets cover all 16 editions on desktop and mobile, plus direct Bruno comparisons.

Source retrieval notes: direct Node requests encountered access controls at UNESCO and Rottnest, a Met rate limit and one transient Turkish ministry failure. Their relevant content was read through the web research tool. These responses are not misreported as missing pages or as successful 200 checks. Perth Zoo's source URL redirects to its current species page.
