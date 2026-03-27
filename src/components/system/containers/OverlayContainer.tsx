'use client';

import React, { forwardRef, PropsWithChildren } from 'react';
import style from './Containers.module.scss';

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

export default OverlayContainer;
