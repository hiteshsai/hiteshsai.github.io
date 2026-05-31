import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'index.html',
  '404.html',
  'css/style.css',
  'js/main.js',
  'site.webmanifest',
  'sitemap.xml',
  'robots.txt',
  'img/profile.jpg',
  'img/profile.webp',
  'img/og-image.png'
];

const failures = [];

function fail(message) {
  failures.push(message);
}

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), 'utf8');
}

function exists(filePath) {
  return fs.existsSync(path.join(root, filePath));
}

for (const filePath of requiredFiles) {
  if (!exists(filePath)) {
    fail(`Missing required file: ${filePath}`);
  }
}

const index = read('index.html');
const manifest = JSON.parse(read('site.webmanifest'));
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');

if (!index.includes('<main id="main"')) {
  fail('index.html must expose a <main id="main"> landmark.');
}

if (!index.includes('href="#main" class="skip-link"')) {
  fail('Skip link must point to #main.');
}

const h1Count = (index.match(/<h1\b/g) || []).length;
if (h1Count !== 1) {
  fail(`Expected exactly one h1 in index.html, found ${h1Count}.`);
}

if (!index.includes('aria-controls="nav-links"')) {
  fail('Mobile navigation button must reference nav-links via aria-controls.');
}

const targetBlankLinks = index.match(/<a\b[^>]*target="_blank"[^>]*>/g) || [];
for (const link of targetBlankLinks) {
  if (!/rel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/.test(link)) {
    fail(`External target="_blank" link is missing rel="noopener noreferrer": ${link}`);
  }
}

const ids = new Set([...index.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const hashLinks = [...index.matchAll(/href="#([^"]*)"/g)].map((match) => match[1]).filter(Boolean);
for (const hash of hashLinks) {
  if (!ids.has(hash)) {
    fail(`Internal anchor href="#${hash}" has no matching id.`);
  }
}

const localAssetRefs = [...index.matchAll(/(?:href|src)="([^":#?]+)"/g)]
  .map((match) => match[1])
  .filter((assetPath) => !assetPath.startsWith('mailto:') && !assetPath.startsWith('/'));
for (const assetPath of localAssetRefs) {
  if (!exists(assetPath)) {
    fail(`Referenced local asset is missing: ${assetPath}`);
  }
}

for (const icon of manifest.icons || []) {
  const iconPath = icon.src.replace(/^\//, '');
  if (!exists(iconPath)) {
    fail(`Manifest icon is missing: ${icon.src}`);
  }
}

if (!sitemap.includes('<loc>https://hiteshsai.github.io/</loc>')) {
  fail('sitemap.xml must include the canonical homepage URL.');
}

if (!robots.includes('Sitemap: https://hiteshsai.github.io/sitemap.xml')) {
  fail('robots.txt must reference the sitemap.');
}

if (/UA-\d+/i.test(index)) {
  fail('Deprecated Universal Analytics ID found in index.html.');
}

if (failures.length > 0) {
  console.error('Static site validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Static site validation passed.');
