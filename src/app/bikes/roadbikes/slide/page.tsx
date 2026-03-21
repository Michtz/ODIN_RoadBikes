import { Metadata } from 'next';
import ProductContainer from '@/components/containers/ProductContainer';

export const metadata: Metadata = {
  title: 'Rennrad - Slide',
  description: 'Das Slide ist ein Allrounder mit einem Preis ab 2950 Franken.',
};

export default function SlidePage() {
  return <ProductContainer view={'slide'} />;
}
