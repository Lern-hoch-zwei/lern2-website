import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lern2.com'),
  title: 'Lern² — Nachhilfe & Sprachförderung in Kassel',
  description:
    'Individuelle Nachhilfe in Mathe, Deutsch und vielen weiteren Fächern in Kassel. Für viele Familien kostenlos über BuT. Jetzt unverbindlich per WhatsApp anfragen.',
  keywords: [
    'Nachhilfe Kassel',
    'Sprachförderung Kassel',
    'BuT Nachhilfe',
    'kostenlose Nachhilfe Kassel',
    'Mathe Nachhilfe Kassel',
    'Deutsch lernen Kassel',
    'Lern²',
  ],
  alternates: {
    canonical: '/',
    languages: {
      de: '/',
      ar: '/ar',
      tr: '/tr',
      fa: '/fa',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Lern²',
    title: 'Lern² — Nachhilfe & Sprachförderung in Kassel',
    description:
      'Individuelle Nachhilfe in Mathe, Deutsch und mehr in Kassel. Für viele Familien kostenlos über BuT.',
    url: 'https://www.lern2.com/',
    locale: 'de_DE',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Lern²' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
