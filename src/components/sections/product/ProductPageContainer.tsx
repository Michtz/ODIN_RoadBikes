'use client';
import React, { FC } from 'react';

import OverlayContainer, {
  ContentContainer,
  Title,
} from '@/components/system/containers/Containers';
import MidScrollVideoPlayer from '@/components/system/videoPlayer/MidScrollVideoPlayer';
import ScrollDeepDiveBike from '@/components/system/scrollDeepDive/ScrollDeepDive';
import StickyImageContainer from '@/components/system/stickyImage/StickyImageContainer';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';
import Calculator from '@/components/system/calculator/Calculator';
import GeometryTable from '@/components/sections/product/geometryTable/GeometryTable';
import { GeometryData } from '@/data/gravity_data';

export const PLACHOLDERTEXT: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`;

interface ProductPageContainerProps {
  view: string;
  gravityGeometry: GeometryData;
}

const ProductPageContainer: FC<ProductPageContainerProps> = ({
  view,
  gravityGeometry,
}) => {
  // const contentTriggerRef = useRef<HTMLDivElement>(null);
  const slideCarbonFrame = '/assets/bike_frames/transparent/DSCF5378.png';

  return (
    <>
      <StickyImageContainer image={slideCarbonFrame} title={view} />
      <OverlayContainer border={false} key={0}>
        <ContentContainer
          title={'Beste Geometry zum klettern'}
          text={PLACHOLDERTEXT}
          buttonText={'Unsere Bikes'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <div style={{ height: '700px' }}></div>
      <OverlayContainer border={false} key={1}>
        <MidScrollVideoPlayer
          videoSrc={'assets/output_smooth_assembly_odin_white.mp4'}
        />
      </OverlayContainer>
      <OverlayContainer border={false} key={2}>
        <ScrollDeepDiveBike imageSrc={slideCarbonFrame} title={view} />
      </OverlayContainer>

      <OverlayContainer border={false} key={3}>
        <Title> Geometry </Title>
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <GeometryTable data={gravityGeometry} />
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <ScrollStaggeredGrid
          imagesArray={[
            '/assets/bike_frames/014_DSCF5378_edit.jpg',
            '/assets/bike_frames/002_DSCF5367_edit.jpg',
            '/assets/bike_frames/008_DSCF5371_edit.jpg',
            '/assets/bike_frames/019_DSCF5360_edit.jpg',

            '/assets/bike_frames/015_DSCF5391_edit.jpg',
            '/assets/bike_frames/003_DSCF5402_edit.jpg',
            '/assets/bike_frames/009_DSCF5395_edit.jpg',
            '/assets/bike_frames/020_DSCF5364_edit.jpg',

            '/assets/bike_frames/013_DSCF5356_edit.jpg',
            '/assets/bike_frames/001_DSCF5347_edit.jpg',
            '/assets/bike_frames/007_DSCF5350_edit.jpg',
            '/assets/bike_frames/021_DSCF5398_edit.jpg',
          ]}
        />
      </OverlayContainer>
      <OverlayContainer border={false}>
        <Calculator />
      </OverlayContainer>
    </>
  );
};

export default ProductPageContainer;
