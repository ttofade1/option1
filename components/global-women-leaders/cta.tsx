"use client"

import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function GWLCta() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase mb-4">
            Join The Movement
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-8">
            Ready to unlock your leadership potential?
          </h2>
          <p className="text-navy-muted text-lg mb-12 max-w-2xl mx-auto">
            Connect with Global Women Leaders Inc. to learn more about training programs, partnership opportunities, and ways to support women leaders worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-text-heading px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream hover:bg-cream/10 text-cream px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold hover:bg-gold/10 text-gold px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
            >
              Support the Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  )
}
