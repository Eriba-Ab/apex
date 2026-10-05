// Fills the layout placeholders with real copy from the official Squarespace export.
//
//   1. In Squarespace: Settings > Import & Export > Export > WordPress. Download the .xml.
//   2. node import-export.js path/to/export.xml
//   3. node build.js
//
// For each page it walks the exported text elements in order and lines them up with
// the layout's text sequence (same tag type, similar word count). Matched placeholders
// are written to content/<slug>.json; build.js swaps them in. Anything that can't be
// matched stays as placeholder and is listed in the report, so you can paste it by hand
// into content/<slug>.json (keys are the data-ph ids; view a page with ?placeholders).

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = __dirname;
const LAYOUTS = path.join(ROOT, 'layouts');
const CONTENT = path.join(ROOT, 'content');
const ORIGIN = 'https://www.apexcybersecurity.org';

const wordCount = (t) => (t.trim().match(/\S+/g) || []).length;
const isHeading = (tag) => /^h\d$/.test(tag);

const localPages = new Set(fs.readdirSync(LAYOUTS).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, '')));

function localHref(href) {
  if (!href || /^(mailto:|tel:|#)/.test(href)) return href;
  let url;
  try { url = new URL(href, ORIGIN); } catch { return href; }
  if (!/apexcybersecurity\.org$/.test(url.hostname)) return href;
  const slug = url.pathname.replace(/^\/|\/$/g, '').toLowerCase();
  if (slug === '' || slug === 'home') return 'index.html';
  return localPages.has(slug) ? `${slug}.html` : url.href;
}

// Same element rules as extract.js, so both sides produce comparable sequences.
const UNIT = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote']);
function holdsTextDirectly($, el) {
  return (el.children || []).some((c) => c.type === 'text' && c.data.trim())
    || $(el).children('strong, em, a, span, b, i, u, br, code, sup, sub').length > 0;
}
function isTextUnit($, el) {
  const tag = el.tagName;
  const unit = UNIT.has(tag) || ((tag === 'li' || tag === 'div' || tag === 'figcaption') && holdsTextDirectly($, el));
  if (!unit) return false;
  for (let p = el.parent; p && p.type === 'tag'; p = p.parent) {
    if (UNIT.has(p.tagName)) return false;
    if ((p.tagName === 'li' || p.tagName === 'div' || p.tagName === 'figcaption') && holdsTextDirectly($, p)) return false;
  }
  return true;
}

function textElements(html) {
  const $ = cheerio.load(html, null, false);
  $('style, script').remove();
  const seq = [];
  $('h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption, div').each((_, el) => {
    const $el = $(el);
    if (!isTextUnit($, el)) return;
    const words = wordCount($el.text());
    if (!words) return;
    $el.find('a').each((_, a) => $(a).attr('href', localHref($(a).attr('href'))));
    seq.push({ tag: el.tagName, words, html: $el.html().trim() });
  });
  return seq;
}

function close(a, b) {
  return Math.abs(a - b) <= Math.max(2, Math.round(Math.max(a, b) * 0.25));
}

function align(layoutSeq, exportSeq) {
  const content = {};
  const missed = [];
  let j = 0;
  for (const t of layoutSeq.filter((x) => x.words > 0)) {
    let found = -1;
    for (let k = j; k < Math.min(exportSeq.length, j + 8); k++) {
      const e = exportSeq[k];
      if (isHeading(e.tag) === isHeading(t.tag) && close(e.words, t.words)) { found = k; break; }
    }
    if (found === -1) { if (t.ph) missed.push(t.ph); continue; }
    if (t.ph) content[t.ph] = exportSeq[found].html;
    j = found + 1;
  }
  return { content, missed };
}

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node import-export.js path/to/squarespace-export.xml');
    process.exit(1);
  }
  const $ = cheerio.load(fs.readFileSync(file, 'utf8'), { xmlMode: true });

  const bySlug = {};
  $('item').each((_, item) => {
    const $i = $(item);
    const type = $i.find('wp\\:post_type').text();
    if (type && type !== 'page') return;
    const slug = $i.find('wp\\:post_name').text().trim().toLowerCase();
    const link = $i.find('link').text().trim();
    const key = slug || (link ? new URL(link, ORIGIN).pathname.replace(/^\/|\/$/g, '').toLowerCase() : '');
    bySlug[key || 'home'] = $i.find('content\\:encoded').text();
  });

  fs.mkdirSync(CONTENT, { recursive: true });
  let totalPh = 0;
  let totalFilled = 0;
  for (const slug of localPages) {
    const layout = JSON.parse(fs.readFileSync(path.join(LAYOUTS, `${slug}.json`), 'utf8'));
    const phs = layout.textSeq.filter((t) => t.ph).length;
    totalPh += phs;
    if (!phs) continue;
    const html = bySlug[slug];
    if (html == null) { console.log(`${slug.padEnd(30)} not in export (${phs} placeholders left)`); continue; }

    const { content, missed } = align(layout.textSeq, textElements(html));
    const n = Object.keys(content).length;
    totalFilled += n;
    fs.writeFileSync(path.join(CONTENT, `${slug}.json`), JSON.stringify(content, null, 2));
    console.log(`${slug.padEnd(30)} ${n}/${phs} filled${missed.length ? `  (unmatched: ${missed.join(', ')})` : ''}`);
  }
  console.log(`\n${totalFilled}/${totalPh} placeholders filled. Run: node build.js`);
}

main();
