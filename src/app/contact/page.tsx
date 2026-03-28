import { Metadata } from 'next';
import ContactContainer from '@/components/containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie OdinBikes in Horw bei Luzern – für Fragen zu Custom Rennrädern, Bikefitting oder Ihrer individuellen Konfiguration.',
  alternates: {
    canonical: 'https://odinbikes.ch/contact',
  },
};

export default function ContactPage() {
  return <ContactContainer />;
}
