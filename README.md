# Durga Yasas — portfolio

An editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide. Fonts are bundled locally through Fontsource; no font service is required at runtime.

## Development

Use Node.js 24 and npm 11 (the versions verified in this environment).

```sh
cd /workspace/Personal-Portfolio
npm ci --cache /workspace/.npm-cache
npm run dev
```

The development server listens on port 3000. The explicit cache path keeps npm writes inside the cloud workspace. Locally, `npm ci` can use the default cache.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

No environment variables, API keys, or external services are required. Do not run development and production servers on the same port at the same time.

## Structure

- `app/page.tsx`: homepage section composition and featured work.
- `app/work/[slug]/page.tsx`: statically generated case-study template and metadata.
- `app/globals.css`: responsive visual system and illustrative product surfaces, alongside Tailwind.
- `components/`: navigation, scroll reveals, cards, UI illustrations, and footer.
- `components/project-thumbnail.tsx` and its CSS module: responsive homepage artwork, editorial feature copy, source labels, and hover/focus motion. Each project's `thumbnail` in `data/projects.ts` configures its artwork, headline, and detail line independently from the article cover.
- `components/hero.tsx` and `components/hero.module.css`: the centered hero based on the supplied reference, using the shared dark theme.
- Hero sizing is scoped to `components/hero.module.css`: the heading scales from `2.25rem` up to `5.5rem` (36–88px at the default root size), with a compact portrait and larger supporting copy, actions, and statistics. Actions wrap on narrow screens and metrics keep three equal columns. Edit `.title` to tune the headline size; the mobile override adjusts its spacing and line height.
- `data/profile.ts`: approved hero copy, statistics, portrait, and resume link.
- `data/about.ts`: reference-supplied career entries, achievements, and skill percentages.
- `data/practice.ts`: screenshot-supplied AI spotlight copy, five sprint steps/timings, and eleven tool self-ratings across four groups.
- `components/ai-innovation.tsx`, `toolkit.tsx`, and `practice-sections.module.css`: the two sections after Works, using the shared dark theme and reduced-motion-aware reveal/hover behavior.
- `data/experience.ts`: country locations, confirmed project descriptions, case-study links, and optional original logo paths for the interactive My experience map.
- `components/my-experience.tsx`, `experience-map.tsx`, and `my-experience.module.css`: the section between the hero and career journey. `experience-world-map.tsx` renders the locally bundled Natural Earth country outlines on the server; see `data/maps/README.md` for provenance.
- `components/career-journey.tsx` and `components/skills-expertise.tsx`: the two sections immediately after the hero; `profile-motion.tsx` provides the scroll-driven timeline and one-time skill-bar fills. Their styles live in `profile-sections.module.css`.
- `data/projects.ts`: typed project directions. Adding an entry generates another project route and homepage card.
- `data/case-studies/`: structured, source-based articles. `pickme-search-revamp.ts` transcribes the supplied 16-page **Durga Yasas.pdf**.
- `data/case-studies/seamless-payment-experience-at-the-table.ts`: the exact article wording from the supplied Carbonmade HTML export, with source image references for later asset replacement.
- `data/case-studies/revamping-ingenii-fleet-tracker.ts`: the article transcribed from the supplied 29-page **- Durga Yasas.pdf**, with 35 original images stored under `public/images/ingenii-fleet-tracker/`.
- `components/case-study-article.tsx`: article renderer for text, quotations, statistics, solutions, tables, and replaceable image positions.
- `components/case-study-journeys.tsx` and its CSS module: native journey tables, reaction curves, and responsive flow diagrams, configured in `data/case-studies/ingenii-journeys.ts`.
- `components/case-study-panels.tsx` and its CSS module: native competitor cards, persona cards, and design-system foundations. Fleet case-study content for these components lives in `data/case-studies/ingenii-native-sections.ts`.
- `components/upcoming-case-study.tsx`: a coming-soon page for projects whose articles have not been supplied. Their titles, icons, and cover line breaks are configured in `data/projects.ts`.

## Color palette

