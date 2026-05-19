import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif, Syne } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BITRA — Inteligencia de negocio',
  description: 'Inteligencia de negocio para decisiones que importan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${syne.variable}`}
    >
      <body>
        {/* Site-wide atmospheric depth layer */}
        <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 15% 8%, rgba(31,100,120,0.055) 0%, transparent 65%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 55% 40% at 85% 92%, rgba(31,100,120,0.038) 0%, transparent 65%)' }}
          />
        </div>
        {children}
      </body>
    </html>
  )
}
