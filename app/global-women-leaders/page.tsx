import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GWLHero } from "@/components/global-women-leaders/hero"
import { GWLContent } from "@/components/global-women-leaders/content"
import { GWLCta } from "@/components/global-women-leaders/cta"

export const metadata = {
  title: "Global Leaders | Prof. Toyin Tofade",
  description: "Raising the next generation of leaders through mentorship, FIP fellowship, and Global Women Leaders Inc. — equipping leaders across sectors, generations, and borders.",
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
