import { Metadata } from 'next';
import ImpressumContainer from '@/components/containers/impressumContainer/ImpressumContainer';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: 'noindex, nofollow',
};

export default function LegalPage() {
  return <ImpressumContainer />;
}
