"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Cite, References, type Source } from "@/components/cite"

const OFFICE = "https://www.acphs.edu/about/people/leadership/office-of-the-president/"
const REFLECTS = "https://thedig.howard.edu/all-stories/toyin-tofade-reflects-her-tenure-dean-college-pharmacy"
const BUSINESS = "https://www.bizjournals.com/albany/news/2022/11/30/toyin-tofade-albany-college-of-pharmacy.html"

const stats = [
  {
    year: "2025",
    value: "Carnegie",
    label: "Carnegie Research University classification for ACPHS",
    cite: 1,
    href: OFFICE,
  },
  {
    year: "2024, 2025",
    value: "9",
    label: "new academic programs launched in two years",
    cite: 1,
    href: OFFICE,
  },
  {
    year: "2025",
    value: "61%",
    label: "increase in giving & increased alumni engagement",
    cite: 1,
    href: OFFICE,
  },
  {
    year: "2025",
    value: "80%",
    label: "medical school placement rate for students",
  },
  {
    year: "2023, 2024, 2025",
    value: "Power 50 × 3",
    label: "Albany Business Review Power 50 three consecutive years",
    cite: 2,
    href: BUSINESS,
  },
  {
    year: "Since 2002",
    value: "20+ Years",
    label: "Building High-Performing Teams",
  },
  {
    year: "2024",
    value: "210%",
    label: "Year-over-year increase in PharmD Year-1 deposits since 2022",
    cite: 1,
    href: OFFICE,
  },
  {
    year: "2016–2022",
    value: "6 Continents",
    label: "International partnerships built at Howard, spanning every inhabited continent",
    cite: 3,
    href: REFLECTS,
  },
]

const sources: Source[] = [
  { n: 1, label: "ACPHS — Office of the President, Prof. Toyin Tofade (tenure statistics)", href: OFFICE },
  { n: 2, label: "Albany Business Review Power 50", href: BUSINESS },
  { n: 3, label: "The Dig, Howard University — Toyin Tofade Reflects on Her Tenure as Dean of the College of Pharmacy", href: REFLECTS },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase text-center mb-4">
            By The Numbers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-16">
            Key Statistics Under Her Leadership
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 50}>
              <div className="text-center p-6 border border-navy-muted/20 hover:border-gold/50 transition-colors duration-300 h-full flex flex-col justify-start">
                <p className="text-gold/70 text-xs font-medium mb-2">{stat.year}</p>
                <p className="font-serif text-3xl lg:text-4xl text-gold mb-3">
                  {stat.value}
                </p>
                <p className="text-navy-muted text-sm leading-relaxed">
                  {stat.label}
                  {stat.cite && stat.href && <Cite n={stat.cite} href={stat.href} />}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <References sources={sources} variant="dark" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
