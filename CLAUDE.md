# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # static export → /out (runs next build with output: "export")
npm run lint     # next lint
npm run start    # serve the built .next output locally
```

No test suite exists in this project.

## Architecture

**Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind v4, statically exported.

`next.config.ts` sets `output: "export"` — the entire site is pre-rendered to `/out` as plain HTML. This means no server components with data fetching, no server actions, and `images.unoptimized: true` is required.

### Routing

Every route in `app/` is a thin wrapper that imports and renders a component from `components/`. Pages add only `export const metadata` and a `pt-[6.5rem]` wrapper div to clear the fixed header.

```
app/page.tsx          → <Hero /> + <Services showTestimonials={false} />
app/solutions/page    → <Services showTestimonials={true} />
app/contact/page      → <Contact />
app/products/page     → <Products />
app/faq/page          → <FAQ />
app/privacy-policy/   → inline static content
app/terms-of-service/ → inline static content
app/security/         → inline static content
```

`Services` is the only component reused across routes with a prop toggle (`showTestimonials`) — the homepage hides testimonials, `/solutions` shows them.

### Layout (`app/layout.tsx`)

Global shell that is never re-rendered per route:
- **Header** (fixed, `z-50`) + **Footer** outside the max-width container
- `<main>` is capped at `max-w-360` (1440px) with `px-4 md:px-5` gutters
- **Lenis** smooth scroll loaded via CDN `<Script>` (not npm) in `LenisInit.tsx`
- **Vercel Analytics**, **Speed Insights**, **Google Tag Manager**, and **Google Analytics** injected here

### Styling (`app/globals.css`)

Single CSS file — no Tailwind config file. Tailwind v4 is configured entirely inside the `@theme {}` block at the top of `globals.css`. Custom tokens defined there:

- Colors: `surface`, `surface-card`, `surface-raised`, `border`, `button-container`, `text-mute`, etc.
- Fonts: `font-favorit` (ABC Favorit Mono), `font-favorit-sans` (ABC Favorit), `font-sans` (Geist)
- Sizes: `container-360` (1440px max-width), custom text scales, leading values

**ABC Favorit Mono** is loaded as a local trial font via `@font-face` in `globals.css` from `public/fonts/`. **Geist** is installed via npm (`geist` package) and injected as a CSS variable through `GeistSans.variable` on `<html>`.

The CSS file is section-delimited with comments (`HEADER STYLES`, `MARQUEE / LOGO STRIP`, `FOOTER STYLES`, etc.) — add new component styles at the relevant section.

### MarqueeStrip (`components/MarqueeStrip.tsx`)

`'use client'` component used in both `Hero` and `Footer`. Drives infinite scrolling with `requestAnimationFrame` instead of CSS animation to guarantee a seamless loop — CSS `translate3d(-50%)` loops break when the two content copies have sub-pixel width differences. The RAF loop measures `track.scrollWidth / 2` in actual pixels each frame and caps `dt` at 50 ms to survive tab switches.

Logo hover effects are CSS-only (defined in `globals.css`):
- **Hero marquee**: corner L-brackets expand + scan line sweeps + glitch-in on the image
- **Footer marquee**: crosshair center lines + dashed reticle box + lock-on zoom on the image

The idle animation also differs: hero logos **float** vertically (`logo-float`), footer logos **tilt** on the Y-axis in 3D (`logo-tilt`).

### Design constraints

The site is **strictly monochrome** — black backgrounds (`#0e0e0e`), white text, white/gray UI elements only. Do not introduce color accents. The aesthetic is "precision instrument / terminal" — sharp edges, no border-radius on interactive elements, uppercase monospace labels.

### Public assets

```
public/backgrounds/   video files (webm + mp4), solution images, page backgrounds
public/fonts/         ABC Favorit Mono woff2 trial files, OCRX.woff2
public/icons/         Eledralabs logo variants (SVG + PNG)
```

The hero background is a looping video (`pi-glass-loop-prod.webm/.mp4`) with a `.webp` poster. Tech logos in both marquees are fetched from `cdn.jsdelivr.net/gh/devicons/devicon`.
