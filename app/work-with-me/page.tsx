import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"
import { WorkWithMeHero } from "@/components/work-with-me/hero"
import { WorkWithMeContent } from "@/components/work-with-me/content"
import { WorkWithMeForm } from "@/components/work-with-me/form"

export const metadata = pageMetadata({
  title: "Work With Me | Prof. Toyin Tofade",
  description:
    "Executive coaching, board advisory, and team development with Prof. Toyin Tofade, a Certified Professional Co-Active Coach (CPCC) and former college president.",
  path: "/work-with-me",
})

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <WorkWithMeHero />
      <WorkWithMeContent />
      <WorkWithMeForm />
      <Footer />
    </main>
  )
}
