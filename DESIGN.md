---
name: Apex Cybersecurity Solutions
description: The trusted cybersecurity company, laid out as a NIST CSF 2.0 framework profile.
colors:
  paper: "#f5f6f3"
  paper-2: "#eaece7"
  ink: "#0b1f33"
  ink-2: "#44515f"
  rule: "#c5cbc4"
  ink-band-muted: "#b9c3cc"
  on-band-white: "#ffffff"
  gv: "#d4a017"
  id: "#2f6db5"
  pr: "#6b3fa0"
  de: "#e07a1f"
  rs: "#c4342d"
  rc: "#23774a"
typography:
  display:
    fontFamily: "Archivo, Public Sans, sans-serif"
    fontSize: "clamp(2.6rem, 1.7rem + 3.4vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  monogram:
    fontFamily: "Archivo, Public Sans, sans-serif"
    fontSize: "clamp(5rem, 3rem + 7vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Public Sans, sans-serif"
    fontSize: "clamp(2.3rem, 1.6rem + 2.8vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, Public Sans, sans-serif"
    fontSize: "clamp(1.7rem, 1.3rem + 1.6vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  title-sm:
    fontFamily: "Archivo, Public Sans, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + .4vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 100"
  lede:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + .45vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'kern', 'liga'"
  small:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: ".9rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: ".8rem"
    fontWeight: 600
    letterSpacing: "0"
  button:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  code:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: ".8rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0"
    fontFeature: "'tnum'"
  clock:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "clamp(4rem, 2.2rem + 8vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: "-0.03em"
    fontFeature: "'tnum'"
rounded:
  none: "0"
  hairline: "2px"
  circle: "50%"
spacing:
  s1: ".5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2.5rem"
  s5: "4rem"
  s6: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  gutter: "clamp(16px, 4vw, 48px)"
  max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: ".7rem 1.25rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.id}"
    textColor: "{colors.on-band-white}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: ".7rem 1.25rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-on-ink-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: ".7rem 1.25rem"
    height: "48px"
  header:
    backgroundColor: "{colors.paper}"
    height: "76px"
  nav-link:
    textColor: "{colors.ink}"
    padding: "0 .8rem"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.id}"
  nav-menu:
    backgroundColor: "{colors.paper}"
    padding: ".5rem 0"
    width: "290px"
  watch-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    height: "38px"
  wheel-tab:
    textColor: "{colors.ink-2}"
    padding: ".5rem .85rem .6rem"
    height: "44px"
  wheel-tab-selected:
    textColor: "{colors.ink}"
  function-mark:
    textColor: "{colors.ink}"
    typography: "{typography.code}"
  band-gv:
    backgroundColor: "{colors.gv}"
    textColor: "{colors.ink}"
  band-id:
    backgroundColor: "{colors.id}"
    textColor: "{colors.on-band-white}"
  band-pr:
    backgroundColor: "{colors.pr}"
    textColor: "{colors.on-band-white}"
  band-de:
    backgroundColor: "{colors.de}"
    textColor: "{colors.ink}"
  band-rs:
    backgroundColor: "{colors.rs}"
    textColor: "{colors.on-band-white}"
  band-rc:
    backgroundColor: "{colors.rc}"
    textColor: "{colors.on-band-white}"
  band-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  table-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    padding: ".65rem 1rem .65rem 0"
---

# Design System: Apex Cybersecurity Solutions

## Overview

**Creative North Star: "The Framework Profile"**

The site is written as a NIST Cybersecurity Framework 2.0 profile, not as a security brochure. Each of the six CSF functions, Govern, Identify, Protect, Detect, Respond and Recover, has its own color, and those six colors are the whole palette. They are not small chips on white. They fill full-width bands at full saturation, so a page reads as a run of function regions. Between the bands is a cool, slightly green-grey paper with navy ink. Hierarchy comes from weight, width and color, ruled off by hairlines like a printed standards document. There are no cards, boxes or drop shadows holding content.

The tone is documentary and procurement-grade. Figures and tables are numbered and captioned ("Fig. 1", "Table 2."). Outcome IDs such as `DE.CM` sit in a monospace beside the plain-language line they index. Service pages print cleanly as one sheet for a bid file. Two live details keep the page from feeling static. A 24-hour watch line at the top shows where "now" falls in the Chicago day. The interactive CSF wheel answers "what do you cover" for any function in one click.

