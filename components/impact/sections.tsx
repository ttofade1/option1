"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, IMPACT_KEYS, n, type SourceKey } from "@/components/sources"
import { Users, Globe, Heart, Lightbulb } from "lucide-react"

const impactAreas: {
  icon: typeof Users
  title: string
  content: React.ReactNode
  image: string
  imageAlt: string
  citeKeys: SourceKey[]
  storyHref?: string
}[] = [
  {
    icon: Users,
    title: "On Students",
    content: `In 2017, a student left a wrapped gift on her desk that she would not open for years: a daily reminder that students must remain top of mind, top of heart, and top of focus in every decision.`,
    storyHref: "/#gift",
    image: "students-selfie.jpg",
    imageAlt: "Prof. Tofade with pharmacy students at a conference",
    citeKeys: ["REFLECTS"],
  },
  {
    icon: Globe,
    title: "On the Pharmacy Profession",
    content: <>As the first Black woman President of the <a href="https://www.fip.org" target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-2 hover:text-gold">FIP</a> Academic Pharmacy Section, Prof. Tofade shaped pharmacy education policy for a global federation representing over five million pharmacists. As Chair of the AACP Council of Deans, she advanced accreditation standards across U.S. institutions. As recipient of the ASHP Donald E. Francke Medal, the field's highest honour for international contributions, she is recognized as someone who moved the entire profession forward. Under her leadership, two institutions achieved the maximum possible accreditation terms for their programs.</>,
    image: "francke-medal.jpeg",
    imageAlt: "Prof. Tofade with the ASHP Donald E. Francke Medal",
    citeKeys: ["FIP", "ASHP_FRANCKE"],
  },
  {
    icon: Heart,
    title: "On Economic Development & Community",
    content: `Prof. Tofade believes institutions do not end at their walls. Under her leadership, ACPHS expanded the Collaboratory in Albany's South End, addressing health disparities in a medically underserved neighbourhood; and the Stack Family Center for Biopharmaceutical Education and Training (CBET), backed by Empire State Development funding and an FDA contract, building Albany's biopharma workforce pipeline.

The ACPHS–Russell Sage merger, announced under her leadership, is the college’s single largest contribution to regional economic development: a comprehensive university of ~4,000 students with $246M in combined assets, positioned to anchor health professions education in the Capital Region for decades.`,
    image: "writing.jpeg",
    imageAlt: "Prof. Tofade at community event",
    citeKeys: ["PARTNERSHIPS"],
  },
  {
    icon: Lightbulb,
    title: "On Mentorship & Leadership Development",
    content: `She honors the mentors who invested in her when she was early in her career, and pays that investment forward through direct coaching, Global Women Leaders Inc., and two decades of quietly shaping professionals who now lead institutions of their own.`,
    image: "FIP.jpeg",
    imageAlt: "Prof. Tofade with pharmacy professionals",
    citeKeys: [],
  },
]

export function ImpactSections() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {impactAreas.map((area, index) => (
          <div
            key={area.title}
            className={`mb-24 last:mb-0 ${index > 0 ? "pt-24 border-t border-divider" : ""}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-label" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-text-heading">
                    {area.title}
                  </h2>
                </div>
                <div className="text-text-body leading-relaxed whitespace-pre-line">
                  {area.content}
                  {area.citeKeys.map((key) => (
                    <Cite key={key} n={n(IMPACT_KEYS, key)} href={SOURCES[key].href} />
                  ))}
                  {area.storyHref && (
                    <Link
                      href={area.storyHref}
                      className="mt-4 block text-sm font-medium uppercase tracking-[0.14em] text-label hover:text-gold transition-colors"
                    >
                      Read the story →
                    </Link>
                  )}
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                delay={100}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover"
                    style={{objectPosition: "center 10%"}}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
