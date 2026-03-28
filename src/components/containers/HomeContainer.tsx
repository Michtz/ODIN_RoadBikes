import { FC } from 'react';
import OverlayContainer from '@/components/system/containers/OverlayContainer';
import { ContentContainer } from '@/components/system/containers/Containers';
import { ImageContainer } from '@/components/system/containers/ImageContainer';
import ScrollHeroVideo from '@/components/system/scorllVideoHero/ScrollHeroVideo';
import Calculator from '@/components/system/calculator/CalculatorClient';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';

/* video  DO NOT DELETE!!!!!!!!!!!!!!!!!! edit prompt MacBook-Pro assets % ffmpeg -i odin_animatie.mp4   -c:v libx264 -x264-params keyint=1:scenecut=0 -crf 22 -preset medium -an output_smooth_odin_frame.mp4*/

const HomeContainer: FC = () => {
  return (
    <>
      <ScrollHeroVideo
        footerText={'home'}
        botsOnlyText={'Custom Carbon Rennräder zu fairen Preisen'}
        videoSrc="https://res.cloudinary.com/de2rhuwpw/video/upload/v1774643150/output_smooth_jnmc8y.webm"
      />

      <OverlayContainer border={false} key={1}>
        <ContentContainer
          title="Mehr als ein Rennrad"
          text="Unbegrenzte Möglichkeiten – dafür stehen wir: Ihr Design, Ihre Komponenten und auf Ihren Körperbau zugeschnitten! Ein Komplettpaket zu einem normalen Preis. Wir stellen Ihr Traumfahrrad zusammen für beste Ergonomie, Aerodynamik und maximalen Fahrspass."
          buttonText={'Unsere Bikes'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <OverlayContainer key={2}>
        <ImageContainer
          title="OdinBikes Custom Rennrad – Rahmen in Grün"
          imageRight={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097141/001_bike_frame_green_sdr_original_nnpybn.avif'
          }
          imageLeft={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096125/odin_frame_holand_ai_1600px_xtlma8.png'
          }
          priority
        />
      </OverlayContainer>
      <OverlayContainer key={3}>
        <ContentContainer
          title="Gravity"
          text="Das echte Bergziegen-Modell in unserer Kollektion. Ein leichter Rahmen in Ihren Wunschfarben mit steifem Tretlagerbereich – jeder Pedaltritt sitzt. Dank der kletterfreundlichen Geometrie der perfekte Rahmen, um die Berge zu bezwingen."
          buttonText={'Zum Gravity'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes/gravity'}
        />
      </OverlayContainer>
      <OverlayContainer key={4}>
        <ImageContainer
          title="OdinBikes Gravity Rennrad – Rahmen in Blau und Gelb"
          imageRight={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096124/odin_frame_blue_gravity_ai_1600px_wxklsm.png'
          }
          imageLeft={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096125/odin_frame_yellow_gravity_ai_1600px_v48h61.png'
          }
        />
      </OverlayContainer>
      <OverlayContainer key={5}>
        <ContentContainer
          title="Slide"
          text="Die Rennmaschine, so sieht sie in jedem Fall aus. Der Vorteil dieses Rahmens gegenüber vielen anderen Marken von Rennrädern ist, dass die Geometrie freundlicher ist als bei anderen. Der Vorteil ist, dass Sie ein schönes Rennrad haben, das sich auch gut klettern lässt. Aus unserer Erfahrung mit Bikefitting wissen wir, dass die meisten"
          buttonText={'Zum Slide'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes/slide'}
        />
      </OverlayContainer>
      <OverlayContainer key={6}>
        <ImageContainer
          title="OdinBikes Slide Rennrad – Rahmen in Grau und Jamaica-Design"
          imageRight={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097122/013_bike_frame_grey_sdr_original_riympp.avif'
          }
          imageLeft={
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774096125/odin_frame_jamaika_ai_1600px_yi8ylq.png'
          }
        />
      </OverlayContainer>
      <OverlayContainer key={7}>
        <Calculator />
      </OverlayContainer>
      <OverlayContainer key={8}>
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
    </>
  );
};

export default HomeContainer;
