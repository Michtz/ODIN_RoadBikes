import { Metadata } from 'next';
import CategoriesContainer from '@/components/containers/CategoriesContainer';

export const metadata: Metadata = {
  title: 'Individuelle - Rennräder',
  description:
    'Unsere High-End Rennräder für maximale Performance auf der Strasse.',
};

export default function RoadPage() {
  return <CategoriesContainer />;
}
