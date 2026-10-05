// Site content for Apex Cyber Security (apexcybersecurity.co.uk), Sevenoaks, Kent.
// All copy is original to this site. Anything Apex has not confirmed yet is marked `pending`
// and renders as a visible slot.

export const COMPANY = 'Apex Cyber Security';

export const CONTACT = {
  email: 'info@apexcybersecurity.co.uk',
  phone: '01322 400328',
  phoneHref: 'tel:+441322400328',
  mobile: '07881 813550',
  mobileHref: 'tel:+447881813550',
  city: 'Sevenoaks, Kent',
  address: ['52 High Street', 'Sevenoaks', 'Kent', 'TN13 1JG'],
  mapHref: 'https://www.google.com/maps/search/?api=1&query=52+High+Street+Sevenoaks+Kent+TN13+1JG',
  timeZone: 'Europe/London',
};

export type FnCode = 'GV' | 'ID' | 'PR' | 'DE' | 'RS' | 'RC';

export const FUNCTIONS: { code: FnCode; name: string; slug: string; line: string }[] = [
  { code: 'GV', name: 'Govern', slug: 'govern', line: 'Set the strategy, policy and oversight every other function answers to.' },
  { code: 'ID', name: 'Identify', slug: 'identify', line: 'Know your assets, your risks and exactly where you stand today.' },
  { code: 'PR', name: 'Protect', slug: 'protect', line: 'Safeguard endpoints, networks, doors and the people who use them.' },
  { code: 'DE', name: 'Detect', slug: 'detect', line: 'Watch everything, around the clock, and find attacks early.' },
  { code: 'RS', name: 'Respond', slug: 'respond', line: 'Contain incidents fast, with clear guidance on what to do next.' },
  { code: 'RC', name: 'Recover', slug: 'recover', line: 'Restore operations and come back with stronger defences.' },
];

export const fn = (code: FnCode) => FUNCTIONS.find((f) => f.code === code)!;

