import React from 'react';
import { number } from 'prop-types';
import { pathFromCubicBezierCurve } from '../utils/formulas';

const CannonPipe = ({ rotation }) => {
  const transform = `rotate(${rotation}, 0, 0)`;
  const width = 40;
  const halfWidth = width / 2;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: { x: -halfWidth, y: -yBasis },
    initialControlPoint: { x: -40, y: height * 1.7 },
    endingControlPoint: { x: 80, y: height * 1.7 },
    endingAxis: { x: width, y: 0 },
  };

  return (
    <g transform={transform}>
      <path
        style={{
          fill: '#000',
          stroke: '#f54997',
          strokeWidth: '2px',
        }}
        d={pathFromCubicBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfWidth}
        y1={-yBasis}
        x2={halfWidth}
        y2={-yBasis}
        style={{ stroke: '#f54997', strokeWidth: '2px' }}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: number.isRequired,
};

export default CannonPipe;
