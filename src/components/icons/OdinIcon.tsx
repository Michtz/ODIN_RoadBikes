import { FC } from 'react';
import { SvgIconProps } from '@/types/common';

const OdinIcon: FC<SvgIconProps> = ({
  width = 582,
  height = 777,
  color = '#F4F4F4',
  className,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 582 777"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rounded rectangle */}
      <rect
        x="32.5"
        y="32.5"
        width="517"
        height="712"
        rx="141.5"
        stroke={color}
        strokeWidth="65"
      />
      {/* Vertical line */}
      <line
        x1="354.5"
        y1="100"
        x2="354.5"
        y2="665"
        stroke={color}
        strokeWidth="65"
      />
      {/* Diagonal line */}
      <line
        x1="22.6669"
        y1="135.709"
        x2="358.667"
        y2="462.709"
        stroke={color}
        strokeWidth="65"
      />
    </svg>
  );
};

export default OdinIcon;
