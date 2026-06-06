import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact — EledraLabs',
  description:
    'Get in touch with the Eledra Labs team. Tell us about your automation goals and we\'ll build a precision-engineered solution for your stack.',
}

export default function ContactPage() {
  return (
    <div className="pt-[7.5rem]">
      <Contact />
    </div>
  )
}
