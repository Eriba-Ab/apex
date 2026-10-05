// Renders layouts/<slug>.json into <slug>.html. Run: node build.js
// If content/<slug>.json exists (written by import-export.js), its copy replaces
// the matching placeholders. The header, footer and nav live here.

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT = __dirname;
const LAYOUTS = path.join(ROOT, 'layouts');
const CONTENT = path.join(ROOT, 'content');

const CDN = 'https://images.squarespace-cdn.com/content/v1/601e1d9cbf34eb004be30732';
const LOGO = `${CDN}/1612658101303-9XXJ9VTZX2TQUPMWK9D4/logo_transparent_background.png?format=1500w`;
const FOOTER_LOGO = `${CDN}/1620857692020-QQU7QSVIQJGGYSLAUYH7/Grey+logo_white_background+Verbiage.png?format=1500w`;
const FAVICON = `${CDN}/4d75f8d3-c808-43a3-aec2-39a53e6bb4b6/favicon.ico?format=100w`;
const LIVE = 'https://www.apexcybersecurity.org';

// Navigation, in the same order as the live site. Pages not rebuilt link to the live site.
const NAV = [
  { label: 'About', items: [['Company', 'about'], ['Our Vision', 'our-vision'], ['Leadership', 'team']] },
  { label: 'Services', items: [
    ['Consulting/Assessments/Compliance', 'consulting'],
    ['Managed Detection and Response', 'mdr'],
    ['Endpoint Detection and Response', 'edr'],
    ['DevOpS', 'devops'],
    ['Network Infrastructure', 'network-infrastructure'],
    ['Integrated Security Systems', 'integrated-security-systems'],
    ['Mobile Surveillance Trailers', 'mobile-surveillance-trailers'],
  ] },
  { label: 'Careers', items: [['Chicago', 'chicagocareers']] },
  { label: 'Apex Institute', items: [
    ['Learning Platform', 'learning-platform'],
    ['Membership Access', `${LIVE}/membership-access`],
    ['Networking and Learning Events - To Be Announced', 'events'],
  ] },
  { label: 'Security Blog', href: 'security-insight-blog' },
  { label: 'Contact', href: 'contact-us' },
];

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (s) => (/^https?:/.test(s) ? s : `${s}.html`);
const focal = (f) => (f ? f.split(',').map((n) => `${Math.round(parseFloat(n) * 100)}%`).join(' ') : '50% 50%');

// ---------- Shared chrome ----------

function header() {
  const desktop = NAV.map((n) => (n.items
    ? `<div class="nav-item">
          <button type="button" aria-haspopup="true" aria-expanded="false">${n.label}</button>
          <ul class="nav-folder">${n.items.map(([t, s]) => `<li><a href="${link(s)}">${t}</a></li>`).join('')}</ul>
        </div>`
    : `<div class="nav-item"><a href="${link(n.href)}">${n.label}</a></div>`)).join('\n        ');

  const mobile = NAV.map((n) => (n.items
    ? `<details><summary>${n.label}</summary>${n.items.map(([t, s]) => `<a href="${link(s)}">${t}</a>`).join('')}</details>`
    : `<a href="${link(n.href)}">${n.label}</a>`)).join('\n    ');

  return `<header class="header">
    <div class="header-inner">
      <a class="header-logo" href="index.html"><img src="${LOGO}" alt="Apex Cybersecurity Solutions" width="633" height="189"></a>
      <nav class="header-nav" aria-label="Main">
        ${desktop}
      </nav>
      <div class="header-actions"><a href="#">Login</a></div>
      <button class="burger" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
    </div>
  </header>
  <div class="mobile-menu">
    ${mobile}
    <a href="#">Login</a>
  </div>`;
}

function footer() {
  return `<footer class="footer">
    <a class="footer-logo" href="index.html"><img src="${FOOTER_LOGO}" alt="Apex Cybersecurity Solutions" loading="lazy"></a>
    <p class="footer-links"><a href="about.html">About</a> <a href="contact-us.html">Contact</a> <a href="https://www.linkedin.com/in/damondsingleton/" target="_blank" rel="noopener">Follow</a></p>
    <p><a href="mailto:info@apexcybersecurity.org?subject=Request%20for%20information">info@apexcybersecurity.org</a><br>(312)-566-7491</p>
  </footer>`;
}

function layout({ title, description, body }) {
  return `<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="icon" href="${FAVICON}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&family=Pontano+Sans:wght@400;700&family=Source+Sans+3:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  ${header()}
  <main>
${body}
  </main>
  ${footer()}
  <script src="assets/main.js"></script>
</body>
</html>
`;
}

// ---------- Blocks ----------

