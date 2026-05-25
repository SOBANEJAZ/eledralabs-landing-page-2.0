# 🛠️ Mega Changelog — Features & Changes Catalog
## Eledralabs Web & AI Platform

This changelog presents a comprehensive, granular list of every feature added and architectural change made to the Eledralabs website.

---

### 🎨 0. Hero Section & Branding
*   **Changed**: Increased the size of the main "Eledralabs" hero title to make it more prominent (`text-[5.5rem]`/`text-[6.5rem]`).
*   **Removed**: Removed the "Precision automation" subtitle line from the main hero heading for a cleaner aesthetic.

### 🚀 1. Deployment & Analytics
*   **Added**: Configured `vercel.json` with the production project namespace for Vercel CLI deployments.
*   **Added**: Installed `@vercel/speed-insights` package and injected Vanilla JS snippet into `index.html` to track Real Experience Scores (Core Web Vitals).
*   **Added**: Installed `@vercel/analytics` package and injected Vanilla JS snippet into `index.html` to automatically track unique visitors and pageviews.
*   **Added**: Updated `.gitignore` to prevent committing the `.vercel` project cache folder.

### 🌐 1. Navigation Header & Menu Changes
*   **Added**: Dynamic height-shrinking transition that contracts the navbar height from `64px` (un-scrolled) down to a compact `52px` (scrolled).
*   **Added**: Smooth transition timing parameters (`0.4s`) utilizing custom premium curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
*   **Added**: Automatic solid deep black (`#000000`) background fill when scrolling past `20px` to hide all underlying website content.
*   **Added**: Dynamic glassmorphic blur backdrop overlay (`backdrop-filter: blur(16px)`) with `rgba(10, 10, 10, 0.75)` to prevent color blending with background elements.
*   **Added**: Deep-shadow layout elevation (`box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2)`) to give the scrolled header a premium floating panel appearance.
*   **Changed**: Completely removed the bottom border (`border-bottom: none !important;`) on scrolled states to eliminate blinking white border lines.
*   **Changed**: Restored the default header state to a clean, fully transparent (`bg-transparent`) view when scrolled back to the top.
*   **Added**: Interactive sliding arrow icons on the "Get Started" links with translate-x animations on hover.
*   **Added**: Active bottom-border link transitions matching active SPA routes.
*   **Added**: Responsive desktop menu toggles showing custom big block navs above `1400px` and compact buttons between `1200px` and `1400px`.
*   **Changed**: Reverted the "Center Big Block Nav" links (viewports >= 1400px) back to their pixel-perfect original sharp-cornered, borderless rectangular design (`h-7.5 w-45 bg-white-soft`) to preserve the clean, minimal aesthetic matching the reference image.

### ⚡ 2. Hero Interactive Tech Features Grid Changes
*   **Added**: A custom responsive grid layout hosting 6 technical capability blocks (scaled to 6-columns on desktop and 2-columns on mobile).
*   **Added**: 6 highly detailed, custom-designed isometric monochrome SVGs to visualize technology platforms (Agent Orchestration, Docker Sandbox, Reinforcement Learning, Verification Layer, Observability, and Distributed Compute).
*   **Added**: **Emerald Green** accent hover state on Card 1 (Agent Orchestration) — custom `rgba(16, 185, 129, 0.06)` background tint, `#10b981` border glow, matching text-shadow, and icon scale.
*   **Added**: **Vibrant Cyan** accent hover state on Card 2 (Docker Sandbox) — custom `rgba(14, 165, 233, 0.06)` background tint, `#0ea5e9` border glow, matching text-shadow, and icon scale.
*   **Added**: **Electric Purple** accent hover state on Card 3 (Reinforcement Learning) — custom `rgba(139, 92, 246, 0.06)` background tint, `#8b5cf6` border glow, matching text-shadow, and icon scale.
*   **Added**: **Neon Red** accent hover state on Card 4 (Verification Layer) — custom `rgba(239, 68, 68, 0.06)` background tint, `#ef4444` border glow, matching text-shadow, and icon scale.
*   **Added**: **Solar Yellow** accent hover state on Card 5 (Full Observability) — custom `rgba(245, 158, 11, 0.06)` background tint, `#f59e0b` border glow, matching text-shadow, and icon scale.
*   **Added**: **Hot Pink** accent hover state on Card 6 (Distributed Compute) — custom `rgba(236, 72, 153, 0.06)` background tint, `#ec4899` border glow, matching text-shadow, and icon scale.
*   **Added**: Saturated neon drop-shadow vector filters (`filter: drop-shadow(...)`) that light up on hover.
*   **Added**: Soft text label glows (`text-shadow: 0 0 8px rgba(COLOR, 0.2)`) matching each hover state color.
*   **Added**: Interactive `scale-110` icon zoom and dynamic vertical translation on cursor hover.
*   **Added**: Contrast normalization on labels (transitions text opacity smoothly from `text-white/50` to full color).
*   **Added**: Smooth `0.3s` cubic-bezier transition curves on all interactive grid cards.
*   **Changed**: Realigned the Y-axis `object-position` of the background video in `components/hero.html` (shifting Y values to 98% and 92%) and implemented a physical vertical translation (`xl:-translate-y-16`) with an extra vertical scale factor (`xl:scale-y-125`) on desktop to completely push the bright pinkish sky out of the viewport, ensuring a perfectly dark, high-contrast tree-filled background behind the header menu.

