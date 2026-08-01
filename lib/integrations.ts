export const integrations = () => [
 ['Web Audio API', true, 'Audio sources, routing, gain, filters, panning and visualisation'],
 ['Tone.js', true, 'Transport, BPM, sequencing, samplers and synths'],
 ['WaveSurfer.js', true, 'Waveforms, regions, spectrograms and timestamp feedback'],
 ['Supabase JSONB', !!process.env.NEXT_PUBLIC_SUPABASE_URL, 'Exercise definitions, session state and grades'],
 ['Cloudflare R2', !!(process.env.R2_ACCOUNT_ID && process.env.R2_BUCKET), 'Rendered submissions, stems and DAW ZIPs'],
 ['Audio worker service', false, 'Heavy FFmpeg/audio analysis outside Vercel request functions']
] as const;
