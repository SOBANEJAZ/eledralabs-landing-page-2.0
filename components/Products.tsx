import Link from 'next/link'

const products = [
  {
    num: '01',
    category: 'Conversational AI',
    title: 'Voice AI Agents',
    desc: 'Deploy production-ready conversational phone agents that answer calls, qualify leads, schedule appointments, and handle FAQs — 24/7, at any scale, with zero hold times and sub-second response latency.',
    capabilities: [
      'Sub-second response latency (<1.2s avg)',
      'Natural speech synthesis with custom voice',
      'Call routing, lead qualification, and booking',
      'Multi-language support (40+ languages)',
      'HIPAA-compliant call handling options',
      'Full call transcription and analytics',
      'Live transfer to human agent on escalation',
      'Integrates with Twilio, VAPI, and Retell',
    ],
    useCases: ['Healthcare scheduling', 'Real estate lead qualification', 'Trades & service dispatch', 'Customer support tier-1'],
    cta: { label: 'Book a Demo', href: '/contact' },
    terminalLines: [
      '> AGENT STATUS: ACTIVE',
      '> CALLS TODAY: 347',
      '> AVG LATENCY: 1.1s',
      '> TRANSFERS: 12 (3.4%)',
      '> SATISFACTION: 4.9/5',
    ],
  },
  {
    num: '02',
    category: 'NLP & Chat',
    title: 'Custom LLM Chatbots',
    desc: 'Embed intelligent chat assistants trained on your proprietary data — for websites, web apps, and internal tools. Fine-tuned to speak your brand language and handle context across sessions.',
    capabilities: [
      'RAG-powered knowledge base (upload docs, PDFs, URLs)',
      'Conversation memory and multi-turn context retention',
      'Embeds on any web or mobile surface',
      'Escalation to human agent on trigger conditions',
      'Tone and persona customization per brand',
      'Supports OpenAI, Anthropic, and open-source models',
      'Analytics on intent, drop-off, and resolution rate',
      'GDPR-compliant data handling',
    ],
    useCases: ['Customer FAQ deflection', 'Internal knowledge bases', 'Product support bots', 'Lead nurturing chat'],
    cta: { label: 'Get Started', href: '/contact' },
    terminalLines: [
      '> MODEL: custom-fine-tuned',
      '> KNOWLEDGE BASE: 2,340 docs',
      '> SESSIONS TODAY: 1,204',
      '> RESOLUTION RATE: 91.2%',
      '> AVG SESSION: 4m 12s',
    ],
  },
  {
    num: '03',
    category: 'Automation Platform',
    title: 'Workflow Automation',
    desc: 'Design, deploy, and monitor intelligent automation pipelines that handle lead capture, customer follow-up, data routing, and operational workflows — all without writing a line of code.',
    capabilities: [
      'Visual drag-and-drop workflow builder',
      'Real-time trigger and action engine',
      'CRM, email, SMS, and calendar integrations',
      'Conditional branching and multi-path logic',
      'Error handling with automatic retry logic',
      'Full execution audit trail and logging',
      'Webhooks for custom integrations',
      'Schedule-based and event-based triggers',
    ],
    useCases: ['Lead capture and routing', 'Follow-up sequences', 'Cross-platform data sync', 'Ops notification workflows'],
    cta: { label: 'Get Access', href: '/contact' },
    terminalLines: [
      '> WORKFLOWS ACTIVE: 48',
      '> EXECUTIONS TODAY: 8,912',
      '> SUCCESS RATE: 99.3%',
      '> AVG EXEC TIME: 340ms',
      '> INTEGRATIONS: 40+',
    ],
  },
  {
    num: '04',
    category: 'DevOps & IT',
    title: 'IT Service Automation',
    desc: 'An intelligent ITSM layer that handles tier-1 requests automatically — ticket routing, password resets, system diagnostics, and alert correlation — freeing your engineering team for high-value work.',
    capabilities: [
      'Smart ticket classification and priority routing',
      'Automated runbook execution on trigger conditions',
      'Alert deduplication and noise suppression',
      'On-call rotation management and escalation',
      'SLA monitoring with breach-prevention alerts',
      'Password reset and access provisioning flows',
      'PagerDuty, Jira, and Slack native integrations',
      'Reduce MTTR with automated first-response',
    ],
    useCases: ['Tier-1 ticket deflection', 'Incident response', 'Access management', 'On-call automation'],
    cta: { label: 'Learn More', href: '/contact' },
    terminalLines: [
      '> TICKETS RESOLVED: 94.1%',
      '> MTTR REDUCTION: -62%',
      '> RUNBOOKS ACTIVE: 23',
      '> ALERTS PROCESSED: 503',
      '> P1 INCIDENTS: 0 open',
    ],
  },
]

