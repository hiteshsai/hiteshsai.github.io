# Project Guidelines

## Overview

Personal portfolio site for **Venkata Sai Hitesh Jonnalagadda**, a Software Engineer at **Microsoft**.
Hosted on GitHub Pages at `hiteshsai.github.io`.

## Current State — Legacy Codebase (Needs Full Modernization)

This site is built on the **StartBootstrap Freelancer** template (v5.1.2) with severely outdated dependencies:

| Dependency | Current Version | Status |
|---|---|---|
| Bootstrap | 4.3.1 | Outdated — upgrade to 5.x (drops jQuery requirement) |
| jQuery | 3.5.0 | Remove — not needed with Bootstrap 5 |
| Font Awesome | 5.9.0 | Outdated — upgrade to 6.x |
| Gulp | 4.0.2 | Replace with Vite or similar modern bundler |
| gulp-sass | 4.0.2 | Uses deprecated `node-sass` — needs `dart-sass` or switch to PostCSS/Tailwind |
| Google Analytics | UA-173145734-1 | **Deprecated** — UA was sunset July 2023; migrate to GA4 or remove |
| Firebase Functions | `functions/` | Unused boilerplate — remove entirely |

### Outdated Content (Must Update)

- **Job title**: Currently says "Site Reliability Engineer, Oisix ra daichi, Tokyo" → **Software Engineer, Microsoft**
- **Copyright**: Says 2020 → update to current year
- **Address**: Shows Tokyo address → remove or update
- **Skills**: Lists AWS, Ansible, Terraform — add Azure, GitHub Copilot, and current Microsoft stack
- **Portfolio**: Contains entries from previous employers (Oisix, Jocata, UF, T-Hub, Tech Mahindra, IIIT) — refresh with current work and projects
- **Social links**: Verify all links are current; consider adding Microsoft-related profiles

## Modernization Target

Transform from a Bootstrap 4 jQuery template into a **next-generation personal portfolio**:

- **Framework**: Consider Astro, Next.js (static export), or vanilla modern HTML/CSS/JS
- **Styling**: Tailwind CSS or modern CSS (custom properties, grid, container queries)
- **Design**: Dark mode support, smooth animations (View Transitions API, scroll-driven animations), modern typography
- **Performance**: No jQuery, minimal JS, optimized images (WebP/AVIF), lazy loading
- **Hosting**: GitHub Pages (static only — no server-side)
- **Analytics**: GA4 or privacy-friendly alternative (Plausible, Umami), or remove entirely
- **Contact form**: Keep Formspree or switch to a modern alternative
- **Accessibility**: Semantic HTML, proper ARIA, focus management, color contrast

## Build & Dev (Current — Legacy)

```bash
npm install          # install dependencies
npm start            # gulp watch + BrowserSync on port 3000
```

Gulp tasks: `css` (compile SCSS), `js` (uglify), `vendor` (copy node_modules to vendor/), `watch`, `build`.

## File Structure

- `index.html` — single-page site (all sections inline)
- `scss/` — SCSS source, organized by `base/`, `components/`, `layout/`
- `css/` — compiled output
- `js/` — jQuery plugins and custom scripts
- `vendor/` — vendored copies of Bootstrap, jQuery, Font Awesome (committed to repo)
- `img/portfolio/` — portfolio images (jpg)
- `functions/` — unused Firebase Cloud Functions boilerplate (safe to delete)
- `mail/` — PHP contact form handler (unused — Formspree is used instead)
- `gulpfile.js` — Gulp 4 build pipeline

## Conventions

- Site is **static only** — deployed to GitHub Pages, no server-side runtime
- All vendor libraries are committed under `vendor/` (legacy pattern — modernize to bundler imports)
- SCSS uses Bootstrap's variable overrides pattern via `scss/base/_variables.scss`
- Contact form posts to Formspree (`https://formspree.io/xgenwpap`)

## Key Pitfalls

- `vendor/` is committed — do not assume `npm install` provides runtime assets
- The `functions/` directory is dead code — Firebase is not configured
- `mail/contact_me.php` is unused — the form uses Formspree
- Google Analytics uses the **deprecated Universal Analytics** (UA) — it no longer collects data
