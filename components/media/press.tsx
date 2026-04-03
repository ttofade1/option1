"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Newspaper, ExternalLink } from "lucide-react"

const pressItems = [
  {
    outlet: "Albany Business Review",
    title: "Power 50 Executive",
    years: "2023, 2024, 2025",
    link: "#",
  },
  {
    outlet: "Times Union",
    title: "Albany College of Pharmacy names new president",
    link: "#",
  },
  {
    outlet: "Vanguard News (Nigeria)",
    title: "Meet Toyin Tofade, first Black female president of a US college",
    link: "#",
  },
  {
    outlet: "Pharma News Online",
    title: "Toyin Tofade: Highflying Record-Breaker in Pharmacy Leadership",
    link: "#",
  },
  {
    outlet: "Premium Times Nigeria",
    title: "Nigerian woman becomes first Black female president of U.S. college",
    link: "#",
  },
]

export function PressSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Press Coverage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">
            Featured Articles
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {pressItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 50}>
              <a
                href={item.link}
                className="flex gap-4 p-6 bg-cream-card border border-border hover:border-gold transition-all duration-300 group"
              >
                <Newspaper className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gold text-sm font-medium mb-1">{item.outlet}</p>
                  <h3 className="text-text-heading font-medium group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  {item.years && (
                    <p className="text-text-body text-sm mt-1">{item.years}</p>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-divider group-hover:text-gold transition-colors shrink-0" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
