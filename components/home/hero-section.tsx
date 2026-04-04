"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4eecff39fbc66cedd4cea353d30ff64e-c8bEZjKMGceEmeojVKfJgt76IjQPqj.jpeg"
          alt="Dr. Toyin Tofade at the presidential podium"
          fill
          className="object-cover object-top opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
          </p>

          {/* Main Headline */}
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-gold italic">Called to heal.</span>
            <br />
            <span className="text-gold italic">Called to lead.</span>
            <br />
            <span className="text-gold italic">Called to serve.</span>
          </h1>

          {/* Description */}
          <p
            className={`text-navy-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Dr. Toyin Tofade is a visionary leader at the intersection of healthcare, higher education, and faith, equipping institutions and individuals to lead with excellence and purpose.
          </p>

          {/* Sub-headline Badge */}
          <div
            className={`inline-block bg-gold-light/90 px-6 py-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-label text-sm font-medium leading-relaxed">
              10th President, Albany College of Pharmacy and Health Sciences
              <br />
              <span className="text-text-heading font-serif italic">
                First Black Woman Elected President in the College&apos;s 141-Year History
              </span>
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-navy-muted/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
