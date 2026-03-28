import { Metadata } from 'next';
import HomeContainer from '@/components/containers/HomeContainer';

export const metadata: Metadata = {
  title: 'Custom Carbon Rennräder aus der Schweiz',
  description:
    'Custom Carbon Rennräder zu fairen Preisen – Ihr Design, Ihre Komponenten, auf Ihren Körperbau zugeschnitten. Unbegrenzte Möglichkeiten für beste Ergonomie, Aerodynamik und maximalen Fahrspass.',
};

export default function Home() {
  return <HomeContainer />;
}
