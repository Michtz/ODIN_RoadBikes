import { Metadata } from 'next';
import AboutUsContainer from '@/components/containers/AboutUsContainer';

export const metadata: Metadata = {
  title: 'Über OdinBikes – Custom Rennräder in Luzern (Horw)',
  description:
    'OdinBikes by BIKESCHMIEDE GmbH – Ihr Spezialist für individuelle Custom Rennräder in Luzern. Unser Atelier in Horw bei Luzern begleitet Sie von der Konfiguration über den Rahmenaufbau bis zum professionellen Bikefitting.',
  alternates: {
    canonical: 'https://odinbikes.ch/about',
  },
};

export default function AboutUsPage() {
  return <AboutUsContainer />;
}
