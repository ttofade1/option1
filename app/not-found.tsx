import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MyStoryExploreMore } from "@/components/my-story/explore-more"

// GitHub Pages serves out/404.html for unknown URLs; send visitors (and crawlers) back into the site.
export const metadata: Metadata = {
  title: "Page Not Found | Prof. Toyin Tofade",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <Navigation />
      <section className="mx-auto max-w-[1240px] px-7 pt-24 font-lato">
        <h1 className="font-baskerville text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.12] text-brand-navy">
          Page not found
        </h1>
        <p className="mt-4 max-w-[560px] text-[17px] leading-[1.7] text-brand-body">
          The page you were looking for has moved or no longer exists. Start from the{" "}
          <Link href="/" className="text-brand-navy underline">
            home page
          </Link>{" "}
          or explore below.
        </p>
      </section>
      <MyStoryExploreMore />
      <Footer />
    </main>
  )
}
