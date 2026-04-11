import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Slide – Carbon Rennrad mit Alltagsgeometrie ab CHF 3150',
  description:
    'Das OdinBike Slide: Carbon Rennrad mit alltagsfreundlicher Geometrie – schnell auf der Strasse, komfortabel auf langen Strecken. Individuelles Design, freie Komponentenwahl, professionelles Bikefitting inklusive.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/slide',
  },
};

export default function SlidePage() {
  return <ProductContainer view={'slide'} />;
}
