import Link from 'next/link'

type Industry = {
  id: string
  sector: string
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
    img: '/backgrounds/solutions-2.png',
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

export default function Solutions() {
  return (
    <section id="solutions" className="flex flex-col">
      {/* Page Header */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="h-80 border-b border-border flex flex-col justify-end gap-6 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
            <img
              alt=""
              className="object-cover object-center absolute inset-0 w-full h-full"
              src="/backgrounds/sprinkle-solutions.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-surface to-transparent" />
          <div className="relative z-10 flex flex-col gap-2">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">
              Eledralabs — Industry Solutions
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

      {/* Industry Quick-Index */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="border-b border-border flex items-end justify-between gap-4">
          <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">
            Industry Solutions
          </p>
          <p className="font-favorit text-2xs text-white/25 uppercase tracking-widest hidden md:block">
            Tap a sector to jump
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5">
          {industries.map((ind, i) => (
            <a
              key={ind.id}
              href={`#solutions-${ind.id}`}
              className={`sol-index-item${i < industries.length - 1 ? ' border-b md:border-b-0 md:border-r border-border' : ''}${i < 3 && i % 2 === 0 ? ' border-r border-border md:border-r' : ''}`}
            >
              <span className="font-sans text-white text-sm leading-normal">{ind.sector}</span>
              <span className="font-favorit text-2xs text-white/35 uppercase mt-1 leading-tight">{ind.tagline}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Industry Sections */}
      {industries.map((ind) => (
        <div key={ind.id} id={`solutions-${ind.id}`} className="border border-border mb-5 md:mb-8 scroll-mt-24">
          {/* Industry Header — 2 col split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
            <div className="flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-border">
              <div className="flex items-center gap-3">
                <span className="border border-border px-1.5 py-0.5 font-favorit text-2xs uppercase text-white/35">
                  Industry
                </span>
              </div>
              <h2
                className="font-sans text-white leading-110"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                {ind.sector}
              </h2>
              <p className="font-favorit text-2xs text-white/35 uppercase tracking-wider">{ind.tagline}</p>
              <p className="font-sans text-sm text-white/50 leading-6 max-w-xl">{ind.problem}</p>
            </div>
            {/* Metrics panel */}
            <div className="relative min-h-52 lg:min-h-0 overflow-hidden flex flex-col justify-end gap-6">
              <img
                src={ind.img}
                alt={ind.sector}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ mixBlendMode: 'screen', opacity: 0.45 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to right, var(--color-surface) 0%, transparent 60%), linear-gradient(to top, var(--color-surface) 0%, transparent 50%)',
                }}
              />
              <div className="relative z-10 flex flex-wrap gap-x-8 gap-y-4">
                {ind.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span
                      className="font-sans text-white font-bold leading-none"
                      style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                    >
                      {m.value}
                    </span>
                    <span className="font-favorit text-2xs text-white/40 uppercase">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution cards — 3 col */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-border">
            {ind.solutions.map((sol, j) => (
              <div
                key={sol.title}
                className={`sol-feature-card flex flex-col gap-3${
                  j < ind.solutions.length - 1 ? ' border-b lg:border-b-0 lg:border-r border-border' : ''
                }`}
              >
                <h4 className="font-sans text-white text-base leading-normal">{sol.title}</h4>
                <p className="font-sans text-sm text-white/50 leading-6">{sol.body}</p>
              </div>
            ))}
          </div>

          {/* Compliance / trades tags + CTA */}
          <div className="flex items-center justify-between gap-4 flex-wrap sol-tags-row">
            <div className="flex flex-wrap gap-2">
              {ind.compliance.map((c) => (
                <span key={c} className="border border-border px-2 py-1 font-favorit text-2xs text-white/30 uppercase">
                  {c}
                </span>
              ))}
              {ind.trades &&
                ind.trades.map((t) => (
                  <span key={t} className="border border-border px-2 py-1 font-favorit text-2xs text-white/18 uppercase">
                    {t}
                  </span>
                ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-favorit uppercase text-xs hover:text-white transition-colors shrink-0"
              style={{ color: 'rgba(61, 110, 78, 0.8)' }}
            >
              Get a custom quote
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
          </div>
        </div>
      ))}

      {/* Sector not listed? band */}
      <div className="border border-border mb-5 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Not listed?</p>
          <p className="font-sans text-white text-lg leading-normal">
            We also build for legal, education, logistics, and financial-services teams.
          </p>
          <p className="font-sans text-sm text-white/50 leading-6 max-w-xl">
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
      <div className="border border-border grid grid-cols-1 xl:grid-cols-2">
        {testimonials.map((t, i) => (
          <Link
            key={t.author}
            href="/contact"
            className={`group flex flex-col gap-6 min-h-64 relative overflow-hidden transition-colors hover:bg-surface-card${
              i < testimonials.length - 1 ? ' border-b xl:border-b-0 xl:border-r border-border' : ''
            }`}
          >
            <p className="font-sans text-white/75 text-base leading-6 lg:text-18 lg:leading-normal">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-border flex items-center justify-center font-sans font-bold text-xs text-white/50">
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans text-sm text-white leading-normal">{t.author}</p>
                  <p className="font-favorit text-2xs text-white/35 uppercase">{t.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1 font-favorit text-2xs text-white/30 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Read story
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
