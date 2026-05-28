"use client"

import { AnimatedSection } from "@/components/animated-section"

const timelineItems = [
  {
    years: "1994 – 2002",
    title: "Clinical Pharmacist, Specialist & Faculty",
    organization: "UNC Hospitals / UNC Eshelman School of Pharmacy",
    description: "• BPharm, Obafemi Awolowo University, Nigeria • MS Pharmacy Practice (1994) and PharmD (1997) from UNC Chapel Hill • Completed ASHP-accredited residency at UNC Hospitals and clinical pharmacokinetics residency. • Clinical Specialist, general medicine service; Clinical Associate Professor, UNC Eshelman School of Pharmacy.",
  },
  {
    years: "2002 – 2011",
    title: "Associate Director & Director, Pharmacotherapy Services",
    organization: "Wake AHEC, Raleigh, NC",
    description: "• Led pharmacotherapy services and clinical training across North Carolina's Wake region. • Named Wake AHEC Mentor of the Year (2008). • Published foundational research on Co-active Coaching in pharmacy education.",
  },
  {
    years: "2011 – 2016",
    title: "Associate Professor & Assistant Dean",
    organization: "University of Maryland School of Pharmacy, Baltimore",
    description: "• Associate Professor, Pharmacy Practice and Science. • Assistant Dean, Experiential Learning Program overseeing statewide clinical education.",
  },
  {
    years: "2016 – 2022",
    title: "Dean & Professor",
    organization: "Howard University College of Pharmacy, Washington, D.C.",
    description: "• Enrollment nearly doubled; alumni giving rose 70%; residency match rate rose from 36% to 50%+ • Built 18 international partnerships across 16 countries and 6 continents. • Secured landmark FDA–GlaxoSmithKline regulatory affairs fellowship (first of its kind). • Achieved maximum ACPE re-accreditation: 8 years (through 2029). • Established Alfred & Toyin Tofade Aspiring Leaders Endowed Fund upon departure.",
  },
  {
    years: "2022 – 2026",
    title: "10th President",
    organization: "Albany College of Pharmacy and Health Sciences, Albany, NY",
    description: "• First Black woman elected president in ACPHS's 143-year history. • Launched 2024–2029 Strategic Plan; earned Carnegie Research University classification (2025). • Approved 7 new degree programs in 2024, largest single-year expansion in institutional history. • Introduced ACPHS Online, the college's first digital academic portfolio. • Applications +19%; PharmD deposits +210%; transfer admissions +714%. • Secured $1.9M FDA contract for mRNA vaccine training at CBET. • Led ACPHS–Russell Sage College merger announcement (April 2025).• Concluding presidential term June 30, 2026; continuing as President Emeritus from July 1, 2026.",
    highlight: true,
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
            Career Timeline
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
                  </h3>
                  <p className="text-label text-sm mb-3">{item.organization}</p>
                  <p className="text-text-body text-sm leading-relaxed whitespace-pre-line">
                    {item.description.replace(/ •/g, '\n•')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
