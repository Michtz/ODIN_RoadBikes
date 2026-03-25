'use client';
import React, { FC } from 'react';
import OverlayContainer, {
  Container,
  ContentContainer,
  ImageContainer,
  Title,
} from '@/components/system/containers/Containers';
import ImageHoverTextContainer from '@/components/system/imageHoverTextContainer/ImageHoverTextContainer';
import ScrollHeroVideo from '@/components/system/scorllVideoHero/ScrollHeroVideo';
import { LOREM_IPSUM_SHORT_TEXT } from '@/components/containers/HomeContainer';
import Calculator from '@/components/system/calculator/Calculator';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';

const CategoriesContainer: FC = () => {
  const items: any[] = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096126/slide_frame_Black_1600px_k7dktj.png',
      alt: 'Odin Bike',
      title: 'Gravity',
      text: 'Der Name ist Programm: Geringes Gewicht und hohe Tretlagersteifigkeit machen diesen Rahmen perfekt für Bergauffahrten. Aufbauten unter 6 kg sind möglich. Verkauf ausschließlich mit individueller Wunschlackierung!',
      url: '/bikes/roadbikes/gravity',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096126/slide_frame_Black_1600px_k7dktj.png',
      alt: 'Odin Bike',
      title: 'Slide',
      text: 'Das Slide ist ein preisgünstiger Allrounder ab 2950 Franken. Etwas Aero, gepaart mit komfortabler Geometrie und 32 mm Reifenfreiheit, macht es zum perfekten Rennrad für lange Touren.',
      url: '/bikes/roadbikes/slide',
    },
  ];

  const items2: any[] = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774101514/odin_gravity_full_bike_ik76zq.png',
      alt: 'Odin Bike',
      title: 'Gravity',
      text: 'Der Name ist Programm: Geringes Gewicht und hohe Tretlagersteifigkeit machen diesen Rahmen perfekt für Bergauffahrten. Aufbauten unter 6 kg sind möglich. Verkauf ausschließlich mit individueller Wunschlackierung!',
      url: '/bikes/roadbikes/gravity',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774101848/odin_bike_full_red_slide_ie1zpo.png',
      alt: 'Odin Bike',
      title: 'Slide',
      text: 'Das Slide ist ein preisgünstiger Allrounder ab 2950 Franken. Etwas Aero, gepaart mit komfortabler Geometrie und 32 mm Reifenfreiheit, macht es zum perfekten Rennrad für lange Touren.',
      url: '/bikes/roadbikes/slide',
    },
  ];

  const content = (
    <>
      <Title>Rahmen Typen</Title>
      <ImageHoverTextContainer items={items} />
      <Title size={'small'}>Mehr kommen schon Bald...</Title>
    </>
  );
  const content2 = (
    <>
      <Title>Ganzes Rad</Title>
      <ImageHoverTextContainer items={items2} />
    </>
  );

  return (
    <Container padding={false} backgroundColor flow={'column'}>
      <ScrollHeroVideo
        footerText={'categories'}
        videoSrc="https://res.cloudinary.com/de2rhuwpw/video/upload/v1774111637/output_smooth_odin_drive_right_n39hub.webm"
        botsOnlyText={LOREM_IPSUM_SHORT_TEXT}
      />
      <OverlayContainer key={0}>
        <ContentContainer
          title="Dein nächstes Fahrrad"
          text="Individualität, Präzision & Langlebigkeit. Jedes Odin-Bike ist ein Zeugnis individueller Schweizer Handwerkskunst und unserer Leidenschaft für Perfektion."
          containerPlacement={'fullWith'}
        />
      </OverlayContainer>
      <OverlayContainer key={1}>
        <ImageContainer
          imageRight={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097141/001_bike_frame_green_sdr_original_nnpybn.avif'
          }
          imageLeft={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096124/odin_frame_red_ai_1600px_kpegs6.png'
          }
          priority={true}
        />
      </OverlayContainer>

      <OverlayContainer key={2}>{content}</OverlayContainer>

      <OverlayContainer key={3}>{content2}</OverlayContainer>

      <OverlayContainer>
        <ScrollStaggeredGrid
          imagesArray={[
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097119/014_bike_frame_grey_sdr_original_xu99rb.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097128/009_bike_frame_blue_sdr_original_ansqre.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097109/021_bike_frame_white_sdr_original_s3mfxv.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097128/009_bike_frame_blue_sdr_original_ansqre.avif',

            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097131/007_bike_frame_blue_sdr_original_yhp5tu.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097138/003_bike_frame_green_sdr_original_ajv1po.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097141/001_bike_frame_green_sdr_original_nnpybn.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097096/029_full_bike_grey_sdr_original_wvw0ev.avif',

            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097122/013_bike_frame_grey_sdr_original_riympp.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097129/008_bike_frame_blue_sdr_original_dr628j.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097102/025_full_bike_white_sdr_original_ztglp5.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097138/003_bike_frame_green_sdr_original_ajv1po.avif',
          ]}
        />
      </OverlayContainer>
      <OverlayContainer key={4} border={false}>
        <Calculator />
      </OverlayContainer>
    </Container>
  );
};

export default CategoriesContainer;
