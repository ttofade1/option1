"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { withBasePath } from "@/lib/base-path"

const photos: { src: string; caption: string; position?: string }[] = [
  { src: "/faculty-of-pharmacy-ile-ife.jpeg", caption: "Faculty of Pharmacy, Ile-Ife", position: "center 65%" },
  { src: "/commencement-podium.jpeg", caption: "With Mayor Sheehan at Commencement 2025", position: "center 25%" },
  { src: "/cbet-opening.jpeg", caption: "Opening the Stack Family Center for Biopharmaceutical Education and Training (CBET)" },
  { src: "/power-50.jpeg", caption: "Albany Business Review Power 50" },
  { src: "/merger-announcement.jpeg", caption: "Announcing the ACPHS–Russell Sage College merger, 2025" },
  { src: "/mou-signing-telangana.jpg", caption: "Signing an international MOU for ACPHS, Telangana, 2025" },
  { src: "/fip-ecpg-group.jpeg", caption: "With the FIP Early Career Pharmaceutical Group" },
  { src: "/hyderabad-honoree-clock.jpg", caption: "Honored at the Leadership Educators’ Summit, Hyderabad, 2025" },
]

export function CareerGallery() {
  return (
    <section className="py-24 bg-cream-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">Moments</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">Along the Way</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <AnimatedSection key={photo.src} delay={index * 50}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={withBasePath(photo.src)}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                    style={photo.position ? { objectPosition: photo.position } : undefined}
                  />
                </div>
                <figcaption className="mt-2 text-sm text-text-body">{photo.caption}</figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
