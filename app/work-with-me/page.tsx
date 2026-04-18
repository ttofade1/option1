import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkWithMeHero } from "@/components/work-with-me/hero"
import { WorkWithMeContent } from "@/components/work-with-me/content"
import { WorkWithMeForm } from "@/components/work-with-me/form"

export const metadata = {
  title: "Work With Me | Prof. Toyin Tofade",
  description: "Executive coaching, leadership advisory, and speaking engagements with Prof. Toyin Tofade. Certified Professional Co-active Coach (CPCC) with over two decades of executive leadership experience.",
}

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
