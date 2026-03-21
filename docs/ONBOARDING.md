# Onboarding Guide

Welcome to the braboj.github.io project. This guide walks you through
everything you need to contribute — from understanding what the project is,
to making your first change.

---

## 1. What is this project?

This is a personal portfolio site for Branimir Georgiev, deployed at
https://braboj.github.io. It showcases experience, skills, projects,
tutorials, and academic publications.

The site is **static** — it has no backend, no database, and no login.
Every page is generated at build time and served as plain HTML, CSS, and
a small amount of JavaScript.

---

## 2. How does it work?

The project uses [Astro](https://astro.build), a static site generator.

The key idea is **separation of content and code**:

- **Content** lives in `src/data/` as JSON files — no programming required
  to update text, experience, or projects.
- **Layout and structure** lives in `src/components/` as `.astro` files.
- **Styles** live in `src/styles/global.css` — one file, no exceptions.

At build time, Astro reads the JSON data, renders the components, and
outputs a `dist/` folder of static HTML files. GitHub Actions then deploys
that folder to GitHub Pages automatically on every push to `main`.

```
src/data/*.json   →   src/components/*.astro   →   dist/ (HTML)
     ↑                                                    ↓
  Edit here                                        Deployed here
```

---

## 3. Project structure

See `README.md` for the full project structure.

---

## 4. Setup

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/braboj/braboj.github.io.git
cd braboj.github.io
npm install
npm run dev
```

The dev server starts at `http://localhost:4321` with hot reload.

---

## 5. Making changes

### Content only (no code needed)

Edit the relevant JSON file in `src/data/`. The dev server reloads
automatically. See `docs/PLAYBOOK.md` for the full content editing
reference.

### Layout or style changes

- **Component structure:** edit the relevant `.astro` file in
  `src/components/`
- **Styles:** edit `src/styles/global.css` only — no inline styles
- **New section:** create a new `.astro` component, add a new JSON data
  file, import and mount it in `src/pages/index.astro`, and add a nav
  entry in `src/data/site.json`

### Rule: default to `.astro`

Only reach for React (`.tsx`) when the component needs client-side
JavaScript state (e.g. a toggle, a form). Everything else is `.astro`.

---

## 6. Git workflow

Always work on a branch — never commit directly to `main`.

```bash
git checkout -b feat/your-description   # or fix/, chore/, docs/
# make changes
npm run dev                             # verify locally first
git add <files>
git commit -m "feat: describe what changed"
git push -u origin feat/your-description
# open a PR on GitHub
```

### Commit prefixes

See `docs/PLAYBOOK.md` for the full commit message conventions.

### Before opening a PR

- Run `npm run build` to catch any build errors
- Check `git status` and `gh pr list` — make sure you are on the right
  branch and there is no stale open PR

---

## 7. Deployment

Merging to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`. It builds the site and publishes the
`dist/` folder to GitHub Pages. No manual steps needed.

---

## 8. Commands reference

```bash
npm run dev      # dev server with hot reload at localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

---

## 9. Where to go from here

- Read `CLAUDE.md` for the full set of design rules, quality standards,
  and conventions used in this project.
- Browse `src/data/` to understand the content structure before touching
  any components.
- Start with a small content change to get familiar with the workflow
  before modifying components or CSS.