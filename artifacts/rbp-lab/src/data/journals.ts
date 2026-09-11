/**
 * Journal cover art, keyed by the `venue` string used in publications.ts.
 *
 * Covers are fetched directly from the publisher's CDN rather than stored in
 * the repo. The path is `.../content/image/X{ISSN without hyphen}.jpg`, so to
 * add a journal you only need its ISSN — no file to download or commit.
 *
 * Note this is an undocumented path, not a supported API: if a cover stops
 * resolving, PublicationCover hides the image rather than showing a broken
 * one. Only journals whose cover actually resolves are listed here; anything
 * absent simply renders without a thumbnail.
 */
const CDN = 'https://ars.els-cdn.com/content/image';

/** ISSN with the hyphen removed, as the CDN path expects. */
const ISSNS: Record<string, string> = {
  'BBA – Gene Regulatory Mechanisms': '18749399',
  'BBRC': '0006291X',
  'Gene Reports': '24520144',
  'GENE REPORTS': '24520144',
  'Biochimie': '03009084',
  'Computers in Biology and Medicine': '00104825',
  'Computational Biology and Chemistry': '14769271',
  'Journal of Biological Chemistry': '00219258',
  'Molecular Cell': '10972765',
  'Blood': '00064971',
};

/** Returns the cover URL for a venue, or undefined when none is known. */
export function coverFor(venue: string): string | undefined {
  const issn = ISSNS[venue] ?? ISSNS[venue.trim()];
  return issn ? `${CDN}/X${issn}.jpg` : undefined;
}
