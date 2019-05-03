import React from 'react';
import { shape, number } from 'prop-types';
import { pathFromCubicBezierCurve } from '../utils/formulas';

const Heart = ({ position }) => {
  const { x, y } = position;
  const style = { fill: '#f54997', stroke: '#d52977', strokeWidth: '2px' };

  const leftCurve = pathFromCubicBezierCurve({
    initialAxis: { x, y },
    initialControlPoint: { x: -15, y: -15 },
    endingAxis: { x: 0, y: 25 },
    endingControlPoint: { x: -25, y: 10 },
  });
  const rightCurve = pathFromCubicBezierCurve({
    initialAxis: { x, y },
    initialControlPoint: { x: 15, y: -15 },
    endingAxis: { x: 0, y: 25 },
    endingControlPoint: { x: 25, y: 10 },
  });

  return (
    <g style={style}>
      <path d={leftCurve} />
      <path d={rightCurve} />
    </g>
  );
};

Heart.propTypes = {
  position: shape({
    x: number.isRequired,
    y: number.isRequired,
  }).isRequired,
};

export default Heart;
