import { Metadata } from 'next';
import DiaShowContainer from '@/components/system/diashowContainer/DiaShowContainer';

export const metadata: Metadata = {
  title: 'Gallery - OdinBikes',
  description:
    'OdinBikes - Individuelle Rennräder und Gravelbikes aus der Schweiz.',
};

export default function LegalPage() {
  return (
    <DiaShowContainer
      fullScreen
      images={[
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
  );
}
