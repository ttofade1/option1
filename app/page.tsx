import type { Metadata, Viewport } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { ImpactAreasSection } from "@/components/home/impact-areas-section"
import { StatsSection } from "@/components/home/stats-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { CTASection } from "@/components/home/cta-section"
import { PageReferences } from "@/components/page-references"
import { HOME_KEYS } from "@/components/sources"

export const metadata: Metadata = {
  title: "Prof. Toyin Tofade | President Emerita, Board Strategist/Advisor, Executive Coach, Enterprise Consultant, Health Care Association Leader",
  description:
    "Prof. Toyin Tofade is a global executive and transformational leader in higher education, governance, global leadership, and healthcare.",
  keywords: [
    "Toyin Tofade",
    "Executive Coach",
    "Governance",
    "Board Leadership",
    "Higher Education Leadership",
    "Global Health",
    "Healthcare Strategy",
  ],
  openGraph: {
    title: "Prof. Toyin Tofade | President Emerita, Board Strategist/Advisor, Executive Coach, Enterprise Consultant, Health Care Association Leader",
    description:
      "A global executive and transformational leader in higher education, governance, global leadership, and healthcare.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B2A5B",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ImpactAreasSection />
      <StatsSection />
      <ReviewsSection />
      <CTASection />
      <PageReferences keys={HOME_KEYS} />
      <Footer />
    </main>
  )
}
