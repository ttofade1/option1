import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewForm } from "@/components/review/form"

// Unlisted: shared by link with invited reviewers only, so keep it out of search.
export const metadata: Metadata = {
  title: "Share a Review | Prof. Toyin Tofade",
  robots: { index: false, follow: false },
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-brand-bg font-lato text-brand-ink">
      <Navigation />
      <section className="mx-auto max-w-[720px] px-7 py-24">
        <ReviewForm />
      </section>
      <Footer />
    </main>
  )
}
