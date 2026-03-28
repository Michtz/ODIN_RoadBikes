import { Metadata } from 'next';
import CategoriesContainer from '@/components/containers/CategoriesContainer';

export const metadata: Metadata = {
  title: 'Individuelle Rennräder',
  description:
    'Unsere Custom Rennräder – Gravity & Slide – individuell konfigurierbar in Ihren Wunschfarben, mit Ihren Komponenten, perfekt auf Ihren Körperbau abgestimmt.',
  alternates: {
    canonical: 'https://odinbikes.ch/bikes/roadbikes',
  },
};

export default function RoadPage() {
  return <CategoriesContainer />;
}
