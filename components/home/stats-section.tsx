"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [
  {
    value: "1,000+",
    label: "Research Citations",
  },
  {
    value: "7",
    label: "New academic programs launched in 2024—largest expansion in ACPHS history",
  },
  {
    value: "35%",
    label: "Increase in student deposits under her leadership",
  },
  {
    value: "18",
    label: "International partnerships at Howard, spanning 6 continents",
  },
  {
    value: "3x",
    label: "Named to Albany Business Review Power 50 (2023, 2024, 2025)",
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
            A Legacy of Impact
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.value} delay={index * 100}>
              <div className="text-center p-6 border border-navy-muted/20 hover:border-gold/50 transition-colors duration-300">
                <p className="font-serif text-4xl lg:text-5xl text-gold mb-3">
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
