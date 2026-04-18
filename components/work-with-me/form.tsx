"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Send, Loader2 } from "lucide-react"

export function WorkWithMeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mykljjjl", {
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
                Thank you for your inquiry
              </h2>
              <p className="text-navy-muted">
                Your request has been submitted successfully. Prof. Tofade&apos;s team will review your inquiry and respond within five business days.
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
            Request to Work Together
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-4">
            Submit an Inquiry
          </h2>
          <p className="text-navy-muted text-center mb-12 max-w-lg mx-auto">
            Whether you are interested in executive coaching, a speaking engagement, a board advisory arrangement, or organizational consulting — please complete the form below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-cream text-sm font-medium mb-2">
                Full Name <span className="text-gold">*</span>
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

            {/* Title and Organization */}
            <div>
              <label htmlFor="title_organization" className="block text-cream text-sm font-medium mb-2">
                Title and Organization <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="title_organization"
                name="title_organization"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your title and organization"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-cream text-sm font-medium mb-2">
                Email Address <span className="text-gold">*</span>
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

            {/* Type of Engagement */}
            <div>
              <label htmlFor="engagement_type" className="block text-cream text-sm font-medium mb-2">
                Type of Engagement <span className="text-gold">*</span>
              </label>
              <select
                id="engagement_type"
                name="engagement_type"
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select engagement type</option>
                <option value="executive-coaching">Executive Leadership Coaching</option>
                <option value="emerging-leader">Emerging Leader Accelerator</option>
                <option value="organizational">Organizational & Team Development</option>
                <option value="board-advisory">Board Advisory & Governance</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-cream text-sm font-medium mb-2">
                What are you working on and hoping to accomplish? <span className="text-gold">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Describe what you're working on and what you are hoping to accomplish through this engagement..."
              />
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-cream text-sm font-medium mb-2">
                Preferred Timeline or Event Date
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="If applicable"
              />
            </div>

            {/* How did you find */}
            <div>
              <label htmlFor="referral" className="block text-cream text-sm font-medium mb-2">
                How did you find Prof. Tofade?
              </label>
              <input
                type="text"
                id="referral"
                name="referral"
                className="w-full px-4 py-3 bg-navy border border-navy-muted/30 text-cream placeholder:text-navy-muted/50 focus:outline-none focus:border-gold transition-colors"
                placeholder="Referral, event, publication, etc."
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
                  Submit Inquiry
                </>
              )}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
