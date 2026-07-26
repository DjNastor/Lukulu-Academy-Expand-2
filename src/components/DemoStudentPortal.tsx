import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
  CircleDollarSignIcon,
  DownloadIcon,
  EyeIcon,
  FileMusicIcon,
  GraduationCapIcon,
  LockKeyholeIcon,
  PlayCircleIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const demoCourses = [
  {
    code: 'RC-01',
    title: 'FL Studio Foundations',
    progress: 72,
    next: 'Arrangement and transitions',
    completed: '9 of 12 lessons',
  },
  {
    code: 'RC-02',
    title: 'Beat Production Lab',
    progress: 38,
    next: 'Advanced drum programming',
    completed: '5 of 14 lessons',
  },
  {
    code: 'RC-05',
    title: 'Music Business & Release Plan',
    progress: 15,
    next: 'Copyright, splits and ownership',
    completed: '2 of 10 lessons',
  },
] as const;

const demoResources = [
  { name: 'FL Studio project template', type: 'Project file', icon: FileMusicIcon },
  { name: 'Arrangement checklist', type: 'PDF guide', icon: BookOpenIcon },
  { name: 'Release-plan workbook', type: 'Workbook', icon: DownloadIcon },
] as const;

export function DemoStudentPortal() {
  return (
    <div className="demo-portal" aria-label="Read-only student portal demonstration">
      <div className="demo-banner" role="status">
        <EyeIcon aria-hidden="true" />
        <div>
          <strong>Demo preview</strong>
          <span>Sample data only. Progress, downloads and billing actions are read-only.</span>
        </div>
        <Link to="/student/login">Exit demo</Link>
      </div>

      <div className="student-console demo-student-console">
        <aside className="student-account">
          <div className="student-account__avatar"><GraduationCapIcon aria-hidden="true" /></div>
          <p className="console-label">DEMO STUDENT</p>
          <h2>Thando M.</h2>
          <span><CheckCircle2Icon aria-hidden="true" /> Pro membership preview</span>
          <p className="demo-account-note">This profile is fictional and is not connected to Supabase or payment records.</p>
          <Link to="/enquire?category=academy&service=course-advice">Ready to learn? Enquire now <ArrowRightIcon aria-hidden="true" /></Link>
        </aside>

        <div className="demo-portal__main">
          <section className="demo-summary" aria-label="Demo student summary">
            <article><BookOpenIcon aria-hidden="true" /><span><strong>3</strong> active courses</span></article>
            <article><PlayCircleIcon aria-hidden="true" /><span><strong>16</strong> lessons completed</span></article>
            <article><CircleDollarSignIcon aria-hidden="true" /><span><strong>Pro</strong> sample plan</span></article>
          </section>

          <section className="demo-panel" aria-labelledby="demo-courses-heading">
            <div className="demo-panel__head">
              <div><p className="console-label">MY LEARNING</p><h2 id="demo-courses-heading">Course progress</h2></div>
              <Link to="/#remote-courses">Browse all courses <ArrowRightIcon aria-hidden="true" /></Link>
            </div>
            <div className="demo-course-list">
              {demoCourses.map((course) => (
                <article key={course.code}>
                  <div className="demo-course-list__meta"><span>{course.code}</span><span>{course.completed}</span></div>
                  <h3>{course.title}</h3>
                  <div className="demo-progress" aria-label={`${course.progress}% complete`}><span style={{ width: `${course.progress}%` }} /></div>
                  <p>{course.progress}% complete</p>
                  <div className="demo-course-list__next"><span>Next lesson</span><strong>{course.next}</strong></div>
                  <button type="button" className="button button-quiet" disabled title="Lesson playback is disabled in demo mode"><PlayCircleIcon aria-hidden="true" /> Preview lesson</button>
                </article>
              ))}
            </div>
          </section>

          <div className="demo-portal__lower">
            <section className="demo-panel" aria-labelledby="demo-resources-heading">
              <div className="demo-panel__head"><div><p className="console-label">RESOURCE DESK</p><h2 id="demo-resources-heading">Downloads</h2></div></div>
              <ul className="demo-resource-list">
                {demoResources.map(({ name, type, icon: Icon }) => (
                  <li key={name}><Icon aria-hidden="true" /><span><strong>{name}</strong><small>{type}</small></span><button type="button" disabled title="Downloads are disabled in demo mode"><LockKeyholeIcon aria-hidden="true" /><span className="sr-only">Demo download locked</span></button></li>
                ))}
              </ul>
            </section>

            <section className="demo-panel demo-billing" aria-labelledby="demo-billing-heading">
              <div className="demo-panel__head"><div><p className="console-label">BILLING PREVIEW</p><h2 id="demo-billing-heading">Membership</h2></div></div>
              <strong>Pro plan</strong><p>R349 / month</p>
              <ul><li><CheckCircle2Icon aria-hidden="true" /> All course levels</li><li><CheckCircle2Icon aria-hidden="true" /> Live classes</li><li><CheckCircle2Icon aria-hidden="true" /> Music feedback</li></ul>
              <button type="button" className="button button-primary button-full" disabled><LockKeyholeIcon aria-hidden="true" /> Billing disabled in demo</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
