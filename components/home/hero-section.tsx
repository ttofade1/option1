import Image from "next/image"
import { Diamond, PrimaryButton, SecondaryButton } from "@/components/home/brand"
import { withBasePath } from "@/lib/base-path"

const domains = ["Higher Education", "Governance", "Global Leadership", "Healthcare"]

export function HeroSection() {
  return (
    <section className="border-b-4 border-brand-gold bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F0E8_100%)]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end gap-12 px-7 pt-[72px]">
        <div className="max-w-[440px] flex-[1_1_300px] self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] border border-b-0 border-brand-border-strong bg-brand-border">
            <Image
              src={withBasePath("/gray.jpg")}
              alt="Prof. Toyin Tofade"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-[1_1_460px] pb-[72px] font-lato">
          <p className="font-baskerville text-[clamp(22px,2.4vw,30px)] font-bold tracking-[0.04em] text-brand-gold">PROF. &amp; PRESIDENT EMERITA</p>
          <h1 className="mt-1 font-baskerville text-[clamp(44px,6.4vw,88px)] font-bold leading-none tracking-[-0.01em] text-brand-navy">
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

          <ul className="flex flex-wrap gap-x-[18px] gap-y-2.5 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-gold-text">
            {domains.map((domain, i) => (
              <li key={domain} className={i > 0 ? "border-l border-brand-gold-sep pl-[18px]" : undefined}>
                {domain}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-baskerville text-[clamp(20px,2vw,26px)] italic leading-[1.5] text-brand-navy">
            Leading. Transforming. Empowering.
            <br />
            Creating Lasting Impact.
          </p>
          <p className="mt-5 text-sm tracking-[0.02em] text-brand-muted">BPharm, MS, PharmD, CPCC, FFIP</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/work-with-me">Work With Prof. Tofade</PrimaryButton>
            <SecondaryButton href="/her-story">Her Story</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
