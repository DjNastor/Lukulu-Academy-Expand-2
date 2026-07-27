import { HeroSection } from '../components/HeroSection';
import { CoursesSection } from '../components/CoursesSection';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { PricingSection } from '../components/PricingSection';
import { LabelSection } from '../components/LabelSection';
import { Footer } from '../components/Footer';
import { ServiceGateway } from '../components/ServiceGateway';
import { DocumentTitle } from '../components/DocumentTitle';
export function HomePage() {
  return (
    <>
      <DocumentTitle title="Learn. Create. Release." description="Learn music production, finish a Reason 14 certificate, book studio services, licence beats and prepare your next release with Lukulu in South Africa." />
      <HeroSection />
      <ServiceGateway />
      <CoursesSection />
      <ReasonCertificateSection />
      <PricingSection />
      <LabelSection />
      <Footer />
    </>);

}
