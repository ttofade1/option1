import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImpactHero } from "@/components/impact/hero"
import { ImpactSections } from "@/components/impact/sections"

export const metadata = {
  title: "Impact | Dr. Toyin Tofade",
  description: "The mark of a leader is what she leaves behind. Discover Dr. Tofade's lasting impact on students, the pharmacy profession, and health equity.",
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <ImpactHero />
      <ImpactSections />
      <Footer />
    </main>
  )
}
