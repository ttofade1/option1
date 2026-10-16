import { Diamond, Eyebrow, SectionHeading } from "@/components/home/brand"
import { reviews } from "@/components/reviews"

export function ReviewsSection() {
  if (reviews.length === 0) return null

  return (
    <section className="mx-auto max-w-[1240px] px-7 pt-24">
      <Eyebrow>In Their Words</Eyebrow>
      <SectionHeading className="max-w-[720px] text-brand-navy">What leaders say about working with Prof. Tofade</SectionHeading>
      <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-5">
        {reviews.map((review) => (
          <figure
            key={review.quote.slice(0, 48)}
            className="flex flex-col gap-5 rounded-md border border-brand-border bg-white px-[26px] py-7"
          >
            <blockquote className="font-baskerville text-[17px] italic leading-[1.7] text-brand-navy text-pretty">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 font-lato">
              <Diamond />
              <span>
                <span className="block text-sm font-bold text-brand-navy">{review.name ?? "Anonymous"}</span>
                {review.role && <span className="block text-[13px] text-brand-muted">{review.role}</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
