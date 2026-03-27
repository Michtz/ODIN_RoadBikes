'use client';

import React, { useEffect, useState } from 'react';
import { useCookie } from '@/hooks/CookieHook';
import styles from '@/components/system/cookieBannner/CookieBanner.module.scss';
import Button from '@/components/system/button/Button';

const CookieBanner: React.FC = () => {
  const { showBanner, acceptCookies } = useCookie();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  const handleAccept = () => {
    setIsClosing(true);
    setTimeout(() => {
      acceptCookies();
      setIsClosing(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`${styles.cookieBanner} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
      role="dialog"
      aria-label="Cookie Banner"
      aria-describedby="cookie-description"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Cookie Einstellungen</h3>
            <p id="cookie-description" className={styles.description}>
              Wir Sammeln keine Daten über Sie.
            </p>
            <button
              className={styles.learnMore}
              onClick={() => window.open('/legal')}
              aria-label="Mehr erfahren"
            >
              Mehr erfahren →
            </button>
          </div>
        </div>

        <div className={styles.actions}>
          <Button onClick={handleAccept} value="primary" appearance="button">
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
