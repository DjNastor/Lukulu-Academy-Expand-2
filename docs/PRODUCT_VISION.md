# Lukulu Academy Product Vision

## Product mission

Build Africa's leading remote electronic music production academy: a premium creative-technology platform where students learn, collaborate, submit work, receive mentorship, graduate with professional portfolios, and may progress into the Lukulu Recordings talent pipeline.

## Positioning

Lukulu Academy should feel closer to MasterClass, Spotify, Apple, Ableton, Notion, and Linear than to a conventional school, university, government portal, or WordPress education theme.

Brand qualities: modern, premium, creative, professional, African, minimal, dark, and music-technology-led.

## Audience

- Beginner and intermediate producers
- Independent artists and electronic musicians
- DJs and bedroom producers
- Music entrepreneurs
- South African and African creators
- International students interested in Afro electronic music

## Core genres

- Afro House
- Afro Tech
- Amapiano
- Electronic music production
- DJ performance

## Academic source of truth

The official curriculum is maintained at:

- https://djnastor.github.io/LAR-curriculumn/

The LMS must integrate and reference this curriculum rather than duplicate it. Curriculum-derived AI answers, lesson mapping, assignments, and progress records should retain traceability to the official source.

## Learning areas

Music production, beatmaking, theory, sound design, mixing, mastering, recording, DJ performance, music business, publishing, copyright, distribution, marketing, artist branding, and AI for producers.

## Experience architecture

### Public navigation

- Home
- Courses
- Community
- Pricing
- About
- Login
- Enrol

Everything else belongs inside the authenticated dashboard.

### Homepage

Keep only:

1. Hero
2. Featured Courses
3. Learning Journey
4. Student Projects
5. Mentors
6. Pricing
7. FAQ
8. Footer

Avoid news, campus content, maps, long histories, long mission statements, and unnecessary paragraphs.

### Student dashboard

Keep only:

- Continue Learning
- My Courses
- Assignments
- Community
- AI Tutor
- Certificates
- Calendar

## UX principles

- One page, one message, one action
- Mobile first
- Simple English
- Large typography and spacing
- Minimal navigation
- Progressive disclosure
- Accordion menus with one module open at a time
- Fast interfaces and low cognitive load
- Reduce wording by approximately 50%

Preferred terms:

- Admissions -> Join
- Academic Programmes -> Courses
- Student Portal -> Dashboard
- Explore Programmes -> View Courses

Every page answers one question:

- Home: Why join?
- Courses: What can I learn?
- Lesson: What do I do now?
- Assignment: What do I submit?
- Dashboard: What's next?

## Visual system

- Background: `#0A0A0A`
- Primary text: `#F5F3EF`
- Accent: `#FF8A65`
- Success: `#46C37B`
- Use orange sparingly
- Headings: League Spartan, Anton, or Bebas Neue
- Body: Inter or Manrope
- Dark, minimal, premium, professional studio photography
- South African electronic music culture and creative technology
- Avoid cartoons, generic classrooms, corporate illustrations, bright palettes, and busy layouts

Course cards show only course name, level, duration, and start.

## DAW Learning Lab

Do not rebuild FL Studio or another full DAW in the browser. Build focused interactive labs that teach one skill at a time:

- Step Sequencer
- Piano Roll
- Arrangement
- Mixer
- EQ Trainer
- Compression Trainer
- Signal Routing
- Automation
- Mastering

Students practise concepts in-browser, then complete real assignments in FL Studio, Ableton, Logic, Studio One, or another supported DAW.

## Assignment workflow

Lesson -> browser practice -> project template -> DAW work -> upload -> timestamped tutor feedback -> revision -> pass.

Tutors must be able to leave feedback at exact audio timestamps and students must be able to jump directly to each timestamp.

## AI tutor

The AI tutor answers concise student questions using the official Lukulu curriculum, including production techniques, assignment instructions, and music-business concepts. Answers must be grounded in curriculum sources rather than improvised as authoritative course policy.

## Community

Discussion, track feedback, weekly challenges, mentorship, networking, sample packs, and student showcases.

## Certificates

Generate verifiable PDF certificates with student, course, date, certificate number, QR code, and public verification.

## Lukulu Recordings pathway

Student -> portfolio -> tutor recommendation -> talent pool -> label review -> possible signing.

## Technical direction

- Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Hook Form, Zod, Lucide
- Backend: Supabase Auth, PostgreSQL, Storage, Realtime, and Row Level Security
- Video: Mux
- Audio: Cloudflare R2
- Payments: Paystack preferred; Peach Payments alternative
- Email: Resend
- Analytics: PostHog
- Monitoring: Sentry
- Hosting: Vercel and GitHub

Integrations should be staged. The current production foundation must remain deployable while backend capabilities are introduced incrementally.

## Definition of success

The product helps students create professional music, complete structured projects, receive meaningful feedback, develop portfolios, build industry understanding, earn verifiable credentials, join a creative community, and access a credible pathway toward Lukulu Recordings.
