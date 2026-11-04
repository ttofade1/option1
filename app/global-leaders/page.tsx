import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"
import { GWLHero } from "@/components/global-women-leaders/hero"
import { GWLContent } from "@/components/global-women-leaders/content"
import { PageReferences } from "@/components/page-references"
import { GLOBAL_KEYS } from "@/components/sources"

export const metadata = pageMetadata({
  title: "Global Leaders | Prof. Toyin Tofade",
  description:
    "Raising the next generation of leaders through mentorship, FIP fellowship, and executive coaching — equipping leaders across sectors, generations, and borders.",
  path: "/global-leaders",
})

export default function GlobalWomenLeadersPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <GWLHero />
      <GWLContent />
      <PageReferences keys={GLOBAL_KEYS} />
      <Footer />
    </main>
  )
}
