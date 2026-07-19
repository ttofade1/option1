"use client"

/**
 * Site-wide citation system.
 *
 * <Cite href n /> renders a small superscript numbered marker immediately after
 * a factual claim, linking directly to its source (opens in a new tab). The same
 * numbers are listed at the bottom of the page inside <References />.
 *
 * Colors are limited to the existing palette: gold (#C6993A) markers so they
 * read on both navy and cream backgrounds, brown (#633806, text-label) for the
 * reference list. See SOURCING.md for the fact-to-source audit trail.
 */

export type Source = {
  n: number
  label: string
  href: string
}

export function Cite({ href, n }: { href: string; n: number }) {
  return (
    <sup className="ml-0.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title="View source"
        className="text-gold hover:text-gold/70 font-medium no-underline text-[0.7em] align-super"
      >
        [{n}]
      </a>
    </sup>
  )
}

export function References({
  sources,
  variant = "light",
}: {
  sources: Source[]
  /** "light" = on cream backgrounds, "dark" = on navy backgrounds */
  variant?: "light" | "dark"
}) {
  const headingColor = variant === "dark" ? "text-gold" : "text-label"
  const numberColor = variant === "dark" ? "text-gold" : "text-label"
  const linkColor =
    variant === "dark"
      ? "text-navy-muted hover:text-cream"
      : "text-text-body hover:text-label"
  const borderColor = variant === "dark" ? "border-navy-muted/20" : "border-divider/40"

  return (
    <aside className={`mt-16 pt-8 border-t ${borderColor}`} aria-label="Sources and references">
      <h2 className={`${headingColor} text-xs tracking-[0.15em] uppercase mb-4`}>
        Sources &amp; References
      </h2>
      <ol className="space-y-2">
        {sources.map((s) => (
          <li key={s.n} id={`ref-${s.n}`} className="flex gap-2 text-xs leading-relaxed">
            <span className={`${numberColor} font-medium shrink-0`}>[{s.n}]</span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkColor} underline decoration-dotted underline-offset-2 break-words transition-colors`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
