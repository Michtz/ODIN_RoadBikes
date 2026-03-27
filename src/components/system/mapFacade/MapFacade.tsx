'use client';
import { useState } from 'react';
import Image from 'next/image';
import style from '../../footer/Footer.module.scss';
import { cloudinaryLoader } from '@/components/system/containers/ImageContainer';

const MapFacade = () => {
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.1051332962143!2d8.305982377429231!3d47.018541328399124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffb850a77b35d%3A0x1df9a8104e24d37b!2sBIKESCHMIEDE%20-%20Fahrradgesch%C3%A4ft%20%2F%20Bikefitting!5e0!3m2!1sde!2sch!4v1771950264182!5m2!1sde!2sch"
        loading="lazy"
        title="Standort Horw"
        referrerPolicy="no-referrer-when-downgrade"
        className={style.mapIframe}
      ></iframe>
    );
  }

  return (
    <div
      onClick={() => setShowMap(true)}
      className={style.mapIframe}
      style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
    >
      <Image
        loader={cloudinaryLoader}
        className={style.image}
        src={
          'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774636091/preview_maps_gfzj4v.png'
        }
        alt={'Google Maps Vorschaubild'}
        width={530}
        height={401}
        quality={60}
        sizes="(max-width: 468px) 410px, (max-width: 768px) 650px, (max-width: 1200px) 530px, 100vw"
        priority={false}
      />
    </div>
  );
};

export default MapFacade;
