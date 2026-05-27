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
      <section className="py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-12 border border-gold/30 bg-cream-card">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-serif text-3xl text-text-heading mb-4">
                Thank you for your request
              </h2>
              <p className="text-text-body">
                Your speaking request has been submitted successfully. Prof. Tofade&apos;s team will review your request and respond within 5-7 business days.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-gold text-sm tracking-[0.15em] uppercase text-center mb-4">
            Request Form
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-heading text-center mb-12">
            Request a Speaking Engagement
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name, Title, Organization */}
            <div>
              <label htmlFor="name" className="block text-text-heading text-sm font-medium mb-2">
                Name, Title, Organization <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name, title and organization"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-text-heading text-sm font-medium mb-2">
                Email <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-text-heading text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your phone number"
              />
            </div>

            {/* Event Name */}
            <div>
              <label htmlFor="event" className="block text-text-heading text-sm font-medium mb-2">
                Event Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="event"
                name="event"
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Name of the event"
              />
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="date" className="block text-text-heading text-sm font-medium mb-2">
                Event Date <span className="text-gold">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Event Location */}
            <div>
              <label htmlFor="location" className="block text-text-heading text-sm font-medium mb-2">
                Event Location <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="City, State/Country or Virtual"
              />
            </div>

            {/* Estimated Audience Size */}
            <div>
              <label htmlFor="audience_size" className="block text-text-heading text-sm font-medium mb-2">
                Estimated Audience Size and Composition
              </label>
              <input
                type="text"
                id="audience_size"
                name="audience_size"
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="e.g., 200 pharmacy professionals"
              />
            </div>

            {/* Type of Engagement */}
            <div>
              <label htmlFor="engagement_type" className="block text-text-heading text-sm font-medium mb-2">
                Type of Engagement <span className="text-gold">*</span>
              </label>
              <select
                id="engagement_type"
                name="engagement_type"
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select engagement type</option>
                <option value="keynote">Keynote</option>
                <option value="panel">Panel</option>
                <option value="workshop">Workshop</option>
                <option value="fireside">Fireside Chat</option>
                <option value="commencement">Commencement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Topic Interest */}
            <div>
              <label htmlFor="topic" className="block text-text-heading text-sm font-medium mb-2">
                Topic Interest or Description <span className="text-gold">*</span>
              </label>
              <textarea
                id="topic"
                name="topic"
                rows={4}
                required
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="What topic do you hope Prof. Tofade will address?"
              />
            </div>

            {/* Honorarium Range */}
            <div>
              <label htmlFor="honorarium" className="block text-text-heading text-sm font-medium mb-2">
                Honorarium Range or Budget
              </label>
              <input
                type="text"
                id="honorarium"
                name="honorarium"
                className="w-full px-4 py-3 bg-cream-card border border-border text-text-heading placeholder:text-text-body/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your budget range"
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