The site follows the latest dark reference: Midnight `#090B13` with a subtle Navy `#0C1222` opening background, Blue `#0066FF` primary actions, Cyan `#00C8EE` text accents, and cool dark card surfaces. The hero highlight blends blue into cyan; the availability dot remains green. Shared semantic tokens in `app/globals.css` theme the homepage, map, toolkit, and every case-study page. The favicon uses navy, light initials, and a cyan dot. Original project images and illustrative artwork retain their source colors; legacy warm primitive variables are isolated from website branding.

Typography uses dedicated `--text-*` tokens. Contrast against the Midnight base is:

| Token | Color | Contrast on Midnight |
| --- | --- | --- |
| `--text-primary` | `#F0F1F6` | 17.42:1 |
| `--text-body` | `#C4C8D6` | 11.77:1 |
| `--text-secondary` | `#A4ABBE` | 8.56:1 |
| `--text-accent` | `#00C8EE` | 9.82:1 |
| `--text-secondary-accent` | `#7DBBFF` | 9.75:1 |
| `--text-inactive` | `#9299AD` | 6.91:1 |

Normal text tokens are checked against the base, opening navy, card, raised-card, and accent-tinted surfaces. Filled blue buttons use separate pure-white action labels (4.83:1 normally; 5.99:1 on hover). Inverse labels use Midnight on the bright cyan/light-blue surfaces. The hero gradient is limited to the large bold heading and checked against the large-text threshold. Inactive map wordmarks remain opaque grey, so their lettering stays readable. Source image contents are outside these HTML/CSS typography measurements. The compatibility alias `--text-bronze` now resolves to the secondary blue accent.

## My experience map

The map fills the explorer without a country-chip toolbar or side panel. It starts with no country selected. Each confirmed project's brand badge sits beside its hotspot with a greyed-out, perspective-tilted appearance. Clicking a hotspot or available country outline activates that country's badges and opens an overlaid project description box. Native hotspot buttons support keyboard focus, Enter/Space, and touch. Hover and focus highlight hotspots without opening details. Escape or the close button dismisses the box and returns focus to its hotspot; clicking the selected hotspot also closes it. Small screens can pan the map, and selection brings the chosen marker into view without scrolling the page. Opening details focuses its country heading for screen readers. Reduced-motion mode disables transitions and popup entrance animation while retaining the static 3D badge treatment.

| Data property                            | Default / values                            | Purpose                                                     |
| ---------------------------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| Country `id`, `name`, `shortName`, `iso` | Four configured countries                   | Identity, visible labels, and country-outline matching      |
| `longitude`, `latitude`                  | Geographic coordinates                      | Marker position in the map's equirectangular projection     |
| `labelPosition`                          | `north`, `southWest`, `southEast`           | Keeps neighboring map labels apart                          |
| `projects`                               | An array; empty shows a coming-soon message | Project cards for the selected country                      |
| Project `brand`, `name`, `description`   | Supplied project content                    | Short wordmark fallback, title, and summary                 |
| Project `href`                           | Optional                                    | Enables a case-study link only where one exists             |
| Project `logo`                           | Optional `{ src, alt }`                     | Displays original logo artwork instead of the text wordmark |

Confirmed entries currently link PickMe Search Revamp to Sri Lanka and du Mobile via Arimac to the UAE. The Singapore and USA project lists await the owner's confirmation; no clients, locations, results, or roles have been inferred for them. Original logos were not supplied, so the current badges are text wordmarks. Add original assets under `public/images/logos/` and set each project's `logo`, for example `{ src: "/images/logos/pickme.svg", alt: "PickMe" }`. The map requires no API key, map SDK, geolocation permission, or external runtime requests.

## Content status

The confirmed biographical facts come from the supplied brief and hero reference: Durga Yasas is a Senior Product Designer. The reference supplies the availability status, specialization copy, and statistics (7+ years, 5M+ users impacted, and 3 design systems contributed). These are user-supplied profile statistics, not outcomes attributed to the illustrative projects.

The supplied portrait is visible in chat but its original image file was not available to the workspace. Until it is supplied, the hero explicitly uses a placeholder. To add the original without changing it, place it at `public/images/durga-yasas.jpg` (or its actual extension), set `profile.portrait` in `data/profile.ts` to `{ src: "/images/durga-yasas.jpg", alt: "Durga Yasas" }`, and rebuild. The circular crop is applied through CSS. Set `profile.resumeUrl` to a real local PDF path or approved URL to enable the resume download; it remains disabled until then. Neither the portrait nor a resume is synthesized.

