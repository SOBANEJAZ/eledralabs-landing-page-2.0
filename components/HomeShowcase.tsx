'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    num: '01',
    title: 'Intelligent Agents',
    blurb:
      'Conversational AI that talks to your customers in real time — voice on the phone, chat on the web.',
    tagline: 'Voice · Chat · Realtime',
    href: '/products',
  },
  {
    num: '02',
    title: 'Engineered Systems',
    blurb:
      'Web platforms and operational tooling built to last — typed, observable, fast at the edge.',
    tagline: 'Web · API · Infra',
    href: '/products',
  },
  {
    num: '03',
    title: 'Autonomous Workflows',
    blurb:
      'Background automation that runs the busywork. Triggered, branched, retried — no operator required.',
    tagline: 'Triggers · Branches · Audit',
    href: '/products',
  },
]

const steps = [
  {
    n: '01',
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
    n: '02',
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
    n: '03',
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
    n: '04',
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
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className={`particle particle-${i % 6}`} />
        ))}
      </div>
      <div className="showcase-manifesto-inner">
        <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest manifesto-eyebrow">
          Eledralabs — Manifesto
        </p>
        <h2 className="manifesto-title">
          <span className="manifesto-line">A precision-engineered</span>
          <span className="manifesto-line">AI layer for the operations</span>
          <span className="manifesto-line manifesto-line-em">that never sleep.</span>
        </h2>
        <p className="manifesto-sub">
          Voice agents that pick up. Chatbots that resolve. Workflows that run. We build the systems
          that make modern teams feel ten times larger than they are.
        </p>
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
      <div className="showcase-section-head">
        <div className="flex flex-col gap-2">
          <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">
            What we build
          </p>
          <p className="font-sans text-7 leading-120">
            <span className="text-white">Three pillars.</span>
            <span className="text-white/50">
              {' '}Everything we ship sits on one of these foundations.
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
              key={pl.num}
              href={pl.href}
              className="pillar-card group"
              style={{
                transform: `perspective(1000px) translate3d(0, -${lifts[i]}px, 0) rotateX(${(-lifts[i] * 0.05).toFixed(2)}deg) rotateY(${tilts[i]}deg)`,
              }}
            >
              <div className="pillar-card-inner">
                <div className="pillar-card-top">
                  <span className="font-favorit text-2xs text-white/35 uppercase">{pl.num}</span>
                  <span className="font-favorit text-2xs text-white/40 uppercase tracking-wider border border-border px-2 py-0.5">
                    {pl.tagline}
                  </span>
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
/* Component: Scroll Story (sticky)                                    */
/* ------------------------------------------------------------------ */

function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useActiveStep(ref, steps.length)

  return (
    <section id="home-story" className="showcase-section showcase-story">
      <div className="showcase-section-head">
        <div className="flex flex-col gap-2">
          <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">
            The Engagement
          </p>
          <p className="font-sans text-7 leading-120">
            <span className="text-white">From first call to full deployment.</span>
            <span className="text-white/50"> Four phases. Zero ambiguity.</span>
          </p>
        </div>
      </div>

      <div ref={ref} className="story-track">
        <div className="story-pin">
          <div className="story-grid">
            {/* Sticky visual — animated console */}
            <div className="story-visual">
              <div className="story-visual-frame">
                <div className="story-visual-bar">
                  <span className="story-visual-dot" />
                  <span className="story-visual-dot" />
                  <span className="story-visual-dot" />
                  <span className="font-favorit text-2xs text-white/30 ml-auto uppercase">
                    phase {steps[active].n}
                  </span>
                </div>
                <div className="story-visual-body">
                  <div className="story-visual-perspective" aria-hidden="true" />
                  <div className="story-visual-console" key={active}>
                    {steps[active].console.map((line, li) => (
                      <p
                        key={li}
                        className={`font-favorit text-2xs leading-6 story-console-line ${
                          li === 0 ? 'text-white/65' : 'text-white/40'
                        }`}
                        style={{ animationDelay: `${0.06 * li}s` }}
                      >
                        {line}
                      </p>
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
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={`story-step${i === active ? ' is-active' : i < active ? ' is-past' : ''}`}
                  aria-current={i === active ? 'step' : undefined}
                >
                  <div className="story-step-num">{s.n}</div>
                  <div className="story-step-body">
                    <h3 className="story-step-title">{s.title}</h3>
                    <p className="story-step-text">{s.body}</p>
                  </div>
                </li>
              ))}
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
              By Industry
            </span>
            <h3 className="bento-card-title">5 sectors.</h3>
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
                  {String(i + 1).padStart(2, '0')} · {s}
                </span>
              ),
            )}
          </div>
        </Link>

        <Link href="/products" className="bento-card bento-card-products group">
          <div className="bento-card-content">
            <span className="font-favorit text-2xs text-white/40 uppercase tracking-widest">
              By Product
            </span>
            <h3 className="bento-card-title">4 products + platform.</h3>
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
        {Array.from({ length: 32 }).map((_, i) => (
          <span key={i} className={`dust dust-${i % 8}`} />
        ))}
      </div>
      <div className="atmos-content">
        <p className="font-favorit text-2xs text-white/35 uppercase tracking-widest">
          Eledralabs — Precision AI
        </p>
        <h2 className="atmos-title">
          Reduce operational drag.
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
      <Pillars />
      <ScrollStory />
      <BentoSplit />
      <AtmosphericCTA />
    </>
  )
}
