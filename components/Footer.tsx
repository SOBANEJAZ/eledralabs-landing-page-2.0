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
    <footer className="w-full bg-black border-t border-border" aria-label="Footer">
      {/* Scrolling Logo Marquee */}
      <div className="footer-marquee bg-black flex flex-col">
        <MarqueeStrip logos={footerLogos} speed={50} reverse />
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-upper">
          {/* Brand */}
          <div className="footer-brand">
            <Link aria-label="Eledralabs home" href="/">
              <img alt="Eledralabs" className="footer-logo" src="/icons/eledralabs-text-logo.svg" />
            </Link>
            <p className="footer-tagline">
              We build precision-engineered Web and AI workflows that reduce operational drag and
              automate critical systems.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links-grid">
            <div className="footer-link-col">
              <p className="footer-col-title">Platform</p>
              <div className="footer-col-links">
                <Link href="/solutions">Solutions</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-link-col">
              <p className="footer-col-title">Company</p>
              <div className="footer-col-links">
                <Link href="/contact">Careers</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-link-col">
              <p className="footer-col-title">Community</p>
              <div className="footer-col-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/eledra-labs-8a9735411/?skipRedirect=true"
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/eledralabs/"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer-link-col">
              <p className="footer-col-title">Legal</p>
              <div className="footer-col-links">
                <Link href="/terms-of-service">Terms</Link>
                <Link href="/privacy-policy">Privacy</Link>
                <Link href="/security">Security</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-lower">
          <span className="footer-copyright">&copy; 2026 Eledra Labs, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
