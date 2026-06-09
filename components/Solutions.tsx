'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

type Industry = {
  id: string
  sector: string
  short: string
  tagline: string
  problem: string
  solutions: { title: string; body: string }[]
  metrics: { value: string; label: string }[]
  compliance: string[]
  trades?: string[]
  img: string
}

const industries: Industry[] = [
  {
    id: 'healthcare',
    sector: 'Healthcare',
    short: 'Healthcare',
    tagline: 'HIPAA-compliant AI for patient-facing operations',
    problem:
      'Clinical staff spend 30–40% of their day on administrative work — scheduling calls, answering repetitive patient questions, chasing insurance approvals. Every hour spent on logistics is an hour not spent on care.',
    solutions: [
      {
        title: 'AI Voice Agent for Scheduling',
        body: 'Handles inbound appointment requests, rescheduling, and cancellations around the clock. Integrates directly with your EHR calendar and sends automated reminders that meaningfully reduce no-shows.',
      },
      {
        title: 'Patient FAQ Chatbot',
        body: 'Answers insurance questions, pre-intake requirements, and general clinic FAQs without staff involvement. Trained on your specific protocols and escalates to a human agent on complex queries.',
      },
      {
        title: 'Automated Follow-up Workflows',
        body: 'Post-visit check-ins, prescription reminders, and billing follow-ups trigger automatically based on visit type and patient data — zero manual effort, full audit trail.',
      },
    ],
    metrics: [
      { value: '300+', label: 'Patient calls handled daily' },
      { value: '40%', label: 'Admin overhead reduced' },
      { value: '4.8/5', label: 'Patient satisfaction avg' },
    ],
    compliance: ['HIPAA compliant', 'End-to-end encrypted', 'No PHI stored externally', 'EHR integration ready', 'BAA available'],
    img: '/backgrounds/solutions-2.png',
  },
  {
    id: 'real-estate',
    sector: 'Real Estate',
    short: 'Real Estate',
    tagline: 'AI that qualifies leads while you show properties',
    problem:
      'The average lead goes cold in under 5 minutes. Agents in showings miss calls, lose leads, and spend hours on manual CRM data entry. Speed-to-lead determines who wins in real estate — and humans cannot always be first.',
    solutions: [
      {
        title: 'Lead Qualification Agent',
        body: 'Answers inbound property inquiries, qualifies buyers on budget, timeline, and intent, then routes hot leads to agents immediately via SMS. Cold leads enter automated nurture sequences.',
      },
      {
        title: 'Automated Showing Scheduler',
        body: 'Books property tours 24/7, syncs with agent calendars, and sends confirmation and reminder sequences automatically — without agent involvement until the showing itself.',
      },
      {
        title: 'CRM Sync & Follow-up Engine',
        body: 'Every call and interaction logs directly to your CRM. Automated follow-up sequences nurture leads that are not ready today, surfacing them again when intent signals increase.',
      },
    ],
    metrics: [
      { value: '3×', label: 'Faster lead response time' },
      { value: '85%', label: 'Leads pre-qualified by AI' },
      { value: '2hrs', label: 'Saved per agent per day' },
    ],
    compliance: ['CRM-integrated', 'GDPR ready', 'Custom voice & persona', 'Multi-language support', 'MLS-compatible'],
    img: '/backgrounds/solutions-1.png',
  },
  {
    id: 'local-business',
    sector: 'Local Trades & Services',
    short: 'Local Trades',
    tagline: 'Never miss a job — 24/7 dispatch and booking',
    problem:
      'Plumbers, HVAC technicians, and electricians lose thousands per month to missed calls during jobs. After-hours calls go to voicemail. Scheduling is done manually via text. Dispatch is chaos — and every missed call is a competitor opportunity.',
    solutions: [
      {
        title: '24/7 Service Call Handler',
        body: 'An AI voice agent answers every inbound call, captures job details and customer information, and books appointments — including emergency calls at 2am when your team is unavailable.',
      },
      {
        title: 'Automated Dispatch & Scheduling',
        body: 'Routes jobs to the right technician based on availability, service area, and specialty. Sends automated SMS confirmations to customers and structured job briefs to technicians.',
      },
      {
        title: 'Estimate & Follow-up Automation',
        body: 'After a visit, automated sequences send estimates, collect digital approvals, follow up on open quotes, and trigger job-start notifications — closing the loop without admin effort.',
      },
    ],
    metrics: [
      { value: '0', label: 'Missed calls (24/7 coverage)' },
      { value: '+28%', label: 'Booked jobs per month' },
      { value: '90min', label: 'Dispatching saved daily' },
    ],
    trades: ['Plumbing', 'HVAC', 'Electrical', 'Landscaping', 'Pest Control', 'Roofing', 'Garage Doors', 'Locksmith'],
    compliance: ['After-hours capable', 'Emergency routing', 'SMS + voice coverage', 'Multi-location ready'],
    img: '/backgrounds/solutions-3.png',
  },
  {
    id: 'ecommerce',
    sector: 'E-commerce & Retail',
    short: 'E-commerce',
    tagline: 'Recover carts, deflect tickets, scale support',
    problem:
      'Cart abandonment runs 70%+, and support volume scales with every new SKU and channel. Tier-1 questions — order status, returns, sizing, restocks — devour the queue while real escalations wait. Hiring linearly is not a strategy.',
    solutions: [
      {
        title: 'Support Deflection Chatbot',
        body: 'Trained on your product catalogue, returns policy, and shipping rules. Resolves order-status, sizing, and returns queries instantly across web, mobile, and email — and escalates with full context when needed.',
      },
      {
        title: 'Cart-Recovery Workflow',
        body: 'Multi-channel sequences (email, SMS, WhatsApp) triggered by abandonment, browse-recovery, and back-in-stock events. Personalised by segment and inventory state.',
      },
      {
        title: 'Voice Agent for Phone Orders',
        body: 'For categories where customers still call — kitchen, furniture, configured goods — voice agents take orders, answer product questions, and write directly to your OMS.',
      },
    ],
    metrics: [
      { value: '62%', label: 'Tier-1 tickets deflected' },
      { value: '+18%', label: 'Cart recovery lift' },
      { value: '24/7', label: 'Multi-channel coverage' },
    ],
    compliance: ['PCI-aware flows', 'Shopify & WooCommerce ready', 'OMS / ERP webhook sync', 'Multi-channel (web, SMS, WA)'],
    img: '/backgrounds/solutions-4.png',
  },
  {
    id: 'hospitality',
    sector: 'Hospitality & Restaurants',
    short: 'Hospitality',
    tagline: 'Bookings, queries, and reviews — fully automated',
    problem:
      'Hosts and front-of-house teams field reservation calls, dietary questions, and review responses in the middle of service. Bookings get lost. Tables sit empty. A 4-star review goes unanswered for a week — and rankings drop.',
    solutions: [
      {
        title: 'AI Reservation Agent',
        body: 'Takes phone and web bookings 24/7, checks live availability, applies your seating rules, and confirms via SMS. Handles modifications and cancellations end-to-end.',
      },
      {
        title: 'Guest FAQ & Concierge Bot',
        body: 'Menu, allergens, hours, parking, dress code, gift cards — answered instantly on every channel. Hotel concierge variant handles room service, amenities, and local recommendations.',
      },
      {
        title: 'Review & Reputation Automation',
        body: 'Detects new reviews across Google, Yelp, and OTAs and drafts on-brand responses for human approval. Flags negative reviews for immediate manager attention.',
      },
    ],
    metrics: [
      { value: '100%', label: 'Reservation pickup rate' },
      { value: '<1min', label: 'Avg review response draft' },
      { value: '+22%', label: 'Off-peak bookings' },
    ],
    compliance: ['POS / PMS integrations', 'OpenTable & Resy ready', 'OTA review polling', 'Multi-location dashboards'],
    img: '/backgrounds/bookings-and-hotels.png',
  },
]

