import { Clock3Icon, MailIcon, RouteIcon } from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { EnquiryForm } from '../components/EnquiryForm';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';

export function EnquiryPage() {
  return (
    <>
      <DocumentTitle title="Academy Enquiry" description="Ask Lukulu Academy about courses, remote enrolment, memberships, student support or account help." />
      <PageHero
        eyebrow="Academy enquiry desk"
        title="One form. The right Academy support."
        description="Choose an Academy area and your message is routed with the course, membership or account context the team needs."
        aside={(
          <div className="page-hero__route-note">
            <RouteIcon aria-hidden="true" />
            <p className="console-label">ACADEMY ROUTING</p>
            <strong>Academy area → support type → team</strong>
            <span>No extra services. Choose the exact Academy support path.</span>
          </div>
        )}
      />
      <section className="enquiry-page signal-section section-pad" aria-label="Academy enquiry form and contact details">
        <div className="page-shell enquiry-page__layout">
          <aside className="brand-panel">
            <picture>
              <source srcSet="/lar-brand-mark.webp" type="image/webp" />
              <img src="/lar-brand-mark.png" alt="Lukulu Academy" width="768" height="768" />
            </picture>
            <div>
              <p className="console-label">LUKULU ACADEMY / SOUTH AFRICA</p>
              <h2>Ready when you are</h2>
              <p>Send enough detail for a useful first response. Links are welcome; files are not uploaded through this form.</p>
              <ul>
                <li><Clock3Icon aria-hidden="true" /> Response timing depends on the course, membership or student-support request.</li>
                <li><MailIcon aria-hidden="true" /> If online storage is unavailable, the form prepares an email instead.</li>
              </ul>
            </div>
          </aside>
          <EnquiryForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
