import { type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type SectionProps = {
  tone?: 'base' | 'raised' | 'sunken' | 'inverse';
  width?: 'content' | 'prose' | 'full';
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ tone = 'base', width = 'content', id, children, className = '' }: SectionProps) {
  return (
    <section className={`section-band section-band--${tone} ${className}`.trim()} id={id}>
      <div className={`section-inner section-inner--${width} reveal-on-scroll`}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: 'light' | 'dark';
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, lede, tone = 'light', children }: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${tone}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
      {children}
    </div>
  );
}

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow = 'RNA-BINDING PROTEINS LABORATORY', title, children }: PageHeaderProps) {
  return (
    <header className="page-width page-header reveal-on-scroll">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h1 data-testid={`heading-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{title}</h1>
      {children}
    </header>
  );
}

type SectionNavItem = {
  label: string;
  href: string;
  /** Optional glyph for the tile rail. Callers own their own icon set. */
  icon?: ReactNode;
};

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav className="section-nav" aria-label="Page sections">
      {items.map((item, index) => {
        const ordinal = String(index + 1).padStart(2, '0');
        return (
          <a
            className="section-nav-link"
            href={item.href}
            data-testid={`link-section-${item.label.toLowerCase()}`}
            key={item.href}
          >
            <span className="section-nav-rail">
              <span className="section-nav-index">{ordinal}</span>
              {item.icon ? (
                <span className="section-nav-icon" aria-hidden="true">
                  {item.icon}
                </span>
              ) : null}
            </span>
            <span className="section-nav-label">{item.label}</span>
            <ArrowUpRight className="section-nav-arrow" size={14} aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}

export function EmptyPage({ title }: { title: string }) {
  return (
    <>
      <PageHeader eyebrow="" title={title} />
      <div className="page-width stub-content" aria-label={`${title} content scaffold`} />
    </>
  );
}