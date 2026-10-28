import Image from "next/image"
import { Diamond, PrimaryButton, SecondaryButton } from "@/components/home/brand"
import { withBasePath } from "@/lib/base-path"

const domains = ["Higher Education", "Governance", "Business", "Healthcare"]

export function HeroSection() {
  return (
    <section className="border-b-4 border-brand-gold bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F0E8_100%)]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end gap-12 px-7 pt-16">
        <div className="max-w-[460px] flex-[1_1_300px] self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[230px] border border-b-0 border-brand-border-strong bg-brand-navy">
            <Image
              src={withBasePath("/speaking-lecture-hall.jpg")}
              alt="Prof. Toyin Tofade addressing a lecture hall"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-cover object-[72%_center]"
            />
          </div>
        </div>

        <div className="flex-[1_1_460px] pb-16 font-lato">
          <p className="font-baskerville text-[clamp(18px,2vw,24px)] font-bold tracking-[0.06em] text-brand-gold">PROF. &amp; PRESIDENT EMERITA</p>
          <h1 className="mt-1.5 font-baskerville text-[clamp(44px,6.4vw,88px)] font-bold leading-none tracking-[-0.01em] text-brand-navy">
            TOYIN TOFADE
          </h1>
          <p className="mt-[18px] text-[clamp(13px,1.3vw,17px)] font-bold uppercase tracking-[0.28em] text-brand-ink">
            Global Executive &amp; Transformational Leader
          </p>

          <div aria-hidden className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-brand-gold-rule" />
            <Diamond />
            <span className="h-px flex-1 bg-brand-gold-rule" />
          </div>

          {/* Every item carries a leading rule; the negative margin + overflow clip hides the first rule on each line. */}
          <div className="overflow-hidden">
            <ul className="-ml-[19px] flex flex-wrap gap-y-2.5 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-gold-text">
              {domains.map((domain) => (
                <li key={domain} className="border-l border-brand-gold-sep px-[18px]">
                  {domain}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 font-baskerville text-[clamp(20px,2vw,26px)] italic leading-[1.5] text-brand-navy">
            Leading. Transforming. Empowering.
            <br />
            Creating Lasting Impact.
          </p>
          <p className="mt-[18px] text-sm tracking-[0.02em] text-brand-muted">BPharm, MS, PharmD, CPCC, FFIP</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="/work-with-me">Work With Me</PrimaryButton>
            <SecondaryButton href="/my-story">My Story</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
