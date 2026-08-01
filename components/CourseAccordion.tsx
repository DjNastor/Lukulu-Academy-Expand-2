'use client';
import { useState } from 'react';
import Link from 'next/link';
const modules=[['Your DAW',['Setup','Browser','Shortcuts']],['Drums',['Kick','Hats','Percussion']],['Mixing',['EQ','Compression','Reverb','Delay','Automation']]];
export function CourseAccordion(){const [open,setOpen]=useState(0);return <div className="accordion">{modules.map(([title,lessons],i)=><section className="card" key={title as string} style={{padding:0,overflow:'hidden'}}><button className="accordion-trigger" onClick={()=>setOpen(open===i?-1:i)}>{open===i?'▼':'▶'} {title as string}</button>{open===i&&<div style={{padding:'0 18px 14px'}}>{(lessons as string[]).map((lesson,idx)=><div className="lesson" key={lesson}><span><b>{lesson}</b><br/><small>{idx===0?'15 min':'10 min'} · Beginner</small></span><Link className="button ghost" href="/learn/eq">▶ Start</Link></div>)}</div>}</section>)}</div>}
