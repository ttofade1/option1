import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"
import { CareerHero } from "@/components/career/hero"
import { CareerTimeline } from "@/components/career/timeline"
import { CareerGallery } from "@/components/career/gallery"
import { EducationSection } from "@/components/career/education"
import { HonorsSection } from "@/components/career/honors"
import { CareerClosingPhoto } from "@/components/career/closing-photo"
import { PageReferences } from "@/components/page-references"
import { CAREER_KEYS } from "@/components/sources"

export const metadata = pageMetadata({
  title: "Career | Prof. Toyin Tofade",
  description:
    "Prof. Toyin Tofade's career: clinical pharmacist at UNC Hospitals, Dean of Howard University College of Pharmacy, and 10th President of ACPHS.",
  path: "/career",
})

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <CareerHero />
      <CareerTimeline />
      <CareerGallery />
      <EducationSection />
      <HonorsSection />
      <CareerClosingPhoto />
      <PageReferences keys={CAREER_KEYS} />
      <Footer />
    </main>
  )
}
