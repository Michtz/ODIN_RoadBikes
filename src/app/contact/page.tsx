import { Metadata } from 'next';
import ContactContainer from '@/components/containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Kontakt & Beratung – OdinBikes Luzern (Horw) Schweiz',
  description:
    'Kontakt aufnehmen mit OdinBikes Luzern – persönliche Beratung, Bikefitting-Termin oder individuelle Konfiguration. Wir sind in Horw, direkt bei Luzern: Gemeindehausplatz 13, 6048 Horw.',
  alternates: {
    canonical: 'https://odinbikes.ch/contact',
  },
};

export default function ContactPage() {
  return <ContactContainer />;
}
