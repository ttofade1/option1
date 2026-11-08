"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Eyebrow, SectionHeading } from "@/components/home/brand"
import { withBasePath } from "@/lib/base-path"

/** Photos are letterboxed on navy (object-contain) so nobody is cropped out. */
const slides: { src: string; caption: string; credit?: string }[] = [
  { src: "/taiwan-partnership.jpeg", caption: "Signing an international partnership with a Taiwanese institution" },
  { src: "/hyderabad-presenting-dr-suresh.jpg", caption: "Presenting an award to Dr. B. Suresh, Pro Chancellor, JSS AHER, at the Leadership Educators’ Summit, Hyderabad, 2025" },
  { src: "/aacp-council-of-deans.jpeg", caption: "AACP Council of Deans" },
  { src: "/brisbane-leadership-workshop.jpeg", caption: "Co-leading the FIP ECPG Leadership Development Program, Brisbane, 2023" },
  { src: "/next-generation-leaders.jpeg", caption: "Developing the next generation of leaders" },
  { src: "/women-presidents-organization.jpeg", caption: "Women Presidents Organization" },
  { src: "/ihe-us-universities-summit-2025.jpeg", caption: "Inside Higher Ed US Universities Summit, 2025" },
  { src: "/unc-kohn-lecture-stage.jpeg", caption: "Delivering the Harold and Carol Kohn Distinguished Alumni Lecture, UNC Chapel Hill, 2026", credit: "Danny Alexander" },
  { src: "/unc-kohn-lecture-audience.jpeg", caption: "Harold and Carol Kohn Distinguished Alumni Lecture, UNC Chapel Hill, 2026", credit: "Danny Alexander" },
  { src: "/unc-kohn-award.jpeg", caption: "Receiving the Harold and Carol Kohn Distinguished Alumni Lecturer award, UNC Eshelman School of Pharmacy, 2026", credit: "Danny Alexander" },
  { src: "/howard-student-leaders.jpeg", caption: "With student leaders at Howard University College of Pharmacy" },
  { src: "/abcf-congress.jpeg", caption: "Speaking at the VII ABCF Congress, Brazil, 2024" },
  { src: "/ncoda.jpeg", caption: "With NCODA leaders" },
]

const AUTOPLAY_MS = 5000

const arrowButton =
  "flex size-12 items-center justify-center rounded-full border border-brand-navy text-lg text-brand-navy transition-colors duration-150 hover:bg-brand-navy hover:text-white"

export function LeadershipCarouselSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, count, index])

  const go = (i: number) => setIndex((i + count) % count)

  return (
    <section className="bg-brand-cream" aria-roledescription="carousel" aria-label="Leadership in Action">
      <div className="mx-auto max-w-[1240px] px-7 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>Leadership in Action</Eyebrow>
            <SectionHeading className="text-brand-navy">On stages and in rooms around the world</SectionHeading>
          </div>
          <div className="flex gap-2.5">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous photo" className={arrowButton}>
              ←
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next photo" className={arrowButton}>
              →
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-9 aspect-video max-h-[680px] w-full overflow-hidden rounded-md bg-brand-navy"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={withBasePath(slide.src)}
                alt={slide.caption}
                fill
                priority={i === 0}
                sizes="(max-width: 1240px) 100vw, 1184px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-[18px] flex flex-wrap items-center justify-between gap-4 font-lato">
          <p aria-live="polite" className="min-h-[23px] text-[15px] leading-[1.5] text-brand-body">
            {slides[index].caption}
            {slides[index].credit && <span className="text-brand-muted"> · Photo: {slides[index].credit}</span>}
          </p>
          <div className="flex flex-wrap gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={slide.caption}
                aria-current={i === index}
                className={`h-2 rounded-full transition-[width] duration-300 ease-in-out ${
                  i === index ? "w-7 bg-brand-navy" : "w-2 bg-[#C9BFA8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
