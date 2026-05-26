import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Security — Eledralabs',
  description:
    'Security at Eledralabs. Learn how we protect your data and infrastructure with enterprise-grade encryption and zero-trust access controls.',
}

export default function SecurityPage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Security at Eledralabs</h1>
          <div className="legal-meta">Last Updated: May 25, 2026</div>

          <p>
            At Eledralabs, trust and system security are deeply embedded in our engineering culture.
            As we build precision-engineered Web and AI workflows for enterprise stacks, we enforce
            rigorous defensive controls to secure your data, integrations, and operational
            infrastructures.
          </p>

          <h2>1. Infrastructure Protection</h2>
          <p>
            Our automation engines and computing servers are hosted inside premier, ISO 27001, SOC 2
            Type II certified cloud environments. We leverage microservice isolation and containerized
            sandboxes to host and deploy automated workflows. No two customer tenants run inside the
            same computing segment, ensuring strict data boundaries.
          </p>

          <h2>2. Data Encryption</h2>
          <p>We secure data at all stages of its lifecycle:</p>
          <ul>
            <li>
              <strong>Data in Transit:</strong> All communication between your browsers, remote APIs,
              and Eledralabs servers is encrypted using TLS 1.3 cryptographic pathways. We enforce
              HTTP Strict Transport Security (HSTS) globally.
            </li>
            <li>
              <strong>Data at Rest:</strong> Internal operational databases, logs, and system
              credentials are encrypted using industry-leading AES-256 standard encryption keys.
            </li>
          </ul>

          <h2>3. API &amp; Third-Party Integration Security</h2>
          <p>
            Eledralabs integrates securely with your existing tech stacks. API keys, access secrets,
            and third-party oauth tokens are locked inside specialized hardware security modules (HSM)
            and cloud vaults. We strictly follow the Principle of Least Privilege (PoLP) when
            requesting API permissions from your platforms.
          </p>

          <h2>4. Zero-Trust Access Control</h2>
          <p>
            Only essential core engineers have administrative credentials to Eledralabs infrastructure.
            All employee access requires multi-factor authentication (MFA) and is authorized
            exclusively through audited, secure virtual private networks. System logs are captured and
            monitored continuously for anomalous activities.
          </p>

          <h2>5. Vulnerability Management</h2>
          <p>
            We actively scan our software dependencies, libraries, and containers for emerging security
            threats and security issues daily. Patching operations are implemented automatically.
            Additionally, we run continuous automated code analysis to detect potential architectural
            exploits before they hit production.
          </p>

          <h2>6. Responsible Vulnerability Disclosure</h2>
          <p>
            If you identify a potential security flaw or architectural exploit within our systems, we
            encourage you to report it immediately. We are dedicated to working constructively with
            independent security researchers who report issues responsibly:
          </p>
          <ul>
            <li>
              Please send encrypted vulnerability details directly to{' '}
              <Link className="legal-link" href="mailto:security@eledralabs.com">
                security@eledralabs.com
              </Link>
              .
            </li>
            <li>
              Provide a reproducible proof-of-concept to assist our patching team.
            </li>
            <li>
              Allow our team a reasonable timeframe to analyze and patch the exploit before publishing
              details publicly.
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
