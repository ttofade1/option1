import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MediaHero } from "@/components/media/hero"
import { PressSection } from "@/components/media/press"
import { PodcastsSection } from "@/components/media/podcasts"

export const metadata = {
  title: "Media | Dr. Toyin Tofade",
  description: "Press coverage, podcasts, and media appearances featuring Dr. Toyin Tofade.",
}

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <MediaHero />
      <PressSection />
      <PodcastsSection />
      <Footer />
    </main>
  )
}
