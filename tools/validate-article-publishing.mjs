const baseUrl = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const canonicalHost = "https://presda.com";

function unique(values) {
  return [...new Set(values)];
}

function assert(condition, message, errors) {
  if (!condition) {
    errors.push(message);
  }
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "manual" });
  const text = await response.text();

  return { response, text };
}

function getCanonical(html) {
  return html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
}

function getJsonLdTypes(html) {
  return [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => {
    try {
      const data = JSON.parse(match[1]);
      const nodes = Array.isArray(data) ? data : [data];
      return nodes.flatMap((node) => node?.["@type"] ?? []);
    } catch {
      return ["INVALID_JSON_LD"];
    }
  });
}

function getInternalLinks(html) {
  return unique(
    [...html.matchAll(/href="(\/[^"#?]+\/?)"/g)]
      .map((match) => match[1])
      .filter((href) => {
        return !href.startsWith("/_next/") &&
          !href.startsWith("/assets/") &&
          !href.startsWith("/images/") &&
          !href.startsWith("/favicon") &&
          !href.startsWith("/icon");
      })
  );
}

async function validate() {
  const errors = [];
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const { response: sitemapResponse, text: sitemap } = await fetchText(sitemapUrl);

  assert(sitemapResponse.status === 200, `sitemap.xml returned ${sitemapResponse.status}`, errors);

  const articleCanonicals = unique(
    [...sitemap.matchAll(/<loc>(https:\/\/presda\.com\/articles\/[^<]+\/)<\/loc>/g)].map((match) => match[1])
  );

  assert(articleCanonicals.length > 0, "sitemap contains no article URLs", errors);

  const seen = new Map();
  for (const canonical of articleCanonicals) {
    seen.set(canonical, (seen.get(canonical) ?? 0) + 1);
  }

  for (const [canonical, count] of seen.entries()) {
    assert(count === 1, `${canonical} appears ${count} times in sitemap`, errors);
  }

  for (const canonical of articleCanonicals) {
    const path = new URL(canonical).pathname;
    const pageUrl = `${baseUrl}${path}`;
    const { response, text: html } = await fetchText(pageUrl);
    const jsonLdTypes = getJsonLdTypes(html);
    const links = getInternalLinks(html);

    assert(response.status === 200, `${path} returned ${response.status}`, errors);
    assert(response.status < 300 || response.status >= 400, `${path} redirected instead of returning a clean 200`, errors);
    assert(getCanonical(html) === canonical, `${path} canonical mismatch: ${getCanonical(html) || "missing"}`, errors);
    assert(!/noindex|nofollow/i.test(html), `${path} contains noindex/nofollow`, errors);
    assert(/<title>[^<]+<\/title>/.test(html), `${path} missing title tag`, errors);
    assert(/<meta name="description" content="[^"]+"/.test(html), `${path} missing meta description`, errors);
    assert(/property="og:title"/.test(html), `${path} missing Open Graph title`, errors);
    assert(/property="og:image"/.test(html), `${path} missing Open Graph image`, errors);
    assert(/name="twitter:card"/.test(html), `${path} missing Twitter card`, errors);
    assert(jsonLdTypes.includes("NewsArticle"), `${path} missing NewsArticle schema`, errors);
    assert(jsonLdTypes.includes("BreadcrumbList"), `${path} missing BreadcrumbList schema`, errors);
    assert(!jsonLdTypes.includes("INVALID_JSON_LD"), `${path} contains invalid JSON-LD`, errors);
    assert(/<h1\b/i.test(html), `${path} missing H1`, errors);
    assert((html.match(/<h1\b/gi) ?? []).length === 1, `${path} must contain exactly one H1`, errors);
    assert(/<img[^>]+alt="[^"]+"/i.test(html) || /<img[^>]+alt='[^']+'/i.test(html), `${path} missing rendered image alt text`, errors);

    for (const href of links) {
      const linked = await fetch(`${baseUrl}${href}`, { redirect: "manual" });
      assert(linked.status < 400, `${path} links to broken internal URL ${href} (${linked.status})`, errors);
    }
  }

  if (errors.length > 0) {
    console.error(`PRESDA article publishing validation failed against ${baseUrl}:`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`PRESDA article publishing validation passed against ${baseUrl}.`);
  console.log(`Checked ${articleCanonicals.length} article URLs, canonical host ${canonicalHost}.`);
}

validate().catch((error) => {
  console.error(error);
  process.exit(1);
});
