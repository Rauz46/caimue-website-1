/** A resized, modern-format copy of a local image, for plain img tags. Remote images pass through untouched. */
export const optimised = (path: string, width: number) =>
  path.startsWith("/") ? `/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75` : path;
