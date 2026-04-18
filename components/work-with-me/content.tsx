"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Users, Briefcase, Building2, Award, Mic } from "lucide-react"

const audiences = [
  "Senior executives and presidents in higher education and healthcare",
  "Emerging leaders preparing for their first dean, VP, or C-suite role",
  "Women in leadership navigating historically exclusionary spaces",
  "Organizations seeking board advisory support on strategy, transformation, and health systems",
  "Professional associations and pharmacy/health sciences organizations seeking speakers, facilitators, and advisors",
]

const offerings = [
  {
    title: "Executive Leadership Coaching",
    subtitle: "For presidents, deans, VPs, and senior leaders navigating complex institutional environments",
    icon: Award,
    items: [
      "Strategic vision development and institutional positioning",
      "Leading through transformation, merger, and organizational change",
      "Board relations and governance dynamics",
      "Executive presence, communications, and stakeholder management",
      "Building and sustaining high-performing teams",
      "Navigating firsts: leading as a woman, as a person of color, or as an outsider in a traditional institution",
      "Resilience and sustainable leadership under pressure",
    ],
    engagement: "1:1 sessions, typically 3-6 month engagements",
  },
  {
    title: "Emerging Leader Accelerator",
    subtitle: "For directors, associate deans, and high-potential professionals preparing for executive roles",
    icon: Users,
    items: [
      "Defining and communicating your leadership identity",
      "Translating subject-matter expertise into institutional leadership",
      "Building strategic relationships and sponsor networks",
      "Navigating career transitions into senior academic and healthcare administration",
      "Developing an executive presence that opens doors",
    ],
    engagement: "Cohort or individual formats, typically 3-4 months",
  },
  {
    title: "Organizational & Team Development",
    subtitle: "For leadership teams building culture, alignment, and high performance",
    icon: Building2,
    items: [
      "Strategic planning facilitation for academic and healthcare institutions",
      "Leadership development program design",
      "Team culture diagnostics and alignment workshops",
      "DEI leadership integration: making inclusion a leadership discipline, not an initiative",
      "Building accreditation-ready cultures of excellence",
    ],
    engagement: "Custom engagements, typically workshop-based or 6-12 month advisory",
  },
  {
    title: "Board Advisory & Governance",
    subtitle: "For boards and organizations seeking executive insight at the governance level",
    icon: Briefcase,
    items: [
      "Board governance and institutional strategy advisory",
      "President/CEO evaluation frameworks for higher education boards",
      "Health sciences and pharmacy sector expertise for healthcare and academic boards",
      "Strategic partnership and merger evaluation advisory",
    ],
    engagement: "Retainer or project-based",
  },
  {
    title: "Speaking & Leadership Facilitation",
    subtitle: "For conferences, convenings, institutional events, and professional associations",
    icon: Mic,
    items: [
      "Transformational leadership in higher education and healthcare",
      "Health equity, pharmacy practice, and the future of health systems",
      "Women in leadership: breaking barriers, building legacies, and paying it forward",
      "Diversity, equity, and inclusion as institutional strategy",
      "Global health workforce development and international partnerships",
      "The pharmacist as a leader: from clinical practice to the executive suite",
      "Mentorship, resilience, and the architecture of a meaningful career",
      "Leading through merger and institutional transformation",
    ],
    engagement: "Keynote, panel, workshop, or fireside chat formats",
  },
]

export function WorkWithMeContent() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-text-body text-lg leading-relaxed mb-6">
              Prof. Toyin Tofade is a Certified Professional Co-active Coach (CPCC) with over two decades of executive leadership experience across higher education, healthcare, and global policy. She has built high-performing teams, led complex institutional transformations, navigated mergers, secured major public-private partnerships, and developed leaders at every level — from student pharmacists to deans and senior executives.
            </p>
            <p className="text-text-body text-lg leading-relaxed">
              Her coaching practice draws directly from this experience. She works with a select group of executives, emerging leaders, and institutions who are navigating the transitions, decisions, and pressures that come with significant responsibility — and who are ready to lead at a higher level.
            </p>
          </div>
        </AnimatedSection>

        {/* Who Prof. Tofade Works With */}
        <AnimatedSection delay={100}>
          <div className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-8">
              Who Prof. Tofade Works With
            </h2>
            <ul className="space-y-4">
              {audiences.map((audience, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2.5 shrink-0" />
                  <span className="text-text-body">{audience}</span>
                </li>
              ))}
            </ul>
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
                <ul className="space-y-2 mb-6 ml-16">
                  {offering.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span className="text-text-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gold text-sm font-medium ml-16">
                  Engagement: {offering.engagement}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Availability Note */}
        <AnimatedSection delay={500}>
          <div className="mt-16 p-8 bg-gold-light border border-gold/30 text-center">
            <p className="text-label font-medium mb-2">A Note on Availability</p>
            <p className="text-text-body text-sm max-w-2xl mx-auto">
              Prof. Tofade maintains a selective coaching practice and speaking calendar alongside her presidential responsibilities. Engagements are accepted on a limited basis to ensure depth, quality, and genuine impact. She prioritizes work that is aligned with her expertise and where she can bring meaningful contribution.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
