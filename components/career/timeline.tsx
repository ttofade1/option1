"use client"

import { AnimatedSection } from "@/components/animated-section"

const timelineItems = [
  {
    years: "1994 – 1997",
    title: "Clinical Pharmacist & Resident",
    organization: "UNC Hospitals, Chapel Hill, NC",
    description: "Completed MS in Pharmacy Practice (1994) and PharmD (1997) at UNC Chapel Hill. Completed two clinical residencies, including an ASHP accredited residency at UNC hospitals. Served as Pharmacist II and Clinical Specialist on the general medicine service.",
  },
  {
    years: "1997 – 2002",
    title: "Clinical Specialist & Faculty",
    organization: "UNC Hospitals & UNC Eshelman School of Pharmacy",
    description: "Continued as a Clinical Specialist and developed and taught the Internal Medicine pharmacy student rotation. Served concurrently as Clinical Associate Professor at UNC Eshelman School of Pharmacy.",
  },
  {
    years: "2000 – Present",
    title: "Cofounder & Senior Pastor",
    organization: "Jubilee Christian Church Int'l Chapel of Victory",
    description: "Cofounded the North Carolina branch of Jubilee Christian Church Int'l alongside her husband, Dr. Alfred Bisi Tofade, which has branches across North America, Africa, and Europe.",
    highlight: true,
  },
  {
    years: "2002 – 2011",
    title: "Associate Director & Director, Pharmacotherapy Services",
    organization: "Wake AHEC, Raleigh, NC",
    description: "Led pharmacotherapy services across North Carolina's Wake region, training practitioners and building community health capacity. Rose from Associate Director to Director of Pharmacotherapy Services. Named Wake AHEC Mentor of the Year (2008).",
  },
  {
    years: "2011 – 2016",
    title: "Associate Professor & Assistant Dean",
    organization: "University of Maryland School of Pharmacy, Baltimore",
    description: "Served as Associate Professor in Pharmacy Practice and Science, then Associate Director, and ultimately Assistant Dean of the Experiential Learning Program, overseeing clinical education across the state.",
  },
  {
    years: "2016 – 2022",
    title: "Dean & Professor",
    organization: "Howard University College of Pharmacy, Washington, D.C.",
    description: "Appointed Dean in 2016, becoming a transformational leader at the nation's preeminent HBCU pharmacy school. Under her six year tenure: enrollment nearly doubled; alumni giving rose 70%; 18 international partnerships were established; full eight year ACPE re-accreditation achieved; FDA-GlaxoSmithKline fellowship partnership created. The first Black woman to be named a FIP Fellow (2018).",
    highlight: true,
  },
  {
    years: "2022 – Present",
    title: "10th President",
    organization: "Albany College of Pharmacy and Health Sciences, Albany, NY",
    description: "The first Black woman elected president in ACPHS's 141 year history. Launched a bold new 2024–2029 Strategic Plan. Approved seven new degree programs in 2024 (largest single-year expansion in institutional history). Introduced ACPHS Online, the college's first digital portfolio. Applications increased 19%, PharmD deposits increased 210%, transfer admissions rose 714%.",
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
            Career Milestones
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
                  <p className="text-text-body text-sm leading-relaxed">
                    {item.description}
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
