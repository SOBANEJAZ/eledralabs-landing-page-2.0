import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Eledralabs',
  description:
    'Eledralabs Privacy Policy. Learn about how we handle, collect, protect, and process your personal and business data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <div className="legal-meta">Last Updated: May 25, 2026</div>

          <p>
            At Eledralabs, your privacy is a paramount core value. This Privacy Policy
            (&ldquo;Policy&rdquo;) details how Eledra Labs, Inc. (&ldquo;Eledralabs&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, protects, and
            discloses personal information when you access or use our websites, AI automation
            platforms, and software integrations (collectively, our &ldquo;Services&rdquo;).
          </p>

          <p>
            By using the Services, you agree to the collection and use of information in accordance
            with this Policy. If you do not agree with any terms in this Policy, please do not use
            our Services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>To run our high-precision automations and optimize your user experience, we may collect:</p>
          <ul>
            <li>
              <strong>Direct Contact Data:</strong> Name, professional email address, company name,
              telephone number, and message details you provide when using our contact or consultation
              booking forms.
            </li>
            <li>
              <strong>Usage and Performance Metrics:</strong> Technical metadata collected via browser
              APIs (IP address, operating system, browser type, referral URLs, page exit pathways, and
              micro-interaction events).
            </li>
            <li>
              <strong>Analytics and Diagnostic Data:</strong> Site performance, load speeds, and error
              diagnostics provided by clean, anonymous analytic integrations (such as Vercel Speed
              Insights and Vercel Analytics).
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Eledralabs processes personal data for the following commercial purposes:</p>
          <ul>
            <li>To build, optimize, and maintain our active AI and Web workflow Services.</li>
            <li>
              To respond directly to inquiries, schedule requested consultations, and manage ongoing
              customer relationships.
            </li>
            <li>
              To monitor and analyze speed, system health, and website diagnostics to maintain a
              zero-friction user experience.
            </li>
            <li>To prevent server abuse, combat spam, and secure our hosting infrastructure.</li>
          </ul>

          <h2>3. Data Storage, Retention, and Security</h2>
          <p>
            We host our digital systems on highly secured, enterprise-grade cloud providers. We retain
            personal data only as long as necessary to fulfill the business operations or comply with
            legal requirements. We employ industry-standard encryption protocols (SSL/TLS) for all
            data in transit to ensure your private data is secure.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We strictly do NOT sell or rent your personal data to third-party brokers. We may share
            information with reliable subprocessors (like hosting platforms and analytics integrations)
            exclusively to perform operational functions on our behalf. All service providers are
            legally bound to protect your data under strict data privacy agreements.
          </p>

          <h2>5. Cookies and Tracking Mechanisms</h2>
          <p>
            We use essential cookies to maintain system states and authenticate dashboard sessions. For
            performance metrics, we rely on anonymous analytic services that capture user events
            without creating persistent personal profiles or tracking you across external sites.
          </p>

          <h2>6. Your Data Rights</h2>
          <p>
            Depending on your geographic location (e.g., EU GDPR or California CCPA), you may hold
            legal rights to:
          </p>
          <ul>
            <li>Request access to the personal data we store on your behalf.</li>
            <li>Request corrections to inaccurate personal records.</li>
            <li>
              Request deletion of your data from our active marketing and operations systems.
            </li>
            <li>Withdraw previously granted consent at any time.</li>
          </ul>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect shifts in technology,
            legislation, or operations. Any changes will be posted directly to this page with an
            updated &ldquo;Last Updated&rdquo; timestamp. We encourage you to review this page
            regularly.
          </p>

          <h2>8. Contact Our Data Protection Team</h2>
          <p>
            For inquiries, details on data sub-processors, or to exercise your privacy rights, please
            contact our team at{' '}
            <Link className="legal-link" href="mailto:support@eledralabs.com">
              support@eledralabs.com
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
