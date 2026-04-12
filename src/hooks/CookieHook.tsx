'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';

interface CookieContextType {
  showBanner: boolean;
  hasConsent: boolean;
  acceptCookies: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (consent) {
      setHasConsent(true);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted-cookies', {
      expires: 365,
      path: '/',
      sameSite: 'strict',
    });
    setHasConsent(true);
    setShowBanner(false);
  };

  return (
    <CookieContext.Provider value={{ showBanner, hasConsent, acceptCookies }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within CookieProvider');
  }
  return context;
};
