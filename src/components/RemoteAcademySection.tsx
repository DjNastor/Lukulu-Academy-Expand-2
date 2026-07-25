import {
  ArrowRightIcon,
  BookOpenCheckIcon,
  Disc3Icon,
  LaptopIcon,
  LogInIcon,
  Music2Icon,
  ShieldCheckIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

const learningPath = [
  {
    icon: BookOpenCheckIcon,
    title: 'Learn',
    text: 'Build the foundation with guided, practical lessons.',
  },
  {
    icon: Music2Icon,
    title: 'Create',
    text: 'Turn each milestone into music that sounds like you.',
  },
  {
    icon: Disc3Icon,
    title: 'Release',
    text: 'Understand how finished work moves into the world.',
  },
];

const accessFeatures = [
  {
    icon: LaptopIcon,
    number: '01',
    label: 'Access signal',
    title: 'Remote learning',
    text: 'Join structured lessons from anywhere in South Africa and learn with the software you already use.',
  },
  {
    icon: BookOpenCheckIcon,
    number: '02',
    label: 'Practice signal',
    title: 'Practical curriculum',
    text: 'Move from guided exercises to a complete track, with clear milestones at every level.',
  },
  {
    icon: ShieldCheckIcon,
    number: '03',
    label: 'Support signal',
    title: 'Student access',
    text: 'Use the student portal for account access, membership support and your next learning step.',
  },
  {
    icon: Music2Icon,
    number: '04',
    label: 'Release signal',
    title: 'Release pathway',
    text: 'Learn music business fundamentals and understand how finished work moves toward professional release.',
  },
];

export function RemoteAcademySection() {
  return (
    <section id="online-academy" className="academy-section section-pad" aria-labelledby="online-academy-heading">
      <div className="academy-section__decoration" aria-hidden="true">
        <span className="academy-section__rail" />
        <span className="academy-section__signal-dot" />
      </div>

      <div className="page-shell">
        <div className="academy-section__layout">
          <aside className="academy-section__summary">
            <Reveal>
              <Badge variant="gold" size="md" showDot>
                Remote enrolment open
              </Badge>
              <p className="academy-section__eyebrow">Online Academy / South Africa</p>
              <h2 id="online-academy-heading" className="academy-section__title">
                Learn from anywhere. Build toward release.
              </h2>
              <p className="academy-section__lede">
                Lukulu combines remote music-production training, a practical student journey and a direct route into the wider Academy, studio and label ecosystem.
              </p>
              <div className="academy-section__actions">
                <Link to="/enquire?category=academy&service=course-advice" className="button button-primary">
                  Get course advice <ArrowRightIcon aria-hidden="true" />
                </Link>
                <Link to="/student/login" className="button button-quiet">
                  Student login <LogInIcon aria-hidden="true" />
                </Link>
              </div>
              <div className="academy-section__desk-note">
                <span>01</span>
                <p>
                  <strong>Remote desk / LAR</strong>
                  A clear route from your first lesson to your next finished track.
                </p>
              </div>
            </Reveal>
          </aside>

          <div className="academy-section__content">
            <Reveal delay={0.08}>
              <div className="academy-section__signal-panel">
                <div className="academy-section__panel-head">
                  <span className="console-label">Lukulu Academy &amp; Recordings</span>
                  <span>Signal path / 03</span>
                </div>

                <Card tone="raised" flush className="academy-mark">
                  <figure className="academy-mark__figure">
                    <div className="academy-mark__image-frame">
                      <img
                        src="/lukulu-brand-mark.webp"
                        alt="Lukulu Academy and Recordings brand mark with a microphone, vinyl record and open book around Africa"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption>
                      <span>Academy / Studio / Label</span>
                      <strong>One connected music ecosystem.</strong>
                    </figcaption>
                  </figure>
                </Card>

                <ol className="academy-path" aria-label="Lukulu learning path">
                  {learningPath.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <li key={step.title}>
                        <span className="academy-path__number" aria-hidden="true">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Icon aria-hidden="true" />
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="academy-section__feature-heading">
                <span className="console-label">Your remote learning desk</span>
                <p>Everything is arranged to make the next step visible.</p>
              </div>

              <ol className="academy-features">
                {accessFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const tone = index === 0 ? 'warm' : index === 3 ? 'raised' : 'default';

                  return (
                    <li key={feature.title}>
                      <Card tone={tone} className="academy-feature-card h-full">
                        <div className="academy-feature-card__top">
                          <span className="academy-feature-card__icon">
                            <Icon aria-hidden="true" />
                          </span>
                          <span className="academy-feature-card__number" aria-hidden="true">
                            {feature.number}
                          </span>
                        </div>
                        <p className="academy-feature-card__label">{feature.label}</p>
                        <h3>{feature.title}</h3>
                        <p className="academy-feature-card__copy">{feature.text}</p>
                      </Card>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
