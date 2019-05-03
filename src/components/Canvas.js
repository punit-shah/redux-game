import React, { forwardRef } from 'react';
import { number, func } from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';

const Canvas = forwardRef(({ angle, trackMouse }, ref) => {
  const viewBox = [
    -window.innerWidth / 2, // min-x
    -window.innerHeight + 100, // min-y
    window.innerWidth, // width
    window.innerHeight, // height
  ];
  return (
    <svg
      id="canvas"
      preserveAspectRatio="xMaxYMax"
      viewBox={viewBox}
      onMouseMove={trackMouse}
      ref={ref}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={9000} />
      <FlyingObject position={{ x: -150, y: -300 }} />
      <FlyingObject position={{ x: 150, y: -300 }} />
      <Heart position={{ x: window.innerWidth / 2 - 40, y: 45 }} />
      <StartGame
        onClick={() => {
          console.log('start!');
        }}
      />
    </svg>
  );
});

Canvas.propTypes = {
  angle: number.isRequired,
  trackMouse: func.isRequired,
};

export default Canvas;