const platform = [
  {
    num: '05',
    title: 'Analytics Dashboard',
    desc: 'Monitor every automation in real time. Track conversion rates, agent performance, response times, and ROI across all products from a single unified intelligence layer.',
    metrics: [
      { label: 'Lead Conversion', value: '+34.2%', pct: 72 },
      { label: 'Avg Response Time', value: '1.2s', pct: 95 },
      { label: 'Tickets Resolved', value: '98.7%', pct: 89 },
      { label: 'Workflow Success', value: '99.3%', pct: 98 },
    ],
  },
  {
    num: '06',
    title: 'Secure Infrastructure',
    desc: 'All Eledra Labs products run on hardened infrastructure with end-to-end encryption, role-based access controls, full audit logging, and zero-trust network architecture.',
    badges: [
      { label: 'SOC 2 Type II Certified' },
      { label: 'HIPAA Compliant' },
      { label: 'GDPR Ready' },
      { label: 'End-to-end Encrypted' },
      { label: 'Zero-trust Network' },
      { label: 'Audit Logging' },
    ],
  },
  {
    num: '07',
    title: 'Enterprise Integrations',
    desc: 'Connect Eledra Labs to your existing stack via REST API, webhooks, or native connectors. Full SDK support for Python, Node.js, and more.',
    integrations: [
      'Salesforce', 'HubSpot', 'Slack', 'Jira',
      'Twilio', 'Stripe', 'Zapier', 'Notion',
      'Intercom', 'Zendesk', 'Monday', '+40 more',
    ],
  },
]

