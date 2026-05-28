import type { Metadata } from 'next'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: 'Solutions — Eledralabs',
  description:
    'Industry-specific AI and web solutions for healthcare, real estate, and local businesses. Voice agents, LLM chatbots, and workflow automation tailored to your sector.',
}

export default function SolutionsPage() {
  return (
    <div className="pt-[7.5rem]">
      <Solutions />
    </div>
  )
}
