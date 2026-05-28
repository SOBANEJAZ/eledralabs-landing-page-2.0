import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Eledralabs',
  description:
    'Eledralabs Terms of Service. The terms governing your access to and use of our website, APIs, and automation platform services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="px-5">
      <main className="legal-container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <div className="legal-meta">Last Updated: May 25, 2026</div>

          <p>
            Welcome to Eledralabs. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
            and use of the website, APIs, automation workflows, AI tools, and architectural software
            services (collectively, the &ldquo;Services&rdquo;) provided by Eledra Labs, Inc.
            (&ldquo;Eledralabs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>

          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not
            agree to these Terms, do not access or use the Services.
          </p>

          <h2>1. Access to the Services</h2>
          <p>
            Subject to these Terms, Eledralabs grants you a limited, non-transferable, non-exclusive,
            revocable license to access and use the Services for your internal business operations. We
            reserve the right to modify, suspend, or discontinue any aspect of our Services at any
            time without notice.
          </p>

          <h2>2. Acceptable Use Policy</h2>
          <p>You agree not to use the Services to:</p>
          <ul>
            <li>Violate any local, state, national, or international laws or regulations.</li>
            <li>
              Reverse engineer, decompile, or attempt to extract the source code of our proprietary
              automation algorithms and AI systems.
            </li>
            <li>
              Access or tamper with non-public areas of the Services or our host servers.
            </li>
            <li>
              Deploy automated scripts, bots, scrapers, or spiders that place an unreasonable or
              disproportionately large load on our server infrastructure.
            </li>
            <li>
              Evade security features or perform unauthorized vulnerability or penetration testing.
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All intellectual property rights in the Services, including but not limited to software
            code, website architecture, visual interfaces, design assets, and mathematical algorithms,
            belong exclusively to Eledralabs or our licensors. You may not copy, modify, distribute,
            or create derivative works of our proprietary content without explicit written consent.
          </p>

          <h2>4. Term and Termination</h2>
          <p>
            These Terms will remain in effect until terminated. Eledralabs reserves the right to
            terminate your access to the Services at any time, with or without cause, and without
            prior notice, if we believe you have breached these Terms or pose a security risk to our
            systems.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELEDRALABS AND ITS AFFILIATES, OFFICERS,
            EMPLOYEES, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE,
            INCURRED BY YOU, WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO OR
            USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
            ELEDRALABS EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2>7. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and any dispute arising out of or related to them shall be governed by and
            construed in accordance with the laws of the State of Delaware, without regard to its
            conflict of law principles. Any legal action arising hereunder shall be brought exclusively
            in the state or federal courts located in Wilmington, Delaware.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please reach out to us at{' '}
            <Link className="legal-link" href="mailto:info@eledralabs.com">
              info@eledralabs.com
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