The confirmed rejections come from the direction contract: no dark data-center photography, no neon padlocks, no card grid of services.

**Key Characteristics:**
- Six full-saturation CSF function colors on cool paper and navy ink. The colors fill whole bands.
- Archivo set wide for display, Public Sans (the USWDS face) for text, Red Hat Mono only for IDs and clocks.
- No enclosing boxes: hairline rules, a 2px ink rule to open a list, and filled cells.
- Numbered, captioned figures and tables throughout.
- One orchestrated entrance (the wheel). All other motion is state feedback on an exponential ease-out.
- Square corners (2px at most), except true circles: portraits, the MBE seal and the watch dot.

## Colors

The palette is saturated and works by role. Six function hues carry meaning, and a quiet paper-and-ink neutral pair carries everything else.

### Primary
- **Govern Gold** (gv): Govern. It fills the wheel's hub and the Govern band and takes navy ink (7.0:1). On the navy ink band it is also the hover color for the close-band contact lines and the text selection color.
- **Identify Blue** (id): Identify. It is the one function color with a second, system-wide job as the interaction color: button hover fill, nav and link hover text, the 3px focus ring, and the second line of the hero headline. It takes white ink (5.3:1) and reads at 4.9:1 as text on paper.
- **Protect Purple** (pr): Protect, and the Apex Institute band. It takes white ink (7.4:1).
- **Detect Orange** (de): Detect. It also marks "now": the watch-line progress bar and dot, the big Chicago clock band, and the text selection color on paper. It takes navy ink (5.5:1).
- **Respond Red** (rs): Respond, and the Contact page header with the incident call. It takes white ink (5.4:1).
- **Recover Green** (rc): Recover. It takes white ink (5.5:1).

### Neutral
- **Cool Paper** (paper): Page ground, the sticky header (at 94% with a backdrop blur), the mobile menu sheet and dropdowns. It is also the 5px stroke that separates wheel segments.
- **Paper Shade** (paper-2): Hover fill for matrix rows and dropdown items, and the scrollbar track.
- **Navy Ink** (ink): All primary text and the primary button fill. It also makes the 2px opening rules, the navy ink band (watch strip and closing call-to-action) and `theme-color`. Its contrast on paper is 15.4:1.
- **Slate** (ink-2): Secondary text, captions, table heads, unselected wheel tabs and footer column heads (7.5:1 on paper).
- **Hairline** (rule): Every 1px divider: table rows, definition lists, list rows, the header bottom border, the wheel's outer hairline circle and the empty "off" dots in the matrix.
- **Ink-Band Mist** (ink-band-muted): Muted text on the navy ink band only (9.3:1).
- **On-Band White** (on-band-white): Ink for the ID, PR, RS and RC bands.

Inside any band, muted text is derived rather than fixed: `color-mix(in srgb, fg 92%, bg)`. Hairlines on a band are the foreground at 30 to 45% opacity.

### Named Rules
**The Six Functions Rule.** A function color always means its function: its band, its wedge, its tab underline, its matrix cell, its code square. Only three secondary jobs are sanctioned: Identify Blue for interaction (hover, focus), Detect Orange for "now" and selection, and Govern Gold for hover and selection on the navy ink band. Never use a function color as plain decoration.

**The Full-Bleed Band Rule.** When a function color appears at scale, it fills the full width of the viewport at full saturation and inverts everything inside it. Text takes the band's ink. The primary button becomes ink-on-band, and the line button keeps a border in the band's ink. Do not tint, fade or box a function color.

**The Paired Ink Rule.** Gold and orange take navy ink. Blue, purple, red and green take white. The pairings are fixed in `--{fn}-ink` and every band, wedge and label follows them.

## Typography

**Display Font:** Archivo, variable width and weight (with Public Sans, sans-serif)
**Body Font:** Public Sans (with system-ui, sans-serif)
**Label/Mono Font:** Red Hat Mono, 500 and 700 (with ui-monospace, monospace)

