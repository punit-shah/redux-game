import React from 'react';
import { pathFromCubicBezierCurve } from '../utils/formulas';

const CannonBase = () => {
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
        style={{ fill: '#f54997', stroke: '#d52977', strokeWidth: '2px' }}
        d={pathFromCubicBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfWidth}
        y1={height}
        x2={halfWidth}
        y2={height}
        style={{ stroke: '#d52977', strokeWidth: '2px' }}
      />
    </g>
  );
};

export default CannonBase;
