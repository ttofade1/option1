import type { Metadata } from 'next'
import { Playfair_Display, Inter, Libre_Baskerville, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { withBasePath } from "@/lib/base-path"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

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
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: 'Prof. Toyin Tofade is a visionary leader at the intersection of healthcare and higher education. 10th President of Albany College of Pharmacy and Health Sciences.',
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico?v=3"), sizes: "any" },
      { url: withBasePath("/favicon-96x96.png?v=3"), type: "image/png", sizes: "96x96" },
      { url: withBasePath("/icon.svg?v=3"), type: "image/svg+xml" },
    ],
    apple: withBasePath("/apple-icon.png?v=3"),
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
}

// Structured data so search engines can tie the site to Prof. Tofade as a person (knowledge panel, rich results).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Toyin Tofade',
  honorificPrefix: 'Prof.',
  honorificSuffix: 'BPharm, MS, PharmD, CPCC, FFIP',
  url: SITE_URL,
  image: `${SITE_URL}/og-hero.jpg`,
  jobTitle: 'President Emerita and Professor',
  description: 'Global healthcare executive, academic leader, executive coach and transformational university president.',
  email: 'mailto:toyin@toyintofade.com',
  worksFor: {
    '@type': 'CollegeOrUniversity',
    name: 'Albany College of Pharmacy and Health Sciences',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Obafemi Awolowo University' },
    { '@type': 'CollegeOrUniversity', name: 'University of North Carolina at Chapel Hill' },
  ],
  memberOf: { '@type': 'Organization', name: 'International Pharmaceutical Federation (FIP)' },
  knowsAbout: ['Higher education leadership', 'Pharmacy education', 'Executive coaching', 'Board governance', 'Global health', 'Healthcare strategy'],
  sameAs: [
    'https://www.linkedin.com/in/toyin-tofade-a604181a/',
    'https://en.wikipedia.org/wiki/Toyin_Tofade',
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
