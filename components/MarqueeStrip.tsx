'use client'

import { useRef, useEffect } from 'react'

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
  const rafRef = useRef<number>()
  const lastTimeRef = useRef<number>()
  const initializedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

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
      <div key={`${logo.alt}${keySuffix}`} className="logo-item">
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
