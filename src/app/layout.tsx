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

// ---------------------------------------------------------------------------
// Structured Data – Organisation / LocalBusiness / WebSite / Products / Breadcrumb
// ---------------------------------------------------------------------------
const mainJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://odinbikes.ch/#organization',
    name: 'OdinBikes',
    legalName: 'BIKESCHMIEDE GmbH',
    description:
      'Individuell konfigurierbare Custom Carbon Rennräder aus Horw bei Luzern. Gravity ab CHF 3,450, Slide ab CHF 3,450. Professionelles Bikefitting mit Gebiomized, handgefertigte Laufradsätze.',
    url: 'https://odinbikes.ch',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://odinbikes.ch/#logo',
      url: 'https://odinbikes.ch/favicon.ico',
      caption: 'OdinBikes Logo',
    },
    image:
      'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097102/025_full_bike_white_sdr_original_ztglp5.avif',
    telephone: '+41-340-70-44',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-340-70-44',
      contactType: 'customer service',
      contactOption: 'TollFree',
      availableLanguage: { '@type': 'Language', name: 'German' },
      areaServed: 'CH',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gemeindehausplatz 13',
      addressLocality: 'Horw',
      postalCode: '6048',
      addressRegion: 'Luzern',
      addressCountry: 'CH',
    },
    areaServed: { '@type': 'Country', name: 'Switzerland' },
    priceRange: 'CHF 3,450 – CHF 10000+',
    currenciesAccepted: 'CHF',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://odinbikes.ch/#website',
    name: 'OdinBikes',
    url: 'https://odinbikes.ch',
    inLanguage: 'de-CH',
    publisher: { '@id': 'https://odinbikes.ch/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://odinbikes.ch/bikes/roadbikes?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://odinbikes.ch/bikes/roadbikes/gravity#product',
    name: 'OdinBikes Gravity',
    description:
      'Das Gravity ist das leichteste Custom Carbon Rennrad von OdinBikes – konzipiert für Bergauffahrten. Rahmen aus Toray-Carbon, kletterfreundliche Geometrie, individuelles Design in Wunschfarben. Gewicht unter 6 kg möglich. Größen 46–58.',
    url: 'https://odinbikes.ch/bikes/roadbikes/gravity',
    image:
      'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774102582/odin_frame_yellow_gravity_ai_transparent_u5fvyw.png',
    brand: {
      '@type': 'Brand',
      name: 'OdinBikes',
      '@id': 'https://odinbikes.ch/#organization',
    },
    manufacturer: { '@id': 'https://odinbikes.ch/#organization' },
    category: 'Custom Carbon Rennrad',
    material: 'Toray Carbon Fiber',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CHF',
      price: '4500',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '4500',
        priceCurrency: 'CHF',
        minPrice: '4500',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      url: 'https://odinbikes.ch/bikes/roadbikes/gravity',
      seller: { '@id': 'https://odinbikes.ch/#organization' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'CH',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 6,
            maxValue: 10,
            unitCode: 'WEE',
          },
        },
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://odinbikes.ch/bikes/roadbikes/slide#product',
    name: 'OdinBikes Slide',
    description:
      'Das Slide ist das alltagsfreundliche Custom Carbon Rennrad von OdinBikes – schnell auf der Strasse, komfortabel auf langen Strecken. Individuell konfigurierbar ab CHF 3,450 inklusive Bikefitting und eigenem Design.',
    url: 'https://odinbikes.ch/bikes/roadbikes/slide',
    image:
      'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097102/025_full_bike_white_sdr_original_ztglp5.avif',
    brand: {
      '@type': 'Brand',
      name: 'OdinBikes',
      '@id': 'https://odinbikes.ch/#organization',
    },
    manufacturer: { '@id': 'https://odinbikes.ch/#organization' },
    category: 'Custom Carbon Rennrad',
    material: 'Carbon Fiber',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CHF',
      price: '3,450',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '3,450',
        priceCurrency: 'CHF',
        minPrice: '3,450',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      url: 'https://odinbikes.ch/bikes/roadbikes/slide',
      seller: { '@id': 'https://odinbikes.ch/#organization' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'CH',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 6,
            maxValue: 10,
            unitCode: 'WEE',
          },
        },
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://odinbikes.ch/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://odinbikes.ch',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bikes',
        item: 'https://odinbikes.ch/bikes/roadbikes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gravity',
        item: 'https://odinbikes.ch/bikes/roadbikes/gravity',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Slide',
        item: 'https://odinbikes.ch/bikes/roadbikes/slide',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Konfigurator',
        item: 'https://odinbikes.ch/configurator',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Über uns',
        item: 'https://odinbikes.ch/about',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Kontakt',
        item: 'https://odinbikes.ch/contact',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// FAQPage JSON-LD – Häufige Fragen zu OdinBikes (unsichtbar, für SEO/KI)
