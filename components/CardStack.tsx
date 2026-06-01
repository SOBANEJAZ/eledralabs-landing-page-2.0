'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface StackCard {
  id: string
  category: string
  title: string
  body: string
  metric?: { value: string; label: string }
  tag?: string
  accent: string        // CSS color string
  accentSoft: string    // rgba with low alpha
  accentBorder: string  // rgba with medium alpha
  href?: string
  icon?: React.ReactNode
}

interface CardStackProps {
  cards: StackCard[]
  /** px spread from center for outermost cards. Default 340 */
  spreadX?: number
  /** slight vertical stagger at full fan. Default 14 */
  spreadY?: number
  /** rotation multiplier. Default 1 */
  rotationScale?: number
}

// ─── Layout math ─────────────────────────────────────────────────────────────

function getCardTransform(
  index: number,
  total: number,
  fanned: boolean,
  spreadX: number,
  spreadY: number,
  rotScale: number,
) {
  const mid = (total - 1) / 2
  const offset = index - mid               // -2..+2 for 5 cards
  const norm = total > 1 ? offset / mid : 0 // -1..+1

  const stackRotations   = [-8, -4, 0, 4, 8, -6, 6]
  const stackTranslateX  = [-6, -3, 0, 3, 6, -4, 4]
  const stackTranslateY  = [4,  2,  0, 2, 4,  3, 3]

  if (!fanned) {
    return {
      x: stackTranslateX[index % stackTranslateX.length],
      y: stackTranslateY[index % stackTranslateY.length],
      rotate: stackRotations[index % stackRotations.length] * rotScale,
      scale: 1 - Math.abs(offset) * 0.015,
      zIndex: index,
    }
  }

  return {
    x: Math.sign(norm) * Math.pow(Math.abs(norm), 0.8) * spreadX,
    y: Math.abs(norm) * spreadY,
    rotate: offset * 8 * rotScale,
    scale: 1 - Math.abs(offset) * 0.018,
    zIndex: index,
  }
}

// ─── Single card ─────────────────────────────────────────────────────────────

interface SingleCardProps {
  card: StackCard
  index: number
  total: number
  fanned: boolean
  spreadX: number
  spreadY: number
  rotationScale: number
  isTop: boolean
  onTap: () => void
  isActive: boolean
  cardWidth: number
  windowWidth: number
}

