# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## UK site

This build is the UK site, hosted at apexcybersecurity.co.uk. UK office: 52 High Street, Sevenoaks, Kent TN13 1JG. Phone 01322 400328 (office and incident line) and 07881 813550 (mobile). Email info@apexcybersecurity.co.uk. Time zone Europe/London. British English throughout. Decisions confirmed by the user (October 2026): the US MBE credential is replaced by UK credential slots (Cyber Essentials / Cyber Essentials Plus, ISO/IEC 27001) for Apex to supply; US-only content (Chicago job postings, US/Canada trailer delivery, the Chicago networking event) is removed or made UK-neutral; the NIST CSF framework stays with no UK scheme additions; the US vendor-fact fields (NAICS, UEI/CAGE, contract vehicles) stay. The US facts below describe the parent site and do not appear on the UK site unless stated.

## Stack

Framework rebuild chosen by the user ("A framework (Astro/Next)"). Delegated between the two: Astro, because the site is a content-led marketing site with no app logic, Astro ships static HTML by default (fast, host-anywhere, easy to hand to Apex), and it keeps the page-per-route structure of the old site. The original Squarespace clone (build.js, layouts/, the root .html files) stays in the repo as the reference for the old site.

## Users

Primary buyers are public-sector agencies (city, county, state, schools, transit, housing authorities) and corporate supplier-diversity programs in and around Chicago. They are procurement officers, IT directors and CISOs who need a qualified, certified vendor they can defend in a bid file. They are evaluating, not browsing: they want to see scope of services, certifications, leadership credentials and a way to start a conversation.

Secondary audiences, already served by existing pages: learners considering the Apex Institute 12-week analyst program, job seekers applying to Chicago roles.

The immediate reader of this redesign is Apex Cybersecurity Solutions' leadership, who will receive it as a pitch for a new website.

## Product Purpose

Apex Cybersecurity Solutions Inc. is an IT and cybersecurity services firm based in Chicago, IL. It modernizes, innovates and protects organizations through outsourced technology support, cloud and network infrastructure, managed services, threat mitigation, incident response, data security, governance/risk/compliance and vulnerability management, plus consultancy, training and technical support. The website's job is to make Apex an easy, credible "yes" for a public-sector or supplier-diversity buyer and to start a conversation.

## Positioning

A Chicago-based, MBE-certified (National Minority Supplier Development Council, Chicago) firm that covers the full stack in one contract: cyber (24/7 MDR, EDR, consulting and compliance), physical security (key card access, enterprise cameras, solar mobile surveillance trailers), network infrastructure and DevOps, and a workforce pipeline (Apex Institute 12-week analyst program). Few certified diverse suppliers can bid on cyber, physical and workforce development together.

## Operating Context

Buyers read the site while assembling vendor shortlists, RFP responses and supplier-diversity reports. They forward pages to colleagues and need clear service scopes, certifications and contacts. Incident callers need the emergency number immediately.

## Capabilities and Constraints

- Services (from the live site): Consulting/Assessments/Compliance (security risk assessments, vulnerability and threat analysis, GRC readiness for NIST, ISO 27001, HIPAA, CMMC, security architecture review, incident response planning and tabletop exercises, security awareness training); Managed Detection and Response (24/7, cloud-powered virtual SOC, virtualized SIEM, SECaaS, staffed by "Security Conservators (SC)®"); Endpoint Detection and Response; DevOps and software development (Azure/AWS certified partners); Network Infrastructure; Integrated Security Systems (key card access, enterprise security cameras); Mobile Surveillance Trailers (rental or purchase, nationwide USA/Canada delivery in 1 to 5 business days).
- Apex Institute: Cybersecurity training powered by CyberBit; 12-week Junior Cybersecurity Analyst program; 7-day free trial; membership plan options on the live site.
- Careers are posted on Gusto (links in layouts/chicagocareers.json).
- Membership Access is password-protected on the live site and stays linked there.
- Open: the /grc page is a 404 on the live site; the contact page lists the incident line as (312) 566-7497 while every footer lists (312) 566-7491. Confirm with Apex before launch.

## Brand Commitments

- Name: Apex Cybersecurity Solutions (also "Apex IT and Cybersecurity Solutions").
- Tagline: "The trusted cybersecurity company."
- Vision line: "We watch, we protect, our focus is you."
- "Security Conservators (SC)®" is Apex's registered term for its SOC analysts.
- Existing logo (Squarespace CDN) must be kept.

## Evidence on Hand

- Real copy from apexcybersecurity.org for every service, About, Vision, Leadership bios, Learning Platform, Contact (fetched October 2026).
- Leadership: Damond Singleton (CEO and Founder), Tremicka Bryant (VP of Procurement), Corey Thurman (Chief Governance Risk and Compliance Officer), Algarnon Stamps (Chief Technology Officer), Emery De Cavitch (Chief Information Security Officer). Headshots on the Squarespace CDN.
- Partners shown on the live site: AppGuard, Uponder, Krimson Group, RangeForce. Training partner: CyberBit.
- MBE certification by NMSDC Chicago.
- Blog posts by Damond Singleton (2023 to 2025).
- Absent and not to be invented: client names, case studies, testimonials, response-time SLAs, headcount, revenue, contract vehicles, NAICS codes, CAGE/UEI numbers. Mark these as slots for Apex to supply.

## Product Principles

1. Bid-file ready: every service page should answer "what exactly do you do" in a form a procurement officer can paste into a shortlist.
2. Credentials and location, stated plainly: certifications and the UK office are facts, shown once and clearly, not decoration. Uncertified claims stay as visible slots.
3. One partner across cyber, physical and workforce: the breadth is the differentiator, so show it as one system.
4. Never invent proof. Where Apex has no evidence on the page yet, leave a clearly marked slot.
5. The incident line is always one tap away.

## Accessibility & Inclusion

Public-sector buyers commonly require WCAG 2.1 AA (Section 508 alignment). Treat AA as the floor.
