import { Metadata } from 'next';
import ContactContainer from '@/components/containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Kontakt - ODIN Roadbikes',
  description: 'OdinBikes Kontakt - Individuelle Rennräder aus der Schweiz.',
};

export default function ContactPage() {
  return <ContactContainer />;
}
