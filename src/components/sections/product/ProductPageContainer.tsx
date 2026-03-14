'use client';
import React, { FC } from 'react';

import OverlayContainer, {
  ContentContainer,
} from '@/components/system/containers/Containers';
import MidScrollVideoPlayer from '@/components/system/videoPlayer/MidScrollVideoPlayer';
import ScrollDeepDiveBike from '@/components/system/scrollDeepDive/ScrollDeepDive';
import StickyImageContainer from '@/components/system/stickyImage/StickyImageContainer';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';
import Calculator from '@/components/system/calculator/Calculator';
import FrameDetails from '@/components/sections/product/framerDetails/FrameDetails';
import GeometryTable from '@/components/sections/product/geometryTable/GeometryTable';

export const PLACHOLDERTEXT: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`;

interface ProductPageContainerProps {
  view: string;
}

const ProductPageContainer: FC<ProductPageContainerProps> = ({ view }) => {
  // const contentTriggerRef = useRef<HTMLDivElement>(null);
  const image1 = '/assets/bike_frames/transparent/DSCF5378.png';

  const data = {
    versions: [
      {
        name: 'Normal Weight Version (Latex)',
        model: '316',
        size: '560',
        weight: '1008 (Including Fittings)',
        rigidity: {
          headtube: '116',
          bottomBracket: '181',
          dropout: '63',
        },
      },
      {
        name: 'Light Weight Version (Latex)',
        model: '316',
        size: '560',
        weight: '890 (Including Fittings)',
        rigidity: {
          headtube: '116',
          bottomBracket: '181',
          dropout: '70',
        },
      },
    ],
    testItems: [
      {
        name: 'Drop Impact Test',
        status: 'pass',
        standard: 'EN raised to 256 height',
      },
      {
        name: 'Front Forward Test',
        status: 'pass',
        standard: 'EN raised to 300 height',
      },
      { name: 'Back Forward Test', status: 'pass', standard: '250 height' },
      {
        name: 'Disc Brake Fatigue Test',
        status: 'pass',
        standard: 'Standard 24000 times for each 600N/800N',
      },
      {
        name: 'Vertical Force Fatigue Test of Frame Seattube',
        status: 'pass',
        standard: 'EN standard 122kgf 500000 times',
      },
      {
        name: 'Horizontal Force Fatigue Test of Frame',
        status: 'pass',
        standard: 'EN standard +122.4kgf/-61.2kgf 50000 times',
      },
      {
        name: 'Fatigue Test of Frame Treading Force',
        status: 'pass',
        standard: '122kg f 100000 times',
      },
      {
        name: 'Seattube Strength Test',
        status: 'pass',
        standard: '300kg f above',
      },
      { name: 'Headtube Strength Test', status: 'pass', standard: '300kgf ↑' },
      {
        name: 'BottomBracket Compression Test',
        status: 'pass',
        standard: '500kgf ↑',
      },
      {
        name: 'Vibration Fatigue Load Test',
        status: 'pass',
        standard: 'EN standard ST:30kg/BB:22.5kg/HT:10kg 30000 times',
      },
    ],
    details: [
      { label: 'Material', value: 'Toray prepreg' },
      {
        label: 'Headset size',
        value: 'top 1-1/2 down 1-1/2 (special used headset)',
      },
      { label: 'Seatpost', value: '400mm (special used)' },
      {
        label: 'Handlebar',
        value:
          'monocoque handlebar matched with Tien Hsin(FSA-ACR) full internal cable routing',
      },
      { label: 'BB', value: 'BB86' },
      { label: 'Size', value: '46/49/52/54/56/58' },
      { label: 'Brake', value: 'Flat mount Disc Brake' },
      {
        label: 'Fork spacer',
        value: '100*12mm (Flat mount disc brake 140 and 160 interchange)',
      },
      { label: 'Frame rear spacer', value: '142*12mm (Flat mount disc brake)' },
      { label: 'Cable routing', value: 'full internal cable routing' },
      { label: 'Max tire', value: '700*32C' },
    ],
    description: [
      'The carbon endurance bike frame is a high-performance and lightweight component designed for long-distance cycling. Made from advanced carbon fiber materials, it offers excellent durability and rigidity while keeping the weight to a minimum.',
      'This bike frame is engineered to provide a smooth and comfortable ride, even on challenging terrains. Its aerodynamic shape reduces wind resistance, allowing you to ride faster with less effort.',
      'The carbon endurance bike frame also features precise handling and stability, ensuring a safe and enjoyable cycling experience. It is compatible with a wide range of components, allowing you to customize your bike to your specific needs.',
      'Whether you are a professional cyclist or an enthusiast, this carbon endurance bike frame is an ideal choice for those looking to push their limits and take on long rides with confidence.',
    ],
    keywords: [
      'carbon gravel bike frame',
      'carbon MTB bike frame',
      'carbon road bike fork',
      'carbon kids bike',
      'disc brake road bike frame',
    ],
  };

  const data2 = {
    imageUrl: '/assets/gravity_frame_geometry.png',
    imageAlt: 'Bicycle Geometry Diagram',
    headers: [
      'SIZE',
      'ST',
      'TT',
      'HT',
      'HA',
      'CA',
      'BB',
      'RC',
      'FC',
      'OFFSETE',
      'WB',
      'STACK',
      'REACH',
    ],
    rows: [
      [
        '46',
        '435',
        '501',
        '95',
        '70.5°',
        '75.5°',
        '72',
        '406',
        '574',
        '45',
        '968',
        '502',
        '371',
      ],
      [
        '49',
        '445',
        '515',
        '105',
        '71°',
        '75°',
        '72',
        '406',
        '579',
        '45',
        '974',
        '513',
        '378',
      ],
      [
        '52',
        '465',
        '531',
        '115',
        '71.5°',
        '74°',
        '72',
        '406',
        '582',
        '45',
        '977',
        '524',
        '380',
      ],
      [
        '54',
        '485',
        '543',
        '135',
        '72°',
        '74°',
        '72',
        '406',
        '591',
        '45',
        '984',
        '545',
        '386',
      ],
      [
        '56',
        '505',
        '562',
        '155',
        '72.5°',
        '73.5°',
        '72',
        '406',
        '599',
        '45',
        '985',
        '565',
        '395',
      ],
      [
        '58',
        '525',
        '577',
        '175',
        '72.5°',
        '73.5°',
        '72',
        '406',
        '615',
        '45',
        '1010',
        '585',
        '404',
      ],
    ],
  };
  return (
    <>
      <StickyImageContainer image={image1} title={view} />
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
        <ScrollDeepDiveBike imageSrc={image1} title={view} />
      </OverlayContainer>

      <OverlayContainer border={false} key={3}>
        <ContentContainer title={'Informationen & Geometry'} />
      </OverlayContainer>

      <OverlayContainer border={false} key={4}>
        <FrameDetails data={data} />
      </OverlayContainer>
      <OverlayContainer border={false} key={4}>
        <GeometryTable data={data2} />
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
