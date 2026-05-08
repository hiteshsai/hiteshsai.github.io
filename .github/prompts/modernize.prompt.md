---
description: "Modernize the portfolio site from legacy Bootstrap 4/jQuery template to a next-gen personal site for a Microsoft engineer"
---

# Modernize Portfolio Site

Rebuild `hiteshsai.github.io` as a modern, next-generation personal portfolio.

## Owner

- **Name**: Venkata Sai Hitesh Jonnalagadda
- **Role**: Software Engineer at **Microsoft**
- **GitHub**: [hiteshsai](https://github.com/hiteshsai)
- **LinkedIn**: [saihitesh](https://www.linkedin.com/in/saihitesh/)

## Requirements

### Tech Stack
- Replace Bootstrap 4 + jQuery + Gulp with a modern stack (Astro, Vite, or vanilla modern HTML/CSS/JS)
- Use Tailwind CSS or modern CSS (custom properties, grid, animations)
- Zero jQuery — use native browser APIs
- Static output only (GitHub Pages compatible)

### Design
- Clean, minimal, professional aesthetic appropriate for a Microsoft engineer
- Dark/light mode toggle with system preference detection
- Smooth transitions and micro-animations (CSS transitions, View Transitions API)
- Responsive: mobile-first, fluid typography, modern breakpoints
- Modern color palette — not the old teal/orange Freelancer theme

### Content to Include
- Hero section with name, title (Software Engineer @ Microsoft), and a brief tagline
- About/bio section
- Experience timeline (Microsoft and prior roles)
- Skills/technologies (Azure, cloud, current stack)
- Projects/portfolio (refresh with current work)
- Contact section (keep Formspree or equivalent)
- Social links (GitHub, LinkedIn, and any other current profiles)
- Footer with copyright (dynamic year)

### Performance & Quality
- Lighthouse score targets: 95+ across all categories
- Semantic HTML5, ARIA labels, keyboard navigation
- Optimized images (WebP/AVIF with fallbacks, lazy loading)
- Minimal JavaScript bundle
- No deprecated APIs (remove old UA Google Analytics)

### Cleanup
- Delete `functions/` (unused Firebase boilerplate)
- Delete `mail/contact_me.php` (unused)
- Remove committed `vendor/` directory — use bundler imports
- Remove or replace Google Ads script
