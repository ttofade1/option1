import { Eyebrow, SectionHeading } from "@/components/home/brand"

export function IntroSection() {
  return (
    <section className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-14 px-7 py-24">
      <div>
        <Eyebrow>A Journey of Purpose</Eyebrow>
        <SectionHeading className="text-brand-navy">
          Decades building institutions, strengthening systems, and developing leaders across six continents.
        </SectionHeading>
      </div>
      <div className="flex flex-col gap-[18px] font-lato text-[17px] leading-[1.75] text-brand-body">
        <p className="text-pretty">
          Prof. Toyin Tofade is a global executive, governance leader, and certified executive coach whose work spans
          higher education, healthcare, and international policy. Her career has taken her from clinical pharmacy
          practice to senior leadership across four academic institutions, with partnerships reaching every inhabited
          continent.
        </p>
        <p className="text-pretty">
          She has led institutional transformation as a dean and as a college president, served on boards, and advised
          mission-driven organizations on strategy, workforce development, and equitable health systems.
        </p>
        <p className="text-pretty">
          Today she partners with boards, executives, universities, and health organizations worldwide — bringing
          systems thinking, strategic partnerships, and a lifelong commitment to leadership development to the work
          still ahead.
        </p>
      </div>
    </section>
  )
}
