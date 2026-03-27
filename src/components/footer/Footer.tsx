import React, { FC } from 'react';
import style from './Footer.module.scss';
import Link from '@/components/system/link/Link';
import MaterialIcon from '@/components/system/materialIcon/MaterialIcon';
import MapFacade from '@/components/system/mapFacade/MapFacade';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <div className={style.footerColumn}>
            <h3 className={style.columnTitle}>Kontakt</h3>
            <ul className={style.linkList}>
              <li className={style.contactListItem}>
                <MaterialIcon icon="mail" iconSize="small" />
                <span className={style.contactContent}>
                  Email:&nbsp;
                  <a href="mailto:info@odinbikes.ch">info@odinbikes.ch</a>
                </span>
              </li>
              <li className={style.contactListItem}>
                <MaterialIcon icon="phone" iconSize="small" />
                <span className={style.contactContent}>
                  Telefon:&nbsp;
                  <a href="tel:+0413407044">+041 340 70 44</a>
                </span>
              </li>
            </ul>
          </div>

          <div className={style.mapContainer}>
            <MapFacade />
          </div>
        </div>

        <div
          id={'contact'}
          className={`${style.footerColumn} ${style.additionalInfo}`}
        >
          <Link href="/impressum" aria-label="Das Rechtliche">
            Impressum
          </Link>
          <Link href="/legal" aria-label="Datenschutz">
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
