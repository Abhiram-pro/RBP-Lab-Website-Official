import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { LogIn, Menu, X } from 'lucide-react';
import { CONTACT } from '@/data/contact';
import { FUNDERS } from '@/data/funders';
import { Marquee } from '@/components/marquee';

/** Content is edited in the Sanity Studio; Sanity owns authentication. */
const STUDIO_URL = 'https://rbplab.sanity.studio';

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
  const [headerHidden, setHeaderHidden] = useState(false);
  const [location] = useLocation();

  /**
   * The header is sticky, so on a phone it permanently covers a band of
   * content. Hide it while scrolling down and bring it back on the way up —
   * the nav stays one gesture away without holding real estate.
   */
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const delta = y - last;
        // Ignore sub-pixel jitter and rubber-band scrolling past the top.
        if (Math.abs(delta) > 6 && y > 120) setHeaderHidden(delta > 0);
        else if (y <= 120) setHeaderHidden(false);
        last = y;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // An open menu must never be scrolled out of reach with its own header.
  useEffect(() => {
    if (menuOpen) setHeaderHidden(false);
  }, [menuOpen]);

  // Escape closes the menu, matching the filter dropdown.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

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
      // threshold is a ratio of the element's own area, so a section taller
      // than the viewport can never reach a fractional threshold — the
      // publications page (63 entries in one section) never fired at 0.15.
      // Trigger on any intersection instead, pulled in slightly by rootMargin.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" data-testid="link-skip-content">Skip to content</a>
      <header className="site-header" data-hidden={headerHidden}>
        <div className="header-inner">
          <Link className="wordmark" href="/" aria-label="RNA-Binding Proteins Laboratory home" data-testid="link-home-wordmark" onClick={() => setMenuOpen(false)}>
            <img
              className="wordmark-mark"
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt=""
              aria-hidden="true"
            />
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
        <div
          className="mobile-menu-backdrop"
          data-open={menuOpen}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
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
                  <img src={`${import.meta.env.BASE_URL}${funder.logoSrc.replace(/^\/+/, '')}`} alt={funder.name} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="footer-bottom">
            <span>© 2026 RNA-Binding Proteins Laboratory, IIT Guwahati. All rights reserved.</span>
            <span>FUNDED BY DBT · DST-SERB · CSIR · ICMR · IIT GUWAHATI</span>
          </div>
          <div className="footer-meta">
            <p className="footer-credit">Developed and maintained by Abhiram Ganji</p>
            {/* Points at the Sanity Studio. Sanity handles the sign-in, so the
                site itself carries no auth — only invited lab members get in. */}
            <a
              className="footer-login"
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-member-login"
            >
              <LogIn size={13} strokeWidth={1.6} aria-hidden="true" />
              Lab Member Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}