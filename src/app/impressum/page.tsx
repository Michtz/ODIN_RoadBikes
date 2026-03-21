import { Metadata } from 'next';
import ImpressumContainer from '@/components/containers/impressumContainer/ImpressumContainer';

export const metadata: Metadata = {
  title: 'Impressum - Odin',
  description:
    'OdinBikes - Individuelle Rennräder und Gravelbikes aus der Schweiz.',
};

export default function LegalPage() {
  return <ImpressumContainer />;
}
