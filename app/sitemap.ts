import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export const dynamic = "force-static"

// Public pages only: /her-story (redirect) and /review (unlisted) are noindex.
const routes = ["", "/my-story", "/career", "/impact", "/publications", "/global-leaders", "/work-with-me", "/speaker-request"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
