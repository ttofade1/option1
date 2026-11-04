import type { Metadata } from "next"

export const SITE_URL = "https://toyintofade.com"
export const SITE_NAME = "Prof. Toyin Tofade"

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Prof. Toyin Tofade, President Emerita of Albany College of Pharmacy and Health Sciences",
}

/** Per-page metadata with a canonical URL and matching Open Graph / Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
