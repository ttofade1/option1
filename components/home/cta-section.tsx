"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-cream-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <p className="text-label text-sm tracking-[0.15em] uppercase mb-4">
                Continue The Journey
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-heading leading-tight mb-8">
                Discover her story, her impact, and her vision for the future
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/her-story"
                  className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-cream px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
                >
                  Her Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/speaker-request"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-text-heading px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
                >
                  Request Dr. Tofade to Speak
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Grid */}
          <AnimatedSection animation="slide-right" delay={300}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toyin-takes-elevator-to-Inauguration-Ceremony-1540x866-zNsUNfInYRwXupNadDHMMSTYjOFTp3.jpg"
                    alt="Dr. Tofade at inauguration ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600%20%282%29-xfGc2m7LMmhxcHG7lzErJbjsLKSedL.jpeg"
                    alt="Dr. Tofade speaking at church"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Students-stand-together-with-Toyin-at-Inauguration-ceremony-1220x686-ne6iam4kURqbv93swDaNZvZqgqBWQD.jpg"
                    alt="Dr. Tofade with students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-13-BYVZGE1d2gRZtivmyg53TjCkYxUMFK.jpg"
                    alt="Dr. Tofade portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
