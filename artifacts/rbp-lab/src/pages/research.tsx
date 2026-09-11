import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageHeader, Section, SectionHeader, SectionNav } from '@/components/page-patterns';
import { CONCEPTS, FIGURES, FOCUS_AREAS, PIPELINE, type FocusArea, type ResearchFigure } from '@/data/research';
import {
  Activity,
  ArrowDown,
  Dna,
  FlaskConical,
  Layers,
  Network,
  Shuffle,
  type LucideIcon,
} from 'lucide-react';

/** Icons are referenced by name from the data layer. */
const ICONS: Record<string, LucideIcon> = {
  Activity,
  Dna,
  FlaskConical,
  Layers,
  Network,
  Shuffle,
};

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Resolved = ICONS[name] ?? Network;
  return <Resolved size={size} strokeWidth={1.3} aria-hidden="true" />;
}

const assetPath = (path: string) =>
  path.startsWith('data:') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

/**
 * Scientific plates sit on white and must not be cropped — object-contain,
 * never cover.
 */
function PlateFrame({ src, alt }: { src: string; alt: string }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="research-plate">
      {missing ? (
        <div className="media-pending" role="img" aria-label={`${alt}. Image asset will be added later.`}>
          <span aria-hidden="true">FIGURE ASSET PENDING</span>
        </div>
      ) : (
        <img src={assetPath(src)} alt={alt} onError={() => setMissing(true)} />
      )}
    </div>
  );
}

/** Horizontal stepper on desktop, vertical timeline on mobile. */
function PipelineDiagram() {
  if (PIPELINE.length === 0) return null;

  return (
    <ol className="pipeline" aria-label="Stages of the RNA lifecycle">
      {PIPELINE.map((stage, index) => (
        <li className="pipeline-stage" key={stage.id}>
          <div className="pipeline-node" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="pipeline-copy">
            <h3>{stage.label}</h3>
            <p>{stage.caption}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Overview card — jumps to the matching detail band further down. */
function FocusAreaCard({ area }: { area: FocusArea }) {
  return (
    <article className="focus-card">
      <div className="focus-topline">
        <span className="focus-number">{area.number}</span>
        <Icon name={area.icon} size={22} />
      </div>
      <h3>{area.title}</h3>
      <p>{area.summary}</p>
      {area.tags.length > 0 && (
        <ul className="tag-row" aria-label={`${area.title} keywords`}>
          {area.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <a className="text-link focus-card-link" href={`#${area.id}`}>
        Read more <ArrowDown size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

/** Full detail band. Figure alternates sides between consecutive areas. */
function FocusAreaBand({ area, index }: { area: FocusArea; index: number }) {
  const figureFirst = index % 2 === 1;

  return (
    <Section tone={index % 2 === 0 ? 'base' : 'sunken'} id={area.id} className="focus-band">
      <div className={`focus-band-grid ${figureFirst ? 'focus-band-grid--reversed' : ''}`.trim()}>
        <div className="focus-band-rail">
          <span className="focus-number">{area.number}</span>
          <Icon name={area.icon} size={28} />
        </div>

        <div className="focus-band-copy">
          <div className="eyebrow">{area.eyebrow}</div>
          <h2 id={`${area.id}-title`}>{area.title}</h2>
          {area.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {area.tags.length > 0 && (
            <ul className="tag-row" aria-label={`${area.title} keywords`}>
              {area.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="focus-band-figure">
          <PlateFrame src={area.imageSrc} alt={`Figure illustrating ${area.title}`} />
        </div>
      </div>
    </Section>
  );
}

function ConceptAccordion() {
  if (CONCEPTS.length === 0) return null;

  return (
    <Accordion type="multiple" defaultValue={[CONCEPTS[0].id]} className="concept-accordion">
      {CONCEPTS.map((concept) => (
        <AccordionItem value={concept.id} key={concept.id} className="concept-item">
          <AccordionTrigger className="concept-trigger">
            <span className="concept-trigger-inner">
              <Icon name={concept.icon} size={18} />
              <span>
                <span className="eyebrow">{concept.eyebrow}</span>
                <span className="concept-title">{concept.title}</span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="concept-content">
            {concept.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FigureGrid({ figures }: { figures: ResearchFigure[] }) {
  if (figures.length === 0) return null;

  return (
    <div className="figure-grid stagger-list">
      {figures.map((figure) => (
        <figure className="research-figure" key={figure.id}>
          <PlateFrame src={figure.src} alt={figure.caption} />
          <figcaption>
            <span className="research-figure-caption">{figure.caption}</span>
            <span className="research-figure-meta">{figure.meta}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ResearchPage() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Background', href: '#background' },
    ...FOCUS_AREAS.map((area) => ({ label: area.title, href: `#${area.id}` })),
    { label: 'Figures', href: '#figures' },
  ];

  return (
    <>
      <PageHeader eyebrow="RNA-BINDING PROTEINS (RBPS) LABORATORY" title="Research">
        <p className="page-header-lede">
          Decoding how RNA-binding proteins assemble, interact, and govern the fate of RNA — from
          biogenesis to decay.
        </p>
        <SectionNav items={navItems} />
      </PageHeader>

      <Section tone="base" id="overview">
        <SectionHeader
          eyebrow="Overview"
          title="Where the laboratory works"
          lede="Our programme follows RNA through its lifecycle, from the proteins deposited during splicing to the regulatory consequences downstream."
        />
        <PipelineDiagram />
        <div className="focus-grid stagger-list">
          {FOCUS_AREAS.map((area) => (
            <FocusAreaCard area={area} key={area.id} />
          ))}
        </div>
      </Section>

      <Section tone="raised" id="background" width="prose">
        <SectionHeader eyebrow="Background" title="The biology behind the questions" />
        <ConceptAccordion />
      </Section>

      {FOCUS_AREAS.map((area, index) => (
        <FocusAreaBand area={area} index={index} key={area.id} />
      ))}

      <Section tone="base" id="figures" className="figures-section">
        <SectionHeader
          eyebrow="Figures"
          title="Selected data from the laboratory"
          lede="Representative plates from published and ongoing work."
        />
        <FigureGrid figures={FIGURES} />
      </Section>
    </>
  );
}
