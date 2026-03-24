import { ImageResponse } from 'next/og';
import OdinLogo from '@/components/icons/OdinLogo';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 80,
        background: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D0D0D0',
        fontWeight: 'bold',
        borderRadius: '20%',
      }}
    >
      <OdinLogo />
    </div>,
    {
      ...size,
    },
  );
}
