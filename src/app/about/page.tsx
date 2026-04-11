import { Metadata } from 'next';
import AboutUsContainer from '@/components/containers/AboutUsContainer';

export const metadata: Metadata = {
  title: 'Über OdinBikes – Custom Rennräder aus Horw, Luzern',
  description:
    'OdinBikes by BIKESCHMIEDE GmbH – entstanden aus der Leidenschaft für individuelle Rennräder zu fairen Preisen. Unser Team in Horw begleitet Sie von der Konfiguration über den Rahmenaufbau bis zum professionellen Bikefitting.',
  alternates: {
    canonical: 'https://odinbikes.ch/about',
  },
};

export default function AboutUsPage() {
  return <AboutUsContainer />;
}
