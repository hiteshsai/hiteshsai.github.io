# Project Guidelines

## Overview

Personal portfolio site for **Venkata Sai Hitesh Jonnalagadda**, a **Product Manager at Microsoft Security**.
Hosted on GitHub Pages at `hiteshsai.github.io`.

## Current State

This is a modern static site built with:

- Vanilla HTML, CSS, and JavaScript
- No runtime dependencies
- GitHub Pages static hosting
- Custom CSS properties for theming
- Manual dark/light mode with system preference detection
- IntersectionObserver-based reveal animations
- Optimized image sources with WebP fallback support

The repository no longer uses Bootstrap, jQuery, Gulp, vendored assets, Firebase Functions, or a PHP contact form.

## Positioning

Keep content centered on:

- Product Management at Microsoft Security
- Microsoft Security Store
- Partner ecosystem and marketplace strategy
- Agentic AI and enterprise security
- Security products including Defender, Sentinel, Entra, Purview, and Intune
- Technical depth from SRE, cloud infrastructure, Kubernetes, and ML experience

Do not reintroduce outdated Software Engineer positioning unless explicitly requested.

## File Structure

- `index.html` — single-page portfolio with all primary sections inline
- `css/style.css` — custom design system, layout, responsive styles, and themes
- `js/main.js` — theme toggle, mobile navigation, scroll reveal, active nav state, dynamic year
- `404.html` — static not-found page
- `img/` — profile, social preview, and icon assets
- `site.webmanifest`, `robots.txt`, `sitemap.xml` — metadata and crawl support
- `.github/instructions/` and `.github/prompts/` — repo-specific authoring guidance

## Design System

- Use CSS custom properties for colors, spacing, radii, gradients, and typography.
- Preserve light and dark theme support.
- Use CSS Grid and Flexbox; do not add float-based layout.
- Keep animations subtle and respect `prefers-reduced-motion`.
- Keep the current professional Microsoft Security visual direction unless asked to redesign.

## Accessibility and Quality

- Prefer semantic landmarks (`nav`, `main`, `section`, `footer`).
- Keep one clear `h1`.
- All interactive controls must be keyboard accessible.
- Maintain visible focus states.
- External links opened in new tabs must use `rel="noopener noreferrer"`.
- Images need meaningful `alt` text unless decorative.
- Avoid adding analytics or trackers unless explicitly requested.

## Build and Dev

This site is static and has no build step.

```bash
python -m http.server 3000
```

Open <http://localhost:3000>.

If validation scripts are added, they should remain lightweight and dependency-free unless a future task explicitly asks for a larger toolchain.

## Key Pitfalls

- Do not follow stale Bootstrap/jQuery/Gulp modernization advice; the site has already been modernized.
- Do not add server-side code; GitHub Pages serves static files only.
- Keep public content professional and avoid adding private Microsoft/internal details.
- Keep metadata, structured data, visible copy, and manifest text aligned when changing positioning.
