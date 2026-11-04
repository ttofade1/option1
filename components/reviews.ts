/**
 * Approved reviews shown on the homepage. Submissions from the unlisted
 * /review page arrive by email (Formspree); add one here only once it has
 * been approved for publication. The homepage section stays hidden while
 * this list is empty.
 *
 * Credit each review as the reviewer chose on the form:
 * - "first name, last initial, title, and organization": set `name` to e.g.
 *   "Jane D." and `role` to e.g. "Provost, Example University".
 * - "title and location only": leave out `name` and set `role` to e.g.
 *   "Lawyer, Columbus, Ohio".
 * - "anonymously": leave out both `name` and `role`.
 */
export type Review = {
  quote: string
  name?: string
  /** Title and organization, e.g. "Provost, Example University", or title and location, e.g. "Lawyer, Columbus, Ohio" */
  role?: string
}

export const reviews: Review[] = []
