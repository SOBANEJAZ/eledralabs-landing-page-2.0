'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface Line {
  text: string
  className?: string
}

interface RepelTextProps {
  lines: Line[]
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  repelRadius?: number
  maxDisplacement?: number
}

interface CharData {
  x: number
  y: number
  dx: number
  dy: number
}

export default function RepelText({
  lines,
  className = '',
  as: Tag = 'h2',
  repelRadius = 120,
  maxDisplacement = 40,
}: RepelTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const charsRef = useRef<HTMLSpanElement[]>([])
  const charDataRef = useRef<CharData[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(0)
  const [mounted, setMounted] = useState(false)

  const buildLines = useCallback(() => {
    const allChars: string[] = []
    const lineBreaks: number[] = []

    lines.forEach((line, lineIdx) => {
      if (lineIdx > 0) lineBreaks.push(allChars.length)
      for (const ch of line.text) {
        allChars.push(ch)
      }
    })

    return { allChars, lineBreaks }
  }, [lines])

  const measureChars = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()

    charsRef.current.forEach((el, i) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      charDataRef.current[i] = {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
        dx: 0,
        dy: 0,
      }
    })
  }, [])

  const animate = useCallback(() => {
    const mx = mouseRef.current.x
    const my = mouseRef.current.y
    const chars = charsRef.current
    const data = charDataRef.current

    let needsUpdate = false

    for (let i = 0; i < chars.length; i++) {
      const el = chars[i]
      const d = data[i]
      if (!el || !d) continue

      const distX = d.x - mx
      const distY = d.y - my
      const dist = Math.sqrt(distX * distX + distY * distY)

      let targetDx = 0
      let targetDy = 0

      if (dist < repelRadius && dist > 0) {
        const force = (1 - dist / repelRadius) * maxDisplacement
        targetDx = (distX / dist) * force
        targetDy = (distY / dist) * force
      }

      d.dx += (targetDx - d.dx) * 0.15
      d.dy += (targetDy - d.dy) * 0.15

      if (Math.abs(d.dx) > 0.01 || Math.abs(d.dy) > 0.01) {
        needsUpdate = true
      }

      el.style.transform =
        Math.abs(d.dx) > 0.01 || Math.abs(d.dy) > 0.01
          ? `translate(${d.dx.toFixed(1)}px, ${d.dy.toFixed(1)}px)`
          : ''
    }

    if (needsUpdate) {
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [repelRadius, maxDisplacement])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(animate)
    },
    [animate],
  )

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 }

    const chars = charsRef.current
    const data = charDataRef.current
    let needsUpdate = false

    for (let i = 0; i < chars.length; i++) {
      const d = data[i]
      if (!d) continue
      if (Math.abs(d.dx) > 0.01 || Math.abs(d.dy) > 0.01) {
        needsUpdate = true
        break
      }
    }

    if (needsUpdate) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    measureChars()

    const onResize = () => measureChars()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mounted, measureChars])

  const { allChars, lineBreaks } = buildLines()
  let charIndex = 0

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', width: '100%' }}
    >
      <Tag className={className} style={{ pointerEvents: 'auto' }}>
        {lines.map((line, lineIdx) => {
          const chars = line.text.split('')
          return (
            <span
              key={lineIdx}
              className={`repel-line ${line.className ?? ''}`}
              style={{ display: 'block' }}
            >
              {chars.map((ch, ci) => {
                const idx = charIndex++
                return (
                  <span
                    key={ci}
                    ref={(el) => {
                      if (el) charsRef.current[idx] = el
                    }}
                    className="repel-char"
                    style={{
                      display: 'inline-block',
                      willChange: 'transform',
                    }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                )
              })}
            </span>
          )
        })}
      </Tag>
    </div>
  )
}
