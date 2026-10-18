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

## Content status

The confirmed biographical facts come from the supplied brief and hero reference: Durga Yasas is a Senior Product Designer. The reference supplies the availability status, specialization copy, and statistics (7+ years, 5M+ users impacted, and 3 design systems contributed). These are user-supplied profile statistics, not outcomes attributed to the illustrative projects.

The supplied portrait is visible in chat but its original image file was not available to the workspace. Until it is supplied, the hero explicitly uses a placeholder. To add the original without changing it, place it at `public/images/durga-yasas.jpg` (or its actual extension), set `profile.portrait` in `data/profile.ts` to `{ src: "/images/durga-yasas.jpg", alt: "Durga Yasas" }`, and rebuild. The circular crop is applied through CSS. Set `profile.resumeUrl` to a real local PDF path or approved URL to enable the resume download; it remains disabled until then. Neither the portrait nor a resume is synthesized.

No project source documents, original project designs, research findings, project impact metrics, client names, timelines, testimonials, resume PDF, or email address were provided. Both project directions and all sample UI are explicitly illustrative. Their pages distinguish design hypotheses from documented evidence. They must not be presented as shipped client work. Replace them with approved material before publishing as professional case studies. GitHub is linked using the supplied repository owner's public profile; confirm the preferred contact destination before publication.

Motion respects the operating system's reduced-motion preference. Navigation supports keyboard focus, a skip link, and an Escape-dismissable mobile menu. Decorative mockups are hidden from assistive technology.

No deployment has been configured or performed.
