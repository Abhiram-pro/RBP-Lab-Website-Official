import { type ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow = 'RNA-BINDING PROTEINS LABORATORY', title, children }: PageHeaderProps) {
  return (
    <header className="page-width page-header">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h1 data-testid={`heading-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{title}</h1>
      {children}
    </header>
  );
}

type SectionNavItem = {
  label: string;
  href: string;
};

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav className="section-nav" aria-label="Page sections">
      {items.map((item, index) => (
        <a className="section-nav-link" href={item.href} data-testid={`link-section-${item.label.toLowerCase()}`} key={item.href}>
          <span>{item.label}</span>
          <span className="section-nav-index">{String(index + 1).padStart(2, '0')}</span>
        </a>
      ))}
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