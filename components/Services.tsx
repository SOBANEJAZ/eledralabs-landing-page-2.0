import Link from 'next/link'

interface ServicesProps {
  showTestimonials?: boolean
}

const services = [
  {
    img: '/backgrounds/solutions-1.png',
    alt: 'Custom Website Development',
    tags: ['Web Dev', 'Frontend', 'SEO'],
    title: 'Custom Website Development',
    desc: 'Bespoke digital platforms engineered from the ground up — built for speed, security, and scalability with modern frameworks.',
    features: [
      'Modern frameworks for robust security',
      'Infinite scalability & semantic structure',
      'Search engines prioritize our builds',
      'End-to-end delivery, zero handoff friction',
    ],
    cta: 'Explore',
  },
  {
    img: '/backgrounds/solutions-2.png',
    alt: 'AI Voice Agents',
    tags: ['AI Voice', 'Telephony', 'Automation'],
    title: 'AI Voice Agents',
    desc: 'Deploy conversational voice agents that handle inbound calls, route inquiries, and execute seamless appointment booking — without human intervention.',
    features: [
      'Handle routing & inquiries 24/7',
      'Seamless appointment booking',
      'Operates without human intervention',
      'Scales to thousands of calls per day',
    ],
    cta: 'Learn More',
  },
  {
    img: '/backgrounds/solutions-3.png',
    alt: 'Custom LLM Chatbots',
    tags: ['LLM', 'Chatbot', 'NLP'],
    title: 'Custom LLM Chatbots',
    desc: 'Trained on your proprietary data to handle complex FAQs and technical support instantly — no ML expertise required on your end.',
    features: [
      'No ML expertise required',
      '24/7 intelligent support',
      'Instant, context-aware responses',
      'Trained on your own data & docs',
    ],
    cta: 'Configure',
  },
  {
    img: '/backgrounds/solutions-4.png',
    alt: 'IT Service Automations',
    tags: ['IT Ops', 'Workflow', 'DevOps'],
    title: 'IT Service Automations',
    desc: 'Automate ticket routing, password resets, and routine diagnostics to free your engineering team from repetitive operational overhead.',
    features: [
      'Free your engineering team',
      'Streamline routine diagnostics',
      'Automated ticket routing & triage',
      'Reduce mean time to resolution',
    ],
    cta: 'Configure',
  },
]

