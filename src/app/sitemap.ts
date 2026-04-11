import { MetadataRoute } from 'next';

type PageEntry = {
  path: string;
  lastModified: Date;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://odinbikes.ch';
  const now = new Date();

  const pages: PageEntry[] = [
    {
      path: '',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      path: '/bikes/roadbikes',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/bikes/roadbikes/gravity',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/bikes/roadbikes/slide',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      path: '/configurator',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      path: '/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      path: '/about',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