**PickMe Search Revamp** uses the exact article wording from the supplied case-study PDF, including the role and period, interview quotations, research and testing percentages, solution descriptions, KPI definitions and before/after values, and reflections. Browser print dates, repeated page headers, URLs, and page counters are excluded. Line wrapping and page breaks are reflowed for the web; compound-word hyphens are preserved. The PDF is a case study, not a resume, and is not connected to the resume download button.

The PickMe homepage thumbnail uses an illustrative food-search cover, explicitly labeled as illustrative rather than original app UI. The article has 11 image positions with their original captions. When original images arrive, add them under `public/images/pickme-search-revamp/` and set the corresponding figure block's `image` field:

```ts
image: {
  src: "/images/pickme-search-revamp/grouped-suggestions-before.png",
  alt: "Description of the supplied design",
  width: 1600,
  height: 1000,
}
```

Use the actual image dimensions and a meaningful description. The renderer replaces that image's placeholder automatically. Original PickMe article images will be supplied later; the article's figure positions remain placeholders.

The two previous illustrative concept cards have been replaced with **Seamless Payment Experience at the Table** and **Revamping Ingenii Fleet Tracker**. All three homepage cards use coordinated image-led covers and appear in a single column. Each links to its supplied case study. The `upcoming` project type remains available for future titles whose articles have not yet been supplied.

Homepage thumbnail artwork for PickMe and table payments is generated illustration stored under `public/images/thumbnails/`. It depicts grouped food-search results and QR-based bill splitting/tipping respectively; the example UI and imagery are not original shipped product screens. Both covers display an Illustrative cover label, also conveyed in their accessible link names. The Ingenii thumbnail uses the actual original cover image from the supplied PDF, displayed in a CSS frame and labeled Original project UI. Article text, image galleries, and article headers remain separate from these homepage thumbnail settings.

**Seamless Payment Experience at the Table** transcribes the supplied **Seamless Payment Experience at the Table - Durga Yasas.html** export from the user's Carbonmade portfolio. All 107 non-empty article text fragments are retained in their original reading order across 15 sections. Original spelling, the repeated Wireframes heading, both value-impact sections, the research sample-size caveat, and the hypothetical test/KPI wording are preserved. Source line wrapping is reflowed for the web; navigation, site branding, and the copyright footer are excluded. No role or period is shown because neither is stated in the article.

The HTML references 15 original images but the companion image folder was not attached, and the remote image host was inaccessible from this environment. The competitor benchmarking position now uses a native table transcribed from the separately supplied image, retaining all eight columns and five services. It shares the site's dark palette, supports horizontal keyboard scrolling, keeps service names visible while scrolling, and labels the support symbols for screen readers. The User Research position also uses a native two-column Theme/Finding table transcribed from the supplied image, retaining all seven findings and the six-participant counts. It wraps within the article width on mobile. The other 13 positions and their supplied captions remain as image placeholders; each figure's `sourceImage` stores the original URL and dimensions. Add local assets under `public/images/seamless-payment-experience-at-the-table/` and populate each figure's `image` field to display them. No replacement project UI has been synthesized.

**Revamping Ingenii Fleet Tracker** uses the supplied PDF as the base article across 13 sections. Competitor Analysis, User Personas, and Design System now use the owner's newer screenshot content, selected explicitly over the original PDF content. The remaining content, including interview questions/answers, usability-testing feedback, captions, and original spelling, follows the PDF. User Journey and User Flow are now native reconstructions of their original diagrams, preserving their text and connections. Browser print headers, page counters, site navigation, and the copyright footer are excluded. The article does not state a role or project period, so neither is added.

The original Ingenii hero and remaining UI galleries use images extracted directly from the PDF at native resolution. All 35 original extracted assets remain available, including the superseded persona and design-kit boards. Images repeated by print pagination are stored once as complete assets; PDF transparency masks are retained. The optional `heroImage` field displays the original cover in the article; its homepage thumbnail has an independent composition using the same original asset. All 12 wireframe images render with transparent backgrounds, exposing their original alpha edges against the page. The other source images retain `background: "white"` to match the PDF's paper and keep their artwork legible. The PDF provides static frames rather than playable animations, so no animation or video has been recreated.

