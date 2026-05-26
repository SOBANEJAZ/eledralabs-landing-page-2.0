import Link from 'next/link'

export default function Products() {
  return (
    <section
      id="products"
      className="spa-section border border-border flex flex-col mb-5 md:mb-8 lg:mb-17.5 scroll-mt-17"
    >
      {/* Header Banner */}
      <div className="h-80 border-b border-border flex flex-col gap-8 px-5 py-5 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-surface mix-blend-screen"
          aria-hidden="true"
        >
          <img
            alt=""
            decoding="async"
            className="object-cover object-center"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: 'transparent',
            }}
            src="/backgrounds/zapier-story-bg.png"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-87.5 bg-linear-to-b from-surface to-transparent" />
        <p className="relative z-10 font-sans text-7 leading-120">
          <span className="text-white">Our Products.</span>
          <span className="text-white/50">
            {' '}Developer-centric AI tools, infrastructure, and verification loops built for
            next-generation intelligence.
          </span>
        </p>
      </div>

      {/* Product Cards Grid — 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Card 1: AI Workflow Automation */}
        <div className="flex-1 flex flex-col border-b lg:border-r border-border p-6 gap-5 font-sans">
          <div className="flex items-center justify-between">
            <span className="border border-white/22 p-1 font-favorit text-xs leading-none uppercase tracking-0.24 text-white/50">
              Automation Platform
            </span>
            <p className="text-2xs text-white/25 uppercase font-favorit">01</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl leading-normal lg:text-h3-title">AI Workflow Automation</p>
            <p className="text-white/50 text-base leading-6">
              Design, deploy, and monitor intelligent automation pipelines that handle lead capture,
              customer follow-up, and operational routing — all without writing a line of code.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Visual drag-and-drop workflow builder</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Real-time trigger &amp; action engine</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">CRM, email, and SMS integrations</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors mt-2"
          >
            Get Access{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>

        {/* Card 2: Voice AI Agents */}
        <div className="flex-1 flex flex-col border-b border-border p-6 gap-5 font-sans">
          <div className="flex items-center justify-between">
            <span className="border border-white/22 p-1 font-favorit text-xs leading-none uppercase tracking-0.24 text-white/50">
              Conversational AI
            </span>
            <p className="text-2xs text-white/25 uppercase font-favorit">02</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl leading-normal lg:text-h3-title">Voice AI Agents</p>
            <p className="text-white/50 text-base leading-6">
              Deploy production-ready voice agents that answer calls, qualify leads, schedule
              appointments, and handle FAQs — 24/7, at any scale, with zero hold times.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Human-like speech with sub-second latency</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Multi-language &amp; HIPAA-ready options</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Full call transcription &amp; analytics</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors mt-2"
          >
            Book a Demo{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>

        {/* Card 3: Custom LLM Chatbots */}
        <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-border p-6 gap-5 font-sans">
          <div className="flex items-center justify-between">
            <span className="border border-white/22 p-1 font-favorit text-xs leading-none uppercase tracking-0.24 text-white/50">
              NLP &amp; Chat
            </span>
            <p className="text-2xs text-white/25 uppercase font-favorit">03</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl leading-normal lg:text-h3-title">Custom LLM Chatbots</p>
            <p className="text-white/50 text-base leading-6">
              Embed intelligent chat assistants trained on your business data — for websites, apps,
              and internal tools. Fine-tuned models that speak your brand&apos;s language.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">RAG-powered knowledge base integration</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Conversation history &amp; context retention</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Embeds in any web or mobile surface</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors mt-2"
          >
            Get Started{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>

        {/* Card 4: IT Service Automation */}
        <div className="flex-1 flex flex-col p-6 gap-5 font-sans">
          <div className="flex items-center justify-between">
            <span className="border border-white/22 p-1 font-favorit text-xs leading-none uppercase tracking-0.24 text-white/50">
              DevOps &amp; IT
            </span>
            <p className="text-2xs text-white/25 uppercase font-favorit">04</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl leading-normal lg:text-h3-title">IT Service Automation</p>
            <p className="text-white/50 text-base leading-6">
              Automate ticket routing, password resets, system diagnostics, and alert management.
              Reduce MTTR and free your engineering team for high-value work.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Smart ticket classification &amp; routing</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">Automated runbook execution</span>
            </div>
            <div className="flex gap-2.5 items-start text-sm">
              <span className="whitespace-nowrap text-white/30 w-5">→</span>
              <span className="text-white/50">PagerDuty, Jira &amp; Slack integrations</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors mt-2"
          >
            Learn More{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Feature Highlights Row — 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-border">
        {/* 05: Analytics Dashboard */}
        <div className="border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-4 font-sans">
          <p className="text-2xs text-white/25 uppercase font-favorit">05</p>
          <p className="text-white text-xl leading-normal lg:text-h3-title">Analytics Dashboard</p>
          <p className="text-white/50 text-base leading-6">
            Monitor every automation in real time. Track conversion rates, agent performance,
            response times, and ROI with a unified ops intelligence layer.
          </p>
          <div className="border border-border p-4 mt-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-2xs font-favorit">
                <span className="text-white/50">Lead Conversion</span>
                <span className="text-white">+34.2%</span>
              </div>
              <div className="w-full h-1 bg-white/10">
                <div className="h-1 bg-white" style={{ width: '72%' }} />
              </div>
              <div className="flex items-center justify-between text-2xs font-favorit">
                <span className="text-white/50">Avg Response Time</span>
                <span className="text-white">1.2s</span>
              </div>
              <div className="w-full h-1 bg-white/10">
                <div className="h-1 bg-white" style={{ width: '95%' }} />
              </div>
              <div className="flex items-center justify-between text-2xs font-favorit">
                <span className="text-white/50">Tickets Resolved</span>
                <span className="text-white">98.7%</span>
              </div>
              <div className="w-full h-1 bg-white/10">
                <div className="h-1 bg-white" style={{ width: '89%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 06: Secure Infrastructure */}
        <div className="border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-4 font-sans">
          <p className="text-2xs text-white/25 uppercase font-favorit">06</p>
          <p className="text-white text-xl leading-normal lg:text-h3-title">Secure Infrastructure</p>
          <p className="text-white/50 text-base leading-6">
            All Eledra Labs products run on SOC2-compliant infrastructure with end-to-end
            encryption, role-based access controls, and full audit logging.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <div
              className="flex items-center gap-3 border border-border p-3"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80', flexShrink: 0 }}
              />
              <span className="text-xs text-white/70 font-favorit uppercase tracking-wider">
                SOC 2 Type II Certified
              </span>
            </div>
            <div
              className="flex items-center gap-3 border border-border p-3"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80', flexShrink: 0 }}
              />
              <span className="text-xs text-white/70 font-favorit uppercase tracking-wider">
                HIPAA Compliant
              </span>
            </div>
            <div
              className="flex items-center gap-3 border border-border p-3"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80', flexShrink: 0 }}
              />
              <span className="text-xs text-white/70 font-favorit uppercase tracking-wider">
                GDPR Ready
              </span>
            </div>
          </div>
        </div>

        {/* 07: Enterprise Integrations */}
        <div className="p-6 flex flex-col gap-4 font-sans">
          <p className="text-2xs text-white/25 uppercase font-favorit">07</p>
          <p className="text-white text-xl leading-normal lg:text-h3-title">Enterprise Integrations</p>
          <p className="text-white/50 text-base leading-6">
            Connect Eledra Labs to your existing stack via REST API, webhooks, or native connectors.
            Full SDK support for Python, Node.js, and more.
          </p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {['Salesforce', 'HubSpot', 'Slack', 'Jira', 'Twilio', '+40 more'].map((name) => (
              <div
                key={name}
                className="border border-border p-2 flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="text-2xs text-white/40 font-favorit uppercase">{name}</span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-1 font-favorit uppercase text-xs text-white/50 hover:text-white transition-colors mt-auto"
          >
            View All Integrations{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
