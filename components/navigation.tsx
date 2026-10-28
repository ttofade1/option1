import Link from "next/link"

const navLinks = [
  { href: "/my-story", label: "My Story" },
  { href: "/career", label: "Career" },
  { href: "/impact", label: "Impact" },
  { href: "/publications", label: "Publications & Media" },
  { href: "/global-leaders", label: "Global Leaders" },
  { href: "/work-with-me", label: "Work With Me" },
]

export function Navigation() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand-border bg-[rgba(251,250,247,0.94)] backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-7 py-3.5 font-lato">
        <Link
          href="/"
          className="flex flex-col text-brand-navy transition-colors duration-150 hover:text-brand-gold"
        >
          <span className="font-baskerville text-lg font-bold tracking-[0.04em]">PROF. TOYIN TOFADE</span>
          <span className="mt-0.5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-gold-text">
            President Emerita
          </span>
        </Link>
        <nav className="order-3 flex flex-[1_1_100%] flex-wrap gap-x-[22px] gap-y-1.5 text-xs uppercase tracking-[0.08em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-navy transition-colors duration-150 hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/speaker-request"
          className="rounded-full bg-brand-navy px-[18px] py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors duration-150 hover:bg-brand-gold"
        >
          Request to Speak
        </Link>
      </div>
    </header>
  )
}
