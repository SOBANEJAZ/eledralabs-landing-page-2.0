import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — EledraLabs',
  description:
    'The terms governing your use of the EledraLabs website and its contact and informational features.',
}

export default function TermsOfServicePage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <div className="legal-meta">Last Updated: June 6, 2026</div>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the EledraLabs website
            and its contact and informational features (the &ldquo;Site&rdquo;), provided by Eledra
            Labs, Inc. (&ldquo;EledraLabs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;). By using the Site, you agree to these Terms. If you do not agree,
            please do not use the Site.
          </p>

          <h2>1. Using the Site</h2>
          <p>
            The Site is provided for general information about EledraLabs and our services. You may
            browse it and contact us through the forms provided. We may change, suspend, or remove
            any part of the Site at any time.
          </p>

          <h2>2. Acceptable Use</h2>
          <p>When using the Site, you agree not to:</p>
          <ul>
            <li>Break any applicable law or regulation.</li>
            <li>Disrupt, overload, scrape, or attempt to gain unauthorized access to the Site.</li>
            <li>Probe or test the security of the Site without our written permission.</li>
            <li>Copy or reuse our content or branding without consent.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Site&apos;s content, design, and branding belong to EledraLabs. You may not
            reproduce or create derivative works from them without our written consent.
          </p>

          <h2>4. Services and Engagements</h2>
          <p>
            The Site is informational only. Any project or service we agree to provide for you is
            governed by a separate written agreement between us, not by these Terms.
          </p>

          <h2>5. Disclaimer and Liability</h2>
          <p>
            The Site is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum
            extent permitted by law, EledraLabs is not liable for any indirect or consequential
            damages arising from your use of the Site.
          </p>

          <h2>6. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes take effect when posted here, with
            an updated &ldquo;Last Updated&rdquo; date.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, without regard to its
            conflict-of-law rules.
          </p>

          <h2>8. Contact</h2>
          <p>
            Questions about these Terms? Reach us at{' '}
            <Link className="legal-link" href="mailto:contact@eledralabs.com">
              contact@eledralabs.com
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
