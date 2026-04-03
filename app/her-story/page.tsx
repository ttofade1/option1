import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HerStoryHero } from "@/components/her-story/hero"
import { HerStoryContent } from "@/components/her-story/content"

export const metadata = {
  title: "Her Story | Dr. Toyin Tofade",
  description: "A journey from Ile-Ife, Nigeria to the presidency of Albany College of Pharmacy and Health Sciences.",
}

export default function HerStoryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <HerStoryHero />
      <HerStoryContent />
      <Footer />
    </main>
  )
}
