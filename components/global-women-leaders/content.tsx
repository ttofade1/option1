"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, GLOBAL_KEYS, n } from "@/components/sources"
import { Target, Users, Heart, Globe } from "lucide-react"

export function GWLContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mentorship & the Next Generation of Leaders (primary) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="slide-left">
            <div className="relative aspect-[4/5] max-w-md">
              <Image
                src="SF_PBweb-14.jpg"
                alt="Prof. Tofade"
                fill
                className="object-cover"
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
              <p className="text-text-body leading-relaxed mb-6">
                As a Fellow of the International Pharmaceutical Federation (FFIP) and President of its
                Academic Pharmacy Section, Prof. Tofade has shaped how a global federation cultivates
                its next generation of academic leaders.<Cite n={n(GLOBAL_KEYS, "FIP")} href={SOURCES.FIP.href} /> A Certified
                Professional Co-active Coach (CPCC), she brings that same discipline to the individual
                leaders she mentors, one relationship at a time.
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                Her belief that leadership must be built in others is embodied in the Alfred and Toyin
                Tofade Aspiring Leaders Endowed Fund at Howard University, which she established to
                ensure future faculty, staff, and students have lasting resources for leadership
                development.<Cite n={n(GLOBAL_KEYS, "ENDOWED")} href={SOURCES.ENDOWED.href} />
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
                      Certified executive coaching for emerging and established leaders across academia, healthcare, and public service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-label" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-text-heading mb-1">Endowed Investment</h3>
                    <p className="text-text-body text-sm">
                      Permanent resources for leadership development, ensuring the work continues for generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Global Women Leaders Inc. (demoted sub-section) */}
        <AnimatedSection>
          <div className="bg-cream-card border border-border p-8 md:p-12">
            <p className="text-label text-sm tracking-[0.15em] uppercase mb-3">
              A Dedicated Initiative
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-4">
              Global Women Leaders Inc.
            </h2>
            <p className="text-text-body leading-relaxed mb-8 max-w-3xl">
              Global Women Leaders Inc. is the nonprofit Prof. Tofade founded to inspire and equip
              women around the world to step fully into their leadership capacity. The organisation
              focuses on training, mentorship, and community-building. Providing women across
              sectors with the tools, models, and networks they need to lead with confidence,
              competence, and sustained impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold-light flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-label" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-text-heading mb-1">Mission</h3>
                  <p className="text-text-body text-sm">
                    To inspire and train women internationally to maximise their leadership potential across academia, healthcare, public service, and professional life.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold-light flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-label" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-text-heading mb-1">Who We Serve</h3>
                  <p className="text-text-body text-sm">
                    Women at every stage of their professional journey. Those entering leadership for the first time, those navigating senior positions, and those ready to invest in the next generation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold-light flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-label" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-text-heading mb-1">Get Involved</h3>
                  <p className="text-text-body text-sm">
                    Whether you are a woman ready to grow, an organisation seeking to partner, or a donor committed to multiplying women&apos;s leadership impact globally, we want to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
