import { Cite } from "@/components/cite"
import { Eyebrow, SectionHeading } from "@/components/home/brand"
import { SOURCES, HOME_KEYS, n } from "@/components/sources"

const stats = [
  { value: "Carnegie", label: "Carnegie Research University classification for ACPHS", category: "2025" },
  { value: "9", label: "New academic programs launched in two years", category: "2024, 2025" },
  { value: "61%", label: "Increase in giving & increased alumni engagement", category: "2025" },
  { value: "80%", label: "Medical school placement rate for students", category: "2025" },
  { value: "Power 50 × 3", label: "Albany Business Review Power 50 three consecutive years", category: "2023, 2024, 2025" },
  { value: "20+ Years", label: "Building high-performing teams", category: "Since 2002" },
  { value: "210%", label: "Year-over-year increase in PharmD Year-1 deposits since 2022", category: "2024" },
  { value: "6 Continents", label: "International partnerships built at Howard, spanning every inhabited continent", category: "2016–2022" },
]

export function StatsSection() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-[1240px] px-7 py-24">
        <Eyebrow>Track Record</Eyebrow>
        <SectionHeading className="max-w-[720px] text-brand-navy">
          Results across institutions, sectors, and borders
          <Cite n={n(HOME_KEYS, "OFFICE")} href={SOURCES.OFFICE.href} />
          <Cite n={n(HOME_KEYS, "BUSINESS")} href={SOURCES.BUSINESS.href} />
          <Cite n={n(HOME_KEYS, "REFLECTS")} href={SOURCES.REFLECTS.href} />
        </SectionHeading>
        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-5">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-2.5 rounded-md border border-brand-border bg-white px-[26px] py-7 font-lato"
            >
              <p className="font-baskerville text-4xl font-bold leading-[1.1] text-brand-navy">{stat.value}</p>
              <p className="text-[15px] leading-[1.55] text-brand-body">{stat.label}</p>
              <p className="mt-auto pt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-gold-text">
                {stat.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
