# Contributing to nick-autoteknik

## Local Setup
1. Install Node.js 20+.
2. Clone the repository and run `npm install`.

## Install Git Hooks
```
./scripts/install-hooks.sh
```

## Local Git Setup
Run these once after cloning:
```bash
git config pull.rebase true
git config core.autocrlf input
git config push.autoSetupRemote true
git config init.defaultBranch master
```

## Build and Test Commands
```bash
npm run dev         # Start dev server
npm run build       # Build for production
npm run lint        # Lint
npm run test:e2e    # End-to-end tests
```

## Coding Style
- TypeScript strict mode — no implicit `any`
- Functional React components with hooks
- Keep files under 200 lines — extract when approaching the limit

## Branch Naming
| Prefix | Type | Example |
|---|---|---|
| `feature/` | `feat:` | `feature/add-booking-form` |
| `fix/` | `fix:` | `fix/mobile-layout` |
| `chore/` | `chore:` | `chore/update-deps` |
| `docs/` | `docs:` | `docs/update-readme` |

## PR Checklist
- [ ] Lint passes (`npm run lint`)
- [ ] Manual test completed for changed functionality
- [ ] Updated docs if behavior changed
- [ ] Commit messages follow Conventional Commits
