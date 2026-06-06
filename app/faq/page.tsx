import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'FAQ — EledraLabs',
  description:
    'Frequently asked questions about Eledra Labs\' AI automation, voice agents, LLM chatbots, and IT service automation platforms.',
}

export default function FAQPage() {
  return (
    <div className="pt-[7.5rem]">
      <FAQ />
    </div>
  )
}
