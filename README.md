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
- `components/hero.tsx` and `components/hero.module.css`: the dark, centered hero based on the supplied reference.
- `data/profile.ts`: approved hero copy, statistics, portrait, and resume link.
- `data/projects.ts`: typed project directions. Adding an entry generates another project route and homepage card.
- `data/case-studies/`: structured, source-based articles. `pickme-search-revamp.ts` transcribes the supplied 16-page **Durga Yasas.pdf**.
- `components/case-study-article.tsx`: article renderer for text, quotations, statistics, solutions, tables, and replaceable image positions.

## Content status

The confirmed biographical facts come from the supplied brief and hero reference: Durga Yasas is a Senior Product Designer. The reference supplies the availability status, specialization copy, and statistics (7+ years, 5M+ users impacted, and 3 design systems contributed). These are user-supplied profile statistics, not outcomes attributed to the illustrative projects.

The supplied portrait is visible in chat but its original image file was not available to the workspace. Until it is supplied, the hero explicitly uses a placeholder. To add the original without changing it, place it at `public/images/durga-yasas.jpg` (or its actual extension), set `profile.portrait` in `data/profile.ts` to `{ src: "/images/durga-yasas.jpg", alt: "Durga Yasas" }`, and rebuild. The circular crop is applied through CSS. Set `profile.resumeUrl` to a real local PDF path or approved URL to enable the resume download; it remains disabled until then. Neither the portrait nor a resume is synthesized.

**PickMe Search Revamp** uses the exact article wording from the supplied case-study PDF, including the role and period, interview quotations, research and testing percentages, solution descriptions, KPI definitions and before/after values, and reflections. Browser print dates, repeated page headers, URLs, and page counters are excluded. Line wrapping and page breaks are reflowed for the web; compound-word hyphens are preserved. The PDF is a case study, not a resume, and is not connected to the resume download button.

The PickMe homepage thumbnail is a typographic cover rather than a reproduction of app UI. The article has 11 image positions with their original captions. When original images arrive, add them under `public/images/pickme-search-revamp/` and set the corresponding figure block's `image` field:

```ts
image: {
  src: "/images/pickme-search-revamp/grouped-suggestions-before.png",
  alt: "Description of the supplied design",
  width: 1600,
  height: 1000,
}
```

Use the actual image dimensions and a meaningful description. The renderer replaces that image's placeholder automatically. Original project images will be supplied later; none have been synthesized or extracted as stand-in designs.

The other two project directions and their sample UI remain explicitly illustrative. Their pages distinguish design hypotheses from documented evidence and must not be presented as shipped client work. GitHub is linked using the supplied repository owner's public profile; confirm the preferred contact destination before publication. A resume PDF and email address have not been supplied.

Motion respects the operating system's reduced-motion preference. Navigation supports keyboard focus, a skip link, and an Escape-dismissable mobile menu. Decorative mockups are hidden from assistive technology.

No deployment has been configured or performed.
