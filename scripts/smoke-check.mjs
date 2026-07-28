import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = ['dist/index.html', 'dist/robots.txt', 'dist/sitemap.xml'];
for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Missing build artifact: ${file}`);
}
const html = readFileSync('dist/index.html', 'utf8');
const requiredHtml = [
  'https://lar-main-self.vercel.app/',
  'application/ld+json',
  'twitter:card',
  'og:site_name',
  'max-image-preview:large',
];
for (const text of requiredHtml) {
  if (!html.includes(text)) throw new Error(`Missing metadata in built HTML: ${text}`);
}
const robots = readFileSync('dist/robots.txt', 'utf8');
if (!robots.includes('Disallow: /student/') || !robots.includes('sitemap.xml')) {
  throw new Error('robots.txt is missing private-route or sitemap rules');
}
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
for (const path of ['/', '/news', '/enquire']) {
  if (!sitemap.includes(`https://lar-main-self.vercel.app${path}`)) throw new Error(`Sitemap is missing ${path}`);
}
const homeSource = readFileSync('src/pages/HomePage.tsx', 'utf8');
for (const removed of ['<StudioBooking />', '<BeatStore />', '<DesignServices />']) {
  if (homeSource.includes(removed)) throw new Error(`Homepage still contains long service section: ${removed}`);
}
const gatewaySource = readFileSync('src/components/ServiceGateway.tsx', 'utf8');
if (!gatewaySource.includes("category=studio&service=recording")) throw new Error('Create path must route to studio enquiry');

for (const removed of ['<AboutSection />', '<RemoteAcademySection />', '<BenefitsSection />', '<StudentPipeline />']) {
  if (homeSource.includes(removed)) throw new Error(`Homepage still contains repetitive section: ${removed}`);
}
if (!homeSource.includes('<ServiceGateway />') || homeSource.indexOf('<ServiceGateway />') > homeSource.indexOf('<CoursesSection />')) throw new Error('Simple three-path gateway must appear before courses');
const source = readFileSync('src/components/CoursesSection.tsx', 'utf8');
const courseCodes = source.match(/code: '[A-Z0-9-]+'/g) ?? [];
if (courseCodes.length !== 14) throw new Error(`Expected 14 course programmes, found ${courseCodes.length}`);
for (const code of ['FL-01', 'CB-01', 'R14-CERT', 'MB-04']) {
  if (!source.includes(`code: '${code}'`)) throw new Error(`Course library is missing ${code}`);
}
console.log('Foundation and course-library smoke checks passed.');

const assistantSource = readFileSync('api/academy-assistant.ts', 'utf8');
if (!assistantSource.includes('rateLimit(request, 20)') || !assistantSource.includes('rejectRateLimited')) {
  throw new Error('Academy assistant is missing request rate limiting');
}
const enquirySource = readFileSync('api/enquiries.ts', 'utf8');
if (!enquirySource.includes('rateLimit(request, 10)')) throw new Error('Enquiries are missing request rate limiting');
const webhookSource = readFileSync('api/stripe-webhook.ts', 'utf8');
for (const required of ['constructEvent(rawBody, signature, webhookSecret)', 'MAX_WEBHOOK_BYTES', 'stripe_events']) {
  if (!webhookSource.includes(required)) throw new Error(`Webhook hardening missing: ${required}`);
}
const migration = readFileSync('supabase/migrations/20260728030000_lar_operational_hardening.sql', 'utf8');
for (const required of ['enquiries_created_status_idx', 'stripe_events_status_created_idx', 'orders_payment_intent_idx']) {
  if (!migration.includes(required)) throw new Error(`Operational migration missing: ${required}`);
}
console.log('API hardening smoke checks passed.');
