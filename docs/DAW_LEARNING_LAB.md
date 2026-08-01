# DAW Learning Lab

Lukulu Academy is not building a full DAW replacement. The browser environment teaches one production skill at a time, then hands students to FL Studio, Ableton Live or Logic Pro for professional assignments.

## Assignment modes
1. Interactive browser exercises: drum sequencing, piano roll, arrangement, EQ, compression, routing, gain staging, automation, stereo placement and music-business simulations.
2. Guided real-DAW assignments: download project templates, stems, MIDI, references and instructions; upload MP3/WAV/project ZIP/screenshots/reflection.
3. Audio-analysis assignments: upload tracks for waveform, loudness, peak, duration, silence, frequency visualisation and timestamp tutor comments.

## MVP labs
- Drum Step Sequencer
- Piano Roll and Chord Lab
- Arrangement Timeline
- Mixer and EQ Lab

## Technology boundaries
Web Audio API and Tone.js power browser interaction. WaveSurfer.js supports waveform, regions, timeline, record and spectrogram workflows. AudioWorklet is reserved for custom low-latency processors. OfflineAudioContext is used for browser-side rendering. Heavy FFmpeg/audio analysis must run in a separate worker service, not normal Vercel request functions.

## Grading
Automatic technical score: 30%. Tutor creative score: 50%. Student reflection: 20%. Complete session state is stored as JSON so tutors can reopen exactly what the student created.
