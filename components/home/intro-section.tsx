"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Cite } from "@/components/cite"
import { SOURCES, HOME_KEYS, n } from "@/components/sources"

export function IntroSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="slide-left">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="gray.jpg"
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
From clinical pharmacist to college president, Dr. Tofade&apos;s career reflects an unwavering commitment to excellence.             
 </h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Prof. Toyin Tofade is a transformational college president, global health systems leader, and certified executive coach with over two decades of experience building institutions, forging international partnerships, and developing the next generation of leaders across four distinguished academic institutions.
                </p>
                <p>
                  Over her four-year presidency at Albany College of Pharmacy and Health Sciences, she launched the college&apos;s most ambitious strategic expansion in its 141-year history, earned its first Carnegie Research University classification<Cite n={n(HOME_KEYS, "OFFICE")} href={SOURCES.OFFICE.href} />, and co-created a landmark merger with Russell Sage College that will anchor health professions education in New York&apos;s Capital Region for decades.<Cite n={n(HOME_KEYS, "PARTNERSHIPS")} href={SOURCES.PARTNERSHIPS.href} />
                </p>
                <p>
                  As she concluded her presidential term on June 30, 2026, and continues as President Emerita, an honorary title recognizing her distinguished service and sustaining her connection to the institution she transformed, Prof. Tofade carries forward a legacy of transformation and the conviction that highly impactful work is still ahead.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
