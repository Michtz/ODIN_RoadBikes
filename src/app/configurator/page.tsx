import { Metadata } from 'next';
import HomeContainer from '@/components/containers/HomeContainer';

export const metadata: Metadata = {
  title: 'Rennrad Konfigurator – Dein OdinBike individuell gestalten',
  description:
    'Konfiguriere dein Custom Carbon Rennrad online: Rahmen, Farbe, Schaltgruppe (Shimano/SRAM), Laufräder und Komponenten nach Wahl. Gravity ab CHF 3,450, Slide ab CHF 3,450 – inkl. Bikefitting.',
  alternates: {
    canonical: 'https://odinbikes.ch/configurator',
  },
};

export default function ConfiguratorPage() {
  return <HomeContainer />;
  // return <ConfiguratorContainer />;
}
