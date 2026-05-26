'use client'

import Script from 'next/script'

export default function LenisInit() {
  return (
    <Script
      src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const W = window as any
        if (typeof W.Lenis === 'undefined') return
        const lenis = new W.Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 1.5,
          infinite: false,
        })
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        W.lenis = lenis
      }}
    />
  )
}
