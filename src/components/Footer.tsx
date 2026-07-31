import { FileTextIcon, LockKeyholeIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-lead">
          <Link to="/" className="brand-lockup" aria-label="Lukulu Academy home">
            <img src="/Lukulu_Logo.png" alt="" />
            <span><strong>LUKULU</strong><small>Academy</small></span>
          </Link>
          <p>Learn music production, software skills and music business through practical Academy programmes in South Africa.</p>
        </div>

        <div className="footer-nav">
          <div>
            <h2>Explore</h2>
            <Link to="/#courses">Academy courses</Link>
            <Link to="/student/login">Student login</Link>
          </div>
          <div>
            <h2>Make contact</h2>
            <Link to="/enquire"><MailIcon aria-hidden="true" /> Academy enquiry</Link>
            <Link to="/enquire?category=accounts&service=receipt-invoice"><FileTextIcon aria-hidden="true" /> Request an academy invoice</Link>
            <a href="tel:+27730933554"><PhoneIcon aria-hidden="true" /> +27 73 093 3554</a>
            <span><MapPinIcon aria-hidden="true" /> South Africa</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Lukulu Academy. All rights reserved.</p>
          <p><LockKeyholeIcon aria-hidden="true" /> Academy payments are secured by Stripe’s hosted checkout.</p>
        </div>
      </div>
    </footer>
  );
}
