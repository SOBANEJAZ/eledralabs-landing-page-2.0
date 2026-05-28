import Link from 'next/link'

type Product = {
  num: string
  category: string
  title: string
  desc: string
  capabilities: string[]
  useCases: string[]
  stack: string[]
  cta: { label: string; href: string }
  terminalLines: string[]
}

const products: Product[] = [
  {
    num: '01',
    category: 'Conversational AI',
    title: 'Voice AI Agents',
    desc: 'Production-ready conversational phone agents that answer calls, qualify leads, schedule appointments, and handle FAQs — 24/7, at any scale, with sub-second response latency and zero hold times.',
    capabilities: [
      'Sub-second response latency (<1.2s avg)',
      'Natural speech synthesis with custom voice',
      'Call routing, lead qualification, and booking',
      'Multi-language support (40+ languages)',
      'HIPAA-compliant call handling options',
      'Full call transcription and analytics',
      'Live transfer to human agent on escalation',
      'Twilio, VAPI, and Retell-compatible',
    ],
    useCases: ['Healthcare scheduling', 'Real estate lead qualification', 'Trades & service dispatch', 'Customer support tier-1'],
    stack: ['LiveKit / WebRTC', 'Deepgram STT', 'ElevenLabs TTS', 'OpenAI · Anthropic LLMs', 'Twilio SIP'],
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
    desc: 'Embeddable chat assistants trained on your proprietary data — for websites, web apps, and internal tools. Fine-tuned to speak your brand language and hold context across sessions.',
    capabilities: [
      'RAG over docs, PDFs, URLs, and databases',
      'Conversation memory and multi-turn context',
      'Embeds on any web or mobile surface',
      'Human handoff on configurable triggers',
      'Tone and persona customization per brand',
      'OpenAI, Anthropic, and open-source models',
      'Intent, drop-off, and resolution analytics',
      'GDPR-compliant data handling',
    ],
    useCases: ['Customer FAQ deflection', 'Internal knowledge bases', 'Product support bots', 'Lead nurturing chat'],
    stack: ['pgvector / Pinecone', 'LangGraph orchestration', 'Anthropic · OpenAI · Llama', 'Redis session store', 'Server-sent streaming'],
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
    desc: 'Design, deploy, and monitor intelligent automation pipelines that handle lead capture, customer follow-up, data routing, and operational workflows — without writing a line of code.',
    capabilities: [
      'Visual drag-and-drop workflow builder',
      'Real-time trigger and action engine',
      'CRM, email, SMS, and calendar integrations',
      'Conditional branching and multi-path logic',
      'Error handling with automatic retry logic',
      'Full execution audit trail and logging',
      'Webhooks for custom integrations',
      'Schedule- and event-based triggers',
    ],
    useCases: ['Lead capture & routing', 'Follow-up sequences', 'Cross-platform data sync', 'Ops notification workflows'],
    stack: ['Temporal workflows', 'Postgres event store', 'BullMQ job queue', 'REST + webhook fabric', 'Native CRM connectors'],
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
    desc: 'An intelligent ITSM layer that handles tier-1 requests automatically — ticket routing, password resets, system diagnostics, and alert correlation — freeing engineering for high-value work.',
    capabilities: [
      'Smart ticket classification and priority routing',
      'Automated runbook execution on triggers',
      'Alert deduplication and noise suppression',
      'On-call rotation management and escalation',
      'SLA monitoring with breach-prevention alerts',
      'Password reset and access provisioning flows',
      'PagerDuty, Jira, and Slack native integrations',
      'MTTR reduction via automated first-response',
    ],
    useCases: ['Tier-1 ticket deflection', 'Incident response', 'Access management', 'On-call automation'],
    stack: ['Ansible runbook runtime', 'OpenTelemetry ingest', 'Jira · ServiceNow APIs', 'PagerDuty events v2', 'LLM intent classifier'],
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

const architecture = [
  {
    layer: 'Edge / Ingress',
    items: ['CDN-fronted edge', 'WAF + rate limit', 'Region-pinned routing'],
  },
  {
    layer: 'Orchestration',
    items: ['Temporal workflows', 'LangGraph agents', 'Event-driven queues'],
  },
  {
    layer: 'Inference',
    items: ['Multi-model router', 'Streaming responses', 'Function calling + tools'],
  },
  {
    layer: 'Data',
    items: ['Postgres + pgvector', 'Object storage (S3-class)', 'Row-level encryption'],
  },
  {
    layer: 'Telephony',
    items: ['WebRTC + SIP', 'Twilio / LiveKit', 'STT · LLM · TTS pipeline'],
  },
  {
    layer: 'Observability',
    items: ['Full request tracing', 'Per-tenant audit log', 'Real-time alerting'],
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
    desc: 'All Eledralabs products run on hardened infrastructure with end-to-end encryption, role-based access controls, full audit logging, and zero-trust network architecture.',
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
    desc: 'Connect Eledralabs to your existing stack via REST API, webhooks, or native connectors. Full SDK support for Python, Node.js, and Go.',
    integrationGroups: [
      { name: 'CRM', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'] },
      { name: 'Comms', items: ['Slack', 'Teams', 'Twilio', 'Intercom'] },
      { name: 'Ops', items: ['Jira', 'Linear', 'PagerDuty', 'Zendesk'] },
      { name: 'Commerce', items: ['Shopify', 'Stripe', 'WooCommerce', 'BigCommerce'] },
      { name: 'Data', items: ['Snowflake', 'BigQuery', 'Postgres', 'S3'] },
      { name: 'Glue', items: ['Zapier', 'Make', 'n8n', 'Webhooks'] },
    ],
  },
]

const developer = {
  features: [
    'REST API with OpenAPI 3.1 spec',
    'Webhooks for every primary event',
    'SDKs for Python, Node.js, and Go',
    'Sandbox environment per workspace',
    'Streaming endpoints (SSE) for chat & voice',
    'Per-key scopes and rotation policies',
  ],
  snippet: [
    "import { Eledra } from '@eledralabs/sdk'",
    '',
    "const client = new Eledra({ apiKey: process.env.ELEDRA_KEY })",
    '',
    'await client.agents.voice.create({',
    "  name: 'clinic-front-desk',",
    "  voice: 'lumen',",
    "  routes: ['scheduling', 'faq', 'escalation'],",
    '})',
  ],
}

const pricing = [
  {
    name: 'Starter',
    tagline: 'Single product · single workflow',
    points: [
      'One core product (voice, chat, or workflow)',
      'Up to 2,000 monthly interactions',
      'Standard integrations · email support',
      'Shared multi-tenant infrastructure',
    ],
    cta: { label: 'Start small', href: '/contact' },
    accent: false,
  },
  {
    name: 'Growth',
    tagline: 'Multi-product · full stack',
    points: [
      'Any 3 core products bundled',
      'Up to 25,000 monthly interactions',
      'Priority Slack channel + SLA',
      'Custom integrations included',
    ],
    cta: { label: 'Talk to sales', href: '/contact' },
    accent: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Unlimited · dedicated · compliant',
    points: [
      'All products · unlimited workloads',
      'Dedicated single-tenant deployment',
      'BAA, DPA, custom DPIA, SOC 2 letter',
      'Named engineer + 24/7 incident response',
    ],
    cta: { label: 'Request architecture review', href: '/contact' },
    accent: false,
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
                {' '}Four core AI products. One unified operations layer. Built for teams that ship.
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

              {/* Stack row */}
              <div className="flex flex-col gap-2 mb-5 border-t border-border pt-4">
                <p className="font-favorit text-2xs text-white/25 uppercase tracking-wider">Built on</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-favorit text-2xs text-white/40 uppercase border border-border px-1.5 py-0.5">
                      {s}
                    </span>
                  ))}
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

      {/* Architecture / Stack diagram */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="border-b border-border flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Architecture</p>
            <p className="font-sans text-7 leading-120">
              <span className="text-white">How it&apos;s built.</span>
              <span className="text-white/50">
                {' '}Six layers, fully observable, every request traceable end-to-end.
              </span>
            </p>
          </div>
        </div>
        <div className="product-arch-grid">
          {architecture.map((a, i) => (
            <div key={a.layer} className="product-arch-cell">
              <span className="font-favorit text-2xs text-white/25 uppercase">L0{i + 1}</span>
              <h4 className="font-sans text-white text-base leading-normal mt-2">{a.layer}</h4>
              <ul className="flex flex-col gap-1.5 mt-3">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 font-sans text-sm text-white/50 leading-5">
                    <span className="text-white/25 mt-0.5 shrink-0">→</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Layer — 3 col (Analytics · Security · Integrations) */}
      <div className="border border-border grid grid-cols-1 lg:grid-cols-3 mb-5 md:mb-8">
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

        {/* Enterprise Integrations — categorised */}
        <div className="flex flex-col gap-4 font-sans">
          <p className="font-favorit text-2xs text-white/25 uppercase">{platform[2].num}</p>
          <h3 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {platform[2].title}
          </h3>
          <p className="text-white/50 text-sm leading-6">{platform[2].desc}</p>
          <div className="flex flex-col gap-3 mt-2">
            {platform[2].integrationGroups!.map((g) => (
              <div key={g.name} className="flex flex-col gap-1.5">
                <p className="font-favorit text-2xs text-white/30 uppercase tracking-wider">{g.name}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {g.items.map((name) => (
                    <div
                      key={name}
                      className="border border-border px-2 py-1.5 flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.015)' }}
                    >
                      <span className="font-favorit text-2xs text-white/40 uppercase text-center leading-none">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/45 hover:text-white transition-colors mt-auto"
          >
            Request a custom connector
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Developer / API */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-4">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Developers</p>
            <h3 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)' }}>
              Built API-first.
            </h3>
            <p className="font-sans text-sm text-white/50 leading-6 max-w-lg">
              Every Eledralabs product is exposed as a typed API with idempotent endpoints, webhooks for
              every primary event, and SDKs in the languages your team already ships in.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              {developer.features.map((f) => (
                <li key={f} className="flex items-start gap-2 font-sans text-sm text-white/55 leading-5">
                  <span className="text-white/30 mt-0.5 shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/45 hover:text-white transition-colors mt-4"
            >
              Request API access
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
          </div>
          {/* Code snippet */}
          <div className="product-codeblock flex flex-col">
            <div className="product-terminal-bar">
              <span className="product-terminal-dot" />
              <span className="product-terminal-dot" />
              <span className="product-terminal-dot" />
              <span className="font-favorit text-2xs text-white/25 ml-auto uppercase">node.js · sdk</span>
            </div>
            <pre className="product-codeblock-body">
              {developer.snippet.map((line, i) => (
                <span key={i} className="product-code-line">
                  <span className="product-code-gutter">{String(i + 1).padStart(2, '0')}</span>
                  <span className={line.startsWith('//') ? 'text-white/30' : 'text-white/65'}>{line || ' '}</span>
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="border border-border mb-5 md:mb-8">
        <div className="border-b border-border flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Plans</p>
            <p className="font-sans text-7 leading-120">
              <span className="text-white">Three tiers.</span>
              <span className="text-white/50">
                {' '}Volume- and footprint-based — every plan starts with a scoping call.
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {pricing.map((p, i) => (
            <div
              key={p.name}
              className={`product-pricing-card${i < pricing.length - 1 ? ' border-b lg:border-b-0 lg:border-r border-border' : ''}${p.accent ? ' product-pricing-card-accent' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-favorit text-2xs text-white/30 uppercase">0{i + 1}</span>
                {p.accent && (
                  <span className="border border-white/35 px-1.5 py-0.5 font-favorit text-2xs uppercase text-white/80">
                    Most picked
                  </span>
                )}
              </div>
              <h4 className="font-sans text-white leading-normal" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                {p.name}
              </h4>
              <p className="font-favorit text-2xs text-white/35 uppercase tracking-wider mt-2">{p.tagline}</p>
              <ul className="flex flex-col gap-2 mt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 font-sans text-sm text-white/55 leading-5">
                    <span className="text-white/30 mt-0.5 shrink-0">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href={p.cta.href}
                className={`inline-flex w-fit items-center gap-1 font-favorit uppercase mt-6 px-3 py-2 text-xs leading-none transition-colors${
                  p.accent
                    ? ' bg-white text-black hover:bg-white/90'
                    : ' bg-button-container text-text-mute hover:bg-surface-hover hover:text-white'
                }`}
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
    </section>
  )
}
