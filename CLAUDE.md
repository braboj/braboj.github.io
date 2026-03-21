# braboj.github.io — Claude Code Instructions

## Project
Personal portfolio site for Branimir Georgiev — automation engineer, software engineer, and founder at the OT/IT boundary.

- Owner: Branimir Georgiev
- GitHub: https://github.com/braboj
- Contact: contact@imbra.io
- LinkedIn: https://linkedin.com/in/branimir-georgiev
- Deployed to GitHub Pages at https://braboj.github.io via GitHub Actions on push to `main`

## Stack
- Astro (static site generator, output: static / GitHub Pages)
- TypeScript for interactive React island components
- Plain CSS in `src/styles/global.css` (no Tailwind, no CSS-in-JS)
- Content driven by JSON files in `src/data/`
- Deployed via GitHub Actions on push to `main`

## Design
- Aesthetic: clean, minimal, technical
- Background: `#FFFFFF` and `#F8F9FA` alternating sections
- Accent: steel blue `#1B4F8A`
- Typography: IBM Plex Sans (300, 400, 500, 600) + IBM Plex Mono (400, 500) loaded from Google Fonts
- All CSS lives in `src/styles/global.css` — do not use inline styles except for dynamic/computed values
- Responsive breakpoints:
  - Tablet: max-width 1024px
  - Mobile: max-width 768px (hamburger menu replaces nav links)
  - Small mobile: max-width 480px

## Brand voice
- Tagline: "Code with Branko"
- Tone: direct, practical, no fluff — written for engineers, not marketers
- Use "Branimir" or "Branko" in body copy — not "braboj"
- No emojis in content, code, or documentation unless explicitly requested

## Content
All editable content lives in `src/data/` as JSON. Never hardcode content that a non-developer might want to change.

| File                         | Controls                                      |
|------------------------------|-----------------------------------------------|
| `src/data/site.json`         | Nav links, hero text, contact links, footer   |
| `src/data/about.json`        | Biography story blocks (heading, years, text) |
| `src/data/experience.json`   | Work experience entries                       |
| `src/data/skills.json`       | Skill categories and items                    |
| `src/data/projects.json`     | Portfolio/demo project cards                  |
| `src/data/tutorials.json`    | Tutorial repository cards                     |
| `src/data/publications.json` | Academic publications                         |

Note: `src/content/` is intentionally avoided — Astro reserves that path for Content Collections.

## Assets
- Images live in `public/images/` — reference as `/images/filename.ext`
- Documents (CV, PDFs) live in `public/cv/` — reference as `/cv/filename.ext`
- No assets outside `public/` — Astro only serves static files from there

## Pages

| Page           | Path        | Notes                  |
|----------------|-------------|------------------------|
| Homepage       | `/`         | All main sections      |
| Privacy Policy | `/privacy/` | Legal page             |
| Not Found      | `/404`      | Custom 404 page        |

## Third-party services

| Service                | Purpose                              | Config                                          |
|------------------------|--------------------------------------|-------------------------------------------------|
| Plausible              | Privacy-friendly analytics (no cookies, no consent banner) | Script tag in `src/layouts/Base.astro` |
| Google Search Console  | Search indexing and crawl monitoring | Verification meta tag in `src/layouts/Base.astro` |

## Component architecture

See `README.md` for the full project structure. Key rule: default to
`.astro`. Only reach for React (`.tsx`) when client-side state is required.

## Reveal animations
`.reveal` → `.reveal.visible` transition handled by a single `IntersectionObserver` script in `src/layouts/Base.astro`. Do not add per-component reveal scripts.

## Astro islands
- Use `client:visible` for below-the-fold interactive components — defers hydration until the element is in view
- Use `client:load` only for above-the-fold components that must be interactive immediately
- Never use `client:only` unless SSR is enabled — it skips server rendering entirely

## Git conventions
- Commit messages must use conventional commit prefixes:
  `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`
- Always work on a branch — never commit directly to `main`
- Exception: documentation-only changes (`docs/`, `README.md`, `CLAUDE.md`) may go directly to `main`
- Branch naming: `feat/description`, `fix/description`, `chore/description`, `docs/description`
- PRs should be small and focused — one concern per PR
- Always test with `npm run dev` before committing
- Do not commit `dist/` or `node_modules/`
- **Before pushing or creating a PR**, always check the current branch and open PR status with `git status` and `gh pr list`. If the previous PR is closed or merged, create a new branch rather than pushing to a stale one.
- **After a PR is merged**, delete both the remote and local branch: `git branch -d <branch>` and `gh api -X DELETE repos/braboj/braboj.github.io/git/refs/heads/<branch>`. Then pull main: `git checkout main && git pull`.

## Versioning
- Follows `vA.B.C.D` — A=major, B=minor, C=build, D=hotfix
- No VERSION file — git tags only
- Release process:
  1. `git checkout -b chore/release-vA.B.C.D`
  2. `git commit --allow-empty -m "chore: release vA.B.C.D"`
  3. Push, open PR, merge
  4. `git checkout main && git pull`
  5. `git tag vA.B.C.D && git push origin vA.B.C.D`

## Quality attributes

These are the non-negotiable standards for this project:

**Content & architecture**
- All editable content lives in `src/data/` as JSON — never hardcoded in components
- Default to `.astro`; only use React (`.tsx`) when client-side state is required
- No dead code — remove unused components, CSS rules, and data files promptly

**CSS**
- All CSS in `src/styles/global.css` — no inline styles except dynamic/computed values
- No hardcoded colour or spacing values — always use CSS custom properties from `:root`
- BEM-like naming: `.component-element` (e.g. `.hero-grid`, `.experience-item`)
- Maximum line length: 80 characters (exempt: JSON prose strings, third-party URLs)

**Accessibility**
- Semantic HTML: `<main>`, `<section id="">`, correct heading hierarchy
- `aria-label` on all interactive elements (buttons, icon links, social links)
- All `<a>` elements with icon-only or ambiguous text must have a descriptive `aria-label`
- Keyboard navigation: menus must close on Escape and restore focus

**Performance**
- Preload critical above-the-fold assets (hero image)
- Keep client-side JS minimal — static generation by default

**SEO & analytics**
- `robots.txt`, Open Graph, and Twitter Card meta tags required
- Privacy-friendly analytics only (Plausible — no cookies, no consent banner needed)

**Documentation**
- `CLAUDE.md` and `README.md` must always reflect the actual codebase
- `docs/ONBOARDING.md` — onboarding guide for new contributors
- `docs/PLAYBOOK.md` — operational reference for common tasks
- `README.md` is the single source of truth for project structure
- No references to non-existent files, components, or services

## Commands
```
npm run dev      # develop — hot reload at localhost:4321
npm run build    # compile — production build to dist/
npm run preview  # verify — preview the production build locally
```

## Documentation rule
Before every commit, update all relevant documentation:
- **`CLAUDE.md`** — update if component architecture, stack, design rules, or conventions change
- **`README.md`** — update if project structure, stack, or onboarding steps change
- **`docs/PLAYBOOK.md`** — update if commands, workflow, or release process change
- **`docs/ONBOARDING.md`** — update if the contributor workflow changes