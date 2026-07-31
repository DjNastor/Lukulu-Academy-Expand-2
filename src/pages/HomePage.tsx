import { AboutSection } from '../components/AboutSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { CoursesSection } from '../components/CoursesSection';
import { DocumentTitle } from '../components/DocumentTitle';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { PricingSection } from '../components/PricingSection';
import { ReasonCertificateSection } from '../components/ReasonCertificateSection';
import { RemoteAcademySection } from '../components/RemoteAcademySection';
import { RemoteCoursesSection } from '../components/RemoteCoursesSection';
import { StudentPipeline } from '../components/StudentPipeline';

export function HomePage() {
  return (
    <>
      <DocumentTitle title="Lukulu Academy" description="Learn music production, Reason 14, FL Studio, Cubase and music business through practical remote courses with Lukulu Academy in South Africa." />
      <HeroSection />
      <AboutSection />
      <RemoteAcademySection />
      <CoursesSection />
      <RemoteCoursesSection />
      <ReasonCertificateSection />
      <PricingSection />
      <BenefitsSection />
      <StudentPipeline />
      <Footer />
    </>
  );
}
