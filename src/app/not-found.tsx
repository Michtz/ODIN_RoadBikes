'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Global 404 handler.
 * Automatically redirects any invalid path back to the homepage.
 * Using client-side redirect to avoid Next.js 15 performance measure 'NotFound' error.
 */
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }} />
  );
}
