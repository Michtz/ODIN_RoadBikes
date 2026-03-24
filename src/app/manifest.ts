import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OdinBikes.ch | Individuelle Custom Rennräder & Gravelbikes',
    short_name: 'OdinBikes',
    description:
      'Entdecke die Welt von OdinBikes. Custom High-Performance Rennräder und Gravelbikes, individuell konfigurierbar für dein perfektes Fahrerlebnis.',
    start_url: '/',
    id: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon2',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
