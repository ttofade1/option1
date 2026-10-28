import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

// "Her Story" was renamed "My Story". GitHub Pages can't do server redirects, so keep old links working with a meta refresh.
export const metadata = {
  title: "My Story | Prof. Toyin Tofade",
  robots: { index: false },
}

export default function HerStoryRedirect() {
  return (
    <main className="mx-auto max-w-[1240px] px-7 py-24 font-lato text-brand-body">
      <meta httpEquiv="refresh" content={`0;url=${withBasePath("/my-story")}`} />
      <link rel="canonical" href={withBasePath("/my-story")} />
      <p>
        This page has moved to{" "}
        <Link href="/my-story" className="text-brand-navy underline">
          My Story
        </Link>
        .
      </p>
    </main>
  )
}
