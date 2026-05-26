import type { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Solutions — Eledralabs',
  description:
    'Precision-engineered Web and AI solutions. Custom websites, AI voice agents, LLM chatbots, and IT automation built for next-generation businesses.',
}

export default function SolutionsPage() {
  return (
    <div className="pt-[6.5rem]">
      <Services showTestimonials={true} />
    </div>
  )
}
