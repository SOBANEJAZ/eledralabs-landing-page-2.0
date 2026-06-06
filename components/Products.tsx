'use client'

import Link from 'next/link'
import { useState } from 'react'
import CardStack, { type StackCard } from '@/components/CardStack'

type Product = {
  category: string
  title: string
  desc: string
  capabilities: string[]
  useCases: string[]
  stack: string[]
  cta: { label: string; href: string }
  terminalLines: string[]
  colorTheme: {
    accent: string
    accentSoft: string
    accentBorder: string
    glowColor: string
  }
}

const products: Product[] = [
  {
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
    colorTheme: {
      accent: '#10b981', // Emerald
      accentSoft: 'rgba(16, 185, 129, 0.08)',
      accentBorder: 'rgba(16, 185, 129, 0.25)',
      glowColor: 'rgba(16, 185, 129, 0.15)',
    }
  },
  {
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
    colorTheme: {
      accent: '#06b6d4', // Cyan
      accentSoft: 'rgba(6, 182, 212, 0.08)',
      accentBorder: 'rgba(6, 182, 212, 0.25)',
      glowColor: 'rgba(6, 182, 212, 0.15)',
    }
  },
  {
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
    colorTheme: {
      accent: '#f97316', // Orange
      accentSoft: 'rgba(249, 115, 22, 0.08)',
      accentBorder: 'rgba(249, 115, 22, 0.25)',
      glowColor: 'rgba(249, 115, 22, 0.15)',
    }
  },
  {
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
    colorTheme: {
      accent: '#eab308', // Yellow / Gold
      accentSoft: 'rgba(234, 179, 8, 0.08)',
      accentBorder: 'rgba(234, 179, 8, 0.25)',
      glowColor: 'rgba(234, 179, 8, 0.15)',
    }
  },
]

const architectureLayers = [
  {
    layer: 'Edge / Ingress',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    items: ['CDN-fronted edge routing', 'WAF + DDoS rate limiting', 'Region-pinned static routing', 'Edge certificate management'],
    stats: { status: 'ONLINE', latency: '4ms', uptime: '99.999%', load: '18%' },
    tech: ['Cloudflare Workers', 'Vercel Edge', 'Anycast network'],
    schematic: 'EDGE_ROUTING -> SECURITY_GATEWAY -> REGIONAL_LB'
  },
  {
    layer: 'Orchestration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v4M17 10v4M10 7h4M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    items: ['Temporal production workflows', 'LangGraph multi-agent runtimes', 'Event-driven message queues', 'State recovery pipelines'],
    stats: { status: 'OPTIMAL', latency: '12ms', uptime: '99.995%', load: '32%' },
    tech: ['Temporal.io', 'LangGraph', 'BullMQ / Redis', 'Kafka Streams'],
    schematic: 'QUEUE -> INGESTION -> SCHEDULER -> WORKFLOW_ENGINE'
  },
  {
    layer: 'Inference',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v8M8 12h8M9 9l6 6M9 15l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    items: ['Multi-model hybrid routing', 'Server-sent streaming responses', 'Function calling & tool bindings', 'Token rate limits & safety filters'],
    stats: { status: 'ONLINE', latency: '480ms', uptime: '99.98%', load: '45%' },
    tech: ['GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3.1 70B', 'vLLM', 'Groq'],
    schematic: 'ROUTER -> MODEL_CLASSIFIER -> STREAMING_PARSER'
  },
  {
    layer: 'Data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <path d="M12 5c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    items: ['PostgreSQL transactional storage', 'pgvector high-speed vector embeddings', 'Encrypted S3 object storage', 'Row-level multi-tenant policies'],
    stats: { status: 'STABLE', latency: '8ms', uptime: '99.999%', load: '14%' },
    tech: ['PostgreSQL', 'pgvector', 'Pinecone', 'AWS S3', 'Redis Cache'],
    schematic: 'READ_WRITE -> REDIS_CACHE -> PG_VECTOR -> COLD_STORAGE'
  },
  {
    layer: 'Telephony',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 005.118 5.118l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    items: ['WebRTC & SIP interfaces', 'Deepgram instant voice capture', 'ElevenLabs premium voice generation', 'Twilio integration bridges'],
    stats: { status: 'ONLINE', latency: '920ms', uptime: '99.97%', load: '22%' },
    tech: ['WebRTC / SIP', 'Deepgram Nova-2', 'ElevenLabs Multilingual', 'LiveKit'],
    schematic: 'PHONE_CALL -> TWILIO_SIP -> WEBRTC_AGENT -> TTS_STREAM'
  },
  {
    layer: 'Observability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
        <path d="M3 3v18h18M18.5 8.5L13.5 14l-4-3-6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
    items: ['Full span request tracing', 'Per-tenant activity auditing', 'Real-time alerting & paging hooks', 'Token tracking & spend analytics'],
    stats: { status: 'MONITORING', latency: '2ms', uptime: '100%', load: '5%' },
    tech: ['OpenTelemetry', 'Datadog', 'Langfuse', 'Axiom', 'PagerDuty'],
    schematic: 'SPAN_INGEST -> CORRELATION_ENGINE -> ALERTS_ROUTING'
  },
]

