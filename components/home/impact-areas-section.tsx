import Link from "next/link"
import { Eyebrow } from "@/components/home/brand"

const areas = [
  { n: "I", title: "Higher Education Leadership", body: "Institutional transformation, academic innovation, sustainable growth, and accreditation excellence." },
  { n: "II", title: "Governance & Board Leadership", body: "Strategic advisory, nonprofit and corporate board service, and mission-driven leadership." },
  { n: "III", title: "Executive Coaching & Consulting", body: "Empowering high-performing leaders and teams across business, higher education, and healthcare." },
  { n: "IV", title: "Policy & Advocacy", body: "Evidence-based policy, regulatory engagement, and global health diplomacy." },
  { n: "V", title: "Healthcare Strategy", body: "Workforce development, interprofessional education, and strategic growth." },
]

export function ImpactAreasSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1240px] px-7 pt-[72px] pb-[88px]">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Eyebrow onNavy>Key Areas of Impact</Eyebrow>
          <Link
            href="/impact"
            className="font-lato text-[13px] font-bold uppercase tracking-[0.14em] text-brand-gold-on-navy transition-colors duration-150 hover:text-white"
          >
            View full profile →
          </Link>
        </div>

        {/* Each cell draws its own hairline outline, so an empty trailing cell stays clean. */}
        <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-px">
          {areas.map((area) => (
            <div
              key={area.n}
              className="flex flex-col gap-3.5 bg-brand-navy px-8 py-9 outline outline-1 outline-[rgba(217,181,110,0.3)]"
            >
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
