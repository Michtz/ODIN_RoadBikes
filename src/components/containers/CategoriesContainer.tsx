'use client';
import React, { FC } from 'react';
import { PLACHOLDERTEXT } from '@/components/sections/product/ProductPageContainer';
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

const CategoriesContainer: FC = () => {
  const items: any[] = [
    {
      id: 1,
      image: 'slide_frame_Black',
      alt: 'Odin Bike',
      title: 'Gravity',
      text: PLACHOLDERTEXT,
      url: '/bikes/roadbikes/gravity',
    },
    {
      id: 2,
      image: 'slide_frame_Black',
      alt: 'Odin Bike',
      title: 'Slide',
      text: PLACHOLDERTEXT,

      url: '/bikes/roadbikes/slide',
    },
  ];
  const items2: any[] = [
    {
      id: 1,
      image: 'odin_frame_yellow_gravity_ai',
      alt: 'Odin Bike',
      title: 'Gravity',
      text: PLACHOLDERTEXT,
      url: '/bikes/roadbikes/gravity',
    },
    {
      id: 2,
      image: 'odin_edited_frame_violet',
      alt: 'Odin Bike',
      title: 'Slide',
      text: PLACHOLDERTEXT,

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
        videoSrc="/assets/output_smooth_odin_drive_right.mp4"
        botsOnlyText={LOREM_IPSUM_SHORT_TEXT}
      />
      <OverlayContainer key={0}>
        <ContentContainer
          title="Dein nächstes Fahrrad"
          text="Individualität, Präzision & Langlebigkeit. Jedes Odin-Bike ist ein Zeugnis individueller Schweizer Handwerkskunst und unserer Leidenschaft für Perfektion."
          buttonText={'Unsere Bikes'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <OverlayContainer key={1}>
        <ImageContainer
          imageRight={'001_bike_frame_green_sdr'}
          imageLeft={'odin_frame_holand_ai'}
          leftAI
          buttonText={'Mehr Rahmen'}
          buttonSide={'center'}
        />
      </OverlayContainer>

      <OverlayContainer key={2}>{content}</OverlayContainer>

      <OverlayContainer key={3}>{content2}</OverlayContainer>

      <OverlayContainer key={4} border={false}>
        <Calculator />
      </OverlayContainer>
    </Container>
  );
};

export default CategoriesContainer;