**Character:** Archivo runs expanded (width axis 104 to 125) and tight-tracked, so headings feel engineered and slightly institutional. Public Sans is the U.S. Web Design System typeface, so body text reads as public-sector plain language. Red Hat Mono is the instrument voice for framework IDs and the clock.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 1.7rem + 3.4vw, 4.6rem)`, 1.04, width 112, -0.03em): The closing "Put a certified partner on your shortlist" heading on the navy ink band, at a 14ch measure. The home hero h1 is a sibling one-off at `clamp(2.5rem, 1.6rem + 2.6vw, 3.6rem)` with width 112 and line-height 0.98. Its second line is in Identify Blue.
- **Monogram** (800, `clamp(5rem, 3rem + 7vw, 9.5rem)`, 0.8, width 125, -0.04em): The giant two-letter function code (GV, ID, PR …) that heads each function band on Services.
- **Headline** (700, `clamp(2.3rem, 1.6rem + 2.8vw, 4rem)`, 1.04, width 108): Page h1, at a max of 18ch in page heads. Headings use `text-wrap: balance`.
- **Title** (700, `clamp(1.7rem, 1.3rem + 1.6vw, 2.6rem)`, 1.04, width 108): Section h2.
- **Title Small** (700, `clamp(1.2rem, 1.1rem + .4vw, 1.4rem)`, 1.2, width 100): h3 and prose subheads. List-row names (related services, contact values, leader names) use Archivo 700 at width 104 to 106 between title-sm and title size.
- **Lede** (400, `clamp(1.15rem, 1.05rem + .45vw, 1.4rem)`, 1.45): Opening paragraph, 46ch (52ch in page heads).
- **Body** (400, 1.0625rem, 1.6): Running text, with a 68ch max measure and `text-wrap: pretty`.
- **Small** (400, .9rem): Captions, table cells, definition-list terms, footer.
- **Label** (600, .8rem, no tracking, sentence case): Table column heads, footer column heads, the watch strip. Labels are never uppercase and never letter-spaced.
- **Code** (Red Hat Mono 500, .8rem, tabular figures): Framework IDs (`DE.CM`, `GV.PO`), function codes and the watch-strip clock. The large Chicago clock on the Detect band is Red Hat Mono 700 at `clamp(4rem, 2.2rem + 8vw, 9rem)`.

### Named Rules
**The Expanded Display Rule.** Archivo always runs wider than normal: 108 for headings, 112 for display, 125 for monograms and 104 to 106 for row names. Only h3 returns to 100. A normal-width Archivo heading is off-system.

**The Mono-Is-Data Rule.** Red Hat Mono is reserved for framework IDs, function codes and clock time. Never set prose, buttons or headings in it.

## Layout

The layout is a single centered column, `max` wide (1320px), with a fluid `gutter` of 16 to 48px. Bands run full-bleed and their content sits in the same column. Vertical rhythm comes from a six-step scale. Standard sections pad by `s6` (fluid 4.5 to 8.5rem) and tight sections by `s5` (4rem). Page heads use their own fluid padding of 3 to 6rem on top and 2.5 to 4rem on the bottom.

Composition is on a 12-column grid. The `split` pattern puts main content in columns 1 to 7 and a side column in 9 to 12, which leaves column 8 as air. Two-part sections favor asymmetric 4:8 or 5:7 ratios: the hero (4fr/8fr with the wheel on the right), function bands (4fr/8fr), the profile head and certification block (5fr/7fr), and the closing band (1.3fr/1fr). Lists are rows, not grids of tiles. The only tile-like grid is the leadership row of five portraits.

**Responsive behavior.** At 1080px the desktop nav and its CTA give way to a burger and a full-screen paper menu sheet, and the hero stacks with the wheel below the copy. At 860px split layouts stack, the close band goes to one column, the watch line drops its track, and tables turn each row into a two-line stacked block with the header hidden. At 640px the wheel stacks above its panel (max 420px) and the tabs wrap three per row. At 520px the logo shrinks to 36px, the watch label hides, and the footer goes to one column.

**Print.** A service page prints as a bid-file sheet. Chrome, the close band and actions are hidden, and bands keep their color (`print-color-adjust: exact`). Margins are 14mm, body is 10.5pt, and links inside prose and tables print their full URL.

### Named Rules
**The No-Box Rule.** Content is never enclosed in cards or bordered panels. Use 1px hairlines between rows, a 2px ink rule to open a list, section or table head, and filled cells or bands for emphasis.

**The Numbered Figure Rule.** Every figure and data table carries a caption that starts with a bold sequence label ("Fig. 1", "Table 2."). Fig. captions sit below, above a hairline. Table captions sit above.

## Elevation & Depth

The system is flat. Depth comes from tonal layering (paper against full-saturation bands against navy ink), hairline rules and the wheel's physical extrusion, not from shadows. Content surfaces have no shadow at rest or on hover. Shadows exist only in the floating chrome and in "now" markers.

### Shadow Vocabulary
- **Dropdown lift** (`box-shadow: 0 18px 40px -12px rgba(11, 31, 51, .28)`): Desktop nav dropdowns only, paired with a 2px ink top border.
- **Now halo** (`box-shadow: 0 0 0 3px rgba(224, 122, 31, .3)`): The orange "now" dot on the watch line.
- **Current-page underline** (`box-shadow: inset 0 -2px 0 #0b1f33`): Marks the active top-level nav link.
- **Glass header** (`background: color-mix(in srgb, paper 94%, transparent); backdrop-filter: saturate(1.4) blur(10px)`): The sticky header over scrolling content, with a 1px hairline beneath.

