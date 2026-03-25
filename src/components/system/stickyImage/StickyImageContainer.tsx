'use client';

import { FC } from 'react';
import Image from 'next/image';
import style from '@/components/system/stickyImage/StickyImageContainer.module.scss';
import { cloudinaryLoader } from '@/components/system/containers/Containers';

interface ScrollHeroProps {
  image: string;
  title: string;
}

export const StickyImageContainer: FC<ScrollHeroProps> = ({ image, title }) => {
  return (
    <div className={style.scrollContainer}>
      <div className={style.stickyWrapper}>
        <Image
          loader={cloudinaryLoader}
          src={image}
          className={style.titleImage}
          alt="Hero Background"
          fill
          priority
          quality={90}
          sizes="(max-width: 468px) 468px,max-width: 768px) 768px, (max-width: 1200px) 1200px"
        />
        <div className={style.overlayContent}>
          <h1 className={`${style.logoFade} ${style.visible}`}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default StickyImageContainer;
