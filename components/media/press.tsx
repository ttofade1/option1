"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Newspaper, ExternalLink } from "lucide-react"

const pressItems = [
  {
    outlet: "Howard University's News & Stories Hub",
    title: "Departing College of Pharmacy Dean Toyin Tofade Establishes Endowed Fund for Leadership Development",
    link: "https://thedig.howard.edu/all-stories/departing-college-pharmacy-dean-toyin-tofade-establishes-endowed-fund-leadership-development",
  },
  {
    outlet: "Albany Business Review",
    title: "Toyin Tofade's calling: To be a leader of leaders",
    link: "https://www.bizjournals.com/albany/news/2022/11/30/toyin-tofade-albany-college-of-pharmacy.html",
  },
  {
    outlet: "Albany College of Pharmacy and Health Sciences News",
    title: "Partnerships Extend College’s Reach",
    link: "https://www.acphs.edu/news/partnerships-extend-colleges-reach/?fbclid=IwY2xjawQ3tZ5leHRuA2FlbQIxMABicmlkETFWREp2M2tmRUsxc2YzcmYwc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkZR8b2zcK6mT7AF2MlLNAVq8bC04-h3J9_VVpn6R6btG3iWeJT9hulirQYg_aem_JGcqi6Evs3DbzPlWPQLGuA",
  },
  {
    outlet: "AAPS News Magazine",
    title: "My Mentorship Journey: An Interview with Toyin Tofade, President, Albany College of Pharmacy and Health Sciences",
    link: "https://www.aapsnewsmagazine.org/aapsnewsmagazine/articles/new-page2/mar24/career-success-mar24b",
  },
  {
  outlet: "Connect Nigeria",
  title: "Nigerian Scholar, Toyin Tofade, Emerges First Black Female President In American College",
  link: "https://articles.connectnigeria.com/nigerian-scholar-toyin-tofade-emerges-first-black-female-president-in-american-college/",
  },
  {
    outlet: "Capital Region Chamber",
    title: "New President Selected at Albany College of Pharmacy and Health Sciences",
    link: "https://capitalregionchamber.com/news/new-president-selected-at-albany-college-of-pharmacy-and-health-sciences/",
  },
]

export function PressSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-label text-sm tracking-[0.15em] uppercase text-center mb-4">
            Press Coverage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-16">
            Featured Articles
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {pressItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 50}>
              <a
                href={item.link}
                target="_blank"
                className="flex gap-4 p-6 bg-cream-card border border-border hover:border-gold transition-all duration-300 group"
              >
                <Newspaper className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gold text-sm font-medium mb-1">{item.outlet}</p>
                  <h3 className="text-text-heading font-medium group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-divider group-hover:text-gold transition-colors shrink-0" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
