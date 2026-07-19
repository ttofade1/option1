"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Users, Briefcase, Building2, Award, Mic } from "lucide-react"


const offerings = [
  {
    title: "Executive Leadership Coaching",
    subtitle: "For presidents, deans, VPs, and senior leaders in higher education and healthcare",
    icon: Award,
    items: [
      "Leading institutional transformation, merger, and complex organisational change",
      "Strategic vision, board relations, and governance dynamics",
      "Executive presence, stakeholder communications, and crisis leadership",
      "Building high-performing teams and sustainable leadership cultures",
      "Leading as a first, a woman, or an underrepresented leader in a traditional institution",
    ],
  },
  {
    title: "Organisational & Team Development",
    subtitle: "For leadership teams building alignment and high performance",
    icon: Building2,
    items: [
      "Strategic planning facilitation for academic and healthcare institutions",
      "Team culture diagnostics, alignment workshops, and accreditation-ready cultures",
      "Facilitating retreats",
      "Higher education consulting",
    ],
  },
  {
    title: "Board Advisory & Governance",
    subtitle: "For boards seeking executive insight at the governance level",
    icon: Briefcase,
    items: [
      "Institutional strategy, president/CEO evaluation, and health sciences sector expertise",
      "Strategic partnership and merger evaluation advisory",
    ],
  },
]

export function WorkWithMeContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-text-body text-lg leading-relaxed mb-0">
              Prof. Toyin Tofade is a Certified Professional Co-active Coach (CPCC) with over two decades of executive leadership experience across higher education, healthcare, and global policy. She has led an institutional merger, secured public-private partnerships, built high-performing teams across multiple institutions, and navigated the full complexity of senior academic and healthcare administration.
            </p>
          </div>
        </AnimatedSection>



        {/* Coaching Offerings */}
        <AnimatedSection delay={200}>
          <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-8">
            Coaching Offerings
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering.title} delay={250 + index * 50}>
              <div className="p-8 bg-cream-card border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <offering.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-text-heading mb-1">
                      {offering.title}
                    </h3>
                    <p className="text-text-body text-sm italic">
                      {offering.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {offering.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span className="text-text-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Availability Note */}
        <AnimatedSection delay={500}>
          <div className="mt-16 p-8 bg-gold-light border border-gold/30 text-center">
            <p className="text-label font-medium mb-2">A Note on Availability</p>
            <p className="text-text-body text-sm max-w-2xl mx-auto">
              Prof. Tofade maintains a selective coaching practice alongside her ongoing advisory commitments. Engagements are accepted on a limited basis to ensure depth and genuine impact.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
