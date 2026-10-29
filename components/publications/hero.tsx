"use client"

import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import { useEffect, useState } from "react"
import { Cite } from "@/components/cite"
import { SOURCES, PUBLICATIONS_KEYS, n } from "@/components/sources"

export function PublicationsHero() {
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(150px,15vw,240px)] pb-14 text-center">
        <p
          className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Research & Scholarship
        </p>
        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Publications & Media
        </h1>
        <p
          className={`text-navy-muted text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Prof. Tofade is a published scholar with over 1,200 citations across more than 58 publications<Cite n={n(PUBLICATIONS_KEYS, "RESEARCHGATE")} href={SOURCES.RESEARCHGATE.href} /> spanning pharmacy practice, pharmaceutical education, leadership development, and Co-active Coaching in health professions contexts.
        </p>
      </div>
    </section>
  )
}
