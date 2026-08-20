import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

// Required by `output: 'export'` — the sitemap is a build-time static file.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/work/`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
