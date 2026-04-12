'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import dynamic from 'next/dynamic';

const SideNav = dynamic(() => import('@/components/system/sideNav/SideNav'), {
  ssr: false,
});

interface SideNavContextType {
  isOpen: boolean;
  openSideNav: () => void;
  closeSideNav: () => void;
  toggleSideNav: () => void;
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined);

export const SideNavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSideNav = (): void => setIsOpen(true);
  const closeSideNav = (): void => setIsOpen(false);
  const toggleSideNav = (): void => setIsOpen((prev) => !prev);

  return (
    <SideNavContext.Provider
      value={{ isOpen, openSideNav, closeSideNav, toggleSideNav }}
    >
      {children}
      <SideNav isOpen={isOpen} onClose={closeSideNav} />
    </SideNavContext.Provider>
  );
};

export const useSideNav = (): SideNavContextType => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error('useSideNav must be used within a SideNavProvider');
  }
  return context;
};
