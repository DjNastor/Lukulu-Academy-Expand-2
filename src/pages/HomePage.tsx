import { HeroSection } from '../components/HeroSection';
import { CoursesSection } from '../components/CoursesSection';
import { PricingSection } from '../components/PricingSection';
import { StudioBooking } from '../components/StudioBooking';
import { BeatStore } from '../components/BeatStore';
import { DesignServices } from '../components/DesignServices';
import { LabelSection } from '../components/LabelSection';
import { Footer } from '../components/Footer';
import { ServiceGateway } from '../components/ServiceGateway';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { DocumentTitle } from '../components/DocumentTitle';

export function HomePage() {
  return (
    <>
      <DocumentTitle title="Learn. Create. Release." description="Learn music production, book services and prepare your next release with Lukulu in South Africa." />
      <HeroSection />
      <ServiceGateway />
      <CoursesSection />
      <ReasonCertificateSection />
      <PricingSection />
      <StudioBooking />
      <BeatStore />
      <DesignServices />
      <LabelSection />
      <Footer />
    </>
  );
}
