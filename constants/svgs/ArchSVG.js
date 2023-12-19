import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ArchSVG = ({ size = "200", color = "#000" }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={color}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Path
        d="M100 190A90 90 0 0 1 100L100 100z"
        transform="rotate(90 100 100)"
      />
    </Svg>
  );
};

export default ArchSVG;

