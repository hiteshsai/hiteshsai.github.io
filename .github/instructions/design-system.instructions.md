---
applyTo: "**/*.{html,css,scss,js,ts,astro,jsx,tsx}"
description: "Design system and styling conventions for the modernized portfolio site"
---

# Design System

## Color Palette
Use CSS custom properties for all colors. Support both light and dark themes via `prefers-color-scheme` and a manual toggle.

```css
:root {
  --color-bg: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #1a1a2e;
  --color-text-muted: #6b7280;
  --color-accent: #0078d4; /* Microsoft blue */
  --color-accent-hover: #106ebe;
}
```

## Typography
- Use system font stack or a modern variable font (Inter, Plus Jakarta Sans)
- Fluid typography with `clamp()`
- Limit to 2-3 font weights maximum

## Spacing & Layout
- Use CSS Grid and Flexbox — no float layouts
- 8px base spacing unit
- Max content width: ~1200px with generous padding

## Animations
- Prefer CSS transitions and animations over JS
- Use `prefers-reduced-motion` media query to disable animations for accessibility
- Keep transitions under 300ms for UI interactions

## Images
- Use `<picture>` with WebP/AVIF sources and fallbacks
- Always include meaningful `alt` text
- Use `loading="lazy"` for below-fold images

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- All interactive elements must be keyboard-focusable
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`)
