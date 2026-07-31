import {
  BookOpenIcon,
  CheckCircle2Icon,
  ClipboardListIcon,
  GraduationCapIcon,
  Music2Icon,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

const steps = [
  { icon: BookOpenIcon, title: 'Choose', text: 'Pick a course in FL Studio, Cubase, Reason or music business.' },
  { icon: ClipboardListIcon, title: 'Practise', text: 'Complete guided tasks and build organised project files each week.' },
  { icon: Music2Icon, title: 'Create', text: 'Turn your lessons into finished learning projects and portfolio pieces.' },
  { icon: CheckCircle2Icon, title: 'Review', text: 'Use feedback and checklists to improve your workflow and confidence.' },
  { icon: GraduationCapIcon, title: 'Complete', text: 'Finish the required milestones and keep building your next skill level.' },
];

export function StudentPipeline() {
  return (
    <section id="journey" className="signal-section section-pad journey" aria-labelledby="journey-heading">
      <div className="page-shell">
        <SectionIntro
          headingId="journey-heading"
          number="07"
          eyebrow="Your journey"
          title="From beginner to confident creator"
          description="Lukulu Academy gives you a practical path for learning, practising, reviewing and completing music-production projects."
        />
        <Reveal>
          <ol className="journey-track">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title}>
                  <div className="journey-track__node">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
        <a href="#courses" className="button button-primary journey-cta">Start learning</a>
      </div>
    </section>
  );
}
