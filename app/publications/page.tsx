import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PublicationsHero } from "@/components/publications/hero"
import { PublicationsList } from "@/components/publications/list"

export const metadata = {
  title: "Publications | Dr. Toyin Tofade",
  description: "Research and scholarship by Dr. Toyin Tofade spanning pharmacy practice, pharmaceutical education, and health sciences leadership.",
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <PublicationsHero />
      <PublicationsList />
      <Footer />
    </main>
  )
}
