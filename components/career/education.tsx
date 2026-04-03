"use client"

import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap } from "lucide-react"

const education = [
  { degree: "BPharm", institution: "Obafemi Awolowo University, Ile-Ife, Nigeria" },
  { degree: "MS in Pharmacy Practice", institution: "UNC Eshelman School of Pharmacy, Chapel Hill (1994)" },
  { degree: "Doctor of Pharmacy (PharmD)", institution: "UNC Eshelman School of Pharmacy, Chapel Hill (1997)" },
  { degree: "Clinical Pharmacokinetics Residency", institution: "UNC Chapel Hill (1994)" },
  { degree: "ASHP-Accredited Residency", institution: "UNC Hospitals (1995)" },
  { degree: "Academic Leadership Academy", institution: "Penn State" },
  { degree: "Management Development Programme", institution: "Harvard Graduate School of Education" },
  { degree: "Crisis Leadership in Higher Education", institution: "Harvard Kennedy School (2020)" },
]

export function EducationSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase text-center mb-4">
            Academic Background
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-16">
            Education
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <AnimatedSection key={item.degree} delay={index * 50}>
              <div className="flex gap-4 p-6 border border-navy-muted/20 hover:border-gold/50 transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-cream font-medium mb-1">{item.degree}</h3>
                  <p className="text-navy-muted text-sm">{item.institution}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
