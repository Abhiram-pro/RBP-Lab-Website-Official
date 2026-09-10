import { type ReactNode, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowLeft, ArrowRight, ArrowUpRight, Dna, Network, RefreshCw, ScanLine } from 'lucide-react';
import { EmptyPage, Section, SectionHeader } from '@/components/page-patterns';
import { SiteShell } from '@/components/site-shell';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function FigureFrame({ src, alt, caption, className = '' }: { src: string; alt: string; caption?: string; className?: string }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className={`figure-frame ${className}`.trim()}>
      <div className="figure-surface">
        {missing ? (
          <div className="media-pending" role="img" aria-label={`${alt}. Image asset will be added later.`}>
            <span aria-hidden="true">FIGURE ASSET PENDING</span>
          </div>
        ) : (
          <img src={assetPath(src)} alt={alt} onError={() => setMissing(true)} />
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

const focusItems = [
  {
    number: '01',
    title: 'ASAP & EJC in mRNA Metabolism',
    description: 'Understanding the functions of the Apoptosis and Splicing-Associated Protein (ASAP) complex in relation to the Exon Junction Complex (EJC) in mRNA metabolism.',
    icon: Dna,
  },
  {
    number: '02',
    title: 'RBPs in Human Disease',
    description: 'Elucidating the molecular involvement of RNA-binding proteins in human diseases such as cancers and neurodevelopmental disorders.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Post-Transcriptional Regulation',
    description: 'Exploring the post-transcriptional gene regulation of different RNA-binding proteins across stages of gene expression.',
    icon: ScanLine,
  },
  {
    number: '04',
    title: 'Isoform Switching',
    description: 'Investigating the functional outcomes of isoform switching and its consequences for mRNP composition and activity.',
    icon: RefreshCw,
  },
];

const gatewayCards = [
  {
    label: 'Research',
    href: '/research',
    image: '/images/lab/Cas-9_KO_and_Splicing.jpeg',
    description: 'Exon junction complexes, the ASAP complex, and the regulation of RNA fate.',
  },
  {
    label: 'Team',
    href: '/members',
    image: '/images/gallery/gallery-01.jpg',
    description: 'The researchers, scholars, and students who make up the laboratory.',
  },
  {
    label: 'Publications',
    href: '/publications',
    image: '/images/lab/Isoform_Usage.jpeg',
    description: 'Sixty-three papers spanning RNA biology, splicing, and computational genomics.',
  },
];

const newsItems = [
  {
    image: '/images/lab/Proteomics.jpeg',
    headline: 'Proteomics uncovers distinct gene-regulatory functions of the MAGOH/MAGOHB paralogs in cell proliferation.',
    year: '2026',
    venue: 'PUBLICATION · BBA GENE REGULATORY MECHANISMS',
  },
  {
    image: '/images/lab/Cas-9_KO_and_Splicing.jpeg',
    headline: 'CRISPR-based genome editing developed to endogenously distinguish the paralogs MAGOH and MAGOHB.',
    year: '2025',
    venue: 'PUBLICATION · GENE REPORTS',
  },
  {
    image: '/images/lab/Localization_of_MAGOH_delta_37.jpeg',
    headline: 'An EJC-independent novel isoform of MAGOH — MAGOH-Δ37 — identified along with its interactome.',
    year: '2025',
    venue: 'PUBLICATION · BBRC',
  },
  {
    image: '/images/lab/IP_Data.jpeg',
    headline: 'BioID proximity mapping reveals novel SAP18 interactions within the prespliceosomal complex.',
    year: '2024',
    venue: 'PUBLICATION · BBRC',
  },
  {
    image: '/images/lab/Isoform_Usage.jpeg',
    headline: 'Ongoing ICMR-funded project as Co-PI on genome-wide estrogen-regulated gene expression.',
    year: 'ICMR',
    venue: 'FUNDING · CO-PI',
  },
  {
    image: '/images/lab/Invasion.jpeg',
    headline: 'RNPS1 identified as an oncogenic splicing factor driving proliferation in cervical cancer cells.',
    year: '2022',
    venue: 'PUBLICATION · IUBMB',
  },
];

function Home() {
  const newsRail = useRef<HTMLDivElement>(null);

  const moveNews = (direction: 'previous' | 'next') => {
    newsRail.current?.scrollBy({
      left: direction === 'next' ? newsRail.current.clientWidth * 0.72 : -newsRail.current.clientWidth * 0.72,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-page">
      <Section tone="inverse" className="home-hero-section">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <h1 id="home-heading" data-testid="heading-rna-binding-proteins-laboratory">RNA-Binding Proteins Laboratory</h1>
            <p className="home-hero-lede">Investigating the molecular logic of RNA-binding proteins in nonsense-mediated decay, splicing regulation, and gene expression fidelity.</p>
            <div className="keyword-list" aria-label="Research keywords">
              {['Alternative Splicing', 'Splicing', 'Gene Expression', 'EJC Research'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="home-hero-actions">
              <Link className="button button--solid" href="/research">Explore Research <ArrowRight size={15} aria-hidden="true" /></Link>
              <Link className="button button--outline" href="/members">Meet the Team <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
          <FigureFrame
            src="/images/lab/Proteomics.jpeg"
            alt="Research figure: western blot of MAGOH and MAGOHB knockouts, ribbon structures of the two paralogs, and a bar chart of mean normalised peptide intensity across knockout and wildtype conditions"
            caption="MAGOH / MAGOHB paralogs · Quantitative proteomics"
            className="hero-figure"
          />
        </div>
      </Section>

      <Section tone="base" id="research-focus">
        <SectionHeader
          eyebrow="Research Focus"
          title="Four questions the lab is working on"
          lede="Our programme spans the assembly of ribonucleoprotein complexes, their disruption in disease, and the regulatory consequences downstream."
        />
        <div className="focus-grid">
          {focusItems.map(({ number, title, description, icon: Icon }) => (
            <article className="focus-item" key={number}>
              <div className="focus-topline">
                <span className="focus-number">{number}</span>
                <Icon size={22} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/research">Read the full research overview <ArrowRight size={15} aria-hidden="true" /></Link>
      </Section>

      <Section tone="raised">
        <SectionHeader eyebrow="Explore the laboratory" title="Start with the work, the people, or the record." />
        <div className="gateway-grid">
          {gatewayCards.map((card) => (
            <Link className="gateway-card" href={card.href} key={card.label}>
              <FigureFrame src={card.image} alt={`${card.label} research laboratory image`} />
              <div className="gateway-card-copy">
                <span className="gateway-label">{card.label} <ArrowUpRight size={15} aria-hidden="true" /></span>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sunken" className="news-section">
        <div className="news-header">
          <SectionHeader eyebrow="Lab News & Achievements" title="Recent work from the laboratory" />
          <div className="news-controls" aria-label="News carousel controls">
            <button type="button" onClick={() => moveNews('previous')} aria-label="Previous news items"><ArrowLeft size={16} aria-hidden="true" /></button>
            <button type="button" onClick={() => moveNews('next')} aria-label="Next news items"><ArrowRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
        <div className="news-rail" ref={newsRail} tabIndex={0} aria-label="Lab news">
          {newsItems.map((item) => (
            <article className="news-card" key={item.headline}>
              <FigureFrame src={item.image} alt="" />
              <h3>{item.headline}</h3>
              <div className="news-meta">
                <span>{item.year}</span>
                <span>{item.venue}</span>
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/news">See all lab news <ArrowRight size={15} aria-hidden="true" /></Link>
      </Section>
    </div>
  );
}

function PrincipalInvestigator() {
  return (
    <>
      <EmptyPage title="Principal Investigator: Prof. Kusum K Singh" />
      <section className="page-width profile-grid" aria-labelledby="profile-heading">
        <div className="profile-mark" aria-hidden="true" data-testid="profile-mark" />
        <div className="profile-copy">
          <div className="eyebrow">Principal Investigator</div>
          <h2 id="profile-heading" data-testid="text-principal-investigator-name">Prof. Kusum K Singh</h2>
          <p className="profile-affiliation" data-testid="text-principal-investigator-affiliation">Department of Biosciences and Bioengineering<br />IIT Guwahati</p>
        </div>
      </section>
    </>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteShell>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/research">{() => <EmptyPage title="Research" />}</Route>
          <Route path="/members">{() => <EmptyPage title="Members" />}</Route>
          <Route path="/members/kusum-k-singh" component={PrincipalInvestigator} />
          <Route path="/publications">{() => <EmptyPage title="Publications" />}</Route>
          <Route path="/news">{() => <EmptyPage title="News" />}</Route>
          <Route path="/equipment">{() => <EmptyPage title="Equipment" />}</Route>
          <Route path="/collaborators">{() => <EmptyPage title="Collaborators" />}</Route>
          <Route path="/gallery">{() => <EmptyPage title="Gallery" />}</Route>
          <Route path="/contact">{() => <EmptyPage title="Contact" />}</Route>
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;