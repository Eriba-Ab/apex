# Apex Cybersecurity — static rebuild

A plain HTML/CSS/JS rebuild of apexcybersecurity.org (Squarespace 7.1), as a base for a redesign.
Every page reproduces the live layout: sections, grid positions, images, crops, buttons, links,
headings, dividers and card lists. Body copy is placeholder text of the same length until you
import the real content from the official Squarespace export.

## Quick start

```bash
npm install
node build.js                      # writes the .html pages from layouts/
python -m http.server 5173         # open http://localhost:5173
```

## Adding the real copy

1. Ask a site admin for the Squarespace export: **Settings → Import & Export → Export → WordPress** (.xml).
2. `node import-export.js path/to/export.xml` writes `content/<page>.json` and reports what it matched.
3. `node build.js`

Open any page with `?placeholders` (e.g. `about.html?placeholders`) to outline copy that's still
placeholder. You can fill any leftovers by hand in `content/<page>.json`; the keys are the
`data-ph` ids in the page.

## Files

| File | What it does |
|---|---|
| `extract.js` | Reads the live pages and writes their layout to `layouts/<page>.json`. Re-run if the live site changes. |
| `build.js` | Renders `layouts/` (plus `content/` if present) into the `.html` pages. Header, footer and nav live here. |
| `import-export.js` | Fills placeholders from the Squarespace WordPress export. |
| `assets/styles.css` | All styles. Colors, type scale and spacing are variables at the top, measured at 1440px. |
| `assets/main.js` | Mobile menu, dropdowns, scroll fade-in. |

## Fidelity

Measured against the live site at 1440px: 60 of 70 blocks are within 6px of their live
position and size. The remaining differences are text blocks where placeholder words wrap
differently from the real copy; they should close up once content is imported.

## Differences from the live site

- **Fonts:** the live site's Adobe fonts (adonis-web, adelle-sans) are licensed to its domain.
  This build uses Newsreader (within about 2% of adonis-web's width) and Source Sans 3. Pontano Sans is the same.
- **Images** load from the company's Squarespace CDN, so the pages need internet.
- **Not rebuilt:** `/membership-access` (password-protected) links to the live site, as do blog posts
  and event detail pages. `/grc` is a 404 on the live site, so the homepage tile still points to it.
- **Left out:** cart and member login (Squarespace features), and an empty footer link to an external video.
- **Live-site issue:** the Consulting/Services pages have a card section still showing Squarespace
  template content ("Make it stand out." with stock photos).
