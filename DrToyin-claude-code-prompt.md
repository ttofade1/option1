# Claude Code Prompt — Dr. Toyin Tofade Website Revisions

> Copy everything below the line into Claude Code, run from the root of the
> `option1` site repo. Make sure `Dr. Toyin Tofade Website Copy and Sources.md`
> is present in the repo (or point Claude Code to its path).

---

## Context

You are editing the personal/professional website for **Dr. Toyin Tofade** —
President Emerita of Albany College of Pharmacy and Health Sciences (ACPHS),
former Dean of the Howard University College of Pharmacy, author, and pharmacist.
The live site is published via GitHub Pages at
`https://ttofade1.github.io/option1/`. Work in this repo; do not touch anything
outside it.

The tone is presidential, institutional, and legacy-driven. Preserve the
existing design system, fonts (Playfair Display / Neue Montreal), and color
palette. Do not restructure the layout except where a task explicitly calls for it.

## Files you have

- The site's HTML/CSS/JS in this repo.
- **`Dr. Toyin Tofade Website Copy and Sources.md`** — the master copy-and-sources
  document. Its final third (under "Online sources to pull from:") is a
  categorized list of ~60 source URLs: background, impact, awards, press releases,
  press mentions, videos/podcasts, and imagery.

---

## TASK 1 (primary): Source every factual claim on the site

This is the most important task. Every factual statement on the site — dates,
statistics, "first Black female president," awards, rankings, dollar figures,
titles, tenure claims — must be traceable to a source.

Do this methodically:

1. **Inventory the facts.** Read every HTML page in the repo and extract every
   discrete factual claim into a working list (`SOURCING.md` in the repo root).
   For each: the exact on-page wording, the page + section it appears in, and the
   fact type (date / stat / title / award / etc.).

2. **Match each fact to a source.** Read
   `Dr. Toyin Tofade Website Copy and Sources.md` and **fetch/open each source URL**
   to find where the fact is actually stated. Do not guess from the URL slug —
   open the page and confirm the fact appears there. Prefer primary/institutional
   sources (acphs.edu, howard.edu, ashp.org, researchgate) over secondary press.
   Record the matching URL (and a short supporting quote) next to each fact in
   `SOURCING.md`.

3. **Flag gaps.** If a fact has **no** supporting source in the file, mark it
   `⚠️ NO SOURCE FOUND` in `SOURCING.md` and list it in a summary at the top. Do
   not invent or infer a citation. Do not delete the fact — just flag it for the
   owner to review.

4. **Add citations to the page.** For every fact that has a confirmed source, add
   a citation link on the page. Use a consistent, unobtrusive style:
   - A small superscript numbered marker (e.g. `¹`) immediately after the fact,
     linking to the source URL, OR a subtle "Source" link — pick one and apply it
     site-wide.
   - Links open in a new tab (`target="_blank" rel="noopener noreferrer"`).
   - Style them to fit the existing palette (use the section-label / eyebrow
     brown `#633806` or the CTA gold `#C6993A` for markers; don't introduce new
     colors).
   - Consider a per-page "Sources / References" footnote list at the bottom that
     the superscripts point to — this keeps body copy clean. If you do this, make
     the citation a jump-link to the footnote and the footnote a link out to the URL.
   - Whatever pattern you choose, keep it identical across all pages.

5. Leave `SOURCING.md` in the repo as the audit trail.

