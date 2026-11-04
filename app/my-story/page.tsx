import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata, SITE_URL } from "@/lib/seo"
import { MyStoryHero } from "@/components/my-story/hero"
import { MyStoryBio } from "@/components/my-story/bio"
import { MyStoryPhotoStrip } from "@/components/my-story/photo-strip"
import { MyStoryExploreMore } from "@/components/my-story/explore-more"

export const metadata = pageMetadata({
  title: "My Story | Prof. Toyin Tofade",
  description:
    "From Ile-Ife to the world: Prof. Toyin Tofade on the mentors, institutions, and global work that shaped her leadership.",
  path: "/my-story",
})

// Marks this as Prof. Tofade's profile page (Google "Profile page" rich result); the Person is defined in the root layout.
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/my-story`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Toyin Tofade",
    alternateName: "Prof. Toyin Tofade",
    image: `${SITE_URL}/og-hero.jpg`,
    url: SITE_URL,
  },
}

export default function MyStoryPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <Navigation />
      <MyStoryHero />
      <MyStoryBio />
      <MyStoryPhotoStrip />
      <MyStoryExploreMore />
      <Footer />
    </main>
  )
}
