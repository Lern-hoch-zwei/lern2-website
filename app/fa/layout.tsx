import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lern² — تدریس خصوصی و تقویت زبان در کاسل',
  description:
    'تدریس خصوصی انفرادی در ریاضی، آلمانی و مواد دیگر در کاسل. برای بسیاری از خانواده‌ها از طریق BuT رایگان است. همین حالا از طریق واتساپ در تماس شوید.',
  alternates: {
    canonical: '/fa',
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
    title: 'Lern² — تدریس خصوصی و تقویت زبان در کاسل',
    description:
      'تدریس خصوصی انفرادی در ریاضی، آلمانی و مواد دیگر در کاسل. برای بسیاری از خانواده‌ها از طریق BuT رایگان است.',
    url: 'https://www.lern2.com/fa',
    locale: 'fa_AF',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Lern²' }],
  },
  robots: { index: true, follow: true },
}

export default function FaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
