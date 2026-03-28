import { Metadata } from 'next';
import AboutUsContainer from '@/components/containers/AboutUsContainer';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'OdinBikes wurde in Horw bei Luzern gegründet – aus dem Wunsch heraus, individuelle Rennräder zu fairen Preisen anzubieten. Ihr Design, Ihre Komponenten, perfekt auf Ihren Körper zugeschnitten.',
  alternates: {
    canonical: 'https://odinbikes.ch/about',
  },
};

export default function AboutUsPage() {
  return <AboutUsContainer />;
}
