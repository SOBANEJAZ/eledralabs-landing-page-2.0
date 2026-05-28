import Link from 'next/link'

const stats = [
  { value: '300+', label: 'Daily calls automated' },
  { value: '1.2s', label: 'Avg response latency' },
  { value: '98%', label: 'Automation accuracy' },
  { value: '24/7', label: 'Zero-downtime ops' },
]

const capabilities = [
  {
    num: '01',
    title: 'Voice AI Agents',
    desc: 'Deploy phone agents that handle inbound calls, qualify leads, book appointments, and route inquiries — 24/7, at any scale, with zero hold times.',
    tags: ['Telephony', 'NLP', 'Real-time'],
    href: '/products',
  },
  {
    num: '02',
    title: 'Custom LLM Chatbots',
    desc: 'Intelligent assistants trained on your business data. Handle complex FAQs, support tickets, and customer queries with context-aware precision.',
    tags: ['RAG', 'Chat', 'Embeddings'],
    href: '/products',
  },
  {
    num: '03',
    title: 'Workflow Automation',
    desc: 'Connect your entire stack and eliminate every repetitive process — lead capture, follow-ups, routing, dispatch, and more.',
    tags: ['Automation', 'Integrations', 'No-code'],
    href: '/products',
  },
]

const industries = [
  {
    num: '01',
    title: 'Healthcare',
    desc: 'HIPAA-compliant voice agents for patient scheduling, automated intake, and 24/7 support — freeing clinical staff for direct care.',
    metrics: ['300+ daily patient calls', 'HIPAA compliant', '40% admin overhead reduction'],
  },
  {
    num: '02',
    title: 'Real Estate',
    desc: 'Qualify leads the instant they call, automate CRM entry, and schedule showings without lifting a finger.',
    metrics: ['3× faster lead response', '85% pre-qualified leads', '2hrs saved per agent daily'],
  },
  {
    num: '03',
    title: 'Local Business',
    desc: 'Never miss a job. AI dispatch, after-hours booking, and automated follow-ups for trades: plumbing, HVAC, electrical.',
    metrics: ['Zero missed calls', 'After-hours coverage', '+28% booked jobs per month'],
  },
]

const steps = [
  {
    n: '01',
    title: 'Consult',
    body: 'Map your operations and identify the highest-leverage automation targets in your existing workflow.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Engineer custom solutions — voice agents, chatbots, or automation pipelines — built for your exact process.',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'Ship production-ready systems with full monitoring, graceful fallbacks, and zero-downtime reliability.',
  },
  {
    n: '04',
    title: 'Scale',
    body: 'Grow capacity without adding headcount. The system handles volume; your team handles strategy.',
  },
]

export default function HomeSections() {
  return (
    <>
      {/* Stats Strip */}
      <section id="home-stats" className="border border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`home-stat-item${i < stats.length - 1 ? ' border-r border-border' : ''}${i < 2 ? ' border-b md:border-b-0' : ''}`}
            >
              <span className="home-stat-value">{s.value}</span>
              <span className="home-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="home-capabilities" className="border border-border">
        <div className="border-b border-border flex items-end justify-between gap-4">
          <p className="font-sans text-7 leading-120">
            <span className="text-white">Core Capabilities.</span>
            <span className="text-white/50"> Precision-engineered AI for the work that never stops.</span>
          </p>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors"
          >
            All Products
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div
              key={cap.num}
              className={`capability-card${i < capabilities.length - 1 ? ' border-b lg:border-b-0 lg:border-r border-border' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-favorit text-2xs text-white/25 uppercase">{cap.num}</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="border border-border px-1.5 py-0.5 font-favorit text-2xs uppercase text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-sans text-xl text-white leading-normal lg:text-h3-title mb-3">{cap.title}</h3>
              <p className="font-sans text-sm text-white/50 leading-6 flex-1">{cap.desc}</p>
              <Link
                href={cap.href}
                className="inline-flex items-center gap-1 font-favorit uppercase text-xs text-white/40 hover:text-white transition-colors mt-6"
              >
                Explore
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="home-industries" className="border border-border">
        <div className="border-b border-border">
          <p className="font-sans text-7 leading-120">
            <span className="text-white">Industries We Serve.</span>
            <span className="text-white/50"> Automation for sectors where every missed call costs real revenue.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={ind.num}
              className={`industry-card${i < industries.length - 1 ? ' border-b lg:border-b-0 lg:border-r border-border' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-favorit text-2xs text-white/25 uppercase">{ind.num}</span>
              </div>
              <h3 className="font-sans text-white text-xl leading-normal mb-3">{ind.title}</h3>
              <p className="font-sans text-sm text-white/50 leading-6 mb-5">{ind.desc}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {ind.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 font-favorit text-2xs text-white/35 uppercase">
                    <span className="w-1 h-1 bg-white/25 shrink-0 inline-block" />
                    {m}
                  </li>
                ))}
              </ul>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1 font-favorit uppercase text-xs text-white/40 hover:text-white transition-colors"
              >
                See Solutions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section id="home-process" className="border border-border">
        <div className="border-b border-border">
          <p className="font-sans text-7 leading-120">
            <span className="text-white">How We Work.</span>
            <span className="text-white/50"> Four phases, zero ambiguity — from first call to full deployment.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`process-step${
                i === 0
                  ? ' border-b border-border sm:border-r lg:border-b-0'
                  : i === 1
                  ? ' border-b border-border lg:border-b-0 lg:border-r'
                  : i === 2
                  ? ' border-b border-border sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <span className="process-step-num">{step.n}</span>
              <h4 className="font-sans text-white text-lg leading-normal mt-4 mb-2">{step.title}</h4>
              <p className="font-sans text-sm text-white/50 leading-6">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="home-cta" className="border border-border relative overflow-hidden">
        <div className="home-cta-grid-bg" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-start gap-8 py-20 md:py-28">
          <div className="max-w-140">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest mb-5">
              Eledralabs — Precision AI
            </p>
            <h2
              className="font-sans text-white leading-110"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              Reduce operational drag.
              <br />
              Automate critical systems.
            </h2>
            <p className="font-sans text-white/50 text-base leading-6 mt-5 max-w-100">
              Book a consultation and we&apos;ll map your highest-leverage automation opportunities — no commitment required.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1 font-favorit uppercase bg-white text-black min-h-7 px-3 py-2 text-xs leading-none transition-colors hover:bg-white/90"
            >
              Get Started
              <div className="w-3 h-3 overflow-hidden relative">
                <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-1 font-favorit uppercase bg-button-container text-text-mute hover:bg-surface-hover hover:text-white min-h-7 px-3 py-2 text-xs leading-none transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