**Source-to-fact hints** (verify, don't assume):
- "First Black female president of a US college" → the Nigerian/press-release
  cluster (premiumtimesng, vanguardngr, thestreetjournal, edugist, connectnigeria,
  thesourceng, kolaking Substack).
- ACPHS presidency / selection → acphs.edu Office of the President, timesunion,
  bizjournals (Albany), capitalregionchamber, news10.
- Howard Dean tenure + endowed fund (Alfred and Toyin Tofade Aspiring Leaders
  Endowed Fund) → the two `thedig.howard.edu` articles, harrissearch.
- Partnerships / merger / expanded reach → `acphs.edu/news/partnerships-extend-colleges-reach`.
- Awards → ashp.org (Donald Francke Medal), UNC honor
  (`pharmacy.howard.edu/...honored-university-north-carolina`), Fred Eckel Award
  (uncmedicalcenter.org), eventscribe (2021 UNC Pharmacy Alumni Distinguished Service).
- "Over 1,000 citations" / publications → researchgate profile.
- Background / credentials / CV facts → the two CV PDFs, zoominfo, gtmr,
  aapsnewsmagazine.

---

## TASK 2: Verify these specific claims before citing

Some facts need active verification. For each, fetch the relevant source(s) and
**confirm the exact number/wording**. If the source disagrees with the site,
correct the site to match the source and note the change in `SOURCING.md`. If you
can't confirm it from any provided source, flag `⚠️ UNVERIFIED` and leave the
copy for the owner to decide.

- **PharmD "210%" statistic** — double-check this figure and what it refers to.
- **"$1.75M Empire State Development grant"** — double-check the amount, funder
  name, and what it funded.
- **Howard school ranking rising "from 98 to 75"** — this claim currently may lack
  a source. Search the provided sources (howard.edu / thedig / CV / press) for
  ranking figures and attach the correct source. If none supports it, flag it.

---

## TASK 3: Content revisions (by section)

Apply the following edits. Where a fact is added or changed, run it through Task 1
(source it or flag it).

### Hero
- Reframe around **President Emerita**. Add this passage (adapt to fit the layout):
  > "As she concluded her presidential term on June 30, 2026, and continues as
  > President Emerita — an honorary title recognizing her distinguished service and
  > sustaining her connection to the institution she transformed — Prof. Tofade
  > carries forward a legacy of transformation and the conviction that highly
  > impactful work is still ahead."
- Change any present-tense term-status wording to **"Concluded"** (e.g. a status
  label that currently reads "Current" or similar → "Concluded").
- Rename the **"Key Statistics"** heading to **"Key Statistics Under Her Leadership."**
- Change the card/label **"Highly performant"** to **"Building High-Performing Teams."**
- For the **80% medical school placement rate** stat, add the year: **2025**.

### Strategic Plan (new feature)
- Add a section (or prominent link/card) featuring the ACPHS Strategic Plan:
  `https://www.acphs.edu/about/strategic-plan/`. Place it where it reinforces her
  leadership legacy (near Key Statistics or Her Story). Treat this as a sourced,
  linked feature.

### Her Story
- Prefix each accomplishment with **"Under her leadership"** (or equivalent
  team-crediting phrasing) to honor the teams behind the work. Apply consistently.
- **Accelerated pathway to WSAM** (Western Michigan / relevant med school — confirm
  the correct school name from sources) — phrase as "Under her leadership…" and
  **link to the actual school's page** for the pathway.
- Add source links to the actual schools/institutions referenced in the story.
- The **Howard ranking 98 → 75** claim: attach a real source (see Task 2) or flag.
- **"$1.75M Empire State Development grant"**: verify (Task 2), then keep only if
  confirmed.
- **Remove the pharmacies** — they have since been sold; remove any content stating
  she owns/operates pharmacies.
- **Merger information**: replace the current treatment with a reference/link to the
  source (`acphs.edu/news/partnerships-extend-colleges-reach` or the specific merger
  source) and **remove the associated picture**.

### Career
- Reposition the framing so she reads as a **global leader** (not solely
  pharmacy/US-focused). Adjust headings/intro copy accordingly.
- **Remove the bullet points from every timeline/role card EXCEPT the "10th
  President" card** (that one keeps its bullets). Convert the others to prose or
  remove the sub-bullets.

### Impact
- Add a **link to "Ray of Sunshine"** (locate the correct URL — check her
  socials/press; if not found in sources, flag for the owner to supply the link).
- **Remove specific mentor names** — keep the impact/mentorship narrative but strip
  named individuals.

### Publications & Media
- No content change requested. Still apply Task 1: ensure every publication/media
  item links to its source (researchgate for the "1,000+ citations" claim, and the
  videos/podcasts/press URLs from the sources file for the media items).

### "Global Women Leaders" → rename to "Global Leaders"
- Rename the page/section to **"Global Leaders."**
- Change its headline to **"Raising the Next Generation of Leaders."**
- Expand the content to talk more about **FFIP mentorship** (Fellow of the Faculty
  Initiative Program / her FFIP credential — confirm exact expansion from sources).
- Keep **Global Women's Leaders Inc.** as a smaller sub-section on the same page
  (don't delete it — demote it).

### Work With Me
- Under **"Organisational & Team Development,"** add:
  - **Retreats** — "Facilitating retreats."
  - **Higher education consulting.**

### Speaker Request
- Change "National and international **pharmacy** conferences" → drop "pharmacy":
  **"National and international conferences."**
- In the topics/description, **don't call out pharmacy specifically** — frame as a
  wide range of topics.
- Emphasize broadly applicable topics: **leadership, networking**, etc.

---

## Constraints & deliverables

- Preserve existing design, fonts, colors, and responsive behavior. Match new
  elements to the current style.
- All external links: `target="_blank" rel="noopener noreferrer"`.
- Don't fabricate facts, sources, or links. Anything unverifiable → flag, don't guess.
- When you finish, provide:
  1. A summary of every change made, grouped by page/section.
  2. The `SOURCING.md` audit file (fact → source, plus a "⚠️ needs owner input"
     list at the top for: unsourced facts, the Ray of Sunshine link, the WSAM
     school confirmation, and any of the Task 2 stats you couldn't verify).
  3. A note of any copy you changed to match a source (with old → new).
- Test locally (open the pages) to confirm nothing is broken before finishing.
