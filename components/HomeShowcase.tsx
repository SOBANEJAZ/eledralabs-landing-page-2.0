'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MarqueeStrip from './MarqueeStrip'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    title: 'Intelligent Agents',
    blurb:
      'Conversational AI that talks to your customers in real time — voice on the phone, chat on the web.',
    tagline: 'Voice · Chat · Realtime',
    href: '/products',
  },
  {
    title: 'Engineered Systems',
    blurb:
      'Web platforms and operational tooling built to last — typed, observable, fast at the edge.',
    tagline: 'Web · API · Infra',
    href: '/products',
  },
  {
    title: 'Autonomous Workflows',
    blurb:
      'Background automation that runs the busywork. Triggered, branched, retried — no operator required.',
    tagline: 'Triggers · Branches · Audit',
    href: '/products',
  },
]

const steps = [
  {
    title: 'Consult',
    body:
      'A 30-minute operations map. We mark the workflows where you bleed time — missed calls, manual data entry, after-hours blind spots.',
    console: [
      '> session: scoping_call',
      '> mapping: workflows[]',
      '> bottlenecks: 7 identified',
      '> est. recoverable: 18 hrs / wk',
    ],
  },
  {
    title: 'Design',
    body:
      'Custom voice agents, chatbots, or workflow pipelines — designed against your exact process, not a template.',
    console: [
      '> agent: clinic-front-desk',
      '> voice: lumen · en-US',
      '> tools: [calendar, ehr, sms]',
      '> latency_budget: 1.2s',
    ],
  },
  {
    title: 'Deploy',
    body:
      'Ship to production with full monitoring, graceful fallbacks, and a kill switch. Zero-downtime cutovers.',
    console: [
      '> deploy: prod / us-east-1',
      '> health: 200 OK',
      '> traces: streaming',
      '> rollback: armed',
    ],
  },
  {
    title: 'Scale',
    body:
      'Grow capacity without adding headcount. The system handles volume; your team handles strategy.',
    console: [
      '> calls_today: 1,204',
      '> resolution: 91.2%',
      '> p99_latency: 1.4s',
      '> on_call: 0 paged',
    ],
  },
]

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

/* ------------------------------------------------------------------ */
/* Hook: which scroll-story step is active                             */
/* ------------------------------------------------------------------ */

function useActiveStep(ref: React.RefObject<HTMLDivElement | null>, count: number) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    let pending = false

    const compute = () => {
      pending = false
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height - vh
      if (total <= 0) {
        setActive(0)
        return
      }
      // progress: 0 at start of pin, 1 at end of pin
      const progress = Math.min(1, Math.max(0, -rect.top / total))
      // bias so the last step holds longer near the end
      const idx = Math.min(count - 1, Math.floor(progress * count + 0.001))
      setActive(idx)
    }

    const onScroll = () => {
      if (pending) return
      pending = true
      raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref, count])

  return active
}

/* ------------------------------------------------------------------ */
/* Hook: reveal-on-view                                                */
/* ------------------------------------------------------------------ */

function useRevealOnView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/* Hook: parallax progress for floating pillars                        */
/* ------------------------------------------------------------------ */

function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0
    let pending = false

    const compute = () => {
      pending = false
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when section just below viewport, 1 when just above
      const total = vh + rect.height
      const seen = vh - rect.top
      const progress = Math.min(1, Math.max(0, seen / total))
      setP(progress)
    }

    const onScroll = () => {
      if (pending) return
      pending = true
      raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, p }
}

/* ------------------------------------------------------------------ */
/* Component: Manifesto                                                */
/* ------------------------------------------------------------------ */

