import { Link } from 'wouter';

export default function NotFound() {
  return (
    <section className="page-width page-header" aria-labelledby="not-found-heading">
      <div className="eyebrow">RNA-BINDING PROTEINS LABORATORY</div>
      <h1 id="not-found-heading">Page not found</h1>
      <div style={{ marginTop: '2rem' }}>
        <Link className="outline-action" href="/" data-testid="link-not-found-home">Return to laboratory home</Link>
      </div>
    </section>
  );
}