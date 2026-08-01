import type { Metadata } from 'next';import './globals.css';
export const metadata: Metadata = { title:'Lukulu Academy — DAW Learning Lab', description:'Focused browser-based production exercises that prepare students for professional DAW assignments.' };
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
