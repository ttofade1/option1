import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PublicationsHero } from "@/components/publications/hero"
import { PublicationsList } from "@/components/publications/list"
import { PressSection } from "@/components/media/press"
import { PodcastsSection } from "@/components/media/podcasts"

export const metadata = {
  title: "Publications & Media | Prof. Toyin Tofade",
  description: "Research publications, press coverage, podcasts, and media appearances by Prof. Toyin Tofade spanning pharmacy practice, pharmaceutical education, and health sciences leadership.",
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <PublicationsHero />
      <PublicationsList />
      <PressSection />
      <PodcastsSection />
      <Footer />
    </main>
  )
}