const SOCIAL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM8.5 19a4.5 4.5 0 0 1-3.2-7.7l2-2a1 1 0 0 1 1.4 1.4l-2 2a2.5 2.5 0 0 0 3.6 3.6l2-2a1 1 0 0 1 1.4 1.4l-2 2A4.5 4.5 0 0 1 8.5 19zm7.6-4.6a1 1 0 0 1-.7-1.7l2-2a2.5 2.5 0 0 0-3.6-3.6l-2 2a1 1 0 1 1-1.4-1.4l2-2a4.5 4.5 0 0 1 6.4 6.4l-2 2a1 1 0 0 1-.7.3z"/></svg>';

function renderBlock(b) {
  switch (b.type) {
    case 'text':
      return `<div class="sqs-block text-block fade"><div class="sqs-html-content">${b.html}</div></div>`;

    case 'image': {
      let img = `<img src="${b.src}" alt="${esc(b.alt)}" loading="lazy"${b.dims ? ` width="${b.dims.split('x')[0]}" height="${b.dims.split('x')[1]}"` : ''}>`;
      if (b.crop && !b.fluid) img = `<div class="crop" style="padding-bottom:${b.crop}">${img}</div>`;
      const inner = b.href ? `<a href="${b.href}"${/^https?:/.test(b.href) ? ' target="_blank" rel="noopener"' : ''}>${img}</a>` : img;
      const style = `--fit:${b.fit || (b.fluid ? 'cover' : 'contain')};--focal:${focal(b.focal)}${b.maxWidth && !b.fluid ? `;max-width:${b.maxWidth};margin:0 auto` : ''}`;
      const caption = b.caption ? `<figcaption class="sqs-html-content">${b.caption}</figcaption>` : '';
      return `<div class="sqs-block image-block${b.fluid ? ' fluid' : ''} fade"><figure style="${style}">${inner}${caption}</figure></div>`;
    }

    case 'button':
      return `<div class="sqs-block button-block align-${b.align} fade"><a class="btn btn--${b.size} btn--${b.variant}" href="${b.href || '#'}">${esc(b.label)}</a></div>`;

    case 'line':
      return '<div class="sqs-block line-block"><hr></div>';

    case 'spacer':
      return `<div class="sqs-block spacer-block" style="--vsize:${b.vsize || 1}"><div class="spacer"></div></div>`;

    case 'social':
      return `<div class="sqs-block social-block align-${b.align}">${b.links.map((l) =>
        `<a href="${l.href}" target="_blank" rel="noopener" aria-label="${esc(l.network)}">${SOCIAL_ICON}</a>`).join('')}</div>`;

    case 'video':
      return `<div class="sqs-block video-block fade"><div class="embed"${b.ratio ? ` style="padding-bottom:${b.ratio}"` : ''}><iframe src="${b.src}" allowfullscreen loading="lazy" title="Video"></iframe></div></div>`;

    default:
      return `<!-- unsupported block: ${esc(b.cls || b.type)} -->`;
  }
}

function renderRow(row) {
  return `<div class="row sqs-row">${row.cols.map((c) =>
    `<div class="col span-${c.span}" style="width:${(c.span / 12) * 100}%">${c.items.map((it) =>
      (it.row ? renderRow(it.row) : renderBlock(it.block))).join('')}</div>`).join('')}</div>`;
}

// ---------- Sections ----------

function renderListItem(it, kind) {
  const img = it.image ? `<a class="${kind}-image" href="${it.href}"><img src="${it.image}" alt="" loading="lazy"></a>` : '';
  const meta = [it.date, it.author].filter(Boolean).map(esc).join(' &middot; ');
  if (kind === 'blog') {
    return `<article class="blog-item fade">${img}<div class="blog-text">
          <div class="blog-meta">${meta}</div>
          <h1 class="blog-title"><a href="${it.href}">${esc(it.title)}</a></h1>
          ${it.excerpt ? `<p class="blog-excerpt">${esc(it.excerpt)}</p>` : ''}
          <a class="blog-more" href="${it.href}">Read More</a>
        </div></article>`;
  }
  return `<article class="event-item fade">${img}<div class="event-text">
          <h2><a href="${it.href}">${esc(it.title)}</a></h2>
          <p class="event-meta">${meta}</p>
          ${it.excerpt ? `<p>${esc(it.excerpt)}</p>` : ''}
          <a class="event-more" href="${it.href}">View Event &rarr;</a>
        </div></article>`;
}

