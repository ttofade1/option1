"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const storyChapters = [
  {
    title: "The Beginning",
    content: `Her father, the late Professor Abayomi Sofowora, was a pioneering pharmacognosist who spent over four decades at Obafemi Awolowo University, including serving as Chairman of the WHO Regional Expert Committee on Traditional Medicine. It was watching him work, watching him translate plant science into medicine that reached communities across Africa, that first sparked Toyin's love of pharmacy. She went on to earn her Bachelor of Pharmacy from OAU, walking the same halls where her father had shaped generations of students.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tofade-toyinacphs10mw-11162201-r99A1N9T0FLkqziixpOjNU93NmEno6.jpg",
    imageAlt: "Dr. Tofade at ACPHS campus",
  },
  {
    title: "A Defining Chapter",
    content: `In the early 1990s, Toyin crossed an ocean to pursue graduate study at the University of North Carolina at Chapel Hill, the number one ranked pharmacy school in the nation. There, she earned both her Master's in Pharmacy Practice (1994) and her Doctor of Pharmacy (1997), completing clinical residencies at UNC hospitals along the way.

Chapel Hill was where she discovered the power of mentorship. It was there that she first crossed paths with Professor Fred Eckel who, she later said, "tapped me when I was a nobody in Nigeria." That relationship would span decades, and come full circle when she became the first Black person to receive the Fred Eckel Pharmacy Leadership Award from UNC in 2019.

"I believe relationships are powerful," she said. "I list the touch points of my career in names rather than CV entries."`,
    image: "SF_PBweb-14.jpg",
    imageAlt: "Dr. Tofade professional portrait",
    imagePosition: "right",
  },
  {
    title: "Building a Practice, Building a Life",
    content: `After her training, Prof. Tofade joined UNC hospitals as a clinical pharmacist, eventually rising to Clinical Specialist in the general medicine service. She then took the helm as Director of Pharmacotherapy Services at the Wake Area Health Education Center (AHEC), where she served from 2002 to 2011, shaping the next generation of pharmacy practitioners across North Carolina.`,
    image: "SF_PGweb-6.jpg",
    imageAlt: "Dr. Tofade with her husband",
  },
  {
    title: "The Pivot into Academic Leadership",
    content: `When Prof. Tofade moved to the University of Maryland School of Pharmacy in Baltimore, something shifted. "When I switched to academia," she recalled, "my boss told me, 'patients were your first priority in clinical pharmacy. Now your first priority is teaching students how to take care of those patients.' That was my pivot."

At Maryland, she rose from Associate Professor and Associate Director to Assistant Dean of the Experiential Learning Program, gaining the administrative experience and vision that would define her next chapter.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dean%20with%20students_0-ae3WmQHlv1TB7RdNGIULUbrLDYsib5.jpg",
    imageAlt: "Dr. Tofade with students",
    imagePosition: "right",
  },
  {
    title: "Raising Leaders at Howard",
    content: `In August 2016, Prof. Toyin Tofade was appointed Dean and Professor at Howard University College of Pharmacy in Washington, D.C., the nation's leading HBCU pharmacy school. She arrived with a clear mandate and an even clearer vision.

"Any institution can produce a pharmacist," she said. "But to raise leaders takes a different kind of environment."

Over six transformative years, she made that environment. Enrollment nearly doubled. Student internships doubled. Alumni giving increased by over 70 percent. The student residency match rate climbed from 36 to more than 50 percent. Howard's College of Pharmacy achieved full re-accreditation for eight years, the maximum possible term. She built 18 international partnerships across 16 countries, realizing her stated goal of reaching every continent on earth, with the exception of Antarctica.

When she left for Albany in 2022, she didn't leave Howard behind. She established the Alfred and Toyin Tofade Aspiring Leaders Endowed Fund, ensuring that future Howard faculty, staff, and students would have resources to pursue leadership development long after her departure.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%201-6fA22jLiII21oOfCokcF9lWMdlirXm.jpg",
    imageAlt: "Dr. Tofade mentoring a student",
  },
  {
    title: "Making History — and Building a University",
    content: `On July 1, 2022, Prof. Toyin Tofade became the 10th President of Albany College of Pharmacy and Health Sciences and the first Black woman to hold that office in the college's 143-year history.

Under her leadership, ACPHS earned the Carnegie Research University classification and introduced its first online academic portfolio. Nine new degree programs launched across 2024 and 2025, including bachelor's programs in health sciences, psychology, forensic science, and biology; graduate programs in biomedical sciences, cytotechnology, and health data science; and a bachelor's in nursing offered as a 1+2+1 partnership with St. Peter's Health Partners, the largest expansion in the college's history. Applications rose 19%, deposits 35%, PharmD year-one deposits 210%, and transfer admissions more than 700%. Industrial fellowships for recent graduates doubled, giving increased 61%, and the college achieved an 80% placement rate for students pursuing medical school. She also launched the first six-year Accelerated Pathway to MD program in Upstate New York, one of only a handful in the country.

She deepened the college's economic and community footprint: expanding the Stack Family Center for Biopharmaceutical Education and Training (CBET), backed by a $1.75M Empire State Development grant and a $1.9M FDA contract; growing the Collaboratory in Albany's South End; and sustaining the college's student-operated pharmacies (the only ones of their kind in the country). The School of Pharmacy earned eight years of full accreditation and Health Sciences programs maintained a 100% licensure rate. She successfully advocated at the federal and state level for student-centered legislative reforms and for revisions to MSCHE accreditation processes to better support institutional mergers across higher education, a contribution with implications well beyond ACPHS.

Global partnerships expanded to India, the Philippines, Nigeria, Brazil, Indonesia, Taiwan, South Korea, and the Grand Bahamas, with more in progress across Asia and Australia.

In April 2025, she led the announcement of a historic merger with Russell Sage College, a merger of equals that, upon completion in Fall 2027, will create a comprehensive institution of approximately 4,000 students with combined assets of $246 million and the broadest health professions curriculum in the Capital Region.`,
    image2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-Tofade-stands-with-Board-of-Trustees-at-Inauguration-980x552-RiDO6vz5r605cnW92CD81iqOkxLT9b.jpg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-takes-elevator-to-Inauguration-Ceremony-1540x866-MS9b3c9VdW38eE3Q9Itm7bxNrmL7SE.jpg",
    imageAlt: "Prof. Tofade at inauguration",
    imagePosition: "right",

  },
  {
    title: "A Distinguished Conclusion and a New Chapter",
    content: `On April 24, 2026, Prof. Tofade announced that she will conclude her presidential term on June 30, 2026 with the merger on track and the first phase of the transaction set to close June 1. She will continue as President Emeritus from July 1, 2026, supporting the transition as Russell Sage President Matthew Shaftel leads both institutions toward the combined university.

ACPHS Board Chair Walter S. Borisenok said: "President Tofade has brought ACPHS through a historic chapter. The ACPHS Board of Trustees is extremely grateful for her leadership and service."

In her message to the community she wrote: "It has been my honor to serve you as the 10th president of ACPHS. I am profoundly grateful to our students, my dedicated leadership team, and the entire ACPHS community for the collaborations that have brought us to this moment."

As she turns toward her next chapter Prof. Tofade carries forward more than four years of institution-building, a 143-year legacy preserved, and a merger that will anchor health professions education in New York's Capital Region for decades.`,
    image: "merger.jpeg",
    imageAlt: "Prof. Tofade mentoring a student",
    quote: `"Together, we will broaden horizons, expand opportunities, and empower our students to thrive."`,
    quoteAttribution: "— Prof. Toyin Tofade, on the ACPHS–Russell Sage merger, April 2025",
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
                <div className="relative mb-5 aspect-[4/3]">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                 {(chapter.image2 &&
                  <AnimatedSection
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={chapter.image2}
                        alt={chapter.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>
              )}
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
