import { Metadata } from 'next';
import CategoriesContainer from '@/components/containers/CategoriesContainer';

export const metadata: Metadata = {
  title: 'Custom Carbon Rennräder Luzern – Gravity & Slide Modelle',
  description:
    'OdinBikes Rennrad-Modelle in Luzern: Gravity (ab CHF 3450, Bergoptimiert) und Slide (ab CHF 3150, Alltagsgeometrie). Beide vollständig individualisierbar – Design, Komponenten, Bikefitting inklusive. Atelier in Horw bei Luzern.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes',
  },
};

export default function RoadPage() {
  return <CategoriesContainer />;
}
