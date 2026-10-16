import Image from "next/image"
import { Cite } from "@/components/cite"
import { Eyebrow, SectionHeading } from "@/components/home/brand"
import { SOURCES, HOME_KEYS, n, type SourceKey } from "@/components/sources"
import { withBasePath } from "@/lib/base-path"

type Highlight = { value: string; label: string; cite?: SourceKey }

type Report = {
  category: string
  institution: string
  document: string
  source: SourceKey
  cover: string
  coverAlt: string
  highlights: Highlight[]
}

// Each highlight comes from its report, except where `cite` points elsewhere.
const reports: Report[] = [
  {
    category: "Strategic Plan Execution",
    institution: "Albany College of Pharmacy and Health Sciences",
    document: "Strategic Plan 2024–29 · Year 2 Progress Report (2025–26)",
    source: "ACPHS_SP_REPORT",
    cover: "/reports/acphs-strategic-plan-2026-cover.jpg",
    coverAlt: "Cover of the ACPHS Strategic Plan 2024–29 Year 2 Progress Report",
    highlights: [
      { value: "61%", label: "Increase in giving, 2025", cite: "OFFICE" },
      { value: "First in NY", label: "Accelerated Pathway to MD program, launched with Western Atlantic University School of Medicine" },
      { value: "Approved", label: "NYSED Board of Regents approval of the ACPHS–Russell Sage merger" },
    ],
  },
  {
    category: "Dean’s Annual Report",
    institution: "Howard University College of Pharmacy",
    document: "2020–21 Annual Report",
    source: "HU_AR_2021",
    cover: "/reports/howard-pharmacy-annual-report-2021-cover.jpg",
    coverAlt: "Cover of the Howard University College of Pharmacy 2020–21 Annual Report",
    highlights: [
      { value: "76%", label: "Increase in giving since 2016" },
      { value: "#98 → #75", label: "U.S. News pharmacy school ranking, 2016 to 2020, making it the #1 HBCU pharmacy school" },
      { value: "18", label: "International partnerships in 16 countries across 6 continents" },
    ],
  },
]

export function StatsSection() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-[1240px] px-7 py-24">
        <Eyebrow>Key Statistics Under Her Leadership</Eyebrow>
        <SectionHeading className="max-w-[720px] text-brand-navy">
          Results across institutions, sectors, and borders
        </SectionHeading>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,520px),1fr))] gap-5">
          {reports.map((report) => {
            const href = SOURCES[report.source].href
            return (
              <article
                key={report.source}
                className="flex flex-wrap gap-7 rounded-md border border-brand-border bg-white p-7 font-lato"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/5] w-full max-w-[180px] shrink-0 self-start overflow-hidden rounded-[4px] border border-brand-border transition-opacity duration-150 hover:opacity-85"
                >
                  <Image src={withBasePath(report.cover)} alt={report.coverAlt} fill sizes="180px" className="object-cover object-top" />
                </a>
                <div className="flex min-w-[240px] flex-1 flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-text">{report.category}</p>
                    <h3 className="mt-2 font-baskerville text-[21px] font-bold leading-[1.3] text-brand-navy">
                      {report.institution}
                    </h3>
                    <p className="mt-1 text-sm text-brand-muted">
                      {report.document}
                      <Cite n={n(HOME_KEYS, report.source)} href={href} />
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3 border-t border-brand-border pt-4">
                    {report.highlights.map((h) => (
                      <li key={h.label} className="grid grid-cols-[minmax(0,128px)_1fr] items-baseline gap-3">
                        <span className="font-baskerville text-xl font-bold text-brand-navy">{h.value}</span>
                        <span className="text-[14.5px] leading-[1.5] text-brand-body">
                          {h.label}
                          {h.cite && <Cite n={n(HOME_KEYS, h.cite)} href={SOURCES[h.cite].href} />}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start pt-1 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors duration-150 hover:text-brand-gold"
                  >
                    View the report →
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
