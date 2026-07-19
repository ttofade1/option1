"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Award } from "lucide-react"
import { Cite, References, type Source } from "@/components/cite"

const OFFICE = "https://www.acphs.edu/about/people/leadership/office-of-the-president/"
const UNC_ECKEL = "https://pharmacy.howard.edu/articles/howard-pharmacy-dean-tofade-honored-university-north-carolina"
const WIKI = "https://en.wikipedia.org/wiki/Toyin_Tofade"

const honors = [
  { year: "2023, 2024, 2025", title: "Albany Business Review Power 50", cite: 1, href: OFFICE },
  { year: "2022-2023", title: "Chair of the Council of Deans", description: "American Association of Colleges of Pharmacy", cite: 3, href: WIKI },
  { year: "2022", title: "Donald E. Francke Medal: American Society for Health System Pharmacists", description: "For significant international contributions to pharmacy practice", cite: 3, href: WIKI },
  { year: "2022", title: "Top 25 Women Leaders in Healthcare Education", description: "Women We Admire" },
  { year: "2021-2025", title: "President", description: "FIP Academic Pharmacy Section" },
  { year: "2021", title: "UNC Eshelman Pharmacy Alumni Distinguished Service Award" },
  { year: "2020", title: "A. Richard Bliss Jr. Grand Council Citation of Appreciation", description: "Kappa Psi Pharmaceutical Fraternity" },
  { year: "2019", title: "Fred M. Eckel Pharmacy Leadership Award", description: "By her account, the first Black person to receive this honor", cite: 2, href: UNC_ECKEL },
  { year: "2018", title: "FIP Fellow", description: "The first Black woman named Fellow of the International Pharmaceutical Federation", cite: 3, href: WIKI },
  { year: "2016", title: "Excellence & Distinction in Medicine and Health", description: "Christian Association of Nigerian Americans" },
  { year: "2008", title: "Wake AHEC Mentor of the Year" },
]



export function HonorsSection() {
  return (
    <section className="py-24 bg-cream-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Recognition
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">
            Selected Honors & Recognitions
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {honors.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 50}>
              <div className="flex gap-4 p-6 bg-cream border border-border hover:border-gold transition-colors duration-300">
                <Award className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-text-heading font-medium">
                      {item.title}
                    </h3>
                    <span className="text-gold text-sm font-medium shrink-0">{item.year}</span>
                  </div>
                  {item.description && (
                    <p className="text-text-body text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
