import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Gravity – Leichtes Custom Carbon Rennrad ab CHF 3,450',
  description:
    'Das OdinBikes Gravity: ultraleichter Toray-Carbon-Rahmen (unter 6 kg möglich), kletteroptimierte Geometrie, individuelles Design. Shimano oder SRAM, handgefertigte Laufradsätze – alles nach Ihren Wünschen. Bikefitting inklusive.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes/gravity',
  },
};

export default function GravityPage() {
  return <ProductContainer view={'gravity'} />;
}
