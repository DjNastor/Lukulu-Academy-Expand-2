import { ArrowRightIcon, BookOpenIcon, Mic2Icon, RadioIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
const paths = [
  { number: '01', label: 'Learn', note: 'Compare 14 practical courses in FL Studio, Cubase, Reason and music business.', explore: '#courses', action: 'View courses', icon: BookOpenIcon },
  { number: '02', label: 'Create', note: 'Book recording, mixing or mastering, or prepare artwork and content.', explore: '#studio', action: 'View services', icon: Mic2Icon },
  { number: '03', label: 'Release', note: 'Get help with course choice, a project, a release plan or a demo.', explore: '/enquire', action: 'Get help', icon: RadioIcon },
] as const;
export function ServiceGateway(){return <section id="services" className="service-gateway quick-paths section-paper" aria-labelledby="services-heading"><div className="page-shell"><Reveal className="service-gateway__head"><p className="console-label">CHOOSE ONE PATH</p><h2 id="services-heading">What do you want to do?</h2><p>Start with the goal that matters now. You can explore the rest later.</p></Reveal><div className="quick-path-grid">{paths.map((path,index)=>{const Icon=path.icon;const content=<><span className="quick-path__number">{path.number}</span><Icon aria-hidden="true" /><div><h3>{path.label}</h3><p>{path.note}</p></div><strong>{path.action} <ArrowRightIcon aria-hidden="true" /></strong></>;return <Reveal key={path.label} delay={index*0.05}>{path.explore.startsWith('#') ? <a href={path.explore} className="quick-path">{content}</a> : <Link to={path.explore} className="quick-path">{content}</Link>}</Reveal>;})}</div></div></section>;}
