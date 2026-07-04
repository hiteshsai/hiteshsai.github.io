# Copilot Instructions

Personal portfolio site for **Venkata Sai Hitesh Jonnalagadda**, a **Product Manager at Microsoft**. Vanilla HTML/CSS/JS, no build step, hosted on GitHub Pages.

> Full project guidelines live in [`AGENTS.md`](../AGENTS.md). Read it before making changes; the rules below are the condensed working set.

## Code Quality
- Review changes across five axes: correctness, readability, architecture, security, performance.
- Keep changes surgical; do not mix formatting-only edits with behavior changes.
- No secrets, analytics, or trackers in code (unless explicitly requested).

## Stack & Boundaries
- **Always:** vanilla HTML/CSS/JS with CSS custom properties; preserve light/dark themes; CSS Grid/Flexbox (no floats); respect `prefers-reduced-motion`.
- **Ask first:** adding any dependency, build step, or toolchain — the site is intentionally dependency-free.
- **Never:** add server-side code (GitHub Pages is static-only); reintroduce Bootstrap/jQuery/Gulp; add private/internal Microsoft details.

## Accessibility (non-negotiable)
- Semantic landmarks (`nav`, `main`, `section`, `footer`); exactly one `h1`.
- All interactive controls keyboard-accessible with visible focus states.
- Meaningful `alt` text; external `target="_blank"` links use `rel="noopener noreferrer"`.

## Verify Before Done
- No test suite. Serve locally with `python -m http.server 3000` and check the affected sections in both light and dark mode.
- Keep visible copy, metadata, structured data, and `site.webmanifest` aligned when positioning changes.

## Specialized Agents
Use the personas in `.github/agents/` for targeted review:
- `@code-reviewer` — pre-merge review across the five axes.
- `@web-performance-auditor` — Core Web Vitals, loading/rendering audits.
