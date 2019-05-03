import React from 'react';
import { number, func } from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';

const Canvas = ({ angle, trackMouse }) => {
  const viewBox = [
    -(window.innerWidth / 2),
    -window.innerHeight + 100,
    window.innerWidth,
    window.innerHeight,
  ];
  return (
    <svg
      id="canvas"
      preserveAspectRatio="xMaxYMax"
      viewBox={viewBox}
      onMouseMove={trackMouse}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={9000} />
      <FlyingObject position={{ x: -150, y: -300 }} />
      <FlyingObject position={{ x: 150, y: -300 }} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: number.isRequired,
  trackMouse: func.isRequired,
};

export default Canvas;
