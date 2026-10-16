import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

const photos = [
  { src: withBasePath("/podium.jpeg"), alt: "Prof. Tofade speaking" },
  { src: withBasePath("/inauguration-students.jpg"), alt: "Prof. Tofade with students" },
  { src: withBasePath("/DrToyinEscalator.png"), alt: "Prof. Tofade with students" },
  { src: withBasePath("/SF_PBweb-14.jpg"), alt: "Prof. Tofade portrait" },
]

export function GallerySection() {
  return (
    <section className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 px-7 pt-24">
      {photos.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/5] overflow-hidden rounded-md">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1240px) 50vw, 300px"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  )
}
