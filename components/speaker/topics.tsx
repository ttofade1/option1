"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Mic, Users } from "lucide-react"

const topics = [
  "Leadership and building high-performing teams",
  "Women in leadership: breaking barriers across generations",
  "Networking, mentorship, and sponsorship: the architecture of a meaningful career",
  "Leading institutional transformation, merger, and complex organisational change",
  "Building global partnerships across six continents",
  "Health equity and the future of the healthcare workforce",
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
              Prof. Tofade has spoken at national and international conferences, leadership summits, health equity forums, institutional inaugurations, and commencement ceremonies across the United States and abroad.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
