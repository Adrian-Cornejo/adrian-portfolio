# CLAUDE.md

## Purpose
Personal portfolio of Adrián de Jesús García Cornejo (Frontend developer). Static site with home sections (Hero, About, Skills, Projects, Contact) and a privacy notice page.

## Tech stack
- Astro 5 + React 19 islands
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- GSAP and Framer Motion for animations
- `lucide-astro` icons

## Commands
- `npm install` — install dependencies
- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build

## Architecture
- `src/pages/` — routes (`index`, `about`, `projects`, `contact`, `aviso-de-privacidad`)
- `src/components/` — page sections; `src/components/ui/` — reusable Badge/Button/Card
- `src/layouts/Layout.astro` — base HTML layout
- `src/styles/global.css` — theme tokens (`text-ink`, `text-ink-dim`, `text-accent`, …)
- `src/scripts/` — client scripts (e.g. tilt effect)

## Conventions
- UI copy is in Spanish.
- Contact data (email `contacto@adriangarciacornejo.com`, phone `+52 771 120 4655`) is hardcoded in Header, Hero, Contact, Footer and `aviso-de-privacidad.astro` — update all of them together.
- The privacy notice holds the full fiscal address; the Footer shows only the city.
- The Footer credits ArriendaFacil (https://arriendafacilmx.com) as a product of the author.
