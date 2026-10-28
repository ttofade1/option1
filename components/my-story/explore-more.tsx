import Link from "next/link"
import { Eyebrow, SectionHeading } from "@/components/home/brand"

const links = [
  { title: "Career", description: "Clinical practice to the deanship and the presidency.", href: "/career" },
  { title: "Impact", description: "On students, the profession, community, and mentorship.", href: "/impact" },
  { title: "Global Leaders", description: "Inspiring and developing leaders across sectors and borders.", href: "/global-leaders" },
  { title: "Publications & Media", description: "Research, press coverage, and podcasts.", href: "/publications" },
]

export function MyStoryExploreMore() {
  return (
    <section className="mx-auto max-w-[1240px] px-7 pt-[88px] pb-24">
      <Eyebrow>Read More</Eyebrow>
      <SectionHeading className="text-brand-navy">The rest of the story</SectionHeading>
      <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-px border border-brand-border-strong bg-brand-border-strong">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col gap-3 bg-brand-bg px-7 py-8 font-lato text-brand-navy transition-colors duration-150 hover:bg-white"
          >
            <span className="font-baskerville text-xl font-bold">{link.title}</span>
            <span className="text-[15px] leading-[1.6] text-brand-body">{link.description}</span>
            <span className="mt-auto pt-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-gold-text">Explore →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
