'use client'

import { useEffect } from 'react'

export default function TiltInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const CARD_SELECTORS = [
      '.pillar-card',
      '.bento-card',
      '.sol-feature-card',
      '.product-detail-card',
      '.product-pricing-card',
      '#solutions-testimonials-section a',
      '.svc-row .svc-content-col',
      '.svc-row .svc-img-col'
    ].join(',')

    let activeCard: HTMLElement | null = null

    const isProductCard = (card: HTMLElement) =>
      card.classList.contains('product-detail-card') || card.classList.contains('product-pricing-card')

    const updateCard = (card: HTMLElement, e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Page-aware tilt intensity — product cards get a gentler effect
      const subtle = isProductCard(card)
      const maxRotation = subtle ? 3 : 9
      const scale = subtle ? 1.01 : 1.04
      const zLift = subtle ? 8 : 24
      const glareAlpha = subtle ? 0.06 : 0.12

      const rotateX = -((centerY - y) / centerY) * maxRotation
      const rotateY = -((x - centerX) / centerX) * maxRotation

      // Preserve vertical scroll parallax translate3d from HomeShowcase.tsx if present
      let extraTransforms = ''
      if (card.classList.contains('pillar-card')) {
        const transformAttr = card.getAttribute('style') || ''
        const match = transformAttr.match(/translate3d\([^)]+\)/)
        if (match) {
          extraTransforms = ' ' + match[0]
        }
      }

      // Elegant lift & tilt and bring active card to top
      card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(${zLift}px)${extraTransforms}`
      card.style.zIndex = '50'

      // Create/Get glare element dynamically
      let glare = card.querySelector('.card-glare-overlay') as HTMLElement
      if (!glare) {
        glare = document.createElement('div')
        glare.className = 'card-glare-overlay'
        card.appendChild(glare)
      }

      // Track glare coordinates
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      glare.style.background = `radial-gradient(circle at ${glareX.toFixed(2)}% ${glareY.toFixed(2)}%, rgba(255, 255, 255, ${glareAlpha}) 0%, rgba(255, 255, 255, 0) 65%)`
      glare.style.opacity = '1'
    }

    const resetCard = (card: HTMLElement) => {
      // Revert elegantly to base resting state
      let extraTransforms = ''
      if (card.classList.contains('pillar-card')) {
        const transformAttr = card.getAttribute('style') || ''
        const match = transformAttr.match(/translate3d\([^)]+\)/)
        if (match) {
          extraTransforms = ' ' + match[0]
        }
      }

      card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)${extraTransforms}`
      card.style.zIndex = ''

      const glare = card.querySelector('.card-glare-overlay') as HTMLElement
      if (glare) {
        glare.style.opacity = '0'
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest(CARD_SELECTORS) as HTMLElement | null
      if (card) {
        if (activeCard && activeCard !== card) {
          resetCard(activeCard)
        }
        activeCard = card
        updateCard(card, e)
      } else if (activeCard) {
        resetCard(activeCard)
        activeCard = null
      }
    }

    const handleMouseLeave = () => {
      if (activeCard) {
        resetCard(activeCard)
        activeCard = null
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('blur', handleMouseLeave)
    window.addEventListener('scroll', handleMouseLeave, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('blur', handleMouseLeave)
      window.removeEventListener('scroll', handleMouseLeave)
    }
  }, [])

  return null
}
