import {
  BookOpenCheckIcon,
  GraduationCapIcon,
  LaptopIcon,
  UsersIcon,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

const pillars = [
  {
    icon: GraduationCapIcon,
    title: 'Production courses',
    text: 'FL Studio, Cubase, Reason and music-business training, from foundations to advanced production tools.',
  },
  {
    icon: LaptopIcon,
    title: 'Remote learning',
    text: 'Structured online lessons, guided tasks and practical feedback for students across South Africa.',
  },
  {
    icon: BookOpenCheckIcon,
    title: 'Practical projects',
    text: 'Every programme is built around real music exercises, course files and portfolio-ready learning work.',
  },
  {
    icon: UsersIcon,
    title: 'Student support',
    text: 'Course advice, membership support and student-portal access keep your learning path clear.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="signal-section section-pad section-paper" aria-labelledby="about-heading">
      <div className="page-shell">
        <SectionIntro
          headingId="about-heading"
          number="01"
          eyebrow="The academy"
          title="Your music learning path starts here"
          description="Lukulu Academy focuses on practical music-production education for South African students. Learn the tools, workflows and business basics needed to build stronger music projects."
        />

        <Reveal className="ecosystem-layout">
          <div className="ecosystem-statement">
            <span className="console-label">ONE ACADEMY / CLEAR LEARNING PATH</span>
            <p>
              The public site is focused on courses, remote learning, memberships
              and student support.
            </p>
          </div>
          <ol className="ecosystem-list">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.title}>
                  <span className="ecosystem-index">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
