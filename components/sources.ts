import type { Source } from "@/components/cite"

/**
 * Central source registry for the whole site.
 *
 * Each page renders ONE consolidated "Sources & References" list at the bottom
 * (above the footer), built from that page's ordered list of source keys below.
 * Inline <Cite> markers derive their number from the SAME ordering via `n()`, so
 * a marker and its reference-list entry always agree — change the order in one
 * place and both update.
 */

export type SourceMeta = { href: string; label: string }

export const SOURCES = {
  OFFICE: {
    href: "https://www.acphs.edu/about/people/leadership/office-of-the-president/",
    label: "ACPHS — Office of the President, Prof. Toyin Tofade (tenure statistics)",
  },
  PARTNERSHIPS: {
    href: "https://www.acphs.edu/news/partnerships-extend-colleges-reach/",
    label: "ACPHS News — Partnerships Extend College's Reach (ACPHS–Russell Sage merger)",
  },
  STRATEGIC_PLAN: {
    href: "https://www.acphs.edu/about/strategic-plan/",
    label: "ACPHS — 2024–2029 Strategic Plan",
  },
  ENDOWED: {
    href: "https://thedig.howard.edu/all-stories/departing-college-pharmacy-dean-toyin-tofade-establishes-endowed-fund-leadership-development",
    label: "The Dig, Howard University — Departing Dean Establishes Endowed Fund for Leadership Development",
  },
  REFLECTS: {
    href: "https://thedig.howard.edu/all-stories/toyin-tofade-reflects-her-tenure-dean-college-pharmacy",
    label: "The Dig, Howard University — Toyin Tofade Reflects on Her Tenure as Dean of the College of Pharmacy",
  },
  BUSINESS: {
    href: "https://www.bizjournals.com/albany/news/2022/11/30/toyin-tofade-albany-college-of-pharmacy.html",
    label: "Albany Business Review — Toyin Tofade's calling: To be a leader of leaders",
  },
  ECKEL_UNCMC: {
    href: "https://www.uncmedicalcenter.org/uncmc/professional-education-and-services/pharmacy-residency-programs/overview-fred-eckel-award/",
    label: "UNC Medical Center — Fred Eckel Pharmacy Leadership Award",
  },
  ASHP_FRANCKE: {
    href: "https://www.ashp.org/about-ashp/awards/board-of-directors-awards/ashp-donald-francke-medal/past-recipients?loginreturnUrl=SSOCheckOnly",
    label: "ASHP — Donald E. Francke Medal, Past Recipients",
  },
  WIKI: {
    href: "https://en.wikipedia.org/wiki/Toyin_Tofade",
    label: "Wikipedia — Toyin Tofade",
  },
  RESEARCHGATE: {
    href: "https://www.researchgate.net/profile/Toyin-Tofade",
    label: "ResearchGate — Toyin Tofade profile (citation and publication counts)",
  },
    FIP: {
    href: "https://www.fip.org/academic-pharmacy",
    label: "FIP Academic Pharmacy Section",
  },
} as const

export type SourceKey = keyof typeof SOURCES

/** Per-page ordered source lists. Reference-list numbers follow this order. */
export const HOME_KEYS = ["OFFICE", "PARTNERSHIPS", "BUSINESS", "REFLECTS", "STRATEGIC_PLAN"] as const
export const HERSTORY_KEYS = ["ECKEL_UNCMC", "ENDOWED", "REFLECTS", "OFFICE", "PARTNERSHIPS"] as const
export const CAREER_KEYS = ["OFFICE", "ECKEL_UNCMC", "ASHP_FRANCKE"] as const
export const IMPACT_KEYS = ["ENDOWED", "PARTNERSHIPS", "WIKI", "ASHP_FRANCKE", "REFLECTS"] as const
export const PUBLICATIONS_KEYS = ["RESEARCHGATE"] as const
export const GLOBAL_KEYS = ["FIP", "ENDOWED"] as const

/** 1-based number for `key` within the given page ordering. */
export function n(keys: readonly SourceKey[], key: SourceKey): number {
  return keys.indexOf(key) + 1
}

/** Build the <References> list for a page from its ordered keys. */
export function buildSources(keys: readonly SourceKey[]): Source[] {
  return keys.map((key, i) => ({ n: i + 1, label: SOURCES[key].label, href: SOURCES[key].href }))
}
