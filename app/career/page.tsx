import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareerHero } from "@/components/career/hero"
import { CareerTimeline } from "@/components/career/timeline"
import { EducationSection } from "@/components/career/education"
import { HonorsSection } from "@/components/career/honors"
import { PageReferences } from "@/components/page-references"
import { CAREER_KEYS } from "@/components/sources"

export const metadata = {
  title: "Career | Prof. Toyin Tofade",
  description: "A career timeline spanning clinical practice, academic leadership, and institutional transformation.",
}

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <CareerHero />
      <CareerTimeline />
      <EducationSection />
      <HonorsSection />
      <PageReferences keys={CAREER_KEYS} />
      <Footer />
    </main>
  )
}
