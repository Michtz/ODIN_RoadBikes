import { Metadata } from 'next';
import LegalContainer from '@/components/containers/legalContainer/LegalContainer';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: 'noindex, nofollow',
};

export default function LegalPage() {
  return <LegalContainer />;
}
