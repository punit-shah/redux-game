import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Ground = () => {
  const style = { fill: '#77889c' };

  return (
    <g id="Ground">
      <rect
        id="Ground-bg"
        data-name="ground"
        style={style}
        x={-(skyAndGroundWidth / 2)}
        y={0}
        width={skyAndGroundWidth}
        height={100}
      />
    </g>
  );
};

export default Ground;
