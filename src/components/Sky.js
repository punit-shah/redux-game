import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = () => {
  const style = { fill: '#30abef' };
  const height = 1200;

  return (
    <rect
      style={style}
      x={-(skyAndGroundWidth / 2)}
      y={-height + 100}
      width={skyAndGroundWidth}
      height={height}
    />
  );
};

export default Sky;
