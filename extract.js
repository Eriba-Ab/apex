// Reads the live Squarespace pages and writes their layout to layouts/<slug>.json.
// Run: node extract.js
//
// What it keeps: sections (theme, height, width, alignment, background image),
// the exact block grid (fluid-engine CSS or classic 12-column rows), images,
// buttons, links, social links, lines, videos, headings and short labels.
//
// What it does NOT keep: paragraph and list body copy. Each of those becomes
// placeholder text with the same tag and word count, tagged with a data-ph id,
// so the page keeps its real shape. Fill the placeholders from the official
// Squarespace export with import-export.js.

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ORIGIN = 'https://www.apexcybersecurity.org';
const OUT = path.join(__dirname, 'layouts');

// Pages to rebuild (slug -> live path). Anything not listed links back to the live site.
// Not included: /grc (404 on the live site) and /membership-access (password-protected).
const SOURCES = {
  'home': '', 'about': 'about', 'our-vision': 'our-vision', 'team': 'team', 'services': 'Services',
  'consulting': 'consulting', 'mdr': 'mdr', 'edr': 'edr', 'devops': 'devops',
  'network-infrastructure': 'network-infrastructure', 'integrated-security-systems': 'integrated-security-systems',
  'mobile-surveillance-trailers': 'mobile-surveillance-trailers', 'chicagocareers': 'chicagocareers',
  'learning-platform': 'learning-platform', 'events': 'events',
  'security-insight-blog': 'security-insight-blog', 'contact-us': 'contact-us',
};
const PAGES = Object.keys(SOURCES);

const KEEP_HEADING_WORDS = 10; // headings at or under this length are kept
const KEEP_TEXT_WORDS = 6;     // short labels (phone, city, captions) are kept

const LOREM = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ' +
  'incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ' +
  'ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit ' +
  'in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat ' +
  'non proident sunt in culpa qui officia deserunt mollit anim id est laborum').split(' ');

