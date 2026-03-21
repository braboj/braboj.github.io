# braboj.github.io — Playbook

Operational reference for common tasks. For project conventions and rules,
see `CLAUDE.md`. For onboarding, see `docs/ONBOARDING.md`.

---

## Astro

```bash
npm run dev       # start dev server with hot reload at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

---

## Git workflow

### Daily workflow

```bash
# Start a new feature or fix
git checkout main
git pull
git checkout -b feat/description   # or fix/, chore/, docs/

# Stage and commit
git add <file1> <file2>
git commit -m "feat: short description"

# Push and open PR
git push -u origin feat/description
gh pr create --title "feat: description" --body "..."
```

### Commit message conventions

```
feat:     new feature or content addition
fix:      bug fix or correction
chore:    maintenance, releases, tooling
docs:     documentation only
style:    CSS/formatting, no logic change
refactor: code change that neither fixes a bug nor adds a feature
test:     test additions or changes
```

### Release workflow

```bash
git checkout main
git pull

# 1. Create release branch
git checkout -b chore/release-vA.B.C.D

# 2. Empty release marker commit
git commit --allow-empty -m "chore: release vA.B.C.D"

# 3. Push and open PR
git push -u origin chore/release-vA.B.C.D
gh pr create --title "chore: release vA.B.C.D" --body "Release vA.B.C.D"

# 4. After PR is merged, tag main
git checkout main && git pull
git tag vA.B.C.D
git push origin vA.B.C.D
```

### After a PR is merged

```bash
git checkout main && git pull
git branch -d <branch>
gh api -X DELETE repos/braboj/braboj.github.io/git/refs/heads/<branch>
```

### Useful git commands

```bash
git log --oneline -20          # compact commit history
git diff                       # unstaged changes
git diff --staged              # staged changes
git status                     # working tree status
git stash                      # stash uncommitted changes
git stash pop                  # restore stashed changes
git tag                        # list all tags
```

---

## GitHub CLI (gh)

### Issues

```bash
gh issue list --state open
gh issue create --title "Title" --body "Body"
gh issue close 12 --comment "Reason"
```

### Pull requests

```bash
gh pr create --title "feat: description" --body "## Summary\n..."
gh pr list
gh pr status
gh pr merge <number>
```

### Releases

```bash
gh release create vA.B.C.D --title "vA.B.C.D" --notes "Release notes"
gh release list
```

---

## Content editing

All site content lives in `src/data/` as JSON. No component knowledge required.

| File                         | Controls                                      |
|------------------------------|-----------------------------------------------|
| `src/data/site.json`         | Nav links, hero text, contact links, footer   |
| `src/data/about.json`        | Biography story blocks                        |
| `src/data/experience.json`   | Work experience entries                       |
| `src/data/skills.json`       | Skill categories and items                    |
| `src/data/projects.json`     | Project cards                                 |
| `src/data/tutorials.json`    | Tutorial cards                                |
| `src/data/publications.json` | Academic publications                         |

---

## Deployment

Pushing to `main` triggers GitHub Actions which builds and deploys to
GitHub Pages automatically.

```bash
git checkout main
git pull
git push   # triggers deploy
```

Monitor: `https://github.com/braboj/braboj.github.io/actions`