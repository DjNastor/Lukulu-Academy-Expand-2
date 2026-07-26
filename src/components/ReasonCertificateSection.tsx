import { ArrowRightIcon, AwardIcon, BookOpenCheckIcon, CheckCircle2Icon, Clock3Icon, HeadphonesIcon, LaptopIcon, Music2Icon, RadioIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

const phases = [
  ['01','Weeks 1–3','Build the basics','Learn Reason, build drum grooves and write chords, basslines and melodies.'],
  ['02','Weeks 4–6','Produce the track','Create sounds, work with samples and turn your best loop into a full song.'],
  ['03','Weeks 7–9','Record and mix','Record clean audio, balance the mix and use busses, effects and sidechain tools.'],
  ['04','Weeks 10–12','Finish and release','Build signature effects, master the track and prepare a complete release package.'],
] as const;
const weeks = [
  ['Week 1','Reason 14 setup','Set up audio, learn the Rack and Sequencer, and build a clean project template.'],
  ['Week 2','Drums and groove','Program Afro House, Amapiano, Hip-Hop and Pop drum patterns with swing and variation.'],
  ['Week 3','Music theory made simple','Use scales, chords, basslines and short melodies to create a 45–60 second sketch.'],
  ['Week 4','Sound design','Build your own bass, pad, pluck and lead sounds with Reason instruments.'],
  ['Week 5','Sampling','Record, chop and reshape audio while learning how to use samples legally.'],
  ['Week 6','Song arrangement','Turn a loop into a full 2½–4 minute track with sections, movement and automation.'],
  ['Week 7','Recording audio and vocals','Record several takes, choose the best parts and make clean edits.'],
  ['Week 8','Mixing basics','Set levels, pan sounds, use EQ and compression, and add space with reverb and delay.'],
  ['Week 9','Advanced mixing','Use group busses, parallel processing, sidechain control and mix checks.'],
  ['Week 10','Creative effects','Create transition, vocal and rhythm effects that give the track its own identity.'],
  ['Week 11','Mastering','Prepare a clear final master, check levels and export the right audio formats.'],
  ['Week 12','Release package','Finish the master, stems, credits, artwork plan and four-week release plan.'],
] as const;
const outputs = ['One original 2½–4 minute track','An organised Reason 14 project','A final mix and stereo master','An instrumental or performance version','Stems, credits and metadata','Artwork notes and a release plan'] as const;
const marks = [['Weekly practice','10%'],['Production sketch','10%'],['Rough arrangement','15%'],['Recording task','10%'],['Mix revision','15%'],['Final mix and master','20%'],['Release package','20%']] as const;
const enquiry = '/enquire?category=academy&service=remote-course&course=12-Week%20Reason%2014%20Music%20Production%20Certificate';

export function ReasonCertificateSection() {
 return <section id="reason-certificate" className="certificate-section signal-section section-pad section-paper" aria-labelledby="reason-certificate-heading"><div className="page-shell">
  <SectionIntro headingId="reason-certificate-heading" number="03" eyebrow="Flagship remote programme" title="Create, mix and release in Reason 14" description="A practical 12-week course for new and developing producers. Make one complete track from idea to release." />
  <Reveal className="certificate-hero"><div className="certificate-hero__copy">
   <span className="certificate-badge"><AwardIcon aria-hidden="true" /> Lukulu certificate of completion</span><h3>Learn by making one real song</h3><p>Each week adds one new skill to the same song. You plan, produce, record, mix, master and prepare it for release.</p>
   <ul><li><Clock3Icon/><span><strong>12 weeks</strong>7–9 hours each week</span></li><li><RadioIcon/><span><strong>Remote learning</strong>Short videos and one live workshop each week</span></li><li><UsersIcon/><span><strong>Real feedback</strong>Peer review and instructor comments</span></li><li><LaptopIcon/><span><strong>Beginner friendly</strong>No formal music theory is required</span></li></ul>
   <div className="certificate-hero__actions"><Link className="button button-primary" to={enquiry}>Ask about the next intake <ArrowRightIcon/></Link><Link className="button button-quiet" to="/student/demo">Preview the student portal <BookOpenCheckIcon/></Link></div><p className="certificate-price-note">Price and live-session dates are confirmed during enrolment.</p>
  </div><div className="certificate-hero__signal"><Music2Icon/><p className="console-label">YOUR FINAL RESULT</p><strong>One finished track</strong><span>Plus the project files and documents needed to present and release your work.</span></div></Reveal>
  <div className="certificate-phases">{phases.map((x,i)=><Reveal key={x[0]} delay={i*.05}><article><span>{x[0]}</span><small>{x[1]}</small><h3>{x[2]}</h3><p>{x[3]}</p></article></Reveal>)}</div>
  <div className="certificate-outline"><div className="certificate-outline__head"><div><p className="console-label">FULL COURSE OUTLINE</p><h3>Weekly lessons</h3></div><p>Open a week to read the short lesson summary.</p></div><div className="certificate-weeks">{weeks.map((x,i)=><details key={x[0]} open={i===0}><summary><span>{x[0]}</span><strong>{x[1]}</strong><span aria-hidden="true">+</span></summary><p>{x[2]}</p></details>)}</div></div>
  <div className="certificate-results"><section><p className="console-label">WHAT YOU MAKE</p><h3>What you leave with</h3><ul>{outputs.map(x=><li key={x}><CheckCircle2Icon/> {x}</li>)}</ul></section><section><p className="console-label">HOW YOU ARE MARKED</p><h3>How you are marked</h3><dl>{marks.map(x=><div key={x[0]}><dt>{x[0]}</dt><dd>{x[1]}</dd></div>)}</dl><p>To complete the course, submit every major project, finish at least 80% of the learning activities and earn at least 50% overall.</p></section></div>
  <div className="certificate-footer"><HeadphonesIcon/><div><strong>Built for remote students</strong><p>Lessons use Reason’s built-in tools. Videos are short, workshops are recorded and tasks work well with headphones.</p></div><Link to={enquiry}>Enquire now <ArrowRightIcon/></Link></div>
 </div></section>;
}
