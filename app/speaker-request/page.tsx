import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { pageMetadata } from "@/lib/seo"
import { SpeakerHero } from "@/components/speaker/hero"
import { SpeakerForm } from "@/components/speaker/form"
import { SpeakingTopics } from "@/components/speaker/topics"

export const metadata = pageMetadata({
  title: "Speaker Request | Prof. Toyin Tofade",
  description:
    "Invite Prof. Toyin Tofade to speak at your conference, convocation, leadership summit, or institutional event.",
  path: "/speaker-request",
})

export default function SpeakerRequestPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <SpeakerHero />
      <SpeakingTopics />
      <SpeakerForm />
      <Footer />
    </main>
  )
}
