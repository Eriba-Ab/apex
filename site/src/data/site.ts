// Site content for the UK site (apexcybersecurity.co.uk). Copy is drawn from apexcybersecurity.org
// (October 2026), tightened and localised; anything Apex has not published yet is marked `pending`.

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
  linkedin: 'https://www.linkedin.com/in/damondsingleton/',
  live: 'https://www.apexcybersecurity.org', // membership area and blog posts are hosted on the US site
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
    { cat: 'GV.PO', item: 'Compliance readiness for NIST, ISO 27001, HIPAA and CMMC', href: 'consulting.html#scope' },
    { cat: 'GV.RM', item: 'Risk advisory: objectives, measures and defensive strategy', href: 'consulting.html#scope' },
    { cat: 'GV.OV', item: 'Governance, risk and compliance oversight led by a Chief GRC Officer', href: 'team.html#corey-thurman' },
  ],
  ID: [
    { cat: 'ID.RA', item: 'Security risk assessments across infrastructure, policy and user behaviour', href: 'consulting.html#scope' },
    { cat: 'ID.RA', item: 'Vulnerability and threat analysis to find weaknesses and compliance gaps', href: 'consulting.html#scope' },
    { cat: 'ID.RA', item: 'Vulnerability management: misconfigurations and exposed credentials', href: 'mdr.html#scope' },
    { cat: 'ID.IM', item: 'Security architecture review for network, cloud and endpoints', href: 'consulting.html#scope' },
  ],
  PR: [
    { cat: 'PR.PS', item: 'Next-gen endpoint prevention that blocks known and new attacks', href: 'edr.html#scope' },
    { cat: 'PR.IR', item: 'Firewall, SD-WAN, SASE and software-defined networking', href: 'network-infrastructure.html#scope' },
    { cat: 'PR.AA', item: 'Key card, fob, mobile and keypad door access control', href: 'integrated-security-systems.html#access' },
    { cat: 'PR.PS', item: 'Secure DevOps and software development on Azure and AWS', href: 'devops.html#scope' },
    { cat: 'PR.AT', item: 'Security awareness workshops and the Apex Institute', href: 'learning-platform.html' },
  ],
  DE: [
    { cat: 'DE.CM', item: '24/7 Managed Detection and Response from a cloud-powered virtual SOC', href: 'mdr.html' },
    { cat: 'DE.CM', item: 'Continuous endpoint monitoring, recording and centralising of activity', href: 'edr.html#scope' },
    { cat: 'DE.AE', item: 'Real-time alerting and triage of critical events', href: 'mdr.html#scope' },
    { cat: 'DE.CM', item: 'Enterprise security cameras with cloud video management', href: 'integrated-security-systems.html#cameras' },
    { cat: 'DE.CM', item: 'Solar-powered mobile surveillance trailers, for rent or purchase', href: 'mobile-surveillance-trailers.html' },
  ],
  RS: [
    { cat: 'RS.MI', item: 'Host isolation that stops lateral spread on your behalf', href: 'edr.html#scope' },
    { cat: 'RS.MA', item: 'Rapid containment with detailed remediation guidance', href: 'mdr.html#scope' },
    { cat: 'RS.AN', item: 'Active threat hunting and root cause determination', href: 'edr.html#scope' },
    { cat: 'RS.MA', item: 'Incident response planning and tabletop exercises', href: 'consulting.html#scope' },
  ],
  RC: [
    { cat: 'RC.RP', item: 'Response and recovery protocols, tested before you need them', href: 'consulting.html#scope' },
    { cat: 'RC.RP', item: 'Cloud and network infrastructure rebuild and managed services', href: 'network-infrastructure.html#scope' },
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
    lede: 'Assessment and advisory work that shows you where you stand, closes the gaps, and keeps you compliant.',
    body: [
      'Apex provides comprehensive cybersecurity assessment and consulting services designed to help organisations identify risks, strengthen defences and align with industry best practices.',
      'Our advisory work covers risk and compliance end to end: identifying security gaps, mitigating threats, measuring objectives and building defensive strategies your leadership can stand behind.',
    ],
    scopeTitle: 'Scope of consulting services',
    scope: [
      { item: 'Security risk assessments', desc: 'In-depth evaluation of your security posture, including infrastructure, policies and user behaviour.', cat: 'ID.RA' },
      { item: 'Vulnerability and threat analysis', desc: 'Scanning and assessment of systems to find potential threats, weaknesses and compliance gaps.', cat: 'ID.RA' },
      { item: 'Governance, risk and compliance readiness', desc: 'Guidance on achieving and maintaining standards such as NIST, ISO 27001, HIPAA and CMMC.', cat: 'GV.PO' },
      { item: 'Security architecture review', desc: 'Analysis and optimisation of network, cloud and endpoint architecture to reduce risk exposure.', cat: 'ID.IM' },
      { item: 'Incident response planning and tabletop exercises', desc: 'Development and testing of response protocols so your team is ready before a breach.', cat: 'RS.MA' },
      { item: 'Security awareness and training', desc: 'Custom workshops and simulations that improve cyber hygiene and reduce human error.', cat: 'PR.AT' },
    ],
  },
  {
    slug: 'mdr',
    name: 'Managed Detection and Response',
    short: 'Managed Detection & Response',
    fns: ['DE', 'RS', 'ID'],
    lede: '24/7 protection and monitoring from a cloud-powered virtual Security Operations Centre.',
    body: [
      'Apex delivers Managed Detection and Response through virtualised SIEM technology: multi-tenant, cloud security delivered as a service (SECaaS).',
      'From a cloud-powered virtual Security Operations Centre, our Security Conservators (SC)® monitor your environment and respond to threats, analysing packets and system processes in real time.',
    ],
    scopeTitle: 'What MDR includes',
    scope: [
      { item: 'Dedicated 24x7 security operations', desc: 'Your environment is monitored around the clock by the Security Conservators (SC)® team.', cat: 'DE.CM' },
      { item: 'Monitoring', desc: 'Collect actionable intelligence from your IT environment, scan endpoints for vulnerabilities and misconfigurations, and respond to threats.', cat: 'DE.CM' },
      { item: 'Real-time alerting', desc: 'Contain incidents quickly, with detailed guidance on remediation.', cat: 'RS.MA' },
      { item: 'Issue triage', desc: 'Critical events surfaced with actionable insight, not noise.', cat: 'DE.AE' },
      { item: 'Vulnerability management', desc: 'Discovery of digital risks such as system misconfigurations and exposed corporate credentials.', cat: 'ID.RA' },
      { item: 'Cloud monitoring', desc: 'Identify cloud risks, monitor cloud platforms and simplify cloud security.', cat: 'DE.CM' },
      { item: 'Unlimited logs', desc: 'Unlimited access to your own data.', cat: 'DE.CM' },
    ],
  },
  {
    slug: 'edr',
    name: 'Endpoint Detection and Response',
    short: 'Endpoint Detection & Response',
    fns: ['PR', 'DE', 'RS'],
    lede: 'Threat hunting, identification and mitigation on every laptop, desktop, server and mobile device.',
    body: [
      'Apex Endpoint Detection and Response protects endpoints through threat definitions, machine and behavioural learning, and isolation.',
      'It identifies suspicious behaviour and known threats, and uses next-gen endpoint prevention to block known and new attacks on compromised endpoints.',
    ],
    scopeTitle: 'Key capabilities',
    scope: [
      { item: '24x7 continuous monitoring', desc: 'Activity across endpoints is recorded and centralised around the clock.', cat: 'DE.CM' },
      { item: 'Prevention of known attacks', desc: 'Next-gen prevention blocks known threats before they run.', cat: 'PR.PS' },
      { item: 'Detection of unknown attacks', desc: 'Machine learning and advanced analytics detect and isolate new attacks.', cat: 'DE.AE' },
      { item: 'Alerting', desc: 'Alerts on confirmed threats and suspicious behaviour.', cat: 'DE.AE' },
      { item: 'Tactical containment', desc: 'Host isolation on your behalf to stop lateral spread.', cat: 'RS.MI' },
      { item: 'Active threat hunting', desc: 'Analysts look for threats that have not triggered an alert yet.', cat: 'RS.AN' },
      { item: 'Root cause determination', desc: 'Every incident is traced to how it started.', cat: 'RS.AN' },
      { item: 'Single agent', desc: 'One lightweight agent per endpoint.', cat: 'PR.PS' },
      { item: 'Continuous tuning', desc: 'Ongoing management, tuning and refinement of the detection platform.', cat: 'ID.IM' },
    ],
  },
  {
    slug: 'devops',
    name: 'DevOps and Application Development',
    short: 'DevOps & App Development',
    fns: ['PR', 'ID'],
    lede: 'DevOps consulting and engineering from Azure and AWS certified partners.',
    body: [
      'Apex is equipped with best-in-business developers. Collaborate with us to design precise solutions and applications that improve how your organisation works.',
      'We build, scale, optimise, maintain and manage to your requirements, with security designed in from the first sprint rather than bolted on at the end.',
    ],
    scopeTitle: 'Software development practice areas',
    scope: [
      { item: 'Web and mobile apps', desc: 'Public-facing and internal applications on web, iOS and Android.' },
      { item: 'E-commerce applications', desc: 'Secure transaction and storefront platforms.' },
      { item: 'Healthcare applications', desc: 'Applications built with patient data protection in mind.' },
      { item: 'Fintech', desc: 'Financial technology systems.' },
      { item: 'AI and machine learning', desc: 'Data-driven and model-backed applications.' },
      { item: 'SaaS', desc: 'Multi-tenant software delivered as a service.' },
      { item: 'Business intelligence', desc: 'Reporting and analytics for decision makers.' },
      { item: 'Database', desc: 'Design, migration and administration.' },
      { item: 'DevOps engineering', desc: 'CI/CD, infrastructure as code and cloud operations on Azure and AWS.' },
    ],
  },
  {
    slug: 'network-infrastructure',
    name: 'Network Infrastructure',
    short: 'Network Infrastructure',
    fns: ['PR', 'RC', 'ID'],
    lede: 'Cost-effective, scalable and secure networks, built and managed by certified engineers.',
    body: [
      'Network infrastructure services from Apex are tailored to your specific needs. We bring the expertise, services and technology to meet today’s goals while planning for future growth.',
      'Our certified infrastructure team designs, builds and manages networks that are cost-effective, scalable and secure, from the rack to the cloud.',
    ],
    scopeTitle: 'Infrastructure services',
    scope: [
      { item: 'Rack and stack', desc: 'Physical installation and cabling of network and server equipment.' },
      { item: 'Network and edge services', desc: 'Design and deployment from the core to the edge.' },
      { item: 'Private wireless services', desc: 'Secure private wireless networks for campuses and facilities.' },
      { item: 'Voice and video', desc: 'Unified communications infrastructure.' },
      { item: 'WAN', desc: 'Wide-area connectivity between sites.' },
      { item: 'Firewall', desc: 'Perimeter and internal segmentation.', cat: 'PR.IR' },
      { item: 'Software-defined networking (SDN)', desc: 'Programmable, centrally managed networks.', cat: 'PR.IR' },
      { item: 'SD-WAN and SASE', desc: 'Secure access for distributed sites and remote users.', cat: 'PR.IR' },
      { item: 'Cloud infrastructure managed services', desc: 'Ongoing management of cloud environments.', cat: 'RC.RP' },
    ],
  },
  {
    slug: 'integrated-security-systems',
    name: 'Integrated Security Systems',
    short: 'Integrated Security Systems',
    fns: ['PR', 'DE'],
    lede: 'Physical security that works with your network: door access control and enterprise camera systems.',
    body: [
      'Cyber and physical security are one problem. Apex designs and installs the access control and video systems that protect your buildings, and connects them to the same network discipline we bring to everything else.',
    ],
    scopeTitle: 'Physical security systems',
    scope: [
      { item: 'Key card access systems', desc: 'Electric door strikes with key cards, key fobs, mobile credentials or passcode keypads.', cat: 'PR.AA' },
      { item: 'Enterprise security cameras', desc: 'Custom camera systems with access control and cloud-based video management.', cat: 'DE.CM' },
    ],
  },
  {
    slug: 'mobile-surveillance-trailers',
    name: 'Mobile Surveillance Trailers',
    short: 'Mobile Surveillance Trailers',
    fns: ['DE'],
    lede: '24/7 eyes in the sky on your property: solar-powered camera trailers, for rent or purchase.',
    body: [
      'Apex delivers security camera trailers directly to your site, for rental or purchase.',
      'Trailers tow from site to site and can carry your organisation’s branding. Free technical support is included for the length of the rental.',
    ],
    scopeTitle: 'Every trailer comes equipped with',
    scope: [
      { item: '24/7 recording', desc: 'Continuous recording, day and night.' },
      { item: 'Motion detection', desc: 'Automated email and text alerts when motion is detected.' },
      { item: 'Solar power', desc: 'No gas needed.' },
      { item: 'Remote viewing', desc: 'View and retrieve stored footage from anywhere.' },
      { item: '20′ or 30′ mast', desc: 'Mounted on an industrial-grade trailer.' },
      { item: 'Self monitoring', desc: '24/7 access to live feeds, with zone-based alerts by email or text.' },
      { item: 'Central station monitoring', desc: 'Trained analysts monitor video alerts; emergency dispatch available at additional cost.' },
      { item: 'Free technical support', desc: 'Included throughout the rental.' },
    ],
  },
];

