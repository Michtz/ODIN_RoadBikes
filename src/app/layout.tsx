import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { ClientProviders } from '@/providers/ClientProviders';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Syncopate, Montserrat, Bungee } from 'next/font/google';
import ServiceWorkerRegistration from '@/components/system/ServiceWorkerRegistration';

import 'material-icons/iconfont/material-icons.css';
import 'material-icons/iconfont/outlined.css';
import './globals.scss';
import './_variables.scss';
import Script from 'next/script';

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate',
  display: 'swap',
});
const bungee = Bungee({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bungee',
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
    'OdinBikes aus Horw bei Luzern – Custom Carbon Rennräder zu fairen Preisen. Ihr Design, Ihre Komponenten, auf Ihren Körperbau zugeschnitten. Gravity & Slide Modelle individuell konfigurierbar.',
  keywords: [
    'Rennrad',
    'Gravelbike',
    'Fahrrad Konfigurator',
    'OdinBikes',
    'Custom Bikes',
    'Carbon Rennrad',
    'Rennrad Schweiz',
    'Custom Rennrad',
    'Rennrad Luzern',
    'Bikefitting',
    'handgefertigte Laufradsätze',
    'Rennrad konfigurieren',
    'Gravity Rennrad',
    'Slide Rennrad',
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
    title: 'OdinBikes.ch | Custom Carbon Rennräder aus der Schweiz',
    description:
      'Custom Carbon Rennräder aus Horw bei Luzern. Ihr Design, Ihre Komponenten, auf Ihren Körper zugeschnitten – zu einem fairen Preis.',
    images: [
      {
        url: 'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097102/025_full_bike_white_sdr_original_ztglp5.avif',
        width: 1200,
        height: 630,
        alt: 'OdinBikes – Custom Carbon Rennrad aus der Schweiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OdinBikes.ch | Custom Carbon Rennräder aus der Schweiz',
    description:
      'Custom Carbon Rennräder aus Horw bei Luzern. Individuell konfigurierbar für dein perfektes Fahrerlebnis.',
    images: [
      'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097102/025_full_bike_white_sdr_original_ztglp5.avif',
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="de"
      className={`${syncopate.variable} ${montserrat.variable} ${bungee.variable}`}
    >
      <head>
        {/* Preconnect bleibt hier */}
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* JSON-LD bleibt auch hier */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              /* ... */
            }),
          }}
        />
      </head>
      <body>
        <ServiceWorkerRegistration />
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>

        {/* GA mit next/script NACH dem Content */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0088JYTYNK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0088JYTYNK');
          `}
        </Script>
      </body>
    </html>
  );
};
export default RootLayout;
