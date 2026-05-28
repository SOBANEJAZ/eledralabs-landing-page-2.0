'use client'

import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return
    }

    const dot = dotRef.current
    if (!dot) return

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let dotX = pointerX
    let dotY = pointerY
    let frame = 0

    const moveDot = () => {
      dotX += (pointerX - dotX) * 0.38
      dotY += (pointerY - dotY) * 0.38
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(moveDot)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      dot.classList.add('is-visible')
    }

    const handlePointerLeave = () => {
      dot.classList.remove('is-visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    frame = window.requestAnimationFrame(moveDot)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <span ref={dotRef} className="cursor-follower" aria-hidden="true" />
}
