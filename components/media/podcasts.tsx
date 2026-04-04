"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Mic, ExternalLink } from "lucide-react"

const podcasts = [
  {
    show: "Unscripted",
    episode: "Servant Leadership and the Importance of Sponsorship",
    platform: "Apple Podcasts",
    link: "https://podcasts.apple.com/us/podcast/50-toyin-tofade-ms-pharmd-bcps-cpcc-ffip-servant-leadership/id1578805977?i=1000607586023",
  },
  {
    show: "Visionary MD",
    episode: "Mentorship across disciplines with President Toyin Tofade",
    platform: "Apple Podcasts",
    link: "https://podcasts.apple.com/us/podcast/mentorship-across-disciplines-with-president-toyin/id1700557468?i=1000656643905",
  },
  {
    show: "Center for Women, Gender and Global Leadership",
    episode: "Women in Leadership: Dean Toyin Tofade",
    link: "https://www.youtube.com/watch?v=DTlmqEF8isY",
  },
    {
    show: "International Pharmaceutical Federation",
    episode: "Shaping the future of pharmacy education",
    link: "https://www.youtube.com/watch?v=msJWBGyyf28",
  },
]

export function PodcastsSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase text-center mb-4">
            Audio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-16">
            Podcasts & Audio
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <AnimatedSection key={podcast.show} delay={index * 50}>
              <a
                href={podcast.link}
                target="_blank"
                className="flex gap-4 p-6 border border-navy-muted/20 hover:border-gold/50 transition-all duration-300 group"
              >
                <Mic className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-cream font-medium mb-1 group-hover:text-gold transition-colors">
                    {podcast.show}
                  </h3>
                  <p className="text-navy-muted text-sm">{podcast.episode}</p>
                  {podcast.platform && (
                    <p className="text-gold text-xs mt-2">{podcast.platform}</p>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-navy-muted/50 group-hover:text-gold transition-colors shrink-0" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
