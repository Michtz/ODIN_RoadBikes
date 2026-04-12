'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  FC,
} from 'react';
import dynamic from 'next/dynamic';

const BookingModal = dynamic(() => import('@/components/modals/BookingModal'), {
  ssr: false,
});

interface BookingModalContextType {
  openBookingModal: (calLink?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined,
);

const DEFAULT_CAL_LINK = 'odin-roadbikes-mer2x6';

export const BookingModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [calLink, setCalLink] = useState<string>(DEFAULT_CAL_LINK);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openBookingModal = (link: string = DEFAULT_CAL_LINK): void => {
    setCalLink(link);
    setIsOpen(true);
  };

  const closeBookingModal = (): void => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{ openBookingModal, closeBookingModal }}
    >
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        calLink={calLink}
      />
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = (): BookingModalContextType => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error(
      'useBookingModal must be used within a BookingModalProvider',
    );
  }
  return context;
};
