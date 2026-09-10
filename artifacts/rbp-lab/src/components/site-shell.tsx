import { type ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Members', href: '/members' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Collaborators', href: '/collaborators' },
  { label: 'Gallery', href: '/gallery' },
];

const mobileNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Members', href: '/members' },
  { label: 'Papers', href: '/publications' },
  { label: 'Contact', href: '/contact' },
];

function isCurrent(location: string, href: string) {
  return href === '/' ? location === '/' : location === href || location.startsWith(`${href}/`);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" data-testid="link-skip-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/" aria-label="RNA-Binding Proteins Laboratory home" data-testid="link-home-wordmark" onClick={() => setMenuOpen(false)}>
            <span className="wordmark-mark" aria-hidden="true">R·B</span>
            <span className="wordmark-lockup">
              <span className="wordmark-text">RBP Lab</span>
              <span className="wordmark-subtext">RNA-Binding Proteins</span>
            </span>
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link className="nav-link" href={item.href} aria-current={isCurrent(location, item.href) ? 'page' : undefined} data-testid={`link-nav-${item.label.toLowerCase()}`} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="header-contact" href="/contact" data-testid="link-header-contact">Contact</Link>
          <button className="mobile-menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={17} strokeWidth={1.5} /> : <Menu size={17} strokeWidth={1.5} />}
          </button>
        </div>
        <div className="mobile-menu" id="mobile-navigation" data-open={menuOpen}>
          <div className="mobile-menu-inner">
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link className="nav-link" href={item.href} aria-current={isCurrent(location, item.href) ? 'page' : undefined} data-testid={`link-mobile-${item.label.toLowerCase()}`} key={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link className="nav-link" href="/contact" data-testid="link-mobile-contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="main-content" id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="wordmark">
                <span className="wordmark-mark" aria-hidden="true">R·B</span>
                <span className="wordmark-lockup">
                  <span className="wordmark-text">RBP Lab</span>
                  <span className="wordmark-subtext">RNA-Binding Proteins</span>
                </span>
              </div>
              <p>Department of Biosciences and Bioengineering<br />IIT Guwahati</p>
            </div>
            <div className="footer-column" aria-hidden="true" />
            <div className="footer-column" aria-hidden="true" />
            <div className="footer-column" aria-hidden="true" />
            <div className="footer-column" aria-hidden="true" />
          </div>
          <div className="footer-bottom">
            <span>RBP Laboratory</span>
            <span>IIT Guwahati</span>
          </div>
        </div>
      </footer>
      <nav className="mobile-tabs" aria-label="Mobile quick navigation">
        {mobileNavigation.map((item) => (
          <Link className="mobile-tab" href={item.href} aria-current={isCurrent(location, item.href) ? 'page' : undefined} data-testid={`link-tab-${item.label.toLowerCase()}`} key={item.href}>
            <span aria-hidden="true">{item.label === 'Home' ? '01' : item.label === 'Research' ? '02' : item.label === 'Members' ? '03' : '04'}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}