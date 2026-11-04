"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import { Diamond, Eyebrow, SectionHeading } from "@/components/home/brand"

// Shares the Work With Me Formspree inbox; _subject marks these as reviews.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykljjjl"

const field =
  "w-full rounded-md border border-brand-border bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-gold focus:outline-none transition-colors duration-150"
const label = "mb-2 block text-sm font-bold text-brand-navy"
const hint = "mt-2 text-[13px] text-brand-muted"

type Place = { city: string; state: string; country: string }

// OpenStreetMap's postal-code search covers most countries and needs no country up front,
// so one code can match places in several countries; the reviewer picks theirs.
async function lookupPostalCode(code: string): Promise<Place[]> {
  const url = `https://nominatim.openstreetmap.org/search?postalcode=${encodeURIComponent(code)}&format=jsonv2&addressdetails=1&limit=10&accept-language=en`
  const response = await fetch(url, { headers: { Accept: "application/json" } })
  if (!response.ok) throw new Error(`Postal lookup responded ${response.status}`)
  const results: { address?: Record<string, string> }[] = await response.json()
  const places = results
    .map(({ address: a = {} }) => ({
      city: a.city || a.town || a.village || a.municipality || a.suburb || a.county || "",
      state: a.state || a.province || a.region || a.state_district || "",
      country: a.country || "",
    }))
    .filter((place) => place.country)
  // Drop duplicates (the same place can come back more than once).
  return places.filter((place, i) => places.findIndex((p) => JSON.stringify(p) === JSON.stringify(place)) === i)
}

const describe = (place: Place) => [place.city, place.state, place.country].filter(Boolean).join(", ")

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle")
  const [postalCode, setPostalCode] = useState("")
  const [place, setPlace] = useState<Place>({ city: "", state: "", country: "" })
  const [matches, setMatches] = useState<Place[]>([])
  const [lookup, setLookup] = useState<"idle" | "searching" | "found" | "none" | "error">("idle")
  const lastLookup = useRef("")

  useEffect(() => {
    const code = postalCode.trim()
    if (code.length < 3 || code === lastLookup.current) return
    const timer = setTimeout(async () => {
      lastLookup.current = code
      setLookup("searching")
      try {
        const found = await lookupPostalCode(code)
        if (code !== lastLookup.current) return
        setMatches(found)
        setLookup(found.length ? "found" : "none")
        if (found.length) setPlace(found[0])
      } catch {
        if (code === lastLookup.current) setLookup("error")
      }
    }, 700)
    return () => clearTimeout(timer)
  }, [postalCode])

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
      setPostalCode("")
      setPlace({ city: "", state: "", country: "" })
      setMatches([])
      setLookup("idle")
      lastLookup.current = ""
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
          <div className="grid gap-6 sm:grid-cols-[2fr_1fr]">
            <div>
              <label htmlFor="first_name" className={label}>
                First Name <span className="text-brand-gold">*</span>
              </label>
              <input id="first_name" name="first_name" type="text" required autoComplete="given-name" className={field} placeholder="Your first name" />
            </div>
            <div>
              <label htmlFor="last_initial" className={label}>
                Last Initial <span className="font-normal text-brand-muted">(optional)</span>
              </label>
              <input
                id="last_initial"
                name="last_initial"
                type="text"
                maxLength={1}
                autoComplete="off"
                className={`${field} uppercase placeholder:normal-case`}
                placeholder="e.g. T"
              />
            </div>
          </div>
          <p className={hint}>
            Prefer to stay anonymous? You&apos;ll be able to choose that below, when you select how your review is credited.
          </p>
        </div>

        <div>
          <label htmlFor="title" className={label}>
            Title <span className="text-brand-gold">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            autoComplete="organization-title"
            className={field}
            placeholder="e.g. Provost, Pharmacist, Lawyer"
          />
        </div>

        <div>
          <label htmlFor="organization" className={label}>
            Organization / Institution <span className="font-normal text-brand-muted">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={field}
            placeholder="e.g. University of North Carolina"
          />
        </div>

        <div>
          <label htmlFor="postal_code" className={label}>
            Zip / Postal Code <span className="text-brand-gold">*</span>
          </label>
          <input
            id="postal_code"
            name="postal_code"
            type="text"
            required
            autoComplete="postal-code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className={`${field} sm:max-w-[240px]`}
            placeholder="e.g. 27601"
            aria-describedby="postal_code_status"
          />
          <p id="postal_code_status" aria-live="polite" className={hint}>
            {lookup === "searching" && "Looking up your location…"}
            {lookup === "found" && matches.length === 1 && "We filled in your city, state, and country. Edit them if anything looks off."}
            {lookup === "found" && matches.length > 1 && "This code is used in more than one place. Choose yours below, or edit the fields."}
            {lookup === "none" && "We couldn't find that code. Please enter your city, state, and country below."}
            {lookup === "error" && "We couldn't look up that code right now. Please enter your city, state, and country below."}
            {lookup === "idle" && "Works for postal codes worldwide. We'll fill in your city, state, and country."}
          </p>
          {lookup === "found" && matches.length > 1 && (
            <select
              aria-label="Choose your location"
              value={matches.findIndex((m) => describe(m) === describe(place))}
              onChange={(e) => setPlace(matches[Number(e.target.value)])}
              className={`${field} mt-3`}
            >
              {matches.findIndex((m) => describe(m) === describe(place)) === -1 && <option value={-1}>Choose your location</option>}
              {matches.map((m, i) => (
                <option key={describe(m)} value={i}>
                  {describe(m)}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="city" className={label}>
              City <span className="text-brand-gold">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              autoComplete="address-level2"
              value={place.city}
              onChange={(e) => setPlace({ ...place, city: e.target.value })}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="state" className={label}>
              State / Province
            </label>
            <input
              id="state"
              name="state"
              type="text"
              autoComplete="address-level1"
              value={place.state}
              onChange={(e) => setPlace({ ...place, state: e.target.value })}
              className={field}
            />
          </div>
          <div>
            <label htmlFor="country" className={label}>
              Country <span className="text-brand-gold">*</span>
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              autoComplete="country-name"
              value={place.country}
              onChange={(e) => setPlace({ ...place, country: e.target.value })}
              className={field}
            />
          </div>
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
              With my first name, last initial, title, and organization
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="credit" value="title_and_location" className="size-4 accent-brand-navy" />
              With my title and location only (e.g. Lawyer, Columbus, Ohio)
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
