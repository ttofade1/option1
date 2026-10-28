import Image from "next/image"
import { Eyebrow } from "@/components/home/brand"
import { withBasePath } from "@/lib/base-path"

export function MyStoryHero() {
  return (
    <section className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-14 px-7 pt-20 pb-[72px]">
      <div>
        <Eyebrow>My Story</Eyebrow>
        <h1 className="mt-4 font-baskerville text-[clamp(36px,4.6vw,60px)] font-bold leading-[1.12] text-pretty text-brand-navy">
          From Ile-Ife to the world
        </h1>
        <p className="mt-7 font-lato text-[19px] leading-[1.7] text-pretty text-brand-body">
          I grew up in Nigeria watching my father, the late Professor Abayomi Sofowora, turn plant science into medicine
          for communities across Africa. That is where my love of pharmacy began — and where I learned that knowledge is
          meant to serve.
        </p>
        <p className="mt-8 border-l-2 border-brand-gold pl-[22px] font-baskerville text-[clamp(19px,1.8vw,23px)] italic leading-[1.5] text-brand-navy">
          &ldquo;I list the touch points of my career in names rather than CV entries.&rdquo;
        </p>
      </div>
      <div className="w-full max-w-[460px] justify-self-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[230px] rounded-b-md">
          <Image
            src={withBasePath("/portrait-gold-shawl.jpeg")}
            alt="Prof. Toyin Tofade"
            fill
            priority
            sizes="(max-width: 860px) 100vw, 460px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
