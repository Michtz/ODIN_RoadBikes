import { Metadata } from 'next';
import AboutUsContainer from '@/components/containers/AboutUsContainer';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über OdinBikes - Ihre Experten für individuelle Rennräder und Gravelbikes.',
};

export default function AboutUsPage() {
  return <AboutUsContainer />;
}
