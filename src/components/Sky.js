import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = () => {
  const height = 1200;

  return (
    <>
      <defs>
        <linearGradient id="skyGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#131862" />
          <stop offset="25%" stopColor="#2e4482" />
          <stop offset="70%" stopColor="#546bab" />
          <stop offset="85%" stopColor="#bea9de" />
        </linearGradient>
      </defs>
      <rect
        style={{ fill: 'url("#skyGradient")' }}
        x={-(skyAndGroundWidth / 2)}
        y={-height + 100}
        width={skyAndGroundWidth}
        height={height}
      />
    </>
  );
};

export default Sky;