const testimonials = [
  {
    quote:
      "Eledra Labs automated our entire customer workflow — every lead is now qualified, routed, and followed up within seconds. It's like adding a full operations team without the headcount.",
    author: 'Saloni R.',
    role: 'Operations Lead',
    initials: 'SR',
  },
  {
    quote:
      'The AI voice agent handles 300+ calls a day. Patient satisfaction is up 40% and our staff finally has time to focus on care.',
    author: 'Sarah Okonkwo',
    role: 'Operations Director, MedCore',
    initials: 'SO',
  },
]

/* ------------------------------------------------------------------ */
/* The 3D deck                                                         */
/*                                                                     */
/* A tall scroll runway pins a viewport-height stage. The five         */
/* industry cards live in one 3D scene: the active card faces you,     */
/* the rest wait stacked behind it in depth. Scrolling peels the       */
/* active card up and over the viewer while the next one steps         */
/* forward — fully scroll-driven, so reversing the wheel replays it    */
/* backwards. Under 900px (or very short viewports) the deck unrolls   */
/* into a plain vertical list and no transforms are applied.           */
/* ------------------------------------------------------------------ */

const SEGMENT_VH = 85 // scroll distance (vh) spent per card transition
const HOLD = 0.32     // fraction of each segment the card holds still before peeling

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function SolutionsDeck() {
  const N = industries.length
  const wrapRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const lastStyles = useRef<string[]>([])
  const fillRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px), (max-height: 599px)')
    const apply = () => setCompact(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (compact) {
      // unroll: hand layout back to CSS
      for (const el of cardRefs.current) {
        if (!el) continue
        el.style.transform = ''
        el.style.opacity = ''
        el.style.visibility = ''
        el.style.pointerEvents = ''
        el.style.removeProperty('--dim')
        el.removeAttribute('inert')
      }
      lastStyles.current = []
      return
    }

    let raf = 0
    let pending = false

    const compute = () => {
      pending = false
      const wrap = wrapRef.current
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const vh = window.innerHeight
      const runway = rect.height - vh
      const P = runway > 0 ? Math.min(1, Math.max(0, -rect.top / runway)) : 0

      // deck progress with a reading hold at the start of each segment
      const raw = P * (N - 1)
      const seg = Math.min(N - 2, Math.floor(raw))
      const u = raw - seg
      const peel = Math.max(0, (u - HOLD) / (1 - HOLD))
      const D = seg + peel

      for (let i = 0; i < N; i++) {
        const el = cardRefs.current[i]
        if (!el) continue
        const rel = i - D

        let y = 0
        let z = 0
        let rx = 0
        let s = 1
        let o = 1
        let dim = 0

        if (rel < 0) {
          // peeling away — up and over the viewer
          const p = Math.min(1, -rel)
          const e = easeOutCubic(p)
          y = -(p * p) * vh * 1.04
          z = e * 260
          rx = -e * 16
          s = 1 + e * 0.04
          o = p < 0.5 ? 1 : Math.max(0, 1 - (p - 0.5) / 0.38)
        } else {
          // waiting in the stack behind
          y = -rel * 30
          z = -rel * 130
          dim = Math.min(0.6, rel * 0.22)
          o = rel <= 2.05 ? 1 : Math.max(0, 1 - (rel - 2.05) / 0.9)
        }

        const css =
          `translate3d(0px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) ` +
          `rotateX(${rx.toFixed(2)}deg) scale(${s.toFixed(3)})`
        const hidden = o <= 0.012
        const frontmost = rel > -0.5 && rel < 0.5
        const styleKey = `${css}|${o.toFixed(3)}|${dim.toFixed(3)}|${hidden}|${frontmost}`
        if (lastStyles.current[i] === styleKey) continue
        lastStyles.current[i] = styleKey

        el.style.transform = css
        el.style.opacity = o.toFixed(3)
        el.style.visibility = hidden ? 'hidden' : ''
        el.style.pointerEvents = frontmost ? '' : 'none'
        el.style.setProperty('--dim', dim.toFixed(3))
        el.toggleAttribute('inert', !frontmost)
      }

      if (fillRef.current) fillRef.current.style.transform = `scaleX(${P.toFixed(4)})`
      if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - raw * 1.6).toFixed(2))
      const idx = Math.min(N - 1, Math.round(D))
      setActive((prev) => (prev === idx ? prev : idx))
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
  }, [compact, N])

  const scrollToCard = useCallback(
    (i: number) => {
      const wrap = wrapRef.current
      if (!wrap) return
      const vh = window.innerHeight
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY
      const runway = wrap.offsetHeight - vh
      // land a hair into the segment so the card is in its hold phase
      const top = wrapTop + (runway * i) / (N - 1) + (i > 0 ? 2 : 0)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(top, { duration: 1.1 })
      } else {
        window.scrollTo({ top, behavior: 'smooth' })
      }
    },
    [N],
  )

  return (
    <div
      ref={wrapRef}
      className="sol3d-wrap"
      style={compact ? undefined : { height: `${(N - 1) * SEGMENT_VH + 100}vh` }}
    >
      <div className="sol3d-pin">
        {/* Stage */}
        <div className="sol3d-stage">
          {industries.map((ind, i) => (
            <article
              key={ind.id}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="sol3d-card"
              style={{ zIndex: (N - i) * 10 }}
            >
              {/* corner brackets */}
              <span className="sol3d-corner sol3d-corner-tl" aria-hidden="true" />
              <span className="sol3d-corner sol3d-corner-tr" aria-hidden="true" />
              <span className="sol3d-corner sol3d-corner-bl" aria-hidden="true" />
              <span className="sol3d-corner sol3d-corner-br" aria-hidden="true" />

              {/* ghost index + illustration */}
              <span className="sol3d-watermark" aria-hidden="true">{`0${i + 1}`}</span>
              <img className="sol3d-illustration" src={ind.img} alt="" aria-hidden="true" />

              <div className="sol3d-card-top">
                <span className="sol3d-chip">{`Industry 0${i + 1} / 0${N}`}</span>
                <span className="sol3d-tagline">{ind.tagline}</span>
              </div>

              <div className="sol3d-main">
                <div className="sol3d-left">
                  <h2 className="sol3d-sector">{ind.sector}</h2>
                  <p className="sol3d-problem">{ind.problem}</p>
                  <div className="sol3d-metrics">
                    {ind.metrics.map((m) => (
                      <div key={m.label} className="sol3d-metric">
                        <span className="sol3d-metric-value">{m.value}</span>
                        <span className="sol3d-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sol3d-right">
                  {ind.solutions.map((sol, j) => (
                    <div key={sol.title} className="sol3d-sol">
                      <span className="sol3d-sol-num">{`0${j + 1}`}</span>
                      <div className="sol3d-sol-copy">
                        <h3 className="sol3d-sol-title">{sol.title}</h3>
                        <p className="sol3d-sol-body">{sol.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sol3d-foot">
                <div className="sol3d-tags">
                  {[...ind.compliance, ...(ind.trades ?? [])].slice(0, 6).map((c) => (
                    <span key={c} className="sol3d-tag">
                      {c}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="sol3d-cta">
                  Get a custom quote
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Right rail — sector index */}
        <nav className="sol3d-rail" aria-label="Industries">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              type="button"
              className={`sol3d-rail-item${active === i ? ' is-active' : ''}`}
              onClick={() => scrollToCard(i)}
              aria-current={active === i ? 'true' : undefined}
            >
              <span className="sol3d-rail-num">{`0${i + 1}`}</span>
              <span className="sol3d-rail-name">{ind.short}</span>
            </button>
          ))}
        </nav>

        {/* HUD: progress + scroll hint */}
        <div className="sol3d-hud" aria-hidden="true">
          <span className="sol3d-hud-index">{`0${active + 1} / 0${N}`}</span>
          <div className="sol3d-track">
            <div ref={fillRef} className="sol3d-fill" />
          </div>
        </div>
        <div ref={hintRef} className="sol3d-hint" aria-hidden="true">
          Scroll to explore
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.875 4.75L6 7.875L9.125 4.75" stroke="currentColor" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Solutions() {
  return (
    <section id="solutions" className="flex flex-col gap-6 md:gap-10">
      {/* Page Header */}
      <div className="border border-border -mb-4 md:-mb-6">
        <div className="h-80 border-b border-border flex flex-col gap-5 px-5 pt-0 pb-5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
            <img
              alt=""
              className="object-cover object-center absolute inset-0 w-full h-full"
              src="/backgrounds/sprinkle-solutions.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-surface to-transparent" />
          <div className="relative z-10">
            <p className="hidden font-favorit text-2xs text-white/30 uppercase tracking-widest">
              EledraLabs — Industry Solutions
            </p>
            <p className="font-sans text-7 leading-120">
              <span className="text-white">Solutions.</span>
              <span className="text-white/50">
                {' '}AI and web systems engineered to the specific workflows of each sector — not generic templates.
              </span>
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-1">
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-white min-h-7 px-2 py-2 text-xs leading-none"
              style={{ backgroundColor: 'var(--color-accent-green)' }}
            >
              Get Started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="group inline-flex w-fit items-center gap-1 font-favorit uppercase bg-button-container text-text-mute hover:bg-surface-hover hover:text-white min-h-7 px-2 py-2 text-xs leading-none transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* 3D industry deck */}
      <SolutionsDeck />

      {/* Sector not listed? band */}
      <div className="border border-border mb-5 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Not listed?</p>
          <p className="font-sans text-white text-lg md:text-xl leading-normal font-medium">
            We also build for legal, education, logistics, and financial-services teams.
          </p>
          <p className="font-sans text-sm md:text-[15px] text-white/50 leading-relaxed max-w-xl">
            Every engagement starts with a 30-minute operations map. If it&apos;s repetitive, customer-facing,
            or after-hours — there is almost certainly a workflow worth automating.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-1 font-favorit uppercase text-white min-h-7 px-3 py-2 text-xs leading-none shrink-0"
          style={{ backgroundColor: 'var(--color-accent-green)' }}
        >
          Map my workflows
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
          </svg>
        </Link>
      </div>

      {/* Testimonials — monochrome */}
      <div className="border border-border grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)]">
        {testimonials.map((t, i) => (
          <Link
            key={t.author}
            href="/contact"
            className={`group relative flex flex-col p-5 overflow-hidden gap-8 xl:gap-0 xl:justify-between${
              i < testimonials.length - 1 ? ' border-b xl:border-b-0 xl:border-r border-border' : ''
            }`}
            style={i === 0 ? { background: '#d4f33b', color: '#000000' } : { background: '#ff5a1f', color: '#ffffff' }}
          >
            <p
              className={`relative z-10 text-24 leading-120 font-sans ${i === 0 ? 'max-w-140 text-black' : 'text-white'}`}
              style={{ color: i === 0 ? '#000000' : '#ffffff', fontWeight: 500 }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="relative z-10 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: i === 0 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 18,
                    color: i === 0 ? '#000000' : '#ffffff',
                  }}
                >
                  {t.initials.slice(0, 1)}
                </div>
                <div className="flex flex-col font-sans">
                  <p
                    className={`text-18 leading-normal ${i === 0 ? 'text-black' : 'text-white'}`}
                    style={{ color: i === 0 ? '#000000' : '#ffffff', fontWeight: 600 }}
                  >
                    {t.author.replace(' R.', '')}
                  </p>
                  {i === 1 ? (
                    <p className="text-base leading-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {t.role}
                    </p>
                  ) : null}
                </div>
              </div>
              {i === 0 ? (
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
              ) : (
                <span
                  aria-hidden="true"
                  className="pointer-events-none flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity"
                >
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5 text-white">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
