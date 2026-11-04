"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function ImpactHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACPHS-Leadership-at-Commencement-1540x866-7nRBd4I5tozVjoDecjgyDvWKIL3N9b.jpg"
          alt="ACPHS Leadership at Commencement"
          fill
          className="object-cover opacity-95"
          priority
          style={{objectPosition: "center 15%"}}

        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(150px,15vw,240px)] pb-14">
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
            The measure of a leader is what she builds for others
          </h1>
          <p
            className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Prof. Tofade measures her work in careers launched, institutions strengthened, communities served, and professionals who became leaders because someone invested in them.
          </p>
        </div>
      </div>
    </section>
  )
}
