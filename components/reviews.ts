/**
 * Approved reviews shown on the homepage. Submissions from the unlisted
 * /review page arrive by email (Formspree); add one here only once it has
 * been approved for publication. The homepage section stays hidden while
 * this list is empty.
 *
 * For a reviewer who chose "profession and state only" on the form, leave
 * out `name` and set `role` to e.g. "Lawyer, Ohio"; the review is then
 * credited to that line alone.
 */
export type Review = {
  quote: string
  name?: string
  /** Title and organization, e.g. "Provost, Example University", or profession and state, e.g. "Lawyer, Ohio" */
  role?: string
}

export const reviews: Review[] = []
