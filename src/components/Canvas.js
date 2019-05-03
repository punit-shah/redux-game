import React, { forwardRef } from 'react';
import { number, func, shape, bool, arrayOf } from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';

const Canvas = forwardRef(
  ({ angle, trackMouse, gameState, startGame }, ref) => {
    const { started, flyingObjects } = gameState;

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
            {flyingObjects.map(({ id, position }) => (
              <FlyingObject key={id} position={position} />
            ))}
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
    flyingObjects: arrayOf(
      shape({
        position: shape({
          x: number.isRequired,
          y: number.isRequired,
        }).isRequired,
        id: number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  startGame: func.isRequired,
  trackMouse: func.isRequired,
};

export default Canvas;
