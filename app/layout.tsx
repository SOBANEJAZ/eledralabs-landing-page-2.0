import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LenisInit from '@/components/LenisInit'
import TiltInit from '@/components/TiltInit'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eledralabs - Precision Automation for Your Stack',
  description:
    'Architectural automation. We build precision-engineered Web and AI workflows that reduce operational drag and automate critical systems.',
  openGraph: {
    title: 'Eledralabs - Precision Automation for Your Stack',
    description:
      'Architectural automation. We build precision-engineered Web and AI workflows that reduce operational drag and automate critical systems.',
    url: 'https://eledralabs.com',
    siteName: 'Eledralabs',
    images: [
      {
        url: 'https://eledralabs.com/icons/eledralabs-logo-transparent.png',
        width: 400,
        height: 400,
        alt: 'Eledra Labs',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eledralabs - Precision Automation for Your Stack',
    description:
      'Architectural automation. We build precision-engineered Web and AI workflows that reduce operational drag and automate critical systems.',
    images: ['https://eledralabs.com/icons/eledralabs-logo-transparent.png'],
  },
  icons: {
    icon: '/icons/eledralabs-logo-transparent.png',
    apple: '/icons/eledralabs-logo-transparent.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link rel="preload" as="image" href="/icons/eledralabs-logo.svg" />
        <link rel="preload" as="image" href="/backgrounds/lab.png" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVBMZCW5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />

        <div className="max-w-360 mx-auto px-4 md:px-5">
          <main className="min-h-screen">{children}</main>
        </div>

        <Footer />

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* Lenis Smooth Scroll */}
        <LenisInit />

        {/* 3D Tilt Hover Dynamic Initializer */}
        <TiltInit />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MLWHF2QR9E"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MLWHF2QR9E');
        `}</Script>
      </body>
    </html>
  )
}
