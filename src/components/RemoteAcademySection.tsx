import {
  ArrowRightIcon,
  BookOpenCheckIcon,
  LaptopIcon,
  LogInIcon,
  Music2Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

const accessFeatures = [
  {
    icon: LaptopIcon,
    title: 'Remote learning',
    text: 'Join structured lessons from anywhere in South Africa and learn with the software you already use.',
  },
  {
    icon: BookOpenCheckIcon,
    title: 'Practical curriculum',
    text: 'Move from guided exercises to a complete track, with clear milestones at every level.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Student access',
    text: 'Use the student portal for account access, membership support and your next learning step.',
  },
  {
    icon: Music2Icon,
    title: 'Release pathway',
    text: 'Learn music business fundamentals and understand how finished work moves toward professional release.',
  },
];

export function RemoteAcademySection() {
  return (
    <section id="online-academy" className="signal-section section-pad bg-[#100d0b]" aria-labelledby="online-academy-heading">
      <div className="page-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Badge variant="gold" size="md" showDot>
              Remote enrolment open
            </Badge>
            <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Online Academy / South Africa
            </p>
            <h2
              id="online-academy-heading"
              className="mt-4 max-w-[11ch] font-heading text-[clamp(3.2rem,7vw,6.4rem)] font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-[#fffaf2]"
            >
              Learn from anywhere. Build toward release.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              Lukulu combines remote music-production training, a practical student journey and a direct route into the wider Academy, studio and label ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/enquire?category=academy&service=course-advice"
                className="button button-primary"
              >
                Get course advice <ArrowRightIcon aria-hidden="true" />
              </Link>
              <Link to="/student/login" className="button button-quiet">
                Student login <LogInIcon aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accessFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} tone={index === 0 ? 'warm' : index === 3 ? 'raised' : 'default'} className="h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center border border-orange bg-bg text-orange">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-heading text-xs font-semibold tracking-[0.16em] text-text-dim">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-8 font-heading text-3xl font-semibold uppercase leading-none text-[#fffaf2]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-text-muted">{feature.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
