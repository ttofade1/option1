"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Diamond, Eyebrow, SectionHeading } from "@/components/home/brand"

// Shares the Work With Me Formspree inbox; _subject marks these as reviews.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykljjjl"

const field =
  "w-full rounded-md border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-gold focus:outline-none transition-colors duration-150"
const label = "mb-2 block text-sm font-bold text-brand-navy"

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    const form = e.currentTarget

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border border-brand-border bg-white px-8 py-14 text-center">
        <Diamond size={10} />
        <h2 className="font-baskerville text-[28px] text-brand-navy">Thank you</h2>
        <p className="max-w-md text-[17px] leading-[1.7] text-brand-body">
          Your review has been received. Prof. Tofade is grateful you took the time to share it.
        </p>
      </div>
    )
  }

  return (
    <>
      <Eyebrow>Share a Review</Eyebrow>
      <SectionHeading className="text-brand-navy">Your experience working with Prof. Tofade</SectionHeading>
      <p className="mt-5 text-[17px] leading-[1.75] text-brand-body">
        Thank you for being willing to share your experience. Reviews are read before they appear on the website.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        <input type="hidden" name="_subject" value="New website review" />
        <input type="hidden" name="form" value="review" />

        <div>
          <label htmlFor="name" className={label}>
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input id="name" name="name" type="text" required className={field} placeholder="Your full name" />
          <p className="mt-2 text-[13px] text-brand-muted">Not shown on the website if you choose to be anonymous.</p>
        </div>

        <div>
          <label htmlFor="title_organization" className={label}>
            Title and Organization
          </label>
          <input
            id="title_organization"
            name="title_organization"
            type="text"
            className={field}
            placeholder="As you'd like it to appear"
          />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email Address <span className="text-brand-gold">*</span>
          </label>
          <input id="email" name="email" type="email" required className={field} placeholder="Not shown on the website" />
        </div>

        <div>
          <label htmlFor="review" className={label}>
            Your Review <span className="text-brand-gold">*</span>
          </label>
          <textarea
            id="review"
            name="review"
            rows={7}
            required
            className={`${field} resize-y`}
            placeholder="What was it like working with Prof. Tofade, and what difference did it make?"
          />
        </div>

        <fieldset>
          <legend className={label}>
            How should your review be credited? <span className="text-brand-gold">*</span>
          </legend>
          <div className="flex flex-col gap-2.5 text-[15px] text-brand-body">
            <label className="flex items-center gap-3">
              <input type="radio" name="credit" value="name_and_title" required defaultChecked className="size-4 accent-brand-navy" />
              With my name and title
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="credit" value="anonymous" className="size-4 accent-brand-navy" />
              Anonymously
            </label>
          </div>
        </fieldset>

        <label className="flex items-start gap-3 text-[15px] leading-[1.6] text-brand-body">
          <input type="checkbox" name="publish_consent" value="yes" required className="mt-1 size-4 accent-brand-navy" />
          <span>
            I agree that this review may be published on Prof. Tofade&apos;s website, credited as chosen above.{" "}
            <span className="text-brand-gold">*</span>
          </span>
        </label>

        {status === "error" && (
          <p role="alert" className="rounded-md border border-[#E3C2BC] bg-[#FBF1EF] px-4 py-3 text-sm text-[#8A2E22]">
            Something went wrong sending your review. Please try again, or email it to{" "}
            <a href="mailto:toyin@toyintofade.com" className="underline">
              toyin@toyintofade.com
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center justify-center gap-2 self-start rounded-full bg-brand-navy px-[26px] py-[15px] font-lato text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-150 hover:bg-brand-gold disabled:opacity-60"
        >
          {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
          {status === "submitting" ? "Sending…" : "Submit Review"}
        </button>
      </form>
    </>
  )
}
