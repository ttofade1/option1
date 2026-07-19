import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImpactHero } from "@/components/impact/hero"
import { ImpactSections } from "@/components/impact/sections"
import { PageReferences } from "@/components/page-references"
import { IMPACT_KEYS } from "@/components/sources"

export const metadata = {
  title: "Impact | Prof. Toyin Tofade",
  description: "The mark of a leader is what she leaves behind. Discover Prof. Tofade's lasting impact on students, the pharmacy profession, and health equity.",
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <ImpactHero />
      <ImpactSections />
      <PageReferences keys={IMPACT_KEYS} />
      <Footer />
    </main>
  )
}
