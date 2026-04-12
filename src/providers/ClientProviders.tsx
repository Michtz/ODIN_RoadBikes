'use client';

import React, { ReactNode } from 'react';
import { ErrorProvider } from '@/hooks/ErrorHook';
import { CookieProvider } from '@/hooks/CookieHook';
import { FeedbackProvider } from '@/hooks/FeedbackHook';
import { SideCartProvider } from '@/hooks/SideCartHook';
import Feedback from '@/components/system/feedback/Feedback';
import { BookingModalProvider } from '@/providers/BookingModalProvider';
import { SideNavProvider } from '@/hooks/SideNavHook';

interface ClientProvidersProps {
  children: ReactNode;
}

export const ClientProviders: React.FC<ClientProvidersProps> = ({
  children,
}) => {
  return (
    <ErrorProvider>
      <CookieProvider>
        <FeedbackProvider>
          <SideCartProvider>
            <BookingModalProvider>
              <SideNavProvider>
                {children}
                <Feedback />
                {/*<CookieBanner />*/}
              </SideNavProvider>
            </BookingModalProvider>
          </SideCartProvider>
        </FeedbackProvider>
      </CookieProvider>
    </ErrorProvider>
  );
};
