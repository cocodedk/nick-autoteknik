# CLAUDE.md — nick-autoteknik

## Project Overview

Professional website for Nick Autoteknik, an auto repair shop in Rødovre, Denmark. Built with Next.js, TypeScript, and Tailwind CSS. Static export deployed to Netlify.

- **Language / Runtime**: TypeScript, Node.js 20+
- **Framework**: Next.js (App Router, static export)
- **Architecture**: Next.js App Router with Tailwind CSS, mobile-first design
- **Package manager**: npm

---

## Required Skills — ALWAYS Invoke These

These skills **must** be invoked when the relevant situation arises. Never skip them.

| Situation | Skill |
|-----------|-------|
| Before any new feature or screen | `superpowers:brainstorming` |
| Planning multi-step changes | `superpowers:writing-plans` |
| Writing or fixing core logic | `superpowers:test-driven-development` |
| First sign of a bug or failure | `superpowers:systematic-debugging` |
| Before completing a feature branch | `superpowers:requesting-code-review` |
| Before claiming any task done | `superpowers:verification-before-completion` |
| Working on UI / frontend | `frontend-design:frontend-design` |
| After implementing — reviewing quality | `simplify` |

---

## Architecture

```
nick-autoteknik/
├── app/          <- Next.js App Router pages
├── components/   <- Reusable React components
├── data/         <- Static content data
├── public/       <- Static assets (images)
└── tests/        <- End-to-end tests (Playwright)
```

### Layer Rules
- `app/` pages must not contain business logic
- `components/` must be pure UI — no side effects
- Keep all content in `data/` for easy editing

---

## Coding Conventions

- TypeScript strict mode — no implicit `any`
- Functional React components with hooks
- No hardcoded strings — use data files
- Mobile-first: design for 375px width first

---

## Engineering Principles

### File Size
- **200-line maximum per file** — extract when approaching the limit

### DRY · SOLID · KISS · YAGNI
- Extract shared logic into named utilities; never copy-paste
- Single Responsibility: one component does one thing
- Don't add features not yet needed
- Delete dead code immediately

### Commit hygiene
- Follow Conventional Commits: `feat: ...` / `fix: ...` / `chore: ...`
- The `commit-msg` hook enforces this automatically

---

## Build Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production (static export)
npm run lint      # Lint
npm run test:e2e  # End-to-end tests (Playwright)
```

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project conventions and session startup |
| `version.txt` | Semantic version (MAJOR.MINOR.PATCH) |
| `.github/workflows/` | CI, release, and Pages automation |
| `.githooks/` | Pre-commit and commit-msg hooks |
| `scripts/install-hooks.sh` | One-time hook installer |

---

## Starting a New Session

1. Read this file
2. Run `npm run lint` to confirm everything passes
3. Invoke `superpowers:brainstorming` before touching any feature
4. Follow the Required Skills table — every skill is mandatory, not optional
