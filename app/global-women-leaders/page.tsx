import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GWLHero } from "@/components/global-women-leaders/hero"
import { GWLContent } from "@/components/global-women-leaders/content"
import { GWLCta } from "@/components/global-women-leaders/cta"

export const metadata = {
  title: "Global Women Leaders Inc. | Dr. Toyin Tofade",
  description: "Global Women Leaders Inc. inspires and trains women internationally to maximize their leadership potential across sectors, generations, and borders.",
}

export default function GlobalWomenLeadersPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <GWLHero />
      <GWLContent />
      <GWLCta />
      <Footer />
    </main>
  )
}
