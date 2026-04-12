# nick-autoteknik

Professional website for Nick Autoteknik, an auto repair shop in Rødovre, Denmark. Built with Next.js (App Router, static export), TypeScript, and Tailwind CSS.

## Website

- [English](https://cocodedk.github.io/nick-autoteknik/)
- [فارسی (Persian)](https://cocodedk.github.io/nick-autoteknik/fa/)

## Features

- Service overview for all repair and maintenance offerings
- Mobile-first responsive design with Tailwind CSS
- Next.js static export for fast loading
- Contact form and location information
- Playwright end-to-end tests

## Build from Source

**Prerequisites:** Node.js 20+, npm

```bash
git clone https://github.com/cocodedk/nick-autoteknik.git
cd nick-autoteknik
npm install
npm run dev
```

**Commands:**
```bash
npm run dev         # Start dev server
npm run build       # Build for production (static export)
npm run lint        # Lint
npm run test:e2e    # End-to-end tests (Playwright)
```

## Architecture

```
nick-autoteknik/
├── app/          # Next.js App Router pages
├── components/   # Reusable React components
├── data/         # Static content data
├── public/       # Static assets (images)
└── tests/        # End-to-end tests (Playwright)
```

| Layer | Tech |
|---|---|
| Frontend | Next.js (App Router), TypeScript, Tailwind CSS |
| Deployment | Netlify (static export) |
| Testing | Playwright |

## Docker

```bash
docker pull ghcr.io/cocodedk/nick-autoteknik:latest
```

## Author

**Babak Bandpey** — [cocode.dk](https://cocode.dk) | [LinkedIn](https://linkedin.com/in/babakbandpey) | [GitHub](https://github.com/cocodedk)

Apache-2.0 | &copy; 2026 [Cocode](https://cocode.dk) | Created by [Babak Bandpey](https://linkedin.com/in/babakbandpey)
