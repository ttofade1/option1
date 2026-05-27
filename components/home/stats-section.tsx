"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [
  {
    year: "2026",
    value: "President Emeritus",
    label: "ACPHS — Concluding four-year presidential term June 30, 2026",
  },
  {
    year: "2025",
    value: "~4,000",
    label: "Students — Merger with Russell Sage College (target Fall 2027)",
  },
  {
    year: "2025",
    value: "Carnegie R2",
    label: "Earned Carnegie Research Institution classification — first in ACPHS history",
  },
  {
    year: "2025",
    value: "Power 50 × 3",
    label: "Albany Business Review Power 50 three consecutive years (2023, 2024, 2025)",
  },
  {
    year: "2024",
    value: "7",
    label: "New programs — Largest single-year academic expansion in ACPHS's 143-year history",
  },
  {
    year: "2024",
    value: "+210%",
    label: "Year-over-year increase in PharmD Year-1 deposits since 2022",
  },
  {
    year: "2022",
    value: "6",
    label: "Continents — International partnerships spanning every inhabited continent",
  },
  {
    year: "2018",
    value: "First",
    label: "Black woman named Fellow of the International Pharmaceutical Federation",
  },
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
            Key Statistics — With Years
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
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
