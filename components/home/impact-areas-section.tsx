import Link from "next/link"
import { Eyebrow, SectionHeading } from "@/components/home/brand"

const areas = [
  { n: "I", title: "Higher Education Leadership", body: "Institutional transformation, academic innovation, sustainable growth, and accreditation excellence." },
  { n: "II", title: "Governance & Board Leadership", body: "Strategic advisory, nonprofit and corporate board service, and mission-driven leadership." },
  { n: "III", title: "Global Leadership", body: "International partnerships and capacity building for stronger, more equitable systems." },
  { n: "IV", title: "Executive Coaching & Consulting", body: "Empowering diverse, high-performing leaders and teams, with systems strengthening." },
  { n: "V", title: "Policy & Advocacy", body: "Evidence-based policy, regulatory engagement, and global health diplomacy." },
  { n: "VI", title: "Healthcare Strategy", body: "Workforce development, interprofessional education, and strategic growth." },
]

export function ImpactAreasSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1240px] px-7 py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow onNavy>Key Areas of Impact</Eyebrow>
            <SectionHeading className="max-w-[640px]">Where Prof. Tofade creates lasting change</SectionHeading>
          </div>
          <Link
            href="/impact"
            className="font-lato text-[13px] font-bold uppercase tracking-[0.14em] text-brand-gold-on-navy transition-colors duration-150 hover:text-white"
          >
            View full profile →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-px border border-[rgba(217,181,110,0.3)] bg-[rgba(217,181,110,0.3)]">
          {areas.map((area) => (
            <div key={area.n} className="flex flex-col gap-3.5 bg-brand-navy px-8 py-9">
              <span
                aria-hidden
                className="flex size-11 items-center justify-center rounded-full border border-brand-gold-on-navy font-baskerville text-[15px] text-brand-gold-on-navy"
              >
                {area.n}
              </span>
              <h3 className="mt-2 font-baskerville text-[21px] font-bold leading-[1.3]">{area.title}</h3>
              <p className="font-lato text-[15px] leading-[1.65] text-brand-on-navy">{area.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
