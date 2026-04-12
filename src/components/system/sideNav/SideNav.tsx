'use client';
import { FC } from 'react';
import style from './SideNav.module.scss';
import Link from '@/components/system/link/Link';
import OdinLogo from '@/components/icons/OdinLogo';
import { useBookingModal } from '@/providers/BookingModalProvider';

interface SideNavProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SideNav: FC<SideNavProps> = ({ isOpen = false, onClose }) => {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <div
        className={`${style.backdrop} ${isOpen ? style.backdropVisible : ''}`}
        onClick={onClose}
      />

      <nav className={`${style.sideNav} ${isOpen ? style.sideNavOpen : ''}`}>
        <div className={style.sideNavContent}>
          <div className={style.navSection}>
            <Link noDecoration href={'/'}>
              <OdinLogo width={250} height={30} />
            </Link>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link
                  noDecoration
                  className={style.fakeLinkButton}
                  onClick={() => {
                    openBookingModal();
                    onClose?.();
                  }}
                >
                  Besprechung Buchen
                </Link>
              </li>
              <li className={style.navItem}>
                <Link additionalAction={onClose} noDecoration href="/">
                  Home
                </Link>
              </li>
              <li className={style.navItem}>
                <Link additionalAction={onClose} noDecoration href="/about">
                  Über ODIN
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  additionalAction={onClose}
                  noDecoration
                  href="/bikes/roadbikes"
                >
                  Rennräder
                </Link>
              </li>
              <li className={style.navItem}>
                <Link additionalAction={onClose} noDecoration href="/impressum">
                  Impressum
                </Link>
              </li>
              <li className={style.navItem}>
                <Link additionalAction={onClose} noDecoration href="/legal">
                  Datenschutz
                </Link>
              </li>

              <li className={style.navItem}>
                <Link noDecoration href="/contact" additionalAction={onClose}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
