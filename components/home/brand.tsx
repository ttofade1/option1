import Link from "next/link"
import type { ReactNode } from "react"

export function Eyebrow({ children, onNavy = false, className = "" }: { children: ReactNode; onNavy?: boolean; className?: string }) {
  return (
    <p
      className={`font-lato text-xs font-bold uppercase tracking-[0.28em] ${
        onNavy ? "text-brand-gold-on-navy" : "text-brand-gold-text"
      } ${className}`}
    >
      {children}
    </p>
  )
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 font-baskerville text-[clamp(28px,3vw,40px)] font-normal leading-[1.25] text-pretty ${className}`}
    >
      {children}
    </h2>
  )
}

const pill =
  "inline-block rounded-full font-lato text-[13px] font-bold uppercase tracking-[0.12em] transition-colors duration-150"

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${pill} bg-brand-navy px-[26px] py-[15px] text-white hover:bg-brand-gold`}>
      {children}
    </Link>
  )
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${pill} border border-brand-navy px-[26px] py-[14px] text-brand-navy hover:border-brand-gold hover:text-brand-gold`}
    >
      {children}
    </Link>
  )
}

/** Gold diamond used as a divider ornament and value marker. */
export function Diamond({ size = 9 }: { size?: number }) {
  return <span aria-hidden className="block shrink-0 rotate-45 bg-brand-gold" style={{ width: size, height: size }} />
}
