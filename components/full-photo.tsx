import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

/**
 * Shows the whole photo (object-contain) so nobody is cropped out, over a blurred, scaled-up copy
 * that fills any leftover space. Place inside a `relative` box with a size.
 */
export function FullPhoto({
  src,
  alt,
  sizes,
  priority,
  className = "",
}: {
  src: string
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
}) {
  const url = src.startsWith("http") ? src : withBasePath(src.startsWith("/") ? src : `/${src}`)
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image src={url} alt="" aria-hidden fill sizes={sizes} className="scale-110 object-cover opacity-70 blur-2xl" />
      <Image src={url} alt={alt} fill sizes={sizes} priority={priority} className={`object-contain ${className}`} />
    </div>
  )
}
