import { Metadata } from 'next';
import ContactContainer from '@/components/containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Kontakt & Beratung – OdinBikes, Horw bei Luzern',
  description:
    'Nehmen Sie Kontakt mit OdinBikes auf – für eine persönliche Beratung zu Ihrem Custom Rennrad, Bikefitting-Termin oder Ihrer individuellen Konfiguration. Gemeindehausplatz 13, 6048 Horw.',
  alternates: {
    canonical: 'https://odinbikes.ch/contact',
  },
};

export default function ContactPage() {
  return <ContactContainer />;
}
