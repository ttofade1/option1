import Image from "next/image"
import { Eyebrow, SectionHeading } from "@/components/home/brand"
import { SOURCES, type SourceKey } from "@/components/sources"
import { withBasePath } from "@/lib/base-path"

type Highlight = { value: string; label: string }

type Report = {
  category: string
  institution: string
  institutionHref?: string
  document: string
  source: SourceKey
  cover: string
  coverAlt: string
  highlights: Highlight[]
}

const reports: Report[] = [
  {
    category: "Global Policy Leadership",
    institution: "International Pharmaceutical Federation (FIP)",
    institutionHref: "https://www.fip.org",
    document: "FIP Nanjing Statements: Shaping Pharmacy and Pharmaceutical Sciences Education to 2030 (2024)",
    source: "FIP_NANJING",
    cover: "/reports/fip-nanjing-statements-2024-cover.jpg",
    coverAlt: "Cover of the FIP Nanjing Statements 2024 guidance document",
    highlights: [
      { value: "Co-chair", label: "Of the FIP advisory group that revised the Nanjing Statements on pharmacy education" },
      { value: "95", label: "Global education statements across 8 domains, from student admissions to research" },
      { value: "6 of 6", label: "WHO regions represented on the advisory group" },
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
  {
    category: "Strategic Plan Execution",
    institution: "Albany College of Pharmacy and Health Sciences",
    document: "Strategic Plan 2024–29 · Year 2 Progress Report (2025–26)",
    source: "ACPHS_SP_REPORT",
    cover: "/reports/acphs-strategic-plan-2026-cover.jpg",
    coverAlt: "Cover of the ACPHS Strategic Plan 2024–29 Year 2 Progress Report",
    highlights: [
      { value: "61%", label: "Increase in giving, 2025" },
      { value: "First in NY", label: "Accelerated Pathway to MD program, launched with Western Atlantic University School of Medicine" },
      { value: "Approved", label: "NYSED Board of Regents approval of the ACPHS–Russell Sage merger" },
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
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
          {reports.map((report) => {
            const href = SOURCES[report.source].href
            return (
              <article
                key={report.source}
                className="flex flex-col gap-6 rounded-md border border-brand-border bg-white p-7 font-lato"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/5] w-full max-w-[150px] shrink-0 self-start overflow-hidden rounded-[4px] border border-brand-border transition-opacity duration-150 hover:opacity-85"
                >
                  <Image src={withBasePath(report.cover)} alt={report.coverAlt} fill sizes="150px" className="object-cover object-top" />
                </a>
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-text">{report.category}</p>
                    <h3 className="mt-2 font-baskerville text-[21px] font-bold leading-[1.3] text-brand-navy">
                      {report.institutionHref ? (
                        <a
                          href={report.institutionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-150 hover:text-brand-gold"
                        >
                          {report.institution}
                        </a>
                      ) : (
                        report.institution
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-brand-muted">
                      {report.document}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3 border-t border-brand-border pt-4">
                    {report.highlights.map((h) => (
                      <li key={h.label} className="grid grid-cols-[minmax(0,118px)_1fr] items-baseline gap-3">
                        <span className="whitespace-nowrap font-baskerville text-lg font-bold text-brand-navy">{h.value}</span>
                        <span className="text-[14.5px] leading-[1.5] text-brand-body">
                          {h.label}
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
