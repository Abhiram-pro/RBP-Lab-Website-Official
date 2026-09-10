import { type ReactNode, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowLeft, ArrowRight, ArrowUpRight, Dna, Linkedin, Network, RefreshCw, ScanLine } from 'lucide-react';
import { EmptyPage, Section, SectionHeader } from '@/components/page-patterns';
import { PageHeader, SectionNav } from '@/components/page-patterns';
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

type Member = {
  name: string;
  role: string;
  slug: string;
};

const currentMembers: Member[] = [
  { name: 'Khalid Mohd Ibrahimi', role: 'Postdoctoral Researcher', slug: 'khalid-mohd-ibrahimi' },
  { name: 'Priyanka Yadav', role: 'PhD Scholar · NMD & UPF3B Regulation', slug: 'priyanka-yadav' },
  { name: 'Sourabh Chakrabarty', role: 'PhD Scholar · RNA-Protein Interactions', slug: 'sourabh-chakrabarty' },
  { name: 'Silpi Sikha Bora', role: 'PhD Scholar', slug: 'silpi-sikha-bora' },
  { name: 'Lashika Goyal', role: 'M.Tech Scholar', slug: 'lashika-goyal' },
  { name: 'Priya Gautam', role: 'M.Tech Scholar', slug: 'priya-gautam' },
];

const alumni: Member[] = [
  { name: 'Bhagyashree Deka', role: 'PhD Scholar', slug: 'bhagyashree-deka' },
  { name: 'Pratap Chandra', role: 'PhD Scholar', slug: 'pratap-chandra' },
  { name: 'Sweta Kumari', role: 'PhD Scholar', slug: 'sweta-kumari' },
  { name: 'Ayushi Rehman', role: 'PhD Scholar', slug: 'ayushi-rehman' },
  { name: 'Jebasingh Winston R', role: 'M.Tech', slug: 'jebasingh-winston' },
  { name: 'Harita M', role: 'M.Tech', slug: 'harita-m' },
  { name: 'Raja T', role: 'M.Tech', slug: 'raja-t' },
  { name: 'Vishal Bharti', role: 'M.Tech', slug: 'vishal-bharti' },
  { name: 'Ajay Narwade', role: 'M.Tech', slug: 'ajay-narwade' },
  { name: 'Sonali Devi', role: 'M.Tech', slug: 'sonali-devi' },
  { name: 'Harekrishna Mandal', role: 'M.Tech', slug: 'harekrishna-mandal' },
  { name: 'Nayan Jain', role: 'M.Tech', slug: 'nayan-jain' },
  { name: 'Gourab Chatterjee', role: 'M.Tech', slug: 'gourab-chatterjee' },
];

const interns: Member[] = [
  { name: 'Abhiram Ganji', role: 'Summer Intern · Data Science & AI', slug: 'abhiram-ganji' },
];

function PortraitFrame({ member, featured = false }: { member: Member; featured?: boolean }) {
  const [missing, setMissing] = useState(false);
  const alt = `Portrait of ${member.name}`;

  return (
    <div className={`member-portrait ${featured ? 'member-portrait--featured' : ''}`.trim()}>
      {missing ? (
        <div className="member-portrait-blank" role="img" aria-label={`${alt}. Image not available.`} />
      ) : (
        <img
          src={assetPath(`/images/members/${member.slug}.jpg`)}
          alt={alt}
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}

function LinkedInButton({ name }: { name: string }) {
  return (
    <button className="member-link" type="button" aria-label={`LinkedIn profile for ${name}`} title="LinkedIn profile not linked">
      <Linkedin size={15} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="member-card">
      <PortraitFrame member={member} />
      <div className="member-card-meta">
        <div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
        <LinkedInButton name={member.name} />
      </div>
    </article>
  );
}

function RosterSectionHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="roster-section-header">
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}

function Members() {
  const pi: Member = { name: 'Prof. Kusum K Singh', role: 'Principal Investigator · Assistant Professor', slug: 'kusum-k-singh' };

  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins Laboratory · IIT Guwahati" title="Our People">
        <p className="page-header-lede">The researchers, scholars, and students who make up the RBP Laboratory — past and present.</p>
        <SectionNav
          items={[
            { label: 'Current Members', href: '#current' },
            { label: 'Alumni', href: '#alumni' },
            { label: 'Interns', href: '#interns' },
          ]}
        />
      </PageHeader>

      <section className="page-width pi-feature" aria-labelledby="pi-feature-heading">
        <PortraitFrame member={pi} featured />
        <div className="pi-feature-copy">
          <div className="eyebrow">Principal Investigator</div>
          <h2 id="pi-feature-heading"><Link href="/members/kusum-k-singh">Prof. Kusum K Singh</Link></h2>
          <p className="pi-role">{pi.role}</p>
          <p className="pi-description">Department of Biosciences and Bioengineering, IIT Guwahati — post-transcriptional gene regulation, mRNA splicing, and the molecular biology of RNA-binding protein complexes.</p>
          <div className="pi-actions">
            <Link className="text-link" href="/members/kusum-k-singh">Full faculty profile <ArrowRight size={15} aria-hidden="true" /></Link>
            <LinkedInButton name={pi.name} />
          </div>
        </div>
      </section>

      <Section tone="base" id="current" className="members-roster-section">
        <RosterSectionHeader title="Current Members" />
        <div className="members-grid">
          {currentMembers.map((member) => <MemberCard member={member} key={member.slug} />)}
        </div>
      </Section>

      <Section tone="raised" id="alumni" className="members-roster-section">
        <RosterSectionHeader title="Alumni" lede="Former members of the RNA-Binding Proteins Laboratory." />
        <div className="members-grid">
          {alumni.map((member) => <MemberCard member={member} key={member.slug} />)}
        </div>
      </Section>

      <Section tone="base" id="interns" className="members-roster-section members-roster-section--last">
        <RosterSectionHeader title="Interns" />
        <div className="members-grid">
          {interns.map((member) => <MemberCard member={member} key={member.slug} />)}
        </div>
      </Section>
    </>
  );
}

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
          <Route path="/members" component={Members} />
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