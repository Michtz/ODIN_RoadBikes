'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import OdinLogo from '@/components/icons/OdinLogo';
import style from './ScrollHero.module.scss';
import { Title } from '@/components/system/containers/Containers';

interface ScrollHeroProps {
  videoSrc: string;
  showImageOverlay?: boolean;
  botsOnlyText: string;
  footerText: 'home' | 'categories';
}

const ScrollHeroVideo: FC<ScrollHeroProps> = ({
  videoSrc,
  showImageOverlay: showImageOverlayProp,
  botsOnlyText,
  footerText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [showImageOverlayInternal, setShowImageOverlayInternal] =
    useState<boolean>(false);
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const isTicking = useRef(false);

  // Refs that mirror the state values above so the scroll handler can read
  // the latest values without being recreated on every state change.
  const showLogoRef = useRef(false);
  const showImageOverlayInternalRef = useRef(false);

  const showImageOverlay =
    showImageOverlayProp !== undefined
      ? showImageOverlayProp
      : showImageOverlayInternal;

  const updateVideoHeight = () => {
    if (videoRef.current) {
      setVideoHeight(videoRef.current.clientHeight);
    }
  };

  const updateVideoPosition = () => {
    if (!containerRef.current || !videoRef.current) return;

    const container = containerRef.current;
    const video = videoRef.current;
    const containerTop = container.getBoundingClientRect().top;
    const animationDistance = window.innerHeight / 3;
    let progress = -containerTop / animationDistance;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    if (video.duration && Number.isFinite(video.duration)) {
      const targetTime = video.duration * progress;
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        video.currentTime = targetTime;
      }
    }

    const shouldShowLogo = progress > 0.5;
    if (showLogoRef.current !== shouldShowLogo) {
      showLogoRef.current = shouldShowLogo;
      setShowLogo(shouldShowLogo);
    }

    const isCovering = containerTop <= -container.scrollHeight;
    if (showImageOverlayInternalRef.current !== isCovering) {
      showImageOverlayInternalRef.current = isCovering;
      setShowImageOverlayInternal(isCovering);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => {
          video.pause();
          updateVideoPosition();
          updateVideoHeight();
        })
        .catch(() => {
          updateVideoPosition();
          updateVideoHeight();
        });
    }

    const handleScroll = () => {
      if (!isTicking.current) {
        window.requestAnimationFrame(() => {
          updateVideoPosition();
          isTicking.current = false;
        });
        isTicking.current = true;
      }
    };

    const handleResize = () => {
      updateVideoPosition();
      updateVideoHeight();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    updateVideoHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Registers once on mount. State comparisons use refs to stay current.

  const isVisible = showLogo && !showImageOverlay;

  const getSource = (src: string, type: 'webm' | 'mp4') => {
    const isAbsolute = src.startsWith('http');
    let base = src;
    if (!isAbsolute) {
      base = src.startsWith('/') ? src : `/${src}`;
    }

    if (type === 'webm') {
      return base.endsWith('.webm') ? base : base.replace('.mp4', '.webm');
    }
    return base.endsWith('.mp4') ? base : base.replace('.webm', '.mp4');
  };

  return (
    <div className={style.scrollContainer} ref={containerRef}>
      <div className={style.stickyWrapper}>
        <video
          className={style.videoElement}
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          onLoadedMetadata={() => {
            updateVideoPosition();
            updateVideoHeight();
          }}
        >
          <source src={getSource(videoSrc, 'webm')} type="video/webm" />
          <source src={getSource(videoSrc, 'mp4')} type="video/mp4" />
        </video>

        <div className={style.overlayContent}>
          <h1 className={`${style.logoFade} ${isVisible ? style.visible : ''}`}>
            <OdinLogo width={400} />
            <span className={style.srOnly}>{botsOnlyText}</span>
          </h1>
        </div>
      </div>
      <div
        className={`${style.placefiler} ${showLogo ? style.invisible : style.visible} `}
        data-position={footerText}
        style={{ top: `${videoHeight}px` }}
      >
        {footerText === 'home' ? (
          <Title size={'big'}>
            Made
            <br />
            for <br />
            you
          </Title>
        ) : (
          <Title size={'big'}>
            The
            <br />
            Road <br />
            is yours
          </Title>
        )}
      </div>
    </div>
  );
};

export default ScrollHeroVideo;
