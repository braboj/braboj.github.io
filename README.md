# braboj.github.io

Personal portfolio and teaching site for Branimir Georgiev — automation engineer, software engineer, and educator at the OT/IT boundary.

**Live site:** https://braboj.me

---

## Stack

- [Astro](https://astro.build) — static site generator (output: GitHub Pages)
- TypeScript + React islands — interactive components only
- Plain CSS — no Tailwind, no CSS-in-JS
- JSON-driven content in `src/data/`
- Deployed via GitHub Actions on push to `main`

## Project structure

```
src/
├── components/
│   ├── interactive/        # React islands (HamburgerMenu, ContactForm)
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Publications.astro
│   ├── Education.astro
│   ├── Teaching.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data/                   # All editable content as JSON
│   ├── site.json
│   ├── experience.json
│   ├── skills.json
│   ├── projects.json
│   ├── publications.json
│   └── education.json
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro
│   └── privacy.astro
└── styles/
    └── global.css
```

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

## Content

All editable content lives in `src/data/` as JSON files. No JS/TS knowledge required to update content.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages automatically.
