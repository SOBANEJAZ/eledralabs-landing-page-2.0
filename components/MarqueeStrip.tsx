'use client'

import { useRef, useEffect, type CSSProperties } from 'react'

interface Logo {
  src: string
  alt: string
}

interface MarqueeStripProps {
  logos: Logo[]
  speed?: number   // px per second
  reverse?: boolean
  className?: string
}

export default function MarqueeStrip({
  logos,
  speed = 70,
  reverse = false,
  className = '',
}: MarqueeStripProps) {

  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef<number>(undefined)
  const lastTimeRef = useRef<number>(undefined)
  const initializedRef = useRef(false)

  const logoAccent: Record<string, string> = {
    TensorFlow: '#ff6f00',
    'Node.js': '#83cd29',
    Go: '#00add8',
    Python: '#3776ab',
    Kubernetes: '#326ce5',
    PyTorch: '#ee4c2c',
    Docker: '#2496ed',
    AWS: '#ff9900',
    'Google Cloud': '#4285f4',
    Nginx: '#009639',
    Linux: '#fbc02d',
    GraphQL: '#e535ab',
    Figma: '#a259ff',
    React: '#61dafb',
    TypeScript: '#3178c6',
    PostgreSQL: '#336791',
    Redis: '#dc382d',
    JavaScript: '#f7df1e',
    Tailwind: '#38bdf8',
    MongoDB: '#47a248',
    Git: '#f05032',
    'Vue.js': '#42b883',
    HTML5: '#e34f26',
    CSS3: '#1572b6',
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const step = (timestamp: number) => {
      const track = trackRef.current
      if (!track) return

      const half = track.scrollWidth / 2
      if (half === 0) {
        rafRef.current = requestAnimationFrame(step)
        return
      }

      // Initialise reverse direction at -half so it scrolls toward 0
      if (!initializedRef.current) {
        initializedRef.current = true
        if (reverse) posRef.current = -half
      }

      const dt = lastTimeRef.current != null
        ? Math.min((timestamp - lastTimeRef.current) / 1000, 0.05) // cap at 50 ms to survive tab switches
        : 0
      lastTimeRef.current = timestamp

      posRef.current += speed * dt * (reverse ? 1 : -1)

      // Seamless wrap
      if (!reverse && posRef.current <= -half) posRef.current += half
      if (reverse  && posRef.current >= 0)     posRef.current -= half

      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed, reverse])

  const renderItems = (keySuffix = '') =>
    logos.map((logo) => (
      <div
        key={`${logo.alt}${keySuffix}`}
        className="logo-item"
        style={{ '--logo-accent': logoAccent[logo.alt] ?? '#ffffff' } as CSSProperties}
        aria-label={`${logo.alt} logo`}
      >
        <span className="logo-brackets" aria-hidden="true" />
        <img src={logo.src} alt={logo.alt} />
      </div>
    ))

  return (
    <div className={`marquee-container ${className}`}>
      <div
        ref={trackRef}
        className="marquee-track"
        style={{ animation: 'none', willChange: 'transform' }}
      >
        <div className="marquee-content">{renderItems()}</div>
        <div className="marquee-content" aria-hidden="true">{renderItems('-2')}</div>
      </div>
    </div>
  )
}
