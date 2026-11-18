import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projectsData } from '../src/data/portfolioData.js';
import { careersData } from '../src/data/careersData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://neorizsolutions.com';

const staticRoutes = [
  '/',
  '/about',
  '/process',
  '/work',
  '/careers',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
  '/cookie-policy'
];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>\n`;
    xml += `    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add dynamic canonical project routes (6 verified projects)
  projectsData.forEach((project) => {
    if (project.slug) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/project/${project.slug}</loc>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }
  });

  // Add dynamic careers routes
  careersData.forEach((job) => {
    if (job.slug) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/careers/${job.slug}</loc>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }
  });

  xml += `</urlset>`;
  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /404

Sitemap: https://neorizsolutions.com/sitemap.xml
`;
}

const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap());
console.log('Generated sitemap.xml');

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobotsTxt());
console.log('Generated robots.txt');
