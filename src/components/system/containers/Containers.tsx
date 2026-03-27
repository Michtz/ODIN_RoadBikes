import React, { FC, PropsWithChildren, ReactNode } from 'react';
import style from './Containers.module.scss';
import Button, { ButtonContainer } from '@/components/system/button/Button';

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
  size?: 'small' | 'normal' | 'big';
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
      <ButtonContainer buttonStyle side={buttonSide}>
        <Button button href={href}>
          {buttonText}
        </Button>
      </ButtonContainer>
    )}
  </div>
);
