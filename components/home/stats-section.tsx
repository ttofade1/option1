"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [

  {
    year: "2023, 2024, 2025",
    value: "Power 50 × 3",
    label: "Albany Business Review Power 50 three consecutive years",
  },
  {
    year: "Since 2002",
    value: "20+",
    label: "Years building highly performant teams",
  },
  {
    year: "2024",
    value: "210%",
    label: "Year-over-year increase in PharmD Year-1 deposits since 2022",
  },
  {
    year: "2021",
    value: "6 Continents",
    label: "International partnerships spanning every inhabited continent",
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
            Key Statistics
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