export default function Products() {
  return (
    <section id="products" className="flex flex-col">
      {/* Page Header */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="border-b border-border flex flex-col justify-end gap-6 relative overflow-hidden" style={{ minHeight: '22rem' }}>
          <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
            <img
              alt=""
              className="object-cover object-center absolute inset-0 w-full h-full"
              src="/backgrounds/sprinkle-products.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-surface to-transparent" />
          <div className="relative z-10 flex flex-col gap-2">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">
              Eledralabs — The Platform
            </p>
            <p className="font-sans text-7 leading-120">
              <span className="text-white">Products.</span>
              <span className="text-white/50">
                {' '}Four core AI products. One unified operations layer.
              </span>
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-1">
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-1 font-favorit uppercase bg-white text-black min-h-7 px-2 py-2 text-xs leading-none"
            >
              Request Access
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex w-fit items-center gap-1 font-favorit uppercase bg-button-container text-text-mute hover:bg-surface-hover hover:text-white min-h-7 px-2 py-2 text-xs leading-none transition-colors"
            >
              Industry Solutions
            </Link>
          </div>
        </div>

        {/* Product Cards — 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {products.map((p, i) => (
            <div
              key={p.num}
              className={`product-detail-card${
                i === 0 ? ' border-b lg:border-r border-border' :
                i === 1 ? ' border-b border-border' :
                i === 2 ? ' lg:border-r border-border' :
                ''
              }`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <span className="border border-white/15 px-1.5 py-0.5 font-favorit text-2xs uppercase text-white/40">
                  {p.category}
                </span>
                <span className="font-favorit text-2xs text-white/20 uppercase">{p.num}</span>
              </div>

              {/* Title + desc */}
              <h3 className="font-sans text-white leading-normal lg:text-h3-title mb-3" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                {p.title}
              </h3>
              <p className="font-sans text-sm text-white/50 leading-6 mb-5">{p.desc}</p>

              {/* 2-col layout: capabilities + terminal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Capabilities */}
                <div className="flex flex-col gap-2">
                  {p.capabilities.map((feat) => (
                    <div key={feat} className="flex gap-2 items-start text-xs">
                      <span className="text-white/25 shrink-0 mt-0.5">→</span>
                      <span className="text-white/50 leading-5">{feat}</span>
                    </div>
                  ))}
                </div>
                {/* Terminal mockup */}
                <div className="product-terminal">
                  <div className="product-terminal-bar">
                    <span className="product-terminal-dot" />
                    <span className="product-terminal-dot" />
                    <span className="product-terminal-dot" />
                    <span className="font-favorit text-2xs text-white/20 ml-auto uppercase">live</span>
                  </div>
                  <div className="product-terminal-body">
                    {p.terminalLines.map((line, li) => (
                      <p key={li} className={`font-favorit text-2xs leading-5 ${li === 0 ? 'text-white/50' : 'text-white/30'}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Use cases */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.useCases.map((uc) => (
                  <span key={uc} className="border border-border px-2 py-0.5 font-favorit text-2xs text-white/25 uppercase">
                    {uc}
                  </span>
                ))}
              </div>

              <Link
                href={p.cta.href}
                className="inline-flex items-center gap-1 font-favorit uppercase text-xs text-white/45 hover:text-white transition-colors"
              >
                {p.cta.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Layer — 3 col */}
      <div className="border border-border grid grid-cols-1 lg:grid-cols-3">
        {/* Analytics Dashboard */}
        <div className="border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-4 font-sans">
          <p className="font-favorit text-2xs text-white/25 uppercase">{platform[0].num}</p>
          <h3 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {platform[0].title}
          </h3>
          <p className="text-white/50 text-sm leading-6">{platform[0].desc}</p>
          <div className="border border-border mt-2" style={{ background: 'rgba(255,255,255,0.015)' }}>
            <div className="flex flex-col gap-3 p-4">
              {platform[0].metrics!.map((m) => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between font-favorit text-2xs">
                    <span className="text-white/40 uppercase">{m.label}</span>
                    <span className="text-white">{m.value}</span>
                  </div>
                  <div className="w-full h-px bg-white/8">
                    <div className="h-px bg-white/60" style={{ width: `${m.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secure Infrastructure */}
        <div className="border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-4 font-sans">
          <p className="font-favorit text-2xs text-white/25 uppercase">{platform[1].num}</p>
          <h3 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {platform[1].title}
          </h3>
          <p className="text-white/50 text-sm leading-6">{platform[1].desc}</p>
          <div className="flex flex-col gap-2 mt-2">
            {platform[1].badges!.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 border border-border p-3"
                style={{ background: 'rgba(255,255,255,0.015)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                <span className="font-favorit text-2xs text-white/55 uppercase tracking-wider">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Integrations */}
        <div className="flex flex-col gap-4 font-sans">
          <p className="font-favorit text-2xs text-white/25 uppercase">{platform[2].num}</p>
          <h3 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {platform[2].title}
          </h3>
          <p className="text-white/50 text-sm leading-6">{platform[2].desc}</p>
          <div className="grid grid-cols-3 gap-1.5 mt-2">
            {platform[2].integrations!.map((name) => (
              <div
                key={name}
                className="border border-border p-2 flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.015)' }}
              >
                <span className="font-favorit text-2xs text-white/35 uppercase text-center leading-none">{name}</span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/45 hover:text-white transition-colors mt-auto"
          >
            View All Integrations
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
