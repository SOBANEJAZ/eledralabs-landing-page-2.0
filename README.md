<p align="center">
  <img src="public/icons/eledralabs-logo.svg" width="72" height="72" alt="Eledralabs Logo" />
</p>

<h1 align="center">Eledralabs</h1>

<p align="center">
  <strong>Precision-engineered Web & AI workflow automation — built to move at the speed of thought.</strong>
</p>

<p align="center">
  <a href="https://eledralabs.com"><img src="https://img.shields.io/badge/Live%20Site-eledralabs.com-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" /></a>
  &nbsp;
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" />
  &nbsp;
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  &nbsp;
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framer%20Motion-12-ff0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  &nbsp;
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  &nbsp;
  <img src="https://img.shields.io/badge/Vercel%20Analytics-enabled-00C7B7?style=for-the-badge&logo=vercel&logoColor=white" alt="Analytics" />
</p>

---

## ✦ Overview

**Eledralabs** is a bespoke, production-grade landing platform for a next-generation AI & web automation studio. Built from scratch on **Next.js 15 App Router** with **React 19**, the site delivers ultra-high-contrast dark aesthetics, GPU-accelerated micro-animations, and a fully responsive layout — from 320 px mobile up to 4K widescreen.

Every component is handcrafted for performance: there are no bloated UI libraries, no cookie-cutter templates. Just sharp design, clean architecture, and precision engineering.

---

## 🗂 Project Structure

```
eledralabs/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage entry
│   ├── layout.tsx              # Root layout, fonts & metadata
│   ├── globals.css             # Master design system (~3 500 lines)
│   ├── responsive.css          # Breakpoint overrides
│   ├── sitemap.ts              # Auto-generated XML sitemap
│   ├── robots.ts               # robots.txt generation
│   ├── contact/                # /contact page
│   ├── faq/                    # /faq page
│   ├── products/               # /products page
│   ├── solutions/              # /solutions page
│   ├── privacy-policy/         # /privacy-policy page
│   ├── terms-of-service/       # /terms-of-service page
│   └── security/               # /security page
│
├── components/                 # All React components
│   ├── Header.tsx              # Shrinking glass-morphism navigation
│   ├── Hero.tsx                # Animated hero section
│   ├── HomeShowcase.tsx        # Homepage bento showcase grid
│   ├── Solutions.tsx           # Solutions bento grid
│   ├── Services.tsx            # Services section
│   ├── Products.tsx            # Products & CardStack showcase
│   ├── CardStack.tsx           # 3-D stacking card animation
│   ├── MarqueeStrip.tsx        # Infinite marquee ticker
│   ├── Contact.tsx             # Contact form
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── Footer.tsx              # Full-bleed footer
│   ├── CursorFollower.tsx      # Custom cursor glow
│   ├── RepelText.tsx           # Magnetic repel text effect
│   ├── LenisInit.tsx           # Smooth-scroll initialiser (Lenis)
│   └── TiltInit.tsx            # VanillaTilt card initialiser
│
├── public/
│   ├── backgrounds/            # All page & section imagery / videos
│   ├── fonts/                  # Self-hosted ABCFavorit & OCRX fonts
│   └── icons/                  # Eledralabs SVG / PNG logo variants
│
├── next.config.ts              # Next.js config (dual .next / .next-build)
├── vercel.json                 # Vercel deployment config
└── package.json
```

---

## ⚡ Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Showcase grid, Marquee |
| `/solutions` | Full solutions bento grid |
| `/products` | Interactive 3-D CardStack product showcase |
| `/contact` | Animated contact form |
| `/faq` | Accordion FAQ |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/security` | Security disclosure |

---

## 🎨 Design System

The entire visual language lives in [`app/globals.css`](app/globals.css) — a single design-system file that drives every page consistently.

| Feature | Implementation |
|---|---|
| **Dark glass-morphism nav** | `backdrop-filter: blur` + scroll-driven height shrink |
| **Custom cursor glow** | `CursorFollower.tsx` — radial gradient tracks pointer |
| **Magnetic text repel** | `RepelText.tsx` — JS-powered DOM repulsion |
| **3-D card stack** | `CardStack.tsx` — Framer Motion staggered transforms |
| **Smooth scroll** | Lenis smooth-scroll via `LenisInit.tsx` |
| **Tilt on hover** | VanillaTilt initialised in `TiltInit.tsx` |
| **Infinite marquee** | CSS `@keyframes` marquee in `MarqueeStrip.tsx` |
| **Self-hosted fonts** | ABCFavorit Mono + OCRX — zero layout shift |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### 1 — Install dependencies

```bash
npm install
```

### 2 — Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3 — Build for production

```bash
npm run build
```

> The production build outputs to **`.next-build/`** (kept separate from the dev `.next/` cache so local development stays fast).

---

## 🌐 Deployment

The site is deployed on **[Vercel](https://vercel.com)** with zero-config CI/CD — every push to `main` triggers an automatic production deployment.

| Setting | Value |
|---|---|
| Framework | Next.js |
| Output mode | Static export (`output: "export"`) |
| Analytics | Vercel Analytics + Speed Insights |
| Domain | `eledralabs.com` |
| Sitemap | `https://eledralabs.com/sitemap.xml` |
| Robots | `https://eledralabs.com/robots.txt` |

---

## 🖼 Customising Assets

All page imagery lives in `public/backgrounds/`. Filenames follow a clear convention:

| File pattern | Used in |
|---|---|
| `solutions-1.png … solutions-4.png` | Solutions bento grid |
| `products-*.png` | Products page cards |
| `lab.png`, `booking.png` | Homepage showcase panels |
| `pi-glass-loop-prod.mp4` / `.webm` | Hero background video (dual format for browser compat) |
| `spring-*.png / .webm` | Spring animation panels |
| `story-*.png` | Story / about panels |
| `zapier-*.png` | Integration showcase |

Replace any file with the same filename and the site will pick it up automatically on the next build.

---

## 🧾 License

This project is licensed under the terms of the **GNU General Public License v3.0**.  
See the [`LICENSE`](LICENSE) file for full details.

---

<p align="center">
  Built with ♥ by the <a href="https://eledralabs.com">Eledralabs</a> team
</p>