### Named Rules
**The Flat Content Rule.** Shadows belong to floating chrome (dropdowns) and the live "now" marker, never to content. Use a rule or a band for emphasis, never a lifted card.

## Shapes

Corners are square. Buttons and the focus ring take a 2px corner (`hairline`) that only softens the edge. Bands, matrix cells, wedge fills, photographs and figures are fully square. True circles are the only rounded forms, and each has a reason: leadership portraits (grayscale, back to color on hover), the MBE certification seal (a 2px ink ring with "MBE" in Archivo 800 at width 120), and the watch-line "now" dot. The recurring silhouette is the small filled square of the function mark, sized at .8em in the function color.

The wheel is the one curved geometry. It has five annular wedges (outer radius 270, inner 112, 72° each) around a Govern hub (radius 98), and the wedges are separated by 5px paper strokes. Rim ticks count the services under each function.

## Components

### Buttons
Square, solid and readable. They should feel like form controls on an official document.
- **Shape:** Near-square (2px radius), 48px minimum height, 1.5px border in the fill color, with an icon gap of .6em.
- **Primary:** Navy ink fill with paper text, Public Sans 600 at 1rem, padding .7rem 1.25rem. A trailing stroke arrow marks forward actions.
- **Hover / Focus:** The fill turns Identify Blue with white text (.25s, exponential ease-out). Focus is a 3px Identify Blue outline offset 3px. Inside a band the outline uses the band's ink.
- **Line (secondary):** Transparent with ink text and a 1.5px ink border. On hover it fills ink with paper text. It is used for the phone call, print-for-bid-file and secondary routes.
- **On a band:** The colors invert. The primary uses the band's ink as fill and the band color as text, and on hover becomes transparent with band-ink text. The line button uses band ink and fills with it on hover.
- **Arrow link:** An inline text action, weight 600, with a 1.5px underline at the bottom edge. Its arrow nudges 4px right on hover.

### Function Marks (chips)
- **Style:** A .8em filled square in the function color, followed by the code in Red Hat Mono 500 (`.fn`) or the function name in Public Sans 600 (`.fn--name`). There is no background or border. On a band the square gets a 1px outline in the band's ink at 60%.
- **Use:** In page-head function lists (above a hairline), the Services jump nav, footer "By function" links, table category cells and related-service rows.

### Rows and Tables (in place of cards)
- **Tables:** Full width and borderless except for hairlines. The head is a 2px ink top rule with slate .8rem labels, and rows are separated by 1px hairlines. The first column is the item name in 600 weight. Captions read "Table n." in bold. Below 860px each row stacks into a block.
- **Coverage matrix (home):** Function columns topped by a 4px bar in the function color. A "yes" cell is a filled block of the function color inset 4px, and a "no" cell is a 4px rule-colored dot. Rows hover to Paper Shade.
- **Definition lists (vendor facts, at-a-glance):** A slate term over a 600-weight value, with hairlines between. Values Apex has yet to supply appear in italic slate with a dashed underline as "Apex to supply". They are marked slots, never invented facts.
- **Link rows (function band list, related services, contact lines, close lines):** Grid rows of mono ID, label and arrow, with 1px hairlines and a 2px rule on top. On hover the arrow nudges 5px and the label underlines or turns Identify Blue.

