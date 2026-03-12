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

export const LOREM_IPSUM_TITLE: string = 'Lorem Ipsum ';
export const LOREM_IPSUM_SHORT_TEXT: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

const HomeContainer: FC<HomeContainerProps> = () => {
  const image1 = '/assets/odin_edited_frame_violet.jpg';
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
        <ImageContainer buttonText={'Mehr Rahmen'} buttonSide={'center'} />
      </OverlayContainer>
      <OverlayContainer>
        <ContentContainer
          title="Gravity"
          text="Das echte Bergziegen-Modell in unserer Kollektion. Ein leichter Rahmen in Ihren Wunschfarben mit steifem Tretlagerbereich – jeder Pedaltritt sitzt. Dank der kletterfreundlichen Geometrie der perfekte Rahmen, um die Berge zu bezwingen."
          buttonText={'ZUM GRAVITY'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes/gravity'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ImageContainer buttonText={'Zum Gravity'} buttonSide={'center'} />
      </OverlayContainer>
      <OverlayContainer>
        <ContentContainer
          title="Drift"
          text="Die Rennmaschine. Eine fahrerfreundlichere Geometrie als bei vielen anderen Marken sorgt für ein schönes Rennrad, das sich hervorragend klettern lässt. Entwickelt mit all unserer Erfahrung aus dem Bikefitting."
          buttonText={'Zum Drft'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <OverlayContainer>
        <ImageContainer />
      </OverlayContainer>
      <OverlayContainer>
        <Calculator />
      </OverlayContainer>
      <OverlayContainer>
        <ScrollStaggeredGrid
          imagesArray={[
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
            image1,
          ]}
        />
      </OverlayContainer>
    </>
  );
};

export default HomeContainer;
