import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpRightIcon, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router';

const track = [
  { marker: '01', title: 'Learn', detail: 'Build production and music-business skills.' },
  { marker: '02', title: 'Create', detail: 'Develop a finished track through practical projects.' },
  { marker: '03', title: 'Release', detail: 'Prepare your work for a real audience.' },
];

export function HeroSection() {
  return (
    <section id="home" className="hero signal-section" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true"><span className="hero-disc hero-disc--one" /></div>
      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="signal-label hero-signal">
            <span>LAR</span><span>Music education · South Africa</span>
          </div>
          <h1 id="hero-title">
            <span>Make the music.</span>
            <span className="hero-title-accent">Know the business.</span>
            <span>Release your work.</span>
          </h1>
          <p className="hero-lede">
            Practical music-production education, creative services and release support—built to move your ideas from the first session to a finished record.
          </p>
          <div className="hero-actions">
            <a href="#remote-courses" className="button button-primary">Explore courses <ArrowDownIcon aria-hidden="true" /></a>
            <Link to="/enquire" className="button button-quiet">Plan your next step <ArrowUpRightIcon aria-hidden="true" /></Link>
          </div>
          <p className="hero-note"><HeadphonesIcon aria-hidden="true" /> Remote learning available across South Africa</p>
        </motion.div>

        <motion.aside
          className="release-track"
          aria-label="The Lukulu learning path"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="release-track__head"><span className="console-label">YOUR RELEASE PATH</span><span>03 stages</span></div>
          <ol>
            {track.map((item) => (
              <li key={item.marker}><span>{item.marker}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div><i aria-hidden="true" /></li>
            ))}
          </ol>
          <div className="release-track__foot"><span>IDEA</span><i aria-hidden="true" /><span>MASTER</span></div>
        </motion.aside>
      </div>
    </section>
  );
}
