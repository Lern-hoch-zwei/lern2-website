import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lern² — دروس تقوية ودعم لغوي في كاسل',
  description:
    'دروس خصوصية فردية في الرياضيات واللغة الألمانية والعديد من المواد في كاسل. مجانية لكثير من العائلات عبر BuT. تواصلوا معنا الآن عبر واتساب.',
  alternates: {
    canonical: '/ar',
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
    title: 'Lern² — دروس تقوية ودعم لغوي في كاسل',
    description:
      'دروس خصوصية فردية في الرياضيات واللغة الألمانية والعديد من المواد في كاسل. مجانية لكثير من العائلات عبر BuT.',
    url: 'https://www.lern2.com/ar',
    locale: 'ar_AR',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Lern²' }],
  },
  robots: { index: true, follow: true },
}

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
