import { redirect } from 'next/navigation';

/**
 * Global 404 handler.
 * Automatically redirects any invalid path back to the homepage.
 */

export default function NotFound() {
  redirect('/');
}
