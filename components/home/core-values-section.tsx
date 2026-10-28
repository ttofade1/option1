import { Diamond, Eyebrow } from "@/components/home/brand"

const values = ["Excellence", "Integrity", "Innovation", "Collaboration", "Impact"]

export function CoreValuesSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-7 py-[88px]">
      <Eyebrow className="text-center">Core Values</Eyebrow>
      <ul className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-y border-brand-border-strong">
        {values.map((value) => (
          <li
            key={value}
            className="flex flex-col items-center gap-3.5 border-l border-brand-border-soft px-4 py-8 text-center"
          >
            <Diamond size={10} />
            <span className="font-lato text-sm font-bold uppercase tracking-[0.22em] text-brand-navy">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
