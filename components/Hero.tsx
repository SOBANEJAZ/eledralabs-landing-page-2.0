import Link from 'next/link'

const services = [
  {
    label: 'AI Voice Agents',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4" />
      </svg>
    ),
  },
  {
    label: 'Custom LLM Chatbots',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7.5C5 6.12 6.12 5 7.5 5h9C17.88 5 19 6.12 19 7.5v6c0 1.38-1.12 2.5-2.5 2.5h-4L8 19v-3h-.5C6.12 16 5 14.88 5 13.5v-6Z" />
      </svg>
    ),
  },
  {
    label: 'IT Automations',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5v3M12 17.5v3M5.99 6l2.12 2.12M15.89 15.88 18.01 18M3.5 12h3M17.5 12h3M5.99 18l2.12-2.12M15.89 8.12 18.01 6" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    label: 'Modern Web Platforms',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.2 3.2 4.87 3.2 8S14.2 17.8 12 20M12 4c-2.2 2.2-3.2 4.87-3.2 8s1 5.8 3.2 8" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section id="hero" className="eledra-hero relative flex flex-col">
      {/* Video Background */}
      <div
        className="eledra-hero-media hero-video-edge-blend pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden bg-surface"
        style={{ height: 'calc(100vh - 4rem)', minHeight: '480px' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transform-gpu will-change-transform"
            suppressHydrationWarning
            style={{ transform: 'translate3d(0, var(--hero-parallax-y, 0px), 0)' }}
          >
            <video
              suppressHydrationWarning
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/backgrounds/pi-glass-loop-poster.webp"
              className="absolute inset-0 h-full w-full object-cover object-[55%_center] -scale-x-100 scale-y-100 xl:translate-x-6 xl:-translate-y-16 xl:-scale-x-110 xl:scale-y-160 xl:object-[62%_98%]"
            >
              <source src="/backgrounds/pi-glass-loop-prod.webm" type="video/webm" />
              <source src="/backgrounds/pi-glass-loop-prod.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="eledra-hero-content pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col items-start justify-end px-5 pt-5 pb-8 lg:pb-10"
        style={{ height: 'calc(100vh - 4rem)', minHeight: '480px' }}
      >
        <div className="eledra-hero-panel pointer-events-auto relative flex w-full flex-col items-start font-sans">
          <h1 className="eledra-hero-title">Eledralabs</h1>

          <div className="eledra-hero-divider" aria-hidden="true" />

          <ul className="eledra-hero-services" aria-label="Eledra Labs services">
            {services.map((service) => (
              <li key={service.label} className="eledra-hero-service">
                <span className="eledra-hero-service-icon">{service.icon}</span>
                <span>{service.label}</span>
              </li>
            ))}
          </ul>

          <Link href="#home-manifesto" className="eledra-hero-cta">
            Explore More
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 9H14M10 5L14 9L10 13" stroke="currentColor" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
