import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MyStoryHero } from "@/components/my-story/hero"
import { MyStoryBio } from "@/components/my-story/bio"
import { MyStoryPhotoStrip } from "@/components/my-story/photo-strip"
import { MyStoryExploreMore } from "@/components/my-story/explore-more"

export const metadata = {
  title: "My Story | Prof. Toyin Tofade",
  description:
    "From Ile-Ife to the world: Prof. Toyin Tofade on the mentors, institutions, and global work that shaped her leadership.",
}

export default function MyStoryPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <Navigation />
      <MyStoryHero />
      <MyStoryBio />
      <MyStoryPhotoStrip />
      <MyStoryExploreMore />
      <Footer />
    </main>
  )
}
