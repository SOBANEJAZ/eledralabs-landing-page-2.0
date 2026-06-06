import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Eledralabs',
  description:
    'How Eledralabs collects, uses, and protects information on our website, including contact form submissions and analytics.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <div className="legal-meta">Last Updated: June 6, 2026</div>

          <p>
            This Privacy Policy explains how Eledra Labs, Inc. (&ldquo;Eledralabs&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles information when you
            use our website. By using the site, you agree to this Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <strong>Contact form details:</strong> the name, email, phone number, organization,
              area of interest, budget range, and message you choose to submit.
            </li>
            <li>
              <strong>Usage data:</strong> standard technical information such as IP address,
              browser, device, and pages viewed, collected through analytics.
            </li>
          </ul>

          <h2>2. How We Use It</h2>
          <p>
            We use this information to respond to your enquiries, follow up about our services, and
            keep the site working, secure, and easy to use.
          </p>

          <h2>3. Service Providers</h2>
          <p>
            We do not sell or rent your data. We share it only with the providers that help us run
            the site: EmailJS (delivers contact form submissions to us), Google Analytics and Google
            Tag Manager, Vercel Analytics and Speed Insights, and our hosting provider. Each handles
            data under its own terms.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our analytics providers may set cookies to measure site usage. You can block or delete
            cookies in your browser settings.
          </p>

          <h2>5. Retention and Security</h2>
          <p>
            We keep enquiry details only as long as needed to respond and follow up. All data is
            transmitted over an encrypted (HTTPS/TLS) connection.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on where you live (for example, under GDPR or CCPA), you may request access
            to, correction of, or deletion of your data, or withdraw consent. To do so, email us.
          </p>

          <h2>7. Changes</h2>
          <p>
            We may update this Policy from time to time. Changes take effect when posted here, with
            an updated &ldquo;Last Updated&rdquo; date.
          </p>

          <h2>8. Contact</h2>
          <p>
            For privacy questions or to exercise your rights, contact{' '}
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
