"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Users, Globe, Heart, Lightbulb } from "lucide-react"

const impactAreas = [
  {
    icon: Users,
    title: "On Students",
    content: `In 2017, at the end of her first year as Dean at Howard, a student placed a wrapped gift and a long handwritten letter on her desk. The letter called her "a ray of sunshine" and "a stunning example of leadership." She didn't open it. She kept it as a reminder, she said, that "I'm here to serve the students, and I must keep on making them top of mind, top of heart, top of focus in every decision that I make."

She opened the gift only at the end of her sixth year, when she felt she had finally earned it.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Students-stand-together-with-Toyin-at-Inauguration-ceremony-1220x686-ne6iam4kURqbv93swDaNZvZqgqBWQD.jpg",
    imageAlt: "Dr. Tofade with students at inauguration",
  },
  {
    icon: Globe,
    title: "On the Pharmacy Profession",
    content: `As Dean at Howard, Dr. Tofade oversaw the creation of a landmark FDA–GlaxoSmithKline fellowship in regulatory affairs, opening new career pathways for pharmacy graduates that had never existed before. She built partnerships in 16 countries. She elevated Howard's residency match rate from 36 to over 50 percent. She produced pharmacists practicing in every corner of the globe, including as deans of other pharmacy schools and presidents of national pharmacy organizations.

At ACPHS, she launched seven new academic programs in a single year, the largest expansion in the institution's 141 year history. She introduced ACPHS Online, making health sciences education accessible beyond Albany. She doubled industrial fellowships for graduates in a single year.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dean%20with%20students_0-ae3WmQHlv1TB7RdNGIULUbrLDYsib5.jpg",
    imageAlt: "Dr. Tofade with pharmacy professionals",
  },
  {
    icon: Heart,
    title: "On Health Equity",
    content: `Dr. Tofade has served on national boards including the Accreditation Council for Pharmacy Education, the Board of Pharmacy Specialties, and multiple AACP diversity and inclusion task forces. As FIP Academic Pharmacy Section President, she has shaped pharmacy education globally, with a particular commitment to ensuring that countries with the greatest health needs have access to the most prepared practitioners.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600-Dfk81Av6Rm1U58Nu3Ba933MeAJ4mMN.jpeg",
    imageAlt: "Dr. Tofade at health equity event",
  },
  {
    icon: Lightbulb,
    title: "On Mentorship",
    content: `She gives credit freely to Professor Fred Eckel, who recognized her in Nigeria before she recognized herself; to Dr. Natalie Eddington, who kept her on track to the deanship when she doubted herself; to Dr. Freeman Hrabowski, whose integrity and vision inspired her approach to leadership. 

And she pays it forward: through the Tofade Aspiring Leaders Endowed Fund at Howard, through the countless students she has guided, and through Global Women Leaders Inc., the nonprofit she founded to inspire and equip women worldwide.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%201-6fA22jLiII21oOfCokcF9lWMdlirXm.jpg",
    imageAlt: "Dr. Tofade mentoring",
  },
]

export function ImpactSections() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {impactAreas.map((area, index) => (
          <div
            key={area.title}
            className={`mb-24 last:mb-0 ${index > 0 ? "pt-24 border-t border-divider" : ""}`}
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              {/* Content */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold-light flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-label" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-text-heading">
                    {area.title}
                  </h2>
                </div>
                <div className="text-text-body leading-relaxed whitespace-pre-line">
                  {area.content}
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                delay={100}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
