# Lukulu Academy LMS architecture

The LMS includes a DAW Learning Lab, not a complete DAW. Browser simulations teach isolated concepts safely and consistently; serious assignments remain inside FL Studio, Ableton Live or Logic Pro.

The platform uses Next.js on Vercel, Supabase JSONB for exercise definitions/state, Cloudflare R2 for rendered submissions and project ZIPs, Tone.js/Web Audio for browser labs, WaveSurfer.js for waveforms and timestamp feedback, and a separate worker service for large-file audio analysis.
