import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Slide – Carbon Rennrad Luzern ab CHF 3150',
  description:
    'Das OdinBikes Slide – Carbon Rennrad mit alltagsfreundlicher Geometrie, erhältlich bei OdinBikes in Luzern (Horw). Schnell auf der Strasse, komfortabel auf langen Strecken. Freie Komponentenwahl, Bikefitting inklusive.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/slide',
  },
};

export default function SlidePage() {
  return <ProductContainer view={'slide'} />;
}