function Manifesto() {
  const { ref, visible } = useRevealOnView<HTMLDivElement>()
  return (
    <section
      ref={ref}
      id="home-manifesto"
      className={`showcase-section showcase-manifesto${visible ? ' is-visible' : ''}`}
    >
      <div className="showcase-manifesto-grid-bg" aria-hidden="true" />
      <div className="showcase-particles" aria-hidden="true">
        {Array.from({ length: 44 }).map((_, i) => (
          <span key={i} className={`particle particle-${i % 6}`} />
        ))}
      </div>
      <div className="showcase-manifesto-inner">
        <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest manifesto-eyebrow">
          Eledralabs — Manifesto
        </p>
        <div className="manifesto-quote-block">
        <h2 className="manifesto-title">
          <span className="repel-line manifesto-line" style={{ display: 'block' }}>
            We pay for every lesson with
          </span>
          <span className="repel-line manifesto-line" style={{ display: 'block' }}>
            either <span className="manifesto-accent">time</span> or <span className="manifesto-accent">money</span>.
          </span>
        </h2>
        <p className="manifesto-author">- Alex Hormozi</p>
        </div>
      </div>
    </section>
  )
}

function TechLogoStrip() {
  return (
    <section className="showcase-logo-strip" aria-label="Technology partners">
      <MarqueeStrip logos={techLogos} speed={70} />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Component: Testimonials                                             */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="mb-5 md:mb-8 lg:mb-17.5">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] border border-border">
        {/* Card 1 */}
        <Link
          className="group min-h-75 relative flex flex-col p-5 overflow-hidden gap-8 xl:border-r xl:border-border xl:gap-0 xl:justify-between"
          href="/contact"
          style={{ background: '#d4f33b', color: '#000000' }}
        >
          <p
            className="relative z-10 text-24 leading-120 text-black max-w-140 font-sans"
            style={{ color: '#000000', fontWeight: 500 }}
          >
            &ldquo;Eledra Labs automated our entire customer workflow, every lead is now qualified,
            routed, and followed up within seconds. It&apos;s like adding a full operations team
            without the headcount.&rdquo;
          </p>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#000',
                }}
              >
                S
              </div>
              <div className="flex flex-col font-sans">
                <p
                  className="text-18 text-black leading-normal"
                  style={{ color: '#000000', fontWeight: 600 }}
                >
                  Saloni
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none flex items-center gap-1 text-sm text-black font-sans opacity-50 group-hover:opacity-80 transition-opacity"
            >
              <span className="leading-none" style={{ color: '#000000' }}>
                Read case study
              </span>
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5 text-black">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          className="group relative flex flex-col p-5 overflow-hidden gap-8 xl:min-h-75 xl:gap-0 xl:justify-between"
          href="/contact"
          style={{ background: '#ff5a1f', color: '#ffffff' }}
        >
          <p
            className="relative z-10 text-24 leading-120 text-white font-sans"
            style={{ color: '#ffffff', fontWeight: 500 }}
          >
            &ldquo;The AI voice agent Eledra Labs built for us handles 300+ calls a day, patient
            satisfaction is up 40% and our staff finally has time to focus on care.&rdquo;
          </p>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#fff',
                }}
              >
                S
              </div>
              <div className="flex flex-col font-sans">
                <p
                  className="text-18 text-white leading-normal"
                  style={{ color: '#ffffff', fontWeight: 600 }}
                >
                  Sarah Okonkwo
                </p>
                <p
                  className="text-base text-white/60 leading-normal"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  Operations Director, MedCore
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5 text-white">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Component: Floating Pillars                                         */
/* ------------------------------------------------------------------ */

