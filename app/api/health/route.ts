import { NextResponse } from 'next/server';
import { integrations } from '@/lib/integrations';
export const dynamic = 'force-dynamic';
export function GET(){ return NextResponse.json({ ok:true, product:'Lukulu DAW Learning Lab', integrations:integrations().map(([name,configured,purpose])=>({name,configured,purpose})) }); }
