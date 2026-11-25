import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

// Check production HTML, rather than just the metadata configuration.
const buildDir = path.resolve(process.argv[2] || ".next");
const source = fs.readFileSync("src/lib/seo.ts", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const sandbox = { exports: {}, URL };
vm.runInNewContext(compiled, sandbox);
const { seoPages, absoluteUrl, SITE_NAME } = sandbox.exports;
const titles = new Set(), descriptions = new Set(), inbound = new Set();
const decode = s => s.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => [k, decode(v)]));
const pagesDir = path.join(buildDir, "server/app");
for (const [route, page] of Object.entries(seoPages)) {
  const file = path.join(pagesDir, route === "/" ? "index.html" : `${route.slice(1)}.html`);
  const html = fs.readFileSync(file, "utf8");
  const meta = [...html.matchAll(/<meta\s[^>]+>/g)].map(([tag]) => attrs(tag));
  const get = name => meta.filter(a => a.name === name || a.property === name);
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  assert.ok(title && !titles.has(title), `${route}: missing or duplicate title`); titles.add(title);
  assert.ok(title.endsWith(` | ${SITE_NAME}`), `${route}: inconsistent brand in title`);
  assert.equal(html.match(/<html[^>]*lang="([^"]+)"/)?.[1], "en", `${route}: document language`);
  assert.equal(get("description").length, 1, `${route}: description count`);
  const description = get("description")[0].content;
  assert.ok(description && !descriptions.has(description), `${route}: missing or duplicate description`); descriptions.add(description);
  assert.ok(description.length <= 160, `${route}: description exceeds the editorial target of 160 characters`);
  const canonical = [...html.matchAll(/<link\s[^>]+>/g)].map(([tag]) => attrs(tag)).filter(a => a.rel === "canonical");
  assert.equal(canonical.length, 1, `${route}: canonical count`);
  assert.equal(new URL(canonical[0].href).toString(), absoluteUrl(route), `${route}: incorrect canonical`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: H1 count`);
  assert.equal(new URL(get("og:url")[0]?.content).toString(), absoluteUrl(route), `${route}: social URL`);
  assert.equal(get("og:image")[0]?.content, absoluteUrl("/social-preview.png"), `${route}: social image`);
  assert.equal(get("twitter:card")[0]?.content, "summary_large_image", `${route}: Twitter card`);
  assert.equal(get("robots").some(a => /noindex/.test(a.content)), !!page.noindex, `${route}: indexing policy`);
  assert.equal(get("googlebot").some(a => /noindex/.test(a.content)), !!page.noindex, `${route}: Googlebot indexing policy`);
  const graphs = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(([, body]) => JSON.parse(body)["@graph"] || []);
  for (const type of ["Organization", "WebSite", "WebPage"]) assert.ok(graphs.some(g => g["@type"] === type), `${route}: missing ${type}`);
  if (route !== "/" && !page.noindex && !page.isLandingPage) assert.ok(graphs.some(g => g["@type"] === "BreadcrumbList"), `${route}: breadcrumbs`);
  if (!page.noindex && (route.startsWith("/services/") || route.startsWith("/industries/"))) assert.ok(graphs.some(g => g["@type"] === "Service"), `${route}: service schema`);
  for (const [tag] of html.matchAll(/<img\s[^>]+>/g)) {
    const image = attrs(tag);
    assert.ok(Object.hasOwn(image, "alt"), `${route}: image without alt attribute`);
    assert.ok((Number(image.width) > 0 && Number(image.height) > 0) || image["data-nimg"] === "fill", `${route}: image dimensions`);
    const url = new URL(image.src, absoluteUrl(route));
    const original = url.pathname === "/_next/image" ? url.searchParams.get("url") : url.pathname;
    if (original?.startsWith("/")) assert.ok(fs.existsSync(`public${decodeURIComponent(original)}`), `${route}: missing image ${original}`);
  }
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const url = new URL(decode(href), absoluteUrl(route));
    if (url.origin === new URL(absoluteUrl("/")).origin && url.pathname !== route) {
      inbound.add(url.pathname);
      assert.ok(seoPages[url.pathname] || fs.existsSync(`public${decodeURIComponent(url.pathname)}`), `${route}: unregistered internal link ${url.pathname}`);
    }
  }
  assert.ok(!html.includes("www.virtualvaluebridge.com"), `${route}: obsolete domain`);
  if (page.isLandingPage) {
    assert.ok(!page.noindex, "Estimator landing must be eligible for indexing");
    assert.ok(!html.includes('class="seo-breadcrumbs"'), "Conversion landing must not add breadcrumb navigation");
    assert.ok(!/<header\b[^>]*class="[^"]*\bheader\b/.test(html), "Paid landing must not render global navigation");
    assert.ok(!/<footer\b[^>]*class="[^"]*\bseo-footer/.test(html), "Paid landing must not render global footer");
  }
}
for (const [route, page] of Object.entries(seoPages)) if (!page.noindex) assert.ok(inbound.has(route), `${route}: no inbound link`);
const sitemap = fs.readFileSync(path.join(pagesDir, "sitemap.xml.body"), "utf8");
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url)).sort();
const expected = Object.keys(seoPages).filter(route => !seoPages[route].noindex).map(absoluteUrl).sort();
assert.deepEqual(locations, expected, "Sitemap must contain exactly the indexable pages");
const robots = fs.readFileSync(path.join(pagesDir, "robots.txt.body"), "utf8");
assert.ok(robots.includes(`Sitemap: ${absoluteUrl("/sitemap.xml")}`));
assert.ok(!robots.includes("Disallow: /services/estimating-support"), "Estimator landing must be crawlable");
const notFound = fs.readFileSync(path.join(pagesDir, "_not-found.html"), "utf8");
assert.ok(/<meta name="robots" content="[^"]*noindex/.test(notFound), "404 must be noindex");
const preview = fs.readFileSync(path.join(pagesDir, "social-preview.png.body"));
assert.equal(preview.subarray(1, 4).toString(), "PNG");
assert.equal(preview.readUInt32BE(16), 1200); assert.equal(preview.readUInt32BE(20), 630);
console.log(`SEO checks passed: ${titles.size} pages, ${locations.length} sitemap URLs, unique metadata, canonical URLs, headings, indexing, structured data, internal links and social image.`);
