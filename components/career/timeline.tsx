"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, CAREER_KEYS, n } from "@/components/sources"
import { withBasePath } from "@/lib/base-path"

const timelineItems = [
  {
    years: "1994 – 2002",
    title: "Clinical Pharmacist, Specialist & Faculty",
    organization: "UNC Hospitals / UNC Eshelman School of Pharmacy",
    description: "",
  },
  {
    years: "2002 – 2011",
    title: "Associate Director & Director, Pharmacotherapy Services",
    organization: "Wake AHEC, Raleigh, NC",
    description: "",
  },
  {
    years: "2011 – 2016",
    title: "Associate Professor & Assistant Dean",
    organization: "University of Maryland School of Pharmacy, Baltimore",
    description: "",
  },
  {
    years: "2016 – 2022",
    title: "Dean & Professor",
    organization: "Howard University College of Pharmacy, Washington, D.C.",
    description: "",
    images: [
      { src: "/howard-sign.jpeg", alt: "Howard University College of Pharmacy sign" },
      { src: "/howard-highlights-banner.jpeg", alt: "Howard University College of Pharmacy highlights banner" },
    ],
  },
  {
    years: "2022 – 2026",
    title: "10th President",
    organization: "Albany College of Pharmacy and Health Sciences, Albany, NY",
    description:
      "• First Black woman appointed president in ACPHS's history. • Under her leadership, ACPHS launched the 2024–2029 Strategic Plan and earned Carnegie Research University classification (2025). • Nine new degree programs launched across 2024 and 2025, the largest expansion in institutional history. • The college introduced ACPHS Online, its first digital academic portfolio. • Applications +19%; PharmD year-one deposits +210%; transfer admissions +700%. • The college secured a $1.9M FDA contract for CBET. • Announced the ACPHS–Russell Sage College merger (April 2025). • Concluding her presidential term June 30, 2026; continuing as President Emerita from July 1, 2026.",
    highlight: true,
    images: [{ src: "/albany-president.jpeg", alt: "Prof. Tofade at the Albany College of Pharmacy and Health Sciences podium" }],
    cite: n(CAREER_KEYS, "OFFICE"),
    href: SOURCES.OFFICE.href,
  },
]

export function CareerTimeline() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Timeline
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">
            A Journey Across Institutions and Continents
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-divider" />

          {timelineItems.map((item, index) => (
            <AnimatedSection
              key={item.years}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div
                className={`relative mb-12 last:mb-0 pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    item.highlight
                      ? "bg-gold border-gold-light"
                      : "bg-cream border-divider"
                  }`}
                />

                {/* Card */}
                <div
                  className={`p-6 ${
                    item.highlight ? "bg-gold-light" : "bg-cream-card"
                  } border border-border`}
                >
                  <p className="text-gold font-medium text-sm mb-1">{item.years}</p>
                  <h3 className="font-serif text-xl text-text-heading mb-1">
                    {item.title}
                    {item.highlight && item.cite && item.href && (
                      <Cite n={item.cite} href={item.href} />
                    )}
                  </h3>
                  <p className="text-label text-sm mb-3">{item.organization}</p>
                  {item.description && (
                    <p className="text-text-body text-sm leading-relaxed whitespace-pre-line">
                      {item.description.replace(/ •/g, '\n•')}
                    </p>
                  )}
                  {item.images && (
                    <div className={`mt-4 grid gap-2 ${item.images.length > 1 ? "grid-cols-2" : ""}`}>
                      {item.images.map((image) => (
                        <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={withBasePath(image.src)}
                            alt={image.alt}
                            fill
                            sizes={item.images.length > 1 ? "200px" : "400px"}
                            className="object-cover object-[center_20%]"
                          />
                        </div>
                      ))}
                    </div>
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
