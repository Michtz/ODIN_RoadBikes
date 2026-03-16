import { Metadata } from 'next';
import ContactContainer from '@/components/containers/ContactContainer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'OdinBikes Kontakt - Individuelle Rennräder aus der Schweiz.',
};

export default function ContactPage() {
  return <ContactContainer />;
}
