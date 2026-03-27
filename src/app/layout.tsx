import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { ClientProviders } from '@/providers/ClientProviders';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Syncopate, Montserrat } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/system/ServiceWorkerRegistration';

import 'material-icons/iconfont/material-icons.css';
import 'material-icons/iconfont/outlined.css';
import './globals.scss';
import './_variables.scss';

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | OdinBikes',
    default: 'OdinBikes.ch | Individuelle Custom Rennräder & Gravelbikes',
  },
  description:
    'Entdecke die Welt von OdinBikes. Custom High-Performance Rennräder und Gravelbikes, individuell konfigurierbar für dein perfektes Fahrerlebnis.',
  keywords: [
    'Rennrad',
    'Gravelbike',
    'Fahrrad Konfigurator',
    'OdinBikes',
    'Custom Bikes',
  ],
  authors: [{ name: 'OdinBikes' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://odinbikes.ch',
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://odinbikes.ch',
    siteName: 'OdinBikes',
    title: 'OdinBikes.ch | High-End Rennräder & Gravelbikes',
    description:
      'High-Performance Rennräder und Gravelbikes, individuell konfigurierbar.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="de" className={` ${syncopate.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body>
        <ServiceWorkerRegistration />
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
