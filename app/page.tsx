import type { Metadata, Viewport } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"
import { HeroSection } from "@/components/home/hero-section"
import { ImpactAreasSection } from "@/components/home/impact-areas-section"
import { GiftStorySection } from "@/components/home/gift-story-section"
import { LeadershipCarouselSection } from "@/components/home/leadership-carousel-section"
import { CoreValuesSection } from "@/components/home/core-values-section"
import { StatsSection } from "@/components/home/stats-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = pageMetadata({
  title: "Prof. Toyin Tofade | President Emerita, Executive Coach & Board Advisor",
  description:
    "Prof. Toyin Tofade is a global executive and transformational leader in higher education, governance, global leadership, and healthcare. President Emerita of Albany College of Pharmacy and Health Sciences.",
  path: "/",
})

export const viewport: Viewport = {
  themeColor: "#0B2A5B",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <Navigation />
      <HeroSection />
      <ImpactAreasSection />
      <StatsSection />
      <GiftStorySection />
      <LeadershipCarouselSection />
      <CoreValuesSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
