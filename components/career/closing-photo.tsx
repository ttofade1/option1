import { Photo } from "@/components/photo"

export function CareerClosingPhoto() {
  return (
    <section className="py-24 bg-cream">
      <figure className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Photo
          src="/aacp-colleagues.jpeg"
          alt="Prof. Tofade with fellow leaders of the American Association of Colleges of Pharmacy"
          sizes="(max-width: 896px) 100vw, 832px"
          className="h-auto w-full rounded-md"
        />
        <figcaption className="mt-3 text-sm text-text-body text-center">
          With fellow leaders at the American Association of Colleges of Pharmacy (AACP)
        </figcaption>
      </figure>
    </section>
  )
}
