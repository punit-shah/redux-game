import React, { forwardRef } from 'react';
import { number, func, shape, bool } from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';

const Canvas = forwardRef(
  ({ angle, trackMouse, gameState, startGame }, ref) => {
    const { started } = gameState;
    console.log(started);

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
        <CurrentScore score={9000} />
        {started ? (
          <g>
            <FlyingObject position={{ x: -150, y: -300 }} />
            <FlyingObject position={{ x: 150, y: -300 }} />
          </g>
        ) : (
          <g>
            <StartGame onClick={() => startGame()} />
          </g>
        )}
      </svg>
    );
  }
);

Canvas.propTypes = {
  angle: number.isRequired,
  gameState: shape({
    started: bool.isRequired,
    kills: number.isRequired,
    lives: number.isRequired,
  }).isRequired,
  startGame: func.isRequired,
  trackMouse: func.isRequired,
};

export default Canvas;
