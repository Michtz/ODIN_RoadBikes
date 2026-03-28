'use client';

import React, { FC, useEffect, useRef } from 'react';
import style from '@/components/system/videoPlayer/MidScrollVideoPlayer.module.scss';
import { Details } from '@/data/gravity_data';

interface MidScrollVideoPlayerProps {
  videoSrc: string;
  playbackConst?: number; // 600px Scroll-Weg
  data: Details;
}

const MidScrollVideoPlayer: FC<MidScrollVideoPlayerProps> = ({
  videoSrc,
  playbackConst = 2200,
  data,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;

      const video = videoRef.current;
      const rect = containerRef.current.getBoundingClientRect();

      // Das 'Sticking' beginnt, wenn rect.top <= 0 erreicht
      // Das passiert in deinem Fall, wenn das Video die Mitte/Oben erreicht

      // Berechnung des Fortschritts basierend darauf, wie weit wir
      // in die 'playbackConst' (600px) hineingescrollt haben.
      let progress = -rect.top / playbackConst;

      // Begrenzung zwischen 0 und 1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (video.duration) {
        video.currentTime = video.duration * progress;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [playbackConst]);

  const getSource = (src: string, type: 'webm' | 'mp4') => {
    const isAbsolute = src.startsWith('http');
    const base = isAbsolute ? src : src.startsWith('/') ? src : `/${src}`;

    if (type === 'webm') {
      return base.endsWith('.webm') ? base : base.replace('.mp4', '.webm');
    }
    return base.endsWith('.mp4') ? base : base.replace('.webm', '.mp4');
  };

  return (
    <div
      className={style.mainContainer}
      ref={containerRef}
      style={{ height: `calc(60vh + ${playbackConst}px)` }}
    >
      <div className={style.stickyWrapper}>
        <div className={style.videoContainer}>
          <div className={style.placeholder}></div>
          <video
            className={style.videoElement}
            ref={videoRef}
            muted
            playsInline
            preload="auto"
          >
            <source src={getSource(videoSrc, 'webm')} type="video/webm" />
            <source src={getSource(videoSrc, 'mp4')} type="video/mp4" />
          </video>
          <div className={style.contentOverlay}></div>
        </div>
      </div>
      <div className={style.textContainer}>
        <h2>Rahmen</h2>
        <p>{data.frame}</p>
      </div>
      <div className={style.distanceHolder}></div>
      <div className={style.textContainer}>
        <h2>Farbe</h2>
        <p>{data.color}</p>
      </div>
      <div className={style.distanceHolder}></div>
      <div className={style.textContainer}>
        <h2>Teile</h2>
        <p>{data.components}</p>
      </div>
      <div className={style.distanceHolder}></div>
      <div className={style.textContainer}>
        <h2>Fitting</h2>
        <p>{data.settings}</p>
      </div>
      <div className={style.distanceHolder}></div>
      <div className={style.textContainer}>
        <h2>Service</h2>
        <p>{data.service}</p>
      </div>
    </div>
  );
};

export default MidScrollVideoPlayer;
