'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="spa-section flex flex-col gap-6 md:gap-10 mb-5 md:mb-8 lg:mb-17.5 scroll-mt-17"
    >
      {/* Header Banner */}
      <div className="border border-border -mb-4 md:-mb-6">
        <div className="h-80 border-b border-border flex flex-col gap-5 px-5 pt-0 pb-5 relative overflow-hidden">
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
              src="/backgrounds/sprinkle-contact.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-87.5 bg-linear-to-b from-surface to-transparent" />
          <p className="relative z-10 font-sans text-7 leading-120">
            <span className="text-white">Contact Us.</span>
            <span className="text-white/50">
              {' '}Connect with Eledra Labs&apos; systems automation experts to custom-engineer your AI
              stacks.
            </span>
          </p>
        </div>
      </div>

      {/* Form Area */}
      <div className="border border-border p-8 bg-surface-card flex flex-col justify-center gap-8 font-sans">
        {submitted ? (
          <div className="max-w-200 mx-auto w-full flex flex-col items-center justify-center gap-4 py-16 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-sans font-medium">Message Sent</h3>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Thank you! The Eledra Labs team will contact you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 font-favorit text-xs uppercase tracking-wider text-white/50 border border-white/10 px-4 py-2 hover:bg-white/5 hover:text-white transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-2.5 max-w-200 mx-auto w-full"
            onSubmit={handleSubmit}
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Alex Carter"
                  className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone + Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Organization
                </label>
                <input
                  required
                  type="text"
                  placeholder="Eledra Labs Inc."
                  className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Interest + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Area of Interest
                </label>
                <select
                  required
                  className="contact-select bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select project type...</option>
                  <option value="workflow">AI Workflow Automation</option>
                  <option value="voice">Conversational Voice Agents</option>
                  <option value="chatbots">Custom LLM Chatbots</option>
                  <option value="compute">GPU Compute Orchestration</option>
                  <option value="rl">Reinforcement Learning Stack</option>
                  <option value="custom">Other Custom Architectures</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Estimated Budget Range
                </label>
                <select
                  required
                  className="contact-select bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select budget range...</option>
                  <option value="exploratory">Exploratory / Not Sure</option>
                  <option value="under-10k">Under $10,000 / month</option>
                  <option value="10k-30k">$10,000 - $30,000 / month</option>
                  <option value="30k-100k">$30,000 - $100,000 / month</option>
                  <option value="enterprise">$100,000+ / month (Enterprise)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Requirements textarea */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                Detailed Project Scope &amp; Custom Requirements
              </label>
              <textarea
                placeholder="Tell us about your systems automation goals, custom integration pipelines, or specific compute needs..."
                rows={4}
                className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer bg-white text-black min-h-10 px-5 py-3 text-xs leading-none self-start mt-4"
            >
              Submit Message
              <div className="w-3 h-3 overflow-hidden relative ml-1">
                <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 shrink-0"
                  >
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 shrink-0"
                  >
                    <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
