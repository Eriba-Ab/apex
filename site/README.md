# Apex Cyber Security website

The website for Apex Cyber Security (apexcybersecurity.co.uk), Sevenoaks, Kent, built in Astro. Every service is placed on the NIST Cybersecurity Framework 2.0 (Govern, Identify, Protect, Detect, Respond, Recover).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/, host anywhere
```

Netlify builds from the repo root `netlify.toml` (base directory `site`).

## Where things live

| Path | What it holds |
|---|---|
| `src/data/site.ts` | All copy: company name, contact details, services, the framework mapping, supplier facts, navigation |
| `src/components/Logo.astro` | The Apex Cyber Security wordmark (favicon: `public/favicon.svg`) |
| `src/layouts/Base.astro` | Watch strip (live UK clock, GMT/BST), header, mobile menu, closing call to action, footer |
| `src/components/Wheel.astro` | The interactive framework wheel on the home page |
| `src/components/ServicePage.astro` | Template shared by all seven service pages |
| `src/styles/global.css` | Colour and type tokens, shared components, print layout |

## Pages

Home, About, Services (overview plus seven service pages), Training, Careers, Contact, 404.

## To confirm before launch

These show as "Apex to supply" / "Apex to confirm" on the site:

- Companies House number and VAT number
- Cyber Essentials / Cyber Essentials Plus and ISO/IEC 27001 status
- Training programme length and pricing
- That 01322 400328 is the right incident number out of hours

## Content rules

All copy is original. The site was designed using a US firm's site as a structural model; nothing that identifies that firm (people, logo, images, trademarks, slogans, posts, partners, identifiers or copied text) may be added. There are no photographs yet; add only Apex's own.
