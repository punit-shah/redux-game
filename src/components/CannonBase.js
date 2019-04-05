import React from 'react';
import { pathFromCubicBezierCurve } from '../utils/formulas';

const CannonBase = () => {
  const style = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };
  const width = 80;
  const halfWidth = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: { x: -halfWidth, y: height },
    initialControlPoint: { x: 20, y: negativeHeight },
    endingControlPoint: { x: 60, y: negativeHeight },
    endingAxis: { x: width, y: 0 },
  };

  return (
    <g>
      <path
        style={style}
        d={pathFromCubicBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfWidth}
        y1={height}
        x2={halfWidth}
        y2={height}
        style={style}
      />
    </g>
  );
};

export default CannonBase;
