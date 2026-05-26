import type { Metadata } from 'next'
import Products from '@/components/Products'

export const metadata: Metadata = {
  title: 'Products — Eledralabs',
  description:
    'Developer-centric AI tools and infrastructure: Custom LLM Chatbots, Voice AI Agents, IT Service Automation, and AI Workflow Automation.',
}

export default function ProductsPage() {
  return (
    <div className="pt-[6.5rem]">
      <Products />
    </div>
  )
}
