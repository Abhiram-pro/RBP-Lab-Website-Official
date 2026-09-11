import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { CONTACT } from '@/data/contact';
import { FUNDERS } from '@/data/funders';
import { Marquee } from '@/components/marquee';

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

const footerNavigation = [
  { label: 'Research', href: '/research' },
  { label: 'Members', href: '/members' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Collaborators', href: '/collaborators' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

function isCurrent(location: string, href: string) {
  return href === '/' ? location === '/' : location === href || location.startsWith(`${href}/`);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location]);

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
      <main className="main-content route-content" id="main-content" key={location}>{children}</main>
      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-identity">
            <div className="footer-brand">
              <Link className="footer-lab-name" href="/">{CONTACT.labName}</Link>
              <p>Department of Biosciences and Bioengineering<br />IIT Guwahati</p>
              <div className="footer-contact-links">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
              </div>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div className="footer-funders">
            <div className="meta-label">Research support</div>
            <Marquee speed={28} ariaLabel="Funding partners">
              {FUNDERS.map((funder) => (
                <div className="funder-logo" key={funder.id}>
                  <img src={funder.logoSrc} alt={funder.name} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="footer-bottom">
            <span>© 2026 RNA-Binding Proteins Laboratory, IIT Guwahati. All rights reserved.</span>
            <span>FUNDING CREDIT · VERIFIED DETAILS PENDING</span>
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