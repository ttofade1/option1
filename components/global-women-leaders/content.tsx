"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Target, Users, Heart } from "lucide-react"

export function GWLContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="slide-left">
            <div className="relative aspect-[4/5] max-w-md">
              <Image
                src="SF_PBweb-14.jpg"
                alt="Dr. Tofade"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={100}>
            <div>
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-4">
                Our Purpose
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-heading mb-8">
                The organisation focuses on training, mentorship, and community-building
              </h2>
              <p className="text-text-body leading-relaxed mb-8">
                Providing women across sectors with the tools, models, and networks they need to lead with confidence, competence, and sustained impact.
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">Mission</h3>
                    <p className="text-text-body text-sm">
                      To inspire and train women internationally to maximise their leadership potential across academia, healthcare, public service, and professional life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">Who We Serve</h3>
                    <p className="text-text-body text-sm">
                      Women at every stage of their professional journey: those entering leadership roles for the first time, those navigating the complexity of senior positions, and those ready to invest in the next generation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">Get Involved</h3>
                    <p className="text-text-body text-sm">
                      Whether you are a woman ready to grow into the fullness of your professional potential, an organisation seeking to partner with us, or a donor committed to multiplying women&apos;s leadership impact globally we want to hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Image Gallery */}
        {/* <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative aspect-[3/4]">
              <Image
                src="withKemi.jpeg"
                alt="Dr. Tofade with church member"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-15-gl2EKrbeiBW970azeAnFlBE6JiwD0S.jpg"
                alt="Dr. Tofade in prayer"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="congregation.jpeg"
                alt="Dr. Tofade with congregation"
                fill
                className="object-cover"
                style={{objectPosition: "right 10%"}}
              />
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  )
}
