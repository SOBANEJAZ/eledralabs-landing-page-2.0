'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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
            We pay for every lesson with either <span className="manifesto-accent">time</span>
          </span>
          <span className="repel-line manifesto-line" style={{ display: 'block' }}>
            or <span className="manifesto-accent">money</span>.
          </span>
        </h2>
        <p className="manifesto-author">- Alex Hormozi</p>
        </div>
      </div>
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

function StepArtifact({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 640 440" className="story-artifact-svg story-artifact-consult" aria-hidden="true">
        <defs>
          <linearGradient id="consultBeam" x1="96" y1="326" x2="520" y2="92" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e8ff62" />
            <stop offset="0.48" stopColor="#5de7ff" />
            <stop offset="1" stopColor="#ff6d4f" />
          </linearGradient>
          <filter id="consultGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="56" y="56" width="528" height="308" rx="8" className="artifact-glass" />
        <path d="M108 304C170 214 237 178 311 191C381 203 438 172 522 86" className="artifact-primary-path" />
        <path d="M108 304C170 214 237 178 311 191C381 203 438 172 522 86" className="artifact-glow-path" filter="url(#consultGlow)" />
        <path d="M126 106C190 54 286 84 307 162C330 248 250 330 160 304C80 281 58 162 126 106Z" className="artifact-contour" />
        <path d="M394 170C454 110 566 142 586 232C609 336 501 412 409 360C330 314 324 240 394 170Z" className="artifact-contour artifact-contour-alt" />
        <rect x="144" y="118" width="112" height="38" rx="8" className="artifact-chip artifact-chip-bright" />
        <rect x="294" y="118" width="154" height="38" rx="8" className="artifact-chip" />
        <path d="M156 292H488" className="artifact-rule" />
        {[108, 246, 374, 522].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy={[304, 224, 238, 86][i]}
            r={[10, 16, 11, 11][i]}
            className={`artifact-node artifact-node-${i}`}
          />
        ))}
        <path d="M80 366H562" className="artifact-baseline" />
      </svg>
    )
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 640 440" className="story-artifact-svg story-artifact-design" aria-hidden="true">
        <defs>
          <linearGradient id="designWire" x1="92" y1="94" x2="548" y2="332" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#56e6ff" />
            <stop offset="0.58" stopColor="#eaff72" />
            <stop offset="1" stopColor="#8f9cff" />
          </linearGradient>
          <filter id="designGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="62" y="54" width="516" height="324" rx="8" className="artifact-glass" />
        <rect x="110" y="116" width="136" height="96" rx="8" className="artifact-module artifact-module-main" />
        <rect x="394" y="88" width="128" height="76" rx="8" className="artifact-module" />
        <rect x="386" y="238" width="150" height="84" rx="8" className="artifact-module artifact-module-cool" />
        <rect x="150" y="272" width="118" height="52" rx="8" className="artifact-module artifact-module-dim" />
        <path d="M246 164C296 164 316 126 394 126" className="artifact-wire" filter="url(#designGlow)" />
        <path d="M246 164C332 164 314 282 386 282" className="artifact-wire artifact-wire-secondary" />
        <path d="M268 298H386" className="artifact-wire artifact-wire-secondary" />
        <path d="M100 250H544" className="artifact-rule artifact-rule-soft" />
        <path d="M318 88V352" className="artifact-rule artifact-rule-soft" />
        {[246, 394, 386, 268, 318].map((cx, i) => (
          <circle
            key={`${cx}-${i}`}
            cx={cx}
            cy={[164, 126, 282, 298, 250][i]}
            r={i === 4 ? 7 : 9}
            className="artifact-node"
          />
        ))}
        <path d="M112 88H244M112 236H242M394 192H522" className="artifact-tick-lines" />
      </svg>
    )
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 640 440" className="story-artifact-svg story-artifact-deploy" aria-hidden="true">
        <defs>
          <linearGradient id="deployCore" x1="320" y1="62" x2="320" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ff7a5f" />
            <stop offset="0.46" stopColor="#ffe66d" />
            <stop offset="1" stopColor="#65f7d1" />
          </linearGradient>
          <filter id="deployGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="58" y="56" width="524" height="318" rx="8" className="artifact-glass" />
        <path d="M320 82V346" className="artifact-deploy-spine" filter="url(#deployGlow)" />
        {[104, 176, 248, 320].map((cy, i) => (
          <g key={cy}>
            <rect x={i % 2 === 0 ? 102 : 354} y={cy - 24} width="154" height="48" rx="8" className="artifact-release-card" />
            <path d={i % 2 === 0 ? `M256 ${cy}H320` : `M320 ${cy}H354`} className="artifact-wire" />
            <circle cx="320" cy={cy} r="11" className="artifact-node" />
          </g>
        ))}
        <path d="M128 318L176 270L218 296L276 220L336 246L408 158L516 96" className="artifact-primary-path" />
        <path d="M492 96H522V126" className="artifact-corner" />
        <path d="M110 360H530" className="artifact-baseline" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 640 440" className="story-artifact-svg story-artifact-scale" aria-hidden="true">
      <defs>
        <linearGradient id="scaleMesh" x1="120" y1="310" x2="510" y2="102" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7c8cff" />
          <stop offset="0.48" stopColor="#62ffd8" />
          <stop offset="1" stopColor="#e8ff62" />
        </linearGradient>
        <filter id="scaleGlow" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="58" y="56" width="524" height="318" rx="8" className="artifact-glass" />
      <circle cx="320" cy="214" r="112" className="artifact-ring" />
      <circle cx="320" cy="214" r="64" className="artifact-ring artifact-ring-inner" />
      <path d="M320 102V326M208 214H432M242 136L398 292M398 136L242 292" className="artifact-mesh-line" />
      {[
        [320, 102],
        [432, 214],
        [320, 326],
        [208, 214],
        [242, 136],
        [398, 136],
        [398, 292],
        [242, 292],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="10" className="artifact-node" />
      ))}
      <circle cx="320" cy="214" r="22" className="artifact-core" filter="url(#scaleGlow)" />
      <path d="M108 342H154V286H190V250H226V202H262" className="artifact-capacity-bars" />
      <path d="M378 342H420V300H462V238H504V178H548" className="artifact-capacity-bars artifact-capacity-bars-alt" />
    </svg>
  )
}

