import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Rennrad Gravity',
  description:
    'Das Gravity – das echte Bergziegen-Modell. Leichter Rahmen in Ihren Wunschfarben, steifer Tretlagerbereich und kletterfreundliche Geometrie, um die Berge zu bezwingen.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/gravity',
  },
};

export default function GravityPage() {
  return <ProductContainer view={'gravity'} />;
}
