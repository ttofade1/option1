"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function ImpactHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-20 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACPHS-Leadership-at-Commencement-1540x866-7nRBd4I5tozVjoDecjgyDvWKIL3N9b.jpg"
          alt="ACPHS Leadership at Commencement"
          fill
          className="object-cover opacity-95"
          priority
          style={{objectPosition: "center 10%"}}

        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p
            className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Impact
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The mark of a leader is what she leaves behind
          </h1>
          <p
            className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Dr. Tofade doesn&apos;t measure her work in enrollment numbers alone, though the numbers are extraordinary. She measures it in students who became deans, in faculty who found their voice, in communities that received care they might not otherwise have had.
          </p>
        </div>
      </div>
    </section>
  )
}
