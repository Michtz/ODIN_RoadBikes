import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Rennrad - Gravity',
  description: 'Das Wort „Gravity“ sagt es schon: Schwerkraft!',
};

export default function GravityPage() {
  return <ProductContainer view={'gravity'} />;
}
