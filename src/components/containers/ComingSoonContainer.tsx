import React, { FC } from 'react';
import ScrollHeroVideo from '@/components/system/scorllVideoHero/ScrollHeroVideo';
import { LOREM_IPSUM_SHORT_TEXT } from '@/components/containers/HomeContainer';
import OverlayContainer, {
  ContentContainer,
} from '@/components/system/containers/Containers';

const ComingSoonContainer: FC = () => {
  return (
    <>
      <ScrollHeroVideo
        botsOnlyText={LOREM_IPSUM_SHORT_TEXT}
        videoSrc="/assets/output_smooth.mp4"
      />

      <OverlayContainer border={false}>
        <ContentContainer
          title="Coming Soon"
          text="Entdecken Sie die perfekte Synergie aus Leistung und Design. Unsere handgefertigten Carbonrahmen sind für diejenigen gebaut, die auf jeder Strasse Exzellenz verlangen."
        />
      </OverlayContainer>
    </>
  );
};

export default ComingSoonContainer;