### 📐 3. Solutions Row Showcase & Layout Changes
*   **Changed**: Migrated from a standard dense bento card grid to a spacious widescreen horizontal row system (`.svc-row`).
*   **Changed**: Enlarged the desktop image column width to a balanced **45%** to expand picture sizes and reduce text clutter.
*   **Added**: Proportional screenshot aspect ratios using `object-fit: contain` to prevent any text clipping or image stretching.
*   **Added**: Custom radial gradient showcase mockups (`radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.5) 100%)`) to host screenshots.
*   **Added**: Premium rounded corners (`border-radius: 8px`) on all Solutions screenshots.
*   **Added**: Translucent boundary border frame (`1px solid rgba(255, 255, 255, 0.1)`) on screenshots.
*   **Added**: Double-layered heavy drop shadows (`box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6)`) giving screenshot containers a floating screen appearance.
*   **Added**: Butter-smooth micro-animations on solutions hover with a `scale-103` zoom and a `-2px` vertical translate lift.
*   **Added**: Custom index badges showing numerical increments (`01`, `02`, `03`, `04`) on solutions cards.
*   **Added**: Responsive min-height adjustment (desktop rows scale to a minimum of `320px` to maintain symmetry).
*   **Added**: Interactive "Explore" buttons with transitioning arrow indicators inside each service card footer.
*   **Changed**: Overwrote 400KB of complex precompiled inline SVG diagram paths in services, replacing them with customizable external image links.
*   **Changed**: Aligned the secondary grid backup component [solutions.html](file:///c:/Users/Hp/Desktop/eledralabs-%20website/eledralabs-%20website/components/solutions.html) to share identical aspect ratios, rounded borders, and card elevations.

### 📁 4. Asset Integration & Pipeline Changes
*   **Changed**: Normalised screenshot file extensions inside `/backgrounds/` to lowercase `.png` to prevent page load failures.
*   **Added**: Swapped out generic placeholder assets inside `backgrounds/solutions-*.png` with real-world, high-resolution custom screenshots (Precision network flows, robot assistant dashboard, database analytics panel, automation logic paths).
*   **Changed**: Overwrote and cleaned up unused AI-generated templates and precompiled Turbopack assets.
*   **Added**: Fully integrated interactive testimonial cards for Sarah Okonkwo and James Whitford case studies.

### 🌐 5. SPA Client-Side Engine Features
*   **Added**: Custom-built asynchronous client-side component loader to dynamically fetch modular components.
*   **Added**: Instant hot-reload cache bypass using timestamp URL parameters (`?t=Date.now()`) on fetched files.
*   **Added**: Dynamically executed inline scripts (loader isolates and executes nested component scripts automatically).
*   **Added**: Full client-side pushState SPA router mapping clicks and hash changes (`#solutions`, `#products`, `#contact`).
*   **Added**: Smooth router fade transitions using `150ms` body opacity transitions.

### 🔌 6. Dev Server & Local Environment Features
*   **Added**: Local dev server configurations using `http-server` to run testing environments.
*   **Added**: Redundant port setups running servers on fallback ports (`8000`, `8080`, and `3000`) to resolve port conflicts.
*   **Added**: Automated browser-testing screenshots and validation console verification logs.

### 📞 7. Contact Us & Interactive FAQ Features
*   **Added**: Tailored interactive FAQ Accordion section below the contact form, matching the premium Eledralabs dark aesthetic with sharp rectangular boxes, index numbers (`01` through `10`), and animated expansion toggles (+ / x).
*   **Added**: Integrated a "View More" button that reveals 5 extra operational questions and answers with a custom vertical slide-up fade animation.
*   **Added**: Implemented self-closing logic to close other open FAQ items automatically when a new one is selected to ensure a clean view.
