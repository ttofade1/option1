import Image from "next/image"
import { Eyebrow } from "@/components/home/brand"
import { withBasePath } from "@/lib/base-path"

export function GiftStorySection() {
  return (
    <section
      id="gift"
      className="mx-auto grid max-w-[1240px] scroll-mt-28 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-14 px-7 py-24"
    >
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md">
          <Image
            src={withBasePath("/ray-of-sunshine-gift.jpeg")}
            alt="The gift a student left on my desk"
            fill
            sizes="(max-width: 860px) 100vw, 600px"
            className="object-cover"
          />
        </div>
        <p className="absolute -bottom-px -left-px bg-brand-bg pt-3.5 pr-[18px] font-lato text-xs font-bold uppercase tracking-[0.22em] text-brand-gold-text">
          Opened, at last
        </p>
      </div>
      <div>
        <Eyebrow>A Story I Carry</Eyebrow>
        <h2 className="mt-4 font-baskerville text-[clamp(30px,3.4vw,46px)] font-normal leading-[1.2] text-pretty text-brand-navy">
          The gift I kept wrapped
        </h2>
        <div className="mt-7 flex flex-col gap-[18px] font-lato text-lg leading-[1.75] text-brand-body">
          <p className="text-pretty">
            At the end of my first year as a dean, a student placed a wrapped gift and a handwritten letter on my desk.
            She called me &ldquo;a ray of sunshine&rdquo; and &ldquo;a stunning example of leadership.&rdquo;
          </p>
          <p className="text-pretty">
            I didn&rsquo;t open it. For about 5 years it sat on my desk, still wrapped — a daily reminder that the people I serve
            must remain top of mind, top of heart, and top of focus in every decision.
          </p>
          <p className="text-pretty">I opened it only when I felt I had truly earned it.</p>
        </div>
        <p className="mt-8 border-t border-brand-border-strong pt-6 font-baskerville text-[clamp(19px,1.8vw,23px)] italic leading-[1.5] text-pretty text-brand-navy">
          Leadership is a gift you keep earning.
        </p>
      </div>
    </section>
  )
}
