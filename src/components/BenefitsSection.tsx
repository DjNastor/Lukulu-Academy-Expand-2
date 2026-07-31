import { DownloadIcon, Globe2Icon, GraduationCapIcon, UsersIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

const benefits = [
  {
    icon: Globe2Icon,
    title: 'Learn remotely',
    text: 'All you need is your DAW and internet. Learn from anywhere in South Africa — townships, rural areas, anywhere.',
  },
  {
    icon: DownloadIcon,
    title: 'Software & VST guidance',
    text: 'Students receive guidance on the tools and plugins needed to complete their lessons and projects.',
  },
  {
    icon: UsersIcon,
    title: 'Student support',
    text: 'Ask for course advice, membership help and learning-path guidance before or after you enrol.',
  },
  {
    icon: GraduationCapIcon,
    title: 'Certificate pathway',
    text: 'Complete practical course milestones and build a portfolio of finished learning projects.',
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="signal-section section-pad" aria-labelledby="benefits-heading">
      <div className="page-shell">
        <SectionIntro
          headingId="benefits-heading"
          number="06"
          eyebrow="Why Lukulu Academy"
          title="Everything you need to start learning"
          description="Tools, practical knowledge and student support — designed around the realities of independent South African learners."
        />
        <Reveal>
          <ol className="benefit-ledger">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <li key={benefit.title}>
                  <span className="benefit-ledger__index">{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
        <p className="section-note">Course availability, live-session times and membership access are confirmed during enrolment.</p>
      </div>
    </section>
  );
}
