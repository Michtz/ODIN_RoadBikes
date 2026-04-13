import { Metadata } from 'next';
import HomeContainer from '@/components/containers/HomeContainer';

export const metadata: Metadata = {
  title: 'Custom Carbon Rennräder – Luzern Schweiz',
  description:
    'Custom Carbon Rennräder in Luzern zu fairen Preisen – Ihr Design, Ihre Komponenten, auf Ihren Körperbau zugeschnitten. Unbegrenzte Möglichkeiten für beste Ergonomie, Aerodynamik und maximalen Fahrspass. Atelier in Horw bei Luzern.',
};

export default function Home() {
  return <HomeContainer />;
}
