import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Security — Eledralabs',
  description:
    'How Eledralabs protects its website: encrypted connections, minimal data collection, trusted providers, and responsible disclosure.',
}

export default function SecurityPage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Security at Eledralabs</h1>
          <div className="legal-meta">Last Updated: June 6, 2026</div>

          <p>
            We keep our website simple and low-risk. It is a static site with no user accounts or
            login, which keeps its attack surface small. Below is how we protect it and the limited
            information it handles.
          </p>

          <h2>1. Encrypted Connections</h2>
          <p>
            All traffic to and from the site is served over HTTPS and encrypted in transit using
            TLS.
          </p>

          <h2>2. Minimal Data</h2>
          <p>
            We do not run customer databases or store personal profiles. The only information we
            receive is what you send through the contact form, which is delivered to us by email via
            our forms provider (EmailJS).
          </p>

          <h2>3. Trusted Providers</h2>
          <p>
            The site is served by a reputable cloud hosting provider, and we rely on established
            third parties (such as EmailJS and our analytics tools) that maintain their own security
            programs.
          </p>

          <h2>4. Dependencies</h2>
          <p>
            We keep the site&apos;s software dependencies up to date and monitor for known
            vulnerabilities so that fixes can be applied promptly.
          </p>

          <h2>5. Responsible Disclosure</h2>
          <p>
            If you find a potential security issue, please report it so we can address it. We
            appreciate researchers who disclose responsibly:
          </p>
          <ul>
            <li>
              Email details to{' '}
              <Link className="legal-link" href="mailto:contact@eledralabs.com">
                contact@eledralabs.com
              </Link>
              .
            </li>
            <li>Include clear steps to reproduce the issue.</li>
            <li>Give us reasonable time to investigate and fix before publishing.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