function SingleCard({
  card,
  index,
  total,
  fanned,
  spreadX,
  spreadY,
  rotationScale,
  isTop,
  onTap,
  isActive,
  cardWidth,
  windowWidth,
}: SingleCardProps) {
  const [localHover, setLocalHover] = useState(false)
  const tf = getCardTransform(index, total, fanned, spreadX, spreadY, rotationScale)

  return (
    <motion.div
      layout
      animate={{
        x: tf.x,
        y: isActive ? tf.y : (localHover ? tf.y - 12 : tf.y),
        rotate: tf.rotate,
        scale: isActive ? 1.02 : (localHover ? 1.01 : tf.scale),
        zIndex: isActive ? 50 : tf.zIndex,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 0.8,
      }}
      onMouseEnter={() => setLocalHover(true)}
      onMouseLeave={() => {
        setLocalHover(false)
        if (isActive) {
          onTap()
        }
      }}
      onClick={onTap}
      className="stack-card absolute"
      style={{
        width: `${cardWidth}px`,
        left: '50%',
        marginLeft: `-${cardWidth / 2}px`,
        cursor: 'pointer',
        transformOrigin: `center ${windowWidth <= 768 ? '260px' : '360px'}`,
      }}
    >
      <div
        className="stack-card-inner border border-border bg-surface relative overflow-hidden"
        style={{
          borderLeftColor: card.accentBorder,
          borderLeftWidth: '2px',
          boxShadow: isActive
            ? `0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px ${card.accentBorder}`
            : (localHover ? `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${card.accentBorder}` : '0 4px 24px rgba(0,0,0,0.45)'),
          transition: 'box-shadow 0.35s ease',
        }}
      >
        {/* Ambient glow */}
        {fanned && (
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none blur-3xl"
            style={{ 
              background: `radial-gradient(circle, ${card.accentSoft} 0%, transparent 70%)`,
              opacity: isActive ? 1.0 : (localHover ? 0.75 : 0.3),
              transition: 'opacity 0.3s ease',
            }}
          />
        )}

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-favorit text-2xs uppercase tracking-widest px-2 py-0.5 border"
            style={{
              color: card.accent,
              borderColor: card.accentBorder,
              background: card.accentSoft,
            }}
          >
            {card.category}
          </span>
          {card.tag && (
            <span className="font-favorit text-2xs text-white/20 uppercase tracking-wider select-none">
              {card.tag}
            </span>
          )}
        </div>

        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          {card.icon && (
            <span
              className="shrink-0 mt-0.5 p-2 border border-border"
              style={{ color: card.accent, background: card.accentSoft }}
            >
              {card.icon}
            </span>
          )}
          <h3 className="font-sans text-white font-medium leading-snug tracking-tight" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
            {card.title}
          </h3>
        </div>

        {/* Body */}
        <p className="font-sans text-sm text-white/50 leading-relaxed mb-4">
          {card.body}
        </p>

        {/* Metric pill */}
        {card.metric && (
          <div className="flex items-end gap-2 border-t border-border/50 pt-3 mt-auto">
            <span className="font-sans font-bold text-white leading-none" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', color: card.accent }}>
              {card.metric.value}
            </span>
            <span className="font-favorit text-2xs text-white/30 uppercase pb-0.5">{card.metric.label}</span>
          </div>
        )}

        {/* CTA */}
        {fanned && card.href && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.25 }}
            className="mt-4 pt-3 border-t border-border/40"
          >
            <Link
              href={card.href}
              className="inline-flex items-center gap-1 font-favorit text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ color: card.accent }}
            >
              Learn more
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CardStack({
  cards,
  spreadX = 390,
  spreadY = 14,
  rotationScale = 1,
}: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(1200)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fanned = windowWidth > 768
  const total = cards.length

  const tap = useCallback((index: number) => {
    if (window.innerWidth <= 768) return // no active expand state on mobile
    setActiveIndex(prev => prev === index ? null : index)
  }, [])

  if (!mounted) {
    return null
  }

  // Dynamically calculate spread to prevent horizontal cutoffs
  // On desktop (width > 768px), cardWidth is 320px. On mobile/tablet, it's 280px.
  const cardWidth = windowWidth <= 768 ? 280 : 320
  const padding = windowWidth <= 768 ? 16 : 32 // tighter side margins on mobile
  const maxSpreadX = (windowWidth - cardWidth - padding) / 2
  const activeSpreadX = windowWidth <= 768
    ? Math.max(10, Math.min(15, maxSpreadX))
    : Math.max(30, Math.min(spreadX, maxSpreadX))
  const activeRotationScale = windowWidth <= 768 ? 0.45 : rotationScale

  return (
    <div className="card-stack-section overflow-visible relative">
      {/* Premium ambient holographic blur spotlight */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[100px] opacity-25 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.16) 0%, rgba(6, 182, 212, 0.12) 40%, transparent 70%)',
        }}
      />
      {/* Section label */}
      <div className="text-center mb-20 md:mb-28 relative z-10 pointer-events-none">
        <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest mb-2">
          Intelligence Stack — Click to focus capability
        </p>
        <h2 className="font-sans text-white font-light leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
          Every capability, one unified platform.
        </h2>
      </div>

      {/* Stack stage */}
      <div
        className="card-stack-stage relative mx-auto"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: `${activeSpreadX * 2 + cardWidth}px`,
          height: windowWidth <= 768 ? '320px' : '480px',
          transition: 'max-width 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {cards.map((card, i) => (
          <SingleCard
            key={card.id}
            card={card}
            index={i}
            total={total}
            fanned={fanned}
            spreadX={activeSpreadX}
            spreadY={spreadY}
            rotationScale={activeRotationScale}
            isTop={i === total - 1}
            onTap={() => tap(i)}
            isActive={windowWidth > 768 && activeIndex === i}
            cardWidth={cardWidth}
            windowWidth={windowWidth}
          />
        ))}
      </div>

      {/* Mobile hint — hidden on desktop */}
      <p className="md:hidden text-center font-favorit text-2xs text-white/20 uppercase tracking-widest mt-6 relative z-10">
        Tap a capability to focus
      </p>

      {/* Fan state label */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:block text-center font-favorit text-2xs text-white/20 uppercase tracking-widest mt-10 relative z-10 pointer-events-none"
      >
        {cards.length} capabilities — Click to focus
      </motion.p>
    </div>
  )
}