function Pillars() {
  const { ref, p } = useSectionProgress<HTMLDivElement>()
  // Map [0..1] → tilt offsets — peak around middle of view
  const lift = (Math.sin(p * Math.PI) * 18).toFixed(2)  // 0 → 18 → 0 px lift
  const tilt = ((p - 0.5) * 6).toFixed(2)               // -3 → 0 → 3 deg

  return (
    <section ref={ref} id="home-pillars" className="showcase-section showcase-pillars">
      <div className="showcase-section-head showcase-section-head-rich">
        <div className="flex flex-col gap-2">
          <p className="section-kicker">
            What we build
          </p>
          <p className="section-headline">
            <span className="section-headline-strong">How we build.</span>
            <span className="section-headline-soft">
              {' '}Every engagement sits on one of these foundations.
            </span>
          </p>
        </div>
      </div>

      <div className="pillar-stage">
        {pillars.map((pl, i) => {
          // offset per card so the middle card floats highest
          const lifts = [Number(lift) * 0.6, Number(lift), Number(lift) * 0.6]
          const tilts = [Number(tilt) - 1.5, Number(tilt), Number(tilt) + 1.5]
          return (
            <Link
              key={pl.title}
              href={pl.href}
              className={`pillar-card pillar-card-${i + 1} group`}
              style={{
                ['--pillar-glow' as string]: i === 0 ? 'rgba(168, 134, 88, 0.18)' : i === 1 ? 'rgba(104, 117, 95, 0.18)' : 'rgba(129, 118, 98, 0.16)',
                ['--pillar-line' as string]: i === 0 ? '#b79a72' : i === 1 ? '#8f9a86' : '#a79a84',
                ['--pillar-chip' as string]: i === 0 ? 'rgba(168, 134, 88, 0.1)' : i === 1 ? 'rgba(104, 117, 95, 0.1)' : 'rgba(129, 118, 98, 0.09)',
                transform: `perspective(1000px) translate3d(0, -${lifts[i]}px, 0) rotateX(${(-lifts[i] * 0.05).toFixed(2)}deg) rotateY(${tilts[i]}deg)`,
              }}
            >
              <div className="pillar-card-inner">
                <div className="pillar-card-top">
                  <span className="pillar-tag">
                    {pl.tagline}
                  </span>
                  <span className="pillar-index">0{i + 1}</span>
                </div>
                <h3 className="pillar-title">{pl.title}</h3>
                <p className="pillar-blurb">{pl.blurb}</p>
                <span className="pillar-cta">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.75 9.125L7.875 6L4.75 2.875"
                      stroke="currentColor"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div className="pillar-card-glow" aria-hidden="true" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Component: Story Switcher                                           */
/* ------------------------------------------------------------------ */

const stepMeta = {
  Consult: {
    eyebrow: 'Operational Audit',
    note: 'We leave with a map, not a vague summary.',
    summary:
      'A sharp diagnostic session that exposes where response time, follow-up, and handoffs are quietly draining revenue.',
    points: ['Intake bottlenecks', 'Response lag', 'Ownership gaps'],
    metrics: ['30 min session', '7 friction points', '18 hrs/week recoverable'],
  },
  Design: {
    eyebrow: 'System Blueprint',
    note: 'Every decision is tied to your actual workflow.',
    summary:
      'We turn the mess into a precise operating model: channels, logic, fallbacks, permissions, and escalation paths.',
    points: ['Conversation flows', 'Integration map', 'Fallback logic'],
    metrics: ['1 source of truth', 'Typed workflows', 'Zero template bloat'],
  },
  Deploy: {
    eyebrow: 'Production Cutover',
    note: 'Shipping is controlled, reversible, and monitored.',
    summary:
      'Launch with restraint and control. We wire in observability, rollback paths, and quiet failover before volume ever touches it.',
    points: ['Live monitoring', 'Kill switch', 'Graceful fallback'],
    metrics: ['Zero-downtime cutover', '24/7 telemetry', 'Rollback armed'],
  },
  Scale: {
    eyebrow: 'Capacity Expansion',
    note: 'Growth comes from leverage, not headcount.',
    summary:
      'Once the system is stable, we widen the aperture: more volume, more channels, more automations, less manual drag.',
    points: ['Higher throughput', 'New channels', 'Operational leverage'],
    metrics: ['1,204 calls/day', '91.2% resolution', '0 paged on-call'],
  },
} as const

function ScrollStory() {
  const [rotateY, setRotateY] = useState(18)
  const [rotateX, setRotateX] = useState(-12)
  const [isDragging, setIsDragging] = useState(false)
  
  const dragStartRef = useRef({ x: 0, y: 0 })
  const rotateStartRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (isDragging) return

    let animationFrameId: number
    let lastTime = performance.now()

    const updateIdleMotion = (time: number) => {
      const delta = Math.min(2, (time - lastTime) / 16.67)
      lastTime = time

      setRotateY((prev) => prev + 0.045 * delta)
      setRotateX((prev) => {
        const targetX = -10 + Math.sin(time / 3600) * 4.5 + Math.sin(time / 8200) * 1.4
        return prev + (targetX - prev) * 0.018 * delta
      })

      animationFrameId = requestAnimationFrame(updateIdleMotion)
    }

    animationFrameId = requestAnimationFrame(updateIdleMotion)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isDragging])

  useEffect(() => {
    if (!isDragging) return

    const handlePointerMove = (event: PointerEvent) => {
      handleMove(event.clientX, event.clientY)
    }

    const handlePointerUp = () => {
      handleEnd()
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [isDragging])

  // Mouse / Touch Event Handlers
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true)
    
    dragStartRef.current = { x: clientX, y: clientY }
    rotateStartRef.current = { x: rotateX, y: rotateY }
  }

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return

    const deltaX = clientX - dragStartRef.current.x
    const deltaY = clientY - dragStartRef.current.y
    
    // Sensitivity factor mapping screen pixels to rotation degrees
    const sensitivity = 0.28
    
    const newY = rotateStartRef.current.y + deltaX * sensitivity
    const newX = rotateStartRef.current.x - deltaY * sensitivity
    
    setRotateY(newY)
    setRotateX(newX)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  return (
    <section id="home-story" className="showcase-section showcase-story">
      <div className="showcase-section-head showcase-section-head-rich">
        <div className="flex flex-col gap-2">
          <p className="section-kicker">
            Interactive Showcase
          </p>
          <p className="section-headline">
            <span className="section-headline-strong">3D Operations Engine.</span>
            <span className="section-headline-soft"> Drag the cuboid freely to inspect the system core.</span>
          </p>
        </div>
      </div>

      <div className="story-shell flex flex-col items-center justify-center relative overflow-hidden">
        {/* Holographic 3D Grid Backdrop */}
        <div className="cuboid-hologram-grid" aria-hidden="true" />

        <div className="cuboid-context-panel" aria-label="Operations engine context">
          <span className="cuboid-context-kicker">Operations Engine</span>
          <p>
            A six-sided model of how Eledra maps, designs, deploys, and scales automated systems.
          </p>
        </div>

        <div className="cuboid-context-panel cuboid-context-panel-right" aria-label="Cube interaction context">
          <span className="cuboid-context-kicker">Live System Model</span>
          <p>
            Drag to inspect the six linked faces while the engine drifts in idle motion.
          </p>
        </div>

        {/* Rotatable Cuboid Viewport */}
        <div 
          className="cuboid-viewport-container select-none cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            e.preventDefault()
            e.currentTarget.setPointerCapture(e.pointerId)
            handleStart(e.clientX, e.clientY)
          }}
        >
          <div className="cuboid-scene">
            <div 
              className="cuboid-box"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              {/* FACE 0: FRONT (Consult) */}
              <div className="cube-face face-front">
                <div className="cube-face-content cube-face-content-front">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">01 / AUDIT</span>
                  </div>
                  <div className="cube-card-body">
                    <h3 className="cube-card-title">Consult</h3>
                    <p className="cube-card-desc">
                      A sharp diagnostic session that exposes where response time, follow-up, and handoffs are quietly draining revenue.
                    </p>
                    <div className="cube-card-divider" />
                    <ul className="cube-card-list">
                      <li>Intake bottlenecks identified</li>
                      <li>Response lag telemetry</li>
                      <li>Ownership gaps highlighted</li>
                    </ul>
                  </div>
                  <div className="cube-card-footer">
                    <div className="cube-metric-pill">30 MIN SESSION</div>
                    <div className="cube-metric-pill">18 hrs/wk saved</div>
                  </div>
                </div>
              </div>

              {/* FACE 1: RIGHT (Design) */}
              <div className="cube-face face-right">
                <div className="cube-face-content cube-face-content-right">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">02 / BLUEPRINT</span>
                  </div>
                  <div className="cube-card-body">
                    <h3 className="cube-card-title">Design</h3>
                    <p className="cube-card-desc">
                      We turn raw operations into a precise digital blueprint: channels, logic flows, failovers, and integrations.
                    </p>
                    <div className="cube-card-divider" />
                    <ul className="cube-card-list">
                      <li>Conversation flow diagram</li>
                      <li>API & integration blueprints</li>
                      <li>Custom fallback logic</li>
                    </ul>
                  </div>
                  <div className="cube-card-footer">
                    <div className="cube-metric-pill">1 SOURCE OF TRUTH</div>
                    <div className="cube-metric-pill">Zero template bloat</div>
                  </div>
                </div>
              </div>

              {/* FACE 2: BACK (Deploy) */}
              <div className="cube-face face-back">
                <div className="cube-face-content cube-face-content-back">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">03 / CUTOVER</span>
                  </div>
                  <div className="cube-card-body">
                    <h3 className="cube-card-title">Deploy</h3>
                    <p className="cube-card-desc">
                      Controlled launch with absolute telemetry. We wire in real-time logging, kill switches, and graceful failovers.
                    </p>
                    <div className="cube-card-divider" />
                    <ul className="cube-card-list">
                      <li>Live streaming diagnostics</li>
                      <li>Emergency kill-switch</li>
                      <li>Silent background cutovers</li>
                    </ul>
                  </div>
                  <div className="cube-card-footer">
                    <div className="cube-metric-pill">ZERO DOWNTIME</div>
                    <div className="cube-metric-pill">Rollback armed</div>
                  </div>
                </div>
              </div>

              {/* FACE 3: LEFT (Scale) */}
              <div className="cube-face face-left">
                <div className="cube-face-content cube-face-content-left">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">04 / CAPACITY</span>
                  </div>
                  <div className="cube-card-body">
                    <h3 className="cube-card-title">Scale</h3>
                    <p className="cube-card-desc">
                      Grow volume and scale without increasing operations payroll. Autopilots take care of the heavy lifters.
                    </p>
                    <div className="cube-card-divider" />
                    <ul className="cube-card-list">
                      <li>1,200+ parallel streams</li>
                      <li>91.2% automated resolution</li>
                      <li>Headcount optimization</li>
                    </ul>
                  </div>
                  <div className="cube-card-footer">
                    <div className="cube-metric-pill">10X CAPACITY</div>
                    <div className="cube-metric-pill">0 operator overhead</div>
                  </div>
                </div>
              </div>

              {/* FACE 4: TOP (System Core Diagnostics) */}
              <div className="cube-face face-top">
                <div className="cube-face-content cube-face-content-top">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">CORE DIAGNOSTIC</span>
                  </div>
                  <div className="cube-card-body flex flex-col justify-between h-full pt-2">
                    <div>
                      <h3 className="cube-card-title cube-card-title-accent">Core Active</h3>
                      <p className="text-white/40 text-2xs uppercase tracking-wider font-favorit">Eledra Autopilot Core</p>
                    </div>
                    <div className="cube-diagnostic-panel font-favorit">
                      <div className="flex justify-between border-b border-white/5 py-1">
                        <span>LATENCY:</span>
                        <span className="text-cyan-bright">42ms</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 py-1">
                        <span>UPTIME:</span>
                        <span className="cube-metric-accent">99.997%</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 py-1">
                        <span>PIPELINES:</span>
                        <span className="text-white">84 active</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>STABILITY:</span>
                        <span className="cube-metric-warm">100% OK</span>
                      </div>
                    </div>
                    <div className="cube-wireframe-grid" />
                  </div>
                </div>
              </div>

              {/* FACE 5: BOTTOM (Start Automation - CTA) */}
              <div className="cube-face face-bottom">
                <div className="cube-face-content cube-face-content-bottom">
                  <div className="cube-card-header">
                    <span className="cube-phase-badge">ELEDRA PIPELINE</span>
                  </div>
                  <div className="cube-card-body flex flex-col justify-between h-full pt-2">
                  <div>
                    <h3 className="cube-card-title cube-card-title-warm">Auto Launch</h3>
                    <p className="cube-card-desc">
                      Configure your next system upgrade. Book a call to launch your operational automation pipeline.
                    </p>
                  </div>
                  <Link href="/contact" className="cube-cta-button font-favorit group mt-2">
                    <span>&gt; CONNECT_NOW</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Component: Two-card Bento → /solutions, /products                   */
/* ------------------------------------------------------------------ */

function BentoSplit() {
  return (
    <section id="home-bento" className="showcase-section showcase-bento">
      <div className="bento-grid">
        <Link href="/solutions" className="bento-card bento-card-solutions group">
          <div className="bento-card-content">
            <span className="font-favorit text-2xs text-white/40 uppercase tracking-widest">
              Industry Solutions
            </span>
            <h3 className="bento-card-title">Built for your sector.</h3>
            <p className="bento-card-sub">
              Healthcare · Real Estate · Local Trades · E-commerce · Hospitality
            </p>
            <p className="bento-card-desc">
              Sector-tuned workflows with compliance, integrations, and metrics that map to how each
              industry actually operates.
            </p>
            <span className="bento-card-cta">
              See Solutions
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.75 9.125L7.875 6L4.75 2.875"
                  stroke="currentColor"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </div>
          <div className="bento-card-rail" aria-hidden="true">
            {['Healthcare', 'Real Estate', 'Local Trades', 'E-commerce', 'Hospitality'].map(
              (s, i) => (
                <span key={s} className="bento-rail-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  {s}
                </span>
              ),
            )}
          </div>
        </Link>

        <Link href="/products" className="bento-card bento-card-products group">
          <div className="bento-card-content">
            <span className="font-favorit text-2xs text-white/40 uppercase tracking-widest">
              The Platform
            </span>
            <h3 className="bento-card-title">AI-native automation.</h3>
            <p className="bento-card-sub">
              Voice Agents · LLM Chatbots · Workflow Automation · IT Service Automation
            </p>
            <p className="bento-card-desc">
              A typed API, observable infrastructure, and integrations to the tools your team already
              ships in.
            </p>
            <span className="bento-card-cta">
              See Products
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.75 9.125L7.875 6L4.75 2.875"
                  stroke="currentColor"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </div>
          <div className="bento-card-stack" aria-hidden="true">
            {['Voice Agents', 'LLM Chatbots', 'Workflow', 'IT Service', 'Platform'].map((s, i) => (
              <span key={s} className="bento-stack-item" style={{ ['--i' as string]: i }}>
                {s}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Component: Atmospheric CTA                                          */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Component: Atmospheric CTA                                          */
/* ------------------------------------------------------------------ */

function AtmosphericCTA() {
  return (
    <section id="home-atmos" className="showcase-section showcase-atmos">
      <div className="atmos-grid-bg" aria-hidden="true" />
      <div className="atmos-dust" aria-hidden="true">
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className={`dust dust-${i % 8}`} />
        ))}
      </div>
      
      <div className="atmos-inner">
        <div className="atmos-content">
          <p className="font-favorit text-2xs text-white/35 uppercase tracking-widest">
            Eledralabs — Precision AI
          </p>
          <h2 className="atmos-title">
            Reduce <span className="atmos-title-accent">operational drag.</span>
            <br />
            Automate critical systems.
          </h2>
          <p className="atmos-sub">
            Book a consultation and we&apos;ll map your highest-leverage automation opportunities — no
            commitment required.
          </p>
          <div className="atmos-ctas">
            <Link href="/contact" className="atmos-cta atmos-cta-primary">
              Get Started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.75 9.125L7.875 6L4.75 2.875"
                  stroke="currentColor"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
            <Link href="/solutions" className="atmos-cta atmos-cta-ghost">
              View Solutions
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Root                                                                */
/* ------------------------------------------------------------------ */

export default function HomeShowcase() {
  return (
    <>
      <Manifesto />
      <TechLogoStrip />
      <Testimonials />
      <Pillars />
      <ScrollStory />
      <BentoSplit />
      <AtmosphericCTA />
    </>
  )
}
