import { ArrowRight, Building2, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { PageHeader, Section } from '@/components/page-patterns';
import { CONTACT } from '@/data/contact';

/**
 * One fact per card: icon chip, label, value. Equal-height tiles in a single
 * grid, so the columns line up instead of each block sizing to its own text.
 */
function ContactCard({
  icon,
  label,
  children,
  href,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
  note?: string;
}) {
  const body = (
    <>
      <span className="contact-card-chip" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-card-label">{label}</span>
      <span className="contact-card-value">{children}</span>
      {note ? <span className="contact-card-note">{note}</span> : null}
    </>
  );

  return href ? (
    <a className="contact-card contact-card--link" href={href}>
      {body}
    </a>
  ) : (
    <div className="contact-card">{body}</div>
  );
}

export function ContactPage() {
  const [department, , , locality] = CONTACT.addressLines;

  return (
    <>
      <PageHeader eyebrow="RNA-Binding Proteins (RBPs) Laboratory" title="Contact">
        <p className="page-header-lede">
          Enquiries about research, collaborations, and student positions are welcome.
        </p>
      </PageHeader>

      <Section tone="base" className="contact-section">
        <div className="contact-cards">
          <ContactCard
            icon={<Building2 size={19} strokeWidth={1.4} />}
            label="Lab location"
            note={department}
          >
            {CONTACT.room}
          </ContactCard>

          <ContactCard
            icon={<Mail size={19} strokeWidth={1.4} />}
            label="Email"
            href={`mailto:${CONTACT.email}`}
            note="Enquiries and collaborations"
          >
            {CONTACT.email}
          </ContactCard>

          <ContactCard
            icon={<Phone size={19} strokeWidth={1.4} />}
            label="Landline"
            href={`tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`}
            note={`Extension ${CONTACT.phoneExtension} within IITG`}
          >
            {CONTACT.phone}
          </ContactCard>

          <ContactCard icon={<MapPin size={19} strokeWidth={1.4} />} label="Campus" note={locality}>
            IIT Guwahati
          </ContactCard>
        </div>

        <div className="contact-pi-panel">
          <div className="contact-pi-copy">
            <div className="eyebrow">Principal Investigator</div>
            <h2>{CONTACT.piName}</h2>
            <p>{CONTACT.piTitle}</p>
          </div>
          <div className="contact-pi-links">
            <Link className="text-link" href={CONTACT.piProfileUrl}>
              View faculty profile <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              className="text-link"
              href={CONTACT.piExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Institutional profile <ExternalLink size={14} aria-hidden="true" />
            </a>
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
          <figcaption>
            <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
            <address>{CONTACT.addressLines.join(' · ')}</address>
          </figcaption>
        </figure>
      </Section>
    </>
  );
}
