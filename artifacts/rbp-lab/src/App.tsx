import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { EmptyPage, SectionNav } from '@/components/page-patterns';
import { SiteShell } from '@/components/site-shell';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const homeLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Members', href: '/members' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Collaborators', href: '/collaborators' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

function Home() {
  return (
    <>
      <section className="page-width home-hero" aria-labelledby="home-heading">
        <div>
          <div className="eyebrow">Department of Biosciences and Bioengineering</div>
          <h1 className="home-title" id="home-heading" data-testid="heading-rna-binding-proteins-laboratory">RNA-Binding Proteins (RBP) Laboratory</h1>
          <div className="home-index">IIT Guwahati</div>
        </div>
        <div className="home-side">
          <div className="home-side-rule" aria-hidden="true" />
          <p className="home-affiliation" data-testid="text-principal-investigator">Principal Investigator: Prof. Kusum K Singh</p>
          <Link className="outline-action" href="/members/kusum-k-singh" data-testid="link-principal-investigator">View principal investigator</Link>
        </div>
        <div className="home-hero-art" aria-hidden="true">
          <div className="helix">
            <span className="helix-node" />
            <span className="helix-node" />
            <span className="helix-node" />
            <span className="helix-node" />
            <span className="helix-node" />
          </div>
        </div>
      </section>
      <section className="page-width section-block" aria-labelledby="home-orientation">
        <div className="section-layout">
          <h2 className="section-heading" id="home-orientation">Lab index</h2>
          <SectionNav items={homeLinks} />
        </div>
      </section>
    </>
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