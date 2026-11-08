"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Photo, PhotoRow } from "@/components/photo"

const photos: { src: string; caption: string }[] = [
  { src: "/faculty-of-pharmacy-ile-ife.jpeg", caption: "Faculty of Pharmacy, Ile-Ife" },
  { src: "/commencement-podium.jpeg", caption: "With Mayor Sheehan at Commencement 2025" },
  { src: "/cbet-opening.jpeg", caption: "Opening the Stack Family Center for Biopharmaceutical Education and Training (CBET)" },
  { src: "/power-50.jpeg", caption: "Albany Business Review Power 50" },
  { src: "/merger-announcement.jpeg", caption: "Announcing the ACPHS–Russell Sage College merger, 2025" },
  { src: "/mou-signing-telangana.jpg", caption: "Signing an international MOU for ACPHS, Telangana, 2025" },
  { src: "/howard-deans-with-president.jpeg", caption: "With fellow Howard University leaders and the University President" },
  { src: "/georgetown-ipe-day.jpeg", caption: "Georgetown University Interprofessional Education Day" },
  { src: "/fip-ecpg-group.jpeg", caption: "With the FIP Early Career Pharmaceutical Group" },
  { src: "/hyderabad-honoree-clock.jpg", caption: "Honored at the Leadership Educators’ Summit, Hyderabad, 2025" },
  { src: "/hyderabad-honoree-shawl.jpg", caption: "Honored at the Leadership Educators’ Summit, Hyderabad, 2025" },
]

const PER_ROW = 3
const rows = Array.from({ length: Math.ceil(photos.length / PER_ROW) }, (_, i) => photos.slice(i * PER_ROW, (i + 1) * PER_ROW))

export function CareerGallery() {
  return (
    <section className="py-24 bg-cream-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">Moments</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">Along the Way</h2>
        </AnimatedSection>
        {/* Rows of three; each photo keeps its own shape so nobody is cropped out. */}
        <div className="flex flex-col gap-8">
          {rows.map((row, r) => (
            <AnimatedSection key={row[0].src} delay={r * 50}>
              <PhotoRow
                items={row.map((photo) => ({
                  src: photo.src,
                  render: (
                    <figure>
                      <Photo src={photo.src} alt={photo.caption} sizes="(max-width: 640px) 100vw, 400px" />
                      <figcaption className="mt-2 text-sm text-text-body">{photo.caption}</figcaption>
                    </figure>
                  ),
                }))}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
