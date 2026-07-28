import { BenefitsSection } from '../components/BenefitsSection';
import { CoursesSection } from '../components/CoursesSection';
import { DocumentTitle } from '../components/DocumentTitle';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { LabelSection } from '../components/LabelSection';
import { PricingSection } from '../components/PricingSection';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { RemoteAcademySection } from '../components/RemoteAcademySection';
import { RemoteCoursesSection } from '../components/RemoteCoursesSection';
import { StudentPipeline } from '../components/StudentPipeline';

export function HomePage() {
  return (
    <>
      <DocumentTitle title="Learn it. Build it. Release it." description="A practical online music academy for South African creators. Master your DAW, understand the business and build your next release-ready project." />
      <HeroSection />
      <RemoteAcademySection />
      <RemoteCoursesSection />
      <CoursesSection />
      <StudentPipeline />
      <BenefitsSection />
      <ReasonCertificateSection />
      <PricingSection />
      <LabelSection />
      <Footer />
    </>
  );
}
