# [Project Name] — Claude Code Instructions

## Project
[One-line description of what this project is and who it's for.]

- Owner: [Name]
- GitHub: [URL]
- Contact: [email]
- Deployed to: [platform/URL] via [CI/CD method] on push to `main`

## Stack
- [Framework] ([role, e.g. static site generator])
- [Language] for [purpose]
- [CSS approach] (no [excluded frameworks])
- Content driven by [format] files in `[path]/`
- Deployed via [method] on push to `main`

## Design
- Aesthetic: [description]
- Background: `[color]`
- Accent: `[color]`
- Typography: [fonts and weights]
- All CSS lives in `[path]` — do not use inline styles except for dynamic/computed values
- Responsive breakpoints:
  - Tablet: max-width 1024px
  - Mobile: max-width 768px
  - Small mobile: max-width 480px

## Brand voice
- Tagline: "[tagline]"
- Tone: [description]
- Use "[brand name]" in copy — not "[wrong variant]"

## Content
All editable content lives in `[path]/` as [format]. Never hardcode content
that a non-developer might want to change.

| File           | Controls           |
|----------------|--------------------|
| `[path]/file1` | [what it controls] |
| `[path]/file2` | [what it controls] |

## Component architecture

See `README.md` for the full project structure.

**Rule:** [default component type]. Only reach for [heavier option] when
[condition].

## Pages

| Page     | Path       | Notes |
|----------|------------|-------|
| Homepage | `/`        |       |
| [Page]   | `/[path]/` |       |

## Git conventions
- Commit messages must use conventional commit prefixes:
  `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`
- Always work on a branch — never commit directly to `main`
- Exception: documentation-only changes (`docs/`, `README.md`, `CLAUDE.md`)
  may go directly to `main`
- Branch naming: `feat/description`, `fix/description`, `chore/description`,
  `docs/description`
- PRs should be small and focused — one concern per PR
- Always test with `[dev command]` before committing
- Do not commit `[build output]/` or `node_modules/`
- **Before pushing or creating a PR**, always check the current branch and
  open PR status with `git status` and `gh pr list`. If the previous PR is
  closed or merged, create a new branch rather than pushing to a stale one.
- **After a PR is merged**, delete both remote and local branch:
  `git branch -d <branch>` and
  `gh api -X DELETE repos/[owner]/[repo]/git/refs/heads/<branch>`.
  Then pull main: `git checkout main && git pull`.

## Versioning
- Follows `vA.B.C.D` — A=major, B=minor, C=build, D=hotfix
- No VERSION file — git tags only
- Release process:
  1. `git checkout -b chore/release-vA.B.C.D`
  2. `git commit --allow-empty -m "chore: release vA.B.C.D"`
  3. Push, open PR, merge
  4. `git checkout main && git pull`
  5. `git tag vA.B.C.D && git push origin vA.B.C.D`

## Commands
```
[dev command]      # develop
[build command]    # build
[preview command]  # preview
```

## Third-party services

| Service   | Purpose   | Config             |
|-----------|-----------|--------------------|
| [Service] | [purpose] | [where configured] |

## Quality attributes

These are the non-negotiable standards for this project:

**Content & architecture**
- All editable content lives in `[data path]/` as [format] — never hardcoded
  in components
- Default to [static component type]; only use [interactive framework] when
  client-side state is required
- No dead code — remove unused components, CSS rules, and data files promptly

**CSS**
- All CSS in `[stylesheet path]` — no inline styles except dynamic/computed
  values
- No hardcoded colour or spacing values — always use CSS custom properties
  from `:root`
- Consistent naming convention: [e.g. BEM-like `.component-element`]
- Maximum line length: 80 characters (exempt: JSON prose strings, third-party
  URLs)

**Accessibility**
- Semantic HTML: correct landmark elements and heading hierarchy
- `aria-label` on all interactive elements (buttons, icon links)
- Keyboard navigation: menus must close on Escape and restore focus

**Performance**
- Preload critical above-the-fold assets
- Keep client-side JS minimal — [rendering strategy] by default

**SEO & analytics**
- `robots.txt`, Open Graph, and Twitter Card meta tags required
- Privacy-friendly analytics only (no consent banner required)

**Documentation**
- `CLAUDE.md` and `README.md` must always reflect the actual codebase
- `docs/ONBOARDING.md` — onboarding guide for new contributors
- `docs/PLAYBOOK.md` — operational reference for common tasks
- `README.md` is the single source of truth for project structure — do not
  duplicate it in other documents, reference it instead
- No references to non-existent files, components, or services

## Documentation rule
Before every commit, update all relevant documentation:
- **`CLAUDE.md`** — update if architecture, stack, design rules, or
  conventions change
- **`README.md`** — update if project structure, stack, or onboarding steps
  change
- **`docs/PLAYBOOK.md`** — update if commands, workflow, or release process
  change
- **`docs/ONBOARDING.md`** — update if the contributor workflow changes