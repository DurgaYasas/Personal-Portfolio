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

- `app/page.tsx`: homepage and approach content.
- `app/work/[slug]/page.tsx`: statically generated case-study template and metadata.
- `app/globals.css`: responsive visual system and illustrative product surfaces, alongside Tailwind.
- `components/`: navigation, scroll reveals, cards, UI illustrations, and footer.
- `components/project-thumbnail.tsx` and its CSS module: responsive homepage artwork, editorial feature copy, source labels, and hover/focus motion. Each project's `thumbnail` in `data/projects.ts` configures its artwork, headline, and detail line independently from the article cover.
- `components/hero.tsx` and `components/hero.module.css`: the centered hero based on the supplied reference, using the shared light theme.
- `data/profile.ts`: approved hero copy, statistics, portrait, and resume link.
- `data/about.ts`: reference-supplied career entries, achievements, and skill percentages.
- `data/experience.ts`: country locations, confirmed project descriptions, case-study links, and optional original logo paths for the interactive My experience map.
- `components/my-experience.tsx`, `experience-map.tsx`, and `my-experience.module.css`: the section between the hero and career journey. `experience-world-map.tsx` renders the locally bundled Natural Earth country outlines on the server; see `data/maps/README.md` for provenance.
- `components/career-journey.tsx` and `components/skills-expertise.tsx`: the two sections immediately after the hero; `profile-motion.tsx` provides the scroll-driven timeline and one-time skill-bar fills. Their styles live in `profile-sections.module.css`.
- `data/projects.ts`: typed project directions. Adding an entry generates another project route and homepage card.
- `data/case-studies/`: structured, source-based articles. `pickme-search-revamp.ts` transcribes the supplied 16-page **Durga Yasas.pdf**.
- `data/case-studies/seamless-payment-experience-at-the-table.ts`: the exact article wording from the supplied Carbonmade HTML export, with source image references for later asset replacement.
- `data/case-studies/revamping-ingenii-fleet-tracker.ts`: the article transcribed from the supplied 29-page **- Durga Yasas.pdf**, with 35 original images stored under `public/images/ingenii-fleet-tracker/`.
- `components/case-study-article.tsx`: article renderer for text, quotations, statistics, solutions, tables, and replaceable image positions.
- `components/upcoming-case-study.tsx`: a coming-soon page for projects whose articles have not been supplied. Their titles, icons, and cover line breaks are configured in `data/projects.ts`.

## Color palette

The site uses a light theme with Warm Ivory `#ECE8E0` backgrounds, Obsidian `#0B0B0B` headings, Stone Grey `#3F4548` body text, and pale card surfaces mixed with white. Burnt Saffron `#C77A2B` and Bronze Sand `#B08A4A` remain the accent swatches. Semantic tokens in `app/globals.css` derive deeper accent text colors for contrast on light backgrounds, while filled saffron buttons retain obsidian labels through separate action tokens. Components, career/skill accents, map surfaces, and all case-study pages share these tokens. Thumbnail text panels use light surfaces; the illustrative image files and original project images retain their source colors. Shadows are soft neutral tints. The favicon uses an ivory background with dark initials and a saffron dot.

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

**Revamping Ingenii Fleet Tracker** uses the supplied PDF's title, subtitle, original text, and section order across 13 sections. All 109 authored text fragments match the extracted PDF, with no source words omitted. The eight interview questions/answers, two personas, usability-testing feedback, captions, repeated statements, and original spelling are preserved. Browser print headers, page counters, site navigation, and the copyright footer are excluded. The article does not state a role or project period, so neither is added.

The Ingenii page includes its original hero image and 34 article images extracted directly from the PDF at native resolution. Images repeated by print pagination are stored once as complete assets; PDF transparency masks are retained. The optional `heroImage` field displays the original cover in the article; its homepage thumbnail has an independent composition using the same original asset. Source image backgrounds use `background: "white"` to match the PDF's paper and keep transparent artwork legible. Small images retain their native width. The PDF provides static frames rather than playable animations, so no animation or video has been recreated.

GitHub is linked using the supplied repository owner's public profile; confirm the preferred contact destination before publication. A resume PDF and email address have not been supplied.

Motion respects the operating system's reduced-motion preference. Navigation supports keyboard focus, a skip link, and an Escape-dismissable mobile menu. Decorative mockups are hidden from assistive technology.

The career timeline, professional background badges, five achievements, and four skill groups use the content supplied in the career/skills reference image. Percentage values are retained as supplied and exposed through labeled meters. On smaller screens the career timeline and skill cards stack vertically. Reduced-motion mode displays complete bars and a complete timeline without movement. The About navigation target is the new career section; the previous introduction and design principles remain under Design Approach.

No deployment has been configured or performed.
