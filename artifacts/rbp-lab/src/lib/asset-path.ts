/**
 * Resolves an image source for rendering.
 *
 * Paths bundled in `public/` are relative and need the Vite base prefix. Images
 * coming from Sanity are already absolute CDN URLs, and blindly prefixing those
 * produced sources like `/https://cdn.sanity.io/...`, which failed to load and
 * fell through to the "asset pending" placeholder. Data URIs are passed through
 * for the same reason.
 */
export function assetPath(src: string): string {
  if (!src) return '';
  if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;
}
