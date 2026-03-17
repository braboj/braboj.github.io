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
All editable content lives in `[path]/` as [format]. Never hardcode content that a non-developer might want to change.

| File           | Controls           |
|----------------|--------------------|
| `[path]/file1` | [what it controls] |
| `[path]/file2` | [what it controls] |

## Component architecture

```
src/components/
├── interactive/      # [JS framework] islands — only components that need JS
│   └── Component.tsx
├── Component.astro
└── ...
```

**Rule:** [default component type]. Only reach for [heavier option] when [condition].

## Pages

| Page     | Path       | Notes |
|----------|------------|-------|
| Homepage | `/`        |       |
| [Page]   | `/[path]/` |       |

## Git conventions
- Always work on a branch — never commit directly to `main`
- Exception: documentation-only changes may go directly to `main`
- Branch naming: `feature/description` or `fix/description`
- PRs should be small and focused — one concern per PR
- Always test with `[dev command]` before committing
- Do not commit `[build output]/` or `node_modules/`

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

## Documentation rule
Before every commit, update all relevant documentation:
- **`CLAUDE.md`** — update if architecture, stack, design rules, or conventions change
- **`README.md`** — update if project structure, stack, or onboarding steps change
- **`[PLAYBOOK or equivalent]`** — update if commands, workflow, or release process change
