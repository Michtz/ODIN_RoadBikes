import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Gravity – Custom Carbon Rennrad Luzern ab CHF 3450',
  description:
    'Das OdinBikes Gravity – ultraleichter Toray-Carbon-Rahmen (unter 6 kg möglich), kletteroptimierte Geometrie. Erhältlich bei OdinBikes in Luzern (Horw). Shimano oder SRAM, handgefertigte Laufradsätze, Bikefitting inklusive.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/gravity',
  },
};

export default function GravityPage() {
  return <ProductContainer view={'gravity'} />;
}
