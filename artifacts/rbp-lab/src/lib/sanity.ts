import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Sanity connection.
 *
 * The project ID and dataset are public identifiers — they appear in every
 * request the browser makes — so they are safe to commit as defaults. The env
 * vars exist only so a different dataset can be pointed at without a code
 * change. No token is used: the site reads published documents anonymously,
 * which is what `useCdn` serves.
 */
export const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID ?? 'qlzc99he';
export const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET ?? 'production';

/**
 * `apiVersion` is pinned deliberately. Sanity treats it as a contract: leaving
 * it floating means a future API change can alter query results without any
 * change on our side.
 */
const API_VERSION = '2024-10-01';

export const sanityClient: SanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: API_VERSION,
  /**
   * Live API rather than the CDN. Measured: after deleting a document the CDN
   * still served it for over a minute, which means the lab would publish in
   * the Studio and not see the change. This site's traffic is low enough that
   * the CDN saves little, and editors trusting what they see matters more.
   */
  useCdn: false,
  perspective: 'published',
});

const builder = imageUrlBuilder(sanityClient);

/** Sanity image references carry crop/hotspot data the URL builder applies. */
export type SanityImage = {
  asset?: { _ref?: string; _id?: string };
  alt?: string;
  hotspot?: unknown;
  crop?: unknown;
};

/** Builds a CDN URL for a Sanity image, or undefined when there is no asset. */
export function imageUrl(source: SanityImage | undefined, width: number, height?: number) {
  if (!source?.asset?._ref && !source?.asset?._id) return undefined;
  let url = builder.image(source as never).width(width).auto('format').fit('crop');
  if (height) url = url.height(height);
  return url.url();
}
