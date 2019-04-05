import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Ground = () => {
  return (
    <g>
      <rect
        id="Ground-bg"
        data-name="ground"
        style={{ fill: '#0c101c', stroke: '#242833', strokeWidth: '1px' }}
        x={-(skyAndGroundWidth / 2)}
        y={0}
        width={skyAndGroundWidth}
        height={100}
      />
    </g>
  );
};

export default Ground;
