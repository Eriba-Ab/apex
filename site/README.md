# Apex Cybersecurity Solutions: UK website (pitch)

The UK site for apexcybersecurity.co.uk, built in Astro from a redesign of the US site (apexcybersecurity.org). Every service is placed on the NIST Cybersecurity Framework 2.0 (Govern, Identify, Protect, Detect, Respond, Recover).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/, host anywhere
```

## Where things live

| Path | What it holds |
|---|---|
| `src/data/site.ts` | All copy: contact details and UK office address, services, the framework mapping, leadership, blog posts, vendor facts, navigation |
| `src/layouts/Base.astro` | Watch strip (live UK clock, switches between GMT and BST), header, mobile menu, closing call to action, footer |
| `src/components/Wheel.astro` | The interactive framework wheel on the home page |
| `src/components/ServicePage.astro` | Template shared by all seven service pages |
| `src/styles/global.css` | Colour and type tokens, shared components, print layout |
| `public/img/` | Images from the US site (logo, leadership portraits, product photos, partner logos) |

## UK details

- **Office:** 52 High Street, Sevenoaks, Kent TN13 1JG
- **Phone:** 01322 400328 (office, also used as the incident line) and 07881 813550 (mobile)
- **Email:** info@apexcybersecurity.co.uk
- **Time zone:** Europe/London
- **Language:** British English (`lang="en-GB"`)

## Confirm with Apex before launch

- **UK certifications:** Cyber Essentials / Cyber Essentials Plus and ISO/IEC 27001 are shown as "Apex to supply" slots in `VENDOR_FACTS`. Fill them in or remove them.
- **US vendor fields:** NAICS codes, UEI/CAGE and contract vehicles were kept by request and are still "Apex to supply". The legal-name row still reads "Apex Cybersecurity Solutions Inc." (the US entity). Replace it with the UK company name if they differ.
- **Incident line:** the site uses the office number for incidents. Confirm that's the right number to call out of hours.
- **Links to the US site:** Institute membership/free trial and the blog posts link to apexcybersecurity.org (`CONTACT.live`).
- **Careers:** shows "no vacancies listed" with a CV email link until UK roles exist.
- **Services:** the consulting page lists NIST, ISO 27001, HIPAA and CMMC readiness as on the US site; HIPAA and CMMC are US schemes.
- **Framework mapping:** `PROFILE` aligns each service to NIST CSF categories. Recover has the fewest items.
