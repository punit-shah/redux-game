import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Ground = () => {
  const style = { fill: '#59a941' };
  const divisionStyle = {
    stroke: '#458232',
    strokeWidth: '3px',
  };

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
      <line
        x1={-(skyAndGroundWidth / 2)}
        y1={0}
        x2={skyAndGroundWidth / 2}
        y2={0}
        style={divisionStyle}
      />
    </g>
  );
};

export default Ground;
