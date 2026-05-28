'use client'

import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', alt: 'Go' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', alt: 'PyTorch' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', alt: 'Nginx' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', alt: 'Linux' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },
]

function Letters({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span key={i} className={`letter${className ? ` ${className}` : ''}`} style={{ '--i': i } as React.CSSProperties}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const [introPhase, setIntroPhase] = useState<'loading' | 'ready' | 'bursting' | 'gone'>(
    'loading',
  )
  const [minimumLoaded, setMinimumLoaded] = useState(false)

  useEffect(() => {
    const minimumTimer = window.setTimeout(() => setMinimumLoaded(true), 400)
    return () => {
      window.clearTimeout(minimumTimer)
    }
  }, [])

  useEffect(() => {
    if (introPhase === 'loading' && minimumLoaded) {
      setIntroPhase('ready')
    }
  }, [introPhase, minimumLoaded])

  useEffect(() => {
    if (introPhase === 'gone') return

    const previousOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      document.documentElement.style.overflow = previousRootOverflow
    }
  }, [introPhase])

  const revealHero = useCallback(() => {
    if (introPhase !== 'ready') return

    window.scrollTo({ top: 0, behavior: 'instant' })
    setIntroPhase('bursting')
    window.setTimeout(() => setIntroPhase('gone'), 1400)
  }, [introPhase])

  return (
    <section id="hero" className="relative -mx-4 flex flex-col mb-5 md:-mx-5 md:mb-8 lg:mb-20">
      {/* Video Background */}
      <div
        className="hero-video-edge-blend pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden bg-surface"
        style={{ height: 'calc(100vh - 4rem)', minHeight: '480px' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transform-gpu will-change-transform"
            suppressHydrationWarning
            style={{ transform: 'translate3d(0, var(--hero-parallax-y, 0px), 0)' }}
          >
            <video
              suppressHydrationWarning
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/backgrounds/pi-glass-loop-poster.webp"
              className="absolute inset-0 h-full w-full translate-x-36 -translate-y-22 -scale-x-160 scale-y-160 object-cover object-[90%_98%] max-[560px]:translate-x-20 max-[560px]:-translate-y-10 max-[560px]:-scale-x-145 max-[560px]:scale-y-145 max-[560px]:object-[78%_92%] xl:translate-x-6 xl:-translate-y-16 xl:-scale-x-110 xl:scale-y-160 xl:object-[62%_98%]"
            >
              <source src="/backgrounds/pi-glass-loop-prod.webm" type="video/webm" />
              <source src="/backgrounds/pi-glass-loop-prod.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-start justify-end px-5 pt-5 pb-8 lg:pb-10"
        style={{ height: 'calc(100vh - 4rem)', minHeight: '480px' }}
      >
        <div
          className={`relative z-10 flex w-full flex-col items-start gap-10 font-sans lg:flex-row lg:items-end ${
            introPhase === 'loading' || introPhase === 'ready'
              ? 'hero-content-hidden'
              : introPhase === 'bursting'
                ? 'hero-content-revealing'
                : ''
          }`}
        >
          <div className="flex flex-1 flex-col items-start">
            <h1
              className="hero-el-h1 leading-110 tracking-[0.08em]"
              style={{ fontSize: 'clamp(2.5rem, 5.8vw, 4.9rem)' }}
            >
              <span className="block">
                <span className="text-white font-bold"><Letters text="eledra" /></span>
                <span className="text-[#888888] font-normal"><Letters text=" labs" /></span>
              </span>
            </h1>
            <p className="hero-el-sub max-w-100 leading-normal text-white/50 mt-5">
              <Letters text="We build precision-engineered Web and AI workflows that reduce operational drag and automate critical systems." />
            </p>
            <div className="hero-el-cta flex items-center gap-1 font-favorit mt-10">
              <Link
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none"
                href="/contact"
              >
                Get Started
                <div className="w-3 h-3 overflow-hidden relative">
                  <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M4.75 9.125L7.875 6L4.75 2.875"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M4.75 9.125L7.875 6L4.75 2.875"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-button-container text-text-mute hover:bg-surface-hover hover:text-white min-h-7 px-2 py-2 text-xs leading-none"
                href="/contact"
              >
                Schedule Consultation
                <div className="w-3 h-3 overflow-hidden relative">
                  <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M4.75 9.125L7.875 6L4.75 2.875"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M4.75 9.125L7.875 6L4.75 2.875"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {introPhase !== 'gone' && (
        <button
          type="button"
          aria-label={introPhase === 'ready' ? 'Reveal Eledralabs landing page' : 'Loading landing page'}
          aria-live="polite"
          disabled={introPhase === 'loading'}
          onClick={revealHero}
          className={`hero-intro-overlay ${introPhase === 'ready' ? 'is-ready' : ''} ${
            introPhase === 'bursting' ? 'is-bursting' : ''
          }`}
          style={
            {
              '--splash-x': '50%',
              '--splash-y': '66%',
            } as CSSProperties
          }
        >
          <img
            src="/backgrounds/landing.png"
            alt=""
            draggable={false}
            className="hero-intro-sketch"
          />
          <span className="hero-intro-vignette" aria-hidden="true" />
          <span className="hero-intro-ripples" aria-hidden="true" />
          <span className="hero-intro-status">
            <span className="hero-intro-loading" aria-label="LOADING">
              <span className="hero-intro-loading-outline">LOADING</span>
              <span className="hero-intro-loading-fill" aria-hidden="true">
                LOADING
              </span>
            </span>
            <span className="hero-intro-ready">CLICK ANYWHERE</span>
          </span>
        </button>
      )}

      {/* Tech Logo Marquee */}
      <div
        className="border-t border-b border-border relative z-10 flex flex-col"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,0.5) 50%, rgba(0,0,0,0) 100%)',
        }}
      >
        <MarqueeStrip logos={techLogos} speed={70} />
      </div>
    </section>
  )
}
