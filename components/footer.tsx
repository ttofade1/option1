import Link from "next/link"

const contactLinks = [
  { href: "tel:+19842640855", label: "+1 984-264-0855" },
  { href: "mailto:toyin@toyintofade.com", label: "toyin@toyintofade.com" },
  { href: "https://www.toyintofade.com", label: "www.toyintofade.com" },
  { href: "https://www.linkedin.com/in/toyin-tofade-a604181a/", label: "LinkedIn", external: true },
]

const exploreLinks = [
  { href: "/her-story", label: "Her Story" },
  { href: "/career", label: "Career" },
  { href: "/global-leaders", label: "Global Leaders" },
  { href: "/speaker-request", label: "Speaker Request" },
]

const taglines = ["Strategic Partnerships", "Systems Thinking", "Inspiring Results", "Leadership Development"]

const columnHeading = "text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-on-navy"
const footerLink = "text-white transition-colors duration-150 hover:text-brand-gold-on-navy"

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-gold bg-brand-navy font-lato text-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-10 px-7 pt-[72px] pb-10">
        <div>
          <p className="font-baskerville text-[22px] font-bold">Prof. Toyin Tofade</p>
          <p className="mt-2.5 text-xs font-bold uppercase leading-[1.7] tracking-[0.2em] text-brand-gold-on-navy">
            Global Executive &amp; Transformational Leader
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <h3 className={columnHeading}>Contact</h3>
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={footerLink}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <h3 className={columnHeading}>Explore</h3>
          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href} className={footerLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[rgba(217,181,110,0.3)]">
        <ul className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-x-7 gap-y-2.5 px-7 py-[22px] text-xs uppercase tracking-[0.22em] text-brand-on-navy">
          {taglines.map((tagline, i) => (
            <li key={tagline} className={i > 0 ? "border-l border-brand-gold-on-navy pl-7" : undefined}>
              {tagline}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-1.5 px-7 pb-7 text-center text-xs text-brand-on-navy-muted">
          <p>&copy; 2026 Prof. Toyin Tofade. All rights reserved.</p>
          <a
            href="https://favored.digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors duration-150 hover:text-brand-gold-on-navy"
          >
            Website by favored.digital
          </a>
        </div>
      </div>
    </footer>
  )
}
