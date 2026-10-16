import type { Metadata } from 'next'
import { Playfair_Display, Inter, Libre_Baskerville, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { withBasePath } from "@/lib/base-path"

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

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const lato = Lato({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prof. Toyin Tofade | President Emerita, Board Strategist/Advisor, Executive Coach, Enterprise Consultant, Health Care Association Leader',
  description: 'Prof. Toyin Tofade is a visionary leader at the intersection of healthcare and higher education. 10th President of Albany College of Pharmacy and Health Sciences.',
  icons: {
    icon: [
      {
        url: withBasePath("/favicon.ico"),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: withBasePath("/favicon.ico"),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: withBasePath("/favicon.svg"),
        type: 'image/svg+xml',
      },
    ],
  },
  keywords: ['Prof. Toyin Tofade', 'ACPHS President', 'Healthcare Leadership', 'Pharmacy Education', 'Women in Leadership'],
  openGraph: {
    title: 'Prof. Toyin Tofade | President Emerita, Board Strategist/Advisor, Executive Coach, Enterprise Consultant, Health Care Association Leader',
    description: 'A visionary leader at the intersection of healthcare and higher education.',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${libreBaskerville.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
