"use client"

import { AnimatedSection } from "@/components/animated-section"
import { FileText, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Making a Curricular Commitment to Continuing Professional Development in Doctor of Pharmacy Programs",
    journal: "American Journal of Pharmaceutical Education",
    year: "2015",
    link:"https://www.researchgate.net/publication/286450899_Making_a_Curricular_Commitment_to_Continuing_Professional_Development_in_Doctor_of_Pharmacy_Programs",
  },
  {
    title: "Strategies to grow an experiential learning program—The role of administrators",
    journal: "Currents in Pharmacy Teaching and Learning",
    year: "2016",
    link:"https://www.researchgate.net/publication/299125766_Strategies_to_grow_an_experiential_learning_program-The_role_of_administrators",
  },
  {
    title: "Use of SMART Learning Objectives to Introduce Continuing Professional Development Into the Pharmacy Curriculum",
    journal: "American Journal of Pharmaceutical Education",
    year: "2012",
    link:"https://www.researchgate.net/publication/225050639_Use_of_SMART_Learning_Objectives_to_Introduce_Continuing_Professional_Development_Into_the_Pharmacy_Curriculum",
  },
  {
    title: "Clinical Track Program Expansion Increases Rotation Capacity for Experiential Program",
    journal: "American Journal of Pharmaceutical Education",
    year: "2017",
    link:"https://www.researchgate.net/publication/321142235_Clinical_Track_Program_Expansion_Increases_Rotation_Capacity_for_Experiential_Program",
  },
  {
    title: "Current Practices in Hosting Non-US Pharmacy Students at US Pharmacy Schools in Experiential Clerkships",
    journal: "American Journal of Pharmaceutical Education",
    year: "2017",
    link:"https://www.researchgate.net/publication/321893740_Current_Practices_in_Hosting_Non-US_Pharmacy_Students_at_US_Pharmacy_Schools_in_Experiential_Clerkships",
  },
  {
    title: "Results from a global pharmacy leadership needs assessment: Opportunities to advance pharmacy leadership",
    journal: "Pharmacy Education",
    year: "2024",
    link:"https://www.researchgate.net/publication/378377012_Results_from_a_global_pharmacy_leadership_needs_assessment_Opportunities_to_advance_pharmacy_leadership",
  },
  {
    title: "Transforming pharmaceutical education: A needs-based global analysis for policy development",
    journal: "Exploratory Research in Clinical and Social Pharmacy",
    year: "2023",
    link:"https://www.researchgate.net/publication/368517117_Transforming_pharmaceutical_education_A_needs-based_global_analysis_for_policy_development",
  },
  {
    title: "Leading with heart in service of global initiatives",
    journal: "American journal of health-system pharmacy: AJHP: official journal of the American Society of Health-System Pharmacists",
    year: "2023",
    link:"https://www.researchgate.net/publication/367329740_Leading_with_heart_in_service_of_global_initiatives",
  },
  {
    title: "Past, present, and future of the International Pharmaceutical Federation (FIP) Academic Pharmacy Section: Interviews with past presidents",
    journal: "Pharmacy Education",
    year: "2022",
    link:"https://www.researchgate.net/publication/365295922_Past_present_and_future_of_the_International_Pharmaceutical_Federation_FIP_Academic_Pharmacy_Section_Interviews_with_past_presidents",
  },
]

export function PublicationsList() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <AnimatedSection>
          <div className="flex justify-center gap-12 mb-16 pb-16 border-b border-divider">
            <div className="text-center">
              <p className="font-serif text-5xl text-gold mb-2">1,000+</p>
              <p className="text-text-body text-sm">Research Citations</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-gold mb-2">50+</p>
              <p className="text-text-body text-sm">Publications</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Publications Grid */}
        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 30}>
                <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                >
              <div className="flex gap-4 p-6 bg-cream-card border border-border hover:border-gold transition-colors duration-300 group">
                <FileText className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-text-heading font-medium mb-1 group-hover:text-gold transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-text-body text-sm">
                    {pub.journal} • {pub.year}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Link to ResearchGate */}
        <AnimatedSection delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://www.researchgate.net/profile/Toyin-Tofade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-cream px-8 py-4 font-medium tracking-wide transition-colors duration-200 group"
            >
              View Full Publication List on ResearchGate
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
