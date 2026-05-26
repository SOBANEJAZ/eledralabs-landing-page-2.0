import Link from 'next/link'

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', alt: 'Go' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', alt: 'PyTorch' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', alt: 'Nginx' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', alt: 'Linux' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative -mx-4 flex flex-col mb-5 md:-mx-5 md:mb-8 lg:mb-20">
      {/* Video Background */}
      <div
        className="hero-video-edge-blend pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden bg-surface"
        style={{ height: '100vh', minHeight: '480px' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transform-gpu will-change-transform"
            style={{ transform: 'translate3d(0, var(--hero-parallax-y, 0px), 0)' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full translate-x-36 -translate-y-22 -scale-x-160 scale-y-160 object-cover object-[90%_98%] max-[560px]:translate-x-20 max-[560px]:-translate-y-10 max-[560px]:-scale-x-145 max-[560px]:scale-y-145 max-[560px]:object-[78%_92%] xl:translate-x-6 xl:-translate-y-16 xl:-scale-x-110 xl:scale-y-125 xl:object-[62%_98%]"
            >
              <source src="/backgrounds/pi-glass-loop-prod.webm" type="video/webm" />
              <source src="/backgrounds/pi-glass-loop-prod.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-start justify-end px-5 pt-5 pb-8 lg:pb-10"
        style={{ height: '100vh', minHeight: '480px' }}
      >
        <div className="relative z-10 flex w-full flex-col items-start gap-10 font-sans lg:flex-row lg:items-end">
          <div className="flex flex-1 flex-col items-start">
            <h1
              className="text-2xl leading-110 text-white md:text-36 lg:text-h1-title"
              style={{ transform: 'scale(1.30)', transformOrigin: 'left center' }}
            >
              <span className="block">Eledralabs</span>
            </h1>
            <p className="max-w-100 leading-normal text-white/50 mt-5">
              We build precision-engineered Web and AI workflows that reduce operational drag and
              automate critical systems.
            </p>
            <div className="flex items-center gap-1 font-favorit mt-10">
              <Link
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 bg-white text-black min-h-7 px-2 py-2 text-xs leading-none"
                href="/contact"
              >
                Get Started
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
                Schedule Consultation
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
            </div>
          </div>
        </div>
      </div>

      {/* Hormozi Quote Section */}
      <div className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-5 bg-surface relative z-10">
        <h2
          className="text-white font-bold uppercase tracking-tight"
          style={{
            fontFamily: 'var(--font-sans, system-ui)',
            fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)',
            lineHeight: 1.15,
            maxWidth: '1000px',
          }}
        >
          &ldquo;WE PAY FOR EVERY LESSON
          <br className="hidden md:block" /> WITH EITHER{' '}
          <span style={{ color: '#F5A623' }}>TIME</span> OR{' '}
          <span style={{ color: '#F5A623' }}>MONEY</span>.&rdquo;
        </h2>
        <p
          className="text-white/50 tracking-[0.3em] uppercase font-favorit font-bold mt-10"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
        >
          — ALEX HORMOZI
        </p>
      </div>

      {/* Tech Logo Marquee */}
      <div
        className="py-12 border-t border-b border-border bg-surface relative z-10 overflow-hidden flex flex-col"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,0.4) 50%, rgba(0,0,0,0) 100%)',
        }}
      >
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              {techLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {techLogos.map((logo) => (
                <img key={`${logo.alt}-2`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
