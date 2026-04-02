import React, { FC } from 'react';
import style from './Footer.module.scss';
import Link from '@/components/system/link/Link';
import MaterialIcon from '@/components/system/materialIcon/MaterialIcon';
import MapFacade from '@/components/system/mapFacade/MapFacade';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OdinBikes',
  email: 'info@odinbikes.ch',
  telephone: '+41340704',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+41340704',
    contactType: 'customer service',
  },
  employee: {
    '@type': 'Person',
    name: 'Maikel Blommerde',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gemeindehausplatz 13',
    postalCode: '6048',
    addressLocality: 'Horw',
    addressCountry: 'CH',
  },
};

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <div className={style.footerColumn}>
            <h3 className={style.columnTitle}>Kontakt</h3>

            {/* Semantic address block using <address> element */}
            <address className={style.addressBlock}>
              <ul className={style.linkList}>
                {/*<li className={style.contactListItem}>*/}
                {/*  <MaterialIcon*/}
                {/*    icon="mail"*/}
                {/*    iconSize="small"*/}
                {/*    aria-hidden="true"*/}
                {/*  />*/}
                {/*  <span className={style.contactContent}>*/}
                {/*    <a*/}
                {/*      href="mailto:info@odinbikes.ch"*/}
                {/*      rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*      info@odinbikes.ch*/}
                {/*    </a>*/}
                {/*  </span>*/}
                {/*</li>*/}
                <li className={style.contactListItem}>
                  <MaterialIcon
                    icon="phone"
                    iconSize="small"
                    aria-hidden="true"
                  />
                  <span className={style.contactContent}>
                    <a href="tel:+41340704">+041 340 70 44</a>
                  </span>
                </li>
                <li className={style.contactListItem}>
                  <MaterialIcon
                    icon="person"
                    iconSize="small"
                    aria-hidden="true"
                  />
                  <span className={style.contactContent}>
                    <span itemProp="name">Maikel Blommerde</span>
                  </span>
                </li>
                <li className={style.contactListItem}>
                  <MaterialIcon
                    icon="location_on"
                    iconSize="small"
                    aria-hidden="true"
                  />
                  <span className={style.contactContent}>
                    <span itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="streetAddress">Gemeindehausplatz 13</span>
                      ,
                      <br />
                      <span itemProp="postalCode">6048</span>
                      <span itemProp="addressLocality">Horw</span>
                    </span>
                  </span>
                </li>
              </ul>
            </address>
          </div>

          <div className={style.mapContainer}>
            <MapFacade />
          </div>
        </div>

        <div
          id="contact"
          className={`${style.footerColumn} ${style.additionalInfo}`}
        >
          <Link href="/impressum" aria-label="Impressum – Das Rechtliche">
            Impressum
          </Link>
          <Link
            href="/legal"
            aria-label="Datenschutz – Unsere Datenschutzerklärung"
          >
            Datenschutz
          </Link>
        </div>

        <div className={style.footerBottom}>
          <div className={style.copyright}>
            <p>
              © {new Date().getFullYear()} OdinBikes. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
