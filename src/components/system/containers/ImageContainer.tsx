'use client';

import { FC } from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import style from './Containers.module.scss';
import Button, {
  ButtonContainer,
  ButtonPositions,
} from '@/components/system/button/Button';

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  const urlParts: string[] = src.split('/image/upload/');
  if (urlParts.length !== 2) return src;

  const params: string[] = [
    'f_auto',
    'c_limit',
    `w_${width}`,
    `q_${quality || 'auto:best'}`,
  ];
  return `${urlParts[0]}/image/upload/${params.join(',')}/${urlParts[1]}`;
};

interface ImageContainerProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonSide?: ButtonPositions;
  href?: string;
  border?: 'bottom' | false;
  imageRight: string;
  imageLeft?: string;
  priority?: boolean;
}

export const ImageContainer: FC<ImageContainerProps> = ({
  title,
  text,
  buttonText,
  buttonSide = 'left',
  href,
  imageRight,
  imageLeft,
  border = 'bottom',
  priority = false,
}) => {
  return (
    <div className={style.imageContentContainer} data-single={!imageLeft}>
      <div className={style.imageContainer} data-single={!imageLeft}>
        {imageLeft && (
          <Image
            loader={cloudinaryLoader}
            className={style.image}
            src={imageLeft}
            alt={title || 'image left'}
            width={1600}
            height={1600}
            quality={90}
            sizes="(max-width: 468px) 468px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw"
            priority={priority}
          />
        )}

        <Image
          loader={cloudinaryLoader}
          className={style.image}
          src={imageRight}
          alt={title || 'image right'}
          width={1600}
          height={1600}
          quality={90}
          sizes="(max-width: 468px) 468px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw"
          priority={priority}
        />
      </div>
      {buttonText && (
        <ButtonContainer buttonStyle side={buttonSide}>
          <Button button href={href}>
            {buttonText}
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};
