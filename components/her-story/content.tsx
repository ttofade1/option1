"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const storyChapters = [
  {
    title: "The Beginning",
    content: `Her father, the late Professor Abayomi Sofowora, was a pioneering pharmacognosist who spent over four decades at Obafemi Awolowo University, served as Chairman of the WHO Regional Expert Committee on Traditional Medicine, and showed his daughter that science in service of people is a calling worth everything.

She earned her Bachelor of Pharmacy from OAU before crossing an ocean to pursue graduate study at the University of North Carolina at Chapel Hill — the nation's top-ranked pharmacy school — where she earned both her MS in Pharmacy Practice and her Doctor of Pharmacy, completing clinical residencies at UNC Hospitals along the way.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tofade-toyinacphs10mw-11162201-r99A1N9T0FLkqziixpOjNU93NmEno6.jpg",
    imageAlt: "Prof. Tofade at ACPHS campus",
  },
  {
    title: "A Defining Chapter",
    content: `Chapel Hill was where she first understood the power of mentorship. Professor Fred Eckel — whom she credits as someone who recognised her before she recognised herself — became a foundational guide. Decades later, she became the first Black person to receive the Fred Eckel Pharmacy Leadership Award from UNC.`,
    quote: `"I believe relationships are powerful. I list the touch points of my career in names rather than CV entries."`,
    quoteAttribution: "— Prof. Toyin Tofade",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-13-BYVZGE1d2gRZtivmyg53TjCkYxUMFK.jpg",
    imageAlt: "Prof. Tofade professional portrait",
    imagePosition: "right",
  },
  {
    title: "Building a Practice",
    content: `After her training at UNC Hospitals, Prof. Tofade moved to the Wake Area Health Education Center (AHEC) in Raleigh — ultimately as Director of Pharmacotherapy Services — training practitioners across North Carolina and receiving the Wake AHEC Mentor of the Year award in 2008. Her pivot to academic administration came at the University of Maryland School of Pharmacy, where she rose from Associate Professor to Assistant Dean of the Experiential Learning Program, gaining the institutional grounding that defined her next chapter.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-4-boJJTsyOnM7FSX7Cun2xMALpefKtMw.jpg",
    imageAlt: "Prof. Tofade with her husband",
  },
  {
    title: "Raising Leaders at Howard",
    content: `In August 2016, Prof. Tofade was appointed Dean and Professor at Howard University College of Pharmacy in Washington, D.C. Over six transformative years: enrollment nearly doubled; alumni giving rose more than 70%; the student residency match rate climbed from 36% to over 50%; 18 international partnerships were built across 16 countries and every inhabited continent.

She secured a landmark FDA–GlaxoSmithKline fellowship — the first of its kind — and led the college to the maximum possible ACPE re-accreditation term of eight years.

She also established the Alfred and Toyin Tofade Aspiring Leaders Endowed Fund before departing, ensuring future Howard faculty and students would have resources for leadership development long after her tenure. "Everywhere I've gone," she said at her farewell, "I've led with heart."`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dean%20with%20students_0-ae3WmQHlv1TB7RdNGIULUbrLDYsib5.jpg",
    imageAlt: "Prof. Tofade with students",
    imagePosition: "right",
  },
  {
    title: "Making History — and Building a University",
    content: `On July 1, 2022, Prof. Tofade became the 10th President of Albany College of Pharmacy and Health Sciences — and the first Black woman to hold that office in the college's 143-year history. She did not arrive as a symbol. She arrived as a builder.

Under her leadership, ACPHS launched its boldest strategic plan in a generation, earned the Carnegie Research University classification (2025), introduced its first online academic portfolio, and approved seven new degree programs in a single year — the largest expansion in institutional history. Applications rose 19%; PharmD deposits surged 210%; transfer admissions grew more than 700%.

She deepened the college's economic footprint in the Capital Region: expanding the Stack Family Center for Biopharmaceutical Education and Training (CBET), backed by a $1.75M Empire State Development grant and a $1.9M FDA contract, cementing Albany as a biopharma workforce hub.

In April 2025, she led the announcement of a historic merger with Russell Sage College — a merger of equals that, upon completion in Fall 2027, will create a comprehensive institution of approximately 4,000 students with combined assets of $246 million and the broadest health professions curriculum in the Capital Region.`,
    quote: `"Together, we will broaden horizons, expand opportunities, and empower our students to thrive."`,
    quoteAttribution: "— Prof. Toyin Tofade, on the ACPHS–Russell Sage merger, April 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-Tofade-stands-with-Board-of-Trustees-at-Inauguration-980x552-RiDO6vz5r605cnW92CD81iqOkxLT9b.jpg",
    imageAlt: "Prof. Tofade at inauguration with Board of Trustees",
  },
  {
    title: "A Distinguished Conclusion — and a New Chapter",
    content: `On April 24, 2026, Prof. Tofade announced that she will conclude her presidential term on June 30, 2026 — with the merger on track and the first phase of the transaction set to close June 1. She will continue as President Emeritus from July 1, 2026, supporting the transition as Russell Sage President Matthew Shaftel leads both institutions toward the combined university.

ACPHS Board Chair Walter S. Borisenok said: "President Tofade has brought ACPHS through a historic chapter. The ACPHS Board of Trustees is extremely grateful for her leadership and service."

In her message to the community she wrote: "It has been my honor to serve you as the 10th president of ACPHS. I am profoundly grateful to our students, my dedicated leadership team, and the entire ACPHS community for the collaborations that have brought us to this moment."

As she turns toward her next chapter — executive leadership advisory, coaching, speaking, and global health advocacy — Prof. Tofade carries forward more than four years of institution-building, a 143-year legacy preserved, and a merger that will anchor health professions education in New York's Capital Region for decades.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%201-6fA22jLiII21oOfCokcF9lWMdlirXm.jpg",
    imageAlt: "Prof. Tofade mentoring a student",
    imagePosition: "right",
  },
]

export function HerStoryContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {storyChapters.map((chapter, index) => (
          <div
            key={chapter.title}
            className={`mb-24 last:mb-0 ${index > 0 ? "pt-24 border-t border-divider" : ""}`}
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                chapter.imagePosition === "right" ? "lg:grid-cols-2" : ""
              }`}
            >
              {/* Image - conditionally ordered */}
              <AnimatedSection
                animation={chapter.imagePosition === "right" ? "slide-right" : "slide-left"}
                className={chapter.imagePosition === "right" ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection
                animation={chapter.imagePosition === "right" ? "slide-left" : "slide-right"}
                delay={100}
                className={chapter.imagePosition === "right" ? "lg:order-1" : ""}
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-6">
                  {chapter.title}
                </h2>
                <div className="text-text-body leading-relaxed whitespace-pre-line">
                  {chapter.content}
                </div>
                {chapter.quote && (
                  <blockquote className="mt-6 pl-6 border-l-2 border-gold">
                    <p className="text-text-heading font-serif italic text-lg">
                      {chapter.quote}
                    </p>
                    <p className="text-label text-sm mt-2">{chapter.quoteAttribution}</p>
                  </blockquote>
                )}
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
