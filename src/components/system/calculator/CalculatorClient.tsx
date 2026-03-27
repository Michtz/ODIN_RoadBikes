'use client';

import dynamic from 'next/dynamic';

const Calculator = dynamic(
  () => import('@/components/system/calculator/Calculator'),
  { ssr: false },
);

const CalculatorClient = () => <Calculator />;

export default CalculatorClient;