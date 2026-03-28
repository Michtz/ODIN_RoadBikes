import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://odinbikes.ch';
  const lastModified = new Date();

  const models = ['gravity', 'slide'];

  const bikePages = [
    '/bikes/roadbikes',
    ...models.map((model) => `/bikes/roadbikes/${model}`),
  ];

  const staticPages = ['', '/about', '/contact', '/configurator', ...bikePages];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/bikes/') ? 0.8 : 0.5,
  }));
}
