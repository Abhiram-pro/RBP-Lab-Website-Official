import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, Filter, Search } from 'lucide-react';
import { Link } from 'wouter';
import { PageHeader, Section } from '@/components/page-patterns';
import { COLLABORATORS } from '@/data/collaborators';
import { EQUIPMENT } from '@/data/equipment';
import { GALLERY_IMAGES } from '@/data/gallery';
import { NEWS_ITEMS } from '@/data/news';
import { PUBLICATIONS, type Publication, type PublicationType } from '@/data/publications';
import { coverFor } from '@/data/journals';

const publicationTypeLabels: Record<PublicationType, string> = {
  journals: 'Journal Publications',
  conferences: 'Conference Publications',
  books: 'Books',
  bookChapters: 'Book Chapters',
};

const publicationTypeOrder: PublicationType[] = ['journals', 'conferences', 'books', 'bookChapters'];

function PublicationsFilter({ selected, onToggle }: { selected: Set<PublicationType>; onToggle: (type: PublicationType) => void }) {
  const [open, setOpen] = useState(false);
  const count = publicationTypeOrder.length - selected.size;

  return (
    <div className="publication-filter">
      <button className="filter-trigger" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <Filter size={15} aria-hidden="true" />
        Filter
        {count > 0 ? <span className="filter-count">{count}</span> : null}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open ? (
        <div className="filter-menu">
          {publicationTypeOrder.map((type) => (
            <label className="filter-option" key={type}>
              <input
                type="checkbox"
                id={`publication-filter-${type}`}
                name={`publication-filter-${type}`}
                checked={selected.has(type)}
                onChange={() => onToggle(type)}
              />
              <span>{publicationTypeLabels[type]}</span>
            </label>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const SKIP_WORDS = new Set(['and', 'of', 'to', 'in', 'the', 'for', 'on', 'a']);

/**
 * A short monogram for a venue: "Nucleic Acids Research" -> "NAR".
 * Venues that are already acronyms are kept as-is.
 */
function monogram(venue: string): string {
  const cleaned = venue.replace(/[–—-]/g, ' ').trim();
  if (/^[A-Z0-9]{2,5}$/.test(cleaned)) return cleaned;

  const initials = cleaned
    .split(/\s+/)
    .filter((word) => word && !SKIP_WORDS.has(word.toLowerCase()))
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return initials.slice(0, 4) || cleaned.slice(0, 3).toUpperCase();
}

function PublicationCover({ venue }: { venue: string }) {
  const [failed, setFailed] = useState(false);
  const src = coverFor(venue);

  // No cover art held, or the CDN stopped serving one. A monogram plate reads
  // as a deliberate stand-in rather than an image that failed to load.
  if (!src || failed) {
    return (
      <div className="publication-cover publication-cover--plate" role="img" aria-label={venue}>
        <span className="publication-cover-band" aria-hidden="true" />
        <span className="publication-cover-monogram" aria-hidden="true">{monogram(venue)}</span>
      </div>
    );
  }

  return (
    <img
      className="publication-cover"
      src={src}
      alt={`Cover of ${venue}`}
      loading="lazy"
      decoding="async"
      width="300"
      height="400"
      // The CDN path is undocumented, so fall back rather than leave a broken
      // image if it ever stops resolving.
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
    />
  );
}

function PublicationGroup({ type, publications }: { type: PublicationType; publications: Publication[] }) {
  const grouped = useMemo(() => {
    const years = new Map<string, Publication[]>();
    for (const publication of publications) {
      const current = years.get(publication.year) ?? [];
      current.push(publication);
      years.set(publication.year, current);
    }
    return [...years.entries()].sort(([a], [b]) => b.localeCompare(a));
  }, [publications]);

  return (
    <section className="publication-type-group" aria-labelledby={`publication-type-${type}`}>
      <div className="publication-type-heading">
        <h2 id={`publication-type-${type}`}>{publicationTypeLabels[type]} <span>({publications.length})</span></h2>
      </div>
      {grouped.map(([year, entries]) => (
        <div className="publication-year-group" key={year}>
          <div className="publication-year">{year}</div>
          <div className="publication-entries stagger-list">
            {entries.map((publication) => (
              <article className="publication-entry" key={publication.id}>
                <PublicationCover venue={publication.venue} />
                <div className="publication-entry-copy">
                  <h3>{publication.citation}</h3>
                  <p>
                    {publication.venue} · {publication.year}
                    {publication.doi ? <> · <a href={`https://${publication.doi}`} target="_blank" rel="noopener noreferrer">{publication.doi}</a></> : null}
                    {publication.extra ? <> · {publication.extra}</> : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function PublicationsPage() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Set<PublicationType>>(() => new Set(publicationTypeOrder));
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = PUBLICATIONS.filter((publication) => {
    if (!selected.has(publication.type)) return false;
    if (!normalizedQuery) return true;
    return `${publication.citation} ${publication.venue} ${publication.year}`.toLowerCase().includes(normalizedQuery);
  });
  const groups = publicationTypeOrder
    .map((type) => ({ type, publications: filtered.filter((publication) => publication.type === type) }))
    .filter((group) => group.publications.length > 0);

  const toggleType = (type: PublicationType) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins (RBPs) Laboratory" title="Publications">
        <p className="page-header-lede">Research output spanning RNA biology, splicing regulation, and computational genomics.</p>
        <div className="publication-controls">
          <label className="search-field">
            <span className="sr-only">Search publications</span>
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              id="publication-search"
              name="publication-search"
              autoComplete="off"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search publications"
            />
          </label>
          <PublicationsFilter selected={selected} onToggle={toggleType} />
        </div>
        <div className="sr-only" role="status" aria-live="polite">{filtered.length} publication{filtered.length === 1 ? '' : 's'} shown.</div>
      </PageHeader>

      <Section tone="base" className="publication-results">
        {selected.size === 0 ? <p className="empty-state">No publication type selected.</p> : groups.length === 0 ? <p className="empty-state">No publications match &quot;{query}&quot;.</p> : groups.map((group) => <PublicationGroup key={group.type} {...group} />)}
      </Section>
    </>
  );
}

export function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins (RBPs) Laboratory" title="News & Achievements">
        <p className="page-header-lede">Grants, publications, and milestones from the lab.</p>
      </PageHeader>
      <Section tone="base" className="news-list-section">
        <ol className="news-list stagger-list">
          {NEWS_ITEMS.map((item, index) => (
            <li className="news-list-item" key={item.id}>
              <div className="news-list-number">{NEWS_ITEMS.length - index}</div>
              <div>
                <div className="eyebrow">{item.category}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        {NEWS_ITEMS.length === 0 ? <p className="empty-state">No news items yet.</p> : null}
      </Section>
    </>
  );
}

export function EquipmentPage() {
  return (
    <>
      <PageHeader eyebrow="Equipment" title="Lab Instrumentation">
        <p className="page-header-lede">Core equipment supporting our RNA biology, proteomics, and cell biology research programs. Each entry lists the grant it was procured under.</p>
      </PageHeader>
      <Section tone="base" className="equipment-section">
        {EQUIPMENT.length === 0 ? <p className="empty-state">No equipment entries yet.</p> : (
          <div className="equipment-grid stagger-list">
            {EQUIPMENT.map((item) => (
              <article className="equipment-card" key={item.id}>
                <img src={item.imageSrc} alt="" />
                <div className="equipment-accent" style={{ backgroundColor: item.accent }} />
                <div className="equipment-card-copy">
                  <h2>{item.name}</h2>
                  <p className="equipment-model" style={{ color: item.accent }}>{item.model}</p>
                  <p className="equipment-description">{item.description}</p>
                  <p className="equipment-funding">Funded by {item.funding}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

export function CollaboratorsPage() {
  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins (RBPs) Laboratory" title="Collaborators">
        <p className="page-header-lede">Research partnerships spanning genetics, computer science, and engineering — within IIT Guwahati and beyond.</p>
      </PageHeader>
      <Section tone="base" className="collaborators-section">
        {COLLABORATORS.length === 0 ? <p className="empty-state">No collaborators yet.</p> : (
          <div className="collaborators-grid stagger-list">
            {COLLABORATORS.map((collaborator) => (
              <article className="collaborator-card" key={collaborator.id}>
                <div className="monogram" style={{ backgroundColor: collaborator.accent }} aria-hidden="true">{initials(collaborator.name)}</div>
                <h2>{collaborator.name}</h2>
                <p className="collaborator-institution">{collaborator.institution}</p>
                <p>{collaborator.description}</p>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins Laboratory · IIT Guwahati" title="Gallery">
        <p className="page-header-lede">Photographs from the lab, the department, and the people who work here.</p>
      </PageHeader>
      <Section tone="base" className="gallery-section">
        {GALLERY_IMAGES.length === 0 ? <p className="empty-state">No gallery images yet.</p> : (
          <div className="gallery-grid stagger-list">
            {GALLERY_IMAGES.map((image, index) => (
              <GalleryImageFrame image={image} eager={index < 2} key={image.id} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function GalleryImageFrame({ image, eager }: { image: (typeof GALLERY_IMAGES)[number]; eager: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="gallery-image-frame" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <img
        className={loaded ? 'is-loaded' : ''}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}