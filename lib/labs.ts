import { z } from 'zod';
export const exerciseDefinitionSchema = z.object({
  id: z.string(), title: z.string(), type: z.enum(['step-sequencer','piano-roll','arrangement','mixer-eq','compression','signal-flow','automation','comparison','mastering-export']),
  instructions: z.string(), assets: z.array(z.object({ name:z.string(), storageKey:z.string() })).default([]), initialState: z.record(z.string(), z.unknown()),
  rules: z.array(z.object({ field:z.string(), operator:z.enum(['equals','between','greaterThanOrEqual','lessThanOrEqual','includes','exists']), value:z.unknown() })),
  submissionRequirements: z.object({ renderedAudio:z.boolean(), writtenReflection:z.boolean(), minimumWords:z.number() })
});
export type ExerciseDefinition = z.infer<typeof exerciseDefinitionSchema>;
export const mvpLabs = [
  { slug:'step-sequencer', title:'Drum Step Sequencer', mode:'Interactive browser exercise', goal:'Program Afro House/Amapiano drums using a 16-step grid, velocity, swing, BPM and playback review.', checks:['BPM range','required sounds','pattern length','velocity variation','playback reviewed'] },
  { slug:'piano-roll', title:'Piano Roll and Chord Lab', mode:'Interactive browser exercise', goal:'Draw notes, build chords, follow scale tones and submit structured MIDI JSON.', checks:['scale fit','chord tones','note duration','velocity humanisation','quantisation'] },
  { slug:'arrangement', title:'Arrangement Timeline', mode:'Interactive browser exercise', goal:'Drag prepared clips into intro, build, drop, breakdown and outro sections.', checks:['clip positions','section lengths','energy changes','DJ-friendly intro/outro'] },
  { slug:'mixer-eq', title:'Mixer and EQ Lab', mode:'Interactive browser exercise', goal:'Balance stems, avoid clipping, pan intentionally and identify EQ frequency ranges.', checks:['master peak','channel usage','gain staging','accepted EQ ranges','written decision'] }
] as const;
export const sampleExercise: ExerciseDefinition = { id:'step-sequencer-afro-001', title:'Create a Four-Bar Afro House Rhythm', type:'step-sequencer', instructions:'Create a four-bar Afro House rhythm at 122 BPM. Place the kick correctly, add syncopated percussion and use velocity changes on the hats.', assets:[{name:'starter-kit.json',storageKey:'labs/step-sequencer-afro-001/starter-kit.json'}], initialState:{bpm:122,patternLength:16,swing:0.08,rows:['kick','clap','closedHat','openHat','percussion'],steps:{}}, rules:[{field:'bpm',operator:'between',value:[120,124]},{field:'usedSounds',operator:'greaterThanOrEqual',value:4},{field:'velocityVariation',operator:'exists',value:true},{field:'playbackCount',operator:'greaterThanOrEqual',value:1}], submissionRequirements:{renderedAudio:true,writtenReflection:true,minimumWords:80} };
export const gradingModel = [{label:'Automatic technical score',weight:30},{label:'Tutor creative score',weight:50},{label:'Student reflection',weight:20}] as const;
