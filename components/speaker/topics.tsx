"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Mic, Users } from "lucide-react"

const topics = [
  "Transformational leadership in higher education: building institutions that outlast you",
  "Leading the merger: lessons from ACPHS and the future of higher education consolidation",
  "Health equity, pharmacy practice, and the future of healthcare workforce",
  "Women in leadership: breaking barriers across generations",
  "Global health workforce development: building partnerships across six continents",
  "Diversity, equity, and inclusion as institutional strategy",
  "The pharmacist as a leader: from clinical practice to the executive suite",
  "Mentorship, sponsorship, and the architecture of a meaningful career",
  "Accreditation excellence as a leadership discipline",
]

const audiences = [
  "American Association of Colleges of Pharmacy (AACP) and member institutions",
  "American Society of Health-System Pharmacists (ASHP) and affiliated organisations",
  "International Pharmaceutical Federation (FIP) and global pharmacy bodies",
  "Higher education leadership conferences and university convenings",
  "Healthcare system executive leadership forums",
  "Women in leadership summits and professional development conferences",
  "Board governance and trustee education events",
  "Nigerian diaspora and African academic networks",
]

export function SpeakingTopics() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Audiences */}
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Primary Audiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-12">
            Who Prof. Tofade Speaks To
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={50}>
          <div className="mb-16 p-8 bg-cream-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-text-heading">Audiences</h3>
            </div>
            <ul className="space-y-3 ml-16">
              {audiences.map((audience, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <span className="text-text-body text-sm">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Speaking Topics */}
        <AnimatedSection delay={100}>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-12">
            Speaking Topics
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <AnimatedSection key={topic} delay={150 + index * 30}>
              <div className="flex gap-4 p-6 bg-cream-card border border-border h-full">
                <Mic className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-text-heading">{topic}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-16 p-8 bg-gold-light border border-gold/30 text-center">
            <p className="text-label font-medium mb-2">Past Speaking Engagements</p>
            <p className="text-text-body text-sm">
              Prof. Tofade has spoken at AACP, ASHP, FIP conferences, HBCU summits, health equity forums, institutional inaugurations, and commencement ceremonies across the United States and internationally.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
