'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─── EmailJS config pulled from .env.local ───────────────────────────────────
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // ─── Controlled field state ─────────────────────────────────────────────────
  const [fields, setFields] = useState({
    from_name:    '',
    from_email:   '',
    phone:        '',
    organization: '',
    interest:     '',
    budget:       '',
    message:      '',
  })

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(prev => ({ ...prev, [key]: e.target.value }))

  // ─── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('loading')
    setErrorMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('success')
      setFields({
        from_name: '', from_email: '', phone: '',
        organization: '', interest: '', budget: '', message: '',
      })
    } catch (err: unknown) {
      console.error('EmailJS error:', err)
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrorMsg(message)
      setStatus('error')
    }
  }

  const reset = () => { setStatus('idle'); setErrorMsg('') }

  // ─── Shared input class ─────────────────────────────────────────────────────
  const inputCls =
    'bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white ' +
    'focus:outline-none focus:border-white/40 transition-colors w-full'

  return (
    <section
      id="contact"
      className="spa-section flex flex-col gap-6 md:gap-10 mb-5 md:mb-8 lg:mb-17.5 scroll-mt-17"
    >
      {/* ── Header Banner ─────────────────────────────────────────────────── */}
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

      {/* ── Form Area ─────────────────────────────────────────────────────── */}
      <div className="border border-border p-8 bg-surface-card flex flex-col justify-center gap-8 font-sans">

        {/* ── SUCCESS state ──────────────────────────────────────────────── */}
        {status === 'success' ? (
          <div className="max-w-200 mx-auto w-full flex flex-col items-center justify-center gap-4 py-16 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-sans font-medium">Message Sent</h3>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Thank you! The Eledra Labs team will contact you shortly.
            </p>
            <button
              onClick={reset}
              className="mt-4 font-favorit text-xs uppercase tracking-wider text-white/50 border border-white/10 px-4 py-2 hover:bg-white/5 hover:text-white transition-colors"
            >
              Send Another
            </button>
          </div>

        ) : (
          /* ── FORM (idle / loading / error) ─────────────────────────────── */
          <form
            ref={formRef}
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
                  name="from_name"
                  type="text"
                  placeholder="Alex Carter"
                  value={fields.from_name}
                  onChange={set('from_name')}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Email Address
                </label>
                <input
                  required
                  name="from_email"
                  type="email"
                  placeholder="alex@company.com"
                  value={fields.from_email}
                  onChange={set('from_email')}
                  className={inputCls}
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
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 019-2834"
                  value={fields.phone}
                  onChange={set('phone')}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Organization
                </label>
                <input
                  required
                  name="organization"
                  type="text"
                  placeholder="Eledra Labs Inc."
                  value={fields.organization}
                  onChange={set('organization')}
                  className={inputCls}
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
                  name="interest"
                  value={fields.interest}
                  onChange={set('interest')}
                  className="contact-select bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer w-full"
                >
                  <option value="" disabled hidden>Select project type...</option>
                  <option value="AI Workflow Automation">AI Workflow Automation</option>
                  <option value="Conversational Voice Agents">Conversational Voice Agents</option>
                  <option value="Custom LLM Chatbots">Custom LLM Chatbots</option>
                  <option value="GPU Compute Orchestration">GPU Compute Orchestration</option>
                  <option value="Reinforcement Learning Stack">Reinforcement Learning Stack</option>
                  <option value="Other Custom Architectures">Other Custom Architectures</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                  Estimated Budget Range
                </label>
                <select
                  required
                  name="budget"
                  value={fields.budget}
                  onChange={set('budget')}
                  className="contact-select bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer w-full"
                >
                  <option value="" disabled hidden>Select budget range...</option>
                  <option value="Exploratory / Not Sure">Exploratory / Not Sure</option>
                  <option value="Under $10,000 / month">Under $10,000 / month</option>
                  <option value="$10,000 - $30,000 / month">$10,000 – $30,000 / month</option>
                  <option value="$30,000 - $100,000 / month">$30,000 – $100,000 / month</option>
                  <option value="$100,000+ / month (Enterprise)">$100,000+ / month (Enterprise)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Message textarea */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase font-favorit tracking-wider text-white/50">
                Detailed Project Scope &amp; Custom Requirements
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your systems automation goals, custom integration pipelines, or specific compute needs..."
                rows={4}
                value={fields.message}
                onChange={set('message')}
                className="bg-black/40 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors resize-none w-full"
              />
            </div>

            {/* Error banner */}
            {status === 'error' && (
              <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                  <path d="M8 5V8M8 11H8.01M2 8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14C4.686 14 2 11.314 2 8Z" stroke="currentColor" strokeLinecap="square"/>
                </svg>
                <span>{errorMsg || 'Failed to send. Please try again or email us directly.'}</span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap font-favorit uppercase transition-colors hover:cursor-pointer bg-white text-black min-h-10 px-5 py-3 text-xs leading-none self-start mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  {/* Spinner */}
                  <svg
                    className="animate-spin w-3 h-3 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  {status === 'error' ? 'Try Again' : 'Submit Message'}
                  <div className="w-3 h-3 overflow-hidden relative ml-1">
                    <div className="flex -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                      </svg>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0">
                        <path d="M4.75 9.125L7.875 6L4.75 2.875" stroke="currentColor" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
