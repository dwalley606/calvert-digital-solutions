import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/custom-websites',
    '/services/cms-websites',
    '/services/monthly-retainer',
  ].map((path) => ({ url: `${SITE_URL}${path}` }));
}
