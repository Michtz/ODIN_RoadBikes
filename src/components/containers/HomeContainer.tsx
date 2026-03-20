import React, { FC } from 'react';
import OverlayContainer, {
  ContentContainer,
  ImageContainer,
} from '@/components/system/containers/Containers';
import ScrollHeroVideo from '@/components/system/scorllVideoHero/ScrollHeroVideo';
import Calculator from '@/components/system/calculator/Calculator';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';

/* video  DO NOT DELETE!!!!!!!!!!!!!!!!!! edit prompt MacBook-Pro assets % ffmpeg -i odin_animatie.mp4   -c:v libx264 -x264-params keyint=1:scenecut=0 -crf 22 -preset medium -an output_smooth_odin_frame.mp4*/

interface HomeContainerProps {}

export const LOREM_IPSUM_SHORT_TEXT: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

const HomeContainer: FC<HomeContainerProps> = () => {
  return (
    <>
      <ScrollHeroVideo
        botsOnlyText={LOREM_IPSUM_SHORT_TEXT}
        videoSrc="/assets/output_smooth.mp4"
      />
      <OverlayContainer border={false}>
        <ContentContainer
          title="Mehr als ein Rennrad"
          text="Unbegrenzte Möglichkeiten – dafür stehen wir: Ihr Design, Ihre Komponenten und auf Ihren Körperbau zugeschnitten! Ein Komplettpaket zu einem normalen Preis. Wir stellen Ihr Traumfahrrad zusammen für beste Ergonomie, Aerodynamik und maximalen Fahrspass."
          buttonText={'Unsere Bikes'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ImageContainer
          imageRight={'001_bike_frame_green_sdr'}
          imageLeft={'odin_frame_holand_ai'}
          leftAI
          buttonText={'Mehr Rahmen'}
          buttonSide={'center'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ContentContainer
          title="Gravity"
          text="Das echte Bergziegen-Modell in unserer Kollektion. Ein leichter Rahmen in Ihren Wunschfarben mit steifem Tretlagerbereich – jeder Pedaltritt sitzt. Dank der kletterfreundlichen Geometrie der perfekte Rahmen, um die Berge zu bezwingen."
          buttonText={'Zum Gravity'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes/gravity'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ImageContainer
          imageRight={'007_bike_frame_blue_sdr'}
          imageLeft={'odin_frame_yellow_gravity_ai'}
          leftAI
          buttonText={'Mehr zum Gravity'}
          buttonSide={'center'}
          href={'/bikes/roadbikes/gravity'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ContentContainer
          title="Slide"
          text="Die Rennmaschine, so sieht sie in jedem Fall aus. Der Vorteil dieses Rahmens gegenüber vielen anderen Marken von Rennrädern ist, dass die Geometrie freundlicher ist als bei anderen. Der Vorteil ist, dass Sie ein schönes Rennrad haben, das sich auch gut klettern lässt. Aus unserer Erfahrung mit Bikefitting wissen wir, dass die meisten"
          buttonText={'Zum Slide'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes/slide'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ImageContainer
          imageRight={'013_bike_frame_grey_sdr'}
          imageLeft={'odin_frame_jamaika_ai'}
          leftAI
          buttonText={'Mehr zum Slide'}
          buttonSide={'center'}
          href={'/bikes/roadbikes/slide'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <Calculator />
      </OverlayContainer>
      <OverlayContainer>
        <ScrollStaggeredGrid
          imagesArray={[
            '014_bike_frame_grey_sdr',
            '009_bike_frame_blue_sdr',
            '027_full_bike_white_side_sdr',
            '009_bike_frame_blue_sdr',

            '007_bike_frame_blue_sdr',
            '003_bike_frame_green_sdr',
            '001_bike_frame_green_sdr',
            '029_full_bike_grey_sdr',

            '013_bike_frame_grey_sdr',
            '008_bike_frame_blue_sdr',
            '025_full_bike_white_sdr',
            '003_bike_frame_green_sdr',
          ]}
        />
      </OverlayContainer>
    </>
  );
};

export default HomeContainer;
