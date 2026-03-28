import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Rennrad Slide',
  description:
    'Das Slide – die Rennmaschine mit alltagsfreundlicher Geometrie. Schnell auf der Strasse, komfortabel auf langen Strecken, individuell konfigurierbar ab CHF 2950.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/slide',
  },
};

export default function SlidePage() {
  return <ProductContainer view={'slide'} />;
}
