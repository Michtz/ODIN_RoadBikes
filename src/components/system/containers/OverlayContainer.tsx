'use client';

import React, { forwardRef, PropsWithChildren } from 'react';
import style from './Containers.module.scss';

interface BrandIntroProps extends PropsWithChildren {
  border?: boolean;
  fullwidth?: boolean;
}

const OverlayContainer = forwardRef<HTMLDivElement, BrandIntroProps>(
  ({ children, border = true, fullwidth }, ref) => {
    return (
      <div className={style.contentBelow} data-fullwidth={fullwidth} ref={ref}>
        {children}
        {border && <div className={style.hr} />}
      </div>
    );
  },
);

OverlayContainer.displayName = 'OverlayContainer';

export default OverlayContainer;
