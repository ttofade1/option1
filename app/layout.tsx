import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Toyin Tofade | Healthcare Leader, Academic President, Pastor',
  description: 'Dr. Toyin Tofade is a visionary leader at the intersection of healthcare, higher education, and faith. 10th President of Albany College of Pharmacy and Health Sciences.',
  generator: 'v0.app',
  keywords: ['Dr. Toyin Tofade', 'ACPHS President', 'Healthcare Leadership', 'Pharmacy Education', 'Women in Leadership'],
  openGraph: {
    title: 'Dr. Toyin Tofade | Healthcare Leader, Academic President, Pastor',
    description: 'A visionary leader at the intersection of healthcare, higher education, and faith.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0C3050',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
