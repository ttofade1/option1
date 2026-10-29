"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { withBasePath } from "@/lib/base-path"

export function GWLHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Extends above the section so the faces sit higher than the text. */}
        <div className="absolute inset-x-0 -top-[clamp(80px,9vw,140px)] bottom-0">
          <Image
            src={withBasePath("/fip-academic-pharmacy-section.jpeg")}
            alt="Prof. Tofade with colleagues from the FIP Academic Pharmacy Section"
            fill
            className="object-cover opacity-95"
            priority
            style={{objectPosition: "center top"}}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(150px,15vw,240px)] pb-14">
        <div className="max-w-2xl">
          <p
            className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Mentorship & Leadership Development
          </p>
          <h1
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Raising the Next Generation of Leaders
          </h1>
          <p
            className={`font-serif italic text-xl sm:text-2xl text-gold leading-snug mb-6 transition-all duration-700 delay-150 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Inspiring and developing leaders across sectors, generations, and borders.
          </p>
          <p
            className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Prof. Tofade has long believed that the measure of a leader is not what she achieves, but what she builds in others. Across her career, through the International Pharmaceutical Federation, executive coaching, and the nonprofit she founded, she has made developing leaders across sectors, generations, and borders her life&apos;s work.
          </p>
        </div>
      </div>
    </section>
  )
}
