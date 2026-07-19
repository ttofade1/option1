"use client"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Quote } from "lucide-react"
import { Cite } from "@/components/cite"
import { SOURCES, HERSTORY_KEYS, n } from "@/components/sources"

const PARTNERSHIPS = SOURCES.PARTNERSHIPS.href

export function HerStoryContent() {
  return (
 <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* Story Content */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Early Life */}
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
              The Beginning
            </h2>
            <div className="prose prose-lg max-w-none text-[#5C4A2A]">
              <p className="leading-relaxed mb-4">
Her father, the late Professor Abayomi Sofowora, was a pioneering pharmacognosist who spent over four decades at Obafemi Awolowo University, including serving as Chairman of the WHO Regional Expert Committee on Traditional Medicine. 
           </p>
              <p className="leading-relaxed mb-4">
 It was watching him work, watching him translate plant science into medicine that reached communities across Africa, that first sparked Toyin&apos;s love of pharmacy. She went on to earn her Bachelor of Pharmacy from OAU, walking the same halls where her father had shaped generations of students.                 </p>
            </div>
          </AnimatedSection>

          {/* UNC Chapter */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="DrToyin1.jpg"
                  alt="Dr. Tofade with students"
                  fill
                  className="object-cover"
                  style={{objectPosition: "center 20%"}}

                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  A Defining Chapter
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed">
                  In the early 1990s, Toyin crossed an ocean to pursue graduate study at the University of North Carolina at Chapel Hill, the number one ranked pharmacy school in the nation. There, she earned both her Master&apos;s in Pharmacy Practice (1994) and her Doctor of Pharmacy (1997), completing clinical residencies at UNC hospitals along the way.
                </p>
              </div>
            </div>
            <div className="bg-[#EDE5D4] rounded-xl p-8 gold-bar">
              <p className="font-serif text-xl text-[#2C1A0E] italic">
                &ldquo;I believe relationships are powerful. I list the touch points of my career in names rather than CV entries.&rdquo;
              </p>
            </div>
            <p className="text-[#5C4A2A] leading-relaxed mt-6">
              Chapel Hill was where she discovered the power of mentorship. It was there that she first crossed paths with Professor Fred Eckel who, she later said, &ldquo;tapped me when I was a nobody in Nigeria.&rdquo; That relationship would span decades, and come full circle when she received the Fred M. Eckel Pharmacy Leadership Award from UNC in 2019.<Cite n={n(HERSTORY_KEYS, "ECKEL_UNCMC")} href={SOURCES.ECKEL_UNCMC.href} />
            </p>
          </AnimatedSection>



           {/* Building a Practice */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                     Building a Practice, Building a Life
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-2">
              After her training, Dr. Tofade joined UNC hospitals as a clinical pharmacist, eventually rising to Clinical Specialist in the general medicine service. She then took the helm as Director of Pharmacotherapy Services at the Wake Area Health Education Center (AHEC), where she served from 2002 to 2011, shaping the next generation of pharmacy practitioners across North Carolina.
         
              </p>
              </div>
              
              <div className="relative aspect-[4/4] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tofade-toyinacphs10mw-11162201-r99A1N9T0FLkqziixpOjNU93NmEno6.jpg"
                  alt="Dr. Tofade with students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>


          {/* Academic Leadership */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%201-zQsbNBb0vrZD0b9DWT0M8cGObwj3SV.jpg"
                  alt="Dr. Tofade mentoring a student"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  The Pivot into Academic Leadership
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-3">
                  When Dr. Tofade moved to the University of Maryland School of Pharmacy in Baltimore, something shifted. &ldquo;When I switched to academia,&rdquo; she recalled, &ldquo;my boss told me, &apos;patients were your first priority in clinical pharmacy. Now your first priority is teaching students how to take care of those patients.&apos; That was my pivot.&rdquo;
                </p>
                 <p className="text-[#5C4A2A] leading-relaxed">
At Maryland, she rose from Associate Professor and Associate Director to Assistant Dean of the Experiential Learning Program, gaining the administrative experience and vision that would define her next chapter.                </p>
              </div>
            </div>

          </AnimatedSection>

          {/* Howard */}
          <AnimatedSection className="mb-16 bg-[#0C3050] rounded-2xl p-8 md:p-12">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Howard University
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-4 mb-6">
              Raising Leaders at Howard
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              In August 2016, Dr. Toyin Tofade was appointed Dean and Professor at Howard University College of Pharmacy in Washington, D.C., the nation&apos;s leading HBCU pharmacy school. She arrived with a clear mandate and an even clearer vision.
            </p>
            <div className="bg-[#E6F1FB]/10 rounded-xl p-6 my-6 gold-bar">
              <p className="font-serif text-xl text-white italic">
                &ldquo;Any institution can produce a pharmacist. But to raise leaders takes a different kind of environment.&rdquo;
              </p>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Over six transformative years, her team made that environment. Under her leadership, enrollment nearly doubled, student internships doubled, and alumni giving increased by over 70 percent. The student residency match rate climbed, and Howard&apos;s College of Pharmacy achieved full re-accreditation for eight years, the maximum possible term.<Cite n={n(HERSTORY_KEYS, "ENDOWED")} href={SOURCES.ENDOWED.href} />
            </p>
            <p className="text-white/80 leading-relaxed">
              Under her leadership, the college built 18 international partnerships across 16 countries, realizing her stated goal of reaching every continent on earth, with the exception of Antarctica.<Cite n={n(HERSTORY_KEYS, "REFLECTS")} href={SOURCES.REFLECTS.href} /> When she left for Albany in 2022, she didn&apos;t leave Howard behind. She established the Alfred and Toyin Tofade Aspiring Leaders Endowed Fund, ensuring that future Howard faculty, staff, and students would have resources to pursue leadership development long after her departure.<Cite n={n(HERSTORY_KEYS, "ENDOWED")} href={SOURCES.ENDOWED.href} />
            </p>
          </AnimatedSection>

          {/* Albany */}
          <AnimatedSection className="mb-3">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-takes-elevator-to-Inauguration-Ceremony-1540x866-MS9b3c9VdW38eE3Q9Itm7bxNrmL7SE.jpg"
                  alt="Dr. Tofade greeted by students at inauguration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-Tofade-stands-with-Board-of-Trustees-at-Inauguration-980x552-Oycz7m2JW4NWFYgxeS1roqkHHDKv83.jpg"
                  alt="Dr. Tofade with Board of Trustees at inauguration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-3">
              Making History and Building a University
            </h2>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
              On July 1, 2022, Dr. Toyin Tofade became the 10th President of Albany College of Pharmacy and Health Sciences and the first Black woman to hold that office in the college&apos;s 141-year history.
            </p>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
Under her leadership, ACPHS launched its boldest strategic plan in a generation, earned the Carnegie Research University classification (2025),<Cite n={n(HERSTORY_KEYS, "OFFICE")} href={SOURCES.OFFICE.href} /> a designation held by only four institutions in the Capital Region, and introduced its first online academic portfolio. Nine new degree programs launched across 2024 and 2025, including bachelor&apos;s programs in health sciences, psychology, forensic science, and biology; graduate programs in biomedical sciences, cytotechnology, and health data science; and a bachelor&apos;s in nursing offered as a 1+2+1 partnership with St. Peter&apos;s Health Partners, the largest expansion in the college&apos;s history. Applications rose 19&#37;, deposits 35&#37;, PharmD year-one deposits 210&#37;, and transfer admissions more than 700&#37;.<Cite n={n(HERSTORY_KEYS, "OFFICE")} href={SOURCES.OFFICE.href} /> Industrial fellowships for recent graduates doubled, giving increased 61&#37;, and the college achieved an 80&#37; placement rate for students pursuing medical school.
</p>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
Under her leadership the college&apos;s economic and community footprint grew: expanding CBET, backed by a Empire State Development grant and a FDA contract, and growing the Collaboratory in Albany&apos;s South End. The School of Pharmacy earned eight years of full accreditation and Health Sciences programs maintained a 100&#37; licensure rate. She and her team successfully advocated at the federal and state level for student-centered legislative reforms and for revisions to MSCHE accreditation processes to better support institutional mergers across higher education, a contribution with implications well beyond ACPHS.
            </p>

            <p className="text-[#5C4A2A] leading-relaxed mb-4">
Global partnerships expanded to India, the Philippines, Nigeria, Brazil, Indonesia, Taiwan, South Korea, and the Grand Bahamas, with more in progress across Asia and Australia.
            </p>

            <p className="text-[#5C4A2A] leading-relaxed">
  In April 2025, she led the announcement of a historic merger with Russell Sage College, a merger of equals, that upon completion in Fall 2027 will create a comprehensive institution of approximately 4,000 students with combined assets of &#36;246 million and the broadest health professions curriculum in the Capital Region.<Cite n={n(HERSTORY_KEYS, "PARTNERSHIPS")} href={SOURCES.PARTNERSHIPS.href} />
</p>
          </AnimatedSection>

          {/* Final Quote */}

           <AnimatedSection className="mb-4">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">

            </div>
            <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
            A Distinguished Conclusion and a New Chapter            </h2>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
On April 24, 2026, Prof. Tofade announced that she will conclude her presidential term on June 30, 2026 with the merger on track and the first phase of the transaction set to close June 1. She will continue as President Emerita from July 1, 2026, supporting the transition as Russell Sage President Matthew Shaftel leads both institutions toward the combined university.<Cite n={n(HERSTORY_KEYS, "OFFICE")} href={SOURCES.OFFICE.href} />            </p>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
ACPHS Board Chair Walter S. Borisenok said: "President Tofade has brought ACPHS through a historic chapter. The ACPHS Board of Trustees is extremely grateful for her leadership and service."
            </p>
            <p className="text-[#5C4A2A] leading-relaxed mb-4">
In her message to the community she wrote: "It has been my honor to serve you as the 10th president of ACPHS. I am profoundly grateful to our students, my dedicated leadership team, and the entire ACPHS community for the collaborations that have brought us to this moment."
            </p>

            <p className="text-[#5C4A2A] leading-relaxed mb-3">
As she turns toward her next chapter Prof. Tofade carries forward more than four years of institution-building, a 141-year legacy preserved, and a merger that will anchor health professions education in New York's Capital Region for decades.
            </p>
            <p className="text-[#5C4A2A] leading-relaxed mb-3">
              Read more about the ACPHS&ndash;Russell Sage College merger and the partnerships extending the college&apos;s reach in the{" "}
              <a
                href={PARTNERSHIPS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label underline decoration-dotted underline-offset-2 hover:text-gold transition-colors"
              >
                official ACPHS announcement
              </a>
              .
            </p>
          </AnimatedSection>

                    <AnimatedSection className="bg-[#3D1854] rounded-2xl p-8 md:p-12 text-center">
            <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
            <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-4">
            Together, we will broaden horizons, expand opportunities, and empower our students to thrive.            </blockquote>
            <cite className="text-[#C9A0E8] text-sm not-italic">
              Prof. Toyin Tofade, on the ACPHS–Russell Sage merger, April 2025
            </cite>
          </AnimatedSection>

        </div>
      </section>

    </main>
  )
}
