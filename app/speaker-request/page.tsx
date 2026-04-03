import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpeakerHero } from "@/components/speaker/hero"
import { SpeakerForm } from "@/components/speaker/form"
import { SpeakingTopics } from "@/components/speaker/topics"

export const metadata = {
  title: "Speaker Request | Dr. Toyin Tofade",
  description: "Invite Dr. Toyin Tofade to speak at your conference, convocation, leadership summit, or institutional event.",
}

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
