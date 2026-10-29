"use client"

import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import { useEffect, useState } from "react"

export function CareerHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/inauguration-phylicia-rashad.jpeg")}
          alt="Prof. Tofade at her inauguration with Phylicia Rashad"
          fill
          className="object-cover opacity-95"
          priority
          style={{objectPosition: "center 45%"}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(150px,15vw,240px)] pb-14 text-center">
        <p
          className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Career
        </p>
        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A Leadership Journey
        </h1>
        <p
          className={`text-navy-muted text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          From clinical practice in North Carolina to the deanship at Howard and the presidency at Albany, Prof. Tofade has led institutions whose partnerships, built under her leadership, span six continents. She is a leader whose reach extends well beyond any single profession or country.
        </p>
      </div>
    </section>
  )
}