The native fleet sections are edited in `data/case-studies/ingenii-native-sections.ts`:

| Block | Editable properties | Current content / behavior |
| --- | --- | --- |
| `competitor-analysis` | `items`: name, optional logo, strengths, weaknesses | Fleetio, Motive, Verizon Connect; three columns when space allows, one column on narrow content widths |
| `personas` | `items`: name, role, age, summary, optional portrait, goals, pain points | Nihal Perera and Dilini Fernando from the new screenshots; two columns or one column; initials appear when no portrait asset is supplied |
| `design-system` | `colors`: name/value; `typography`: typeface, glyphs, role samples | Eight exact project swatches and five Inter type samples; paired panels stack on narrow content widths |

All findings, persona content, swatch labels/hex values, and typography samples are selectable HTML. Competitor logo headers reuse only the logo portions of the original boards through CSS clipping (`logo.crop: "board-header"`); a standalone logo asset can omit `crop`. Original photos are not reassigned to the new persona identities; add their own `portrait` assets when available. The Inter variable font is bundled through Fontsource and scoped to the type specimens; the portfolio retains Manrope. Project swatches preserve the screenshot's colors, while card surfaces and readable text follow the portfolio's shared theme tokens. The existing `#design-kit` section anchor remains valid, with `#design-system` available as an additional anchor. These are static informational components, with semantic headings and lists, no added focus stops, and no animation.

The User Journey and User Flow components are configured in `data/case-studies/ingenii-journeys.ts`:

| Block | Editable properties | Current content / behavior |
| --- | --- | --- |
| `user-journey` | `id`, `caption`, `phases`: title, activity, thought, reaction, opportunity | Six entity-tracking phases and four event-details phases, transcribed from the original diagrams |
| `user-flow` | `id`, `caption`, `nodes`: title, details, kind, x/y/width; `edges`: from/to and connector points | Eleven nodes and eleven source connections; desktop diagram becomes a linked outline when its content area is narrow |

Journey maps are semantic tables with labeled, keyboard-scrollable regions and sticky row headings. Reaction curves use native SVG lines and fixed-size SVG face markers; the icons do not stretch with the plot. Reaction labels describe the source pictograms (Smiling, Neutral, Frowning, Open mouth), not numeric research scores. Phase, activity, thought, and opportunity wording retains source grammar. The original goals and introductory text remain in the parent article.

Flow nodes are HTML headings and lists, with native SVG connectors rendered from the edge data. Both incoming branches retain their convergence at date selection. On narrow screens, the same nodes reflow into cards with explicit next-step anchor links; desktop screen readers receive the same branch relationships as text. The three original figure IDs remain valid anchors, and the source PNGs are retained for reference. The components render without JavaScript, introduce no new animation or dependencies, and inherit the portfolio's shared text colors.

GitHub is linked using the supplied repository owner's public profile; confirm the preferred contact destination before publication. A resume PDF and email address have not been supplied.

Motion respects the operating system's reduced-motion preference. Navigation supports keyboard focus, a skip link, and an Escape-dismissable mobile menu. Decorative mockups are hidden from assistive technology.

The career timeline, professional background badges, and four skill groups use the supplied career/skills reference. Key Achievements and Learnings has been removed from the homepage; its source entries remain in `data/about.ts` for reference. Percentage values are retained as supplied and exposed through labeled meters. On smaller screens the career timeline and skill cards stack vertically. Reduced-motion mode displays complete bars and a complete timeline without movement. The About navigation target remains the career section.

AI & Innovation Spotlight and My Toolkit follow Works and precede Contact. They replace the former Design Approach section and its closing design-principle note. Their copy, 60% iteration claim, sprint timings, and self-ratings come from the owner's supplied screenshots; no new performance figures or tool ratings are inferred. The five sprint steps are an ordered process, not a time-scaled schedule. Tool ratings are static five-star displays with screen-reader labels (for example, “4 out of 5 stars”), rather than editable rating controls. Filled and outlined star shapes distinguish their values without relying on color alone. The card grids adapt from four to two to one column; the sprint becomes a vertical sequence on small screens. Typography and icon colors use the existing high-contrast theme tokens. Edit the content in `data/practice.ts`.

No deployment has been configured or performed.
