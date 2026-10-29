const education: { title: string; school?: string }[] = [
  { title: "Certificate in Public Leadership", school: "Harvard Kennedy School" },
  { title: "Certified Professional Co-active Coach (CPCC)" },
  { title: "Doctorate", school: "University of North Carolina at Chapel Hill" },
  { title: "Master of Science", school: "University of North Carolina at Chapel Hill" },
  { title: "Bachelor’s Degree", school: "Obafemi Awolowo University, Ile-Ife" },
]

const honors = [
  { title: "City & State NY — Trailblazers in Higher Education", year: "2026" },
  { title: "Albany Business Review Power 50", year: "2023–25" },
  { title: "ASHP Donald E. Francke Medal", year: "2022" },
  { title: "Fred M. Eckel Pharmacy Leadership Award", year: "2019" },
  { title: "FIP Fellow — first Black woman named", year: "2018" },
]

const inlineLink =
  "text-brand-navy underline decoration-brand-gold-rule underline-offset-[3px] transition-colors duration-150 hover:text-brand-gold"

const listHeading = "text-xs font-bold uppercase tracking-[0.22em] text-brand-gold-text"

export function MyStoryBio() {
  return (
    <section className="border-y border-brand-border bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-16 px-7 py-[88px] font-lato">
        <div className="flex max-w-[640px] flex-col gap-[22px] text-lg leading-[1.8] text-brand-body">
          <p className="text-pretty">
            I trained at Obafemi Awolowo University in Ile-Ife and then at the University of North Carolina at Chapel
            Hill, where mentors took a chance on me when I was, in my words, &ldquo;a nobody.&rdquo; I have spent my career
            paying that investment forward. Along the way, I completed executive education through the Harvard Graduate
            School of Education Management Development Program and the Penn State Academic Leadership Academy.
          </p>
          <p className="text-pretty">
            For more than two decades I have worked across health systems, higher education, workforce development, and
            international policy — as a clinical pharmacist at UNC Hospitals, an assistant dean at the University of
            Maryland, Dean of Howard University College of Pharmacy, then President and Professor at Albany College of
            Pharmacy and Health Sciences (ACPHS). I am currently{" "}
            <a href="https://www.acphs.edu/about/people/leadership/office-of-the-president/" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              President Emerita
            </a>{" "}
            (ACPHS) and Professor.
          </p>
          <p className="text-pretty">
            I serve on the boards of{" "}
            <a href="https://www.sphp.com" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              St. Peter&rsquo;s Health Partners of Trinity Health NY
            </a>
            ,{" "}
            <a href="https://www.wmht.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              WMHT
            </a>
            , and{" "}
            <a href="https://www.capitalizealbany.com" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              Capitalize Albany Corporation
            </a>
            .
          </p>
          <p className="text-pretty">
            Globally, I serve as a board member and Vice President of the{" "}
            <a href="https://www.fip.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              International Pharmaceutical Federation (FIP)
            </a>
            , which represents
            more than five million pharmacists and pharmaceutical scientists. I was the first Black woman named an FIP
            Fellow and the first Black woman to lead its Academic Pharmacy Section.
          </p>
          <p className="text-pretty">
            Today, as a certified executive coach and advisor, I partner with boards, executives, and institutions across
            business, higher education, and healthcare — helping leaders build high-performing teams, navigate
            transformation, and create impact that lasts.
          </p>
        </div>

        <div className="flex flex-col gap-9">
          <div>
            <h2 className={listHeading}>Selected Education</h2>
            <ul className="mt-3.5 border-t border-brand-border">
              {education.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 border-b border-brand-border py-3.5">
                  <span className="font-baskerville text-base font-bold text-brand-navy">{item.title}</span>
                  {item.school && <span className="text-sm text-brand-muted">{item.school}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={listHeading}>Selected Honors</h2>
            <ul className="mt-3.5 border-t border-brand-border">
              {honors.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-brand-border py-3.5"
                >
                  <span className="text-[15px] leading-[1.5] text-brand-ink">{item.title}</span>
                  <span className="text-[13px] font-bold text-brand-gold-text">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
