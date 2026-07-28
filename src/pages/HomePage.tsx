import { CoursesSection } from '../components/CoursesSection';
import { DocumentTitle } from '../components/DocumentTitle';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { LabelSection } from '../components/LabelSection';
import { PricingSection } from '../components/PricingSection';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { RemoteCoursesSection } from '../components/RemoteCoursesSection';
import { ServiceGateway } from '../components/ServiceGateway';

export function HomePage() {
  return (
    <>
      <DocumentTitle title="Music Production Education & Creative Services" description="Learn music production, build a release-ready track, and get practical support from Lukulu Academy & Recordings in South Africa." />
      <HeroSection />
      <ServiceGateway />
      <RemoteCoursesSection />
      <CoursesSection />
      <ReasonCertificateSection />
      <PricingSection />
      <LabelSection />
      <Footer />
    </>
  );
}
