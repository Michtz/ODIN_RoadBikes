'use client';

import React, { FC, useState } from 'react';
import style from './ImageHoverTextContainer.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { customImageLoaderAI } from '@/components/system/containers/Containers';

export type ImageHoverTextContainerItem = {
  id: number;
  image: string | StaticImageData;
  alt: string;
  title: string;
  text: string;
  url: string;
};

interface ImageHoverTextContainerProps {
  items: ImageHoverTextContainerItem[];
}

const ImageHoverTextContainer: FC<ImageHoverTextContainerProps> = ({
  items,
}) => {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className={style.gridContainer}>
      {items.map((item) => (
        <div
          key={item.id}
          className={style.cardItem}
          onClick={() => router.push(item.url)}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className={style.imageWrapper}>
            <Image
              key={`${item.image}`}
              loader={customImageLoaderAI}
              className={style.image}
              src={item.image}
              alt={item.alt}
              width={400}
              height={600}
              sizes="(max-width: 450px) 450px, (max-width: 700px) 700px, (max-width: 1000px) 1000px, 1600px"
            />

            <h3 className={style.title}>{item.title}</h3>
          </div>

          <div
            className={`${style.overlayContainer} ${hoveredId === item.id ? style.isVisible : ''}`}
          >
            <div className={style.textcontainer}>
              <h3 className={style.titleOverlay}>{item.title}</h3>
              <p className={style.textOverlay}>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHoverTextContainer;