export default function Services({ showTestimonials = false }: ServicesProps) {
  return (
    <section
      id="solutions"
      className="spa-section flex flex-col mb-5 md:mb-8 lg:mb-17.5 scroll-mt-17"
    >
      <div className="border border-border flex flex-col">
        {/* Section Header */}
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
              src={showTestimonials ? '/backgrounds/sprinkle-solutions.svg' : '/backgrounds/lab.png'}
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-87.5 bg-linear-to-b from-surface to-transparent" />
          <p className="relative z-10 font-sans text-7 leading-120">
            <span className="text-white">Web Solutions.</span>
            <span className="text-white/50">
              {' '}We build precision-engineered Web and AI workflows that reduce operational drag and
              automate critical systems.
            </span>
          </p>
          <div className="relative z-10 flex items-center gap-1">
            <Link
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 text-white min-h-7 px-2 py-2 text-xs leading-none"
              href="/contact"
              style={{ backgroundColor: 'var(--color-accent-green)' }}
            >
              Learn More
              <div className="w-3 h-3 overflow-hidden relative">
                <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 shrink-0"
                  >
                    <path
                      d="M4.75 9.125L7.875 6L4.75 2.875"
                      stroke="currentColor"
                      strokeLinecap="square"
                    />
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 shrink-0"
                  >
                    <path
                      d="M4.75 9.125L7.875 6L4.75 2.875"
                      stroke="currentColor"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-button-container text-text-mute hover:bg-surface-hover hover:text-white min-h-7 px-2 py-2 text-xs leading-none"
              href="/contact"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Service Rows */}
        {services.map((svc) => (
          <div key={svc.title} className="svc-row">
            <div className="svc-img-col">
              <img src={svc.img} alt={svc.alt} />
            </div>
            <div className="svc-content-col">
              <div className="svc-top-row">
                <div className="svc-tag-group">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="svc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="svc-title-block">
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>
              </div>
              <div className="svc-divider" />
              <div className="svc-features">
                {svc.features.map((feat) => (
                  <div key={feat} className="svc-feature-item">
                    <div className="svc-feature-dot" />
                    <span className="svc-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
              <div className="svc-footer">
                <Link className="svc-cta" href="/contact">
                  {svc.cta}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.75 9.125L7.875 6L4.75 2.875"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Illustration Cards — shown only on /solutions */}
      {showTestimonials && (
        <div
          id="solutions-testimonials-section"
          className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] mt-6 md:mt-8 lg:mt-10 border border-border"
        >
          {/* Card 1 — Yellow — Circuit Schematic (Option B) */}
          <Link
            className="group min-h-75 relative flex flex-col p-5 overflow-hidden xl:border-r xl:border-border justify-between"
            href="/contact"
            style={{ background: '#d4f33b' }}
          >
            <span className="relative z-10 font-favorit text-xs tracking-widest text-black/40 uppercase">
              Automation Pipeline
            </span>

            {/* Schematic SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 780 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                style={{ maxHeight: '190px' }}
              >
                <defs>
                  <pattern id="svc-dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="14" cy="14" r="1" fill="black" fillOpacity="0.08" />
                  </pattern>
                </defs>
                <rect width="780" height="190" fill="url(#svc-dot-grid)" />

                {/* Corner L-brackets */}
                <path d="M18 38 L18 18 L38 18" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <path d="M762 38 L762 18 L742 18" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <path d="M18 152 L18 172 L38 172" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <path d="M762 152 L762 172 L742 172" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />

                {/* Entry node */}
                <circle cx="38" cy="95" r="6" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <line x1="44" y1="95" x2="88" y2="95" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 3" />

                {/* INGEST box */}
                <rect x="88" y="74" width="98" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="137" y="92" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">INGEST</text>
                <text x="137" y="106" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">LEAD DATA</text>

                {/* Trace */}
                <line x1="186" y1="95" x2="232" y2="95" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <text x="202" y="89" fill="black" fillOpacity="0.18" fontSize="5.5" fontFamily="monospace">0.3s</text>

                {/* QUALIFY box */}
                <rect x="232" y="74" width="104" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="284" y="92" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">QUALIFY</text>
                <text x="284" y="106" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">AI SCORE</text>

                {/* Trace to junction */}
                <line x1="336" y1="95" x2="382" y2="95" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />

                {/* Junction via */}
                <circle cx="382" cy="95" r="4" fill="black" fillOpacity="0.22" />

                {/* Upper branch → ROUTE → CLOSE */}
                <path d="M382 95 L382 58 L418 58" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="418" y="37" width="98" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="467" y="55" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">ROUTE</text>
                <text x="467" y="69" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">ASSIGN REP</text>
                <line x1="516" y1="58" x2="558" y2="58" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="558" y="37" width="98" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="607" y="55" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">CLOSE</text>
                <text x="607" y="69" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">CRM UPDATE</text>
                <line x1="656" y1="58" x2="706" y2="58" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <circle cx="713" cy="58" r="6" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="724" y="62" fill="black" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">CRM</text>

                {/* Lower branch → NOTIFY → LOG */}
                <path d="M382 95 L382 132 L418 132" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="418" y="111" width="98" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="467" y="129" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">NOTIFY</text>
                <text x="467" y="143" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">SEND MSG</text>
                <line x1="516" y1="132" x2="558" y2="132" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <rect x="558" y="111" width="98" height="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="607" y="129" textAnchor="middle" fill="black" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">LOG</text>
                <text x="607" y="143" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="6" fontFamily="monospace">AUDIT TRAIL</text>
                <line x1="656" y1="132" x2="706" y2="132" stroke="black" strokeWidth="1.5" strokeOpacity="0.2" />
                <circle cx="713" cy="132" r="6" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="724" y="136" fill="black" fillOpacity="0.22" fontSize="5.5" fontFamily="monospace">EMAIL</text>

                {/* OK status labels */}
                <text x="440" y="31" fill="black" fillOpacity="0.15" fontSize="5" fontFamily="monospace">OK ▲</text>
                <text x="440" y="105" fill="black" fillOpacity="0.15" fontSize="5" fontFamily="monospace">OK ▲</text>
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-favorit text-xs text-black/35 uppercase tracking-widest">
                Explore Solutions
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className="text-black/35 group-hover:text-black/60 transition-colors"
              >
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
          </Link>

          {/* Card 2 — Orange — Dashboard Wireframe (Option C) */}
          <Link
            className="group relative flex flex-col p-5 overflow-hidden xl:min-h-75 justify-between"
            href="/contact"
            style={{ background: '#ff5a1f' }}
          >
            <span className="relative z-10 font-favorit text-xs tracking-widest text-white/40 uppercase">
              Agent Status
            </span>

            {/* Wireframe SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 300 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '235px', width: 'auto' }}
              >
                {/* Outer panel border */}
                <rect x="20" y="15" width="260" height="205" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />

                {/* Header bar */}
                <rect x="20" y="15" width="260" height="30" fill="white" fillOpacity="0.07" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />
                <text x="34" y="34" fill="white" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace" letterSpacing="1">AGENT STATUS</text>
                {/* Indicator square */}
                <rect x="254" y="23" width="10" height="10" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="256" y="25" width="6" height="6" fill="white" fillOpacity="0.35" />

                {/* Row dividers + stat labels */}
                <line x1="20" y1="45" x2="280" y2="45" stroke="white" strokeWidth="0.75" strokeOpacity="0.12" />
                <text x="34" y="60" fill="white" fillOpacity="0.4" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">ACTIVE CALLS</text>
                <text x="268" y="60" textAnchor="end" fill="white" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">312</text>

                <line x1="20" y1="65" x2="280" y2="65" stroke="white" strokeWidth="0.75" strokeOpacity="0.08" />
                <text x="34" y="80" fill="white" fillOpacity="0.4" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">QUEUE DEPTH</text>
                <text x="268" y="80" textAnchor="end" fill="white" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">7</text>

                <line x1="20" y1="85" x2="280" y2="85" stroke="white" strokeWidth="0.75" strokeOpacity="0.08" />
                <text x="34" y="100" fill="white" fillOpacity="0.4" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5">RESOLUTION RATE</text>
                <text x="268" y="100" textAnchor="end" fill="white" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">94.2%</text>

                {/* Section divider */}
                <line x1="20" y1="108" x2="280" y2="108" stroke="white" strokeWidth="1" strokeOpacity="0.2" />

                {/* Bar 1 — 82% */}
                <text x="34" y="123" fill="white" fillOpacity="0.35" fontSize="6" fontFamily="monospace" letterSpacing="0.5">VOICE AGENT</text>
                <rect x="34" y="127" width="192" height="7" fill="white" fillOpacity="0.08" />
                <rect x="34" y="127" width="157" height="7" fill="white" fillOpacity="0.3" />
                <text x="233" y="135" fill="white" fillOpacity="0.45" fontSize="6" fontFamily="monospace">82%</text>

                {/* Bar 2 — 61% */}
                <text x="34" y="147" fill="white" fillOpacity="0.35" fontSize="6" fontFamily="monospace" letterSpacing="0.5">CHATBOT</text>
                <rect x="34" y="151" width="192" height="7" fill="white" fillOpacity="0.08" />
                <rect x="34" y="151" width="117" height="7" fill="white" fillOpacity="0.3" />
                <text x="233" y="159" fill="white" fillOpacity="0.45" fontSize="6" fontFamily="monospace">61%</text>

                {/* Bar 3 — 45% */}
                <text x="34" y="171" fill="white" fillOpacity="0.35" fontSize="6" fontFamily="monospace" letterSpacing="0.5">IT AUTOMATION</text>
                <rect x="34" y="175" width="192" height="7" fill="white" fillOpacity="0.08" />
                <rect x="34" y="175" width="86" height="7" fill="white" fillOpacity="0.3" />
                <text x="233" y="183" fill="white" fillOpacity="0.45" fontSize="6" fontFamily="monospace">45%</text>

                {/* Footer status bar */}
                <line x1="20" y1="192" x2="280" y2="192" stroke="white" strokeWidth="0.75" strokeOpacity="0.2" />
                <rect x="20" y="192" width="260" height="28" fill="white" fillOpacity="0.05" />
                <text x="34" y="205" fill="white" fillOpacity="0.28" fontSize="5.5" fontFamily="monospace" letterSpacing="0.3">SYS_OK ■ LAT: 142ms ■ UPTIME: 99.98%</text>
                <text x="34" y="216" fill="white" fillOpacity="0.28" fontSize="5.5" fontFamily="monospace" letterSpacing="0.3">LAST SYNC: 0.2s AGO</text>
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-favorit text-xs text-white/35 uppercase tracking-widest">
                Get Started
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className="text-white/35 group-hover:text-white/60 transition-colors"
              >
                <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
          </Link>
        </div>
      )}
    </section>
  )
}