### Navigation
- **Watch strip:** A 38px navy ink band above the header. It holds "Security Conservators (SC)® on watch, 24 hours a day", a 24-hour track with 25 ticks (every sixth one taller), an orange elapsed bar and "now" dot set from Chicago time, a mono clock "Chicago HH:MM CT", and the incident phone link. Below 860px the track hides, and below 520px the label hides too, so the phone is always shown.
- **Header:** Sticky, 76px, glass paper, with a 48px logo. Nav links are Public Sans 600 at .975rem with a 44px target, and turn Identify Blue on hover. The current page gets a 2px inset ink underline. Dropdowns open on hover (pointer devices) or click, have a 2px ink top border and the dropdown-lift shadow, and fade with a 4px rise. The first item is bold. The "Contact us" primary button closes the row.
- **Mobile:** Below 1080px a 48px burger opens a full-screen paper sheet with focus trapped inside. It holds Archivo 700 1.35rem rows (`details` disclosures for groups) separated by hairlines, and ends in a full-width "Call" button.
- **Footer:** A 1.4fr + 4 column grid on paper. Column heads are slate labels. A hairline base row carries the NIST non-endorsement notice.

### Function Band
The building block of the world. A full-bleed section in one function color with the paired ink, padded fluidly from 3.5 to 6.5rem. On Services it pairs a 4-column identity block (Monogram code, Title name, one muted line) with an 8-column link-row list that opens on a 2px band-ink rule. The same band treatment also heads service pages (in the service's primary function), the Contact page (Respond Red) and the home clock band (Detect Orange).

### CSF Wheel (signature)
Fig. 1 on the home page and the site's working index. It is a tablist of six function tabs (slate 500 .9rem, with a 3px underline in the function color when selected) above an SVG wheel and a panel.
- **Geometry:** Govern is the hub, and the other five wedges run clockwise from Identify at top. Each wedge carries its name (Archivo 700, 25px, width 106) and code (Red Hat Mono 18px) in the paired ink. Rim ticks (3px strokes) count the services under each function.
- **States:** Hovering a wedge pushes it 6px outward along its center angle. A selected wedge extrudes 16px and takes a 3px ink stroke. The selected hub scales to 1.06. Detect is selected by default.
- **Panel:** A function mark and Archivo name, a one-line slate summary, an ordered list of services with mono IDs on hairline rows, and an arrow link to that function's Services band. A new panel fades up 6px over .5s.
- **Entrance:** On load the segments draw in from `scale(.72) rotate(-14deg)` over 1s on the exponential ease, staggered 90ms after a 150ms delay. This is the site's only orchestrated entrance. It runs only with JS and `prefers-reduced-motion: no-preference`.
- **Access:** Full ARIA tabs with arrow, Home and End keys. Clicking a wedge selects the matching tab.

### Photography
Photographs are product evidence (key card reader, camera range, surveillance trailer, Chicago skyline) shown square-cornered inside a numbered, captioned figure. Partner logos are grayscale with a multiply blend at 85% opacity and return to color on hover. A blog post with no image gets a function-band tile showing its function code instead of a stock image.

## Do's and Don'ts

### Do:
- **Do** fill whole, full-width bands with a single function color at full saturation, and pair it with its fixed ink (navy on gold and orange, white on blue, purple, red and green).
- **Do** use Identify Blue as the hover and focus color, and Detect Orange to mark "now".
- **Do** set every heading in Archivo at an expanded width (108 for headings, 112 for display, 125 for monograms).
- **Do** use Red Hat Mono only for framework IDs, function codes and clock time.
- **Do** separate content with 1px hairlines (`rule`) and open lists, tables and sections with a 2px ink rule.
- **Do** number and caption every figure and table ("Fig. 1", "Table 2.") in bold, followed by a plain sentence.
- **Do** keep the incident phone number visible in the watch strip at every breakpoint.
- **Do** mark missing vendor facts as italic "Apex to supply" slots rather than inventing them.
- **Do** keep motion on the exponential ease-out `cubic-bezier(.16, 1, .3, 1)`, and keep the wheel's draw-in as the only entrance animation.
- **Do** check every new band and text pairing against WCAG 2.1 AA, which is the floor for public-sector buyers.

### Don't:
- **Don't** enclose content in cards, tiles or bordered boxes, and don't lift content with shadows.
- **Don't** use a function color for plain decoration, as a tint or a gradient, or in a role unrelated to its function.
- **Don't** add colors beyond the six function hues and the paper and ink neutrals.
- **Don't** round content corners beyond 2px. Circles are reserved for portraits, the MBE seal and the "now" dot.
- **Don't** use dark data-center photography, neon padlock imagery or a card grid of services.
- **Don't** set labels in uppercase or with letter-spacing. Labels are sentence case at .8rem, weight 600.
- **Don't** add a second orchestrated entrance or scroll-triggered reveals.
