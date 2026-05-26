import Link from 'next/link'

interface ServicesProps {
  showTestimonials?: boolean
}

const services = [
  {
    num: '01',
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
    index: 'Eledralabs — Service 01 / 04',
    cta: 'Explore',
  },
  {
    num: '02',
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
    index: 'Eledralabs — Service 02 / 04',
    cta: 'Learn More',
  },
  {
    num: '03',
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
    index: 'Eledralabs — Service 03 / 04',
    cta: 'Configure',
  },
  {
    num: '04',
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
    index: 'Eledralabs — Service 04 / 04',
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
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none"
              href="/contact"
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
          <div key={svc.num} className="svc-row">
            <div className="svc-img-col">
              <img src={svc.img} alt={svc.alt} />
            </div>
            <div className="svc-content-col">
              <div className="svc-top-row">
                <span className="svc-num-badge">{svc.num}</span>
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
                <span className="svc-index-line">{svc.index}</span>
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

      {/* Testimonials Grid — shown only on /solutions */}
      {showTestimonials && (
        <div
          id="solutions-testimonials-section"
          className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] mt-6 md:mt-8 lg:mt-10 border border-border"
        >
          {/* Card 1 */}
          <Link
            className="group min-h-75 relative flex flex-col p-5 overflow-hidden gap-8 xl:border-r xl:border-border xl:gap-0 xl:justify-between"
            href="/contact"
            style={{ background: '#d4f33b', color: '#000000' }}
          >
            <p
              className="relative z-10 text-24 leading-120 text-black max-w-140 font-sans"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              &ldquo;Eledra Labs automated our entire customer workflow, every lead is now qualified,
              routed, and followed up within seconds. It&apos;s like adding a full operations team
              without the headcount.&rdquo;
            </p>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#000',
                  }}
                >
                  S
                </div>
                <div className="flex flex-col font-sans">
                  <p
                    className="text-18 text-black leading-normal"
                    style={{ color: '#000000', fontWeight: 600 }}
                  >
                    Saloni
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none flex items-center gap-1 text-sm text-black font-sans opacity-50 group-hover:opacity-80 transition-opacity"
              >
                <span className="leading-none" style={{ color: '#000000' }}>
                  Read case study
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="w-3.5 h-3.5 text-black"
                >
                  <path
                    d="M4.75 9.125L7.875 6L4.75 2.875"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            className="group relative flex flex-col p-5 overflow-hidden gap-8 xl:min-h-75 xl:gap-0 xl:justify-between"
            href="/contact"
            style={{ background: '#ff5a1f', color: '#ffffff' }}
          >
            <p
              className="relative z-10 text-24 leading-120 text-white font-sans"
              style={{ color: '#ffffff', fontWeight: 500 }}
            >
              &ldquo;The AI voice agent Eledra Labs built for us handles 300+ calls a day, patient
              satisfaction is up 40% and our staff finally has time to focus on care.&rdquo;
            </p>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                  }}
                >
                  S
                </div>
                <div className="flex flex-col font-sans">
                  <p
                    className="text-18 text-white leading-normal"
                    style={{ color: '#ffffff', fontWeight: 600 }}
                  >
                    Sarah Okonkwo
                  </p>
                  <p
                    className="text-base text-white/60 leading-normal"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    Operations Director, MedCore
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="w-3.5 h-3.5 text-white"
                >
                  <path
                    d="M4.75 9.125L7.875 6L4.75 2.875"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      )}
    </section>
  )
}
