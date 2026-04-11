import { ImageResponse } from 'next/og';
import OdinIcon from '@/components/icons/OdinIcon';

export const runtime = 'edge';

// Google-empfohlenes Vielfaches von 48px
export const size = {
  width: 96,
  height: 96,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#000000',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
      <OdinIcon width={76} height={76} color="#D0D0D0" />
    </div>,
    {
      ...size,
    },
  );
}
