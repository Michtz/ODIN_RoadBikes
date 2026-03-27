import React, { FC } from 'react';
import OverlayContainer from '@/components/system/containers/OverlayContainer';
import { ContentContainer } from '@/components/system/containers/Containers';
import { ImageContainer } from '@/components/system/containers/ImageContainer';
import ScrollStaggeredGrid from '@/components/system/imageGridContainer/ScrollStaggeredGrid';

const AboutUsContainer: FC = () => {
  return (
    <>
      <div style={{ height: '200px' }}></div>
      <OverlayContainer border={false}>
        <ContentContainer
          title="Über uns"
          text="OdinBikes wurde in Horw bei Luzern gegründet und entstand aus dem Gefühl heraus, dass dem Fahrradmarkt etwas fehlt. Es fehlt die Flexibilität der traditionellen Fahrradmarken. Viel Geld für ein Fahrrad ausgeben, das serienmäßig ab Werk kommt. Dabei ging es nicht nur um die Teile. Sondern um die Maße des Lenkers, einen serienmäßigen Sattel usw. usw. Aber wir Menschen sind alle unterschiedlich. Oft müssen, wenn ein Kunde perfekt auf dem Fahrrad sitzen will, noch viele teure Anpassungen vorgenommen werden: ein anderer Lenker, Sattel, eine andere Kurbelgarnitur oder andere Übersetzungsverhältnisse. Unser Gedanke war: Warum machen wir es nicht gleich richtig! Und das alles zu einem normalen Preis."
          containerPlacement="fullWith"
        />
      </OverlayContainer>

      <OverlayContainer>
        <ImageContainer imageRight="https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097089/035_detail_odin_green_sdr_original_sdcvwk.avif" />
      </OverlayContainer>

      <OverlayContainer>
        <ContentContainer
          title="Fahrradland, Aufkleberland"
          text="In der Fahrradwelt sieht alles gleich aus. Für die Kunden ist der Unterschied oft nur ein Aufkleber. Aber was bleibt noch übrig, wenn man den Aufkleber entfernt? Was steckt wirklich hinter dem Aufkleber, wie ist die Qualität und was muss man dafür bezahlen? Ein Gedanke, über den viele Kunden nicht nachdenken, mit dem wir uns aber sehr wohl beschäftigen. Unsere Stärke liegt darin, die richtigen Lieferanten und Produkte zusammenzubringen, damit Sie ein faires und qualitativ hochwertiges Produkt erhalten. Denken Sie dabei an unsere handgefertigten Laufradsätze, bei denen wir Speichen, Felgen und Naben verschiedener Hersteller wie DT-Swiss und Sapin kombinieren, damit unsere Kunden das Maximum für ihr Geld bekommen."
          containerPlacement="fullWith"
        />
      </OverlayContainer>
      <ImageContainer imageRight="https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097088/036_detail_odin_blue_sdr_original_yhdvlg.avif" />
      <OverlayContainer>
        <ContentContainer
          title="Unser Ziel"
          text="Unser Ziel ist es, Radfahrern Freude am Fahren mit einem Produkt zu bereiten, das sowohl hinsichtlich der Sitzposition als auch des Preis-Leistungs-Verhältnisses zu 100 % überzeugt. Wir möchten unseren Kunden viele sichere und angenehme Kilometer auf ihren Strecken ermöglichen. Dabei ist uns jeder Kunde wichtig, und wir sind offen für jedes Fahrradziel, das unsere Kunden verfolgen."
          containerPlacement="fullWith"
        />
      </OverlayContainer>
      <OverlayContainer>
        <ScrollStaggeredGrid
          imagesArray={[
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097131/007_bike_frame_blue_sdr_original_yhp5tu.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097138/003_bike_frame_green_sdr_original_ajv1po.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097141/001_bike_frame_green_sdr_original_nnpybn.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097096/029_full_bike_grey_sdr_original_wvw0ev.avif',

            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097119/014_bike_frame_grey_sdr_original_xu99rb.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097128/009_bike_frame_blue_sdr_original_ansqre.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097109/021_bike_frame_white_sdr_original_s3mfxv.avif',
            'https://res.cloudinary.com/de2rhuwpw/image/upload/v1774097128/009_bike_frame_blue_sdr_original_ansqre.avif',

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

export default AboutUsContainer;