export const svc = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

export const LEADERS = [
  {
    id: 'damond-singleton', name: 'Damond Singleton', role: 'Chief Executive Officer and Founder', img: 'img/damond.webp',
    bio: 'Damond founded Apex with a mission to be an outstanding, first-class cybersecurity defender and leader, consistently crafting and delivering superlative, resilient cybersecurity and threat-mitigating outcomes. He is recognised as one of the top cybersecurity professionals in the industry for innovation and business acumen, with extensive experience at Fortune 100 companies.',
  },
  {
    id: 'tremicka-bryant', name: 'Tremicka Bryant', role: 'Vice President of Procurement', img: 'img/tremicka.webp',
    bio: 'An accomplished global sourcing leader with more than 17 years in the industry. Her competencies include procurement governance, strategic sourcing, vendor management and contract negotiation. She is recognised as an open-minded leader with a bias for action, ethics and integrity.',
  },
  {
    id: 'corey-thurman', name: 'Corey Thurman', role: 'Chief Governance, Risk and Compliance Officer', img: 'img/corey.webp',
    bio: 'A thought leader, coach and mentor to start-ups. Corey is a governance facilitator who ensures the effective delivery of strategic governance, legal and regulatory compliance, records management, and public and government relations.',
  },
  {
    id: 'algarnon-stamps', name: 'Algarnon Stamps', role: 'Chief Technology Officer', img: 'img/algarnon.webp',
    bio: 'An information technology scientist with an MBA and a Master’s in Project Management, a BS in Telecommunications Management, and certifications in security and virtualisation/VDI. He brings deep Linux expertise to every engagement.',
  },
  {
    id: 'emery-de-cavitch', name: 'Emery De Cavitch', role: 'Chief Information Security Officer', img: 'img/emery.webp',
    bio: 'More than 15 years in cybersecurity, specialising in incident handling, digital forensics and cloud incident handling teams.',
  },
];

