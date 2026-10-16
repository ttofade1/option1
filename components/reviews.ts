/**
 * Approved reviews shown on the homepage. Submissions from the unlisted
 * /review page arrive by email (Formspree); add one here only once it has
 * been approved for publication. The homepage section stays hidden while
 * this list is empty.
 */
export type Review = {
  quote: string
  name: string
  /** Title and organization, e.g. "Provost, Example University" */
  role?: string
}

export const reviews: Review[] = []
