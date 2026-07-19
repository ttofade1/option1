"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, HOME_KEYS, n } from "@/components/sources"
import { ArrowRight } from "lucide-react"

const STRATEGIC_PLAN = SOURCES.STRATEGIC_PLAN.href

const pillars = [
  "Academic Excellence",
  "Quality Student Experiences",
  "People and Culture",
  "Engaging with Communities",
  "Financial Strength & Stewardship",
]

export function StrategicPlanSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-4">
                A Roadmap for the Future
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-heading leading-tight mb-6">
                The 2024&ndash;2029 ACPHS Strategic Plan
                <Cite n={n(HOME_KEYS, "STRATEGIC_PLAN")} href={SOURCES.STRATEGIC_PLAN.href} />
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-text-body leading-relaxed mb-8">
                Launched under Prof. Tofade&apos;s leadership, the strategic plan set the
                institution&apos;s roadmap for the future of health education, research, and
                community impact, anchoring the transformation that defined her presidency.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <a
                href={STRATEGIC_PLAN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-cream px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
              >
                Explore the Strategic Plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-cream-card border border-border p-8">
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-6">
                Five Strategic Pillars
              </p>
              <ul className="space-y-4">
                {pillars.map((pillar, i) => (
                  <li key={pillar} className="flex items-center gap-4">
                    <span className="font-serif text-2xl text-gold shrink-0 w-8">
                      {i + 1}
                    </span>
                    <span className="text-text-heading font-medium">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
