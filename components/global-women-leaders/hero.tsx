"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function GWLHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-20 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="withKemi.jpeg"
          alt="Dr. Tofade speaking"
          fill
          className="object-cover opacity-90"
          priority
          style={{objectPosition: "center 20%"}}

        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/65 to-navy/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p
            className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Community Service & Women&apos;s Leadership Development
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Raising the next generation of women leaders
          </h1>
          <p
            className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Prof. Tofade has long believed that the measure of a leader is not what she achieves, but what she builds in others. Global Women Leaders Inc. is the organisational expression of that belief, a nonprofit she founded to inspire and equip women around the world to step fully into their leadership capacity.
          </p>
        </div>
      </div>
    </section>
  )
}
