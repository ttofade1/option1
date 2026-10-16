/** Prefixes a /public asset path with the deploy base path (next/image doesn't do this for string srcs). */
export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`
}