function lorem(words, seed) {
  const out = [];
  for (let i = 0; i < words; i++) out.push(LOREM[(seed + i) % LOREM.length]);
  const s = out.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

// Filler with the same character count as the original run, so it wraps the same way.
function loremChars(length, seed) {
  let s = '';
  for (let i = seed; s.length < length; i++) s += (s ? ' ' : '') + LOREM[i % LOREM.length];
  s = s.slice(0, length).replace(/\s+$/, '');
  return s.padEnd(length, 'x');
}

const wordCount = (t) => (t.trim().match(/\S+/g) || []).length;

// A "text unit" is the element whose words get kept or replaced as a whole:
// headings, paragraphs, blockquotes, and list items/divs that hold text directly
// (not wrapped in a <p>). Anything inside another text unit is handled by its parent.
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

function localHref(href) {
  if (!href) return null;
  if (/^(mailto:|tel:|#)/.test(href)) return href;
  let url;
  try { url = new URL(href, ORIGIN); } catch { return href; }
  if (!/apexcybersecurity\.org$/.test(url.hostname)) return href;
  const slug = url.pathname.replace(/^\/|\/$/g, '').toLowerCase();
  if (slug === '' || slug === 'home') return 'index.html';
  if (PAGES.includes(slug)) return `${slug}.html`;
  return url.href; // blog posts, cart, etc. stay on the live site
}

const imgUrl = (src, w = 1500) => src && `${src.split('?')[0]}?format=${w}w`;

function styleVar(style, name) {
  const m = (style || '').match(new RegExp(`${name}\\s*:\\s*([^;]+)`));
  return m ? m[1].trim() : null;
}

function extractPage(slug, html) {
  const $ = cheerio.load(html);
  let ph = 0;
  const textSeq = []; // every text element in order, used by import-export.js

  // Rebuild a text container, keeping tags and inline styles but replacing body copy.
  function cleanText($root) {
    $root.find('style, script').remove();
    $root.find('a').each((_, a) => {
      const $a = $(a);
      $a.attr('href', localHref($a.attr('href')));
      for (const attr of Object.keys(a.attribs)) {
        if (!['href', 'target', 'class', 'style'].includes(attr)) $a.removeAttr(attr);
      }
    });
    $root.find('h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption, div').each((_, el) => {
      const $el = $(el);
      if (!isTextUnit($, el)) return;
      const tag = el.tagName;
      const words = wordCount($el.text());
      if (!words) { textSeq.push({ tag, words: 0, ph: null }); return; }
      const isHeading = /^h\d$/.test(tag);
      const keep = isHeading ? words <= KEEP_HEADING_WORDS : words <= KEEP_TEXT_WORDS;
      if (keep) { textSeq.push({ tag, words, ph: null }); return; }
      const id = `${slug}-${++ph}`;
      textSeq.push({ tag, words, ph: id });
      $el.attr('data-ph', id);
      // Keep inline structure (<strong>, <br>, links) so line breaks and
      // run-in labels take the same space; replace every word with filler.
      let seed = ph * 7;
      const fill = (node) => {
        for (const child of node.children || []) {
          if (child.type === 'text') {
            const core = child.data.trim();
            if (core) {
              const lead = /^\s/.test(child.data) ? ' ' : '';
              const trail = /\s$/.test(child.data) ? ' ' : '';
              child.data = lead + loremChars(core.length, seed) + trail;
              seed += wordCount(core);
            }
          } else {
            fill(child);
          }
        }
      };
      fill(el);
    });
    return $root.html().replace(/\s+\n/g, '\n').trim();
  }

  function extractBlock(el) {
    const $b = $(el);
    const kind = $b.attr('data-sqsp-block') || '';
    const cls = $b.attr('class') || '';

    if (kind === 'text' || /html-block/.test(cls)) {
      const $c = $b.find('.sqs-html-content').first();
      return { type: 'text', html: $c.length ? cleanText($c.clone()) : '' };
    }

    if (kind === 'image' || kind === 'image-classic' || /image-block/.test(cls)) {
      const $img = $b.find('img').first();
      const src = $img.attr('data-src') || $img.attr('src');
      const wrap = $b.find('[style*="--image-component"]').first().attr('style');
      const $fig = $b.find('figure').first();
      const $cap = $b.find('figcaption .image-caption, .image-caption').first();
      const captionHidden = /layout-caption-hidden/.test($b.find('.image-block-outer-wrapper').attr('class') || '');
      return {
        type: 'image',
        fluid: kind === 'image' || /fluid-image/.test($b.html() || ''),
        src: imgUrl(src),
        alt: $img.attr('alt') || '',
        dims: $img.attr('data-image-dimensions') || null,
        focal: $img.attr('data-image-focal-point') || null,
        fit: styleVar(wrap, '--image-component-object-fit'),
        // Classic images are cropped to this ratio (container padding-bottom).
        crop: styleVar($b.find('.sqs-image-shape-container-element').attr('style'), 'padding-bottom'),
        maxWidth: styleVar($fig.attr('style'), 'max-width'),
        href: localHref($b.find('a').first().attr('href')),
        caption: !captionHidden && $cap.length ? cleanText($cap.clone()) : null,
      };
    }

    if (kind === 'button' || /button-block/.test(cls)) {
      const $a = $b.find('a.sqs-block-button-element, a').first();
      const aCls = $a.attr('class') || '';
      const contCls = $b.find('.sqs-block-button-container').attr('class') || '';
      return {
        type: 'button',
        label: $a.text().trim(),
        href: localHref($a.attr('href')),
        size: (aCls.match(/button-element--(small|medium|large)/) || [])[1] || 'medium',
        variant: (aCls.match(/button-element--(primary|secondary|tertiary)/) || [])[1] || 'primary',
        align: (contCls.match(/container--(left|center|right)/) || [])[1] || 'center',
      };
    }

    if (kind === 'line' || /horizontalrule/.test(cls)) return { type: 'line' };

    if (kind === 'social-links' || /socialaccountlinks/.test(cls)) {
      const links = $b.find('a').map((_, a) => {
        const use = $(a).find('use.sqs-use--icon').attr('xlink:href') || '';
        return { href: $(a).attr('href'), network: (use.match(/#([a-z]+)-icon/) || [])[1] || 'url' };
      }).get();
      const align = (($b.find('[class*="alignment-"]').attr('class') || '').match(/alignment-(left|center|right)/) || [])[1] || 'center';
      return { type: 'social', links, align };
    }

    if (kind === 'video' || /video-block|embed-block/.test(cls)) {
      const raw = $b.find('[data-html]').attr('data-html') || '';
      const src = (cheerio.load(raw)('iframe').attr('src') || '').replace(/^\/\//, 'https://');
      const ratio = styleVar($b.find('.embed-block-wrapper').attr('style'), 'padding-bottom');
      return { type: 'video', src, ratio };
    }

    if (/spacer-block/.test(cls)) return { type: 'spacer', vsize: Number((cls.match(/vsize-(\d+)/) || [])[1] || 1) };

    return { type: 'unknown', cls: cls.replace(/\s+/g, ' ').trim() };
  }

  // Classic layout: .row > .col.span-N > (blocks | nested rows)
  function extractRow(el) {
    return {
      cols: $(el).children('.col').map((_, col) => ({
        span: Number(($(col).attr('class').match(/span-(\d+)/) || [])[1] || 12),
        items: $(col).children().map((_, child) => {
          const c = $(child).attr('class') || '';
          if (/\bsqs-row\b|\brow\b/.test(c)) return { row: extractRow(child) };
          if (/\bsqs-block\b/.test(c)) return { block: extractBlock(child) };
          return null;
        }).get().filter(Boolean),
      })).get(),
    };
  }

  const sections = $('article section.page-section').map((_, sec) => {
    const $s = $(sec);
    const classes = ($s.attr('class') || '').split(/\s+/).filter((c) =>
      /^(section-height|content-width|vertical-alignment|horizontal-alignment|background-width)--|^full-bleed-section$/.test(c));
    const $bgImg = $s.find('> .section-border .section-background img, > .section-background img').first();
    const overlay = $s.find('.section-background-overlay').first().attr('style') || '';
    let divider = null;
    try {
      const d = JSON.parse($s.attr('data-current-context') || '{}').divider;
      if (d && d.enabled) {
        divider = {
          type: d.type,
          height: `${d.height.value}${d.height.unit}`,
          flipX: !!d.isFlipX,
          flipY: !!d.isFlipY,
          stroke: d.stroke && d.stroke.thickness && d.stroke.thickness.value ? {
            color: (d.stroke.color && d.stroke.color.sitePaletteColor && d.stroke.color.sitePaletteColor.colorName) || 'accent',
            width: d.stroke.thickness.value,
          } : null,
        };
      }
    } catch { /* no divider */ }
    const secStyle = ($s.attr('style') || '').replace(/padding-top:[^;]+;?/, '').trim();
    const section = {
      theme: $s.attr('data-section-theme') || '',
      classes,
      style: secStyle || null,
      contentStyle: ($s.find('> .content-wrapper').attr('style') || '').replace(/\s+/g, ' ').trim() || null,
      bg: $bgImg.length ? {
        src: imgUrl($bgImg.attr('data-src') || $bgImg.attr('src'), 2500),
        focal: $bgImg.attr('data-image-focal-point') || null,
        overlay: Number(styleVar(overlay, 'opacity') || 0),
      } : null,
      divider,
    };

    const $fe = $s.find('.fluid-engine').first();
    if ($fe.length) {
      const feId = ($fe.attr('class').match(/\bfe-([a-z0-9]+)\b/) || [])[1];
      const css = $fe.parent().children('style').map((_, st) => $(st).html()).get().join('\n');
      section.kind = 'fluid';
      section.fluid = {
        id: feId,
        css: css.replace(/\s+/g, ' ').trim(),
        blocks: $fe.children('.fe-block').map((_, fb) => ({
          id: ($(fb).attr('class').match(/fe-block-([\w-]+)/) || [])[1],
          block: extractBlock($(fb).find('.sqs-block').first()),
        })).get(),
      };
      return section;
    }

    // Collection list items (blog posts, events): title, date, image and link are kept;
    // long titles and all excerpts become placeholders.
    const listItem = ($it, titleSel, excerptSel) => {
      const title = $it.find(titleSel).first().text().replace(/\s+/g, ' ').trim();
      const tWords = wordCount(title);
      const exWords = wordCount($it.find(excerptSel).text());
      const $img = $it.find('img').first();
      const exText = $it.find(excerptSel).text().replace(/\s+/g, ' ').trim();
      return {
        title: tWords <= KEEP_HEADING_WORDS ? title : loremChars(title.length, 11),
        href: new URL($it.find(`${titleSel} a, a`).first().attr('href') || '/', ORIGIN).href,
        image: imgUrl($img.attr('data-src') || $img.attr('src'), 1000),
        date: $it.find('time').first().text().trim(),
        author: $it.find('.blog-author').first().text().trim(),
        excerpt: exWords ? loremChars(exText.length, 3) : '',
      };
    };

    const $blog = $s.find('.blog-side-by-side, .blog-basic-grid, .blog-alternating-side-by-side').first();
    if ($blog.length) {
      section.kind = 'blog';
      section.blog = $blog.find('.blog-item').map((_, it) => listItem($(it), '.blog-title', '.blog-excerpt')).get();
      return section;
    }

    // "List" sections (Squarespace user-items-list): cards with image, title, text, button.
    const $list = $s.find('.user-items-list').first();
    if ($list.length) {
      const $ul = $list.find('.user-items-list-item-container').first();
      const $title = $list.find('.list-section-title').first();
      section.kind = 'list';
      section.list = {
        style: ($list.attr('style') || '').replace(/\s+/g, ' ').trim(),
        layout: (($ul.attr('class') || '').match(/user-items-list-(simple|carousel|banner-slideshow)/) || [])[1] || 'simple',
        columns: Number($ul.attr('data-num-columns') || 2),
        gridGap: styleVar($ul.attr('style'), 'grid-gap'),
        title: $title.length ? cleanText($title.clone()) : '',
        titleStyle: $title.attr('style') || '',
        titleAlign: $title.attr('data-section-title-alignment') || 'left',
        items: $ul.children('li').map((_, li) => {
          const $li = $(li);
          const $img = $li.find('.list-item-media img').first();
          const $btn = $li.find('.list-item-content__button').first();
          const $desc = $li.find('.list-item-content__description').first();
          const title = $li.find('.list-item-content__title').first().text().trim();
          const tWords = wordCount(title);
          return {
            image: imgUrl($img.attr('data-src') || $img.attr('src')),
            aspect: $li.find('.list-item-media-inner').attr('data-aspect-ratio') || null,
            mediaStyle: $li.find('.list-item-media').attr('style') || '',
            title: tWords <= KEEP_HEADING_WORDS ? title : loremChars(title.length, 5),
            titleStyle: $li.find('.list-item-content__title').attr('style') || '',
            description: $desc.length ? cleanText($desc.clone()) : '',
            descStyle: $desc.attr('style') || '',
            button: $btn.length && $btn.text().trim() ? {
              label: $btn.text().trim(),
              href: localHref($btn.attr('href')) || '#',
              size: (($btn.attr('class') || '').match(/button-element--(small|medium|large)/) || [])[1] || 'medium',
              style: $li.find('.list-item-content__button-container').attr('style') || '',
            } : null,
          };
        }).get(),
      };
      return section;
    }

    if (/collection-type-events/.test($s.attr('class') || '')) {
      section.kind = 'events';
      section.events = $s.find('.eventlist-event').map((_, it) =>
        listItem($(it), '.eventlist-title', '.eventlist-description, .eventlist-excerpt')).get();
      return section;
    }

    section.kind = 'classic';
    section.rows = $s.find('.sqs-layout').first().children('.row').map((_, r) => extractRow(r)).get();
    return section;
  }).get();

  return {
    slug,
    title: $('title').text().trim(),
    description: $('meta[name="description"]').attr('content') || '',
    sections,
    textSeq,
  };
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const slug of PAGES) {
    const res = await fetch(`${ORIGIN}/${SOURCES[slug]}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) { console.warn(`skip ${slug}: HTTP ${res.status}`); continue; }
    const page = extractPage(slug, await res.text());
    fs.writeFileSync(path.join(OUT, `${slug}.json`), JSON.stringify(page, null, 2));
    const placeholders = page.textSeq.filter((t) => t.ph).length;
    console.log(`${slug.padEnd(30)} ${page.sections.length} sections, ${placeholders} placeholders`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
