"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, GLOBAL_KEYS, n } from "@/components/sources"
import { Users, Globe } from "lucide-react"
import { Photo, PhotoRow } from "@/components/photo"

const photos: { src: string; alt: string }[] = [
  { src: "/fip-leadership-workshop.jpeg", alt: "FIP Young Pharmacists Group Leadership Development Workshop, Glasgow" },
  { src: "/women-presidents-organization.jpeg", alt: "Women Presidents Organization" },
  { src: "/with-student-leader.jpeg", alt: "With a student leader" },
]

export function GWLContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mentorship & the Next Generation of Leaders (primary) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="slide-left">
            <div className="relative max-w-md">
              <Photo
                src="/leadership-development-2023.jpeg"
                alt="Participants at a 2023 leadership development session"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={100}>
            <div>
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-4">
                A Life&apos;s Work in Mentorship
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-heading mb-8">
                Developing leaders across sectors, generations, and borders
              </h2>
              <p className="text-text-body leading-relaxed mb-8">
                As a Fellow of the{" "}
                <a href="https://www.fip.org" target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-2 hover:text-gold">
                  International Pharmaceutical Federation
                </a>{" "}
                (FFIP) and President of its
                Academic Pharmacy Section, Prof. Tofade has shaped how a global federation cultivates
                its next generation of academic leaders.<Cite n={n(GLOBAL_KEYS, "FIP")} href={SOURCES.FIP.href} /> A Certified
                Professional Co-active Coach (CPCC), she brings that same discipline to the individual
                leaders she mentors, one relationship at a time.
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">Global Federation Leadership</h3>
                    <p className="text-text-body text-sm">
                      Advancing academic pharmacy education worldwide through the FIP Academic Pharmacy Section.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">One-on-One Coaching</h3>
                    <p className="text-text-body text-sm">
                      Certified executive coaching for emerging and established leaders across academia, healthcare, business, public service, and their chosen careers.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Photo strip */}
        <AnimatedSection>
          <PhotoRow
            items={photos.map((photo) => ({
              src: photo.src,
              render: (
                <figure>
                  <Photo src={photo.src} alt={photo.alt} sizes="(max-width: 640px) 100vw, 400px" />
                  <figcaption className="mt-2 text-sm text-text-body">{photo.alt}</figcaption>
                </figure>
              ),
            }))}
          />
        </AnimatedSection>
      </div>
    </section>
  )
}
