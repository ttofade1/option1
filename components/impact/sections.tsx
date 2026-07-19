"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Cite, References, type Source } from "@/components/cite"
import { Users, Globe, Heart, Lightbulb, ExternalLink } from "lucide-react"

const REFLECTS = "https://thedig.howard.edu/all-stories/toyin-tofade-reflects-her-tenure-dean-college-pharmacy"
const ENDOWED = "https://thedig.howard.edu/all-stories/departing-college-pharmacy-dean-toyin-tofade-establishes-endowed-fund-leadership-development"
const PARTNERSHIPS = "https://www.acphs.edu/news/partnerships-extend-colleges-reach/"
const WIKI = "https://en.wikipedia.org/wiki/Toyin_Tofade"

const impactAreas = [
  {
    icon: Users,
    title: "On Students",
    content: `In 2017, at the end of her first year as Howard Dean, a student placed a wrapped gift and a handwritten letter on her desk, calling her 'a ray of sunshine' and 'a stunning example of leadership.' She kept it wrapped for years as a daily reminder that students must remain 'top of mind, top of heart, top of focus in every decision.' She opened it only when she felt she had truly earned it.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Students-stand-together-with-Toyin-at-Inauguration-ceremony-1220x686-ne6iam4kURqbv93swDaNZvZqgqBWQD.jpg",
    imageAlt: "Prof. Tofade with students at inauguration",
    linkHref: REFLECTS,
    linkLabel: "Read the “ray of sunshine” story in The Dig",
    cite: 4,
  },
  {
    icon: Globe,
    title: "On the Pharmacy Profession",
    content: `As the first Black woman President of the FIP Academic Pharmacy Section, Prof. Tofade shaped pharmacy education policy for a global federation representing over five million pharmacists. As Chair of the AACP Council of Deans, she advanced accreditation standards across U.S. institutions. As recipient of the ASHP Donald E. Francke Medal, the field's highest honour for international contributions, she is recognized as someone who moved the entire profession forward. She has led two institutions to achieve the maximum possible accreditation years for their programs.`,
    image: "FIP.jpeg",
    imageAlt: "Prof. Tofade with pharmacy professionals",
    cite: 3,
    citeHref: WIKI,
  },
  {
    icon: Heart,
    title: "On Economic Development & Community",
    content: `Prof. Tofade believes institutions do not end at their walls. At ACPHS she expanded: the Collaboratory in Albany's South End, addressing health disparities in a medically underserved neighbourhood; and the Stack Family Center for Biopharmaceutical Education and Training (CBET), backed by Empire State Development funding and an FDA contract, building Albany's biopharma workforce pipeline.

Her leadership of the ACPHS–Russell Sage merger represents her single largest contribution to regional economic development: a comprehensive university of ~4,000 students with $246M in combined assets, positioned to anchor health professions education in the Capital Region for decades.`,
    image: "writing.jpeg",
    imageAlt: "Prof. Tofade at community event",
    cite: 2,
    citeHref: PARTNERSHIPS,
  },
  {
    icon: Lightbulb,
    title: "On Mentorship & Leadership Development",
    content: `She honors the mentors who invested in her when she was early in her career, and pays that investment forward through direct coaching, the Tofade Aspiring Leaders Endowed Fund at Howard, Global Women Leaders Inc., and two decades of quietly shaping professionals who now lead institutions of their own.`,
    image: "withKemi.jpeg",
    imageAlt: "Prof. Tofade mentoring",
    cite: 1,
    citeHref: ENDOWED,
  },
]

const sources: Source[] = [
  { n: 1, label: "The Dig, Howard University — Departing Dean Toyin Tofade Establishes Endowed Fund for Leadership Development", href: ENDOWED },
  { n: 2, label: "ACPHS News — Partnerships Extend College's Reach (ACPHS–Russell Sage merger)", href: PARTNERSHIPS },
  { n: 3, label: "Wikipedia — Toyin Tofade (FIP, AACP Council of Deans, Francke Medal)", href: WIKI },
  { n: 4, label: "The Dig, Howard University — Toyin Tofade Reflects on Her Tenure as Dean of the College of Pharmacy", href: REFLECTS },
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
                  {area.cite && area.citeHref && <Cite n={area.cite} href={area.citeHref} />}
                </div>
                {area.linkHref && (
                  <a
                    href={area.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-label hover:text-gold text-sm font-medium underline decoration-dotted underline-offset-2 transition-colors"
                  >
                    {area.linkLabel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
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

        <AnimatedSection>
          <References sources={sources} variant="light" />
        </AnimatedSection>
      </div>
    </section>
  )
}
