import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Lern² — Kassel'de Özel Ders ve Dil Desteği",
  description:
    "Kassel'de matematik, Almanca ve birçok derste bireysel özel ders. Birçok aile için BuT ile ücretsiz. Hemen WhatsApp üzerinden iletişime geçin.",
  alternates: {
    canonical: '/tr',
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
    title: "Lern² — Kassel'de Özel Ders ve Dil Desteği",
    description:
      "Kassel'de matematik, Almanca ve birçok derste bireysel özel ders. Birçok aile için BuT ile ücretsiz.",
    url: 'https://www.lern2.com/tr',
    locale: 'tr_TR',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Lern²' }],
  },
  robots: { index: true, follow: true },
}

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