function renderSection(s, i) {
  const classes = ['page-section', ...s.classes, i === 0 ? 'first' : ''].filter(Boolean).join(' ');
  const bg = s.bg
    ? `<div class="section-background"><img src="${s.bg.src}" alt="" style="object-position:${focal(s.bg.focal)}">${s.bg.overlay ? `<div class="section-background-overlay" style="opacity:${s.bg.overlay}"></div>` : ''}</div>`
    : '';

  let content;
  if (s.kind === 'fluid') {
    content = `<style>${s.fluid.css}</style>
        <div class="fluid-engine fe-${s.fluid.id}">${s.fluid.blocks.map((fb) =>
          `<div class="fe-block fe-block-${fb.id}">${renderBlock(fb.block)}</div>`).join('')}</div>`;
  } else if (s.kind === 'classic') {
    content = `<div class="sqs-layout">${s.rows.map(renderRow).join('')}</div>`;
  } else if (s.kind === 'list') {
    const l = s.list;
    const ratio = (a) => (a ? a.split(':').join(' / ') : '16 / 9');
    content = `<div class="user-items-list" style="${l.style}">
          ${l.title ? `<div class="list-section-title sqs-html-content align-${l.titleAlign}" style="${l.titleStyle}">${l.title}</div>` : ''}
          <ul class="list-items" style="grid-template-columns:repeat(${l.columns},1fr);${l.gridGap ? `gap:${l.gridGap}` : ''}">${l.items.map((it) => `
            <li class="list-item fade">
              ${it.image ? `<div class="list-item-media" style="${it.mediaStyle}"><img src="${it.image}" alt="" loading="lazy" style="aspect-ratio:${ratio(it.aspect)}"></div>` : ''}
              <h2 class="list-item-title" style="${it.titleStyle}">${esc(it.title)}</h2>
              ${it.description ? `<div class="list-item-description sqs-html-content" style="${it.descStyle}">${it.description}</div>` : ''}
              ${it.button ? `<div style="${it.button.style}"><a class="btn btn--${it.button.size} btn--primary" href="${it.button.href}">${esc(it.button.label)}</a></div>` : ''}
            </li>`).join('')}
          </ul>
        </div>`;
  } else if (s.kind === 'blog') {
    return `<section class="${classes}" data-section-theme="${s.theme}"><div class="blog-list">${s.blog.map((it) => renderListItem(it, 'blog')).join('')}</div></section>`;
  } else if (s.kind === 'events') {
    return `<section class="${classes}" data-section-theme="${s.theme}"><div class="event-list">${s.events.map((it) => renderListItem(it, 'event')).join('')}</div></section>`;
  }

  const style = [s.style, s.divider ? `--divider-height:${s.divider.height}` : ''].filter(Boolean).join(';');
  return `    <section class="${classes}${s.divider ? ' has-divider' : ''}" data-section-theme="${s.theme}"${style ? ` style="${style}"` : ''}>
      ${bg}
      <div class="content-wrapper"${s.contentStyle ? ` style="${s.contentStyle}"` : ''}>
        <div class="content">${content}</div>
      </div>
      ${s.divider ? renderDivider(s.divider) : ''}
    </section>`;
}

// Squarespace section divider: a shaped bottom edge. "wavy" is one sine period across
// the width; other types fall back to a straight edge. The area below the edge is
// painted in the page background, which is what Squarespace's clip-path reveals.
function renderDivider(d) {
  const wave = 'M0,0.5 C0.0909,0.214 0.1591,0 0.25,0 S0.4091,0.214 0.5,0.5 S0.6591,1 0.75,1 S0.9091,0.786 1,0.5';
  const edge = d.type === 'wavy' ? wave : 'M0,0.5 L1,0.5';
  const flip = [d.flipX ? 'scaleX(-1)' : '', d.flipY ? 'scaleY(-1)' : ''].filter(Boolean).join(' ');
  return `<svg class="section-divider" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true"${flip ? ` style="transform:${flip}"` : ''}>
        <path class="divider-fill" d="${edge} L1,1 L0,1 Z"/>
        ${d.stroke ? `<path class="divider-stroke" d="${edge}" style="stroke:var(--${d.stroke.color});stroke-width:${d.stroke.width}px"/>` : ''}
      </svg>`;
}

// Swap placeholder copy for imported content, if any.
function fillContent(html, content) {
  if (!content || !Object.keys(content).length) return html;
  const $ = cheerio.load(html, null, false);
  $('[data-ph]').each((_, el) => {
    const id = $(el).attr('data-ph');
    if (content[id] != null) $(el).html(content[id]).removeAttr('data-ph');
  });
  return $.html();
}

// ---------- Build ----------

let pages = 0;
let filled = 0;
for (const file of fs.readdirSync(LAYOUTS).filter((f) => f.endsWith('.json'))) {
  const page = JSON.parse(fs.readFileSync(path.join(LAYOUTS, file), 'utf8'));
  const contentFile = path.join(CONTENT, file);
  const content = fs.existsSync(contentFile) ? JSON.parse(fs.readFileSync(contentFile, 'utf8')) : null;
  if (content) filled++;

  const body = fillContent(page.sections.map(renderSection).join('\n\n'), content);
  const out = page.slug === 'home' ? 'index.html' : `${page.slug}.html`;
  fs.writeFileSync(path.join(ROOT, out), layout({ title: page.title, description: page.description, body }));
  pages++;
}
console.log(`Built ${pages} pages (${filled} with imported content)`);
