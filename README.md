Project Drive is a Google Drive/Photos-inspired portfolio interface built with Next.js, Tailwind CSS, and TypeScript. It renders projects in grid or list view, includes a right-side detail panel, and supports tags, filters, and local thumbnails for fast loading.

## Features

- Sticky top bar with search, filters, and grid/list toggle
- Project grid cards + Google Drive-style list view
- Right-side detail panel for project info
- Tag-aware filtering (type + tags)
- Local screenshot thumbnails for faster rendering
- Light/dark mode (class-based)

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Playwright (screenshot capture)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Update Project Data

Edit `app/data/projects.json` to update project info. Each project supports:

- `title`, `shortDescription`
- `thumbnailImage` (local path like `/thumbnails/project.png`)
- `githubUrl`, `demoUrl`
- `techStack`, `type`, `tags`, `year`

## Capture Local Thumbnails

Generate screenshots locally and store them under `public/thumbnails/`:

```bash
npm run screenshots
```

If Playwright asks for a browser install:

```bash
npx playwright install chromium
```

## Notes

- Thumbnails are referenced from `/public/thumbnails/`.
- List view is responsive with a mobile card layout (no horizontal scroll).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
