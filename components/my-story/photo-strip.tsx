"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { withBasePath } from "@/lib/base-path"

/** `posA`/`posB` set object-position for photos whose subject is near an edge. Omit `b` for a single photo. */
const pairs: { a: string; b?: string; caption: string; posA?: string; posB?: string }[] = [
  { a: "/howard-colleagues-3.jpeg", b: "/howard-colleagues-7.jpeg", posB: "left center", caption: "With fellow academic leaders at Howard University" },
  { a: "/francke-medal.jpeg", caption: "ASHP Donald E. Francke Medal, 2022" },
  { a: "/fip-workshop-facilitators.jpeg", b: "/colleagues-selfie.jpeg", caption: "Building leaders with colleagues around the world" },
  { a: "/howard-highlights-banner.jpeg", posA: "right center", b: "/howard-faculty-group.jpeg", caption: "Howard University College of Pharmacy" },
]

const FLIP_MS = 4500

export function MyStoryPhotoStrip() {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setFlip((f) => !f), FLIP_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto max-w-[1240px] px-7 pt-[88px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
        {pairs.map((pair, k) => {
          // Neighbouring frames alternate so they don't all change at once.
          const showB = pair.b !== undefined && (k % 2 === 0 ? flip : !flip)
          return (
            <figure key={pair.a} className="flex flex-col gap-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-brand-border">
                {[
                  { src: pair.a, pos: pair.posA },
                  ...(pair.b ? [{ src: pair.b, pos: pair.posB }] : []),
                ].map(({ src, pos }, i) => (
                  <Image
                    key={src}
                    src={withBasePath(src)}
                    alt={pair.caption}
                    fill
                    sizes="(max-width: 520px) 100vw, 300px"
                    className={`object-cover transition-opacity duration-[900ms] ease-in-out ${
                      (i === 1) === showB ? "opacity-100" : "opacity-0"
                    }`}
                    style={pos ? { objectPosition: pos } : undefined}
                  />
                ))}
              </div>
              <figcaption className="font-lato text-[13px] leading-[1.5] text-brand-muted">{pair.caption}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