const platform = [
  {
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
    title: 'Secure Infrastructure',
    desc: 'All EledraLabs products run on hardened infrastructure with end-to-end encryption, role-based access controls, full audit logging, and zero-trust network architecture.',
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
    title: 'Enterprise Integrations',
    desc: 'Connect EledraLabs to your existing stack via REST API, webhooks, or native connectors. Full SDK support for Python, Node.js, and Go.',
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

const developerPlayground = {
  features: [
    'REST API with OpenAPI 3.1 spec',
    'Webhooks for every primary event',
    'SDKs for Python, Node.js, and Go',
    'Sandbox environment per workspace',
    'Streaming endpoints (SSE) for chat & voice',
    'Per-key scopes and rotation policies',
  ],
  languages: [
    {
      id: 'node',
      label: 'Node.js',
      file: 'index.js',
      code: [
        "import { Eledra } from '@eledralabs/sdk'",
        '',
        "const client = new Eledra({ apiKey: process.env.ELEDRA_KEY })",
        '',
        '// Spin up conversational phone agent in seconds',
        'const agent = await client.agents.voice.create({',
        "  name: 'clinic-front-desk',",
        "  voice: 'lumen',",
        "  routes: ['scheduling', 'faq', 'escalation'],",
        '  maxDuration: 1800, // 30 minutes max',
        '})',
        '',
        "console.log(`Agent ${agent.id} deployed live.`)"
      ]
    },
    {
      id: 'python',
      label: 'Python',
      file: 'app.py',
      code: [
        "from eledralabs import Eledra",
        "import os",
        '',
        "client = Eledra(api_key=os.environ.get('ELEDRA_KEY'))",
        '',
        "# Spawn automated workflow trigger in python",
        "workflow = client.workflows.deploy(",
        "    trigger='crm.lead.created',",
        "    actions=[",
        "        {'type': 'voice.dial', 'agent': 'lead-qualifier'},",
        "        {'type': 'database.sync', 'target': 'snowflake'}",
        "    ]",
        ")",
        '',
        "print(f'Workflow deployed: {workflow.id}')"
      ]
    },
    {
      id: 'curl',
      label: 'cURL / Shell',
      file: 'request.sh',
      code: [
        "curl -X POST https://api.eledralabs.com/v1/agents/voice \\",
        "  -H \"Authorization: Bearer $ELEDRA_KEY\" \\",
        "  -H \"Content-Type: application/json\" \\",
        "  -d '{",
        "    \"name\": \"clinic-front-desk\",",
        "    \"voice\": \"lumen\",",
        "    \"routes\": [\"scheduling\", \"faq\", \"escalation\"]",
        "  }'"
      ]
    }
  ]
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
    colorGlow: 'rgba(255, 255, 255, 0.02)'
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
    colorGlow: 'rgba(61, 110, 78, 0.12)'
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
    colorGlow: 'rgba(255, 255, 255, 0.02)'
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeArchIndex, setActiveArchIndex] = useState(0)
  const [activeLang, setActiveLang] = useState('node')

  // Simulated request state
  const [isSimulating, setIsSimulating] = useState(false)
  const [simStep, setSimStep] = useState(0)
  const [simResponse, setSimResponse] = useState<string | null>(null)

  // Copy code feedback
  const [copied, setCopied] = useState(false)

  // Categories list
  const categories = ['All', 'Conversational AI', 'NLP & Chat', 'Workflow Automation', 'DevOps & IT']

  // Filter products based on selected tab
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  // Simulated API response trigger
  const runApiSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    setSimStep(1)
    setSimResponse(null)

    setTimeout(() => {
      setSimStep(2)
    }, 800)

    setTimeout(() => {
      setSimStep(3)
      const data = activeLang === 'node' ? {
        status: "success",
        agentId: "v-agt_8f4a2109bc",
        deployedUrl: "https://voice.eledralabs.com/v1/endpoints/clinic-front-desk",
        configuration: {
          name: "clinic-front-desk",
          voice: "lumen",
          routes: ["scheduling", "faq", "escalation"],
          telephonyProvider: "livekit.webrtc",
          latencyMs: 110,
          sslSecure: true
        },
        healthCheck: "active_online",
        timestamp: new Date().toISOString()
      } : activeLang === 'python' ? {
        status: "success",
        workflowId: "wf_9a7316bd428",
        state: "active",
        trigger: "crm.lead.created",
        actionGraph: {
          nodes: 2,
          edges: 1,
          steps: ["voice.dial", "database.sync"]
        },
        throughput: "100% OK",
        env: "production"
      } : {
        id: "v-agt_8f4a2109bc",
        object: "agent",
        created: Math.floor(Date.now() / 1000),
        name: "clinic-front-desk",
        voice: "lumen",
        routes: ["scheduling", "faq", "escalation"],
        status: "active"
      }

      setSimResponse(JSON.stringify(data, null, 2))
      setIsSimulating(false)
    }, 2000)
  }

  // Copy SDK code logic
  const handleCopyCode = () => {
    const activeCodeText = developerPlayground.languages.find(l => l.id === activeLang)?.code.join('\n') || ''
    navigator.clipboard.writeText(activeCodeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="products" className="flex flex-col gap-6 md:gap-10">
      {/* Page Header */}
      <div className="border border-border -mb-4 md:-mb-6">
        <div className="h-80 border-b border-border flex flex-col gap-5 px-5 pt-0 pb-5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen" aria-hidden="true">
            <img
              alt=""
              className="object-cover object-center absolute inset-0 w-full h-full"
              src="/backgrounds/sprinkle-products.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-linear-to-b from-surface to-transparent" />

          <div className="relative z-10">
            <p className="font-sans text-7 leading-120 max-w-[95rem]">
              <span className="text-white">Our Products.</span>
              <span className="text-white/50">
                {' '}Developer-centric AI tools, infrastructure, and verification loops built for next-generation intelligence.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* High-tech glow Header section */}
      <div className="hidden border border-border relative overflow-hidden bg-linear-to-b from-[#111111] to-surface rounded-sm">
        {/* Animated matrix grid / radar effect in background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(61,110,78,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(61,110,78,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial Glowing ambient light spotlight */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-accent-green) 0%, transparent 70%)' }} />

        {/* Live system diagnostic tickers */}
        <div className="border-b border-border/60 px-5 py-2.5 flex items-center justify-between flex-wrap gap-3 font-favorit text-2xs uppercase tracking-wider text-white/30 z-10 relative">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              SYSTEM_LIVE: ACTIVE
            </span>
            <span className="hidden sm:inline">REGION: US-EAST (VA)</span>
            <span className="hidden md:inline">VERSION: V2.4.0</span>
          </div>
          <div className="flex items-center gap-4">
            <span>CLOCK: <span className="text-white/70">ACTIVE</span></span>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-8 p-6 md:p-10 relative overflow-hidden" style={{ minHeight: '20rem' }}>
          <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="font-favorit text-2xs text-[#10b981] bg-[#10b981]/15 border border-[#10b981]/25 px-2.5 py-0.5 uppercase tracking-widest rounded-sm border border-[#10b981]/25">
                EledraLabs — Platform Suite
              </span>
            </div>

            <h1 className="font-sans text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-white">
              AI-Native <span className="text-white/65 font-normal bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">Automation Infrastructure.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
              Production-ready voice, conversational intelligence, IT workflows, and complex routing systems engineered to operate at scale with deterministic guarantees.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-favorit uppercase text-white px-4 py-2.5 text-xs leading-none transition-all hover:brightness-110 tracking-widest rounded-xs hover:-translate-y-0.5 duration-200"
              style={{ backgroundColor: 'var(--color-accent-green)' }}
            >
              <span>Request Access</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 font-favorit uppercase bg-button-container text-text-mute hover:bg-surface-hover hover:text-white px-4 py-2.5 text-xs leading-none transition-all rounded-xs hover:-translate-y-0.5 duration-200 border border-border"
            >
              <span>Industry Solutions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Intelligence Card Stack ─────────────────────────────────────── */}
      <CardStack
        cards={[
          {
            id: 'voice-ai',
            category: 'Conversational AI',
            title: 'Voice AI Agents',
            body: 'Production-ready phone agents that qualify leads, book appointments, and handle tier-1 support 24/7 with sub-second latency.',
            metric: { value: '<1.2s', label: 'Response latency avg' },
            tag: 'SYS_NODE // VOICE',
            accent: '#10b981',
            accentSoft: 'rgba(16,185,129,0.08)',
            accentBorder: 'rgba(16,185,129,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 005.118 5.118l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ),
          },
          {
            id: 'llm-chatbot',
            category: 'NLP & Chat',
            title: 'Custom LLM Chatbots',
            body: 'Embeddable assistants trained on your data — RAG over docs, multi-turn memory, and seamless human handoff on any surface.',
            metric: { value: '91.2%', label: 'Resolution rate' },
            tag: 'SYS_NODE // NLP',
            accent: '#06b6d4',
            accentSoft: 'rgba(6,182,212,0.08)',
            accentBorder: 'rgba(6,182,212,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            ),
          },
          {
            id: 'workflow',
            category: 'Automation',
            title: 'Workflow Automation',
            body: 'Intelligent pipelines for lead capture, follow-up sequences, and cross-platform data sync — no code required.',
            metric: { value: '99.3%', label: 'Execution success rate' },
            tag: 'SYS_NODE // FLOW',
            accent: '#f97316',
            accentSoft: 'rgba(249,115,22,0.08)',
            accentBorder: 'rgba(249,115,22,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 10v4M17 10v4M10 7h4M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            id: 'it-service',
            category: 'DevOps & IT',
            title: 'IT Service Automation',
            body: 'Intelligent ITSM that auto-resolves tier-1 tickets, correlates alerts, and runs runbooks before your on-call engineer wakes up.',
            metric: { value: '-62%', label: 'MTTR reduction' },
            tag: 'SYS_NODE // ITSM',
            accent: '#eab308',
            accentSoft: 'rgba(234,179,8,0.08)',
            accentBorder: 'rgba(234,179,8,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            ),
          },
          {
            id: 'analytics',
            category: 'Observability',
            title: 'Unified Analytics',
            body: 'Real-time telemetry across every agent, workflow, and integration — conversion rates, response times, and ROI in one pane.',
            metric: { value: '100%', label: 'Request traceability' },
            tag: 'SYS_NODE // OBS',
            accent: '#a78bfa',
            accentSoft: 'rgba(167,139,250,0.08)',
            accentBorder: 'rgba(167,139,250,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 3v18h18M18.5 8.5L13.5 14l-4-3-6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            ),
          },
          {
            id: 'enterprise',
            category: 'Infrastructure',
            title: 'Enterprise Integrations',
            body: 'Connect to your existing stack via REST API, webhooks, or native connectors — CRM, comms, commerce, and data platforms.',
            metric: { value: '40+', label: 'Native connectors' },
            tag: 'SYS_NODE // INFRA',
            accent: '#f43f5e',
            accentSoft: 'rgba(244,63,94,0.08)',
            accentBorder: 'rgba(244,63,94,0.28)',
            href: '/contact',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 5c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ),
          },
        ] satisfies StackCard[]}
        spreadX={390}
        spreadY={16}
        rotationScale={1}
      />

      {/* Category filter bar */}
      <div className="border-b border-border flex items-center justify-between flex-wrap gap-4 pb-4">
        <div className="flex flex-col gap-1">
          <span className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Navigation</span>
          <h2 className="font-sans text-lg text-white font-medium">Platform Components</h2>
        </div>

        {/* Sleek dynamic filter buttons */}
        <div className="flex flex-wrap gap-1.5 bg-[#141414]/90 p-1 border border-border rounded-md backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-favorit text-xs uppercase px-3 py-1.5 rounded-sm transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? 'bg-emerald-800/25 border border-emerald-500/35 text-white font-medium shadow-[0_0_12px_rgba(16,185,129,0.1)]'
                  : 'border border-transparent text-white/50 hover:text-white hover:bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards — 2×2 / Filterable grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 transition-all duration-500">
        {filteredProducts.map((p, productIdx) => (
          <div
            key={p.title}
            className="product-detail-card group border border-border hover:border-border-active bg-surface rounded-sm relative overflow-hidden transition-all duration-300"
            style={{
              boxShadow: `0 0 20px rgba(0,0,0,0.5)`,
              borderLeft: `1px solid ${p.colorTheme.accentBorder}`
            }}
          >
            {/* Ambient subtle backdrop grid glow inside cards */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: `radial-gradient(circle, ${p.colorTheme.glowColor} 0%, transparent 70%)` }} />

            {/* Card header */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="px-2 py-0.5 font-favorit text-2xs uppercase rounded-sm border"
                style={{
                  color: p.colorTheme.accent,
                  borderColor: p.colorTheme.accentBorder,
                  background: p.colorTheme.accentSoft
                }}
              >
                {p.category}
              </span>
              <span className="font-favorit text-2xs text-white/20 select-none">
                SYS_NODE // {p.title.toUpperCase().replace(/\s/g, '_')}
              </span>
            </div>

            {/* Title + desc */}
            <h3 className="font-sans text-white leading-tight mb-2.5 font-light relative z-10 transition-colors group-hover:text-white" style={{ fontSize: 'clamp(1.65rem, 2.1vw, 2rem)' }}>
              {p.title}
            </h3>
            <p className="font-sans text-[1rem] text-white/58 leading-[1.55] mb-4.5 relative z-10 min-h-[3.6rem]">{p.desc}</p>

            <div className="mb-5 relative z-10">
              <div className="flex flex-col gap-2.5">
                {p.capabilities.map((feat) => (
                  <div key={feat} className="flex gap-2.5 items-start text-[1rem]">
                    <span className="shrink-0 mt-1.5 transition-transform group-hover:translate-x-0.5 duration-200" style={{ color: p.colorTheme.accent }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="animate-pulse">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
                      </svg>
                    </span>
                    <span className="text-white/68 group-hover:text-white/84 transition-colors leading-[1.45]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack row */}
            <div className="flex flex-col gap-2 mb-5 border-t border-border pt-3.5 relative z-10">
              <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest">Built with specialized infrastructure</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-favorit text-2xs text-white/50 uppercase border border-border px-2 py-0.75 rounded-xs transition-all duration-300 hover:text-white"
                    style={{
                      ['--hover-border' as any]: p.colorTheme.accent
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = p.colorTheme.accent
                      e.currentTarget.style.backgroundColor = p.colorTheme.accentSoft
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.backgroundColor = ''
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
              {p.useCases.map((uc) => (
                <span key={uc} className="border border-border/60 bg-[#151515] px-2 py-0.5 rounded-sm font-favorit text-2xs text-white/40 uppercase">
                  {uc}
                </span>
              ))}
            </div>

            {/* CTA bottom */}
            <div className="mt-auto pt-2 border-t border-border/40 flex items-center justify-between relative z-10">
              <Link
                href={p.cta.href}
                className="inline-flex items-center gap-2 font-favorit uppercase text-xs transition-colors duration-200"
                style={{ color: p.colorTheme.accent }}
              >
                <span className="font-semibold tracking-wider hover:underline">{p.cta.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                </svg>
              </Link>

              <span className="text-white/10 font-favorit text-2xs select-none">
                PING: {[14, 18, 22, 11][productIdx % 4]}MS
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-sm bg-surface overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />

        <div className="border-b border-border bg-[#111111]/85 p-6 flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <span className="font-favorit text-2xs text-[#10b981] uppercase tracking-widest">scoping plans</span>
            <p className="font-sans text-3xl font-light text-white leading-normal">
              Volume- and Footprint-based.
            </p>
          </div>
          <p className="text-white/45 font-sans text-sm max-w-xs text-left md:text-right">
            Every EledraLabs production service begins with a technical scoping blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {pricing.map((p, i) => (
            <div
              key={p.name}
              className="product-pricing-card group relative flex min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 md:p-8"
              style={{
                background: p.accent
                  ? 'linear-gradient(180deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.01) 100%)'
                  : 'rgba(255,255,255,0.003)',
              }}
            >
              <div
                className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 10%, ${p.colorGlow} 0%, transparent 60%)` }}
              />

              <div className="relative z-10 flex flex-col gap-5">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-favorit text-2xs text-white/20 select-none">
                    TIER // 0{i + 1}
                  </span>

                  {p.accent && (
                    <span className="rounded-sm border border-emerald-500/30 bg-emerald-950/20 px-2 py-0.5 font-favorit text-3xs font-semibold tracking-wider text-emerald-400 uppercase animate-pulse">
                      Most picked
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-sans text-2xl font-light text-white leading-normal">
                    {p.name}
                  </h4>
                  <p className="mt-1.5 font-favorit text-3xs text-white/35 uppercase tracking-widest">{p.tagline}</p>
                </div>

                <div className="w-8 h-px bg-white/10 transition-all duration-500 group-hover:w-16" />

                <ul className="mt-2 flex flex-col gap-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 font-sans text-sm leading-relaxed text-white/60">
                      <span className="mt-1 shrink-0 text-emerald-500">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                <Link
                  href={p.cta.href}
                  className={`inline-flex w-fit items-center gap-1.5 rounded-xs border px-4 py-2.5 font-favorit text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 ${p.accent
                      ? 'bg-emerald-800/25 border-emerald-500/40 text-white shadow-inner hover:brightness-110'
                      : 'bg-button-container border-border text-text-mute hover:bg-surface-hover hover:text-white hover:border-border-active'
                    }`}
                >
                  <span>{p.cta.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </Link>

                <span className="font-favorit text-2xs text-white/10 select-none uppercase">
                  ACTIVE_PLAN
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Blueprint Architecture viewer */}
      <div className="hidden border border-border rounded-sm bg-surface overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />

        {/* Section title banner */}
        <div className="border-b border-border bg-[#111111]/85 p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-favorit text-2xs text-[#10b981] uppercase tracking-widest">SYSTEM SCHEMATICS</span>
            <h3 className="font-sans text-2xl font-light text-white">Interactive Blueprint Architecture</h3>
          </div>
          <div className="flex items-center gap-2 text-2xs font-favorit text-white/40">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            TELEMETRY: SYNCHRONIZED
          </div>
        </div>

        {/* Tab-driven blueprint viewer layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[22rem]">
          {/* Layer tabs selection - 4 cols */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border bg-[#0a0b0b]/60 flex flex-col divide-y divide-border/60">
            {architectureLayers.map((layer, index) => (
              <button
                key={layer.layer}
                onClick={() => setActiveArchIndex(index)}
                className={`w-full text-left p-4 flex items-center justify-between transition-all duration-300 cursor-pointer ${activeArchIndex === index
                    ? 'bg-emerald-950/20 border-l-2 border-emerald-500 text-white shadow-inner'
                    : 'text-white/45 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`p-1.5 rounded-sm border ${activeArchIndex === index ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-transparent border-white/5'
                    }`}>
                    {layer.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-medium">{layer.layer}</span>
                    <span className="font-favorit text-3xs text-white/30 uppercase tracking-widest mt-0.5">
                      {layer.tech[0]} // {layer.tech[1] || ''}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-favorit text-3xs px-1.5 py-0.5 rounded-xs ${layer.stats.status === 'ONLINE' || layer.stats.status === 'STABLE' || layer.stats.status === 'OPTIMAL' || layer.stats.status === 'MONITORING'
                      ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/20'
                      : 'bg-yellow-900/20 text-yellow-400 border border-yellow-500/20'
                    }`}>
                    {layer.stats.status}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Details blueprint pane - 7 cols */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-[#0e0f0f] relative min-h-[22rem]">
            {/* Schematic visual grid overlay */}
            <div className="absolute top-4 right-4 font-favorit text-[6rem] leading-none text-white/[0.01] font-bold select-none pointer-events-none">
              0{activeArchIndex + 1}
            </div>

            {/* Dynamic content */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-favorit text-3xs text-[#10b981] uppercase tracking-widest">LAYER_INFRASTRUCTURE</span>
                  <h4 className="font-sans text-xl text-white font-light">{architectureLayers[activeArchIndex].layer} Specs</h4>
                </div>
                <div className="font-favorit text-3xs text-white/30 text-right">
                  DEPLOYS: CONTINUOUS<br />
                  ISOLATION: FULL
                </div>
              </div>

              {/* Schematic layout box */}
              <div className="bg-[#121313] border border-border p-4 rounded-sm flex flex-col gap-2 font-mono text-2xs">
                <span className="text-white/30 uppercase tracking-wider font-semibold">Data Pipeline Schematic:</span>
                <div className="text-[#10b981] flex items-center flex-wrap gap-2 pt-1 font-semibold">
                  {architectureLayers[activeArchIndex].schematic.split(' -> ').map((node, ni, arr) => (
                    <span key={node} className="flex items-center gap-2">
                      <span className="bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded-sm text-3xs">
                        {node}
                      </span>
                      {ni < arr.length - 1 && <span className="text-white/20 select-none">→</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Layer specs list */}
              <div className="flex flex-col gap-3">
                <span className="font-favorit text-2xs text-white/40 uppercase tracking-widest">Primary Operations:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {architectureLayers[activeArchIndex].items.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-[#10b981] mt-1 shrink-0">→</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies chip lists */}
              <div className="flex flex-col gap-2.5">
                <span className="font-favorit text-2xs text-white/40 uppercase tracking-widest font-semibold">Integrated Core SDKs & APIs:</span>
                <div className="flex flex-wrap gap-1.5">
                  {architectureLayers[activeArchIndex].tech.map((tech) => (
                    <span key={tech} className="font-favorit text-2xs text-white/60 bg-[#161616] border border-border px-2.5 py-1 rounded-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics stats row */}
            <div className="border-t border-border/80 pt-6 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10 font-favorit">
              <div className="flex flex-col gap-0.5">
                <span className="text-3xs text-white/30 uppercase tracking-widest">STATUS</span>
                <span className="text-xs text-emerald-400 font-semibold">{architectureLayers[activeArchIndex].stats.status}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xs text-white/30 uppercase tracking-widest">LATENCY</span>
                <span className="text-xs text-white font-semibold">{architectureLayers[activeArchIndex].stats.latency}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xs text-white/30 uppercase tracking-widest">UPTIME RATE</span>
                <span className="text-xs text-white font-semibold">{architectureLayers[activeArchIndex].stats.uptime}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xs text-white/30 uppercase tracking-widest">CORE LOAD</span>
                <span className="text-xs text-white font-semibold">{architectureLayers[activeArchIndex].stats.load}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Layer — 3 col (Analytics Dashboard · Secure Infrastructure · Enterprise Integrations) */}
      {false && (
        <>
          <div className="border border-border grid grid-cols-1 lg:grid-cols-3 bg-surface rounded-sm overflow-hidden">

            {/* Column 1: Analytics Dashboard with animated SVG performance chart */}
            <div className="border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-4 font-sans justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-favorit text-3xs text-white/40 uppercase tracking-widest">Real-time telemetry</span>
                </div>
                <h3 className="font-sans text-xl text-white font-light">
                  {platform[0].title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{platform[0].desc}</p>
              </div>

              {/* SVG Animated Chart visualization */}
              <div className="border border-border/80 mt-2 bg-[#0a0b0b] rounded-sm p-4 relative overflow-hidden group/chart select-none">
                <div className="absolute top-2 left-3 font-favorit text-[0.55rem] text-white/30 uppercase">Live Performance Index (10s window)</div>

                {/* SVG graph */}
                <div className="h-28 flex items-end mt-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

                    {/* Area under curve */}
                    <path
                      d="M 0,40 Q 15,10 30,22 T 60,8 T 80,18 T 100,5 L 100,40 L 0,40 Z"
                      fill="url(#chartGrad)"
                      opacity="0.15"
                    />

                    {/* Glowing graph line */}
                    <path
                      d="M 0,40 Q 15,10 30,22 T 60,8 T 80,18 T 100,5"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.2"
                      strokeDasharray="200"
                      strokeDashoffset="0"
                      className="animate-[dash_6s_linear_infinite]"
                      style={{
                        animation: 'chart-flow 25s linear infinite'
                      }}
                    />

                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex justify-between items-center text-3xs font-favorit text-white/30 border-t border-border/50 pt-2.5 mt-2">
                  <span>LATENCY: 1.1s</span>
                  <span>RESOLUTIONS: 99.3%</span>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 mt-2">
                {platform[0].metrics!.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-favorit text-2xs">
                      <span className="text-white/40 uppercase tracking-wider">{m.label}</span>
                      <span className="text-white font-medium">{m.value}</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${m.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Secure Infrastructure with dynamic system vulnerability scanner */}
            <div className="border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-4 font-sans justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-favorit text-3xs text-white/40 uppercase tracking-widest">Enterprise grade trust</span>
                </div>
                <h3 className="font-sans text-xl text-white font-light">
                  {platform[1].title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{platform[1].desc}</p>
              </div>

              {/* Interactive cyber security mainframe simulation */}
              <div className="border border-border/80 mt-2 bg-[#0a0b0b] rounded-sm p-4 flex flex-col justify-center min-h-[9rem] relative overflow-hidden font-mono select-none">
                <div className="absolute top-2 left-3 font-favorit text-[0.55rem] text-white/30 uppercase">Sec_Vault Security Mainframe</div>

                <div className="flex items-center justify-center py-2">
                  <svg className="w-16 h-16 text-[#10b981]/60 animate-[spin_12s_linear_infinite]" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 3" />
                    <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="20" cy="20" r="8" fill="none" stroke="#10b981" strokeWidth="1" />
                    <line x1="20" y1="2" x2="20" y2="38" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                    <line x1="2" y1="20" x2="38" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  </svg>

                  {/* Radar pulse target */}
                  <div className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="flex justify-between items-center text-3xs font-favorit text-emerald-400 border-t border-border/50 pt-2.5 mt-2">
                  <span>VAULT: SECURE</span>
                  <span>SHA-256 HANDSHAKE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {platform[1].badges!.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 border border-border/75 p-3 rounded-xs transition-colors hover:bg-white/[0.02]"
                    style={{ background: 'rgba(255,255,255,0.008)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="font-favorit text-2xs text-white/70 uppercase tracking-widest">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Enterprise Integrations categorised grid */}
            <div className="p-6 flex flex-col gap-4 font-sans justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-favorit text-3xs text-white/40 uppercase tracking-widest">Connective pipeline fabric</span>
                </div>
                <h3 className="font-sans text-xl text-white font-light">
                  {platform[2].title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{platform[2].desc}</p>
              </div>

              <div className="flex flex-col gap-3.5 mt-2">
                {platform[2].integrationGroups!.map((g) => (
                  <div key={g.name} className="flex flex-col gap-1.5">
                    <p className="font-favorit text-2xs text-white/30 uppercase tracking-widest font-semibold">{g.name}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {g.items.map((name) => (
                        <div
                          key={name}
                          className="border border-border/80 rounded-xs py-2 flex items-center justify-center transition-all duration-300 hover:bg-[#10b981]/5 hover:border-[#10b981]/20 group/badge"
                          style={{ background: 'rgba(255,255,255,0.008)' }}
                        >
                          <span className="font-favorit text-2xs text-white/50 group-hover:text-white uppercase text-center leading-none tracking-wider">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 font-favorit uppercase text-xs hover:text-white transition-colors mt-4 text-[#10b981]"
              >
                <span>Request a custom connector</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Developer API Console playground */}
          <div className="border border-border bg-surface rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">

              {/* Left panel: Info & Feature list - 5 cols */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between gap-6 relative z-10">
                <div className="flex flex-col gap-4">
                  <span className="font-favorit text-2xs text-[#10b981] bg-[#10b981]/15 border border-[#10b981]/25 px-2.5 py-0.5 rounded-sm w-fit uppercase tracking-widest font-semibold">
                    DEVS_SUITE
                  </span>
                  <h3 className="font-sans text-3xl font-light text-white leading-[1.2]">
                    Built API-first.
                  </h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed max-w-lg">
                    Every EledraLabs system is built as a highly structured API. Deploy, trigger, monitor, and configure automations utilizing typed SDKs and real-time streaming endpoints.
                  </p>

                  <ul className="flex flex-col gap-3 mt-4">
                    {developerPlayground.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-sans text-sm text-white/70">
                        <span className="text-[#10b981] mt-1 shrink-0">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-fit items-center gap-2 font-favorit uppercase text-xs transition-colors hover:text-white mt-6 text-[#10b981]"
                >
                  <span>Request Developer Access</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>

              {/* Right panel: Active Code Terminal Playground - 7 cols */}
              <div className="lg:col-span-7 bg-[#070808] flex flex-col min-h-[25rem] relative overflow-hidden">

                {/* Tab header buttons: Node, Python, cURL */}
                <div className="border-b border-border bg-[#101111]/80 px-4 py-2 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex gap-1">
                    {developerPlayground.languages.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          setActiveLang(lang.id)
                          setSimResponse(null)
                          setSimStep(0)
                        }}
                        className={`font-favorit text-xs uppercase px-3 py-1.5 rounded-sm transition-all cursor-pointer ${activeLang === lang.id
                            ? 'bg-[#1e1e1e] border border-border text-white'
                            : 'text-white/40 hover:text-white/80 hover:bg-white/5 border border-transparent'
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* File title banner */}
                    <span className="font-favorit text-3xs text-white/30 select-none hidden sm:inline">
                      {developerPlayground.languages.find(l => l.id === activeLang)?.file}
                    </span>

                    {/* Copy code utility */}
                    <button
                      onClick={handleCopyCode}
                      className="font-favorit text-3xs text-white/40 hover:text-white uppercase flex items-center gap-1.5 px-2 py-1 rounded-sm border border-white/5 hover:border-white/15 bg-white/[0.01] cursor-pointer active:scale-95 transition-all"
                    >
                      {copied ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.5l2 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                          </svg>
                          COPIED!
                        </span>
                      ) : (
                        <span>COPY_CODE</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Code Block rendering */}
                <div className="flex-1 p-4 overflow-y-auto select-text font-mono text-[0.78rem] leading-[1.7] flex flex-col justify-between border-b border-border/60 bg-[#090a0a]">
                  <pre className="text-white/60">
                    {developerPlayground.languages.find(l => l.id === activeLang)?.code.map((line, i) => {
                      const isComment = line.startsWith('//') || line.startsWith('#')
                      return (
                        <div key={i} className="flex gap-4">
                          <span className="font-favorit text-3xs text-white/15 select-none w-5 text-right">{i + 1}</span>
                          <span className={isComment ? 'text-emerald-500/40 italic font-sans' : 'text-white/70'}>
                            {line || ' '}
                          </span>
                        </div>
                      )
                    })}
                  </pre>

                  {/* Execution console pane */}
                  <div className="mt-6 border-t border-border/80 pt-4">
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-favorit text-3xs text-white/45 uppercase tracking-wider">Simulated Request Console</span>
                      </div>
                      <button
                        onClick={runApiSimulation}
                        disabled={isSimulating}
                        className="font-favorit text-3xs bg-[#10b981]/15 text-[#10b981] hover:bg-[#10b981]/25 border border-[#10b981]/30 disabled:opacity-50 px-3 py-1.5 rounded-sm uppercase cursor-pointer active:scale-95 duration-150 transition-all font-semibold shadow-inner"
                      >
                        {isSimulating ? 'EXECUTING...' : 'RUN_TEST_REQUEST →'}
                      </button>
                    </div>

                    <div className="bg-[#050606] rounded-xs border border-border/50 p-3 min-h-[5.5rem] font-mono text-3xs leading-relaxed flex flex-col justify-center">
                      {simStep === 0 && (
                        <span className="text-white/20 uppercase tracking-widest text-center select-none py-4">Click "RUN_TEST_REQUEST" to inspect response headers and payload</span>
                      )}
                      {simStep === 1 && (
                        <div className="flex flex-col gap-1 text-white/45">
                          <p>&gt; DNS handshake succeeded. TLS 1.3 tunnel configured...</p>
                          <p>&gt; POST https://api.eledralabs.com/v1/agents/voice ...</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                            <span className="text-white/60">Connecting payload server...</span>
                          </div>
                        </div>
                      )}
                      {simStep === 2 && (
                        <div className="flex flex-col gap-1 text-white/45">
                          <p>&gt; POST https://api.eledralabs.com/v1/agents/voice [200 OK]</p>
                          <p>&gt; Authorizing API scope permissions...</p>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1.5">
                            <div className="h-full bg-[#10b981] animate-[progress_1s_ease-out_forwards]" style={{ width: '80%' }} />
                          </div>
                        </div>
                      )}
                      {simStep === 3 && simResponse && (
                        <div className="flex flex-col gap-1.5 select-text">
                          <div className="flex items-center justify-between text-emerald-400 font-semibold border-b border-border/40 pb-1 mb-1 font-favorit uppercase">
                            <span>Response status: 200 OK</span>
                            <span>Time: 120ms</span>
                          </div>
                          <pre className="text-emerald-300 overflow-x-auto whitespace-pre p-1 max-h-48 leading-normal">
                            {simResponse}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing plans upgrade */}
          <div className="border border-border rounded-sm bg-surface overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />

            <div className="border-b border-border bg-[#111111]/85 p-6 flex items-end justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-2">
                <span className="font-favorit text-2xs text-[#10b981] uppercase tracking-widest">scoping plans</span>
                <p className="font-sans text-3xl font-light text-white leading-normal">
                  Volume- and Footprint-based.
                </p>
              </div>
              <p className="text-white/45 font-sans text-sm max-w-xs text-left md:text-right">
                Every EledraLabs production service begins with a technical scoping blueprint.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {pricing.map((p, i) => (
                <div
                  key={p.name}
                  className={`product-pricing-card group relative p-6 md:p-8 flex flex-col justify-between transition-all duration-300 min-h-[22rem]`}
                  style={{
                    background: p.accent ? 'linear-gradient(180deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.01) 100%)' : 'rgba(255,255,255,0.003)'
                  }}
                >
                  {/* Radial gradient backing for growth/enterprise */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: `radial-gradient(circle at 50% 10%, ${p.colorGlow} 0%, transparent 60%)` }} />

                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-favorit text-2xs text-white/20 select-none">
                        TIER // 0{i + 1}
                      </span>

                      {p.accent && (
                        <span className="border px-2 py-0.5 font-favorit text-3xs uppercase text-emerald-400 bg-emerald-950/20 border-emerald-500/30 rounded-sm font-semibold tracking-wider animate-pulse">
                          Most picked
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-sans text-2xl font-light text-white leading-normal">
                        {p.name}
                      </h4>
                      <p className="font-favorit text-3xs text-white/35 uppercase tracking-widest mt-1.5">{p.tagline}</p>
                    </div>

                    <div className="w-8 h-px bg-white/10 group-hover:w-16 transition-all duration-500" />

                    <ul className="flex flex-col gap-3 mt-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 font-sans text-sm text-white/60 leading-relaxed">
                          <span className="text-emerald-500 mt-1 shrink-0">→</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 pt-8 mt-auto flex items-center justify-between border-t border-white/5">
                    <Link
                      href={p.cta.href}
                      className={`inline-flex w-fit items-center gap-1.5 font-favorit uppercase px-4 py-2.5 text-xs transition-all duration-200 border rounded-xs select-none cursor-pointer tracking-wider font-semibold hover:-translate-y-0.5 ${p.accent
                          ? 'bg-emerald-800/25 border-emerald-500/40 text-white shadow-inner hover:brightness-110'
                          : 'bg-button-container border-border text-text-mute hover:bg-surface-hover hover:text-white hover:border-border-active'
                        }`}
                    >
                      <span>{p.cta.label}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                      </svg>
                    </Link>

                    <span className="text-white/10 font-favorit text-2xs select-none uppercase">
                      ACTIVE_PLAN
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
