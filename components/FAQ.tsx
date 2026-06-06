'use client'

import { useState, useRef } from 'react'

const faqItems = [
  {
    num: '01',
    question: 'What frameworks and architecture does EledraLabs utilize for web engineering?',
    answer:
      'We design bespoke client-side web platforms and modular architectures using raw vanilla assets, high-performance edge execution pipelines, and zero-compile dynamic loading to ensure sub-millisecond initial content paints and absolute resilience under high operational traffic.',
  },
  {
    num: '02',
    question: 'How do EledraLabs\' custom AI voice agents operate over telephony nodes?',
    answer:
      'Our AI Voice Agents are deployed on highly resilient communication platforms coupled with sub-100ms ultra-low latency text-to-speech models and advanced call routing trees to perform telephony diagnostics, appointment bookings, and hot-triage call forwarding.',
  },
  {
    num: '03',
    question: 'What proprietary security standards are implemented for custom LLM deployments?',
    answer:
      'Every custom LLM chatbot we engineer is isolated within its own dedicated sandbox running inside strict Docker containers. We implement end-to-end TLS encryption, stateful evaluation layers, and rigorous prompt injection filters to prevent any data leaks or context escape.',
  },
  {
    num: '04',
    question: 'How do you optimize GPU compute costs for large-scale training and inference?',
    answer:
      'We utilize distributed orchestration templates and liquid spot reservation algorithms to automatically scale up container resources when compute rates drop, and selectively offload non-critical workloads to secondary clusters, reducing raw infrastructure expenditures by up to 45%.',
  },
  {
    num: '05',
    question: 'How long does it take to integrate EledraLabs automations into an existing stack?',
    answer:
      'Minor pipeline customisation and server hooks take between 2 to 5 business days. Enterprise-grade database synchronisation, fully custom LLM training integrations, and automated telecommunication routing models typically take 2 to 3 weeks from kickoff to deployment.',
  },
  {
    num: '06',
    question: 'Can EledraLabs agents interface with proprietary enterprise databases?',
    answer:
      'Yes, we write tailored interface layers and connection wrappers for Postgres, MongoDB, Oracle, and SAP databases. All queries are executed through parameterized schema interfaces with multi-region backup systems and real-time observability logs.',
    hidden: true,
  },
  {
    num: '07',
    question: 'What is the operational maintenance policy after project delivery?',
    answer:
      'Every bespoke architecture is backed by our standard 90-day comprehensive engineering warranty. We provide dedicated systems health dashboards, real-time error telemetry alerts, and prompt support responses to guarantee seamless operations.',
    hidden: true,
  },
  {
    num: '08',
    question: 'Do you support reinforcement learning workflow setups?',
    answer:
      'Absolutely. We specialize in designing high-throughput RLHF (Reinforcement Learning from Human Feedback) loop nodes, reward model parameterization pipelines, and parallel rollout tracking systems using dedicated Slurm and Kubernetes compute environments.',
    hidden: true,
  },
  {
    num: '09',
    question: 'How does client-side dynamic loading compare to traditional frameworks?',
    answer:
      'By bypassing heavy precompilation stacks and loading lightweight modular HTML partitions asynchronously, we eliminate the runtime drag associated with massive JavaScript bundles, resulting in near-perfect Lighthouse scores and superior crawlability.',
    hidden: true,
  },
  {
    num: '10',
    question: 'Can we migrate existing legacy workflows to your automated platform?',
    answer:
      'Yes. We analyze your current manual workflows, document the logic gates and data flows, and build robust API adapters or custom scripts to execute those tasks in the background with zero manual intervention or downtime.',
    hidden: true,
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const visibleItems = showMore ? faqItems : faqItems.filter((item) => !item.hidden)

  return (
    <section
      id="faq"
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
              src="/backgrounds/sprinkle-faq.svg"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-87.5 bg-linear-to-b from-surface to-transparent" />
          <p className="relative z-10 font-sans text-7 leading-120">
            <span className="text-white">FAQ.</span>
            <span className="text-white/50">
              {' '}Find answers to common questions about our intelligence platforms and systems
              architecture.
            </span>
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="border border-border p-8 bg-surface flex flex-col justify-center gap-8 font-sans">
        <div className="max-w-200 mx-auto w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2 mb-6">
            <span className="inline-flex w-fit text-2xs text-white/40 uppercase font-favorit tracking-widest leading-none bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              04 / Intelligence
            </span>
            <h3 className="text-2xl md:text-3xl text-white font-favorit uppercase tracking-wider leading-none mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="flex flex-col border-t border-white/10 faq-container">
            {visibleItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.num}
                  className={`border-b border-white/10 faq-item${item.hidden ? ' faq-animate-fade' : ''}`}
                >
                  <button
                    className="w-full flex items-center justify-between py-4.5 text-left font-favorit text-xs md:text-sm uppercase tracking-wider text-white focus:outline-none hover:text-white/80 transition-colors faq-trigger"
                    onClick={() => toggle(index)}
                  >
                    <span className="flex items-center gap-4 pr-4">
                      <span className="text-white/25 font-favorit text-2xs md:text-xs">{item.num}</span>
                      <span>{item.question}</span>
                    </span>
                    <svg
                      className="w-3.5 h-3.5 shrink-0 text-white/40 transform transition-transform duration-300 faq-icon"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="square"
                        strokeWidth="2"
                        d="M12 4v16m-8-8h16"
                      />
                    </svg>
                  </button>
                  <div
                    ref={(el) => { contentRefs.current[index] = el }}
                    className="faq-content transition-all duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight ?? 500}px`
                        : '0px',
                    }}
                  >
                    <p className="pb-5 text-xs md:text-sm leading-relaxed text-white/50 pl-8 font-sans max-w-180">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View More / Show Less */}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="group inline-flex items-center justify-center gap-2 font-favorit text-2xs uppercase tracking-widest text-white/70 border border-white/10 px-4 py-3 hover:bg-white/5 hover:text-white transition-colors duration-150 cursor-pointer self-center mt-4"
          >
            {showMore ? (
              <>
                Show Less
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 transition-transform duration-300 rotate-180 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M2.5 4L5 6.5L7.5 4"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="1.2"
                  />
                </svg>
              </>
            ) : (
              <>
                View More
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  <path
                    d="M2.5 4L5 6.5L7.5 4"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="1.2"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
