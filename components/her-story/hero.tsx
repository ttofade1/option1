"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HerStoryHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative pt-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p
              className={`text-gold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Her Story
            </p>
            <h1
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              A journey from Ile-Ife to Albany
            </h1>
            <p
              className={`text-navy-muted text-lg leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Every leader&apos;s story is rooted somewhere. For Prof. Toyin Tofade, it is rooted in Nigeria, in the pharmacy halls of Obafemi Awolowo University, and in the example of her father, the late Professor Abayomi Sofowora.
            </p>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8640-mWkDGoxK38NZrUPJQ8QNtA2HeMI18T.jpg"
                alt="Dr. Toyin Tofade at university gates"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
