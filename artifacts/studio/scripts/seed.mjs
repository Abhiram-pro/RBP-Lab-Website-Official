/**
 * Seeds the Sanity dataset with the content currently bundled in the website.
 *
 * Run once to move the lab's existing news and photographs into the Studio, so
 * editors open it and find real content rather than a blank slate. Safe to
 * re-run: every document uses a deterministic `_id` and assets are looked up by
 * their original filename, so a second run updates in place instead of
 * creating duplicates.
 *
 *   node scripts/seed.mjs            # create/update
 *   node scripts/seed.mjs --dry-run  # report what would happen
 *
 * Auth comes from the Sanity CLI session already on this machine
 * (~/.config/sanity/config.json). No token is written to the repo.
 */
import { createClient } from '@sanity/client';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(HERE, '../../rbp-lab');
const DRY_RUN = process.argv.includes('--dry-run');

function cliToken() {
  if (process.env.SANITY_AUTH_TOKEN) return process.env.SANITY_AUTH_TOKEN;
  const configPath = path.join(homedir(), '.config', 'sanity', 'config.json');
  if (!existsSync(configPath)) {
    throw new Error('No Sanity CLI session found. Run `sanity login` first.');
  }
  const token = JSON.parse(readFileSync(configPath, 'utf8'))?.authToken;
  if (!token) throw new Error('Sanity CLI config has no authToken. Run `sanity login`.');
  return token;
}

const client = createClient({
  projectId: 'qlzc99he',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token: cliToken(),
  useCdn: false,
});

/**
 * `publishedAt` is the ordering key the schema describes, not a claim about
 * when each item happened. These timestamps reproduce the order the site
 * already shows; the lab sets real dates on anything posted from here on.
 */
const NEWS = [
  {
    _id: 'news-magoh-magohb-paralog-proteomics',
    title: 'New Publication: MAGOH/MAGOHB Paralog Proteomics',
    summary:
      'Proteomics uncovers distinct gene-regulatory functions of the MAGOH/MAGOHB paralogs in cell proliferation.',
    kind: 'publication',
    venue: 'BBA Gene Regulatory Mechanisms',
    year: '2026',
    publishedAt: '2026-06-01T00:00:00.000Z',
    imageFile: 'lab/Proteomics.jpeg',
  },
  {
    _id: 'news-crispr-distinguish-magoh-paralogs',
    title: 'CRISPR-Based Method to Distinguish MAGOH Paralogs',
    summary:
      'CRISPR-based genome editing developed to endogenously distinguish the paralogs MAGOH and MAGOHB.',
    kind: 'publication',
    venue: 'Gene Reports',
    year: '2025',
    publishedAt: '2025-09-01T00:00:00.000Z',
    imageFile: 'lab/Cas-9_KO_and_Splicing.jpeg',
  },
  {
    _id: 'news-magoh-delta-37-isoform',
    summary:
      'An EJC-independent novel isoform of MAGOH — MAGOH-Δ37 — identified along with its interactome.',
    kind: 'publication',
    venue: 'BBRC',
    year: '2025',
    publishedAt: '2025-03-01T00:00:00.000Z',
    imageFile: 'lab/Localization_of_MAGOH_delta_37.jpeg',
  },
  {
    _id: 'news-sap18-bioid-prespliceosomal',
    summary:
      'BioID proximity mapping reveals novel SAP18 interactions within the prespliceosomal complex.',
    kind: 'publication',
    venue: 'BBRC',
    year: '2024',
    publishedAt: '2024-06-01T00:00:00.000Z',
    imageFile: 'lab/IP_Data.jpeg',
  },
  {
    // The schema restricts `kind` to four values, so the Co-PI detail lives in
    // the venue rather than being dropped.
    _id: 'news-icmr-estrogen-regulated-expression',
    summary:
      'Ongoing ICMR-funded project as Co-PI on genome-wide estrogen-regulated gene expression.',
    kind: 'funding',
    venue: 'ICMR · Co-PI',
    year: 'Ongoing',
    publishedAt: '2023-06-01T00:00:00.000Z',
    imageFile: 'lab/Isoform_Usage.jpeg',
  },
  {
    _id: 'news-rnps1-oncogenic-splicing-factor',
    summary:
      'RNPS1 identified as an oncogenic splicing factor driving proliferation in cervical cancer cells.',
    kind: 'publication',
    venue: 'IUBMB',
    year: '2022',
    publishedAt: '2022-06-01T00:00:00.000Z',
    imageFile: 'lab/Invasion.jpeg',
  },
];

/** Reuses an existing asset with the same original filename. */
async function uploadOnce(relPath, cache) {
  const filename = path.basename(relPath);
  if (cache.has(filename)) return cache.get(filename);

  const existing = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id',
    { filename },
  );
  if (existing) {
    cache.set(filename, existing);
    console.log(`  reuse  ${filename}`);
    return existing;
  }

  if (DRY_RUN) {
    console.log(`  UPLOAD ${filename} (dry run)`);
    return `dry-run-${filename}`;
  }

  const buffer = await readFile(path.join(SITE, 'public/images', relPath));
  const asset = await client.assets.upload('image', buffer, { filename });
  cache.set(filename, asset._id);
  console.log(`  upload ${filename} -> ${asset._id}`);
  return asset._id;
}

async function main() {
  const cache = new Map();

  console.log(`\nNews (${NEWS.length})`);
  const newsDocs = [];
  for (const item of NEWS) {
    const assetId = await uploadOnce(item.imageFile, cache);
    const { imageFile, ...fields } = item;
    newsDocs.push({
      ...fields,
      _type: 'news',
      image: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
    });
  }

  const galleryDir = path.join(SITE, 'public/images/gallery');
  const files = (await readdir(galleryDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  console.log(`\nGallery (${files.length})`);
  const galleryDocs = [];
  for (const [index, file] of files.entries()) {
    const assetId = await uploadOnce(`gallery/${file}`, cache);
    galleryDocs.push({
      _id: `gallery-${String(index + 1).padStart(2, '0')}`,
      _type: 'galleryImage',
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: assetId },
        alt: `Photograph ${index + 1} from the RNA-Binding Proteins Laboratory at IIT Guwahati`,
      },
      // Descending so the existing on-page order is preserved.
      takenAt: new Date(Date.UTC(2026, 0, 1) - index * 86400000).toISOString(),
    });
  }

  if (DRY_RUN) {
    console.log(`\nDry run: would write ${newsDocs.length + galleryDocs.length} documents.`);
    return;
  }

  const tx = client.transaction();
  for (const doc of [...newsDocs, ...galleryDocs]) tx.createOrReplace(doc);
  await tx.commit();

  const counts = await client.fetch(
    '{"news": count(*[_type == "news"]), "gallery": count(*[_type == "galleryImage"])}',
  );
  console.log(`\nDone. Dataset now holds ${counts.news} news and ${counts.gallery} gallery docs.`);
}

main().catch((error) => {
  console.error('\nSeed failed:', error.message);
  process.exit(1);
});
