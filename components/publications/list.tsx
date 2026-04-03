"use client"

import { AnimatedSection } from "@/components/animated-section"
import { FileText, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Best practices in pharmacy education: teaching to transform student learning",
    journal: "American Journal of Pharmaceutical Education",
    year: "2010",
  },
  {
    title: "Assessment of student pharmacists' knowledge and attitudes about pharmacogenomics",
    journal: "American Journal of Pharmaceutical Education",
    year: "2011",
  },
  {
    title: "Use of reflective practice to improve pharmacists' patient care outcomes",
    journal: "American Journal of Pharmaceutical Education",
    year: "2013",
  },
  {
    title: "Pharmacy education scholarship: from conception to publication",
    journal: "American Journal of Pharmaceutical Education",
    year: "2014",
  },
  {
    title: "The role of institutional culture in mentoring junior pharmacy faculty",
    journal: "American Journal of Pharmaceutical Education",
    year: "2015",
  },
  {
    title: "Development and validation of a competency framework for pharmacy education",
    journal: "American Journal of Pharmaceutical Education",
    year: "2016",
  },
  {
    title: "Global pharmacy education: challenges and opportunities",
    journal: "International Pharmaceutical Federation",
    year: "2018",
  },
  {
    title: "Transforming pharmacy education through strategic leadership",
    journal: "American Journal of Pharmaceutical Education",
    year: "2019",
  },
  {
    title: "Building diverse and inclusive pharmacy programs",
    journal: "American Journal of Pharmaceutical Education",
    year: "2020",
  },
  {
    title: "Crisis leadership in higher education: lessons from the pandemic",
    journal: "Academic Medicine",
    year: "2021",
  },
  {
    title: "International partnerships in pharmacy education: a framework for success",
    journal: "International Pharmaceutical Federation",
    year: "2022",
  },
  {
    title: "The future of health sciences education: innovation and accessibility",
    journal: "Journal of Health Sciences Education",
    year: "2024",
  },
]

export function PublicationsList() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <AnimatedSection>
          <div className="flex justify-center gap-12 mb-16 pb-16 border-b border-divider">
            <div className="text-center">
              <p className="font-serif text-5xl text-gold mb-2">1,000+</p>
              <p className="text-text-body text-sm">Research Citations</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-gold mb-2">50+</p>
              <p className="text-text-body text-sm">Publications</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Publications Grid */}
        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 30}>
              <div className="flex gap-4 p-6 bg-cream-card border border-border hover:border-gold transition-colors duration-300 group">
                <FileText className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-text-heading font-medium mb-1 group-hover:text-gold transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-text-body text-sm">
                    {pub.journal} • {pub.year}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Link to ResearchGate */}
        <AnimatedSection delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://www.researchgate.net/profile/Toyin-Tofade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-cream px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
            >
              View Full Publication List on ResearchGate
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
