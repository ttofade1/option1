"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Send, Loader2 } from "lucide-react"

export function SpeakerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const today = new Date().toISOString().split('T')[0];
  // const today = "01/01/01";


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mbdpabgp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-12 border border-gold/30">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-3xl text-cream mb-4">
                Thank you for your request
              </h2>
              <p className="text-navy-muted">
                Your speaking request has been submitted successfully. Dr. Tofade&apos;s team will review your request and respond within 5-7 business days.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase text-center mb-4">
            Request Form
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-12">
            Submit a Speaking Request
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-cream text-sm font-medium mb-2">
                Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-cream text-sm font-medium mb-2">
                Email <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-cream text-sm font-medium mb-2">
                Organization <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your organization name"
              />
            </div>

            {/* Event Name */}
            <div>
              <label htmlFor="event" className="block text-cream text-sm font-medium mb-2">
                Event Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="event"
                name="event"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Name of the event"
              />
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="date" className="block text-cream text-sm font-medium mb-2">
                Event Date <span className="text-gold">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Event Location */}
            <div>
              <label htmlFor="location" className="block text-cream text-sm font-medium mb-2">
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="City, State/Country or Virtual"
              />
            </div>

            {/* Speaking Topic */}
            <div>
              <label htmlFor="topic" className="block text-cream text-sm font-medium mb-2">
                Preferred Speaking Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="leadership">Transformational leadership in higher education</option>
                <option value="health-equity">Health equity and the future of healthcare</option>
                <option value="dei">Diversity, equity, and inclusion</option>
                <option value="women-leadership">Women in leadership</option>
                <option value="pharmacy">The pharmacist as a leader</option>
                <option value="mentorship">Mentorship and career development</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Details */}
            <div>
              <label htmlFor="details" className="block text-cream text-sm font-medium mb-2">
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us more about your event, expected audience size, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 disabled:bg-gold/50 text-text-heading px-8 py-4 font-medium tracking-wide transition-colors duration-200"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
