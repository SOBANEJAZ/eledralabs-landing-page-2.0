import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'

const footerLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', alt: 'Redis' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', alt: 'Vue.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', alt: 'CSS3' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-border relative overflow-hidden" aria-label="Footer">
      {/* Green glow semicircle — anchored to the page bottom */}
      {/* Green Aurora Gradient — Wavy/Spiral pattern with Uniform Base */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Uniform Base Glow to guarantee no weak spots */}
        <div
          className="absolute"
          style={{
            width: '120%',
            height: '280px',
            left: '-10%',
            bottom: '-120px',
            background: 'linear-gradient(to top, rgba(61, 110, 78, 0.35) 0%, rgba(61, 110, 78, 0.1) 60%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Peak 1 (Left, low) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            left: '-8%',
            bottom: '-160px',
            background: 'rgba(61, 110, 78, 0.45)',
            filter: 'blur(100px)',
          }}
        />
        {/* Peak 2 (Left-center, high) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            left: '12%',
            bottom: '-20px',
            background: 'rgba(61, 110, 78, 0.35)',
            filter: 'blur(120px)',
          }}
        />
        {/* Peak 3 (Center, low) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            left: '40%',
            bottom: '-160px',
            background: 'rgba(61, 110, 78, 0.45)',
            filter: 'blur(100px)',
          }}
        />
        {/* Peak 4 (Right-center, high) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            left: '66%',
            bottom: '-20px',
            background: 'rgba(61, 110, 78, 0.35)',
            filter: 'blur(120px)',
          }}
        />
        {/* Peak 5 (Right, low) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            left: '90%',
            bottom: '-160px',
            background: 'rgba(61, 110, 78, 0.45)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Scrolling Logo Marquee */}
      <div className="footer-marquee bg-black flex flex-col -mt-10 md:-mt-14 py-8 md:py-10">
        <MarqueeStrip logos={footerLogos} speed={50} reverse />
      </div>

      {/* Footer Content */}
      <div className="footer-container px-6 md:px-12 xl:px-16 mt-8 md:mt-12">
        
        {/* Giant Headline CTA */}
        <div className="footer-headline-section border-b border-border/40 pt-2 md:pt-4 pb-6 mb-8">
          <h2 className="footer-headline-text text-center mx-auto">
            Designing <span className="text-accent-lime font-medium">systems</span> that drive business <span className="text-accent-lime font-medium">outcomes</span>.
          </h2>
        </div>

        {/* Footer Upper: Five Column Grid */}
        <div className="footer-middle-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-10 pb-12 border-b border-border/40">
          
          {/* Brand Info — spans wider on desktop */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <Link aria-label="Eledralabs home" href="/" className="inline-block">
              <img
                alt="Logo"
                width="240"
                height="32"
                decoding="async"
                className="h-8 w-auto"
                style={{ color: 'transparent' }}
                src="/icons/eledralabs-logo.svg"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              We build precision-engineered Web and AI workflows that reduce operational drag, optimize key pathways, and automate critical business infrastructure.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-5">
            <p className="footer-col-title font-favorit text-xs uppercase tracking-wider text-white/30">Navigation</p>
            <div className="footer-col-links flex flex-col gap-3">
              <Link href="/solutions" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Solutions</Link>
              <Link href="/products" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Products</Link>
              <Link href="/contact" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Contact</Link>
              <Link href="/faq" className="text-white/60 hover:text-white text-sm uppercase transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-5">
            <p className="footer-col-title font-favorit text-xs uppercase tracking-wider text-white/30">Legal</p>
            <div className="footer-col-links flex flex-col gap-3">
              <Link href="/terms-of-service" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Terms</Link>
              <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Privacy</Link>
              <Link href="/security" className="text-white/60 hover:text-white text-sm uppercase transition-colors">Security</Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-5">
            <p className="footer-col-title font-favorit text-xs uppercase tracking-wider text-white/30">Connect</p>
            <div className="footer-col-links flex flex-col gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/eledra-labs/"
                className="text-white/60 hover:text-white text-sm uppercase transition-colors"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/eledralabs/"
                className="text-white/60 hover:text-white text-sm uppercase transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:contact@eledralabs.com"
                className="text-white/60 hover:text-white text-sm uppercase transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Massive Giant Brand Text Banner */}
        <div className="footer-giant-banner-container select-none pointer-events-none mt-4 mb-4">
          <span className="footer-giant-brand-text">
            eledralabs
          </span>
        </div>

        {/* Footer Lower: Copyright Row */}
        <div className="footer-lower-section flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 pb-2 border-t border-border/30">
          <span className="footer-copyright">&copy; 2026 Eledra Labs, Inc. All rights reserved.</span>
          <span className="text-[11px] font-favorit text-white/20 uppercase tracking-wider">
            Meticulously Crafted &bull; AI &amp; Automation Systems
          </span>
        </div>

      </div>
    </footer>
  )
}
