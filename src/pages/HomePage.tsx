import { AboutSection } from '../components/AboutSection';
import { BeatStore } from '../components/BeatStore';
import { CoursesSection } from '../components/CoursesSection';
import { DesignServices } from '../components/DesignServices';
import { DocumentTitle } from '../components/DocumentTitle';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { LabelSection } from '../components/LabelSection';
import { PricingSection } from '../components/PricingSection';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { StudioBooking } from '../components/StudioBooking';

export function HomePage() {
  return (
    <>
      <DocumentTitle title="Learn. Create. Release." description="Learn music production, finish a Reason 14 certificate, book studio services, licence beats and prepare your next release with Lukulu in South Africa." />
      <HeroSection />
      <AboutSection />
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
