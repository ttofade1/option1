import { Photo, PhotoRow } from "@/components/photo"

/** Each row lines its photos up at one height, every photo at its own shape so nobody is cropped out. */
const rows: { src: string; caption: string }[][] = [
  [
    { src: "/howard-colleagues-3.jpeg", caption: "With fellow academic leaders at Howard University" },
    { src: "/howard-colleagues-7.jpeg", caption: "With fellow academic leaders at Howard University" },
    { src: "/francke-medal.jpeg", caption: "ASHP Donald E. Francke Medal, 2022" },
  ],
  [
    { src: "/fip-workshop-facilitators.jpeg", caption: "Building leaders with colleagues around the world" },
    { src: "/colleagues-selfie.jpeg", caption: "Building leaders with colleagues around the world" },
    { src: "/howard-highlights-banner.jpeg", caption: "Howard University College of Pharmacy" },
    { src: "/howard-faculty-group.jpeg", caption: "Howard University College of Pharmacy" },
  ],
]

export function MyStoryPhotoStrip() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col gap-6 px-7 pt-[88px]">
      {rows.map((row) => (
        <PhotoRow
          key={row[0].src}
          items={row.map((photo) => ({
            src: photo.src,
            render: (
              <figure className="flex flex-col gap-2.5">
                <Photo src={photo.src} alt={photo.caption} sizes="(max-width: 640px) 100vw, 400px" className="h-auto w-full rounded-md" />
                <figcaption className="font-lato text-[13px] leading-[1.5] text-brand-muted">{photo.caption}</figcaption>
              </figure>
            ),
          }))}
        />
      ))}
    </section>
  )
}
