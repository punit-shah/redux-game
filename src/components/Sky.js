import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const height = 1200;

const Sky = () => (
  <g>
    <defs>
      <linearGradient id="skyGradient" gradientTransform="rotate(90)">
        <stop offset="5%" stopColor="#0c101c" />
        <stop offset="50%" stopColor="#1d0925" />
        <stop offset="95%" stopColor="#271a49" />
      </linearGradient>
    </defs>
    <rect
      style={{ fill: 'url("#skyGradient")' }}
      x={-(skyAndGroundWidth / 2)}
      y={-height + 100}
      width={skyAndGroundWidth}
      height={height}
    />
  </g>
);

export default Sky;
