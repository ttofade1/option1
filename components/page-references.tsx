"use client"

import { AnimatedSection } from "@/components/animated-section"
import { References } from "@/components/cite"
import { buildSources, type SourceKey } from "@/components/sources"

/**
 * One consolidated "Sources & References" list per page, rendered at the bottom
 * of the page just above the footer. `keys` is the page's ordered source list
 * (see components/sources.ts); the numbers here match the inline <Cite> markers.
 */
export function PageReferences({ keys }: { keys: readonly SourceKey[] }) {
  return (
    <section className="bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          <References sources={buildSources(keys)} variant="light" />
        </AnimatedSection>
      </div>
    </section>
  )
}