export const PARTNERS = [
  { name: 'AppGuard', href: 'https://www.appguard.us/', img: 'img/appguard.webp' },
  { name: 'Uponder', href: 'https://uponder.com/', img: 'img/uponder.webp' },
  { name: 'Krimson Group', href: 'https://www.krimsongroup.com/', img: 'img/krimson.webp' },
  { name: 'RangeForce', href: 'https://rangeforce.com', img: 'img/rangeforce.webp' },
];


const BLOG = CONTACT.live + '/security-insight-blog/';
export const POSTS = [
  { title: 'Hackers Are Allegedly Using Flipper Devices to Steal Teslas and Break Into Hotel Rooms', date: '2025-04-14', img: 'img/blog-flipper.webp', href: BLOG + 'eaipt3f2jmllrk3uorv9tffpvyq45f', fn: 'PR' as FnCode },
  { title: 'Crowd Strikes!', date: '2024-07-30', img: 'img/blog-crowdstrike.webp', href: BLOG + 'crowd-strikes', fn: 'RS' as FnCode },
  { title: 'Online Holiday Shopping: Be Careful!', date: '2023-12-06', img: 'img/blog-holiday.webp', href: BLOG + 'ntnu0ktxlmvtc50gv1dp0w389trynx', fn: 'PR' as FnCode },
];

