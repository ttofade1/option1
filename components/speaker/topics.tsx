"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Mic } from "lucide-react"

const topics = [
  "Transformational leadership in higher education",
  "Health equity, pharmacy practice, and the future of healthcare",
  "The pharmacist as a leader: from clinical practice to the C-suite",
  "Mentorship, community, and the architecture of a meaningful career",
]

export function SpeakingTopics() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">
            Speaking Topics
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <AnimatedSection key={topic} delay={index * 50}>
              <div className="flex gap-4 p-6 bg-cream-card border border-border">
                <Mic className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-text-heading">{topic}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-16 p-8 bg-gold-light border border-gold/30 text-center">
            <p className="text-label font-medium mb-2">Past Speaking Engagements</p>
            <p className="text-text-body text-sm">
              Dr. Tofade has spoken at national pharmacy conferences, HBCU summits, health equity forums, institutional inaugurations, and commencement ceremonies across the United States and internationally.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
