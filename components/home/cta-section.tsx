import { PrimaryButton, SecondaryButton } from "@/components/home/brand"

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1240px] px-7 py-24 text-center">
      <h2 className="mx-auto max-w-[820px] font-baskerville text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.25] text-pretty text-brand-navy">
        Partner with Prof. Tofade on your next chapter of transformation.
      </h2>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <PrimaryButton href="/work-with-me">Coaching &amp; Consulting</PrimaryButton>
        <SecondaryButton href="/speaker-request">Speaking Engagements</SecondaryButton>
      </div>
    </section>
  )
}
