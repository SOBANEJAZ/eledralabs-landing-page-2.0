import Link from 'next/link'

const industries = [
  {
    id: 'healthcare',
    num: '01',
    sector: 'Healthcare',
    tagline: 'HIPAA-compliant AI for patient-facing operations',
    problem:
      'Clinical staff spend 30–40% of their day on administrative work — scheduling calls, answering repetitive patient questions, chasing insurance approvals. Every hour spent on logistics is an hour not spent on care.',
    solutions: [
      {
        title: 'AI Voice Agent for Scheduling',
        body: 'Handles inbound appointment requests, rescheduling, and cancellations around the clock. Integrates directly with your EHR calendar and sends automated reminders to reduce no-shows.',
      },
      {
        title: 'Patient FAQ Chatbot',
        body: 'Answers insurance questions, pre-intake requirements, and general clinic FAQs without staff involvement. Trained on your specific protocols and escalates to a human agent on complex queries.',
      },
      {
        title: 'Automated Follow-up Workflows',
        body: 'Post-visit check-ins, prescription reminders, and billing follow-ups trigger automatically based on visit type and patient data — zero manual effort required.',
      },
    ],
    metrics: [
      { value: '300+', label: 'Patient calls handled daily' },
      { value: '40%', label: 'Admin overhead reduced' },
      { value: '4.8/5', label: 'Patient satisfaction avg' },
    ],
    compliance: ['HIPAA Compliant', 'End-to-end encrypted', 'No PHI stored externally', 'EHR integration ready'],
    img: '/backgrounds/solutions-2.png',
  },
  {
    id: 'real-estate',
    num: '02',
    sector: 'Real Estate',
    tagline: 'AI that qualifies leads while you show properties',
    problem:
      'The average lead goes cold in under 5 minutes. Agents in showings miss calls, lose leads, and spend hours on manual CRM data entry. Speed-to-lead determines who wins in real estate — and humans cannot always be first.',
    solutions: [
      {
        title: 'Lead Qualification Agent',
        body: 'Answers inbound property inquiries, qualifies buyers on budget, timeline, and intent, and routes hot leads to agents immediately via SMS. Cold leads enter automated nurture sequences.',
      },
      {
        title: 'Automated Showing Scheduler',
        body: 'Books property tours 24/7, syncs with agent calendars, and sends confirmation and reminder sequences automatically — without agent involvement until the showing itself.',
      },
      {
        title: 'CRM Sync & Follow-up Engine',
        body: 'Every call and interaction logs directly to your CRM. Automated follow-up sequences nurture leads that are not ready to act today, surfacing them again when intent signals increase.',
      },
    ],
    metrics: [
      { value: '3×', label: 'Faster lead response time' },
      { value: '85%', label: 'Leads pre-qualified by AI' },
      { value: '2hrs', label: 'Saved per agent per day' },
    ],
    compliance: ['CRM-integrated', 'GDPR ready', 'Custom voice & persona', 'Multi-language support'],
    img: '/backgrounds/solutions-1.png',
  },
  {
    id: 'local-business',
    num: '03',
    sector: 'Local Business',
    tagline: 'Trades & services: never miss a job again',
    problem:
      'Plumbers, HVAC technicians, and electricians lose thousands per month to missed calls during jobs. After-hours calls go to voicemail. Scheduling is done manually via text. Dispatch is chaos — and every missed call is a competitor opportunity.',
    solutions: [
      {
        title: '24/7 Service Call Handler',
        body: 'An AI voice agent answers every inbound call, captures job details and customer information, and books appointments — including emergency calls at 2am when your team is unavailable.',
      },
      {
        title: 'Automated Dispatch & Scheduling',
        body: 'Routes jobs to the right technician based on availability, service area, and specialty. Sends automated SMS confirmations to customers and job briefs to technicians.',
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
    trades: ['Plumbing', 'HVAC', 'Electrical', 'Landscaping', 'Pest Control', 'Roofing'],
    compliance: ['After-hours capable', 'Emergency call routing', 'SMS + voice coverage', 'Multi-location ready'],
    img: '/backgrounds/solutions-3.png',
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
              <span className="text-white">Solutions by Industry.</span>
              <span className="text-white/50">
                {' '}AI and web systems tailored to the specific workflows of each sector.
              </span>
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-1">
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-1 font-favorit uppercase bg-white text-black min-h-7 px-2 py-2 text-xs leading-none"
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

      {/* Industry Sections */}
      {industries.map((ind) => (
        <div key={ind.id} id={`solutions-${ind.id}`} className="border border-border mb-5 md:mb-8">
          {/* Industry Header — 2 col split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
            <div className="flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-border">
              <div className="flex items-center gap-3">
                <span className="font-favorit text-2xs text-white/25 uppercase">{ind.num}</span>
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
                <span className="font-favorit text-2xs text-white/25 uppercase">0{j + 1}</span>
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
              className="inline-flex items-center gap-1 font-favorit uppercase text-xs text-white/45 hover:text-white transition-colors shrink-0"
            >
              Get a custom quote
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
          </div>
        </div>
      ))}

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
