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
const source = readFileSync('src/components/CoursesSection.tsx', 'utf8');
const courseCodes = source.match(/code: '[A-Z0-9-]+'/g) ?? [];
if (courseCodes.length !== 14) throw new Error(`Expected 14 course programmes, found ${courseCodes.length}`);
for (const code of ['FL-01', 'CB-01', 'R14-CERT', 'MB-04']) {
  if (!source.includes(`code: '${code}'`)) throw new Error(`Course library is missing ${code}`);
}
console.log('Foundation and course-library smoke checks passed.');
