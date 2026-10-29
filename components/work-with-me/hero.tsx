"use client"

import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import { useEffect, useState } from "react"

export function WorkWithMeHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/hyderabad-speaking-mic.jpg")}
          alt="Prof. Tofade speaking at a leadership summit in Hyderabad"
          fill
          className="object-cover opacity-95"
          priority
          style={{objectPosition: "center 20%"}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/50 to-navy/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[clamp(260px,30vw,440px)] pb-16 text-center">
        <p
          className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Executive Coaching & Board Advisory
        </p>
        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-0 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Work With Prof. Tofade
        </h1>
      </div>
    </section>
  )
}
