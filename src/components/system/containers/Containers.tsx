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

OverlayContainer.displayName = 'Overlay....';

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
        <Button href={href}>{buttonText}</Button>
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
  leftAI?: boolean;
  rightAI?: boolean;
}

export const customImageLoader = ({ src, width }: ImageLoaderProps) => {
  if (width <= 450) return `/assets/450px/${src}_450.avif`;
  if (width <= 700) return `/assets/700px/${src}_700.avif`;
  if (width <= 1000) return `/assets/1000px/${src}_1000.avif`;
  return `/assets/1600px/${src}_1600.avif`;
};

export const customImageLoaderAI = ({ src, width }: ImageLoaderProps) => {
  if (width <= 450) return `/assets/450px/ai/${src}_450px.png`;
  if (width <= 700) return `/assets/700px/ai/${src}_700px.png`;
  if (width <= 1000) return `/assets/1000px/ai/${src}_1000px.png`;
  return `/assets/1600px/ai/${src}_1600px.png`;
};

export const customImageLoaderTransparent = ({
  src,
  width,
}: ImageLoaderProps) => {
  if (width <= 450) return `/assets/450px/transparent/${src}_450px.png`;
  if (width <= 700) return `/assets/700px/transparent/${src}_700px.png`;
  if (width <= 1000) return `/assets/1000px/transparent/${src}_1000px.png`;
  return `/assets/1600px/transparent/${src}_1600px.png`;
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
  rightAI = false,
  leftAI = false,
}) => {
  return (
    <div className={style.imageContentContainer}>
      <div className={style.imageContainer}>
        <Image
          loader={leftAI ? customImageLoaderAI : customImageLoader}
          className={style.image}
          src={imageLeft}
          alt={title || 'image left'}
          width={600}
          height={600}
          sizes="(max-width: 450px) 450px, (max-width: 700px) 700px, (max-width: 1000px) 1000px, 1600px"
        />
        <Image
          loader={rightAI ? customImageLoaderAI : customImageLoader}
          className={style.image}
          src={imageRight}
          alt={title || 'image right'}
          width={600}
          height={600}
          sizes="(max-width: 450px) 450px, (max-width: 700px) 700px, (max-width: 1000px) 1000px, 1600px"
        />
      </div>
      {buttonText && (
        <ButtonContainer side={buttonSide}>
          <Button href={href}>{buttonText}</Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default OverlayContainer;
