import Link from 'next/link';
export function Nav(){return <header className="shell nav"><Link className="brand" href="/">LUKULU <span>ACADEMY</span></Link><nav className="links"><Link href="/labs">DAW Learning Lab</Link><Link href="/dashboard">Student portal</Link><Link className="button" href="/labs/step-sequencer">Start lab</Link></nav></header>}
