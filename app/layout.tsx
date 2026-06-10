import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lern² — Nachhilfe in Kassel',
  description: 'Individuelle Nachhilfe und Sprachförderung in Kassel — kostenlos über BuT',
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
