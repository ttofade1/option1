"use client"

import { useEffect, useState } from "react"
import { Cite } from "@/components/cite"
import { SOURCES, PUBLICATIONS_KEYS, n } from "@/components/sources"

export function PublicationsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
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
