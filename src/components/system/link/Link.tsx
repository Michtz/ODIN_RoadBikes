'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import MaterialIcon from '../materialIcon/MaterialIcon';
import style from './Link.module.scss';

interface LinkProps {
  href?: string;
  children: React.ReactNode;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  prefetch?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  icon?: string;
  asButton?: boolean;
  fullWidth?: boolean;
  weight?: 'normal' | 'bold';
  active?: boolean;
  noDecoration?: boolean;
  additionalAction?: (() => void) | undefined;
  styling?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  external = false,
  disabled = false,
  className = '',
  prefetch = false,
  onClick,
  icon,
  asButton = false,
  fullWidth = false,
  weight = 'normal',
  active = false,
  noDecoration = false,
  additionalAction,
  styling = false,
}) => {
  const router = useRouter();
  const prefetched = useRef<boolean>(false);

  useEffect(() => {
    if (prefetch && href && !external && !prefetched.current) {
      router.prefetch(href);
    }
  }, [prefetch, href, external, router]);

  const handleClick = async (
    event: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    if (disabled) return;
    if (onClick) {
      onClick(event);
      return;
    }
    if (href && !external) {
      event.preventDefault();
      router.push(href);
    }
  };

  const content = (
    <>
      <span data-decoration={!noDecoration} className={style.text}>
        {children}
      </span>
      {icon && <MaterialIcon icon={icon} />}
    </>
  );

  const sharedProps = {
    className: className || undefined,
    onClick: handleClick,
    'data-disabled': disabled ? true : undefined,
    'data-fullwidth': fullWidth ? true : undefined,
    'data-weight': weight !== 'normal' ? weight : undefined,
    'data-active': active ? true : undefined,
  };

  // Button mode
  if (asButton || !href || onClick) {
    return (
      <span
        {...sharedProps}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent<HTMLElement>);
          }
        }}
      >
        {content}
      </span>
    );
  }

  // External link
  if (external) {
    return (
      <a {...sharedProps} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  // Internal link
  return (
    <a
      {...sharedProps}
      href={disabled ? '' : href}
      data-styling={styling ? true : undefined}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (additionalAction) additionalAction();
        handleClick(e);
      }}
    >
      {content}
    </a>
  );
};

export default Link;