// Facts a procurement officer needs for a vendor file. `pending` = Apex to supply before launch.
export const VENDOR_FACTS: { label: string; value?: string; pending?: string }[] = [
  { label: 'Legal name', value: 'Apex Cybersecurity Solutions Ltd.' },
  { label: 'UK office', value: '52 High Street, Sevenoaks, Kent TN13 1JG' },
  { label: 'Cyber Essentials / Cyber Essentials Plus', pending: 'Apex to supply' },
  { label: 'ISO/IEC 27001', pending: 'Apex to supply' },
  { label: 'Cloud partnerships', value: 'Microsoft Azure and AWS' },
  { label: 'NAICS codes', value: '541512, 541519' },
  { label: 'UEI / CAGE', value: 'Q9F4N358L237' },
  { label: 'Contract vehicles', value: 'GSA MAS Schedule, NWAC' },
];

export const NAV = [
  { label: 'About', items: [['Company', 'about.html'], ['Our Vision', 'our-vision.html'], ['Leadership', 'team.html']] },
  { label: 'Services', items: [['All services by function', 'services.html'], ...SERVICES.map((s) => [s.short, `${s.slug}.html`])] },
  { label: 'Institute', items: [['Learning Platform', 'learning-platform.html'], ['Membership Access', `${CONTACT.live}/membership-access`], ['Events', 'events.html'], ['Security Blog', 'security-insight-blog.html']] },
  { label: 'Careers', href: 'careers.html' },
] as { label: string; items?: string[][]; href?: string }[];
