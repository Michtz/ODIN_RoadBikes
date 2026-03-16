'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import style from '@/components/system/imageGridContainer/ScrollStaggeredGrid.module.scss';

interface ScrollStaggeredGridProps {
  imagesArray: (StaticImageData | string)[];
}

interface RowProps {
  images: string[] | StaticImageData[];
  transform?: any;
}

const ScrollStaggeredGrid: FC<ScrollStaggeredGridProps> = ({ imagesArray }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight: number = window.innerHeight;
      const start = windowHeight;

      let currentProgress = (start - rect.top) / (start + rect.height * 0.5);
      if (currentProgress < 0) currentProgress = 0;
      if (currentProgress > 1) currentProgress = 1;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const multipliers = [-100, 0, -100];
  const isMobile = windowWidth > 0 && windowWidth < 500;

  const splitIntoParts = (arr: any[], parts: number) => {
    const processableArr =
      parts === 2 ? arr.slice(0, Math.ceil(arr.length * (2 / 3))) : arr;
    const result = [];
    const size = Math.ceil(processableArr.length / parts);

    for (let i = 0; i < processableArr.length; i += size) {
      result.push(processableArr.slice(i, i + size));
    }

    return result;
  };

  return (
    <>
      <div className={style.container} ref={containerRef}>
        {splitIntoParts(imagesArray, isMobile ? 2 : 3).map((images, index) => (
          <Row
            images={images}
            key={index}
            isMobile={isMobile}
            transform={{
              transform: `translate3d(0, ${progress * multipliers[index]}px, 0)`,
            }}
          />
        ))}
      </div>
      <div
        className={style.overlay}
        data-row-count={isMobile ? '2' : '3'}
      ></div>
    </>
  );
};

interface RowProps {
  images: string[] | StaticImageData[];
  transform?: any;
  isMobile: boolean;
}

const Row: FC<RowProps> = ({ images, transform, isMobile }) => {
  return (
    <div
      className={style.row}
      style={transform}
      data-row-count={isMobile ? '2' : '3'}
    >
      {images.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt={`Gallery image ${i}`}
          className={style.image}
          width={400}
          height={600}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default ScrollStaggeredGrid;
