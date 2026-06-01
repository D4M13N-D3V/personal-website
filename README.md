# d4m13n.dev

Personal website and project portfolio for **d4m13n** ([d4m13n.dev](https://d4m13n.dev)) — a single-page Next.js app that opens with a typing-animation intro and presents work across tabbed sections.

## Features

- **Animated intro** — a typed greeting plays on load, then fades into the main content.
- **Tabbed portfolio** — Software Dev Projects, Game Dev Projects, a Resume timeline, and Contact.
- **Project masonry** — each project renders as a card with description, tech stack, screenshots, repo links, and a live demo link.
- **Vertical timeline** — career/project milestones with masonry-style detail items.
- **Social links** and a dark, cyan-accented (`#4fd1ff`) theme.
- Responsive layout, with condensed labels on small screens.

> **Note:** The project and timeline content in `src/data/` is currently placeholder data (Unsplash images, example URLs) pending real content.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [MUI v6](https://mui.com/) with [Emotion](https://emotion.sh/) for styling, Roboto via `next/font`
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) for tests
- ESLint (`eslint-config-next`) + Prettier
- Docker (standalone output) for production images, published to GHCR

## Getting started

Requires Node.js 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start the dev server           |
| `npm run build`     | Production build               |
| `npm start`         | Serve the production build     |
| `npm run lint`      | Run `next lint` and Prettier   |
| `npm run lint:fix`  | Auto-fix lint and formatting   |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm test`          | Run the Jest test suite        |
| `npm run test:ci`   | Run tests in CI mode           |

## Project structure

```
src/
├── app/                  # App Router entry (layout, page, favicon)
├── components/
│   ├── ThemeRegistry/    # MUI + Emotion SSR setup and dark theme
│   ├── Timeline/         # Resume timeline and masonry grid
│   ├── ProjectCard.tsx   # Project card + Project type
│   ├── ProjectMasonry.tsx
│   ├── SocialIcons.tsx
│   └── TypingAnimation.tsx
└── data/
    ├── projects.ts       # Software & game project entries
    └── timeline.ts       # Timeline milestones
```

## Docker

The app builds to a minimal standalone server image: a multi-stage build on `node:20-alpine` that emits Next.js standalone output, runs as a non-root user, and ships a container healthcheck. The npm CLI is stripped from the runtime layer — the container only runs `node server.js` — which keeps the image small and free of npm's bundled-dependency CVEs.

```bash
docker build -t personal-website .
docker run -p 3000:3000 personal-website
```

Released images are published to `ghcr.io/d4m13n-d3v/personal-website`, tagged with the semantic version (e.g. `1.0.1`), `major.minor`, `latest`, and the short commit SHA. Each release is gated on a Trivy scan, so published images carry no known fixable HIGH/CRITICAL vulnerabilities.

```bash
docker pull ghcr.io/d4m13n-d3v/personal-website:latest
```

Copy `.env.example` to `.env.local` to configure environment variables.

## CI/CD

GitHub Actions workflows:

- **CI** (`ci.yml`) — lint, typecheck, test, build, a Docker build, and a Trivy filesystem scan on every push and PR.
- **Release** (`release.yml`) — [semantic-release](https://semantic-release.gitbook.io/) cuts versions and the changelog from Conventional Commits on `main`, then builds, Trivy-scans (gating on HIGH/CRITICAL), and pushes the image to GHCR.
- **CodeQL** and **Gitleaks** — security and secret scanning.

Dependabot keeps npm, GitHub Actions, and Docker dependencies updated weekly. Commits follow [Conventional Commits](https://www.conventionalcommits.org/) so releases are automated.
