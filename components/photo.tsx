import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import { withBasePath } from "@/lib/base-path"
import { PHOTO_SIZES } from "@/lib/photo-sizes"

const sizeOf = (src: string) => PHOTO_SIZES[src.startsWith("/") ? src : `/${src}`] ?? [4, 3]

/** A photo at its own shape (never cropped). Pass `className` to change the default full-width sizing. */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  className = "h-auto w-full",
}: {
  src: string
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
}) {
  const [width, height] = sizeOf(src)
  return (
    <Image
      src={withBasePath(src.startsWith("/") ? src : `/${src}`)}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`block ${className}`}
    />
  )
}

/**
 * Lays photos side by side at one shared height, each as wide as its shape needs, so a row of
 * mixed portrait and landscape photos lines up without cropping anyone. Stacks on small screens.
 */
export function PhotoRow({ items, className = "" }: { items: { src: string; render: ReactNode }[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:items-start ${className}`}>
      {items.map(({ src, render }) => {
        const [width, height] = sizeOf(src)
        return (
          <div key={src} style={{ "--ar": width / height } as CSSProperties} className="min-w-0 sm:[flex:var(--ar)_1_0%]">
            {render}
          </div>
        )
      })}
    </div>
  )
}
