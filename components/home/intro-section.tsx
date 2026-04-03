"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function IntroSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="slide-left">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-25-FvLMii3DicExE7bEt7aKyT8GxtE5Yo.jpg"
                alt="Dr. Toyin Tofade professional portrait"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection delay={100}>
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-4">
                A Journey of Purpose
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-heading leading-tight mb-8">
                From the pharmacy halls of Nigeria to the presidential office of one of America&apos;s most respected health sciences colleges
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  From the pharmacy halls of Obafemi Awolowo University in Nigeria to the presidential office of one of the nation&apos;s most respected health sciences colleges, Dr. Toyin Tofade has spent her career doing one thing: raising people up.
                </p>
                <p>
                  She has tripled enrollments, forged partnerships on six continents, and shaped pharmacists into leaders—all while remaining grateful to God for every opportunity to serve.
                </p>
                <p>
                  Whether she is charting the future of pharmacy education, mentoring a first-generation student, or speaking to thousands about health equity and leadership, Dr. Tofade brings the same conviction: that institutions exist to transform lives, and leaders exist to serve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
