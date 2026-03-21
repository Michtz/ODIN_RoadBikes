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
  data: GeometryData;
}

const ProductPageContainer: FC<ProductPageContainerProps> = ({
  view,
  data,
}) => {
  return (
    <>
      <StickyImageContainer image={data.imageUrlFrame} title={view} />
      <OverlayContainer border={false} key={0}>
        <ContentContainer
          title={'Beste Geometry zum klettern'}
          text={data.firstText}
          buttonText={'Unsere Bikes'}
          buttonSide={'right'}
          containerPlacement={'fullWith'}
          href={'/bikes/roadbikes'}
        />
      </OverlayContainer>
      <div style={{ height: '700px' }}></div>
      <OverlayContainer border={false} key={1}>
        <MidScrollVideoPlayer
          videoSrc={
            'https://res.cloudinary.com/de2rhuwpw/video/upload/v1774111520/output_smooth_assembly_odin_white_jtojti.webm'
          }
        />
      </OverlayContainer>

      <OverlayContainer border={false} key={3}>
        <Title> Geometry </Title>
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <GeometryTable data={data} />
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
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
      <OverlayContainer border={false}>
        <Calculator />
      </OverlayContainer>
    </>
  );
};

export default ProductPageContainer;
