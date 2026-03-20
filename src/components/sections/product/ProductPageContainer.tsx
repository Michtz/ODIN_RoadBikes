'use client';
import React, { FC } from 'react';

import OverlayContainer, {
  ContentContainer,
  Title,
} from '@/components/system/containers/Containers';
import MidScrollVideoPlayer from '@/components/system/videoPlayer/MidScrollVideoPlayer';
import StickyImageContainer from '@/components/system/stickyImage/StickyImageContainer';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';
import Calculator from '@/components/system/calculator/Calculator';
import GeometryTable from '@/components/sections/product/geometryTable/GeometryTable';
import { GeometryData } from '@/data/gravity_data';

export const PLACHOLDERTEXT: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`;

interface ProductPageContainerProps {
  view: string;
  geometry: GeometryData;
}

const ProductPageContainer: FC<ProductPageContainerProps> = ({
  view,
  geometry,
}) => {
  // const contentTriggerRef = useRef<HTMLDivElement>(null);
  const slideCarbonFrame = 'DSCF5378';

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

      <OverlayContainer border={false} key={3}>
        <Title> Geometry </Title>
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <GeometryTable data={geometry} />
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <ScrollStaggeredGrid
          imagesArray={[
            '007_bike_frame_blue_sdr',
            '003_bike_frame_green_sdr',
            '001_bike_frame_green_sdr',
            '029_full_bike_grey_sdr',

            '014_bike_frame_grey_sdr',
            '009_bike_frame_blue_sdr',
            '027_full_bike_white_side_sdr',
            '009_bike_frame_blue_sdr',

            '013_bike_frame_grey_sdr',
            '008_bike_frame_blue_sdr',
            '025_full_bike_white_sdr',
            '003_bike_frame_green_sdr',
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
