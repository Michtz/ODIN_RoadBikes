'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import style from './DiaShowContainer.module.scss';
import { cloudinaryLoader } from '@/components/system/containers/Containers';

interface DiaShowContainerProps {
  /**
   * Array of image URLs to display in the diashow
   */
  images: string[];
  /**
   * Interval in milliseconds for switching images. Default is 5000ms.
   */
  interval?: number;
  /**
   * If true, the diashow will cover the entire screen and stay fixed (hiding footer/header)
   */
  fullScreen?: boolean;
}

/**
 * DiaShowContainer - A simple image slider component that slides images
 * every 5 seconds (configurable). New images slide in from the left
 * while the current image slides out to the right.
 */
export const DiaShowContainer: FC<DiaShowContainerProps> = ({
  images,
  interval = 5000,
  fullScreen = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`${style.diashowContainer} ${fullScreen ? style.fullScreen : ''}`}
    >
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === prevIndex;

        // We only render active and previous slides to keep DOM clean
        // or we render all but hide them. For a simple slider, all is fine.
        return (
          <div
            key={`${img}-${index}`}
            className={`${style.slide} ${isActive ? style.active : ''} ${
              isPrev ? style.prev : ''
            }`}
          >
            <Image
              loader={cloudinaryLoader}
              src={img}
              alt={`Diashow image ${index + 1}`}
              fill
              className={style.image}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        );
      })}
    </div>
  );
};

export default DiaShowContainer;
