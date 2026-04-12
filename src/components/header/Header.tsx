'use client';
import React, { useEffect, useState, useRef } from 'react';
import style from './Header.module.scss';
import Link from '@/components/system/link/Link';
import HamburgerIcon from '@/components/icons/HamburgerIcon';
import SideNav from '@/components/system/sideNav/SideNav';
import LoadingSpinner from '@/components/system/loader/LoadingSpinner';
import dynamic from 'next/dynamic';
import OdinLogo from '@/components/icons/OdinLogo';
const BookingModal = dynamic(() => import('@/components/modals/BookingModal'), {
  ssr: false,
});

const ResponsiveAppBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const lastScrollY = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsSticky(true);

        if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsSticky(false);
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = [
    style.header,
    isLoading ? style.headerHidden : style.headerVisible,
    isSticky ? style.sticky : '',
    !isVisible && isSticky ? style.hidden : '',
  ].join(' ');

  return (
    <>
      {/* Loading Overlay */}
      <div
        className={`${style.loadingOverlay} ${!isLoading ? style.hidden : ''}`}
      >
        <Link noDecoration href={'/'}>
          <OdinLogo width={300} className={style.loadingLogo} />
        </Link>
        <LoadingSpinner color={'white'} />
      </div>

      <header className={headerClasses}>
        <div
          className={`${style.NavContainer} ${!isLoading ? style.fadeIn : style.fadeOut}`}
        >
          {/*<ul className={style.navItemContainer}>*/}
          {/*  /!*<li className={style.navItem}>*!/*/}
          {/*  /!*  <Link href={'/bikes/gravelbikes'}>Gravelbikes</Link>*!/*/}
          {/*  /!*</li>*!/*/}
          {/*</ul>*/}
          <span
            className={`${style.logo} ${!isLoading ? style.logoSmall : ''}`}
          >
            <Link noDecoration href={'/'}>
              <OdinLogo className={style.headerLogo} />
            </Link>
          </span>
          <ul className={style.navItemContainer}>
            <li className={style.navItem}>
              <Link href={'/bikes/roadbikes'}>Rennräder</Link>
            </li>
            <li className={style.navItem}>
              <Link href={'/about'}>Über Odin</Link>
            </li>

            <li className={style.navItem}>
              <Link onClick={() => setIsModalOpen(true)}>
                Besprechung Buchen
              </Link>
            </li>
            {/*<li className={style.navItem}>*/}
            {/*  <Link href={'/configurator'}>Configurator</Link>*/}
            {/*</li>*/}
            {/*<li className={style.navItem}>*/}
            {/*  <Link href={'/parts'}>Parts</Link>*/}
            {/*</li>*/}
          </ul>
          <div className={style.hamburgerMenu}>
            <HamburgerIcon
              isOpen={isSideNavOpen}
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              width={24}
              height={24}
            />
          </div>
        </div>
      </header>

      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
      {/*todo: remove hardcoded false when calendar ready*/}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calLink="odin-roadbikes-mer2x6"
      />
    </>
  );
};

export default ResponsiveAppBar;
