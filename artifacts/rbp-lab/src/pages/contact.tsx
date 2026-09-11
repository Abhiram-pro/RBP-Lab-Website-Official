import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { CONTACT } from '@/data/contact';
import { PageHeader, Section } from '@/components/page-patterns';

export function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins (RBPs) Laboratory" title="Contact">
        <p className="page-header-lede">Enquiries about research, collaborations, and student positions are welcome.</p>
      </PageHeader>

      <Section tone="base" className="contact-section">
        <div className="contact-grid">
          <address className="contact-address">
            <div className="contact-block">
              <MapPin size={20} strokeWidth={1.3} aria-hidden="true" />
              <div>
                <div className="eyebrow">Visit the lab</div>
                <div className="contact-address-lines">
                  {CONTACT.addressLines.map((line) => <span key={line}>{line}</span>)}
                </div>
              </div>
            </div>

            <div className="contact-links">
              <a href={`mailto:${CONTACT.email}`}>
                <Mail size={18} strokeWidth={1.3} aria-hidden="true" />
                <span>
                  <span className="contact-link-label">Email</span>
                  {CONTACT.email}
                </span>
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>
                <Phone size={18} strokeWidth={1.3} aria-hidden="true" />
                <span>
                  <span className="contact-link-label">Phone</span>
                  {CONTACT.phone}
                </span>
              </a>
            </div>
          </address>

          <div className="contact-pi">
            <div className="eyebrow">Principal Investigator</div>
            <h2>{CONTACT.piName}</h2>
            <p>{CONTACT.piTitle}</p>
            <div className="contact-pi-links">
              <Link className="text-link" href={CONTACT.piProfileUrl}>
                View faculty profile <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a className="text-link" href={CONTACT.piExternalUrl} target="_blank" rel="noopener noreferrer">
                Institutional profile <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <figure className="contact-map">
          <iframe
            src={CONTACT.mapEmbedUrl}
            title={CONTACT.mapLabel}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <figcaption>{CONTACT.addressLines.join(' · ')}</figcaption>
        </figure>
      </Section>
    </>
  );
}