'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500${
        scrolled ? ' header-scrolled' : ''
      }`}
    >
      {/* 3-col grid: logo | nav | cta */}
      <div className="relative z-100 grid grid-cols-[1fr_auto_1fr] px-6 md:px-12 xl:px-16 max-w-none mx-auto bg-transparent transition-all duration-500 header-inner">

        {/* Col 1 — Logo */}
        <div className="flex items-center">
          <Link className="flex items-center shrink-0" href="/">
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
        </div>

        {/* Col 2 — Nav (centered) */}
        <div className="hidden xl:flex items-center gap-1">
          {/* Block nav ≥ 1400px */}
          <div className="hidden min-[1400px]:flex items-center gap-1">
            <Link className="group flex h-9 w-48 items-center justify-between bg-white-soft px-2.5 font-favorit text-xs text-white transition-colors duration-150 hover:bg-white/20" href="/solutions">
              <span className="uppercase">Solutions</span>
              <span className="text-white/30 transition-colors group-hover:text-white/50">01</span>
            </Link>
            <Link className="group flex h-9 w-48 items-center justify-between bg-white-soft px-2.5 font-favorit text-xs text-white transition-colors duration-150 hover:bg-white/20" href="/products">
              <span className="uppercase">Products</span>
              <span className="text-white/30 transition-colors group-hover:text-white/50">02</span>
            </Link>
            <Link className="group flex h-9 w-48 items-center justify-between bg-white-soft px-2.5 font-favorit text-xs text-white transition-colors duration-150 hover:bg-white/20" href="/contact">
              <span className="uppercase">Contact</span>
              <span className="text-white/30 transition-colors group-hover:text-white/50">03</span>
            </Link>
            <Link className="group flex h-9 w-48 items-center justify-between bg-white-soft px-2.5 font-favorit text-xs text-white transition-colors duration-150 hover:bg-white/20" href="/faq">
              <span className="uppercase">FAQ</span>
              <span className="text-white/30 transition-colors group-hover:text-white/50">04</span>
            </Link>
          </div>

          {/* Pill nav 1280–1400px */}
          <div className="flex min-[1400px]:hidden items-center gap-1">
            <Link className="bg-black/60 px-3 py-2 font-favorit text-xs leading-none text-white uppercase backdrop-blur-md transition-colors hover:bg-black/80" href="/solutions">Solutions</Link>
            <Link className="bg-black/60 px-3 py-2 font-favorit text-xs leading-none text-white uppercase backdrop-blur-md transition-colors hover:bg-black/80" href="/products">Products</Link>
            <Link className="bg-black/60 px-3 py-2 font-favorit text-xs leading-none text-white uppercase backdrop-blur-md transition-colors hover:bg-black/80" href="/contact">Contact</Link>
            <Link className="bg-black/60 px-3 py-2 font-favorit text-xs leading-none text-white uppercase backdrop-blur-md transition-colors hover:bg-black/80" href="/faq">FAQ</Link>
          </div>
        </div>

        {/* Col 3 — CTA + Hamburger */}
        <div className="flex items-center justify-end gap-2">
          <div className="hidden xl:flex">
            <Link
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-9 px-4 py-2.5 text-xs leading-none"
              href="/contact"
            >
              Get Started
              <div className="w-3 h-3 overflow-hidden relative">
                <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:cursor-pointer size-9 xl:hidden w-12 h-12 -mr-2 bg-surface-raised text-white hover:bg-surface-hover"
            aria-label="Open menu"
            type="button"
          >
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out opacity-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </button>
        </div>

      </div>
    </header>
  )
}
