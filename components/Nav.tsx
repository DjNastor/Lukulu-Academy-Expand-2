import Link from 'next/link';
export function Nav(){return <header className="shell nav"><Link className="brand" href="/">LUKULU <span>ACADEMY</span></Link><nav className="links"><Link href="/courses">Courses</Link><Link href="/labs">Learn</Link><Link href="/dashboard">Login</Link><Link className="button" href="/courses">Start Learning</Link></nav></header>}
