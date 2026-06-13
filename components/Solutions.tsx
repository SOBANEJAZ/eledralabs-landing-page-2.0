'use client'

import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'

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
  /* per-industry accent hue — drives labels, baseline, cursor, glow */
  hue: string
}

const industries: Industry[] = [
  {
    id: 'healthcare',
    hue: '#2563eb',
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
    hue: '#16a34a',
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
    hue: '#d97706',
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
    hue: '#ff5a1f',
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
    hue: '#dc2626',
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
    author: 'Josh R.',
    role: 'Operations Lead',
    initials: 'JR',
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
/* Stacked editorial panels (reference: huehaus.design)                */
/*                                                                     */
/* Each industry is a full-viewport flat panel pinned with position:   */
/* sticky. Scrolling slides the next panel up OVER the pinned one —    */
/* the covered panel presses back (scales down, dims) while the        */
/* incoming panel's giant industry word parallaxes into place. Panels  */
/* alternate dark / paper tones for hard editorial contrast, carry a   */
/* pixel-notched top edge, and run a slow capability ticker. All       */
/* motion is scroll-position-driven (no pinned scroll-jacking), so it  */
/* works identically on touch; the ticker is the only auto-playing     */
/* piece and pauses under prefers-reduced-motion.                      */
/* ------------------------------------------------------------------ */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

function SolutionsStack() {
  const N = industries.length
  const panelRefs = useRef<(HTMLElement | null)[]>([])
  const lastVars = useRef<string[]>([])

  useEffect(() => {
    let raf = 0
    let pending = false

    const compute = () => {
      pending = false
      const vh = window.innerHeight
      const stickyTop =
        5.25 * parseFloat(getComputedStyle(document.documentElement).fontSize || '16')
      const range = Math.max(1, vh - stickyTop)
      const rects = panelRefs.current.map((el) => (el ? el.getBoundingClientRect() : null))

      for (let i = 0; i < N; i++) {
        const el = panelRefs.current[i]
        const rect = rects[i]
        if (!el || !rect) continue
        // 0 → 1 while this panel slides up into its pinned position
        const enter = clamp01(1 - (rect.top - stickyTop) / range)
        // 0 → 1 while the NEXT panel slides up to cover this one
        const next = rects[i + 1]
        const press = next ? clamp01(1 - (next.top - stickyTop) / range) : 0
        const key = `${enter.toFixed(3)}|${press.toFixed(3)}`
        if (lastVars.current[i] === key) continue
        lastVars.current[i] = key
        el.style.setProperty('--enter', enter.toFixed(3))
        el.style.setProperty('--press', press.toFixed(3))
      }
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
  }, [N])

  return (
    <div className="solst">
      {industries.map((ind, i) => {
        // all panels stay on the dark theme; alternates lift the surface a
        // step so the cover transition between panels stays readable
        const tone = i % 2 === 0 ? 'solst-dark' : 'solst-dark solst-dark-alt'
        const tickerItems = [
          ...ind.solutions.map((s) => s.title),
          ...ind.compliance,
          ...(ind.trades ?? []),
        ]
        const tickerLine = tickerItems.join('  ▪  ') + '  ▪  '
        return (
          <Fragment key={ind.id}>
          <section
            ref={(el) => {
              panelRefs.current[i] = el
            }}
            className={`solst-panel ${tone}`}
            style={{ zIndex: 10 + i, ['--solst-accent-strong' as string]: ind.hue }}
            aria-label={ind.sector}
          >
            {/* pixel-notched top edge eats into the panel below it */}
            <div className="solst-pixel-edge" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, b) => (
                <span key={b} />
              ))}
            </div>

            {/* accent baseline — draws in with the panel's entry progress */}
            <span className="solst-baseline" aria-hidden="true" />

            <div className="solst-inner">
              <div className="solst-meta">
                <span className="solst-meta-id">{`0${i + 1} / 0${N} — Industry`}</span>
                <span className="solst-meta-tag">{ind.tagline}</span>
              </div>

              <h2 className="solst-word">{ind.short}</h2>

              <div className="solst-cells">
                <div className="solst-cell solst-cell-problem">
                  <span className="solst-cell-label">01 — The problem</span>
                  <p className="solst-problem">{ind.problem}</p>
                  {/* compliance/trade chips fill the cell's lower whitespace */}
                  <div className="solst-tags">
                    {[...ind.compliance, ...(ind.trades ?? [])].slice(0, 6).map((c) => (
                      <span key={c} className="solst-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="solst-cell">
                  <span className="solst-cell-label">02 — What we deploy</span>
                  <div className="solst-sols">
                    {ind.solutions.map((sol, j) => (
                      <div key={sol.title} className="solst-sol">
                        <span className="solst-sol-num">{`0${j + 1}`}</span>
                        <div className="solst-sol-copy">
                          <h3 className="solst-sol-title">{sol.title}</h3>
                          <p className="solst-sol-body">{sol.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="solst-cell solst-cell-impact">
                  <span className="solst-cell-label">03 — Impact</span>
                  <div className="solst-media">
                    <img src={ind.img} alt={`${ind.sector} solution preview`} loading="lazy" />
                  </div>
                  <div className="solst-metrics">
                    {ind.metrics.map((m) => (
                      <div key={m.label} className="solst-metric">
                        <span className="solst-metric-value">{m.value}</span>
                        <span className="solst-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="solst-cta">
                    Get a custom quote
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="solst-ticker">
                <div className="solst-ticker-track">
                  <span>{tickerLine}</span>
                  <span aria-hidden="true">{tickerLine}</span>
                </div>
              </div>
            </div>
          </section>
          {/* reading dwell: extra runway while this panel is pinned, so the
              next one doesn't start covering it immediately */}
          {i < N - 1 && <div className="solst-dwell" aria-hidden="true" />}
          </Fragment>
        )
      })}
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
      <SolutionsStack />

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