// ---------------------------------------------------------------------------
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://odinbikes.ch/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie läuft die Bestellung eines Custom Rennrads bei OdinBikes ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Prozess beginnt mit einem persönlichen Beratungsgespräch, in dem wir gemeinsam Rahmen, Geometrie, Design und Komponenten festlegen. Nach der Konfiguration werden Rahmen und Komponenten bestellt, das Bike aufgebaut und anschliessend in unserem Bikefitting-Studio mit Gebiomized-Technologie millimetergenau auf Ihren Körper abgestimmt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein Custom Carbon Rennrad von OdinBikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Slide-Modell startet ab CHF 3,150, das Gravity-Modell ab ca. CHF 3,450. Der Endpreis hängt von der gewählten Schaltgruppe, den Laufrädern und weiteren Komponenten ab. OdinBikes bietet bewusst faire Preise – direkt und ohne Zwischenhändler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen dem Gravity und dem Slide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Gravity ist das Bergmodell: extrem leichter Rahmen aus höchstwertigem Toray-Carbon, maximale Steifigkeit im Tretlagerbereich, kletteroptimierte Geometrie – Gewicht unter 6 kg möglich. Das Slide hat eine alltagsfreundlichere Geometrie, die schnelles Fahren auf der Strasse mit höherem Komfort auf langen Strecken verbindet. Beide Modelle sind vollständig individualisierbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktioniert das Bikefitting bei OdinBikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jedes OdinBike wird nach dem Aufbau in unserem Bikefitting-Studio in Horw professionell auf den Fahrer abgestimmt. Wir arbeiten mit der Gebiomized-Technologie, die eine druckbasierte Sitzanalyse und präzise Positionsmessung ermöglicht. Das Bikefitting ist im Kaufpreis inbegriffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viele Individualisierungsmöglichkeiten gibt es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Möglichkeiten sind nahezu unbegrenzt: Sie wählen Rahmenfarbe und Design (jede Farbe möglich, nur ein Exemplar weltweit), Schaltgruppe (Shimano oder SRAM), Laufräder (handgefertigt mit Naben, Speichen und Felgen Ihrer Wahl), Lenker, Sattel und alle weiteren Komponenten. OdinBikes begleitet Sie durch den gesamten Auswahlprozess.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Lieferung eines Custom Rennrads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Lieferzeit beträgt in der Regel 2–10 Wochen ab Bestellbestätigung, je nach Verfügbarkeit der gewählten Komponenten und aktueller Auslastung. Nach Eingang aller Teile folgt der Aufbau und das Bikefitting im Haus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welchen Vorteil hat ein OdinBike gegenüber einem Serienrennrad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Serienräder sind Kompromisslösungen – gefertigt für einen Durchschnittsfahrer. Ein OdinBike ist von Grund auf auf Sie zugeschnitten: Ihre Körpermasse, Ihre Fahrstil, Ihr Design, Ihre Komponentenwahl. Dazu kommt professionelles Bikefitting, eine Rahmenqualität auf höchstem Niveau und ein direktes, persönliches Beratungserlebnis – alles zu einem fairen Preis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es eine Garantie auf das Rennrad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Der Carbonrahmen ist geprüft und übertrifft die EN-Norm in sämtlichen Belastungstests (Drop Impact, Fatigue, Headtube Strength etc.). Auf Rahmen und Komponenten gilt die gesetzliche Gewährleistung gemäss Schweizer Recht. Bei Defekten steht unsere Werkstatt in Horw für Reparatur und Service zur Verfügung.',
      },
    },
  ],
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

        {/* Structured Data – Organisation, LocalBusiness, WebSite, Produkte, BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainJsonLd) }}
        />

        {/* FAQPage JSON-LD – unsichtbar, für SEO & KI-Crawler */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