// What Apex delivers under each function. `cat` is the NIST CSF 2.0 category the item aligns to.
export const PROFILE: Record<FnCode, { cat: string; item: string; href: string }[]> = {
  GV: [
    { cat: 'GV.PO', item: 'Readiness for ISO/IEC 27001, NIST and other security standards', href: 'consulting.html#scope' },
    { cat: 'GV.RM', item: 'Risk advice that turns findings into a plan your board can sign off', href: 'consulting.html#scope' },
    { cat: 'GV.OV', item: 'Ongoing governance, risk and compliance support', href: 'consulting.html#scope' },
  ],
  ID: [
    { cat: 'ID.RA', item: 'Risk assessments covering systems, policies and how people work', href: 'consulting.html#scope' },
    { cat: 'ID.RA', item: 'Vulnerability scanning and threat analysis', href: 'consulting.html#scope' },
    { cat: 'ID.RA', item: 'Continuous discovery of misconfigurations and leaked credentials', href: 'mdr.html#scope' },
    { cat: 'ID.IM', item: 'Architecture reviews for network, cloud and endpoint security', href: 'consulting.html#scope' },
  ],
  PR: [
    { cat: 'PR.PS', item: 'Endpoint protection that stops known and emerging attacks', href: 'edr.html#scope' },
    { cat: 'PR.IR', item: 'Firewalls, SD-WAN, SASE and software-defined networks', href: 'network-infrastructure.html#scope' },
    { cat: 'PR.AA', item: 'Door access control with cards, fobs, phones or keypads', href: 'integrated-security-systems.html#access' },
    { cat: 'PR.PS', item: 'Secure software development and DevOps on Azure and AWS', href: 'devops.html#scope' },
    { cat: 'PR.AT', item: 'Security awareness sessions and analyst training', href: 'training.html' },
  ],
  DE: [
    { cat: 'DE.CM', item: 'Managed detection and response, monitored 24 hours a day', href: 'mdr.html' },
    { cat: 'DE.CM', item: 'Round-the-clock endpoint monitoring with a full activity record', href: 'edr.html#scope' },
    { cat: 'DE.AE', item: 'Alerts triaged by analysts before they reach you', href: 'mdr.html#scope' },
    { cat: 'DE.CM', item: 'CCTV and enterprise camera systems with cloud video management', href: 'integrated-security-systems.html#cameras' },
    { cat: 'DE.CM', item: 'Solar-powered surveillance trailers, to rent or buy', href: 'mobile-surveillance-trailers.html' },
  ],
  RS: [
    { cat: 'RS.MI', item: 'Isolating compromised devices so an attack cannot spread', href: 'edr.html#scope' },
    { cat: 'RS.MA', item: 'Fast containment, with step-by-step remediation advice', href: 'mdr.html#scope' },
    { cat: 'RS.AN', item: 'Threat hunting and root-cause investigation', href: 'edr.html#scope' },
    { cat: 'RS.MA', item: 'Incident response plans and tabletop exercises', href: 'consulting.html#scope' },
  ],
  RC: [
    { cat: 'RC.RP', item: 'Recovery plans, rehearsed before you need them', href: 'consulting.html#scope' },
    { cat: 'RC.RP', item: 'Rebuilding and managing cloud and network infrastructure', href: 'network-infrastructure.html#scope' },
  ],
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  fns: FnCode[];
  lede: string;
  body: string[];
  scopeTitle: string;
  scope: { item: string; desc: string; cat?: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'consulting',
    name: 'Consulting, Assessments and Compliance',
    short: 'Consulting & Compliance',
    fns: ['GV', 'ID', 'RS', 'RC'],
    lede: 'Find out where you stand, fix what matters most, and stay compliant.',
    body: [
      'We start by looking at your organisation the way an attacker or an auditor would: your systems, your policies and the way your people actually work.',
      'You get a clear picture of your risks, a prioritised plan to close the gaps, and support to meet the standards your customers and regulators expect.',
    ],
    scopeTitle: 'Scope of consulting services',
    scope: [
      { item: 'Risk assessment', desc: 'A structured review of your infrastructure, policies and day-to-day practices, ranked by risk.', cat: 'ID.RA' },
      { item: 'Vulnerability and threat analysis', desc: 'Scanning and testing to find weaknesses before someone else does.', cat: 'ID.RA' },
      { item: 'Compliance readiness', desc: 'Preparation for ISO/IEC 27001, NIST and other frameworks, through to audit.', cat: 'GV.PO' },
      { item: 'Architecture review', desc: 'Recommendations to harden your network, cloud and endpoint design.', cat: 'ID.IM' },
      { item: 'Incident response planning', desc: 'Written response and recovery plans, tested with your team in tabletop exercises.', cat: 'RS.MA' },
      { item: 'Security awareness', desc: 'Practical sessions and simulations that help staff spot and report threats.', cat: 'PR.AT' },
    ],
  },
  {
    slug: 'mdr',
    name: 'Managed Detection and Response',
    short: 'Managed Detection & Response',
    fns: ['DE', 'RS', 'ID'],
    lede: 'Your environment monitored by security analysts, 24 hours a day, every day of the year.',
    body: [
      'We collect and correlate security data from across your estate in a cloud-based security operations centre, so threats are spotted early, wherever they start.',
      'When something looks wrong, an analyst investigates, contains it where needed, and tells you exactly what happened and what to do next.',
    ],
    scopeTitle: 'What managed detection and response includes',
    scope: [
      { item: '24/7 monitoring', desc: 'Analysts watching your environment around the clock, including weekends and bank holidays.', cat: 'DE.CM' },
      { item: 'Alert triage', desc: 'Every alert is checked by a person, so you only hear about what matters.', cat: 'DE.AE' },
      { item: 'Containment and remediation', desc: 'Rapid action to stop an incident, with clear guidance to fix the cause.', cat: 'RS.MA' },
      { item: 'Exposure monitoring', desc: 'Ongoing checks for misconfigurations and leaked credentials.', cat: 'ID.RA' },
      { item: 'Cloud monitoring', desc: 'Visibility of risks across your cloud platforms and services.', cat: 'DE.CM' },
      { item: 'Log retention', desc: 'Your security data kept and available to you, without caps.', cat: 'DE.CM' },
    ],
  },
  {
    slug: 'edr',
    name: 'Endpoint Detection and Response',
    short: 'Endpoint Detection & Response',
    fns: ['PR', 'DE', 'RS'],
    lede: 'Protection for every laptop, desktop, server and mobile device, with a team ready to act.',
    body: [
      'Endpoint detection and response combines prevention with behavioural detection, so it stops known malware and spots the unusual activity that signals a new attack.',
      'If a device is compromised, we can isolate it immediately, find out how the attacker got in, and close the door behind them.',
    ],
    scopeTitle: 'Key capabilities',
    scope: [
      { item: 'Continuous monitoring', desc: 'Device activity recorded and analysed around the clock.', cat: 'DE.CM' },
      { item: 'Prevention', desc: 'Known threats blocked before they can run.', cat: 'PR.PS' },
      { item: 'Behavioural detection', desc: 'Machine learning and analytics that flag new and unknown attacks.', cat: 'DE.AE' },
      { item: 'Device isolation', desc: 'A compromised device cut off from the network to stop the spread.', cat: 'RS.MI' },
      { item: 'Threat hunting', desc: 'Analysts searching proactively for attackers who have not triggered an alert.', cat: 'RS.AN' },
      { item: 'Root-cause analysis', desc: 'Each incident traced back to its starting point.', cat: 'RS.AN' },
      { item: 'Ongoing tuning', desc: 'Detection rules refined over time to fit your environment.', cat: 'ID.IM' },
    ],
  },
  {
    slug: 'devops',
    name: 'DevOps and Application Development',
    short: 'DevOps & App Development',
    fns: ['PR', 'ID'],
    lede: 'Software and cloud platforms designed, built and run with security from the start.',
    body: [
      'Our developers and engineers build the applications your organisation needs, and the pipelines and cloud infrastructure that keep them running.',
      'Security is part of every stage, from design and code review to deployment and monitoring, on Microsoft Azure and AWS.',
    ],
    scopeTitle: 'Development practice areas',
    scope: [
      { item: 'Web and mobile applications', desc: 'Public-facing and internal applications for web, iOS and Android.' },
      { item: 'E-commerce', desc: 'Secure online shops and payment journeys.' },
      { item: 'Healthcare applications', desc: 'Software designed around the protection of patient data.' },
      { item: 'Financial technology', desc: 'Systems for payments, lending and financial services.' },
      { item: 'AI and machine learning', desc: 'Applications built on data and models.' },
      { item: 'Software as a service', desc: 'Multi-tenant products delivered over the cloud.' },
      { item: 'Business intelligence', desc: 'Dashboards and reporting for decision makers.' },
      { item: 'Databases', desc: 'Design, migration and administration.' },
      { item: 'DevOps engineering', desc: 'CI/CD pipelines, infrastructure as code and cloud operations.' },
    ],
  },
  {
    slug: 'network-infrastructure',
    name: 'Network Infrastructure',
    short: 'Network Infrastructure',
    fns: ['PR', 'RC', 'ID'],
    lede: 'Networks that are secure, scalable and sensibly priced, from the comms room to the cloud.',
    body: [
      'We design, install and manage network infrastructure around how your organisation works today, with room to grow.',
      'Our engineers handle everything from racking equipment and wireless surveys to firewalls, SD-WAN and managed cloud infrastructure.',
    ],
    scopeTitle: 'Infrastructure services',
    scope: [
      { item: 'Installation', desc: 'Racking, cabling and commissioning of network and server equipment.' },
      { item: 'Network and edge', desc: 'Core-to-edge network design and deployment.' },
      { item: 'Private wireless', desc: 'Secure wireless networks for offices, campuses and sites.' },
      { item: 'Voice and video', desc: 'Unified communications infrastructure.' },
      { item: 'Wide-area networking', desc: 'Reliable connections between your sites.' },
      { item: 'Firewalls', desc: 'Perimeter protection and internal segmentation.', cat: 'PR.IR' },
      { item: 'Software-defined networking', desc: 'Networks managed centrally and changed in software.', cat: 'PR.IR' },
      { item: 'SD-WAN and SASE', desc: 'Secure access for branch sites and remote staff.', cat: 'PR.IR' },
      { item: 'Managed cloud infrastructure', desc: 'Day-to-day management of your cloud environments.', cat: 'RC.RP' },
    ],
  },
  {
    slug: 'integrated-security-systems',
    name: 'Integrated Security Systems',
    short: 'Integrated Security Systems',
    fns: ['PR', 'DE'],
    lede: 'Access control and CCTV that work with your network, not alongside it.',
    body: [
      'Physical and cyber security protect the same organisation. We design and install access control and camera systems, then connect them to your network with the same care we give everything else.',
    ],
    scopeTitle: 'Physical security systems',
    scope: [
      { item: 'Access control', desc: 'Electric strikes and readers using cards, fobs, mobile credentials or keypads.', cat: 'PR.AA' },
      { item: 'Enterprise CCTV', desc: 'Camera systems with cloud-based video management and access control integration.', cat: 'DE.CM' },
    ],
  },
  {
    slug: 'mobile-surveillance-trailers',
    name: 'Mobile Surveillance Trailers',
    short: 'Mobile Surveillance Trailers',
    fns: ['DE'],
    lede: 'Self-powered camera towers for sites that need watching, available to rent or buy.',
    body: [
      'Our trailers bring CCTV to places without power or a network connection: construction sites, car parks, events and remote assets.',
      'Each unit is towed into place, runs on solar power and can be moved as your site changes. Technical support is included throughout a rental.',
    ],
    scopeTitle: 'Every trailer includes',
    scope: [
      { item: 'Continuous recording', desc: 'Footage recorded day and night.' },
      { item: 'Motion alerts', desc: 'Email and text notifications when movement is detected.' },
      { item: 'Solar power', desc: 'No generator or fuel needed.' },
      { item: 'Remote access', desc: 'Live view and recorded footage from anywhere.' },
      { item: 'Telescopic mast', desc: 'Cameras raised high for a wide view, on a heavy-duty trailer.' },
      { item: 'Self-monitoring', desc: 'Live feeds and zone-based alerts sent straight to your team.' },
      { item: 'Monitored option', desc: 'Alerts watched by trained operators, with escalation available.' },
      { item: 'Technical support', desc: 'Help whenever you need it during the rental.' },
    ],
  },
];

export const svc = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

// Facts a procurement officer needs for a supplier file. `pending` = Apex to supply before launch.
export const VENDOR_FACTS: { label: string; value?: string; pending?: string }[] = [
  { label: 'Company', value: 'Apex Cyber Security' },
  { label: 'Office', value: '52 High Street, Sevenoaks, Kent TN13 1JG' },
  { label: 'Companies House number', pending: 'Apex to supply' },
  { label: 'VAT number', pending: 'Apex to supply' },
  { label: 'Cyber Essentials / Cyber Essentials Plus', pending: 'Apex to supply' },
  { label: 'ISO/IEC 27001', pending: 'Apex to supply' },
  { label: 'Cloud platforms', value: 'Microsoft Azure and AWS' },
];

export const NAV = [
  { label: 'About', href: 'about.html' },
  { label: 'Services', items: [['All services by function', 'services.html'], ...SERVICES.map((s) => [s.short, `${s.slug}.html`])] },
  { label: 'Training', href: 'training.html' },
  { label: 'Careers', href: 'careers.html' },
] as { label: string; items?: string[][]; href?: string }[];
