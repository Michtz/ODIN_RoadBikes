'use client';

import React, { FC, forwardRef, PropsWithChildren, ReactNode } from 'react';
import style from './Containers.module.scss';
import Button, {
  ButtonContainer,
  ButtonPositions,
} from '@/components/system/button/Button';
import Image, { ImageLoaderProps } from 'next/image';

interface BrandIntroProps extends PropsWithChildren {
  border?: boolean;
}

const OverlayContainer = forwardRef<HTMLDivElement, BrandIntroProps>(
  ({ children, border = true }, ref) => {
    return (
      <div className={style.contentBelow} ref={ref}>
        {children}
        {border && <div className={style.hr} />}
      </div>
    );
  },
);

OverlayContainer.displayName = 'OverlayContainer';

interface ContainerProps extends PropsWithChildren {
  children?: ReactNode;
  flow?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  padding?: boolean;
  maxWidth?: string;
  gap?: string;
  transparent?: boolean;
  backgroundColor?: boolean | 'white';
  marginTop?: boolean;
  size?: 'small' | 'normal';
}

export const Container: FC<ContainerProps> = ({
  children,
  flow = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  padding = true,
  maxWidth,
  gap,
  transparent,
  backgroundColor = false,
  marginTop = false,
}) => (
  <div
    data-flow={flow}
    data-align-items={alignItems}
    data-justify-content={justifyContent}
    data-padding={padding}
    data-max-width={maxWidth}
    data-gap={gap}
    data-transparent={transparent}
    data-background-color={backgroundColor}
    data-margin={marginTop}
    className={style.container}
  >
    {children}
  </div>
);

export const Title: FC<ContainerProps> = ({ size = 'normal', children }) => (
  <h2 className={style.title} data-size={size}>
    {children}
  </h2>
);

interface ContentContainerProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonSide?: 'left' | 'right';
  containerPlacement?: 'left' | 'right' | 'fullWith' | 'center';
  href?: string;
  border?: 'bottom' | false;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  title,
  text,
  buttonText,
  buttonSide = 'left',
  containerPlacement = 'left',
  href,
}) => (
  <div className={style.contentContainer} data-side={containerPlacement}>
    <h2>{title}</h2>
    <p>{text}</p>
    {buttonText && (
      <ButtonContainer side={buttonSide}>
        <Button button href={href}>
          {buttonText}
        </Button>
      </ButtonContainer>
    )}
  </div>
);

interface ImageContainerProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonSide?: ButtonPositions;
  href?: string;
  border?: 'bottom' | false;
  imageRight: string;
  imageLeft: string;
  priority?: boolean;
}

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const urlParts = src.split('/image/upload/');
  if (urlParts.length !== 2) return src;

  const params = [
    'f_auto',
    'c_limit',
    `w_${width}`,
    `q_${quality || 'auto:best'}`,
  ];
  return `${urlParts[0]}/image/upload/${params.join(',')}/${urlParts[1]}`;
};

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
    <div className={style.imageContentContainer}>
      <div className={style.imageContainer}>
        <Image
          loader={cloudinaryLoader}
          className={style.image}
          src={imageLeft}
          alt={title || 'image left'}
          width={1600}
          height={1600}
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={priority}
        />

        <Image
          loader={cloudinaryLoader}
          className={style.image}
          src={imageRight}
          alt={title || 'image right'}
          width={1600}
          height={1600}
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={priority}
        />
      </div>
      {buttonText && (
        <ButtonContainer side={buttonSide}>
          <Button button href={href}>
            {buttonText}
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default OverlayContainer;