function ScrollStory() {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const meta = stepMeta[step.title as keyof typeof stepMeta]

  return (
    <section id="home-story" className="showcase-section showcase-story">
      <div className="showcase-section-head showcase-section-head-rich">
        <div className="flex flex-col gap-2">
          <p className="section-kicker">
            Build Sequence
          </p>
          <p className="section-headline">
            <span className="section-headline-strong">From messy operations to live automation.</span>
            <span className="section-headline-soft"> Click a phase to inspect the system.</span>
          </p>
        </div>
      </div>

      <div className="story-shell">
        <div className="story-pin">
          <div className="story-grid">
            {/* Sticky visual — animated console */}
            <div className="story-visual">
              <div className={`story-visual-frame story-phase-${active}`}>
                <div className="story-visual-bar">
                  <span className="story-visual-dot" />
                  <span className="story-visual-dot" />
                  <span className="story-visual-dot" />
                  <span className="story-visual-phase">Phase {String(active + 1).padStart(2, '0')}</span>
                  <span className="story-visual-eyebrow">{meta.eyebrow}</span>
                </div>
                <div className="story-visual-body">
                  <div className="story-visual-perspective" aria-hidden="true" />
                  <div className="story-visual-orbit story-visual-orbit-one" aria-hidden="true" />
                  <div className="story-visual-orbit story-visual-orbit-two" aria-hidden="true" />
                  <div className="story-visual-artifact">
                    <StepArtifact index={active} />
                  </div>
                  <div className="story-visual-console" key={active}>
                    {steps[active].console.map((line, li) => (
                      <p
                        key={li}
                        className={`story-console-line ${li === 0 ? 'text-white/80' : 'text-white/52'}`}
                        style={{ animationDelay: `${0.05 * li}s` }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="story-visual-note">{meta.note}</p>
                  <div className="story-metrics" aria-label={`${step.title} metrics`}>
                    {meta.metrics.map((metric) => (
                      <span key={metric} className="story-metric-chip">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <div className="story-visual-blink" aria-hidden="true">
                    <span className="story-blink-cursor" />
                  </div>
                </div>
              </div>
            </div>

            {/* Steps list */}
            <ol className="story-steps">
              {steps.map((s, i) => {
                const itemMeta = stepMeta[s.title as keyof typeof stepMeta]

                return (
                  <li key={i}>
                    <button
                      type="button"
                      className={`story-step story-step-${i}${i === active ? ' is-active' : ''}`}
                      aria-pressed={i === active}
                      onClick={() => setActive(i)}
                    >
                      <div className="story-step-num">{String(i + 1).padStart(2, '0')}</div>
                      <div className="story-step-body">
                        <p className="story-step-kicker">{itemMeta.eyebrow}</p>
                        <h3 className="story-step-title">{s.title}</h3>
                        <p className="story-step-text">{itemMeta.summary}</p>
                        <div className="story-step-points" aria-hidden="true">
                          {itemMeta.points.map((point) => (
                            <span key={point} className="story-step-point">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ol>
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

function AtmosphericCTA() {
  return (
    <section id="home-atmos" className="showcase-section showcase-atmos">
      <div className="atmos-grid-bg" aria-hidden="true" />
      <div className="atmos-dust" aria-hidden="true">
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className={`dust dust-${i % 8}`} />
        ))}
      </div>
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
      <Testimonials />
      <Pillars />
      <ScrollStory />
      <BentoSplit />
      <AtmosphericCTA />
    </>
  )
}
