'use client';

import { FC } from 'react';
import Cal from '@calcom/embed-react';
import style from './BookingModal.module.scss';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
  notes?: string;
}

export const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  calLink,
  notes,
}) => {
  if (!isOpen) return null;
  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>
          &times;
        </button>
        <Cal
          id={'1234568'}
          calLink={calLink}
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ theme: 'dark', notes: notes as string }}
        />
      </div>
    </div>
  );
};

export default BookingModal;
