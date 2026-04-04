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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600%20%282%29-xfGc2m7LMmhxcHG7lzErJbjsLKSedL.jpeg"
          alt="Dr. Tofade speaking"
          fill
          className="object-cover opacity-90"
          priority
          style={{objectPosition: "right 10%"}}

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
            Global Women Leaders Inc.
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Raising women to lead
          </h1>
          <p
            className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Dr. Tofade has always believed that leadership is not a title—it is a responsibility. That belief gave rise to Global Women Leaders Inc., the nonprofit she founded to inspire and equip women around the world to step fully into the leadership they were created for.
          </p>
        </div>
      </div>
    </section>
  )
}
