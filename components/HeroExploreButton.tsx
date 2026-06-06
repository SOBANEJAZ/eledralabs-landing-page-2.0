'use client'

import type { MouseEvent, ReactNode } from 'react'

type HeroExploreButtonProps = {
  targetId: string
  className?: string
  children: ReactNode
}

// easeInOutCubic — slow start, quick middle, gentle settle. Reads as a
// deliberate, premium glide rather than a fling.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function HeroExploreButton({ targetId, className, children }: HeroExploreButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId)
    if (!target) return // let the browser handle it if the section is missing

    e.preventDefault()

    // Sit the target just below the fixed header instead of flush to the top.
    const header = document.querySelector('header')
    const offset = -((header?.offsetHeight ?? 64) + 16)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, { offset, duration: 1.5, easing: easeInOutCubic })
    } else {
      // Fallback for the brief window before Lenis loads (or if it failed).
      const top = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    // Keep the URL hash in sync without re-triggering a native jump.
    history.pushState(null, '', `#${targetId}`)
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
